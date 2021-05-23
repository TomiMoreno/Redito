import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  dbName: "redito",
  entities: [Post, User],
  type: "postgresql",
  debug: !__prod__,
  password: "hola",
  user: "syrfox",
} as Parameters<typeof MikroORM.init>[0];
