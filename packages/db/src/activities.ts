import { v4 as uuidV4 } from "uuid";

import { Database } from "./db";
import { Activities } from "./types";

export const getActivities = (db: Database) => {
  return db.selectFrom("Activities").selectAll().execute();
};

export const createActivity = (
  db: Database,
  data: Pick<Activities, "creatorId" | "title" | "description">,
) => {
  return db
    .insertInto("Activities")
    .values({
      id: uuidV4(),
      title: data.title,
      creatorId: data.creatorId,
      description: data.description,
      updatedAt: new Date(),
    })
    .executeTakeFirstOrThrow();
};
