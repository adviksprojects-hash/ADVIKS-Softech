import { neon } from '@neondatabase/serverless';

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.error("Error: DATABASE_URL environment variable is required.");
  process.exit(1);
}

async function migrate() {
  const sql = neon(dbUrl);
  console.log("Starting Neon DB schema migration...");

  // 1. Users
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      clerk_id VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) NOT NULL,
      full_name VARCHAR(255),
      role VARCHAR(50) DEFAULT 'CLIENT',
      company_name VARCHAR(255),
      phone VARCHAR(50),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("✓ 'users' table ready");

  // 2. Projects
  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status VARCHAR(50) DEFAULT 'IN_PROGRESS',
      progress INTEGER DEFAULT 0,
      client_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE SET NULL,
      budget NUMERIC(12, 2) DEFAULT 0.00,
      start_date DATE,
      due_date DATE,
      tech_stack TEXT[],
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("✓ 'projects' table ready");

  // 3. Milestones
  await sql`
    CREATE TABLE IF NOT EXISTS milestones (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status VARCHAR(50) DEFAULT 'PENDING',
      due_date DATE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("✓ 'milestones' table ready");

  // 4. Invoices
  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      invoice_number VARCHAR(100) UNIQUE NOT NULL,
      client_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE SET NULL,
      project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
      amount NUMERIC(12, 2) NOT NULL,
      currency VARCHAR(10) DEFAULT 'INR',
      status VARCHAR(50) DEFAULT 'UNPAID',
      payment_method VARCHAR(50) DEFAULT 'MANUAL',
      utr_reference VARCHAR(255),
      payment_proof_url TEXT,
      issue_date DATE DEFAULT CURRENT_DATE,
      due_date DATE,
      paid_at TIMESTAMP WITH TIME ZONE,
      notes TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("✓ 'invoices' table ready");

  // 5. Tickets
  await sql`
    CREATE TABLE IF NOT EXISTS tickets (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      ticket_number VARCHAR(100) UNIQUE NOT NULL,
      client_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE SET NULL,
      project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      priority VARCHAR(50) DEFAULT 'MEDIUM',
      status VARCHAR(50) DEFAULT 'OPEN',
      admin_reply TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("✓ 'tickets' table ready");

  // 6. Leads
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      company VARCHAR(255),
      service_interest VARCHAR(100),
      budget_range VARCHAR(100),
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'NEW',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log("✓ 'leads' table ready");

  // Indexes
  await sql`CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_invoices_client_id ON invoices(client_id);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_tickets_client_id ON tickets(client_id);`;
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);`;
  console.log("✓ Indexes verified");

  const tables = await sql`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    ORDER BY table_name;
  `;
  console.log("Active Tables in Neon DB:", tables.map(t => t.table_name));
}

migrate().catch(err => {
  console.error("Migration error:", err);
  process.exit(1);
});
