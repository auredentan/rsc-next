import { getDb } from '@rsc/db'
import type { PlanetScaleDatabase } from '@rsc/db'

let db: PlanetScaleDatabase;

db = getDb();

export { db }
