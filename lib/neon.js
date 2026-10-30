import { neon } from '@neondatabase/serverless';

// Initialize Neon database client
const sqlClient = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : null;

/**
 * Execute a query against Neon DB, or return mock data if DATABASE_URL is not yet configured.
 * This ensures the application runs smoothly during development and setup.
 */
export async function query(text, params = []) {
  if (sqlClient) {
    try {
      return await sqlClient(text, params);
    } catch (error) {
      console.error('Neon DB Query Error:', error);
      throw error;
    }
  }

  // Graceful fallback for mock mode if connection string is not yet added in .env.local
  console.warn('DATABASE_URL not set in environment. Running in mock/development mode.');
  return [];
}

export default sqlClient;
