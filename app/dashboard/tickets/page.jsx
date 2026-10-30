'use client';

import { useState } from 'react';
import { LifeBuoy, Plus, CheckCircle2, Clock, AlertCircle, MessageSquare, Send } from 'lucide-react';

export default function ClientTicketsPage() {
  const [tickets, setTickets] = useState([
    {
      id: 'TCK-401',
      title: 'Clarification regarding webhook latency on staging environment',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      priority: 'MEDIUM',
      status: 'IN_PROGRESS',
      createdAt: 'Oct 28, 2026',
      latestReply: 'Lead Architect Siddharth is reviewing the Redis event queue logs. Fix deploying to staging today.',
    },
    {
      id: 'TCK-389',
      title: 'Update client organization logo assets for dark mode',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      priority: 'LOW',
      status: 'RESOLVED',
      createdAt: 'Oct 14, 2026',
      latestReply: 'SVGs replaced and cache invalidated across CDN.',
    },
  ]);

  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('MEDIUM');
  const [newDesc, setNewDesc] = useState('');

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;

    const newTicket = {
      id: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      title: newTitle,
      project: 'Enterprise ERP & Multi-Tenant Portal',
      priority: newPriority,
      status: 'OPEN',
      createdAt: 'Just now',
      latestReply: 'Ticket received. Assigned to engineering on-call engineer.',
    };

    setTickets([newTicket, ...tickets]);
    setShowCreate(false);
    setNewTitle('');
    setNewDesc('');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Helpdesk
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Client Support & Engineering Tickets
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Submit bug reports, feature requests, or technical inquiries directly to your assigned engineering pod.
          </p>
        </div>

        <button
          onClick={() => setShowCreate(!showCreate)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Raise Support Ticket</span>
        </button>
      </div>

      {/* Ticket Creation Drawer/Form */}
      {showCreate && (
        <form
          onSubmit={handleCreateTicket}
          className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl"
        >
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <h3 className="font-bold text-white text-sm">Raise a New Technical Support Ticket</h3>
            <button
              type="button"
              onClick={() => setShowCreate(false)}
              className="text-slate-400 hover:text-white text-xs"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Ticket Title / Summary *
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Inconsistent session timeout on client portal login"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Priority Level
              </label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="LOW">Low (Minor cosmetic / query)</option>
                <option value="MEDIUM">Medium (Standard feature)</option>
                <option value="HIGH">High (Impacts sprint release)</option>
                <option value="URGENT">Urgent (Staging / Prod down)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Detailed Description & Steps to Reproduce *
            </label>
            <textarea
              required
              rows={3}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Describe what happened, expected behavior, and include links or error logs if any..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Ticket to Queue</span>
            </button>
          </div>
        </form>
      )}

      {/* Ticket List */}
      <div className="space-y-4">
        {tickets.map((t) => (
          <div
            key={t.id}
            className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-blue-400">{t.id}</span>
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
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Priority: {t.priority}
                </span>
              </div>
              <span className="text-xs text-slate-500">{t.createdAt}</span>
            </div>

            <h3 className="text-base font-bold text-white">{t.title}</h3>
            <div className="text-xs text-slate-400">Project: {t.project}</div>

            {t.latestReply && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-300 block mb-0.5">Engineering Update:</span>
                  <span className="text-slate-400">{t.latestReply}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
