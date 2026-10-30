'use client';

import { useState } from 'react';
import { Mail, Phone, Building, Calendar, Filter, CheckCircle, ArrowRight } from 'lucide-react';

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

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            CRM Pipeline
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Website Inquiries & Leads Management
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Track inquiries submitted via the public contact form, update lead statuses, and convert to active clients.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            Total Leads: {leads.length}
          </span>
        </div>
      </div>

      {/* Leads Table / Cards */}
      <div className="space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-amber-400">{lead.id}</span>
                  <h3 className="text-lg font-bold text-white">{lead.name}</h3>
                  <span className="text-xs text-slate-400 font-medium">({lead.company})</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">
                      {lead.email}
                    </a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lead.phone}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lead.date}</span>
                  </span>
                </div>
              </div>

              {/* Status Select */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">Status:</span>
                <select
                  value={lead.status}
                  onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-semibold text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="NEW">New Lead</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="QUALIFIED">Qualified</option>
                  <option value="PROPOSAL_SENT">Proposal Sent</option>
                  <option value="CONVERTED">Converted to Client</option>
                </select>
              </div>
            </div>

            {/* Project Details Strip */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">
                  Service Requested
                </span>
                <span className="text-blue-400 font-semibold">{lead.service}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">
                  Budget Expectation
                </span>
                <span className="text-slate-200 font-mono font-medium">{lead.budget}</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">
                  Project Notes
                </span>
                <p className="text-slate-300 truncate">{lead.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
