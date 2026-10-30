# ADVIKS Softech — Enterprise Software & Cloud Solutions Platform

Official web platform for **ADVIKS Softech**, featuring the corporate marketing website, client user dashboard (self-service portal), and administrative operations console.

---

## 🚀 Key Features & Portals

### 1. Corporate Marketing Website
- **Modern Hero & Brand Showcase**: High-impact presentation of company capabilities, metrics, and technology expertise.
- **Service Offerings**: Full-stack web development, mobile apps (iOS/Android), cloud & DevOps, AI/ML systems, and custom ERP/CRM.
- **Case Studies & Portfolio**: Filterable client success stories highlighting real-world technical solutions and ROI.
- **Interactive Project Estimator**: Contact inquiry form connected directly to Neon DB leads pipeline.

### 2. Client User Dashboard (`/dashboard`)
- **Project & Milestone Tracker**: Live milestone progress bars and sprint timelines.
- **Invoices & Bank Transfers**: Itemized invoices with official beneficiary bank details (NEFT/RTGS/IMPS/UPI) and a submission interface for bank transfer UTR reference numbers.
- **Support Helpdesk**: Client ticketing system for bug reporting and technical questions with SLA tracking.

### 3. Admin Operations Console (`/admin`)
- **Executive KPI Dashboard**: Overview of billed revenue, active projects, and website lead conversions.
- **Leads CRM Pipeline**: Real-time queue of website inquiries with status controls (`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Converted`).
- **Project & Milestone Manager**: Interactive progress updater (`+/- 5%`), budget tracker, and engineering lead assignments.
- **Manual Invoicing & Bank Wire Reconciliation**: Issue milestone invoices, inspect submitted client UTRs, and verify offline payments.
- **Ticket Queue**: SLA assignment, engineering responses, and ticket resolution.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16+ (App Router)](https://nextjs.org/)
- **UI & Components**: React 19, JavaScript (`.jsx`), Tailwind CSS, Lucide Icons
- **Authentication**: [Clerk (`@clerk/nextjs`)](https://clerk.com/)
- **Database**: [Neon DB](https://neon.tech/) Serverless PostgreSQL (`@neondatabase/serverless`)
- **Billing**: Manual Wire Transfer / NEFT / RTGS / IMPS / UPI (No third-party payment gateways)

---

## 🏁 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/adviksprojects-hash/ADVIKS-Softech.git
cd ADVIKS-Softech
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your credentials:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://user:password@ep-...neon.tech/neondb?sslmode=require
```

### 3. Initialize Neon Database
Run [`schema.sql`](schema.sql) in your **Neon Console SQL Editor** to create all tables (`users`, `projects`, `milestones`, `invoices`, `tickets`, `leads`).

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
├── app/
│   ├── (public)/
│   │   ├── page.js                 # Corporate Homepage
│   │   ├── services/page.jsx       # Capabilities Catalog
│   │   ├── portfolio/page.jsx      # Case Studies
│   │   ├── about/page.jsx          # Company Story & Team
│   │   └── contact/page.jsx        # Project Inquiry Form
│   ├── dashboard/                  # Client Portal
│   │   ├── page.jsx                # Overview & KPI
│   │   ├── projects/page.jsx       # Sprint Milestones
│   │   ├── invoices/page.jsx       # Bank Wire Invoicing & UTRs
│   │   └── tickets/page.jsx        # Support Helpdesk
│   ├── admin/                      # Admin Operations
│   │   ├── page.jsx                # Executive KPI
│   │   ├── leads/page.jsx          # Inquiries CRM
│   │   ├── projects/page.jsx       # Project Manager
│   │   ├── invoices/page.jsx       # Bank Reconciliation
│   │   └── tickets/page.jsx        # Ticket Helpdesk
│   ├── api/
│   │   └── leads/route.js          # Inquiries API (Neon DB)
│   ├── layout.js                   # Root layout with Clerk Auth
│   └── globals.css                 # Tailwind CSS styles
├── components/                     # Reusable UI & Layout Components
├── lib/                            # Database & helper utilities
├── schema.sql                      # Neon PostgreSQL DDL script
└── .env.example                    # Environment template
```

---

© 2026 ADVIKS Softech Pvt. Ltd. All rights reserved.
