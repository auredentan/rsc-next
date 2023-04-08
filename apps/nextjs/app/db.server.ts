import { getDb } from "@rsc/db";
import type { PlanetScaleDatabase } from "@rsc/db";

const db: PlanetScaleDatabase = getDb();

export { db };
