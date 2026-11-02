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
  Sparkles,
} from 'lucide-react';

export default function ClientDashboardPage() {
  const activeProjects = [
    {
      id: 'prj-101',
      title: 'Enterprise ERP & Multi-Tenant Portal',
      stage: 'Phase 3: Backend API & Neon DB Integration',
      progress: 68,
      leadArchitect: 'Vivek Pawar (Lead Architect)',
      targetDelivery: 'Nov 25, 2026',
    },
    {
      id: 'prj-102',
      title: 'iOS & Android Field Technician App',
      stage: 'Phase 2: Offline SQLite Sync & UI',
      progress: 42,
      leadArchitect: 'Dhiraj Gaikwad (Principal Engineer)',
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
      {/* Interactive Demo Mode Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#071736] via-slate-900 to-[#1e1305] border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-black/20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-[#FF8800]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Client Portal Demo Mode</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-[#FF8800] border border-amber-500/20">
                Interactive Preview
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Exploring a live interactive simulation. Active ADVIKS clients receive private encrypted credentials to monitor sprint velocity, approve milestone deliverables, and raise direct SLA tickets.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-90 text-white text-xs font-bold shrink-0 shadow-lg shadow-orange-500/20 transition-all self-start sm:self-auto"
        >
          <span>Hire Our Pod</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A224E]/90 via-slate-900 to-[#071736] border border-blue-600/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl shadow-blue-950/20">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Client Workspace
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
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0062E6] to-blue-600 hover:from-blue-700 hover:to-blue-600 text-xs font-semibold text-white transition-colors shadow-lg shadow-blue-600/20"
          >
            Settle Invoices
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Active Projects</span>
            <FolderKanban className="w-4 h-4 text-[#0062E6]" />
          </div>
          <div className="text-2xl font-bold text-white">2</div>
          <div className="text-xs text-emerald-400 mt-1 font-medium">On schedule for Q4 release</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Overall Velocity</span>
            <Clock className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white">55%</div>
          <div className="text-xs text-slate-400 mt-1">Across 12 scheduled sprints</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider">Pending Invoice</span>
            <Receipt className="w-4 h-4 text-[#FF8800]" />
          </div>
          <div className="text-2xl font-bold text-[#FF8800]">₹1,50,000</div>
          <div className="text-xs text-slate-400 mt-1">Due by Nov 05 via Bank Wire</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
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
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-colors"
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
                    className="bg-gradient-to-r from-[#0062E6] to-[#0A224E] h-full rounded-full transition-all duration-500"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <span>Lead: <strong className="text-slate-200">{p.leadArchitect}</strong></span>
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
