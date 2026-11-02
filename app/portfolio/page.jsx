'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
} from 'lucide-react';
import { InstagramIcon } from '@/components/SocialIcons';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'All Case Studies', count: 9 },
    { id: 'SAAS', label: 'Enterprise SaaS & ERP', count: 2 },
    { id: 'COMMERCIAL', label: 'Commercial Real Estate', count: 2 },
    { id: 'ECOMMERCE', label: 'D2C E-Commerce', count: 3 },
    { id: 'AI', label: 'AI & Data Intelligence', count: 1 },
    { id: 'MARKETING', label: 'Performance ROAS', count: 3 },
  ];

  const softwareProjects = [
    {
      id: 'paras-business-park',
      type: 'COMMERCIAL',
      title: 'Paras Business Park — Commercial Real Estate Platform',
      category: 'Commercial Web Platform',
      client: 'Paras Business Park',
      metricTag: '⚡ 0.6s Page Speed',
      metricSubtitle: '140+ High-Intent Corporate Inquiries',
      liveUrl: 'https://paras-business-park-2.vercel.app',
      tech: ['TypeScript', 'Next.js 16', 'Tailwind CSS', 'Vercel Edge'],
      summary: 'High-performance digital presentation and leasing platform for a premium commercial corporate hub.',
      deliverables: [
        'Interactive floor plans, office space catalog & virtual specs',
        'Direct tenant leasing inquiry capture with CRM webhook dispatch',
        'Sub-second page loads engineered for high-intent corporate investors',
      ],
      impact: '100% digital inquiry pipeline with zero hosting downtime on Vercel infrastructure.',
    },
    {
      id: 'ai-review-system',
      type: 'AI',
      title: 'AI Review System — Intelligent Feedback & Sentiment Engine',
      category: 'AI / ML & Customer Intelligence',
      client: 'AI Review System Lab',
      metricTag: '⭐ 97.4% NLP Accuracy',
      metricSubtitle: '180ms Real-Time Inference Latency',
      liveUrl: 'https://ai-review-system-bay.vercel.app',
      tech: ['TypeScript', 'React', 'Next.js', 'NLP Pipeline', 'Tailwind CSS'],
      summary: 'AI-driven sentiment classification and feedback evaluation platform built to turn customer reviews into actionable insights.',
      deliverables: [
        'Automated sentiment classification (Positive / Neutral / Negative)',
        'Real-time customer feedback categorization & rating trend graphs',
        'Intelligent auto-generated reply recommendations for brand managers',
      ],
      impact: 'Reduces manual review analysis time by 75% with instant customer sentiment scoring.',
    },
    {
      id: 'vyaparstock',
      type: 'SAAS',
      title: 'VyaparStock — Smart Billing & Inventory Management SaaS',
      category: 'Enterprise SaaS & Fintech',
      client: 'VyaparStock (ADVIKS In-House Product)',
      metricTag: '🚀 < 2s POS Invoicing',
      metricSubtitle: '99.98% Production Uptime SLA',
      liveUrl: 'https://www.vyaparstock.in',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Cloud API'],
      summary: 'Flagship enterprise cloud billing, GST invoicing, and inventory control platform engineered for modern Indian retailers & wholesalers.',
      deliverables: [
        'Lightning-fast POS billing & digital invoice generation',
        'Real-time stock ledger, low-inventory alerts & barcode lookup',
        'Instant WhatsApp & Email invoice dispatch to customers',
      ],
      impact: 'Empowers merchants to track inventory and reconcile financial statements in seconds.',
    },
    {
      id: 'haruviru-gold-honey',
      type: 'ECOMMERCE',
      title: 'HaruViru Gold Honey — D2C Organic E-Commerce Store',
      category: 'D2C E-Commerce & Growth',
      client: 'HaruViru Natural Foods',
      metricTag: '📈 4.9x Verified ROAS',
      metricSubtitle: '+38% Mobile Checkout Conversion',
      liveUrl: 'https://haru-viru-gold-honey.vercel.app',
      tech: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Conversion Funnels'],
      summary: 'Pure honey and natural organic products brand store designed with high-conversion mobile checkouts and SEO optimization.',
      deliverables: [
        'Mobile-first storefront with visual storytelling and product benefits',
        'Conversion-optimized cart & direct checkout pathways',
        'Integrated with digital marketing ad tracking (Meta & Google pixels)',
      ],
      impact: 'Delivers a frictionless, trust-inspiring shopping experience for health-conscious consumers.',
    },
    {
      id: 'aameena-furniture',
      type: 'ECOMMERCE',
      title: 'Aameena Furniture — Premium Interior & Modular Catalog',
      category: 'E-Commerce & Interior Showcase',
      client: 'Aameena Furniture Mart',
      metricTag: '📍 #1 Local 3-Pack Rank',
      metricSubtitle: '+310% Direct Quotation Inquiries',
      liveUrl: 'https://aameena-ferniture.vercel.app',
      tech: ['JavaScript', 'Next.js', 'Tailwind CSS', 'WhatsApp Business'],
      summary: 'Digital showroom and custom quotation portal for bespoke home and office furniture collections.',
      deliverables: [
        'Interactive room-by-room furniture galleries (Living, Bedroom, Office)',
        'One-click WhatsApp quotation inquiry for custom sizing',
        'High-resolution image asset optimization with Next.js Image caching',
      ],
      impact: 'Boosts showroom customer footfalls and automated digital quote requests.',
    },
    {
      id: 'hariviru-celebration-house',
      type: 'COMMERCIAL',
      title: 'HaruViru Celebration House — Event Venue & Banquet Booking',
      category: 'Hospitality & Venue Portal',
      client: 'HaruViru Celebrations',
      metricTag: '🎉 100% Booking Automation',
      metricSubtitle: '24/7 Digital Date Reservation Pipeline',
      liveUrl: 'https://haruvirucelebrationhouse.vercel.app',
      tech: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
      summary: 'Modern hospitality portal showcasing banquet amenities, event packages, and celebratory bookings.',
      deliverables: [
        'Full amenity tour for weddings, birthdays, and corporate celebrations',
        'Date availability inquiries and custom event package builder',
        'Customer testimonials and photo galleries of past functions',
      ],
      impact: 'Streamlines event discovery and direct customer reservation leads.',
    },
  ];

  const marketingCaseStudies = [
    {
      brand: 'HaruViru Natural Foods',
      type: 'MARKETING',
      category: 'D2C Health & E-Commerce',
      roas: '4.9x Verified ROAS',
      metricTag: '📈 4.9x ROAS',
      spendRevenue: '₹1,20,000 Spend ➔ ₹5,88,000 Revenue',
      badge: 'Paid Acquisition & CRO',
      results: [
        'Cut Customer Acquisition Cost (CAC) by 67% with sub-second Next.js checkout',
        'Meta Advantage+ Shopping catalog retargeting with automated pixel CAPI sync',
        '41% Repeat purchase rate powered by WhatsApp abandoned cart recovery',
      ],
    },
    {
      brand: 'Paras Business Park',
      type: 'MARKETING',
      category: 'Commercial Real Estate Hub',
      roas: '140+ Corporate Inquiries',
      metricTag: '🏢 140+ Inquiries',
      spendRevenue: '44% Lower Cost Per Qualified Tenant Lead',
      badge: 'High-Intent Search & Maps',
      results: [
        'Google Search exact-match intent strategy targeting commercial leasing directors',
        '0.6s Sub-second landing page speed maximizing Google Ads Quality Score (10/10)',
        'Automated CRM webhook routing leads to leasing agents in < 90 seconds',
      ],
    },
    {
      brand: 'Aameena Furniture Mart',
      type: 'MARKETING',
      category: 'Interior & Showroom Retail',
      roas: '+310% Lead Surge',
      metricTag: '📍 #1 Map Pack',
      spendRevenue: 'Rank #1 Local 3-Pack Map Pack Across Regional Hubs',
      badge: 'Local SEO & WhatsApp Funnel',
      results: [
        'Google Business Profile (GBP) local citation overhaul and review automation',
        'Direct WhatsApp click-to-chat catalog ad conversions on Meta feeds',
        'High-resolution WebP modular galleries with instant mobile loading',
      ],
    },
  ];

  const filteredSoftware = softwareProjects.filter(
    (p) => activeFilter === 'ALL' || p.type === activeFilter
  );

  const filteredMarketing = marketingCaseStudies.filter(
    (m) => activeFilter === 'ALL' || activeFilter === 'MARKETING' || (activeFilter === 'ECOMMERCE' && m.brand.includes('Honey'))
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0062E6]" />
              <span>Production Deployments & Measurable Commercial Impact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A224E] tracking-tight">
              Real Client Platforms. Real Revenue Numbers.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              Explore our production-deployed software and performance marketing case studies. Filter by industry sector below to see how our engineering and growth pods deliver verifiable business outcomes.
            </p>
          </div>

          {/* Industry Filter Pills (Benchmarked from 3minds & Matrix Bricks) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0A224E] text-white shadow-md shadow-blue-950/20 scale-105'
                      : 'bg-white text-slate-600 border border-[#E2E8F0] hover:border-slate-300 hover:text-[#0A224E]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Section 1: Software Architecture Case Studies */}
          {(activeFilter === 'ALL' || filteredSoftware.length > 0) && (
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0062E6] mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Engineering & Cloud Platforms</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
                    Full-Stack Web, SaaS & Mobile Deployments
                  </h2>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200">
                  {filteredSoftware.length} Live Builds
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredSoftware.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div>
                      {/* Top Bar: Category, Client, and High-Impact Metric Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200">
                            {item.category}
                          </span>
                          <span className="text-xs font-bold text-slate-500">{item.client}</span>
                        </div>

                        {/* High-Impact Metric Tag (Benchmarked from 3minds) */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] border border-orange-200 text-xs font-black text-[#EA580C] shadow-2xs">
                          <span>{item.metricTag}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-extrabold text-[#0A224E] mb-3 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#475569] mb-6 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Impact Box */}
                      <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-blue-200 mb-6">
                        <div className="text-[11px] font-extrabold text-[#0062E6] uppercase tracking-wider mb-1">
                          Key Performance Metric:
                        </div>
                        <div className="text-sm font-bold text-[#0A224E] flex items-center justify-between">
                          <span>{item.impact}</span>
                        </div>
                        <div className="text-[11px] font-mono text-[#0062E6] font-bold mt-1">
                          {item.metricSubtitle}
                        </div>
                      </div>

                      {/* Deliverables List */}
                      <div className="space-y-2 mb-8 text-sm">
                        <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                          Engineering Highlights:
                        </div>
                        {item.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
                            <span className="font-medium">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech stack badges */}
                      <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap gap-2 mb-6">
                        {item.tech.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs rounded-md bg-[#F8FAFC] text-slate-700 font-mono border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Link & Domain Line */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#0062E6] hover:bg-[#0A224E] text-white transition-all shadow-xs"
                        >
                          <span>Launch Live Platform</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-3 py-1.5 rounded-lg border border-blue-200 inline-flex items-center gap-1.5 self-start sm:self-auto">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>{item.liveUrl.replace('https://', '')}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Performance Marketing & ROAS Scaling */}
          {(activeFilter === 'ALL' || activeFilter === 'MARKETING' || filteredMarketing.length > 0) && (
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#EA580C] mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Paid Media & Acquisition Analytics</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
                    Performance Marketing & ROAS Case Studies
                  </h2>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono font-bold text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-orange-200">
                  {filteredMarketing.length} Growth Studies
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredMarketing.map((study, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-orange-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#EA580C]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-orange-200">
                          {study.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-500">{study.category}</span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#0A224E] mb-2">
                        {study.brand}
                      </h3>

                      {/* Primary ROAS / Outcome Callout */}
                      <div className="p-4 rounded-2xl bg-gradient-to-tr from-[#FFF7ED] to-white border border-orange-200 mb-6">
                        <div className="text-2xl font-black text-[#EA580C] tracking-tight">
                          {study.roas}
                        </div>
                        <div className="text-xs font-bold text-slate-700 mt-1 font-mono">
                          {study.spendRevenue}
                        </div>
                      </div>

                      {/* Execution Results */}
                      <div className="space-y-3 mb-6">
                        <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          Campaign Blueprint:
                        </div>
                        {study.results.map((res, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                            <span className="font-medium leading-relaxed">{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E2E8F0]">
                      <Link
                        href={`/contact?service=marketing`}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-[#FFF7ED] hover:bg-[#EA580C] text-[#EA580C] hover:text-white border border-orange-200 transition-all"
                      >
                        <span>Request ROAS Diagnostic</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Box with Benchmark "Free Website & Funnel Teardown" */}
          <div className="p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-[#EFF6FF] via-white to-[#FFF7ED] text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
              Ready to Upgrade Your Software or Scale Return on Ad Spend?
            </h3>
            <p className="mt-3 text-[#475569] text-sm max-w-lg mx-auto">
              Our partners will audit your existing web architecture and paid campaigns. Zero sales pressure—just clean metrics and actionable architecture blueprints.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0062E6] to-[#0A224E] hover:opacity-95 font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105"
              >
                Hire Engineering Pod
              </Link>
              <Link
                href="/contact?service=marketing"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105"
              >
                Claim Free ROAS Teardown
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
