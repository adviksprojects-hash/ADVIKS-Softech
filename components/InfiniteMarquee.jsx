'use client';

import React from 'react';
import {
  Code2,
  Cpu,
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Globe,
  Database,
  Smartphone,
} from 'lucide-react';

export default function InfiniteMarquee() {
  const items = [
    { label: 'VyaparStock Cloud ERP', icon: Layers, tag: 'SaaS' },
    { label: 'Next.js 15 & TypeScript', icon: Code2, tag: 'Framework' },
    { label: 'Paras Business Park Portal', icon: Globe, tag: 'Commercial' },
    { label: 'Meta Advantage+ AI Ads', icon: TrendingUp, tag: 'Paid ROAS' },
    { label: 'AI Review & Sentiment NLP', icon: Cpu, tag: 'Machine Learning' },
    { label: 'Google Search Intent & PMax', icon: Sparkles, tag: 'Growth' },
    { label: 'WhatsApp Business API Webhooks', icon: Zap, tag: 'Automation' },
    { label: 'PostgreSQL & Cloud Infrastructure', icon: Database, tag: 'Backend' },
    { label: 'HaruViru D2C E-Commerce', icon: Smartphone, tag: 'D2C' },
    { label: 'Sub-Second Edge Rendering', icon: Shield, tag: 'Performance' },
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-slate-200/80 bg-slate-50/80 backdrop-blur-xs select-none">
      <div className="flex animate-marquee space-x-6 items-center">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs shrink-0 hover:border-blue-400 hover:shadow-xs transition-all cursor-default"
            >
              <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Icon className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-slate-800 whitespace-nowrap">
                {item.label}
              </span>
              <span className="text-[10px] font-mono font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

