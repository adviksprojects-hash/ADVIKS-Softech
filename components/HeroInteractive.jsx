'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Terminal,
  Cpu,
  Layers,
  TrendingUp,
  Sparkles,
  Zap,
  RotateCw,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function HeroInteractive() {
  const terminalCommands = [
    {
      cmd: 'adviks.deploy("VyaparStock_Billing_SaaS")',
      status: 'ONLINE • 24ms',
      outputLines: [
        'Compiled Next.js 15 edge runtime with microsecond response.',
        'PostgreSQL multi-tenant GST ledger synchronized.',
        'Automated WhatsApp invoice dispatch gateway: CONNECTED.',
      ],
      metric: '99.98% SLA Uptime',
      metricColor: 'text-[#0062E6] bg-[#EFF6FF] border-[#BFDBFE]',
      actionUrl: 'https://www.vyaparstock.in',
      actionLabel: 'Inspect VyaparStock SaaS',
    },
    {
      cmd: 'adviks.optimizeCampaign("Meta_Google_PMax")',
      status: 'ROAS: 4.8x ACTIVE',
      outputLines: [
        'Server-side Meta Conversions API (CAPI) configured.',
        'High-intent search terms isolated with negative keyword filtering.',
        'Sub-second CRO landing page loading in 580ms flat.',
      ],
      metric: '4.8x Verified ROAS',
      metricColor: 'text-[#FF8800] bg-[#FFF7ED] border-[#FED7AA]',
      actionUrl: '/services',
      actionLabel: 'View Marketing Funnels',
    },
    {
      cmd: 'adviks.runInference("AI_Review_Sentiment_NLP")',
      status: '97.4% ACCURACY',
      outputLines: [
        'Ingesting multi-source review feeds from web & client apps.',
        'Sentiment classified: Positive commercial intent detected.',
        'Personalized response draft dispatched in 180ms.',
      ],
      metric: '180ms Response Time',
      metricColor: 'text-purple-600 bg-purple-50 border-purple-200',
      actionUrl: 'https://ai-review-system-bay.vercel.app',
      actionLabel: 'Launch AI Review Engine',
    },
    {
      cmd: 'adviks.auditPerformance("Paras_Business_Park")',
      status: 'CORE VITALS: 100/100',
      outputLines: [
        'Interactive office floor navigators pre-rendered.',
        'Zero render-blocking scripts across global CDN nodes.',
        'Direct tenant leasing inquiries synced to CRM pipeline.',
      ],
      metric: '0.6s Page Load',
      metricColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      actionUrl: 'https://paras-business-park-2.vercel.app',
      actionLabel: 'Visit Paras Business Park',
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % terminalCommands.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, terminalCommands.length]);

  const current = terminalCommands[activeIdx];

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Main Terminal Window in Deep Midnight Navy */}
      <div
        className="rounded-2xl border-2 border-[#0A224E]/40 bg-[#071736] text-slate-100 shadow-2xl overflow-hidden card-hover-shine transition-all duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Terminal Chrome Bar */}
        <div className="px-4 py-3 bg-[#050F24] border-b border-[#0A224E] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FF8800] inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-300">adviks-engine:~/production$</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick selector dots */}
            <div className="flex items-center gap-1.5 mr-2">
              {terminalCommands.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === i ? 'w-5 bg-[#FF8800]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to terminal command ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % terminalCommands.length)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono bg-[#0A224E] hover:bg-[#0062E6] text-white transition-colors"
              title="Next Command"
            >
              <RotateCw className="w-3 h-3" />
              <span className="hidden sm:inline">Next</span>
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm space-y-4 min-h-[195px] text-left">
          {/* Active Command Line with Logo Electric Blue and Growth Orange */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#0088FF] font-bold">➜</span>
            <span className="text-white font-bold">adviks@live</span>
            <span className="text-slate-400">:</span>
            <span className="text-[#FF8800] font-semibold">{current.cmd}</span>
            <span className="inline-block w-2 h-4 bg-[#FF8800] animate-pulse ml-0.5" />
          </div>

          {/* Status Badge */}
          <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#0A224E] text-[#0088FF] border border-[#0062E6]/40">
            [STATUS: {current.status}]
          </div>

          {/* Output Lines */}
          <div className="space-y-1.5 pl-3 border-l-2 border-[#0062E6]/50 text-slate-300 text-xs">
            {current.outputLines.map((line, lIdx) => (
              <div key={lIdx} className="flex items-start gap-2">
                <span className="text-[#FF8800] font-bold">↳</span>
                <span className="leading-relaxed">{line}</span>
              </div>
            ))}
          </div>

          {/* Bottom Live Action Link */}
          <div className="pt-3 border-t border-[#0A224E] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300">Real-Time Production Output</span>
            </div>

            {current.actionUrl.startsWith('http') ? (
              <a
                href={current.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#FF8800] hover:text-[#EA580C] font-semibold transition-colors"
              >
                <span>{current.actionLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link
                href={current.actionUrl}
                className="inline-flex items-center gap-1.5 text-[#0088FF] hover:text-white font-semibold transition-colors"
              >
                <span>{current.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Non-overlapping, clean status pill row directly below terminal */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Badge 1: VyaparStock */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:border-blue-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[#0A224E]">VyaparStock SaaS</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">99.98% Uptime SLA • GST</div>
          </div>
        </div>

        {/* Badge 2: Growth Engine */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:border-orange-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] border border-orange-200 flex items-center justify-center text-[#FF8800] shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
              <span className="text-xs font-bold text-[#0A224E]">Performance Growth</span>
            </div>
            <div className="text-[10px] text-[#EA580C] font-mono font-bold">4.8x Average ROAS</div>
          </div>
        </div>

        {/* Badge 3: AI Sentiment */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:border-purple-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-bold text-[#0A224E]">AI Sentiment Engine</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">180ms NLP inference</div>
          </div>
        </div>
      </div>
    </div>
  );
}
