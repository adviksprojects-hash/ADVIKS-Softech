'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  LifeBuoy,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  MessageSquare,
  Send,
  Sparkles,
  Zap,
  Check,
  UserCheck,
} from 'lucide-react';

export default function ClientTicketsPage() {
  const { addNotification, currentClient, projects } = useEmployeeAuth();

  const [tickets, setTickets] = useState([
    {
      id: 'TCK-401',
      title: 'Clarification regarding webhook latency on staging environment',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      createdAt: 'Oct 28, 2026',
      assignedStaff: 'Vivek Pawar (CTO)',
      latestReply: 'Lead Architect Vivek Pawar is reviewing the Redis event queue logs. Fix deploying to staging today.',
    },
    {
      id: 'TCK-389',
      title: 'Update client organization logo assets for dark mode',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      priority: 'LOW',
      status: 'RESOLVED',
      createdAt: 'Oct 14, 2026',
      assignedStaff: 'Kaustubh Ronge (CEO)',
      latestReply: 'SVGs replaced and cache invalidated across CDN.',
    },
  ]);

  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [selectedProject, setSelectedProject] = useState(projects[0]?.title || 'Enterprise ERP Portal');
  const [newPriority, setNewPriority] = useState('MEDIUM');
  const [newDesc, setNewDesc] = useState('');
  const [ticketSuccess, setTicketSuccess] = useState(false);

  const quickTemplates = [
    { label: 'Webhook / API Latency', title: 'Webhook latency investigation on staging', desc: 'Observed webhook delivery taking > 2 seconds during load testing. Please review queue logs.' },
    { label: 'Domain & SSL Handover', title: 'Domain DNS records and SSL cert configuration', desc: 'Need guidance mapping CNAME and A records to the production edge proxy.' },
    { label: 'Milestone Invoice Query', title: 'Invoice milestone payment receipt inquiry', desc: 'Transferred payment via NEFT. Attaching UTR number for verification and signoff.' },
    { label: 'New Scope Request', title: 'Scope addition: WhatsApp notifications integration', desc: 'Would like to add WhatsApp automated alerts to our customer checkout flow.' },
  ];

  const handleApplyTemplate = (tmpl) => {
    setNewTitle(tmpl.title);
    setNewDesc(tmpl.desc);
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;

    const ticketId = `TCK-${Math.floor(100 + Math.random() * 900)}`;
    const newTicket = {
      id: ticketId,
      title: newTitle.trim(),
      project: selectedProject,
      priority: newPriority,
      status: 'OPEN',
      createdAt: 'Just now',
      latestReply: 'Ticket received by ADVIKS on-call engineering pod. Initial triage response guaranteed in < 2 hours.',
    };

    setTickets([newTicket, ...tickets]);

    // Dispatch real-time alert to Super Admin team
    addNotification({
      title: `Client Ticket Raised: ${newTitle.slice(0, 40)}...`,
      message: `${currentClient?.name || 'Client'} submitted ticket ${ticketId} (${newPriority} priority) for ${selectedProject}.`,
      type: 'ticket',
      target: 'admin',
      link: '/admin/tickets',
    });

    setTicketSuccess(true);
    setNewTitle('');
    setNewDesc('');

    setTimeout(() => {
      setTicketSuccess(false);
      setShowCreate(false);
    }, 1500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0062E6] border border-blue-200 text-xs font-bold mb-2">
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Dedicated SLA Helpdesk &amp; Rapid Queries</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
            Client Support &amp; Engineering Tickets
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Submit bug reports, feature requests, or technical inquiries directly to your assigned engineering pod with sub-2h SLA response.
          </p>
        </div>

        <button
          onClick={() => setShowCreate(!showCreate)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-xs font-bold text-white transition-all shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Raise Priority Ticket</span>
        </button>
      </div>

      {/* Ticket Creation Drawer/Form */}
      {showCreate && (
        <form
          onSubmit={handleCreateTicket}
          className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] space-y-4 shadow-xl animate-in fade-in"
        >
          <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
            <div>
              <h3 className="font-extrabold text-[#0A224E] text-base">Raise a Technical Support Query</h3>
              <p className="text-xs text-[#475569]">Routes straight to Lead Architect &amp; on-call engineer.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowCreate(false)}
              className="text-[#475569] hover:text-[#0A224E] text-xs font-bold"
            >
              Cancel
            </button>
          </div>

          {ticketSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ticket received! Engineering pod notified and reviewing logs.</span>
            </div>
          )}

          {/* Quick Query Templates */}
          <div>
            <span className="text-[11px] font-bold text-[#475569] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>1-Click Common Query Templates</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {quickTemplates.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleApplyTemplate(t)}
                  className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-[#EFF6FF] hover:border-blue-200 text-[11px] text-[#0A224E] font-medium transition-colors"
                >
                  + {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Related Project SOW *
              </label>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs focus:outline-none focus:border-[#0062E6]"
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title.split('(')[0].trim()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Priority Level
              </label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs focus:outline-none focus:border-[#0062E6]"
              >
                <option value="LOW">Low (Cosmetic tweak / question)</option>
                <option value="MEDIUM">Medium (Feature clarification)</option>
                <option value="HIGH">High (Sprint blocker)</option>
                <option value="URGENT">Urgent (Staging / Production alert)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Ticket Title / Summary *
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Inconsistent webhook delivery on checkout"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] placeholder:text-slate-400 text-xs focus:outline-none focus:border-[#0062E6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
              Detailed Description &amp; Technical Specs *
            </label>
            <textarea
              required
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Describe what occurred, steps to reproduce, or requested scope clarification..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] placeholder:text-slate-400 text-xs focus:outline-none focus:border-[#0062E6] leading-relaxed"
            />
          </div>

          <div className="flex justify-end pt-2 border-t border-[#E2E8F0]">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-xs font-extrabold text-white transition-all shadow-xs flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Ticket to Engineering Pod</span>
            </button>
          </div>
        </form>
      )}

      {/* Tickets List */}
      <div className="space-y-4">
        {tickets.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-3xl bg-white border border-[#E2E8F0] space-y-4 shadow-2xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-2 py-0.5 rounded border border-blue-200">
                  {t.id}
                </span>
                <span
                  className={`px-2.5 py-0.5 text-[10px] font-extrabold rounded-md border ${
                    t.priority === 'URGENT'
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : t.priority === 'HIGH'
                      ? 'bg-orange-50 text-orange-700 border-orange-200'
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}
                >
                  {t.priority}
                </span>
                <span className="text-xs text-slate-400">{t.createdAt}</span>
                {t.assignedStaff && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EFF6FF] text-[#0062E6] border border-blue-200">
                    <UserCheck className="w-3 h-3" />
                    <span>Assigned Lead: {t.assignedStaff}</span>
                  </span>
                )}
              </div>

              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                  t.status === 'RESOLVED'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-[#FFF7ED] text-[#EA580C] border-orange-200'
                }`}
              >
                {t.status}
              </span>
            </div>

            <div>
              <h3 className="text-base font-extrabold text-[#0A224E]">{t.title}</h3>
              <div className="text-xs text-[#475569] mt-0.5">Project: {t.project}</div>
            </div>

            {t.latestReply && (
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#0062E6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0A224E] block mb-0.5">Latest Pod Response:</span>
                  <p className="text-[#475569] leading-relaxed">{t.latestReply}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
