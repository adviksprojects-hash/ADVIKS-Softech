'use client';

import { useState } from 'react';
import { LifeBuoy, CheckCircle2, Clock, MessageSquare, AlertCircle, Send } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Client Support
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Ticket Helpdesk Queue & Engineering SLAs
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Review client support requests, assign priority responses, and publish engineering updates.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            Active Tickets: {tickets.filter((t) => t.status !== 'RESOLVED').length}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {tickets.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-amber-400">{t.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      t.status === 'RESOLVED'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : t.status === 'IN_PROGRESS'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-amber-500/10 text-amber-400'
                    }`}
                  >
                    {t.status.replace('_', ' ')}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      t.priority === 'URGENT'
                        ? 'bg-rose-500/20 text-rose-300'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    Priority: {t.priority}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{t.client}</span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">{t.title}</h3>
                <div className="text-xs text-slate-400">
                  Project: <strong className="text-slate-300">{t.project}</strong> • Created: {t.createdAt}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveReplyTicket(t);
                    setReplyText(t.latestReply || '');
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  Reply / Update
                </button>
                {t.status !== 'RESOLVED' && (
                  <button
                    onClick={() => handleResolve(t.id)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 text-xs font-semibold border border-emerald-500/30 transition-colors"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>

            {t.latestReply && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300 block mb-0.5">Current Engineering Note:</span>
                  <p className="text-slate-400">{t.latestReply}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reply Modal */}
      {activeReplyTicket && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">
                Reply to {activeReplyTicket.id}
              </h3>
              <button onClick={() => setActiveReplyTicket(null)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Ticket: <strong className="text-white">{activeReplyTicket.title}</strong>
            </p>

            <form onSubmit={handleSendReply} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Engineering Update / Message to Client *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide technical status, commit SHA or resolution details..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveReplyTicket(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1.5"
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
