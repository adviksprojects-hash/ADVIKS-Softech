'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  Receipt,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Search,
  Building,
  CreditCard,
  Copy,
  Send,
  Check,
  ShieldCheck,
  IndianRupee,
} from 'lucide-react';

export default function ClientInvoicesPage() {
  const { currentClient, addNotification } = useEmployeeAuth();

  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2026-089',
      project: 'Paras Business Park Digital Hub & Leasing Engine',
      description: 'Phase 2 Milestone Signoff (SVG Floor Plans & Lead Webhooks)',
      amount: '₹1,50,000',
      issueDate: 'Oct 20, 2026',
      dueDate: 'Nov 05, 2026',
      status: 'UNPAID',
      utr: null,
    },
    {
      id: 'INV-2026-074',
      project: 'Paras Business Park Digital Hub & Leasing Engine',
      description: 'Project Initiation Advance & SOW Scope Blueprint',
      amount: '₹2,00,000',
      issueDate: 'Sep 01, 2026',
      dueDate: 'Sep 10, 2026',
      status: 'PAID',
      utr: 'HDFC992817291',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoiceForUtr, setSelectedInvoiceForUtr] = useState(null);
  const [utrInput, setUtrInput] = useState('');
  const [copiedField, setCopiedField] = useState('');
  const [utrSuccess, setUtrSuccess] = useState('');

  const companyBankInfo = {
    accountName: 'ADVIKS SOFTECH PRIVATE LIMITED',
    bankName: 'HDFC Bank Ltd',
    accountNumber: '50200088921045',
    ifscCode: 'HDFC0000240',
    branch: 'Shivajinagar, Pune, MH 411005',
    upiId: 'adviks.pay@okaxis',
  };

  const handleCopy = (text, field) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleRecordUtr = (e) => {
    e.preventDefault();
    if (!selectedInvoiceForUtr || !utrInput.trim()) return;

    setInvoices(
      invoices.map((inv) =>
        inv.id === selectedInvoiceForUtr.id
          ? { ...inv, status: 'PENDING_VERIFICATION', utr: utrInput.trim() }
          : inv
      )
    );

    // Dispatch real-time alert to CFO Dhiraj Gaikwad
    addNotification({
      title: `Invoice Payment UTR Uploaded: ${selectedInvoiceForUtr.id}`,
      message: `${currentClient?.name || 'Client'} submitted UTR ${utrInput.trim()} (${selectedInvoiceForUtr.amount}) for reconciliation.`,
      type: 'finance',
      target: 'admin',
      link: '/admin/finance',
    });

    setUtrSuccess(`UTR ${utrInput.trim()} submitted for CFO verification!`);
    setTimeout(() => {
      setUtrSuccess('');
      setSelectedInvoiceForUtr(null);
      setUtrInput('');
    }, 2000);
  };

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="pb-6 border-b border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-2">
            <Receipt className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fiscal Ledger &amp; Wire Verification</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
            Milestone Invoices &amp; Bank Transfer Info
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Access tax-compliant milestone invoices, corporate wire transfer details, and submit bank UTRs for reconciliation.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search invoice number or milestone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs text-[#0A224E] placeholder-slate-400 focus:outline-none focus:border-[#0062E6]"
          />
        </div>
      </div>

      {/* Corporate Wire & Bank Transfer Details Card */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6]">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062E6]">
                Official Corporate Account
              </span>
              <h3 className="text-base font-extrabold text-[#0A224E]">
                ADVIKS Softech Private Limited (Bank Details)
              </h3>
            </div>
          </div>

          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-bold self-start sm:self-auto">
            Direct RTGS / NEFT / IMPS / UPI
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">Account Name</span>
            <div className="font-extrabold text-[#0A224E] truncate">{companyBankInfo.accountName}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">Bank &amp; Branch</span>
            <div className="font-extrabold text-[#0A224E] truncate">{companyBankInfo.bankName} — {companyBankInfo.branch}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#475569] uppercase tracking-wider font-bold">Account Number</span>
              <button
                onClick={() => handleCopy(companyBankInfo.accountNumber, 'acct')}
                className="text-[10px] text-[#0062E6] hover:underline flex items-center gap-1 font-bold"
              >
                {copiedField === 'acct' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'acct' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="font-mono font-extrabold text-[#0A224E]">{companyBankInfo.accountNumber}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#475569] uppercase tracking-wider font-bold">IFSC Code &amp; UPI</span>
              <button
                onClick={() => handleCopy(companyBankInfo.ifscCode, 'ifsc')}
                className="text-[10px] text-[#0062E6] hover:underline flex items-center gap-1 font-bold"
              >
                {copiedField === 'ifsc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedField === 'ifsc' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="font-mono font-extrabold text-[#EA580C]">{companyBankInfo.ifscCode}</div>
          </div>
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <span className="text-xs text-[#475569] font-bold uppercase tracking-wider block mb-1">Total SOW Invoiced</span>
          <span className="text-2xl font-black text-[#0A224E] font-mono">₹3,50,000</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <span className="text-xs text-[#475569] font-bold uppercase tracking-wider block mb-1">Settled &amp; Reconciled</span>
          <span className="text-2xl font-black text-emerald-600 font-mono">₹2,00,000</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
          <span className="text-xs text-[#475569] font-bold uppercase tracking-wider block mb-1">Pending Milestone Balance</span>
          <span className="text-2xl font-black text-[#EA580C] font-mono">₹1,50,000</span>
        </div>
      </div>

      {/* Invoices List */}
      <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] space-y-4 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-extrabold text-[#0A224E] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0062E6]" />
            <span>Milestone Billing Records</span>
          </h2>
          <span className="text-xs text-[#475569]">{filteredInvoices.length} invoices found</span>
        </div>

        <div className="space-y-3">
          {filteredInvoices.map((inv) => (
            <div
              key={inv.id}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#0062E6] bg-[#EFF6FF] px-2 py-0.5 rounded border border-blue-200">
                    {inv.id}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${
                      inv.status === 'PAID'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : inv.status === 'PENDING_VERIFICATION'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-[#FFF7ED] text-[#EA580C] border-orange-200'
                    }`}
                  >
                    {inv.status === 'PENDING_VERIFICATION' ? 'UTR Under CFO Review' : inv.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#0A224E]">{inv.description}</h4>
                <div className="text-xs text-[#475569]">
                  Project: <strong className="text-[#0A224E]">{inv.project}</strong> • Issued: {inv.issueDate} • Due: {inv.dueDate}
                </div>
                {inv.utr && (
                  <div className="text-[11px] text-emerald-600 font-mono mt-1 font-semibold">
                    Recorded Bank UTR: <strong>{inv.utr}</strong>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-[#E2E8F0]">
                <div className="text-right">
                  <div className="text-lg font-black text-[#0A224E] font-mono">{inv.amount}</div>
                  <div className="text-[10px] text-slate-400">GST Tax Invoice</div>
                </div>

                <div className="flex items-center gap-2">
                  {inv.status === 'UNPAID' && (
                    <button
                      onClick={() => setSelectedInvoiceForUtr(inv)}
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold transition-all shadow-xs"
                    >
                      Submit UTR Number
                    </button>
                  )}

                  <button
                    onClick={() => alert(`Downloading official PDF GST statement for ${inv.id}`)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-xs font-bold text-[#0A224E] border border-[#E2E8F0] shadow-2xs transition-colors"
                    title="Download Tax Invoice PDF"
                  >
                    <Download className="w-3.5 h-3.5 text-[#475569]" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Submit UTR Number */}
      {selectedInvoiceForUtr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-2xl text-[#0A224E]">
            <h3 className="text-lg font-extrabold text-[#0A224E]">
              Submit Bank Transfer UTR Number
            </h3>
            <p className="text-xs text-[#475569] mt-1">
              For {selectedInvoiceForUtr.id} ({selectedInvoiceForUtr.amount})
            </p>

            {utrSuccess && (
              <div className="my-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{utrSuccess}</span>
              </div>
            )}

            <form onSubmit={handleRecordUtr} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1">
                  Bank NEFT / IMPS / UPI Reference UTR *
                </label>
                <input
                  type="text"
                  required
                  value={utrInput}
                  onChange={(e) => setUtrInput(e.target.value)}
                  placeholder="e.g. HDFC9928172901 or 3399120918"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] font-mono placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedInvoiceForUtr(null)}
                  className="py-2 px-4 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:bg-[#F8FAFC]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold shadow-xs"
                >
                  Confirm &amp; Notify CFO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
