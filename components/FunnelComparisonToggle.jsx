'use client';

import React, { useState } from 'react';
import {
  Zap,
  TrendingUp,
  Clock,
  Gauge,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export default function FunnelComparisonToggle() {
  const [viewMode, setViewMode] = useState('after'); // 'before' | 'after'

  const metrics = [
    {
      label: 'Website Load Speed & Core Vitals',
      icon: Gauge,
      beforeVal: '3.8+ Seconds',
      beforeSub: 'Slow bloated themes & legacy plugins causing 65%+ ad bounce rates on existing sites',
      beforeBad: true,
      afterVal: '0.4 Seconds',
      afterSub: 'Sub-second Next.js edge overhaul maximizing Google Quality Scores & SEO ranking',
      afterGood: true,
    },
    {
      label: 'Paid Advertising Return (ROAS)',
      icon: TrendingUp,
      beforeVal: '1.8x – 2.1x ROAS',
      beforeSub: 'Leaking ad spend on existing funnels with zero server-side attribution or CAPI tracking',
      beforeBad: true,
      afterVal: '4.6x – 5.4x ROAS',
      afterSub: 'Server-side Meta Conversions API (CAPI) & precise negative keyword intent filtering',
      afterGood: true,
    },
    {
      label: 'Lead Capture & WhatsApp Velocity',
      icon: Clock,
      beforeVal: '24+ Hours Delay',
      beforeSub: 'Static email forms dumped into spreadsheets; 70% lost to competitor response times',
      beforeBad: true,
      afterVal: '< 90 Seconds',
      afterSub: 'Automated WhatsApp Cloud API webhook routing qualified leads straight to your phone',
      afterGood: true,
    },
    {
      label: 'Legacy Code Audit & Revamps',
      icon: ShieldCheck,
      beforeVal: 'Technical Debt & Bugs',
      beforeSub: 'Outdated libraries, sluggish unindexed databases, and zero sprint visibility',
      beforeBad: true,
      afterVal: 'Modern Clean Architecture',
      afterSub: 'Deep refactoring of existing websites, high-speed APIs, and 24/7 Live Client Portal',
      afterGood: true,
    },
  ];

  return (
    <div className="w-full my-12">
      {/* Container */}
      <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-10 shadow-lg">
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E2E8F0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-orange-200 text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>New Builds &amp; Existing Website Revamps</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] tracking-tight">
              Interactive Architecture &amp; Website Revamp Comparison
            </h3>
            <p className="text-sm text-[#475569] mt-1 max-w-2xl leading-relaxed">
              We don&apos;t just build from scratch — we also audit, optimize, and modernize already-built websites to eliminate bottlenecks and multiply conversions.
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center p-1.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shrink-0">
            <button
              onClick={() => setViewMode('before')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'before'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-[#475569] hover:text-[#0A224E]'
              }`}
            >
              Before ADVIKS (Slow / Legacy Website)
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'after'
                  ? 'bg-gradient-to-r from-[#0062E6] to-[#0088FF] text-white shadow-md'
                  : 'text-[#475569] hover:text-[#0A224E]'
              }`}
            >
              After ADVIKS (Re-Engineered Website)
            </button>
          </div>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            const isAfter = viewMode === 'after';

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isAfter
                    ? 'bg-gradient-to-b from-[#EFF6FF]/60 to-white border-blue-200 shadow-sm'
                    : 'bg-rose-50/40 border-rose-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isAfter ? 'bg-[#0062E6] text-white' : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isAfter ? (
                      <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        ADVIKS Overhaul
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        Existing Bottlenecks
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {item.label}
                  </h4>
                  <div
                    className={`text-2xl font-extrabold tracking-tight ${
                      isAfter ? 'text-[#0062E6]' : 'text-rose-600'
                    }`}
                  >
                    {isAfter ? item.afterVal : item.beforeVal}
                  </div>
                </div>

                <p className="text-xs text-[#475569] mt-3 leading-relaxed border-t border-slate-200/60 pt-3">
                  {isAfter ? item.afterSub : item.beforeSub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <div className="text-[#475569] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
            <span>Already have an existing website or SaaS? We audit code, eliminate load delays, and boost conversion rates.</span>
          </div>

          <Link
            href="/contact?service=Website+Revamp"
            className="inline-flex items-center gap-1.5 text-[#0062E6] hover:text-[#0A224E] font-bold transition-colors"
          >
            <span>Request Free Website Audit &amp; Revamp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
