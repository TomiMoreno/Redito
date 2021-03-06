import {
  fetchExchange,
  dedupExchange,
  Exchange,
  stringifyVariables,
  gql,
} from "urql";
import { Cache, cacheExchange, Resolver } from "@urql/exchange-graphcache";
import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
  VoteMutationVariables,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { pipe, tap } from "wonka";
import router from "next/router";
import { isServer } from "./isServer";

export const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        if (error) {
          console.log(error);
          if (error.message.includes("Not authenticated"))
            router.replace("/login");
        }
      })
    );
  };

const invalidateAllPosts = (cache: Cache) => {
  const allFields = cache.inspectFields("Query");
    const fieldInfos = allFields.filter(
      (info) => info.fieldName === "posts"
    );
    fieldInfos.forEach((fi) => {
      cache.invalidate("Query", "posts", fi.arguments || {});
    });
}
export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;

    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }
    const results: string[] = [];
    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isItInCache = cache.resolve(
      cache.resolve(entityKey, fieldKey) as string,
      "posts"
    ) as string[];
    info.partial = !isItInCache;
    let hasMore = true;
    fieldInfos.forEach((field) => {
      const data = cache.resolve(entityKey, field.fieldKey) as string;
      const key = cache.resolve(data, "posts") as string[];
      const _hasMore = cache.resolve(data, "hasMore");
      if (!_hasMore) {
        hasMore = _hasMore as boolean;
      }
      results.push(...key);
    });
    return {
      __typename: "PaginatedPosts",
      hasMore,
      posts: results,
    };
  };
};
export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = ""

  if (isServer()) {
    cookie = ctx?.req?.headers?.cookie;
  }
  return {
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include" as const,
    headers: cookie 
    ? { cookie, }
    : undefined
  ,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      resolvers: {
        keys: {
          PaginatedPosts: () => null,
        },
        Query: {
          posts: cursorPagination(),
        },
      },
      updates: {
        Mutation: {
          vote: (_result, args, cache, _info) => {
            const { postId, value } = args as VoteMutationVariables;
            const data = cache.readFragment(
              gql`
                fragment _ on Post {
                  id
                  points
                  voteStatus
                }
              `,
              { id: postId }
            );
            if (data) {
            const newPoints = (data.points as number) + (value -data.voteStatus);
                cache.writeFragment(
                  gql`
                    fragment _ on Post {
                      points
                      voteStatus
                    }
                  `,
                  { id: postId, points: newPoints, voteStatus: value }
                )
            }
          },

          login: (_result, _args, cache, _info) => {
            invalidateAllPosts(cache);
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          },
          register: (_result, _args, cache, _info) => {
            betterUpdateQuery<RegisterMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.register.errors) {
                  return query;
                } else {
                  return {
                    me: result.register.user,
                  };
                }
              }
            );
          },
          logout: (_result, _args, cache, _info) => {
            betterUpdateQuery<LogoutMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              () => ({ me: null })
            );
          },
          createPost: (_result, _args, cache, _info) => {
            invalidateAllPosts(cache)
          },
        },
      },
    }),
    errorExchange,
    ssrExchange,
    fetchExchange,
  ],
}
}
