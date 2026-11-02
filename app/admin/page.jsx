'use client';

import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
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
  Code2,
  Megaphone,
  CheckSquare2,
  Sparkles,
} from 'lucide-react';

export default function AdminOverviewPage() {
  const { tasks, projects, currentUser } = useEmployeeAuth();

  // Developer vs Marketing calculations
  const devTasks = tasks.filter((t) => t.department === 'Developer');
  const devDone = devTasks.filter((t) => t.status === 'DONE').length;
  const devWorkingOn = devTasks.filter((t) => t.status === 'IN_PROGRESS' || t.status === 'TODO').length;
  const devTotal = devTasks.length;
  const devRate = devTotal > 0 ? Math.round((devDone / devTotal) * 100) : 0;

  const mktTasks = tasks.filter((t) => t.department === 'Marketing');
  const mktDone = mktTasks.filter((t) => t.status === 'DONE').length;
  const mktWorkingOn = mktTasks.filter((t) => t.status === 'IN_PROGRESS' || t.status === 'TODO').length;
  const mktTotal = mktTasks.length;
  const mktRate = mktTotal > 0 ? Math.round((mktDone / mktTotal) * 100) : 0;

  const kpis = [
    {
      label: 'Active SOW Projects',
      value: `${projects.length} Active`,
      change: `${projects.filter((p) => p.progress >= 75).length} Near Delivery`,
      icon: FolderKanban,
      color: 'text-blue-400',
    },
    {
      label: 'Total Sprint Tasks',
      value: `${tasks.length} Deliverables`,
      change: `${tasks.filter((t) => t.status === 'DONE').length} Completed`,
      icon: CheckSquare2,
      color: 'text-emerald-400',
    },
    {
      label: 'Total Invoiced (YTD)',
      value: '₹34,50,000',
      change: '+18% vs last month',
      icon: ReceiptText,
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
            Real-time operational metrics across incoming website leads, active client sprints, and pod velocity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/tasks"
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <CheckSquare2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Sprint Board</span>
          </Link>
          <Link
            href="/admin/projects"
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Projects & SOWs</span>
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

      {/* TWO TEAMS WORKLOAD SUMMARY: DEVELOPER VS MARKETING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Developer Pod */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-blue-500/20 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Developer Team Pod</h3>
                <span className="text-[11px] text-slate-400">Architecture, APIs, Microservices</span>
              </div>
            </div>
            <Link
              href="/admin/tasks"
              className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>Manage Tasks</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Pod Completion Rate</span>
              <span className="font-mono text-blue-400 font-bold">{devRate}%</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                style={{ width: `${devRate}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Work Done</span>
              <span className="text-lg font-black text-emerald-400 font-mono">{devDone} Tasks</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Working On</span>
              <span className="text-lg font-black text-blue-400 font-mono">{devWorkingOn} Tasks</span>
            </div>
          </div>
        </div>

        {/* Marketing Pod */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-orange-500/20 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#FF8800]">
                <Megaphone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Marketing Team Pod</h3>
                <span className="text-[11px] text-slate-400">Meta/Google Ads, SEO, Funnel CRO</span>
              </div>
            </div>
            <Link
              href="/admin/tasks"
              className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              <span>Manage Tasks</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Campaign Completion Rate</span>
              <span className="font-mono text-orange-400 font-bold">{mktRate}%</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-600 to-amber-400 rounded-full"
                style={{ width: `${mktRate}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Work Done</span>
              <span className="text-lg font-black text-emerald-400 font-mono">{mktDone} Tasks</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Working On</span>
              <span className="text-lg font-black text-orange-400 font-mono">{mktWorkingOn} Tasks</span>
            </div>
          </div>
        </div>
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

        {/* Active Projects Snapshot */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Active SOW Milestones</h3>
            <Link
              href="/admin/projects"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3.5">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="space-y-1.5 pb-3 border-b border-slate-800/80 last:border-0 last:pb-0">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white font-bold truncate max-w-[200px]">{p.title}</span>
                  <span className="font-mono text-amber-400 font-extrabold">{p.progress}%</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{p.clientName}</span>
                  <span className="text-blue-400">{p.assignedTo}</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
