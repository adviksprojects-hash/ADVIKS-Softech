'use client';

import { useState } from 'react';
import { LifeBuoy, CheckCircle2, Clock, MessageSquare, AlertCircle, Send, Sparkles } from 'lucide-react';

export default function AdminTicketsPage() {
  const [tickets, setTickets] = useState([
    {
      id: 'TCK-401',
      client: 'Acme Enterprises',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      title: 'Clarification regarding webhook latency on staging environment',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      createdAt: 'Oct 28, 2026',
      latestReply: 'Lead Architect Vivek Pawar is reviewing the Redis event queue logs. Fix deploying to staging today.',
    },
    {
      id: 'TCK-389',
      client: 'Acme Enterprises',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      title: 'Update client organization logo assets for dark mode',
      priority: 'LOW',
      status: 'RESOLVED',
      createdAt: 'Oct 14, 2026',
      latestReply: 'SVGs replaced and cache invalidated across CDN.',
    },
    {
      id: 'TCK-405',
      client: 'OmniHealth AI',
      project: 'AI Automated Customer Support Engine',
      title: 'Vector embeddings dimension mismatch in sandbox ingestion',
      priority: 'URGENT',
      status: 'OPEN',
      createdAt: 'Today, 11:30',
      latestReply: '',
    },
  ]);

  const [activeReplyTicket, setActiveReplyTicket] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText || !activeReplyTicket) return;

    setTickets((prev) =>
      prev.map((t) =>
        t.id === activeReplyTicket.id
          ? { ...t, latestReply: replyText, status: 'IN_PROGRESS' }
          : t
      )
    );
    setActiveReplyTicket(null);
    setReplyText('');
  };

  const handleResolve = (id) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'RESOLVED' } : t))
    );
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
            Client Support
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
            Ticket Helpdesk Queue & Engineering SLAs
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Review client support requests, assign priority responses, and publish engineering updates.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#0A224E] bg-white border border-[#E2E8F0] px-3.5 py-2 rounded-xl shadow-sm">
            Active Tickets: <strong className="text-[#EA580C]">{tickets.filter((t) => t.status !== 'RESOLVED').length}</strong>
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {tickets.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-orange-200">
                    {t.id}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                      t.status === 'RESOLVED'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : t.status === 'IN_PROGRESS'
                        ? 'bg-blue-50 text-[#0062E6] border-blue-200'
                        : 'bg-[#FFF7ED] text-[#EA580C] border-orange-200'
                    }`}
                  >
                    {t.status.replace('_', ' ')}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      t.priority === 'URGENT'
                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    Priority: {t.priority}
                  </span>
                  <span className="text-xs text-[#0A224E] font-bold">{t.client}</span>
                </div>
                <h3 className="text-base font-bold text-[#0A224E] mt-2">{t.title}</h3>
                <div className="text-xs text-[#475569] mt-1">
                  Project: <strong className="text-slate-800">{t.project}</strong> • Created: {t.createdAt}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveReplyTicket(t);
                    setReplyText(t.latestReply || '');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
                >
                  Reply / Update
                </button>
                {t.status !== 'RESOLVED' && (
                  <button
                    onClick={() => handleResolve(t.id)}
                    className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 transition-colors"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>

            {t.latestReply && (
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-[#FF8800] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0A224E] block mb-1">Current Engineering Note:</span>
                  <p className="text-[#475569] font-medium leading-relaxed">{t.latestReply}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reply Modal */}
      {activeReplyTicket && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="max-w-md w-full bg-white border border-[#E2E8F0] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
              <h3 className="font-extrabold text-[#0A224E] text-base">
                Reply to {activeReplyTicket.id}
              </h3>
              <button
                onClick={() => setActiveReplyTicket(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#475569]">
              Ticket: <strong className="text-[#0A224E]">{activeReplyTicket.title}</strong>
            </p>

            <form onSubmit={handleSendReply} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Engineering Update / Message to Client *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide technical status, commit SHA or resolution details..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                />
              </div>

              <div className="flex justify-end gap-2.5 pt-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setActiveReplyTicket(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white flex items-center gap-1.5 shadow-md shadow-orange-500/20 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Update</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
