import 'reflect-metadata';

import { UserResolver } from "./resolvers/UserResolver";
import { buildSchema } from "type-graphql";

await buildSchema({
  resolvers: [UserResolver],
  // HACK: https://github.com/MichalLytek/type-graphql/issues/1396
  validate: { forbidUnknownValues: false },
});
