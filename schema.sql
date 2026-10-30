-- ADVIKS Softech PostgreSQL Database Schema for Neon DB
-- Run this script in the Neon Console SQL Editor to initialize all tables.

-- 1. Users Table (Synced with Clerk)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'CLIENT', -- 'ADMIN' or 'CLIENT'
  company_name VARCHAR(255),
  phone VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'IN_PROGRESS', -- 'PLANNING', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'
  progress INTEGER DEFAULT 0, -- 0 to 100%
  client_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE SET NULL,
  budget NUMERIC(12, 2) DEFAULT 0.00,
  start_date DATE,
  due_date DATE,
  tech_stack TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Milestones Table
CREATE TABLE IF NOT EXISTS milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'PENDING', -- 'PENDING', 'IN_PROGRESS', 'COMPLETED'
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Invoices Table (Manual Bank Transfer & Offline Tracking)
CREATE TABLE IF NOT EXISTS invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_number VARCHAR(100) UNIQUE NOT NULL,
  client_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE SET NULL,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  amount NUMERIC(12, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  status VARCHAR(50) DEFAULT 'UNPAID', -- 'UNPAID', 'PENDING_VERIFICATION', 'PAID', 'OVERDUE'
  payment_method VARCHAR(50) DEFAULT 'BANK_TRANSFER',
  utr_reference VARCHAR(255),
  payment_proof_url TEXT,
  issue_date DATE DEFAULT CURRENT_DATE,
  due_date DATE,
  paid_at TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Support Tickets Table
CREATE TABLE IF NOT EXISTS tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_number VARCHAR(100) UNIQUE NOT NULL,
  client_id VARCHAR(255) REFERENCES users(clerk_id) ON DELETE SET NULL,
  project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  priority VARCHAR(50) DEFAULT 'MEDIUM', -- 'LOW', 'MEDIUM', 'HIGH', 'URGENT'
  status VARCHAR(50) DEFAULT 'OPEN', -- 'OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'
  admin_reply TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Leads / Inquiries Table (Website Contact Form)
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service_interest VARCHAR(100),
  budget_range VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'NEW', -- 'NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL_SENT', 'CONVERTED', 'ARCHIVED'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for optimal performance
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_invoices_client_id ON invoices(client_id);
CREATE INDEX IF NOT EXISTS idx_tickets_client_id ON tickets(client_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
