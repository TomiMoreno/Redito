import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from 'path';

export default {
   migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  dbName: 'redito',
  entities: [Post],
  type: 'postgresql',
  debug: !__prod__,
  password:'hola',
  user:'syrfox',
} as Parameters<typeof MikroORM.init>[0]