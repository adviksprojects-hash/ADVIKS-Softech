'use client';

import { useState } from 'react';
import {
  Receipt,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Search,
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
    },
    {
      id: 'INV-2026-074',
      project: 'Enterprise ERP & Multi-Tenant Portal',
      description: 'Project Initiation Advance & SOW Execution',
      amount: '₹2,00,000',
      issueDate: 'Sep 01, 2026',
      dueDate: 'Sep 10, 2026',
      status: 'PAID',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Financials & Billing
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Invoices & Statements
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Access and download your project milestone invoices, billing history, and payment statuses.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Total Invoiced</span>
          <span className="text-xl font-bold text-white font-mono">₹3,50,000</span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Settled / Paid</span>
          <span className="text-xl font-bold text-emerald-400 font-mono">₹2,00,000</span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium block mb-1">Pending Balance</span>
          <span className="text-xl font-bold text-amber-400 font-mono">₹1,50,000</span>
        </div>
      </div>

      {/* Invoices List */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Billing Records</span>
          </h2>
          <span className="text-xs text-slate-500">{filteredInvoices.length} invoices found</span>
        </div>

        <div className="space-y-3">
          {filteredInvoices.map((inv) => (
            <div
              key={inv.id}
              className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-400">{inv.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      inv.status === 'PAID'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {inv.status}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{inv.description}</h4>
                <div className="text-xs text-slate-400">
                  Project: <strong className="text-slate-300">{inv.project}</strong> • Issued: {inv.issueDate} • Due: {inv.dueDate}
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                <div className="text-right">
                  <div className="text-base font-bold text-white font-mono">{inv.amount}</div>
                  <div className="text-[10px] text-slate-500">Tax Compliant</div>
                </div>

                <button
                  onClick={() => alert(`Downloading official PDF statement for ${inv.id}`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  title="Download Tax Invoice PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
