import {
  drizzle,
  PlanetScaleDatabase,
} from "drizzle-orm/planetscale-serverless";

import { connect } from "@planetscale/database";

export const getDb = () => {
  const connection = connect({
    host: process.env["DATABASE_HOST"],
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"],
  });
  return drizzle(connection);
};
export type { PlanetScaleDatabase };
export * from "./schema";
