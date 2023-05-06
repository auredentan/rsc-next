import { Kysely } from "kysely";

import { PlanetScaleDialect } from "kysely-planetscale";

import { DB } from "./types";

export type Database = Kysely<DB>

export const getDb = () => {
  return new Kysely<DB>({
    dialect: new PlanetScaleDialect({
      host: process.env["DATABASE_HOST"],
      username: process.env["DATABASE_USERNAME"],
      password: process.env["DATABASE_PASSWORD"],
    }),
  });
};


