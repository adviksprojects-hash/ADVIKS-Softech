'use client';

import React from 'react';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Cpu,
  Lock,
  Zap,
} from 'lucide-react';
import { INITIAL_WEBSITE_PROJECTS } from '@/lib/showcaseData';

export default function ProductsProvidedSection() {
  const products = INITIAL_WEBSITE_PROJECTS.filter((p) => p.showOnWebsite);

  return (
    <section className="pt-12 pb-16 md:pt-8 md:pb-20 bg-[#F8FAFC] border-b border-[#E2E8F0]" id="products" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-bold text-[#0062E6] uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#0062E6]" />
              <span>Products Provided • In-House SaaS Platforms</span>
            </div>
            <h2 id="products-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A224E] tracking-tight">
              Proprietary Products &amp; Platforms
            </h2>
            <p className="mt-3 text-[#475569] text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore our production-grade in-house software products engineered for enterprise multi-branch operations and commercial leasing.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors self-start md:self-auto"
          >
            <span>View All Production Platforms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full border text-[#0062E6] bg-[#EFF6FF] border-blue-200">
                    {prod.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Production Live</span>
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0A224E] group-hover:text-[#0062E6] transition-colors">
                  {prod.name}
                </h3>
                <div className="text-xs font-bold text-[#EA580C] mt-1 mb-3">
                  {prod.subtitle}
                </div>

                <p className="text-xs text-[#475569] leading-relaxed mb-5">
                  {prod.description}
                </p>

                {/* Outcome Badges */}
                <div className="space-y-1.5 mb-5">
                  {(prod.outcomePills || []).map((pill, pIdx) => {
                    const label = typeof pill === 'string' ? pill : pill?.label || '';
                    const isHighlight = typeof pill === 'object' && pill?.highlight;
                    return (
                      <div
                        key={pIdx}
                        className={`inline-flex items-center gap-2 px-2.5 py-1 text-xs rounded-lg font-semibold border mr-2 mb-1.5 ${
                          isHighlight
                            ? 'bg-[#FFF7ED] text-[#EA580C] border-orange-200 font-bold'
                            : 'bg-[#EFF6FF] text-[#0A224E] border-blue-100'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isHighlight ? 'text-[#FF8800]' : 'text-[#0062E6]'}`} />
                        <span>{label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Capabilities Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                  {(prod.tech || []).slice(0, 3).map((cap, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-[#F8FAFC] text-slate-700 font-semibold border border-slate-200"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between border-t border-[#E2E8F0]">
                <span className="font-mono text-xs text-slate-500 font-medium">
                  {prod.domain}
                </span>

                <a
                  href={prod.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <span>Launch Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

