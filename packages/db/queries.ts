import { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless";

import { v4 as uuidV4 } from "uuid";

import { activities } from "./schema";

export const createActivity = async (db: PlanetScaleDatabase) =>
  await db.insert(activities).values({ id: uuidV4(), title: "test" });
