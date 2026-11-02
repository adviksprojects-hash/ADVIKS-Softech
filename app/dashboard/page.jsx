'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import ClientLoginModal from '@/components/ClientLoginModal';
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
  LogIn,
  Layers,
  Calendar,
  Send,
} from 'lucide-react';

export default function ClientDashboardPage() {
  const { projects, currentClient, expenseClaims = [] } = useEmployeeAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Filter projects for the logged in client or fallback to top active projects
  const clientProjects = currentClient
    ? projects.filter(
        (p) =>
          (p.clientEmail && p.clientEmail.toLowerCase() === currentClient.email.toLowerCase()) ||
          (p.clientName && p.clientName.toLowerCase().includes(currentClient.name.toLowerCase())) ||
          (currentClient.projectIds && currentClient.projectIds.includes(p.id))
      )
    : projects.slice(0, 2);

  const displayProjects = clientProjects.length > 0 ? clientProjects : projects.slice(0, 2);

  const avgVelocity =
    displayProjects.length > 0
      ? Math.round(
          displayProjects.reduce((acc, p) => acc + (p.progress || 0), 0) / displayProjects.length
        )
      : 60;

  const sampleInvoices = [
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
      {/* Top Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl shadow-blue-900/10 border border-blue-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20 text-xs font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
            <span>{currentClient ? `Client Organization: ${currentClient.name}` : 'Client Workspace Overview'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            {currentClient ? `${currentClient.name} Portal` : 'Client Dashboard'}
          </h1>
          <p className="text-sm text-blue-100 mt-1 max-w-xl">
            Track live sprint deliverables, check architectural milestone progress, inspect billing invoices &amp; bank UTRs, and raise priority queries to your engineering pod.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/tickets"
            className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-bold text-white border border-white/30 backdrop-blur-sm transition-colors flex items-center gap-1.5"
          >
            <LifeBuoy className="w-3.5 h-3.5 text-blue-200" />
            <span>Raise Query / Ticket</span>
          </Link>
          <Link
            href="/dashboard/invoices"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-xs font-extrabold text-white transition-all shadow-md flex items-center gap-1.5"
          >
            <Receipt className="w-3.5 h-3.5" />
            <span>View Invoices &amp; Bank UTR</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="flex items-center justify-between text-[#475569] mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Active SOW Projects</span>
            <FolderKanban className="w-4 h-4 text-[#0062E6]" />
          </div>
          <div className="text-2xl font-black text-[#0A224E]">{displayProjects.length}</div>
          <div className="text-xs text-emerald-600 mt-1 font-semibold">Under active sprint execution</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="flex items-center justify-between text-[#475569] mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Overall Velocity</span>
            <Clock className="w-4 h-4 text-[#0062E6]" />
          </div>
          <div className="text-2xl font-black text-[#0A224E]">{avgVelocity}%</div>
          <div className="text-xs text-[#475569] mt-1">Across deliverable checkpoints</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="flex items-center justify-between text-[#475569] mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Pending Invoice</span>
            <Receipt className="w-4 h-4 text-[#FF8800]" />
          </div>
          <div className="text-2xl font-black text-[#EA580C]">₹1,50,000</div>
          <div className="text-xs text-[#475569] mt-1">Due via direct NEFT / IMPS wire</div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <div className="flex items-center justify-between text-[#475569] mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Helpdesk Tickets</span>
            <LifeBuoy className="w-4 h-4 text-[#0062E6]" />
          </div>
          <div className="text-2xl font-black text-[#0A224E]">{openTickets.length} Active</div>
          <div className="text-xs text-[#0062E6] mt-1 font-semibold">Engineering response SLA &lt; 2h</div>
        </div>
      </div>

      {/* Main Grid: Projects + Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Projects Column (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#0A224E] flex items-center gap-2">
              <FolderKanban className="w-4 h-4 text-[#0062E6]" />
              <span>Active SOW Projects &amp; Milestones ({displayProjects.length})</span>
            </h2>
            <Link
              href="/dashboard/projects"
              className="text-xs text-[#0062E6] hover:underline font-bold transition-colors"
            >
              View Full Workspaces →
            </Link>
          </div>

          <div className="space-y-4">
            {displayProjects.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-4 hover:border-blue-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-blue-200">
                      {p.id} • {p.category || 'Custom Engineering'}
                    </span>
                    <h3 className="text-base font-extrabold text-[#0A224E] mt-1">{p.title}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0062E6]">{p.progress || 0}%</span>
                    <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#0062E6] h-full rounded-full"
                        style={{ width: `${p.progress || 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {p.requirements || 'SOW specifications active.'}
                </p>

                <div className="pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#475569]">
                    Lead: <strong className="text-[#0A224E]">{p.assignedTo || 'Vivek Pawar (CTO)'}</strong>
                  </span>
                  <Link
                    href="/dashboard/projects"
                    className="text-[#0062E6] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>Checklist Milestones</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices & Support Sidebar Column (1 col) */}
        <div className="space-y-6">
          {/* Recent Invoices Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-[#0A224E] flex items-center gap-1.5">
                <Receipt className="w-4 h-4 text-[#FF8800]" />
                <span>Milestone Invoices</span>
              </h3>
              <Link
                href="/dashboard/invoices"
                className="text-[11px] text-[#0062E6] hover:underline font-bold"
              >
                All Invoices →
              </Link>
            </div>

            <div className="space-y-3">
              {sampleInvoices.map((inv) => (
                <div
                  key={inv.id}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-2 text-xs"
                >
                  <div>
                    <div className="font-bold text-[#0A224E]">{inv.id}</div>
                    <div className="text-[11px] text-[#475569]">{inv.description}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-extrabold text-[#0A224E]">{inv.amount}</div>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        inv.status === 'PAID'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-[#FFF7ED] text-[#EA580C] border border-orange-200'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/dashboard/invoices"
              className="w-full py-2.5 px-3 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-[#0A224E] border border-[#E2E8F0] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Download Invoices &amp; Upload UTR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Direct Helpdesk Support Card */}
          <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-blue-200 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-white text-[#0062E6] border border-blue-200 flex items-center justify-center shadow-2xs">
              <LifeBuoy className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-extrabold text-[#0A224E]">Direct Engineering Support</h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Have questions regarding your sprint roadmap, API keys, or DNS mapping? Submit a query directly to your assigned pod.
            </p>
            <Link
              href="/dashboard/tickets"
              className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Raise Query to Lead Architect</span>
            </Link>
          </div>
        </div>
      </div>

      <ClientLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
