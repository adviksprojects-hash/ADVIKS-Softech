import Link from 'next/link';
import {
  FolderKanban,
  Receipt,
  LifeBuoy,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Building,
  Copy,
} from 'lucide-react';

export default function ClientDashboardPage() {
  const activeProjects = [
    {
      id: 'prj-101',
      title: 'Enterprise ERP & Multi-Tenant Portal',
      stage: 'Phase 3: Backend API & Neon DB Integration',
      progress: 68,
      leadArchitect: 'Siddharth M.',
      targetDelivery: 'Nov 25, 2026',
    },
    {
      id: 'prj-102',
      title: 'iOS & Android Field Technician App',
      stage: 'Phase 2: Offline SQLite Sync & UI',
      progress: 42,
      leadArchitect: 'Ananya R.',
      targetDelivery: 'Dec 15, 2026',
    },
  ];

  const recentInvoices = [
    {
      id: 'INV-2026-089',
      description: 'Sprint 2 Milestone Deliverables',
      amount: '₹1,50,000',
      dueDate: 'Nov 05, 2026',
      status: 'UNPAID',
    },
    {
      id: 'INV-2026-074',
      description: 'Discovery & System Architecture Signoff',
      amount: '₹2,00,000',
      dueDate: 'Oct 15, 2026',
      status: 'PAID',
    },
  ];

  const openTickets = [
    {
      id: 'TCK-401',
      title: 'Clarification regarding webhook latency on staging',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      updated: '2 hours ago',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-800/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Welcome Back
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Acme Enterprises Dashboard
          </h1>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            You have 2 active development projects running with ADVIKS Softech. 1 pending milestone invoice requires bank transfer reconciliation.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/tickets"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors"
          >
            Create Ticket
          </Link>
          <Link
            href="/dashboard/invoices"
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
          >
            Settle Invoices
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Active Projects</span>
            <FolderKanban className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">2</div>
          <div className="text-xs text-emerald-400 mt-1 font-medium">On schedule for Q4 release</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Overall Velocity</span>
            <Clock className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white">55%</div>
          <div className="text-xs text-slate-400 mt-1">Across 12 scheduled sprints</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Pending Invoice</span>
            <Receipt className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-amber-400">₹1,50,000</div>
          <div className="text-xs text-slate-400 mt-1">Due by Nov 05 via Bank Wire</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Open Tickets</span>
            <LifeBuoy className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">1</div>
          <div className="text-xs text-blue-400 mt-1">Engineering response within 2h</div>
        </div>
      </div>

      {/* Projects & Bank Transfer Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Active Projects List */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Current Projects & Delivery</h2>
            <Link
              href="/dashboard/projects"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {activeProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-bold text-white text-base">{p.title}</h3>
                  <span className="text-xs font-mono text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {p.progress}% Complete
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3">{p.stage}</p>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <span>Lead: <strong className="text-slate-300">{p.leadArchitect}</strong></span>
                  <span>Target Handover: <strong className="text-slate-300">{p.targetDelivery}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Bank Account Quick Details & Pending Invoice Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Manual Wire Transfer Details</h2>
            <Link
              href="/dashboard/invoices"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300"
            >
              Invoices
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <Building className="w-4 h-4 text-blue-400" />
              <span>Official Beneficiary Account</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Use these details to initiate NEFT, RTGS, IMPS or UPI transfers. Once transferred, submit your bank reference/UTR in the invoice page for immediate receipt generation.
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2.5 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficiary:</span>
                <span className="text-slate-200 font-semibold">ADVIKS SOFTECH PVT LTD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Bank:</span>
                <span className="text-slate-200">HDFC Bank Ltd</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Account No:</span>
                <span className="text-blue-400 font-semibold">50200012345678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">IFSC Code:</span>
                <span className="text-slate-200">HDFC0001234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">UPI VPA:</span>
                <span className="text-emerald-400">advikssoftech@hdfcbank</span>
              </div>
            </div>

            <Link
              href="/dashboard/invoices"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              <span>Submit Bank Transfer UTR / Proof</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
