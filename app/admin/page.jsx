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
  IndianRupee,
} from 'lucide-react';

export default function AdminOverviewPage() {
  const { tasks, projects, currentUser, expenseClaims = [] } = useEmployeeAuth();

  const pendingClaims = expenseClaims.filter((c) => c.status === 'PENDING_APPROVAL');
  const pendingClaimsAmount = pendingClaims.reduce((acc, c) => acc + (Number(c.amount) || 0), 0);

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
      label: 'CFO Reimbursements Pending',
      value: `₹${pendingClaimsAmount.toLocaleString('en-IN')}`,
      change: `${pendingClaims.length} claims awaiting CFO Dhiraj`,
      icon: IndianRupee,
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8800]">
            Operations Executive KPI
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
            ADVIKS Softech Business Command
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Real-time operational metrics across incoming website leads, active client sprints, and pod velocity.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/admin/finance"
            className="px-4 py-2.5 rounded-xl bg-[#FFF7ED] hover:bg-orange-100 border border-orange-200 text-[#EA580C] font-bold text-xs transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <IndianRupee className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>CFO Finance & Refunds ({pendingClaims.length} Pending)</span>
          </Link>
          <Link
            href="/admin/tasks"
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0A224E] transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <CheckSquare2 className="w-3.5 h-3.5 text-[#0062E6]" />
            <span>Sprint Board</span>
          </Link>
          <Link
            href="/admin/projects"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-xs"
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
            <div key={i} className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="flex items-center justify-between text-[#475569] mb-3">
                <span className="text-xs font-bold uppercase tracking-wider">{kpi.label}</span>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div className="text-2xl font-black text-[#0A224E] tracking-tight">{kpi.value}</div>
              <div className="text-xs text-[#475569] mt-1">{kpi.change}</div>
            </div>
          );
        })}
      </div>

      {/* TWO TEAMS WORKLOAD SUMMARY: DEVELOPER VS MARKETING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Developer Pod */}
        <div className="p-6 rounded-3xl bg-white border border-blue-200 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] shadow-2xs">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0A224E]">Developer Team Pod</h3>
                <span className="text-[11px] text-[#475569]">Architecture, APIs, Microservices</span>
              </div>
            </div>
            <Link
              href="/admin/tasks"
              className="text-xs font-bold text-[#0062E6] hover:underline flex items-center gap-1"
            >
              <span>Manage Tasks</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-[#475569] font-medium">Pod Completion Rate</span>
              <span className="font-mono text-[#0062E6] font-bold">{devRate}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0062E6] to-cyan-500 rounded-full"
                style={{ width: `${devRate}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#475569] block text-[10px] uppercase font-bold">Work Done</span>
              <span className="text-lg font-black text-emerald-600 font-mono">{devDone} Tasks</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#475569] block text-[10px] uppercase font-bold">Working On</span>
              <span className="text-lg font-black text-[#0062E6] font-mono">{devWorkingOn} Tasks</span>
            </div>
          </div>
        </div>

        {/* Marketing Pod */}
        <div className="p-6 rounded-3xl bg-white border border-orange-200 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] border border-orange-200 flex items-center justify-center text-[#FF8800] shadow-2xs">
                <Megaphone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0A224E]">Marketing Team Pod</h3>
                <span className="text-[11px] text-[#475569]">Meta/Google Ads, SEO, Funnel CRO</span>
              </div>
            </div>
            <Link
              href="/admin/tasks"
              className="text-xs font-bold text-[#EA580C] hover:underline flex items-center gap-1"
            >
              <span>Manage Tasks</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex justify-between text-xs">
              <span className="text-[#475569] font-medium">Campaign Completion Rate</span>
              <span className="font-mono text-[#EA580C] font-bold">{mktRate}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF8800] to-[#EA580C] rounded-full"
                style={{ width: `${mktRate}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#475569] block text-[10px] uppercase font-bold">Work Done</span>
              <span className="text-lg font-black text-emerald-600 font-mono">{mktDone} Tasks</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[#475569] block text-[10px] uppercase font-bold">Working On</span>
              <span className="text-lg font-black text-[#EA580C] font-mono">{mktWorkingOn} Tasks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Bank Transfer Reconciliations Alert */}
      <div className="p-6 rounded-2xl bg-[#FFF7ED] border border-orange-200 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#FF8800]" />
            <h3 className="text-sm font-bold text-[#EA580C] uppercase tracking-wider">
              Pending Bank Wire Reconciliations (1 Action Required)
            </h3>
          </div>
          <Link
            href="/admin/invoices"
            className="text-xs font-bold text-[#EA580C] hover:underline flex items-center gap-1"
          >
            <span>Manage All Invoices</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-2">
          {pendingVerificationInvoices.map((inv) => (
            <div
              key={inv.id}
              className="p-4 rounded-xl bg-white border border-orange-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
            >
              <div>
                <span className="font-mono text-[#0062E6] font-bold">{inv.id}</span> •{' '}
                <strong className="text-[#0A224E]">{inv.client}</strong> • <span className="text-[#475569]">{inv.project}</span>
                <div className="text-[#475569] mt-0.5 font-mono">
                  Submitted UTR: <span className="text-[#EA580C] font-bold">{inv.utr}</span> ({inv.date})
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-[#0A224E] text-sm">{inv.amount}</span>
                <Link
                  href="/admin/invoices"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs transition-colors"
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
            <h3 className="text-base font-bold text-[#0A224E]">Recent Website Inquiries (Leads)</h3>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-[#FF8800] hover:text-[#EA580C] flex items-center gap-1"
            >
              <span>View CRM Board</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentLeads.map((lead, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-between gap-4 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-[#0A224E] text-sm">{lead.name}</strong>
                    <span className="text-[#475569]">({lead.company})</span>
                  </div>
                  <div className="text-[#475569] mt-0.5">
                    Interest: <span className="text-[#0062E6] font-semibold">{lead.service}</span> • Budget:{' '}
                    <span className="text-[#0A224E] font-mono font-bold">{lead.budget}</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      lead.status === 'NEW'
                        ? 'bg-[#FFF7ED] text-[#EA580C] border border-orange-200'
                        : 'bg-[#EFF6FF] text-[#0062E6] border border-blue-200'
                    }`}
                  >
                    {lead.status}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">{lead.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Projects Snapshot */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#0A224E]">Active SOW Milestones</h3>
            <Link
              href="/admin/projects"
              className="text-xs font-bold text-[#0062E6] hover:underline flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3.5">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="space-y-1.5 pb-3 border-b border-[#E2E8F0] last:border-0 last:pb-0">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#0A224E] font-bold truncate max-w-[200px]">{p.title}</span>
                  <span className="font-mono text-[#FF8800] font-extrabold">{p.progress}%</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#475569]">
                  <span>{p.clientName}</span>
                  <span className="text-[#0062E6] font-medium">{p.assignedTo}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0062E6] to-[#FF8800] rounded-full"
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
