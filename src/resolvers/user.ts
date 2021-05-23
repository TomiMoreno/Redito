import { User } from "../entities/User";
import { MyContext } from "src/types";
import {
  Resolver,
  InputType,
  Field,
  Arg,
  Ctx,
  Mutation,
  ObjectType,
} from "type-graphql";
import argon2 from "argon2";
import e from "express";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

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
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "Username length must be greater than 2",
          },
        ],
      };
    }
    if (options.password.length <= 5) {
      return {
        errors: [
          {
            field: "password",
            message: "Password length must be greater than 5",
          },
        ],
      };
    }
    const existingUser = await em.findOne(User, { username: options.username });
    if (existingUser) {
      return {
        errors: [{ field: "username", message: "Username already exists" }],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    const newUser = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });

    await em.persistAndFlush(newUser);

    return { user: newUser };
  }
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [{ field: "username", message: "That username doesn't exist" }],
      };
    }
    const isValidPassword = await argon2.verify(
      user.password,
      options.password
    );
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
    return { user };
  }
}
