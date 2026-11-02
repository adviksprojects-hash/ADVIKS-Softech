'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { INITIAL_WEBSITE_PROJECTS } from '@/lib/showcaseData';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Layers,
  Zap,
  Globe,
  Filter,
  Star,
} from 'lucide-react';

export default function PortfolioPage() {
  const { websiteProjects } = useEmployeeAuth();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const allProjects =
    websiteProjects && websiteProjects.length > 0
      ? websiteProjects.filter((p) => p.showOnWebsite)
      : INITIAL_WEBSITE_PROJECTS.filter((p) => p.showOnWebsite);

  const filterTabs = [
    { id: 'ALL', label: 'All Shipped Work', count: allProjects.length },
    {
      id: 'Technology & Engineering',
      label: 'Technology & Engineering',
      count: allProjects.filter((p) => p.category === 'Technology & Engineering').length,
    },
    {
      id: 'Growth & Digital Marketing',
      label: 'Growth & Digital Marketing',
      count: allProjects.filter((p) => p.category === 'Growth & Digital Marketing').length,
    },
  ];

  const displayedProjects =
    activeFilter === 'ALL'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Production Portfolio & Case Studies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A224E] tracking-tight">
              Software That Powers Real Business
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Explore live production platforms, SaaS architectures, and acquisition funnels engineered by ADVIKS Softech.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-[#0062E6] text-white shadow-md shadow-blue-600/30'
                    : 'bg-white border border-[#E2E8F0] text-[#475569] hover:border-blue-200 hover:text-[#0062E6]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] ${
                    activeFilter === tab.id ? 'bg-white/20' : 'bg-[#F8FAFC] text-slate-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {displayedProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 relative group"
              >
                <div>
                  {/* Category Pill & Live Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-[#0062E6] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200 font-mono">
                      /{project.tag || project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Production Live</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-black text-[#0A224E] group-hover:text-[#0062E6] transition-colors mb-1.5">
                    {project.name}
                  </h3>
                  <div className="text-xs font-bold text-[#EA580C] mb-4">
                    {project.subtitle}
                  </div>

                  {/* Outcome Metric Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {(project.outcomePills || []).map((pill, idx) => {
                      const label = typeof pill === 'string' ? pill : pill?.label || '';
                      const isHighlight = typeof pill === 'object' && pill?.highlight;
                      return (
                        <span
                          key={idx}
                          className={`text-xs font-bold px-3 py-1 rounded-lg border flex items-center gap-1.5 ${
                            isHighlight
                              ? 'bg-[#FFF7ED] text-[#EA580C] border-orange-200 font-extrabold'
                              : 'bg-[#EFF6FF] text-[#0062E6] border-blue-200'
                          }`}
                        >
                          {isHighlight ? <TrendingUp className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
                          <span>{label}</span>
                        </span>
                      );
                    })}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Client Review */}
                  {project.review?.quote && (
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 mb-6">
                      <div className="flex items-center gap-1 mb-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-[10px] font-mono font-bold text-slate-500 ml-1.5">
                          Verified Client Outcome
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 italic leading-relaxed mb-2">
                        &quot;{project.review.quote}&quot;
                      </p>
                      <div className="text-[11px] font-bold text-[#0A224E]">
                        {project.review.author} • {project.review.company}
                      </div>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {(project.tech || []).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-md bg-[#F8FAFC] text-slate-700 font-mono border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer URL / CTA */}
                <div className="pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold bg-[#0062E6] hover:bg-[#0A224E] text-white transition-all shadow-md shadow-blue-600/20"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-xs font-mono font-bold text-slate-500 truncate">
                    Domain: <strong className="text-[#0A224E]">{project.domain}</strong>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need a High-Performance Digital Product or Scaled Growth Engine?
            </h2>
            <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
              Book a 30-minute discovery consultation with our engineering and performance leads. We inspect your stack, pinpoint bottlenecks, and map out your sprint SOW.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white text-xs font-extrabold shadow-lg transition-transform hover:scale-105"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
