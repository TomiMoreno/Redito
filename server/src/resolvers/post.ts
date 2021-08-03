import { Post } from "../entities/Post";
import {
  Resolver,
  Query,
  Arg,
  Mutation,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
  FieldResolver,
  Root,
  ObjectType,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection, LessThan, MoreThan } from "typeorm";
import { Vote } from "../entities/Vote";

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  body: string;
}
@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];

  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  reducedBody(@Root() root: Post) {
    if (root.body.length > 50) {
      return root.body.slice(0, 50) + "...";
    }
    return root.body;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MyContext
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit) + 1;
    const realLimitPlusOne = realLimit + 1;
    const replacements: any[] = [realLimitPlusOne];
    let cursorIndex = 3
    if(req.session.userId) {
      replacements.push(req.session.userId)
    }
    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
      cursorIndex = replacements.length;
    }
    const posts = await getConnection().query(
      `
    select p.*,
    json_build_object(
      'id', u.id,
      'username', u.username,
      'email', u.email,
      'createdAt', u."createdAt",
      'updatedAt', u."updatedAt"
      ) creator,
      ${
        req.session.userId
          ? '(select value from vote where "userId" = $2 and "postId" = p.id) as "voteStatus"'
          : '0 as "voteStatus"'
      }
    from post p
    inner join public.user u on u.id = p."creatorId"
    ${cursor ? `where p."createdAt" < $${cursorIndex}` : ""}
    order by p."createdAt" DESC
    limit $1;
    `,
      replacements
    );

    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id, {relations: ["creator"]})
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("options") options: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({
      ...options,
      creatorId: req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("title", () => String, { nullable: true }) title: string,
    @Arg("id") id: number
  ): Promise<Post | null> {
    const post = await Post.findOne(id);
    if (!post) {
      return null;
    }
    if (typeof title !== undefined) {
      post.title = title;
      await Post.update({ id }, { title });
    }
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number): Promise<boolean> {
    Post.delete(id);
    return true;
  }
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg("value", () => Int) value: number,
    @Arg("postId", () => Int) postId: number,
    @Ctx() { req }: MyContext
  ) {
    const { userId } = req.session;
    try {
      let updateValue = 0;
      if (value > 0) {
        updateValue = 1;
        value = 1;
      }
      if (value < 0) {
        updateValue = -1;
        value = -1;
      }

      const previousVote = await Vote.findOne({ where: { postId, userId } });
      if (previousVote) {
        updateValue = -previousVote.value + value;
        await getConnection().transaction(async (tm) => {
          await tm.query(
            `
          update vote
          set value = $1
          where "postId" = $2 and "userId" = $3
              `,
            [value, postId, userId]
          );
          await tm.query(
            `
          update post
          set points = points + $1
          where id = $2
        `,
            [updateValue, postId]
          );
        });
      } else {
        await getConnection().transaction(async (tm) => {
          await tm.insert(Vote, { userId, postId, value });
          await tm.update(
            Post,
            { id: postId },
            { points: () => `points + ${updateValue}` }
          );
        });
      }
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }
}
