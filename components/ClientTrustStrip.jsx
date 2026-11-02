'use client';

import React from 'react';
import { Building2, Layers, Cpu, ShoppingBag, Sparkles, Home, Utensils } from 'lucide-react';

export default function ClientTrustStrip() {
  const deployments = [
    {
      name: 'VyaparStock Cloud',
      category: 'Billing & ERP SaaS',
      icon: Layers,
      color: 'text-[#0062E6]',
      bg: 'bg-[#EFF6FF]',
      border: 'border-blue-200',
      liveUrl: 'https://vyaparstock.in',
    },
    {
      name: 'Paras Business Park',
      category: 'Commercial Real Estate',
      icon: Building2,
      color: 'text-[#0A224E]',
      bg: 'bg-slate-100',
      border: 'border-slate-200',
      liveUrl: 'https://paras-business-park-2.vercel.app',
    },
    {
      name: 'AI Review System',
      category: 'Sentiment & NLP AI',
      icon: Cpu,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      liveUrl: 'https://ai-review-system-bay.vercel.app',
    },
    {
      name: 'HaruViru Natural Foods',
      category: 'D2C Wellness Brand',
      icon: ShoppingBag,
      color: 'text-[#FF8800]',
      bg: 'bg-[#FFF7ED]',
      border: 'border-orange-200',
      liveUrl: 'https://haru-viru-gold-honey.vercel.app',
    },
    {
      name: 'Aameena Furniture',
      category: 'Modular Interior Catalog',
      icon: Home,
      color: 'text-[#EA580C]',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      liveUrl: 'https://aameena-ferniture.vercel.app',
    },
    {
      name: 'HaruViru Celebrations',
      category: 'Hospitality & Venues',
      icon: Sparkles,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      liveUrl: 'https://haruvirucelebrationhouse.vercel.app',
    },
  ];

  return (
    <div className="w-full pt-10 pb-6">
      <div className="text-center mb-6">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
          Trusted Production Deployments & Verified Client Ecosystems
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {deployments.map((client, idx) => {
          const Icon = client.icon;
          return (
            <a
              key={idx}
              href={client.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#0062E6]/40 transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-1"
            >
              <div className={`w-9 h-9 rounded-xl ${client.bg} border ${client.border} flex items-center justify-center ${client.color} mb-2 group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-xs font-extrabold text-[#0A224E] group-hover:text-[#0062E6] transition-colors leading-tight">
                {client.name}
              </div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                {client.category}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

