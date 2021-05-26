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

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { em, redis, req }: MyContext
  ): Promise<UserResponse> {
    if (newPassword.length <= 5) {
      return createFieldError(
        "newPassword",
        "Password length must be greater than 5"
      );
    }
    const userId = await redis.get(`${FORGET_PASSWORD_PREFIX}${token}`);
    if (!userId) return createFieldError("token", "The token has expired");
    const user = await em.findOne(User, { id: parseInt(userId) });

    if (!user) {
      return createFieldError("token", "User not found");
    }

    user.password = await argon2.hash(newPassword);
    await em.persistAndFlush(user);

    req.session!.userId = user.id;

    redis.del(`${FORGET_PASSWORD_PREFIX}${token}`);

    return { user };
  }
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { em, redis }: MyContext
  ) {
    const user = await em.findOne(User, { email: email });
    if (!user) return false;
    console.log("hi");
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
    @Ctx() { req, em }: MyContext
  ): Promise<UserResponse> {
    const error = validateRegister(options);
    if (error)
      return {
        errors: error,
      };
    const existingUser = await em.findOne(User, { username: options.username });
    if (existingUser) {
      return {
        errors: [{ field: "username", message: "Username already exists" }],
      };
    }
    const existingEmail = await em.findOne(User, { email: options.email });
    if (existingEmail) {
      return {
        errors: [{ field: "email", message: "Email already exists" }],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    const newUser = em.create(User, {
      username: options.username,
      password: hashedPassword,
      email: options.email,
    });

    await em.persistAndFlush(newUser);
    req.session!.userId = newUser.id;
    return { user: newUser };
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { em, req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(
      User,
      usernameOrEmail.includes("@")
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
    );
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
