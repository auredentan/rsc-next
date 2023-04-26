import bcrypt from "bcryptjs";

import { and, eq } from "drizzle-orm";

import { PlanetScaleDatabase } from "drizzle-orm/planetscale-serverless";

import { v4 as uuidV4 } from "uuid";

import { activities, users } from "./schema";

export const createActivity = async (db: PlanetScaleDatabase) =>
  await db.insert(activities).values({ id: uuidV4(), title: "test" });

export const createUserFromEmailPassword = async (
  db: PlanetScaleDatabase,
  email: string,
  password: string,
) => {
  const encryptedPassword = bcrypt.hashSync(password, 10);
  await db.insert(users).values({
    id: uuidV4(),
    email,
    provider: "user-pass",
    password: encryptedPassword,
  });
  return { email };
};

export const verifyUserEmailPassword = async (
  db: PlanetScaleDatabase,
  email: string,
  password: string,
) => {
  const usersFound = await db
    .select({ email: users.email, password: users.password })
    .from(users)
    .where(and(eq(users.email, email), eq(users.provider, "user-pass")));
  const user = usersFound[0];
  if (!user.email || !user.password) {
    throw new Error("user not existing");
  }
  await bcrypt.compare(password, user.password);
  return { email: user.email };
};

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
    await db.insert(users).values({ id: uuidV4(), email, provider });
    return { email };
  }
  return { email: usersFound[0].email || "" };
};
