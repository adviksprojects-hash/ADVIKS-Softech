'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  Database,
  Users2,
  Truck,
  Factory,
  BarChart4,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Workflow,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export default function EnterpriseSystemsSection() {
  const [activeTab, setActiveTab] = useState('ERP'); // 'ERP' or 'CRM'

  const erpModules = [
    {
      title: 'Finance & Accounting',
      icon: BarChart4,
      tag: 'Core Ledger',
      color: 'text-[#0062E6]',
      bg: 'bg-[#EFF6FF]',
      border: 'border-blue-200',
      desc: 'Centralized general ledgers, accounts payable/receivable (AP/AR), multi-branch bank reconciliation, and automated fiscal reporting compliant with corporate tax standards.',
      bullets: [
        'Real-time automated trial balances & balance sheets',
        'Multi-currency accounts payable & vendor settlements',
        'Bank feed integration with automated wire & UTR matching',
      ],
    },
    {
      title: 'Human Resources (HR)',
      icon: Users2,
      tag: 'People Ops',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      desc: 'End-to-end workforce lifecycle management uniting employee records, dynamic payroll disbursement, biometric attendance, tax withholdings, and performance reviews.',
      bullets: [
        'Automated payroll calculation with statutory deductions',
        'Role-Based Access Control (RBAC) across departments',
        'Leave tracking, attendance logs & expense reimbursement claims',
      ],
    },
    {
      title: 'Supply Chain & Procurement',
      icon: Truck,
      tag: 'Logistics',
      color: 'text-[#EA580C]',
      bg: 'bg-[#FFF7ED]',
      border: 'border-orange-200',
      desc: 'Integrated supplier sourcing, purchase orders (PO), multi-warehouse stock tracking, dynamic reorder thresholds, and vendor scorecards.',
      bullets: [
        'Live multi-warehouse stock balances with barcode scanning',
        'Automated purchase order triggers based on velocity buffers',
        'Inbound shipment inspection & three-way invoice matching',
      ],
    },
    {
      title: 'Manufacturing & Production',
      icon: Factory,
      tag: 'Shop Floor',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      desc: 'High-precision production scheduling, bills of materials (BOM), shop floor capacity planning, and material scrap reduction systems.',
      bullets: [
        'Multi-level Bill of Materials (BOM) cost calculations',
        'Real-time machine run-time & maintenance logging',
        'Work order sequencing with scrap and yield analytics',
      ],
    },
    {
      title: 'Sales & Customer Management (CRM)',
      icon: Workflow,
      tag: 'Order-to-Cash',
      color: 'text-[#0062E6]',
      bg: 'bg-[#EFF6FF]',
      border: 'border-blue-200',
      desc: 'Seamless bridge between inbound customer demand and operational execution. Unified customer records, order lifecycle tracking, and dispatch synchronization.',
      bullets: [
        'Instant quote-to-order generation and sales contracts',
        'Automated GST invoice dispatch via WhatsApp & Email',
        'Direct connection to fulfillment & inventory allocation',
      ],
    },
  ];

  const crmFeatures = [
    {
      title: 'Centralized Customer Intelligence',
      desc: 'Every phone call, email thread, WhatsApp exchange, quote request, and payment status unified in a single chronologically indexed customer timeline.',
      highlight: '360° Account Visibility',
    },
    {
      title: 'Lead Pipeline & Opportunity Tracking',
      desc: 'Visual drag-and-drop Kanban deal boards with automated probability scoring, deal age alerts, and expected revenue forecasting for leadership.',
      highlight: 'Shorter Sales Cycles',
    },
    {
      title: 'Automated Multi-Channel Nurture',
      desc: 'Trigger targeted WhatsApp follow-ups, contract reminders, and calendar booking links automatically when leads move across pipeline stages.',
      highlight: '< 90s Lead Routing',
    },
    {
      title: 'Enterprise Platform Integration',
      desc: 'Engineered to synchronize bi-directionally with market standard platforms like Salesforce CRM, HubSpot CRM, and Zoho CRM via secure webhook pipelines.',
      highlight: 'Salesforce • HubSpot • Zoho',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E2E8F0]" id="enterprise-systems" aria-labelledby="enterprise-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-bold text-[#0062E6] uppercase tracking-wider mb-3">
            <Database className="w-3.5 h-3.5 text-[#0062E6]" />
            <span>Enterprise Systems Architecture</span>
          </div>
          <h2 id="enterprise-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A224E] tracking-tight">
            ERP &amp; CRM Systems Explained
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            Understand the core digital backbone that powers high-growth organizations. Explore how integrated centralized databases coordinate operations and accelerate revenue.
          </p>
        </div>

        {/* Tab Switcher: ERP vs CRM */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs">
            <button
              onClick={() => setActiveTab('ERP')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'ERP'
                  ? 'bg-[#0062E6] text-white shadow-md shadow-blue-600/20'
                  : 'text-[#475569] hover:text-[#0A224E] hover:bg-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>ERP (Enterprise Resource Planning)</span>
            </button>

            <button
              onClick={() => setActiveTab('CRM')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                activeTab === 'CRM'
                  ? 'bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white shadow-md shadow-orange-500/20'
                  : 'text-[#475569] hover:text-[#0A224E] hover:bg-white'
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>CRM (Customer Relationship Management)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ERP DEEP DIVE */}
        {activeTab === 'ERP' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Definition Box */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-[#0062E6] uppercase tracking-wider block mb-2">
                  Definition &amp; Core Purpose
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] leading-snug">
                  What is Enterprise Resource Planning (ERP)?
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                  <strong>ERP stands for Enterprise Resource Planning.</strong> It refers to an integrated software suite that organizations use to manage and coordinate their core day-to-day business activities—including accounting, procurement, project management, risk compliance, and supply chain operations—through a <strong>centralized database</strong>.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#0A224E]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0062E6]" />
                    Single Source of Truth
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Cross-Department Automation
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#FF8800]" />
                    Elimination of Data Silos
                  </span>
                </div>
              </div>
            </div>

            {/* 5 Core Functions & Modules Grid */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-extrabold text-[#0A224E]">
                    The 5 Core Functions &amp; Modules of an Enterprise ERP
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                    How centralized databases integrate distinct organizational pods into a synchronized machine.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {erpModules.map((mod, idx) => {
                  const Icon = mod.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center border ${mod.border}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${mod.bg} ${mod.color} ${mod.border}`}>
                            Module 0{idx + 1}
                          </span>
                        </div>

                        <h5 className="text-lg font-extrabold text-[#0A224E] mb-2">{mod.title}</h5>
                        <p className="text-xs text-[#475569] leading-relaxed mb-4">{mod.desc}</p>

                        <div className="space-y-2 pt-3 border-t border-[#E2E8F0]">
                          {mod.bullets.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-[#475569]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
                              <span className="font-medium">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* ERP Architecture CTA Card */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0A224E] via-[#051838] to-[#0A224E] text-white flex flex-col justify-between shadow-xl">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 border border-white/20 text-xs font-bold mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
                      <span>Custom ERP Implementation</span>
                    </div>
                    <h5 className="text-xl font-extrabold text-white mb-2">
                      Ready to Unify Your Business onto a Custom ERP?
                    </h5>
                    <p className="text-xs text-blue-100/90 leading-relaxed">
                      ADVIKS designs and deploys modular ERP suites built specifically around your company’s workflow, eliminating expensive per-seat licenses.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/contact"
                      className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <span>Request Enterprise ERP Blueprint</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CRM DEEP DIVE */}
        {activeTab === 'CRM' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            {/* Definition Box */}
            <div className="p-8 rounded-3xl bg-[#FFF7ED] border border-orange-200 relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider block mb-2">
                  System Strategy &amp; Pipeline Execution
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] leading-snug">
                  What is Customer Relationship Management (CRM)?
                </h3>
                <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                  <strong>CRM (Customer Relationship Management)</strong> is a system, strategy, and software category that organizations use to manage, track, and improve their interactions with current and potential customers across the entire buyer journey.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A high-performance CRM ensures sales representatives never miss a follow-up, marketing teams understand lead acquisition cost, and executives have real-time visibility into customer lifetime value (LTV).
                </p>

                {/* Benchmark Platforms Mentioned in Prompt */}
                <div className="mt-6 pt-5 border-t border-orange-200/80">
                  <div className="text-xs font-bold text-[#0A224E] mb-2 uppercase tracking-wider">
                    Enterprise Ecosystem Benchmarks:
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white border border-orange-200 text-[#0A224E] font-bold shadow-xs">
                      Salesforce CRM <span className="text-slate-400 font-normal">Enterprise Benchmark</span>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl bg-white border border-orange-200 text-[#0A224E] font-bold shadow-xs">
                      HubSpot CRM <span className="text-slate-400 font-normal">Inbound &amp; CRO Benchmark</span>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-xl bg-white border border-orange-200 text-[#0A224E] font-bold shadow-xs">
                      Zoho CRM <span className="text-slate-400 font-normal">Operational SMB Benchmark</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core CRM Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {crmFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200">
                        {feat.highlight}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>
                    <h5 className="text-lg font-extrabold text-[#0A224E] mb-2">{feat.title}</h5>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

