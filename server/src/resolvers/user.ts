import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Resolver,
  Field,
  Arg,
  Ctx,
  Mutation,
  ObjectType,
  Query,
  FieldResolver,
  Root,
} from "type-graphql";
import argon2 from "argon2";
import { cookieName, FORGET_PASSWORD_PREFIX } from "../constants";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { validateRegister } from "../utils/validateRegister";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { createFieldError } from "../utils/createFieldError";

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    //This is the current user so it's okey to show his own email
    if (req.session.userId === user.id) {
      return user.email;
    }
    return "";
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length <= 5) {
      return createFieldError(
        "newPassword",
        "Password length must be greater than 5"
      );
    }
    const userId = await redis.get(`${FORGET_PASSWORD_PREFIX}${token}`);
    if (!userId) return createFieldError("token", "The token has expired");
    const userDbId = parseInt(userId);
    const user = await User.findOne(userDbId);

    if (!user) {
      return createFieldError("token", "User not found");
    }

    await User.update(
      { id: userDbId },
      { password: await argon2.hash(newPassword) }
    );

    req.session!.userId = user.id;

    redis.del(`${FORGET_PASSWORD_PREFIX}${token}`);

    return { user };
  }
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email: email } });
    if (!user) return false;
    const token = v4();
    await redis.set(
      `${FORGET_PASSWORD_PREFIX}${token}`,
      user.id,
      "ex",
      1000 * 60 * 60 * 1 // 1 day
    );
    sendEmail(
      user.email,
      `<a href="http://localhost:3000/change-password/${token}">Reset password</a>`
    );

    return true;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const error = validateRegister(options);
    if (error)
      return {
        errors: error,
      };
    const existingUser = await User.findOne({
      where: { username: options.username },
    });
    if (existingUser) {
      return {
        errors: [{ field: "username", message: "Username already exists" }],
      };
    }
    const existingEmail = await User.findOne({
      where: { email: options.email },
    });
    if (existingEmail) {
      return {
        errors: [{ field: "email", message: "Email already exists" }],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    const newUser = await User.create({
      username: options.username,
      password: hashedPassword,
      email: options.email,
    }).save();

    req.session!.userId = newUser.id;
    return { user: newUser };
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    return User.findOne(req.session.userId);
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({
      where: usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail },
    });
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "That username or email doesn't exist",
          },
        ],
      };
    }
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      return {
        errors: [
          {
            field: "password",
            message: "The password is incorrect",
          },
        ],
      };
    }

    req.session!.userId = user.id;
    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        if (err) {
          resolve(false);
          console.error(err);
          return;
        }
        res.clearCookie(cookieName);
        resolve(true);
      })
    );
  }
}
