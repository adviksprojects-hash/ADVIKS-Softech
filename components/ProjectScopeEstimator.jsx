'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';

export default function ProjectScopeEstimator() {
  const [platformType, setPlatformType] = useState('saas');
  const [selectedAddons, setSelectedAddons] = useState(['auth', 'db']);
  const [timeline, setTimeline] = useState('standard');

  const platformOptions = [
    { id: 'saas', name: 'Enterprise SaaS & Cloud ERP', baseDays: 30, baseBudget: '₹1,50,000+' },
    { id: 'web', name: 'Sub-Second Web & Custom Portal', baseDays: 20, baseBudget: '₹75,000+' },
    { id: 'mobile', name: 'Cross-Platform iOS & Android', baseDays: 35, baseBudget: '₹1,80,000+' },
    { id: 'growth', name: 'Performance Marketing & SEO Retainer', baseDays: 14, baseBudget: '₹45,000 / mo' },
  ];

  const availableAddons = [
    { id: 'auth', label: 'RBAC Auth & Multi-Tenant Security', days: 4 },
    { id: 'db', label: 'PostgreSQL Real-time Stock / Data Ledger', days: 6 },
    { id: 'whatsapp', label: 'WhatsApp Business Cloud API Webhooks', days: 3 },
    { id: 'payment', label: 'Payment Gateway (Razorpay/Stripe/UPI)', days: 3 },
    { id: 'ai', label: 'AI LLM Integration & Sentiment Pipeline', days: 7 },
    { id: 'seo', label: 'Technical SEO Schema & SSR Optimization', days: 4 },
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const selectedPlatform = platformOptions.find((p) => p.id === platformType);
  const totalDays =
    selectedPlatform.baseDays +
    selectedAddons.reduce((acc, curr) => {
      const addon = availableAddons.find((a) => a.id === curr);
      return acc + (addon ? addon.days : 0);
    }, 0);

  return (
    <div className="w-full my-12">
      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope & Timeline Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] tracking-tight">
            Estimate Your Project Delivery Blueprint
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            Select your architecture requirements and features to simulate estimated sprint duration and deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Platform Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2.5">
                1. Select Core Platform Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platformOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPlatformType(opt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      platformType === opt.id
                        ? 'bg-gradient-to-r from-[#EFF6FF] to-white border-[#0062E6] shadow-sm ring-2 ring-blue-500/20'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#0A224E]">{opt.name}</div>
                    <div className="text-[11px] text-[#0062E6] font-semibold mt-1">Starting {opt.baseBudget}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2.5">
                2. Select Required Architecture Modules:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-3 rounded-xl border flex items-center justify-between text-xs font-semibold transition-all ${
                        isChecked
                          ? 'bg-[#FFF7ED] border-[#FF8800] text-[#0A224E]'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                            isChecked
                              ? 'bg-[#FF8800] border-[#FF8800] text-white'
                              : 'bg-white border-slate-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">+{addon.days}d</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-[#0062E6]/30 bg-gradient-to-br from-[#EFF6FF]/70 via-white to-[#F8FAFC] p-6 sm:p-8 shadow-lg text-slate-900">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0062E6] block mb-2">
                Simulated Sprint Scope
              </span>
              <h4 className="text-xl font-extrabold text-[#0A224E] mb-4">
                {selectedPlatform.name}
              </h4>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs mb-5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Estimated Sprint Delivery:</span>
                  <span className="font-extrabold text-[#0062E6] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    ~{totalDays} Business Days
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Architecture Modules:</span>
                  <span className="font-bold text-[#0A224E]">
                    {selectedAddons.length + 1} Integrated Services
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Code Ownership:</span>
                  <span className="font-bold text-emerald-600">100% Client IP</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#475569] mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0062E6] shrink-0" />
                  <span>Sprint-by-sprint tracking on private Client Portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0062E6] shrink-0" />
                  <span>30-Day post-deployment warranty & code audits</span>
                </div>
              </div>

              <Link
                href={`/contact?service=${platformType}&addons=${selectedAddons.join(',')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:from-[#EA580C] hover:to-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Request Custom Scope Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

