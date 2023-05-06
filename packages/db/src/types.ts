import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type Activities = {
  id: string;
  createdAt: Generated<Timestamp>;
  updatedAt: Timestamp;
  title: string;
  description: string;
  creatorId: number;
};
export type DB = {
  Activities: Activities;
};
