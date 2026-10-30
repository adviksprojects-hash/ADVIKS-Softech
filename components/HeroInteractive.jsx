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
  Play,
  RotateCw,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Code2,
} from 'lucide-react';

export default function HeroInteractive() {
  const terminalCommands = [
    {
      cmd: 'adviks.deploy("VyaparStock_Billing_SaaS")',
      status: 'SUCCESS (24ms)',
      outputLines: [
        'Compiled Next.js 15 edge runtime with microsecond response.',
        'PostgreSQL multi-tenant GST ledger synchronized.',
        'Automated WhatsApp invoice dispatch gateway: ONLINE.',
      ],
      metric: '99.98% SLA Uptime',
      metricColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      actionUrl: 'https://www.vyaparstock.in',
      actionLabel: 'Inspect VyaparStock SaaS',
    },
    {
      cmd: 'adviks.optimizeCampaign("Meta_Google_PMax")',
      status: 'ROAS: 4.8x ACTIVE',
      outputLines: [
        'Server-side Meta Conversions API (CAPI) configured.',
        'High-intent search terms isolated with negative filtering.',
        'Sub-second CRO landing page loading in 580ms flat.',
      ],
      metric: '4.8x Verified ROAS',
      metricColor: 'text-blue-600 bg-blue-50 border-blue-200',
      actionUrl: '/services',
      actionLabel: 'View Marketing Funnels',
    },
    {
      cmd: 'adviks.runInference("AI_Review_Sentiment_NLP")',
      status: '97.4% ACCURACY',
      outputLines: [
        'Ingesting multi-source review feeds from web & apps.',
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
    <div className="relative w-full max-w-4xl mx-auto mt-12">
      {/* Floating Badge Left */}
      <div className="hidden lg:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-lg backdrop-blur-md absolute -left-16 top-8 z-20 animate-float-slow select-none">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-800">VyaparStock SaaS</span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono">99.98% Uptime SLA • GST</div>
        </div>
      </div>

      {/* Floating Badge Right */}
      <div className="hidden lg:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-lg backdrop-blur-md absolute -right-16 top-20 z-20 animate-float-reverse select-none">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-800">Performance Growth</span>
          </div>
          <div className="text-[10px] text-emerald-600 font-mono font-semibold">4.8x Average ROAS</div>
        </div>
      </div>

      {/* Floating Badge Bottom Left */}
      <div className="hidden sm:flex items-center gap-3 p-3 rounded-xl bg-white/95 border border-slate-200/90 shadow-md backdrop-blur-md absolute -bottom-6 left-6 z-20 animate-float select-none">
        <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-800">AI Sentiment Engine</div>
          <div className="text-[10px] text-slate-500 font-mono">180ms NLP inference</div>
        </div>
      </div>

      {/* Main Terminal Window */}
      <div
        className="rounded-2xl border border-slate-300 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden card-hover-shine transition-all duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Terminal Chrome Bar */}
        <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400">adviks-engine:~/production$</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick selector dots */}
            <div className="flex items-center gap-1 mr-2">
              {terminalCommands.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIdx === i ? 'w-5 bg-blue-500' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Jump to terminal command ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % terminalCommands.length)}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Next Command"
            >
              <RotateCw className="w-3 h-3" />
              <span className="hidden sm:inline">Next</span>
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm space-y-4 min-h-[190px]">
          {/* Active Command Line */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-emerald-400 font-bold">➜</span>
            <span className="text-cyan-300 font-bold">adviks@live</span>
            <span className="text-slate-400">:</span>
            <span className="text-amber-300 font-semibold">{current.cmd}</span>
            <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5" />
          </div>

          {/* Status Badge */}
          <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-950/70 text-emerald-400 border border-emerald-800/60">
            [STATUS: {current.status}]
          </div>

          {/* Output Lines */}
          <div className="space-y-1.5 pl-3 border-l-2 border-slate-800 text-slate-300 text-xs">
            {current.outputLines.map((line, lIdx) => (
              <div key={lIdx} className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">↳</span>
                <span className="leading-relaxed">{line}</span>
              </div>
            ))}
          </div>

          {/* Bottom Live Action Link */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Real-Time Production Output</span>
            </div>

            {current.actionUrl.startsWith('http') ? (
              <a
                href={current.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <span>{current.actionLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link
                href={current.actionUrl}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <span>{current.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

