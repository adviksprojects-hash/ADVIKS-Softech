import { neon } from '@neondatabase/serverless';

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

async function setup() {
  const sql = neon(dbUrl);
  console.log("Checking Neon DB user roles...");
  const allUsers = await sql`
    SELECT id, email, full_name, role, is_active, company_name, provider, created_at 
    FROM users 
    ORDER BY created_at DESC;
  `;
  console.table(allUsers.map(u => ({ email: u.email, role: u.role, active: u.is_active })));
}

setup().catch(console.error);
