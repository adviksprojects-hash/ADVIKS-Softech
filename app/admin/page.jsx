import Link from 'next/link';
import {
  Users2,
  FolderKanban,
  ReceiptText,
  LifeBuoy,
  Kanban,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

export default function AdminOverviewPage() {
  const kpis = [
    {
      label: 'Total Invoiced (YTD)',
      value: '₹34,50,000',
      change: '+18% vs last month',
      icon: ReceiptText,
      color: 'text-emerald-400',
    },
    {
      label: 'Offline Payments Verified',
      value: '₹33,00,000',
      change: 'Bank Wire / NEFT Reconciled',
      icon: TrendingUp,
      color: 'text-blue-400',
    },
    {
      label: 'Active Sprint Projects',
      value: '6 Projects',
      change: '4 Clients on Retainer',
      icon: FolderKanban,
      color: 'text-indigo-400',
    },
    {
      label: 'New Website Inquiries',
      value: '14 Leads',
      change: '3 Pending proposals',
      icon: Kanban,
      color: 'text-amber-400',
    },
  ];

  const pendingVerificationInvoices = [
    {
      id: 'INV-2026-089',
      client: 'Acme Enterprises',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      amount: '₹1,50,000',
      utr: 'HDFC20261030018894',
      date: 'Today, 14:20',
    },
  ];

  const recentLeads = [
    {
      name: 'Rohan Deshmukh',
      company: 'Zenith Logistics',
      service: 'Custom Web Platform',
      budget: '₹5,00,000 - ₹15,00,000',
      status: 'NEW',
      date: '2 hours ago',
    },
    {
      name: 'Priya Sundaram',
      company: 'OmniHealth AI',
      service: 'AI & Machine Learning',
      budget: '₹15,00,000+',
      status: 'CONTACTED',
      date: 'Yesterday',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Title strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Operations Executive KPI
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            ADVIKS Softech Business Command
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time operational metrics across incoming website leads, active client sprints, and bank wire reconciliations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/invoices"
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors"
          >
            Issue New Invoice
          </Link>
          <Link
            href="/admin/projects"
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Create Project
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div key={i} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 mb-3">
                <span className="text-xs font-medium uppercase tracking-wider">{kpi.label}</span>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">{kpi.value}</div>
              <div className="text-xs text-slate-400 mt-1">{kpi.change}</div>
            </div>
          );
        })}
      </div>

      {/* Pending Bank Transfer Reconciliations Alert */}
      <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              Pending Bank Wire Reconciliations (1 Action Required)
            </h3>
          </div>
          <Link
            href="/admin/invoices"
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <span>Manage All Invoices</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-2">
          {pendingVerificationInvoices.map((inv) => (
            <div
              key={inv.id}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
            >
              <div>
                <span className="font-mono text-blue-400 font-bold">{inv.id}</span> •{' '}
                <strong className="text-white">{inv.client}</strong> • {inv.project}
                <div className="text-slate-400 mt-0.5 font-mono">
                  Submitted UTR: <span className="text-amber-300 font-bold">{inv.utr}</span> ({inv.date})
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-white text-sm">{inv.amount}</span>
                <Link
                  href="/admin/invoices"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs"
                >
                  Verify & Mark Paid
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leads and Quick Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Website Inquiries */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Recent Website Inquiries (Leads)</h3>
            <Link
              href="/admin/leads"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View CRM Board</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentLeads.map((lead, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-4 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-white text-sm">{lead.name}</strong>
                    <span className="text-slate-400">({lead.company})</span>
                  </div>
                  <div className="text-slate-400 mt-0.5">
                    Interest: <span className="text-blue-400">{lead.service}</span> • Budget:{' '}
                    <span className="text-slate-300 font-mono">{lead.budget}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      lead.status === 'NEW'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}
                  >
                    {lead.status}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1">{lead.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Operations Guide */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-base font-bold text-white">System Architecture & Tech Setup</h3>

          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-white font-semibold pb-2 border-b border-slate-800">
              <span>Neon DB & Clerk Integration Status</span>
            </div>

            <p className="leading-relaxed text-slate-400">
              The project is configured for <strong className="text-white">Clerk</strong> authentication and <strong className="text-white">Neon PostgreSQL</strong> serverless database.
            </p>

            <div className="space-y-2 font-mono text-[11px] bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-500">Framework:</span>
                <span className="text-blue-400">Next.js 16 + React 19</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Format:</span>
                <span className="text-emerald-400">JavaScript (.jsx / .js)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Auth Provider:</span>
                <span className="text-indigo-400">Clerk Auth</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Database:</span>
                <span className="text-cyan-400">Neon Serverless PostgreSQL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Gateway:</span>
                <span className="text-amber-400">Disabled (Manual Bank Wire)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
