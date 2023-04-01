import { drizzle } from 'drizzle-orm/planetscale-serverless/index.js';
import { migrate } from "drizzle-orm/planetscale-serverless/migrator.js";

import { connect } from '@planetscale/database';
 
const connection = connect({
    host: process.env['DATABASE_HOST'],
    username: process.env['DATABASE_USERNAME'],
    password: process.env['DATABASE_PASSWORD'],
});
const db = drizzle(connection, {logger: true});

migrate(db, {migrationsFolder: './migrations' });
