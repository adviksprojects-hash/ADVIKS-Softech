'use client';

import { useState } from 'react';
import { Mail, Phone, Building, Calendar, Filter, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([
    {
      id: 'LD-101',
      name: 'Rohan Deshmukh',
      email: 'rohan@zenithlogistics.in',
      phone: '+91 98200 12345',
      company: 'Zenith Logistics',
      service: 'Custom Web Platform',
      budget: '₹5,00,000 - ₹15,00,000',
      message: 'Need a multi-warehouse inventory management dashboard with driver route optimization.',
      status: 'NEW',
      date: 'Oct 30, 2026',
    },
    {
      id: 'LD-102',
      name: 'Priya Sundaram',
      email: 'priya@omnihealth.ai',
      phone: '+91 98450 67890',
      company: 'OmniHealth AI',
      service: 'AI & Machine Learning',
      budget: '₹15,00,000+',
      message: 'Looking for custom LLM RAG pipelines to index our clinical diagnostic literature.',
      status: 'CONTACTED',
      date: 'Oct 29, 2026',
    },
    {
      id: 'LD-103',
      name: 'Amitabh Sen',
      email: 'amitabh@senholdings.com',
      phone: '+91 97110 54321',
      company: 'Sen Holdings',
      service: 'Enterprise ERP / CRM',
      budget: '₹2,00,000 - ₹5,00,000',
      message: 'Legacy CRM migration to a modern Next.js interface with role-based access.',
      status: 'PROPOSAL_SENT',
      date: 'Oct 26, 2026',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'NEW':
        return 'bg-blue-50 text-[#0062E6] border-blue-200';
      case 'CONTACTED':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'QUALIFIED':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'PROPOSAL_SENT':
        return 'bg-orange-50 text-[#EA580C] border-orange-200';
      case 'CONVERTED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
            CRM Pipeline
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
            Website Inquiries & Leads Management
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Track inquiries submitted via the public contact form, update lead statuses, and convert to active clients.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#0A224E] font-bold bg-white border border-[#E2E8F0] px-3.5 py-2 rounded-xl shadow-sm">
            Total Inquiries: <strong className="text-[#0062E6]">{leads.length}</strong>
          </span>
        </div>
      </div>

      {/* Leads Cards */}
      <div className="space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-orange-200">
                    {lead.id}
                  </span>
                  <h3 className="text-lg font-bold text-[#0A224E]">{lead.name}</h3>
                  <span className="text-xs text-[#475569] font-medium">({lead.company})</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getStatusBadge(lead.status)}`}>
                    {lead.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] mt-2">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#0062E6]" />
                    <a href={`mailto:${lead.email}`} className="hover:text-[#0062E6] transition-colors font-medium">
                      {lead.email}
                    </a>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-medium text-slate-700">{lead.phone}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lead.date}</span>
                  </span>
                </div>
              </div>

              {/* Status Select */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-[#0A224E]">Stage:</span>
                <select
                  value={lead.status}
                  onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0A224E] focus:outline-none focus:ring-2 focus:ring-[#0062E6] focus:border-transparent transition-all"
                >
                  <option value="NEW">New Inquiry</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="QUALIFIED">Qualified</option>
                  <option value="PROPOSAL_SENT">Proposal Sent</option>
                  <option value="CONVERTED">Converted to Client</option>
                </select>
              </div>
            </div>

            {/* Project Details Strip */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  Service Requested
                </span>
                <span className="text-[#0062E6] font-bold">{lead.service}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  Budget Expectation
                </span>
                <span className="text-[#0A224E] font-mono font-bold">{lead.budget}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold block mb-1">
                  Project Notes
                </span>
                <p className="text-[#475569] font-medium truncate" title={lead.message}>{lead.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
