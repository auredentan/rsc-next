import { and, eq } from "drizzle-orm";

import { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless";

import { v4 as uuidV4 } from "uuid";

import { activities, users } from "./schema";

export const createActivity = async (db: PlanetScaleDatabase) =>
  await db.insert(activities).values({ id: uuidV4(), title: "test" });

export const findOrCreateUserFromProvider = async (
  db: PlanetScaleDatabase,
  email: string,
  provider: string,
) => {
  const usersFound = await db
    .select({ email: users.email })
    .from(users)
    .where(and(eq(users.email, email), eq(users.provider, provider)));

  if (!usersFound || usersFound.length === 0) {
    const res = await db
      .insert(users)
      .values({ id: uuidV4(), email, provider });
    return { email };
  }
  return { email: usersFound[0].email || "" };
};
