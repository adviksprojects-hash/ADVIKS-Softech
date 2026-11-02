'use client';

import React from 'react';
import { CheckCircle, X, ShieldAlert, Zap, Sparkles } from 'lucide-react';

export default function AgencyComparisonCard() {
  return (
    <div className="mt-14 p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] bg-white shadow-xs">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] border border-orange-200 text-[11px] font-extrabold text-[#EA580C] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Multi-Vendor Dilemma</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#0A224E] tracking-tight">
          Why Work With One Hybrid Partner Instead of Multiple Agencies?
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
          When software engineers and media buyers operate in separate silos, communication breaks down and your acquisition costs explode.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Disjointed Multi-Vendor Model */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF7ED]/50 border border-orange-200/80 space-y-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#EA580C]">
            <X className="w-4 h-4 text-[#EA580C]" />
            <span>Fragmented Multi-Agency Setup</span>
          </div>
          <ul className="space-y-3.5 text-xs text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-bold text-sm leading-none shrink-0">✕</span>
              <span><strong>Dev Agency Blames Ad Team:</strong> &quot;Our backend architecture is fine; your marketing team is driving unqualified traffic.&quot;</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-bold text-sm leading-none shrink-0">✕</span>
              <span><strong>Ad Team Blames Dev Agency:</strong> &quot;Your WordPress site takes 3.8s to load, destroying our Google Ads Quality Score and Meta ROAS.&quot;</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-bold text-sm leading-none shrink-0">✕</span>
              <span><strong>Fragmented Overhead:</strong> 3 separate vendor retainers, 3 billing cycles, and zero unified revenue accountability.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-bold text-sm leading-none shrink-0">✕</span>
              <span><strong>Broken Attribution:</strong> Pixel tags and server-side CAPI tokens constantly break during website code updates.</span>
            </li>
          </ul>
        </div>

        {/* ADVIKS Unified Hybrid Pod */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#EFF6FF]/60 border border-blue-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0062E6]">
            <CheckCircle className="w-4 h-4 text-[#0062E6]" />
            <span>The ADVIKS Unified Hybrid Advantage</span>
          </div>
          <ul className="space-y-3.5 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
              <span><strong>Unified Sprint Room:</strong> Next.js full-stack engineers and ROAS media buyers collaborate in the exact same daily standup.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
              <span><strong>0.4s Sub-Second Speed:</strong> Custom Next.js Edge landing pages engineered specifically to maximize Google Ads Quality Score and reduce CPC.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
              <span><strong>Single Executive Accountability:</strong> 1 dedicated project architect, real-time client portal tracking, and direct founder access.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
              <span><strong>Hardwired Ad Telemetry:</strong> Meta CAPI, Google Tag Manager, and CRM webhooks built directly into the database architecture.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

