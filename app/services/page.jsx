'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectScopeEstimator from '@/components/ProjectScopeEstimator';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { INITIAL_WEBSITE_SERVICES } from '@/lib/showcaseData';
import {
  Code2,
  Smartphone,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  Network,
  Target,
  Search,
  TrendingUp,
  Share2,
  Megaphone,
  MailCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  ExternalLink,
} from 'lucide-react';

const iconMap = {
  Code2,
  Smartphone,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  Network,
  Target,
  Search,
  TrendingUp,
  Share2,
  Megaphone,
  MailCheck,
};

export default function ServicesPage() {
  const { websiteServices } = useEmployeeAuth();

  const services =
    websiteServices && websiteServices.length > 0
      ? websiteServices.filter((s) => s.showOnWebsite)
      : INITIAL_WEBSITE_SERVICES.filter((s) => s.showOnWebsite);

  const techServices = services.filter(
    (s) => s.category === 'Technology & Engineering'
  );
  const growthServices = services.filter(
    (s) => s.category === 'Growth & Digital Marketing'
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 pt-12 pb-16 md:pt-8 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Full-Spectrum Digital Agency Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A224E] tracking-tight">
              Engineering Resilient Software &amp; Scaling Revenue
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              We bridge software development with customer acquisition. Explore our specialized engineering and performance growth pods below.
            </p>
          </div>

          {/* PILLAR 1: TECHNOLOGY & ENGINEERING */}
          <section className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062E6]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
                    Technology &amp; Engineering Services
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sub-second Next.js 16 platforms, mobile apps, database architecture, and applied AI.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200 self-start sm:self-auto">
                {techServices.length} Engineering Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techServices.map((service) => {
                const IconComp = iconMap[service.iconName] || Code2;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group rounded-3xl border border-[#E2E8F0] bg-white overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 relative"
                  >
                    {/* Top Image Banner with Overlay */}
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.bgImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A224E] via-[#0A224E]/70 to-transparent" />

                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-blue-200 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          Architecture
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-lg font-black text-white leading-snug group-hover:text-amber-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-[#475569] leading-relaxed mb-4">
                          {service.tagline}
                        </p>

                        <div className="space-y-2 mb-6">
                          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block">
                            Key Deliverables:
                          </span>
                          {(service.capabilities || []).slice(0, 3).map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0062E6] group-hover:text-[#0A224E] flex items-center gap-1 transition-colors">
                          <span>View Full Specs</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          SLA Guaranteed
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* PILLAR 2: GROWTH & DIGITAL MARKETING */}
          <section className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#EA580C]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
                    Growth &amp; Digital Marketing Services
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Meta &amp; Google Ads ROAS scaling, local SEO dominance, CRO funnels, and B2B inbound pipelines.
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-orange-200 self-start sm:self-auto">
                {growthServices.length} Performance Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {growthServices.map((service) => {
                const IconComp = iconMap[service.iconName] || Target;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group rounded-3xl border border-[#E2E8F0] bg-white overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-2xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1 relative"
                  >
                    {/* Top Image Banner with Overlay */}
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.bgImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A224E] via-[#0A224E]/70 to-transparent" />

                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow">
                          <IconComp className="w-4 h-4 text-[#FF8800]" />
                        </div>
                        <span className="text-[10px] font-bold text-orange-200 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          Growth &amp; ROAS
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-lg font-black text-white leading-snug group-hover:text-amber-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-[#475569] leading-relaxed mb-4">
                          {service.tagline}
                        </p>

                        <div className="space-y-2 mb-6">
                          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block">
                            Key Deliverables:
                          </span>
                          {(service.capabilities || []).slice(0, 3).map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#EA580C] group-hover:text-[#0A224E] flex items-center gap-1 transition-colors">
                          <span>View Full Specs</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          Target 4.8x+ ROAS
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Interactive Project Scope Estimator */}
          <div className="mb-24">
            <ProjectScopeEstimator />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
