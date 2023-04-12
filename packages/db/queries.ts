import {
  PlanetScaleDatabase,
} from "drizzle-orm/planetscale-serverless";
import { countries } from "./schema";

export const getCountries = async (db: PlanetScaleDatabase) =>
  await db.select().from(countries);
