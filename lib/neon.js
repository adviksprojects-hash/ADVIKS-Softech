import { neon } from '@neondatabase/serverless';

// Initialize Neon database client
const sqlClient = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : null;

/**
 * Execute a parameterized query against Neon DB.
 * Uses sqlClient.query() for parameterized queries ($1, $2, etc.)
 */
export async function query(text, params = []) {
  if (sqlClient) {
    try {
      if (typeof sqlClient.query === 'function') {
        const res = await sqlClient.query(text, params);
        // Handle node-postgres style { rows } or array result
        return Array.isArray(res) ? res : (res?.rows || []);
      }
      return await sqlClient(text, params);
    } catch (error) {
      console.error('Neon DB Query Error:', error);
      throw error;
    }
  }

  console.warn('DATABASE_URL not set in environment.');
  return [];
}

export default sqlClient;
