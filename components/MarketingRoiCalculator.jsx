'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Target,
  Calculator,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  CheckCircle2,
  Sliders,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';

export default function MarketingRoiCalculator() {
  const [budget, setBudget] = useState(75000); // INR per month
  const [industry, setIndustry] = useState('ecommerce'); // 'ecommerce' | 'b2b' | 'realestate'

  // Model-specific metrics
  const industryProfiles = {
    ecommerce: {
      name: 'D2C E-Commerce & Retail',
      avgRoas: 4.8,
      avgOrderValue: 1250,
      cacReduction: '38%',
      channels: ['Meta Advantage+ Shopping', 'Google Performance Max', 'WhatsApp Cart Recovery'],
      leadLabel: 'Monthly Orders',
    },
    b2b: {
      name: 'B2B SaaS & IT Solutions',
      avgRoas: 4.2,
      avgOrderValue: 45000,
      cacReduction: '42%',
      channels: ['Google Search Intent (Exact Match)', 'LinkedIn Account-Based Marketing', 'High-Converting Landing Pages'],
      leadLabel: 'Qualified Sales Inquiries',
    },
    realestate: {
      name: 'Commercial Real Estate & High-Ticket',
      avgRoas: 5.4,
      avgOrderValue: 250000,
      cacReduction: '35%',
      channels: ['Geo-Targeted Meta Lead Ads', 'Local SEO Map Pack Domination', 'Automated CRM Routing'],
      leadLabel: 'High-Net-Worth Site Visits',
    },
  };

  const profile = industryProfiles[industry];

  // Dynamic calculations
  const projectedRevenue = Math.round(budget * profile.avgRoas);
  const estimatedConversions =
    industry === 'ecommerce'
      ? Math.round(projectedRevenue / profile.avgOrderValue)
      : industry === 'b2b'
      ? Math.round((budget / 1200)) // ~₹1200 per B2B SQL
      : Math.round((budget / 1800)); // ~₹1800 per commercial lease lead

  const formatCurrency = (val) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth & ROAS Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Revenue Return with ADVIKS
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            See how our integrated software-engineered funnels and data-driven PPC campaigns multiply ad spend while lowering cost per acquisition.
          </p>
        </div>

        {/* Controls and Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Industry */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                1. Select Your Business Model:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'ecommerce', label: 'D2C E-Commerce' },
                  { id: 'b2b', label: 'B2B SaaS & Tech' },
                  { id: 'realestate', label: 'Real Estate & Services' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIndustry(item.id)}
                    className={`px-3.5 py-3 rounded-xl text-xs font-semibold text-center transition-all ${
                      industry === item.id
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-[1.02]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Slider for Monthly Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Planned Monthly Ad Spend:
                </label>
                <span className="text-base font-extrabold text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {formatCurrency(budget)} / mo
                </span>
              </div>

              <input
                type="range"
                min="20000"
                max="1000000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              {/* Preset Quick-Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { label: '₹30,000', val: 30000 },
                  { label: '₹75,000', val: 75000 },
                  { label: '₹1,50,000', val: 150000 },
                  { label: '₹3,00,000', val: 300000 },
                  { label: '₹5,00,000+', val: 500000 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => setBudget(preset.val)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      budget === preset.val
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Channels Strategy Breakdown */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Active Acquisition Channels for {profile.name}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {profile.channels.map((ch, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{ch}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output Column (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50 p-6 sm:p-8 shadow-lg text-slate-900 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Projected Campaign Performance
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  {profile.avgRoas}x Target ROAS
                </span>
              </div>

              {/* Big Revenue Number */}
              <div className="mb-6">
                <div className="text-xs font-medium text-slate-500 mb-1">
                  Estimated Monthly Gross Revenue Generated:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-mono text-emerald-600">
                  {formatCurrency(projectedRevenue)}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Net Return: {formatCurrency(projectedRevenue - budget)} after ad spend
                </div>
              </div>

              {/* Key Indicators Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-medium text-slate-500">{profile.leadLabel}</div>
                  <div className="text-xl font-bold text-slate-900 mt-0.5">{estimatedConversions}+</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">High Intent</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-medium text-slate-500">CAC Reduction</div>
                  <div className="text-xl font-bold text-blue-600 mt-0.5">{profile.cacReduction}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">vs Industry Baseline</div>
                </div>
              </div>

              {/* Organic SEO Multiplier Callout */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 mb-6 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Compound SEO Effect:</strong> Unlike traditional ads that stop when budget pauses, our Next.js technical SEO permanently elevates organic search ranking.
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Lock In Your Custom Growth Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Traditional Agency vs ADVIKS Matrix */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Performance Comparison
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Why ADVIKS Outperforms Standard Marketing Agencies
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/30">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Traditional Marketing Agencies</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Slow WordPress pages with 3s+ load times causing high ad bounce rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Generic copy with no code integration or dynamic CRM pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>1.8x – 2.2x average ROAS with opaque monthly PDF reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Leads sit in spreadsheets for 24+ hours before sales outreach</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-300 bg-emerald-50/30 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>The ADVIKS Full-Stack Growth Engine</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Sub-second Next.js edge landing pages maximizing Google Quality Scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Automated WhatsApp API webhook routing leads to your phone in &lt; 90 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>4.6x – 5.4x average verified client ROAS across competitive sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 transparent client portal with live campaign telemetry & sprint tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

