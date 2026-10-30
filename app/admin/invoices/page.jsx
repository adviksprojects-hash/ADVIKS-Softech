'use client';

import { useState } from 'react';
import { ReceiptText, Plus, CheckCircle2, AlertTriangle, Download, Building, Search, Clock } from 'lucide-react';

export default function AdminInvoicesPage() {
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2026-089',
      client: 'Acme Enterprises',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      description: 'Phase 2 Milestone Signoff (UI System & DB Schema)',
      amount: '₹1,50,000',
      status: 'PENDING_VERIFICATION',
      utr: 'HDFC20261030018894',
      issueDate: 'Oct 20, 2026',
      dueDate: 'Nov 05, 2026',
    },
    {
      id: 'INV-2026-074',
      client: 'Acme Enterprises',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      description: 'Project Initiation Advance & SOW Execution',
      amount: '₹2,00,000',
      status: 'PAID',
      utr: 'HDFCR52026090500123',
      issueDate: 'Sep 01, 2026',
      dueDate: 'Sep 10, 2026',
    },
    {
      id: 'INV-2026-065',
      client: 'OmniHealth AI',
      project: 'AI Automated Customer Support Engine',
      description: 'Architecture & Vector DB Blueprint',
      amount: '₹3,50,000',
      status: 'UNPAID',
      utr: '',
      issueDate: 'Oct 25, 2026',
      dueDate: 'Nov 10, 2026',
    },
  ]);

  const [showCreate, setShowCreate] = useState(false);
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleVerifyPayment = (id) => {
    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === id ? { ...inv, status: 'PAID' } : inv
      )
    );
  };

  const handleCreateInvoice = (e) => {
    e.preventDefault();
    if (!clientName || !amount) return;

    const newInv = {
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      client: clientName,
      project: projectName || 'Enterprise Platform',
      description: desc || 'Milestone Deliverable Fee',
      amount: amount.startsWith('₹') ? amount : `₹${amount}`,
      status: 'UNPAID',
      utr: '',
      issueDate: 'Today',
      dueDate: dueDate || '15 days from issue',
    };

    setInvoices([newInv, ...invoices]);
    setShowCreate(false);
    setClientName('');
    setProjectName('');
    setDesc('');
    setAmount('');
    setDueDate('');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Financial Operations
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Manual Invoicing & Bank Wire Reconciliations
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Issue manual invoices, inspect submitted client bank UTR references, and confirm payment settlements.
          </p>
        </div>

        <button
          onClick={() => setShowCreate(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Issue New Invoice</span>
        </button>
      </div>

      {/* Invoice List */}
      <div className="space-y-4">
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-400">{inv.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      inv.status === 'PAID'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : inv.status === 'PENDING_VERIFICATION'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}
                  >
                    {inv.status.replace('_', ' ')}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{inv.client}</span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">{inv.description}</h3>
                <div className="text-xs text-slate-400">
                  Project: <strong className="text-slate-300">{inv.project}</strong> • Due: {inv.dueDate}
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Amount</span>
                  <span className="text-lg font-bold text-white font-mono">{inv.amount}</span>
                </div>

                <div className="flex items-center gap-2">
                  {inv.status === 'PENDING_VERIFICATION' && (
                    <button
                      onClick={() => handleVerifyPayment(inv.id)}
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verify Bank Wire</span>
                    </button>
                  )}
                  {inv.status === 'UNPAID' && (
                    <button
                      onClick={() => handleVerifyPayment(inv.id)}
                      className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Mark Paid
                    </button>
                  )}
                  <button
                    onClick={() => alert(`Downloading PDF for ${inv.id}`)}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                    title="Download Invoice"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* UTR Reference Details */}
            {inv.utr && (
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">
                  Client Bank UTR: <strong className="text-amber-400">{inv.utr}</strong>
                </span>
                <span className="text-slate-500 text-[11px]">Direct HDFC Current Account Transfer</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Create Invoice Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Issue Manual Bank Invoice</h3>
              <button onClick={() => setShowCreate(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateInvoice} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Client / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Enterprises"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise ERP & Multi-Tenant Portal"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Milestone Description *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Phase 3 Backend Signoff & API Deployment"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Amount (INR) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="₹1,50,000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Due Date
                  </label>
                  <input
                    type="text"
                    placeholder="Nov 15, 2026"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950"
                >
                  Create & Issue Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
