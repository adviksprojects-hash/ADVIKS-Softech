'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { INITIAL_WEBSITE_PROJECTS } from '@/lib/showcaseData';
import {
  ExternalLink,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  TrendingUp,
  Zap,
  Layers,
  Eye,
  X,
  Code2,
} from 'lucide-react';

export default function OurWorkShowcase() {
  const { websiteProjects } = useEmployeeAuth();
  const [modalProject, setModalProject] = useState(null);

  const projectsToDisplay =
    websiteProjects && websiteProjects.length > 0
      ? websiteProjects.filter((p) => p.showOnWebsite)
      : INITIAL_WEBSITE_PROJECTS.filter((p) => p.showOnWebsite);

  // Selected flagship projects get deep detailed cards (top 3)
  const featuredProjects = projectsToDisplay.slice(0, 3);
  // Other projects get a scannable 1-line interactive row
  const otherProjects = projectsToDisplay.slice(3);

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]" aria-labelledby="our-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Selected Work: {projectsToDisplay.length} Live Commercial Platforms &amp; SaaS Systems</span>
            </div>
            <h2 id="our-work-heading" className="text-3xl sm:text-5xl font-black text-[#0A224E] tracking-tight">
              Real Businesses. Shipped Software. Quantifiable Outcomes.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
              Explore live production web platforms, SaaS applications, and enterprise systems engineered and scaled by ADVIKS Softech.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0062E6] hover:bg-[#0A224E] text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 hover:scale-105 shrink-0"
          >
            <span>View All {projectsToDisplay.length} Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 1. FEATURED SELECTED PROJECTS: DEEP DETAIL BENTO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredProjects.map((proj) => (
            <article
              key={proj.id}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Category tag */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px] font-mono font-bold text-slate-400 mb-4">
                  <span className="text-[#0062E6] bg-[#EFF6FF] px-2.5 py-0.5 rounded-md border border-blue-100">
                    /{proj.tag || proj.category}
                  </span>
                  <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">
                    Featured Flagship
                  </span>
                </div>

                {/* Stylized Browser Frame Preview Header */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 mb-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="text-[11px] font-mono text-slate-400 ml-1">Live Cloud Deployment</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Production</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-mono font-bold text-[#0A224E] truncate max-w-[200px]">
                      {proj.domain}
                    </span>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-xl font-extrabold text-[#0A224E] mb-1.5 group-hover:text-[#0062E6] transition-colors">
                  {proj.title || proj.name}
                </h3>
                <div className="text-xs font-bold text-[#EA580C] mb-3">
                  {proj.tagline || proj.subtitle}
                </div>

                {/* Architecture Description */}
                <p className="text-xs text-[#475569] leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Verified Client Review Card */}
                {proj.review && proj.review.quote && (
                  <div className="mb-5 p-3.5 rounded-2xl bg-[#FFF7ED] border border-orange-200/80 space-y-2">
                    <div className="flex items-center gap-1 text-[#FF8800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      <span className="text-[10px] font-bold text-slate-500 ml-1.5">
                        Verified Client Rating
                      </span>
                    </div>
                    <p className="text-xs italic text-[#0A224E] font-medium leading-relaxed">
                      &ldquo;{proj.review.quote}&rdquo;
                    </p>
                    <div className="text-[11px] font-bold text-[#EA580C] pt-1 border-t border-orange-200/50">
                      — {proj.review.author}, <span className="text-slate-600 font-normal">{proj.review.company}</span>
                    </div>
                  </div>
                )}

                {/* Quantifiable Outcome Pills */}
                {proj.outcomePills && proj.outcomePills.length > 0 && (
                  <div className="mb-5 space-y-1.5">
                    <div className="text-[10px] font-bold text-[#0A224E] uppercase tracking-wider mb-2">
                      Quantified Business Impact:
                    </div>
                    {proj.outcomePills.map((pill, pIdx) => {
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
                )}
              </div>

              {/* Card Footer: Tech Stack Badges */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {(proj.tech || []).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] rounded bg-[#F8FAFC] text-slate-600 font-mono border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0062E6] hover:text-[#0A224E] flex items-center gap-1 transition-colors"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 2. OTHER SHIPPED PROJECTS: HIGH-DENSITY 1-LINE SCANNABLE ROWS */}
        {otherProjects.length > 0 && (
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#E2E8F0] mb-4 gap-3">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#FF8800]" />
                  <span>Additional Production Deployments ({otherProjects.length})</span>
                </span>
                <h3 className="text-xl font-extrabold text-[#0A224E] mt-1">
                  More Shipped Platforms &amp; Enterprise Architectures
                </h3>
              </div>
              <span className="text-xs text-slate-500">
                Click any row for quick architecture breakdown &amp; metrics.
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {otherProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="py-4 px-3 sm:px-4 rounded-2xl hover:bg-[#F8FAFC] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group"
                >
                  {/* Left: Category & 1-line Info */}
                  <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                    <span className="text-[11px] font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-blue-100 shrink-0">
                      {proj.tag || proj.category}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-extrabold text-[#0A224E] group-hover:text-[#0062E6] transition-colors truncate">
                          {proj.title || proj.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono hidden lg:inline">
                          ({proj.domain})
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {proj.tagline || proj.subtitle || proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Center: Tech tags */}
                  <div className="hidden xl:flex items-center gap-1.5 shrink-0">
                    {(proj.tech || []).slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-600 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button
                      onClick={() => setModalProject(proj)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                      <span>Quick View</span>
                    </button>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUICK VIEW DETAILS MODAL */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-[#475569]">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
                <button
                  onClick={() => setModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-amber-300 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
                  <span>{modalProject.category}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {modalProject.title || modalProject.name}
                </h3>
                <div className="text-xs text-blue-100 mt-1 flex items-center gap-2">
                  <span>Domain:</span>
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-mono hover:text-white"
                  >
                    {modalProject.domain}
                  </a>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
                <div>
                  <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider block mb-1">
                    Architecture &amp; System Overview
                  </span>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {modalProject.description}
                  </p>
                </div>

                {/* Outcome pills */}
                {modalProject.outcomePills && modalProject.outcomePills.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider block mb-2">
                      Quantified Business Outcomes
                    </span>
                    <div className="space-y-1.5">
                      {modalProject.outcomePills.map((pill, i) => {
                        const label = typeof pill === 'string' ? pill : pill?.label || '';
                        const isHighlight = typeof pill === 'object' && pill?.highlight;
                        return (
                          <div
                            key={i}
                            className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-semibold ${
                              isHighlight
                                ? 'bg-[#FFF7ED] border-orange-200 text-[#EA580C] font-bold'
                                : 'bg-[#EFF6FF] border-blue-100 text-[#0A224E]'
                            }`}
                          >
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isHighlight ? 'text-[#FF8800]' : 'text-[#0062E6]'}`} />
                            <span>{label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Verified review */}
                {modalProject.review && modalProject.review.quote && (
                  <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-orange-200 space-y-2">
                    <div className="flex items-center gap-1 text-[#FF8800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs italic text-[#0A224E] font-medium leading-relaxed">
                      &ldquo;{modalProject.review.quote}&rdquo;
                    </p>
                    <div className="text-[11px] font-bold text-[#EA580C]">
                      — {modalProject.review.author}, {modalProject.review.company}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider block mb-2">
                    Production Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(modalProject.tech || []).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[#F8FAFC] border border-slate-200 text-slate-700 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                  <button
                    onClick={() => setModalProject(null)}
                    className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Close
                  </button>
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-blue-600/20"
                  >
                    <span>Open Live Domain</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
