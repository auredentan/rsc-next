import {
  mysqlTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const activities = mysqlTable("activities", {
  id: varchar("id", {length: 256}).primaryKey().notNull(),
  title: text("title")
});
