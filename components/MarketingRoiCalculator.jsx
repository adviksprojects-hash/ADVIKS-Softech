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
      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFF6FF]/60 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFF7ED]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-orange-200 text-xs font-extrabold text-[#EA580C] uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth & ROAS Simulator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] tracking-tight">
            Calculate Your Revenue Return with ADVIKS
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#475569]">
            See how our integrated software-engineered funnels and data-driven PPC campaigns multiply ad spend while lowering cost per acquisition.
          </p>
        </div>

        {/* Controls and Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Industry */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2.5">
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
                    className={`px-3.5 py-3 rounded-xl text-xs font-bold text-center transition-all ${
                      industry === item.id
                        ? 'bg-gradient-to-r from-[#EA580C] to-[#FF8800] text-white shadow-md shadow-orange-500/20 scale-[1.02]'
                        : 'bg-[#F8FAFC] hover:bg-slate-200/70 text-[#475569] border border-[#E2E8F0]'
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
                <label className="text-xs font-bold uppercase tracking-wider text-[#0A224E]">
                  2. Planned Monthly Ad Spend:
                </label>
                <span className="text-base font-extrabold text-[#EA580C] font-mono bg-[#FFF7ED] px-3 py-1 rounded-lg border border-orange-200">
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
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
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
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors ${
                      budget === preset.val
                        ? 'bg-[#0A224E] text-white'
                        : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Channels Strategy Breakdown */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                Active Acquisition Channels for {profile.name}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {profile.channels.map((ch, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0A224E] shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8800] shrink-0" />
                    <span>{ch}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output Column (5 Cols) in Warm Amber Wash */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-2 border-orange-400/30 bg-gradient-to-br from-[#FFF7ED] via-white to-[#EFF6FF]/60 p-6 sm:p-8 shadow-lg text-slate-900 relative">
              <div className="flex items-center justify-between pb-4 border-b border-orange-200/60 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#EA580C]">
                  Projected Campaign Performance
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-300 text-[11px] font-extrabold">
                  {profile.avgRoas}x Target ROAS
                </span>
              </div>

              {/* Big Revenue Number */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-500 mb-1">
                  Estimated Monthly Gross Revenue Generated:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-[#EA580C]">
                  {formatCurrency(projectedRevenue)}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">
                  Net Return: {formatCurrency(projectedRevenue - budget)} after ad spend
                </div>
              </div>

              {/* Key Indicators Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-500">{profile.leadLabel}</div>
                  <div className="text-xl font-extrabold text-[#0A224E] mt-0.5">{estimatedConversions}+</div>
                  <div className="text-[10px] text-[#FF8800] font-bold mt-0.5">High Commercial Intent</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-500">CAC Reduction</div>
                  <div className="text-xl font-extrabold text-[#0062E6] mt-0.5">{profile.cacReduction}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">vs Standard Agency</div>
                </div>
              </div>

              {/* Organic SEO Multiplier Callout */}
              <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-blue-200 text-xs text-[#0A224E] mb-6 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-[#0062E6] shrink-0 mt-0.5" />
                <span>
                  <strong>Compound SEO Effect:</strong> Unlike traditional ads that stop when budget pauses, our Next.js technical SEO permanently elevates your search rankings.
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:from-[#EA580C] hover:to-[#EA580C] text-white font-bold text-sm transition-all shadow-md shadow-orange-500/20 hover:scale-[1.02]"
              >
                <span>Lock In Your Custom Growth Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
