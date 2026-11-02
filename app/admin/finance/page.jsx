'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { EXPENSE_CATEGORIES } from '@/lib/financeData';
import {
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  Plus,
  ArrowRight,
  Receipt,
  Building,
  User,
  CreditCard,
  FileText,
  Calendar,
  Filter,
  Eye,
  Check,
  X,
  Sparkles,
  Send,
  HelpCircle,
  Layers,
  TrendingDown,
  TrendingUp,
  Download,
  Trash2,
} from 'lucide-react';

export default function AdminFinancePage() {
  const {
    currentUser,
    expenseClaims,
    addExpenseClaim,
    approveExpenseClaim,
    markClaimReimbursed,
    rejectExpenseClaim,
    deleteExpenseClaim,
    projects,
  } = useEmployeeAuth();

  // Active view tab
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'submit', 'my-claims', 'client-ledger'
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL', 'PENDING_APPROVAL', 'APPROVED', 'REIMBURSED', 'REJECTED'

  // Modal states
  const [inspectClaim, setInspectClaim] = useState(null);
  const [settleModalClaim, setSettleModalClaim] = useState(null);
  const [utrInput, setUtrInput] = useState('');
  const [settleNotes, setSettleNotes] = useState('');
  const [cfoReviewNotes, setCfoReviewNotes] = useState('');

  // Submit claim form state
  const [formTitle, setFormTitle] = useState('');
  const [formClient, setFormClient] = useState(projects[0]?.clientName || 'VyaparStock In-House');
  const [formAmount, setFormAmount] = useState('');
  const [formCategory, setFormCategory] = useState(EXPENSE_CATEGORIES[0]);
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);
  const [formDesc, setFormDesc] = useState('');
  const [formReceiptRef, setFormReceiptRef] = useState('');
  const [formUpi, setFormUpi] = useState('adviks.member@okaxis');
  const [formPaymentMethod, setFormPaymentMethod] = useState('Personal UPI / Card');
  const [formSpentBy, setFormSpentBy] = useState(currentUser?.name || 'Vivek Pawar');
  const [formSpentByEmail, setFormSpentByEmail] = useState(currentUser?.email || 'vivekpawar932564@gmail.com');
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // Calculations for financial stats
  const totalClaimsCount = expenseClaims.length;
  const totalIncurred = expenseClaims.reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const totalReimbursed = expenseClaims
    .filter((c) => c.status === 'REIMBURSED')
    .reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const totalPendingPayout = expenseClaims
    .filter((c) => c.status === 'PENDING_APPROVAL' || c.status === 'APPROVED')
    .reduce((acc, c) => acc + (Number(c.amount) || 0), 0);
  const pendingActionCount = expenseClaims.filter(
    (c) => c.status === 'PENDING_APPROVAL'
  ).length;

  // Filtered claims based on tab & filter
  const currentUserName = currentUser?.name?.toLowerCase() || '';
  const currentUserEmail = currentUser?.email?.toLowerCase() || '';

  const displayedClaims = expenseClaims.filter((claim) => {
    // If in "my-claims" tab, filter strictly by user
    if (activeTab === 'my-claims') {
      const isMine =
        (claim.spentBy && claim.spentBy.toLowerCase().includes(currentUserName)) ||
        (claim.spentByEmail && claim.spentByEmail.toLowerCase() === currentUserEmail);
      if (!isMine) return false;
    }

    // Status filter
    if (statusFilter !== 'ALL' && claim.status !== statusFilter) {
      return false;
    }

    return true;
  });

  const handleCreateClaim = (e) => {
    e.preventDefault();
    if (!formTitle || !formAmount || !formClient) return;

    const newClaim = addExpenseClaim({
      title: formTitle.trim(),
      clientName: formClient.trim(),
      amount: Number(formAmount),
      category: formCategory,
      spentDate: formDate,
      description: formDesc.trim(),
      receiptRef: formReceiptRef.trim() || `REC-${Date.now().toString().slice(-6)}`,
      paymentMethod: formPaymentMethod,
      upiId: formUpi.trim(),
      spentBy: formSpentBy.trim() || currentUser?.name || 'Team Member',
      spentByEmail: formSpentByEmail.trim() || currentUser?.email || '',
    });

    setFormSuccessMessage(`Claim #${newClaim.claimNumber} registered successfully for CFO review!`);
    setFormTitle('');
    setFormAmount('');
    setFormDesc('');
    setFormReceiptRef('');

    setTimeout(() => {
      setFormSuccessMessage('');
      setActiveTab('all');
    }, 2000);
  };

  const handleSettlePayout = (e) => {
    e.preventDefault();
    if (!settleModalClaim) return;

    markClaimReimbursed(settleModalClaim.id, {
      utrNumber: utrInput.trim() || `UTR-${Date.now().toString().slice(-8)}`,
      cfoNotes: settleNotes.trim() || 'Reimbursed to member via bank NEFT / UPI transfer.',
    });

    setSettleModalClaim(null);
    setUtrInput('');
    setSettleNotes('');
  };

  const handleApprove = (claimId) => {
    approveExpenseClaim(claimId, cfoReviewNotes.trim() || 'Approved by CFO for upcoming reimbursement cycle.');
    setCfoReviewNotes('');
    if (inspectClaim) setInspectClaim(null);
  };

  const handleReject = (claimId) => {
    rejectExpenseClaim(claimId, cfoReviewNotes.trim() || 'Claim rejected after CFO expense audit.');
    setCfoReviewNotes('');
    if (inspectClaim) setInspectClaim(null);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-2">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
            <span>CFO Fiscal Governance &amp; Treasury Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] tracking-tight">
            Finance &amp; Member Expense Reimbursements
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Governed by <span className="text-[#FF8800] font-bold">Dhiraj Gaikwad (Chief Financial Officer)</span>. Track money invested for client projects and disburse company refunds with verified UTRs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveTab('submit')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold shadow-xs transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Submit Expense Claim (Request Refund)</span>
          </button>
        </div>
      </div>

      {/* Financial KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Claims Incurred */}
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">
              Total Incurred Claims
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#EFF6FF] text-[#0062E6] flex items-center justify-center">
              <Receipt className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-[#0A224E]">
            ₹{totalIncurred.toLocaleString('en-IN')}
          </div>
          <div className="mt-1 text-[11px] text-[#475569] flex items-center gap-1">
            <span className="font-mono font-bold text-[#0062E6]">{totalClaimsCount}</span>
            <span>total member out-of-pocket submissions</span>
          </div>
        </div>

        {/* Card 2: Reimbursed to Members */}
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">
              Reimbursed to Members
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-emerald-600">
            ₹{totalReimbursed.toLocaleString('en-IN')}
          </div>
          <div className="mt-1 text-[11px] text-[#475569] flex items-center gap-1">
            <span className="font-mono font-bold text-emerald-600">
              {expenseClaims.filter((c) => c.status === 'REIMBURSED').length}
            </span>
            <span>claims settled with bank UTRs</span>
          </div>
        </div>

        {/* Card 3: Pending CFO Action */}
        <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">
              Pending CFO Action
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#FFF7ED] text-[#FF8800] flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-[#EA580C]">
            ₹{totalPendingPayout.toLocaleString('en-IN')}
          </div>
          <div className="mt-1 text-[11px] text-[#475569] flex items-center gap-1">
            <span className="font-mono font-bold text-[#EA580C]">{pendingActionCount}</span>
            <span>claims awaiting approval or payout</span>
          </div>
        </div>

        {/* Card 4: CFO Governance Pill */}
        <div className="p-5 rounded-2xl bg-[#0A224E] border border-blue-900/50 shadow-2xs relative overflow-hidden text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
              Treasury Officer
            </span>
            <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-lg font-black text-white truncate">
            Dhiraj Gaikwad
          </div>
          <div className="mt-1 text-[11px] text-blue-200 font-medium">
            Co-Founder &amp; CFO (Signatory Authority)
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0] pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
              activeTab === 'all'
                ? 'bg-[#0062E6] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:text-[#0A224E] border border-[#E2E8F0]'
            }`}
          >
            All Expense Claims &amp; Payouts ({expenseClaims.length})
          </button>

          <button
            onClick={() => setActiveTab('submit')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
              activeTab === 'submit'
                ? 'bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:text-[#0A224E] border border-[#E2E8F0]'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Submit New Claim</span>
          </button>

          <button
            onClick={() => setActiveTab('my-claims')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
              activeTab === 'my-claims'
                ? 'bg-[#0062E6] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:text-[#0A224E] border border-[#E2E8F0]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>My Personal Refund Claims</span>
          </button>

          <button
            onClick={() => setActiveTab('client-ledger')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
              activeTab === 'client-ledger'
                ? 'bg-[#0062E6] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:text-[#0A224E] border border-[#E2E8F0]'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Client SOW Budget Ledger</span>
          </button>
        </div>

        {/* Status Pill Filters (Only when on Claims list tabs) */}
        {(activeTab === 'all' || activeTab === 'my-claims') && (
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E2E8F0] shadow-2xs">
            {['ALL', 'PENDING_APPROVAL', 'APPROVED', 'REIMBURSED'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                  statusFilter === st
                    ? 'bg-[#F8FAFC] text-[#0A224E] border border-[#E2E8F0] shadow-2xs'
                    : 'text-[#475569] hover:text-[#0A224E]'
                }`}
              >
                {st === 'ALL'
                  ? 'All'
                  : st === 'PENDING_APPROVAL'
                  ? 'Pending Review'
                  : st === 'APPROVED'
                  ? 'Approved'
                  : 'Paid / Settled'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* TAB 1 & 2: Claims Table List */}
      {(activeTab === 'all' || activeTab === 'my-claims') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#475569] px-1">
            <span>
              Showing <strong className="text-[#0A224E]">{displayedClaims.length}</strong> claims
              {activeTab === 'my-claims' ? ' submitted by you' : ''}
            </span>
            <span className="text-[11px] text-slate-400">
              CFO can review, approve, and record bank UTRs directly from each row.
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#0A224E]">
                <thead className="bg-[#F8FAFC] text-[11px] font-extrabold uppercase tracking-wider text-[#0A224E] border-b border-[#E2E8F0]">
                  <tr>
                    <th className="py-3.5 px-4">Claim # &amp; Date</th>
                    <th className="py-3.5 px-4">Claimant (Member)</th>
                    <th className="py-3.5 px-4">Client / Project</th>
                    <th className="py-3.5 px-4">Expense Details</th>
                    <th className="py-3.5 px-4">Amount</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">CFO Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {displayedClaims.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400 text-xs">
                        No expense claims found matching this filter.
                      </td>
                    </tr>
                  ) : (
                    displayedClaims.map((claim) => {
                      const isPending = claim.status === 'PENDING_APPROVAL';
                      const isApproved = claim.status === 'APPROVED';
                      const isReimbursed = claim.status === 'REIMBURSED';
                      const isRejected = claim.status === 'REJECTED';

                      return (
                        <tr
                          key={claim.id}
                          className="hover:bg-[#F8FAFC] transition-colors group"
                        >
                          {/* Claim # & Date */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <div className="font-mono font-bold text-[#0A224E]">{claim.claimNumber}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-slate-400" />
                              <span>{claim.spentDate}</span>
                            </div>
                          </td>

                          {/* Claimant */}
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-[#0A224E]">{claim.spentBy}</div>
                            <div className="text-[10px] text-[#475569] truncate max-w-[150px]">
                              {claim.spentByEmail || claim.upiId}
                            </div>
                          </td>

                          {/* Client / Project */}
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-[#0A224E]">{claim.clientName}</div>
                            <span className="inline-block mt-0.5 text-[10px] text-[#0062E6] bg-[#EFF6FF] px-2 py-0.5 rounded border border-blue-200">
                              {claim.category}
                            </span>
                          </td>

                          {/* Expense Details */}
                          <td className="py-3.5 px-4 max-w-xs">
                            <div className="font-bold text-[#0A224E] truncate" title={claim.title}>
                              {claim.title}
                            </div>
                            <div className="text-[11px] text-[#475569] truncate mt-0.5" title={claim.description}>
                              {claim.description}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-1 font-mono">
                              Ref: {claim.receiptRef}
                            </div>
                          </td>

                          {/* Amount */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <div className="text-sm font-black text-[#0A224E]">
                              ₹{claim.amount.toLocaleString('en-IN')}
                            </div>
                            <div className="text-[10px] text-slate-400">{claim.paymentMethod}</div>
                          </td>

                          {/* Status */}
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            {isPending && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-[11px] font-bold">
                                <Clock className="w-3 h-3 text-[#FF8800]" />
                                <span>Pending CFO Review</span>
                              </span>
                            )}
                            {isApproved && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-[#0062E6] border border-blue-200 text-[11px] font-bold">
                                <Check className="w-3 h-3 text-[#0062E6]" />
                                <span>Approved (Ready for Payout)</span>
                              </span>
                            )}
                            {isReimbursed && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>Reimbursed (Paid)</span>
                              </span>
                            )}
                            {isRejected && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[11px] font-bold">
                                <XCircle className="w-3 h-3 text-rose-400" />
                                <span>Rejected</span>
                              </span>
                            )}
                          </td>

                          {/* CFO Actions */}
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => setInspectClaim(claim)}
                                className="p-1.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-100 text-[#0A224E] border border-[#E2E8F0] transition-colors"
                                title="Inspect Claim Details"
                              >
                                <Eye className="w-3.5 h-3.5 text-[#0A224E]" />
                              </button>

                              {isPending && (
                                <button
                                  onClick={() => handleApprove(claim.id)}
                                  className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#0062E6] border border-blue-200 text-[11px] font-bold transition-colors"
                                  title="Approve Expense Claim"
                                >
                                  Approve
                                </button>
                              )}

                              {(isApproved || isPending) && (
                                <button
                                  onClick={() => {
                                    setSettleModalClaim(claim);
                                    setUtrInput(`UTR-${Date.now().toString().slice(-8)}`);
                                  }}
                                  className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold shadow-2xs transition-colors flex items-center gap-1"
                                  title="Record Bank Reimbursement Payout"
                                >
                                  <span>Pay Refund</span>
                                </button>
                              )}

                              {isReimbursed && (
                                <span className="text-[10px] text-emerald-700 font-mono bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-bold">
                                  {claim.utrNumber || 'UTR Recorded'}
                                </span>
                              )}

                              <button
                                onClick={() => deleteExpenseClaim(claim.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"
                                title="Delete claim record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Submit New Claim Form */}
      {activeTab === 'submit' && (
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 max-w-3xl mx-auto shadow-2xs text-[#0A224E]">
          <div className="pb-5 border-b border-[#E2E8F0] mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold mb-2">
              <Plus className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Team Member Reimbursement Request</span>
            </div>
            <h2 className="text-xl font-extrabold text-[#0A224E]">
              Request Company Reimbursement for Client Investment
            </h2>
            <p className="text-xs text-[#475569] mt-1">
              Did you pay out of pocket for client domains, server upgrades, Meta ad spend, or on-site travel? Submit the details below to receive a direct company refund approved by Dhiraj Gaikwad (CFO).
            </p>
          </div>

          {formSuccessMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5 font-bold animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{formSuccessMessage}</span>
            </div>
          )}

          <form onSubmit={handleCreateClaim} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Expense Title / Purpose *
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Neon DB Compute Upgrade for VyaparStock"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Client / Project *
                </label>
                <select
                  value={formClient}
                  onChange={(e) => setFormClient(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                >
                  {projects.map((p) => (
                    <option key={p.id} value={p.clientName}>
                      {p.clientName} ({p.title.split(' ')[0]})
                    </option>
                  ))}
                  <option value="Internal Operations (ADVIKS)">Internal Operations (ADVIKS)</option>
                  <option value="Other Client / New Lead">Other Client / New SOW</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Amount Incurred (₹) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    placeholder="15000"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Category *
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                >
                  {EXPENSE_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Date of Payment *
                </label>
                <input
                  type="date"
                  required
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Business Reason &amp; Technical Justification *
              </label>
              <textarea
                rows={3}
                required
                value={formDesc}
                onChange={(e) => setFormDesc(e.target.value)}
                placeholder="Explain why this expense was necessary for the client deliverables or sprint SLA..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6] leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Receipt / Invoice Reference ID
                </label>
                <input
                  type="text"
                  value={formReceiptRef}
                  onChange={(e) => setFormReceiptRef(e.target.value)}
                  placeholder="e.g. INV-AWS-88219 or UBER-99120"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Original Payment Method
                </label>
                <select
                  value={formPaymentMethod}
                  onChange={(e) => setFormPaymentMethod(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                >
                  <option value="Personal UPI / GooglePay">Personal UPI / GooglePay</option>
                  <option value="Personal Credit Card">Personal Credit Card</option>
                  <option value="Personal Debit Card / NetBanking">Personal Debit Card / NetBanking</option>
                  <option value="Cash / On-Site Petty Cash">Cash / On-Site Petty Cash</option>
                </select>
              </div>
            </div>

            {/* Payout Transfer Destination */}
            <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-orange-200 space-y-3">
              <span className="block text-xs font-bold text-[#EA580C] uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Reimbursement Refund Destination (Where CFO Sends Money)</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-[#475569] font-medium mb-1">
                    Your UPI ID for Instant Transfer *
                  </label>
                  <input
                    type="text"
                    required
                    value={formUpi}
                    onChange={(e) => setFormUpi(e.target.value)}
                    placeholder="e.g. username@okhdfcbank"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#475569] font-medium mb-1">
                    Claimant Officer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formSpentBy}
                    onChange={(e) => setFormSpentBy(e.target.value)}
                    placeholder="e.g. Vivek Pawar"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className="py-2.5 px-4 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:bg-[#F8FAFC] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold shadow-xs transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Claim to CFO Dhiraj Gaikwad</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 4: Client SOW Budget Ledger */}
      {activeTab === 'client-ledger' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-2xs">
            <h2 className="text-base font-extrabold text-[#0A224E] mb-1">
              Client Project SOW Budgets vs. Out-of-Pocket Incurred Expenses
            </h2>
            <p className="text-xs text-[#475569]">
              Cross-references client contract values with hardware, domain, ad spend, and server expenses claimed by members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const projectExpenses = expenseClaims.filter(
                (c) =>
                  (c.clientName && c.clientName.toLowerCase().includes(project.clientName.toLowerCase())) ||
                  (c.projectId && c.projectId === project.id)
              );
              const totalExpenses = projectExpenses.reduce((sum, c) => sum + (Number(c.amount) || 0), 0);

              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-5 flex flex-col justify-between space-y-4 shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-0.5 rounded border border-blue-200">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#475569]">
                        {project.id}
                      </span>
                    </div>

                    <h3 className="text-sm font-extrabold text-[#0A224E]">{project.title}</h3>
                    <div className="text-xs text-[#475569] mt-1">Client: {project.clientName}</div>

                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">
                          Contract Budget
                        </span>
                        <span className="font-extrabold text-[#0A224E]">{project.budget}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">
                          Member Claims
                        </span>
                        <span className="font-extrabold text-[#EA580C]">
                          ₹{totalExpenses.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#475569]">
                    <span>{projectExpenses.length} claims registered</span>
                    <button
                      onClick={() => {
                        setActiveTab('all');
                      }}
                      className="text-[#0062E6] hover:underline font-bold"
                    >
                      View in Ledger →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL 1: Settle Payout & Record Bank UTR (For CFO) */}
      {settleModalClaim && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-7 shadow-2xl text-[#0A224E]">
            <button
              onClick={() => setSettleModalClaim(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] hover:bg-slate-100 text-[#475569] hover:text-[#0A224E]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>CFO Disbursement Authorization</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#0A224E]">
              Confirm Reimbursement Payout
            </h3>
            <p className="text-xs text-[#475569] mt-1">
              Mark this expense claim as fully reimbursed and record the bank transaction reference.
            </p>

            <div className="my-5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#475569]">Claimant:</span>
                <span className="font-bold text-[#0A224E]">{settleModalClaim.spentBy}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#475569]">Amount to Refund:</span>
                <span className="font-extrabold text-emerald-600 text-sm">
                  ₹{settleModalClaim.amount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#475569]">UPI Destination:</span>
                <span className="font-mono text-[#0062E6] font-bold">{settleModalClaim.upiId}</span>
              </div>
            </div>

            <form onSubmit={handleSettlePayout} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Bank NEFT / IMPS / UPI UTR Number *
                </label>
                <input
                  type="text"
                  required
                  value={utrInput}
                  onChange={(e) => setUtrInput(e.target.value)}
                  placeholder="e.g. HDFC99281729 or 339918291029"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] font-mono placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  CFO Settlement Notes
                </label>
                <input
                  type="text"
                  value={settleNotes}
                  onChange={(e) => setSettleNotes(e.target.value)}
                  placeholder="e.g. Transferred via HDFC Current Account by Dhiraj"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSettleModalClaim(null)}
                  className="py-2.5 px-4 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:bg-[#F8FAFC]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-xs transition-all flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Payout Disbursed</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Inspect Claim Details */}
      {inspectClaim && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-xl bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#0A224E] max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setInspectClaim(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] hover:bg-slate-100 text-[#475569] hover:text-[#0A224E]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-0.5 rounded border border-blue-200">
                {inspectClaim.claimNumber}
              </span>
              <span className="text-xs text-slate-400">• {inspectClaim.spentDate}</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#0A224E] mb-1">
              {inspectClaim.title}
            </h3>
            <div className="text-xs text-[#475569] mb-5">
              Client: <strong className="text-[#0A224E]">{inspectClaim.clientName}</strong>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">
                    Claimant Officer
                  </span>
                  <span className="font-bold text-[#0A224E]">{inspectClaim.spentBy}</span>
                  <div className="text-[11px] text-[#475569] mt-0.5">{inspectClaim.spentByEmail}</div>
                </div>

                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">
                    Refund Amount
                  </span>
                  <span className="font-black text-emerald-600 text-base">
                    ₹{inspectClaim.amount.toLocaleString('en-IN')}
                  </span>
                  <div className="text-[11px] text-[#475569] mt-0.5">{inspectClaim.paymentMethod}</div>
                </div>

                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">
                    Receipt / Invoice Ref
                  </span>
                  <span className="font-mono text-[#0A224E]">{inspectClaim.receiptRef}</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">
                    UPI Transfer ID
                  </span>
                  <span className="font-mono text-[#0062E6] font-bold">{inspectClaim.upiId}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider block mb-1">
                  Description &amp; Business Justification
                </span>
                <p className="text-xs text-[#475569] p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] leading-relaxed">
                  {inspectClaim.description || 'No detailed description recorded.'}
                </p>
              </div>

              {inspectClaim.cfoNotes && (
                <div>
                  <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
                    CFO Audit Notes
                  </span>
                  <p className="text-xs text-[#475569] p-3 rounded-xl bg-[#FFF7ED] border border-orange-200 leading-relaxed">
                    {inspectClaim.cfoNotes}
                  </p>
                </div>
              )}

              {inspectClaim.utrNumber && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between font-bold">
                  <span>Settlement Bank UTR:</span>
                  <span className="font-mono text-emerald-600">{inspectClaim.utrNumber}</span>
                </div>
              )}

              {/* CFO Direct Review Actions */}
              {inspectClaim.status === 'PENDING_APPROVAL' && (
                <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                  <span className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider">
                    CFO Decision Note
                  </span>
                  <input
                    type="text"
                    value={cfoReviewNotes}
                    onChange={(e) => setCfoReviewNotes(e.target.value)}
                    placeholder="Enter approval or rejection remarks..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                  />
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => handleApprove(inspectClaim.id)}
                      className="flex-1 py-2 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve Claim</span>
                    </button>
                    <button
                      onClick={() => handleReject(inspectClaim.id)}
                      className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

