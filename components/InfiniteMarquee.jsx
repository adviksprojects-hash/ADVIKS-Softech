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
    { label: 'VyaparStock Cloud ERP', icon: Layers, tag: 'SaaS', color: 'text-[#0062E6]', bg: 'bg-[#EFF6FF]' },
    { label: 'Multi-Tenant Enterprise ERP', icon: Code2, tag: 'Enterprise OS', color: 'text-[#0A224E]', bg: 'bg-slate-100' },
    { label: 'Paras Business Park Portal', icon: Globe, tag: 'Commercial', color: 'text-[#0A224E]', bg: 'bg-slate-100' },
    { label: 'Meta Advantage+ AI Ads', icon: TrendingUp, tag: 'Paid ROAS', color: 'text-[#FF8800]', bg: 'bg-[#FFF7ED]' },
    { label: 'AI Review & Sentiment NLP', icon: Cpu, tag: 'Machine Learning', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Google Search Intent & PMax', icon: Sparkles, tag: 'Growth', color: 'text-[#EA580C]', bg: 'bg-orange-50' },
    { label: 'WhatsApp Business API Webhooks', icon: Zap, tag: 'Automation', color: 'text-[#FF8800]', bg: 'bg-[#FFF7ED]' },
    { label: 'Website Speed & Core Vitals Revamps', icon: Shield, tag: 'Optimization', color: 'text-[#0062E6]', bg: 'bg-[#EFF6FF]' },
    { label: 'Sub-Second Edge Rendering', icon: Shield, tag: 'Performance', color: 'text-[#0062E6]', bg: 'bg-[#EFF6FF]' },
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-[#E2E8F0] bg-[#F8FAFC] select-none">
      <div className="flex animate-marquee space-x-6 items-center">
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs shrink-0 hover:border-[#0062E6]/40 hover:shadow-xs transition-all cursor-default"
            >
              <div className={`w-5 h-5 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                <Icon className="w-3 h-3" />
              </div>
              <span className="text-xs font-bold text-[#0A224E] whitespace-nowrap">
                {item.label}
              </span>
              <span className="text-[10px] font-mono font-semibold text-slate-500 bg-[#F8FAFC] px-1.5 py-0.5 rounded border border-slate-200">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
