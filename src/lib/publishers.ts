/**
 * Provides data-access helpers for retrieving publisher information.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';
import type { Publisher } from '../types/game';

/**
 * Return all publishers with their identifiers and names, ordered by name.
 *
 * @param db Database client used to query publishers.
 * @returns Publishers containing only their identifiers and names.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}