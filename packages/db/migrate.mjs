import { drizzle } from "drizzle-orm/planetscale-serverless";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";

import { connect } from "@planetscale/database";

const connection = connect({
  host: process.env["MIG_DATABASE_HOST"],
  username: process.env["MIG_DATABASE_USERNAME"],
  password: process.env["MIG_DATABASE_PASSWORD"],
});
const db = drizzle(connection, { logger: true });

migrate(db, { migrationsFolder: "./migrations",  });
