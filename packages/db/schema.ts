import { mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("Users", {
  id: varchar("id", { length: 256 }).primaryKey().notNull(),
  email: text("email"),
  provider: text("provider"),
  password: text("password"),
});

export const activities = mysqlTable("Activities", {
  id: varchar("id", { length: 256 }).primaryKey().notNull(),
  title: text("title"),
  slug: text("slug"),
  description: text("description"),
});
