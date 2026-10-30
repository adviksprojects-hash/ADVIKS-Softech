'use client';

import { useState } from 'react';
import {
  Receipt,
  Download,
  Building,
  CheckCircle2,
  Clock,
  AlertCircle,
  Copy,
  Send,
  Loader2,
} from 'lucide-react';

export default function ClientInvoicesPage() {
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2026-089',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      description: 'Phase 2 Milestone Signoff (UI System & DB Schema)',
      amount: '₹1,50,000',
      issueDate: 'Oct 20, 2026',
      dueDate: 'Nov 05, 2026',
      status: 'UNPAID',
      utr: '',
    },
    {
      id: 'INV-2026-074',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      description: 'Project Initiation Advance & SOW Execution',
      amount: '₹2,00,000',
      issueDate: 'Sep 01, 2026',
      dueDate: 'Sep 10, 2026',
      status: 'PAID',
      utr: 'HDFCR52026090500123',
    },
  ]);

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [utrInput, setUtrInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('50200012345678');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUtrSubmit = (e) => {
    e.preventDefault();
    if (!utrInput || !selectedInvoice) return;

    setSubmitting(true);
    setTimeout(() => {
      setInvoices((prev) =>
        prev.map((inv) =>
          inv.id === selectedInvoice.id
            ? { ...inv, status: 'PENDING_VERIFICATION', utr: utrInput }
            : inv
        )
      );
      setSubmitting(false);
      setSuccessMsg(`UTR "${utrInput}" submitted for ${selectedInvoice.id}. Admin will verify and mark as Paid.`);
      setSelectedInvoice(null);
      setUtrInput('');
    }, 700);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="pb-6 border-b border-slate-800">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Financials
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Invoices & Bank Transfer Billing
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Review milestone invoices, transfer directly via official company bank channels, and submit UTR references for verification.
        </p>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Official Bank Account Information Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-slate-950 border border-blue-900/40">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Official Beneficiary Bank Account</span>
            </div>
            <h3 className="text-lg font-bold text-white">ADVIKS SOFTECH PRIVATE LIMITED</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              All client payments are settled directly via NEFT, RTGS, IMPS, or UPI. We do not use third-party payment gateways. Please quote your Invoice ID in the transfer remarks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">BANK</span>
              <span className="text-white font-medium">HDFC Bank</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">ACCOUNT NUMBER</span>
              <div className="flex items-center gap-1">
                <span className="text-blue-400 font-bold">50200012345678</span>
                <button onClick={handleCopyAccount} className="text-slate-400 hover:text-white" title="Copy Account">
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">IFSC CODE</span>
              <span className="text-white font-medium">HDFC0001234</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">UPI VPA</span>
              <span className="text-emerald-400 font-medium">advikssoftech@hdfc</span>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices List */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
        <h2 className="text-base font-bold text-white mb-2">Issued Invoices</h2>

        <div className="space-y-3">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-400">{inv.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      inv.status === 'PAID'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : inv.status === 'PENDING_VERIFICATION'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}
                  >
                    {inv.status.replace('_', ' ')}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{inv.description}</h4>
                <div className="text-xs text-slate-400">
                  Project: <strong className="text-slate-300">{inv.project}</strong> • Due: {inv.dueDate}
                </div>
                {inv.utr && (
                  <div className="text-[11px] text-slate-400 font-mono">
                    Bank UTR Reference: <span className="text-slate-200">{inv.utr}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                <div className="text-right">
                  <div className="text-base font-bold text-white font-mono">{inv.amount}</div>
                  <div className="text-[10px] text-slate-500">Incl. GST</div>
                </div>

                <div className="flex items-center gap-2">
                  {inv.status === 'UNPAID' && (
                    <button
                      onClick={() => setSelectedInvoice(inv)}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
                    >
                      Submit UTR
                    </button>
                  )}
                  <button
                    onClick={() => alert(`Downloading PDF for invoice ${inv.id}`)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Download Tax Invoice PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UTR Submission Modal/Panel */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Submit Transfer Reference</h3>
              <button
                onClick={() => setSelectedInvoice(null)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Once you have transferred <strong className="text-white">{selectedInvoice.amount}</strong> for{' '}
              <span className="font-mono text-blue-400">{selectedInvoice.id}</span> to our HDFC Bank account, enter your bank’s UTR/Transaction number below:
            </p>

            <form onSubmit={handleUtrSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Bank UTR / Transaction Reference Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC20261030018894"
                  value={utrInput}
                  onChange={(e) => setUtrInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedInvoice(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm Submission</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
