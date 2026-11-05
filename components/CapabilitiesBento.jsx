'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Database,
  Cloud,
  Target,
  Search,
  TrendingUp,
  BrainCircuit,
  Bot,
  Zap,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Terminal,
  Activity,
  ShieldCheck,
} from 'lucide-react';

export default function CapabilitiesBento() {
  return (
    <section className="py-20 bg-white border-b border-[#E2E8F0]" aria-labelledby="bento-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] border border-blue-200 text-[11px] font-extrabold text-[#0062E6] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 id="bento-heading" className="text-3xl sm:text-4xl font-black text-[#0A224E] tracking-tight">
              What We Build, Deploy &amp; Scale
            </h2>
            <p className="mt-3 text-[#475569] text-sm sm:text-base max-w-2xl leading-relaxed">
              We eliminate the gap between software development and customer acquisition. Explore our core disciplines engineered for rapid execution.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors bg-[#EFF6FF] px-4 py-2 rounded-xl border border-blue-200 shadow-2xs hover:scale-105"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid: 3 Scannable Magnetic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 01: Robust Web, SaaS & ERP Engineering */}
          <div className="p-8 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] border border-blue-200 text-[#0062E6] flex items-center justify-center shadow-xs">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-blue-200 text-xs font-mono font-bold text-[#0062E6] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Sub-second 0.4s Edge</span>
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#0062E6] mb-1">
                Pillar 01 • Custom Systems Architecture
              </div>
              <h3 className="text-2xl font-black text-[#0A224E] mb-3 leading-snug">
                Robust Web, SaaS &amp; Enterprise ERP Engineering
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                We engineer scalable multi-tenant SaaS applications, custom billing engines like VyaparStock, and commercial real-estate platforms built on Next.js 16, PostgreSQL, and resilient microservices.
              </p>

              {/* Visual Interactive Architecture Preview Snippet */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs mb-6 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-[#0A224E] font-bold">
                    <Terminal className="w-3.5 h-3.5 text-[#0062E6]" />
                    <span>adviks.engine.config</span>
                  </span>
                  <span className="text-emerald-600 font-bold">● 99.98% Uptime SLA</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="text-[10px] text-slate-400">Framework</div>
                    <div className="text-xs font-bold text-[#0A224E] mt-0.5">Next.js 16</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="text-[10px] text-slate-400">Database</div>
                    <div className="text-xs font-bold text-[#0A224E] mt-0.5">PostgreSQL</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="text-[10px] text-slate-400">Architecture</div>
                    <div className="text-xs font-bold text-[#0A224E] mt-0.5">Multi-Tenant</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                    <div className="text-[10px] text-slate-400">Deployment</div>
                    <div className="text-xs font-bold text-[#0062E6] mt-0.5">Vercel Edge</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#0062E6]" />
                <span>Multi-Warehouse POS • WhatsApp Invoicing</span>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1 font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors"
              >
                <span>View Shipped SaaS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 02: High-ROI Performance Marketing & SEO */}
          <div className="p-8 rounded-3xl border border-orange-200/80 bg-white flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#EA580C]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            {/* Subtle warm amber glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/10 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-orange-200 text-[#EA580C] flex items-center justify-center shadow-xs">
                  <Target className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] border border-orange-200 text-xs font-mono font-black text-[#EA580C] shadow-2xs">
                  <span>📈 4.6x - 5.2x Verified ROAS</span>
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-1">
                Pillar 02 • Revenue Acceleration
              </div>
              <h3 className="text-2xl font-black text-[#0A224E] mb-3 leading-snug">
                High-ROI Performance Marketing &amp; Technical SEO
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Targeted Meta Advantage+ ads, Google Search exact-intent funnels, and programmatic SEO engineered with strict CAC control and server-side CAPI telemetry.
              </p>

              {/* ROAS Metric Callout Box */}
              <div className="p-4 rounded-2xl bg-[#FFF7ED]/50 border border-orange-200/80 mb-6 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-[#0A224E]">Meta &amp; Google Ads Pipeline</span>
                  <span className="text-[#EA580C] font-mono">+310% Lead Surge</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#EA580C] to-[#FF8800] h-full rounded-full w-[88%]" />
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>Customer Acquisition Cost: -38%</span>
                  <span>Direct WhatsApp Inquiries</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-semibold">Meta Advantage+ • Google PMax</span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 font-bold text-[#EA580C] hover:text-[#0A224E] transition-colors"
              >
                <span>Explore Media Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 03: Conversion-First UI/UX & D2C Stores */}
          <div className="p-8 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] border border-orange-200 text-[#EA580C] flex items-center justify-center shadow-xs">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-mono font-bold text-[#EA580C] shadow-2xs">
                  <span>🛍️ +38% Mobile Cart CRO</span>
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C] mb-1">
                Pillar 03 • Experience Design &amp; Revamps
              </div>
              <h3 className="text-2xl font-black text-[#0A224E] mb-3 leading-snug">
                Conversion-First UI/UX Design &amp; Website Revamps
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Frictionless mobile checkouts, interactive room-by-room product catalogs, and complete overhauls for existing websites to achieve sub-second speeds and higher conversion rates.
              </p>

              {/* Conversion Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <div className="text-xl font-black text-[#0A224E] font-mono">1-Step</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Mobile Checkout</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <div className="text-xl font-black text-[#EA580C] font-mono">&lt; 90 Sec</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Inquiry Dispatch</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#E2E8F0] text-center shadow-2xs">
                  <div className="text-xl font-black text-[#0062E6] font-mono">100% WebP</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Asset Optimization</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-semibold">VyaparStock Merchants &bull; Aameena Wholesale</span>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1 font-bold text-[#EA580C] hover:text-[#0A224E] transition-colors"
              >
                <span>Explore Live Deployments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

