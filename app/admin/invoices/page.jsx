'use client';

import { useState } from 'react';
import { ReceiptText, Plus, CheckCircle2, AlertTriangle, Download, Building, Search, Clock, Sparkles } from 'lucide-react';

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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
            Financial Operations
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
            Manual Invoicing & Bank Wire Reconciliations
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Issue manual invoices, inspect submitted client bank UTR references, and confirm payment settlements.
          </p>
        </div>

        <button
          onClick={() => setShowCreate(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all self-start sm:self-auto"
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
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-1 rounded-lg border border-blue-200">
                    {inv.id}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                      inv.status === 'PAID'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : inv.status === 'PENDING_VERIFICATION'
                        ? 'bg-[#FFF7ED] text-[#EA580C] border-orange-200 animate-pulse'
                        : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}
                  >
                    {inv.status.replace('_', ' ')}
                  </span>
                  <span className="text-xs text-[#0A224E] font-bold">{inv.client}</span>
                </div>
                <h3 className="text-base font-bold text-[#0A224E] mt-2">{inv.description}</h3>
                <div className="text-xs text-[#475569] mt-1">
                  Project: <strong className="text-slate-800">{inv.project}</strong> • Due: {inv.dueDate}
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-[#E2E8F0]">
                <div className="text-right">
                  <span className="text-xs text-[#475569] font-medium block">Amount</span>
                  <span className="text-xl font-extrabold text-[#0A224E] font-mono">{inv.amount}</span>
                </div>

                <div className="flex items-center gap-2">
                  {inv.status === 'PENDING_VERIFICATION' && (
                    <button
                      onClick={() => handleVerifyPayment(inv.id)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verify Bank Wire</span>
                    </button>
                  )}
                  {inv.status === 'UNPAID' && (
                    <button
                      onClick={() => handleVerifyPayment(inv.id)}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0A224E] border border-slate-200 text-xs font-bold transition-colors"
                    >
                      Mark Paid
                    </button>
                  )}
                  <button
                    onClick={() => alert(`Downloading PDF for ${inv.id}`)}
                    className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] hover:text-[#0A224E] hover:border-slate-300 transition-colors"
                    title="Download Invoice"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* UTR Reference Details in Deep Console Navy */}
            {inv.utr && (
              <div className="p-3.5 rounded-xl bg-[#071736] text-white border border-slate-800 flex items-center justify-between text-xs font-mono shadow-inner">
                <span className="text-slate-300 flex items-center gap-2">
                  <span>Client Bank UTR:</span>
                  <strong className="text-[#FF8800] bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/30">
                    {inv.utr}
                  </strong>
                </span>
                <span className="text-slate-400 text-[11px] font-sans">Direct HDFC Current Account Transfer</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Create Invoice Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="max-w-md w-full bg-white border border-[#E2E8F0] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-[#E2E8F0]">
              <h3 className="font-extrabold text-[#0A224E] text-lg">Issue Manual Bank Invoice</h3>
              <button
                onClick={() => setShowCreate(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateInvoice} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Client / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Enterprises"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise ERP & Multi-Tenant Portal"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Milestone Description *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Phase 3 Backend Signoff & API Deployment"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Amount (INR) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="₹1,50,000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Due Date
                  </label>
                  <input
                    type="text"
                    placeholder="Nov 15, 2026"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2.5 pt-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white shadow-md shadow-orange-500/20 transition-all"
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
