'use client';

import React from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Star,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe,
  TrendingUp,
  Zap,
  Building,
  Laptop,
} from 'lucide-react';

export default function OurWorkShowcase() {
  const projects = [
    {
      id: 'vyaparstock',
      name: 'VyaparStock Cloud',
      tagline: 'Enterprise Billing, GST Invoicing & Multi-Warehouse ERP SaaS',
      liveUrl: 'https://www.vyaparstock.in',
      domain: 'vyaparstock.in',
      categoryTags: ['/SaaS Architecture', '/Cloud ERP', '/WhatsApp Invoicing'],
      outcomePills: [
        { label: '< 2s GST Billing', highlight: true },
        { label: '99.98% Uptime', highlight: false },
        { label: 'WhatsApp Invoice Sync', highlight: true },
      ],
      description:
        'Engineered an enterprise cloud POS and multi-warehouse billing platform. Features real-time stock ledgers, barcode scanners, and automated GST invoice dispatch directly to customer WhatsApp.',
      review: {
        quote:
          'ADVIKS engineered our entire multi-warehouse billing and GST reconciliation engine. WhatsApp invoice dispatch cut our payment collection cycle by 60%.',
        author: 'Product Operations Lead',
        company: 'VyaparStock Cloud',
      },
      browserColor: 'bg-blue-950/10',
    },
    {
      id: 'paras-business-park',
      name: 'Paras Business Park',
      tagline: 'High-Performance Commercial Real Estate & Leasing Portal',
      liveUrl: 'https://paras-business-park-2.vercel.app',
      domain: 'paras-business-park-2.vercel.app',
      categoryTags: ['/Commercial Real Estate', '/High-Intent Leasing', '/Vercel Edge'],
      outcomePills: [
        { label: '100/100 Core Vitals', highlight: false },
        { label: '-34% Ad CPC', highlight: true },
        { label: '3.2x Leasing Leads', highlight: true },
      ],
      description:
        'Built an interactive commercial presentation platform featuring unit floor plan specs, virtual office tours, and direct tenant lead capture funnels connected to CRM webhooks.',
      review: {
        quote:
          'The interactive floor navigator and sub-second page speed gave corporate investors instant confidence. Our qualified leasing inquiries tripled within 45 days.',
        author: 'Managing Director',
        company: 'Paras Business Park',
      },
      browserColor: 'bg-slate-900/10',
    },
    {
      id: 'haruviru-gold-honey',
      name: 'HaruViru Natural Foods',
      tagline: 'D2C Organic Food Store & High-Conversion Ad Telemetry',
      liveUrl: 'https://haru-viru-gold-honey.vercel.app',
      domain: 'haru-viru-gold-honey.vercel.app',
      categoryTags: ['/D2C E-Commerce', '/Meta Advantage+', '/Funnel CRO'],
      outcomePills: [
        { label: '4.8x Meta ROAS', highlight: true },
        { label: '-38% CAC', highlight: true },
        { label: 'WhatsApp Cart Recovery', highlight: false },
      ],
      description:
        'Modern D2C e-commerce platform paired with Meta Advantage+ Shopping ads and automated WhatsApp abandoned cart recovery, driving predictable daily recurring sales.',
      review: {
        quote:
          'By combining a lightning-fast Next.js store with Meta Advantage+ and WhatsApp cart recovery, ADVIKS turned our D2C website into a predictable daily sales machine.',
        author: 'Founder & CEO',
        company: 'HaruViru Natural Foods',
      },
      browserColor: 'bg-amber-950/10',
    },
    {
      id: 'aameena-furniture',
      name: 'Aameena Furniture Mart',
      tagline: 'Digital Interior Showroom & 1-Click WhatsApp Quotation Engine',
      liveUrl: 'https://aameena-ferniture.vercel.app',
      domain: 'aameena-ferniture.vercel.app',
      categoryTags: ['/Retail Catalog', '/Local SEO 3-Pack', '/WhatsApp Quotations'],
      outcomePills: [
        { label: 'Room-by-Room Catalog', highlight: false },
        { label: '1-Click Quote', highlight: true },
        { label: '+65% Showroom Footfall', highlight: true },
      ],
      description:
        'Digitized bespoke modular home and office collections with instant WebP image rendering and automated direct quote generation sent directly to WhatsApp sales desks.',
      review: {
        quote:
          'Customers now browse our modular collections on their phones and send custom size inquiries straight to our WhatsApp before visiting the showroom.',
        author: 'Proprietor',
        company: 'Aameena Furniture Mart',
      },
      browserColor: 'bg-slate-900/10',
    },
    {
      id: 'ai-review-system',
      name: 'AI Review & Sentiment Engine',
      tagline: 'Real-Time Customer Sentiment Classification & Contextual Reply AI',
      liveUrl: 'https://ai-review-system-bay.vercel.app',
      domain: 'ai-review-system-bay.vercel.app',
      categoryTags: ['/Applied AI', '/NLP Inference', '/Sentiment Telemetry'],
      outcomePills: [
        { label: '180ms NLP Inference', highlight: false },
        { label: '75% Time Saved', highlight: true },
        { label: 'Auto-Reply AI Copilot', highlight: true },
      ],
      description:
        'AI pipeline ingesting raw customer reviews across multi-channel platforms to score sentiment, isolate product complaints, and synthesize context-aware replies in milliseconds.',
      review: {
        quote:
          'Instead of manually reading hundreds of customer reviews, the NLP pipeline classifies sentiment instantly and drafts accurate brand responses in seconds.',
        author: 'CX & Operations Head',
        company: 'Customer Intelligence Lab',
      },
      browserColor: 'bg-blue-950/10',
    },
    {
      id: 'haruviru-celebration-house',
      name: 'HaruViru Celebrations',
      tagline: 'Banquet & Venue Booking Portal with Automated Event Inquiries',
      liveUrl: 'https://haruvirucelebrationhouse.vercel.app',
      domain: 'haruvirucelebrationhouse.vercel.app',
      categoryTags: ['/Hospitality', '/Banquet Booking', '/Local Intent SEO'],
      outcomePills: [
        { label: '24/7 Venue Booking', highlight: true },
        { label: '#1 Local SEO', highlight: true },
        { label: '+80% Event Leads', highlight: false },
      ],
      description:
        'Showcases banquet amenities, wedding packages, and catering galleries with date availability inquiries, driving 24/7 event discovery across regional map packs.',
      review: {
        quote:
          'Our banquet packages and event galleries look world-class online, capturing wedding and corporate booking leads round the clock.',
        author: 'Executive Management',
        company: 'HaruViru Celebration House',
      },
      browserColor: 'bg-amber-950/10',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]" aria-labelledby="our-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Selected Work: Impact Created By Our Code &amp; Campaigns</span>
            </div>
            <h2 id="our-work-heading" className="text-3xl sm:text-5xl font-black text-[#0A224E] tracking-tight">
              Real Businesses. Shipped Software. Quantifiable Outcomes.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
              We don’t just show mockups. Explore live production web platforms, SaaS applications, and D2C stores engineered and scaled by ADVIKS Softech.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0062E6] hover:bg-[#0A224E] text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 hover:scale-105 shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 High-Impact Work Cards with Embedded Verified Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Category slash tags */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono font-bold text-slate-400 mb-4">
                  {proj.categoryTags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[#0062E6] bg-[#EFF6FF] px-2 py-0.5 rounded border border-blue-100">
                      {tag}
                    </span>
                  ))}
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
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors"
                      title={`Visit ${proj.name} live`}
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#0A224E] mb-1.5 leading-snug">
                  {proj.name}
                </h3>
                <div className="text-xs font-bold text-slate-500 mb-3">
                  {proj.tagline}
                </div>

                <p className="text-xs text-[#475569] leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* 3 Outcome Metric Pills in #0062E6 and #FF8800 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.outcomePills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg border shadow-2xs ${
                        pill.highlight
                          ? 'bg-[#FFF7ED] text-[#EA580C] border-orange-200'
                          : 'bg-[#EFF6FF] text-[#0062E6] border-blue-200'
                      }`}
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Embedded Verified Owner / Client Review Box (Benchmark 3minds) */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-[#F8FAFC] to-white border border-slate-200/90 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    {/* 5-Star Rating Badge in #FF8800 */}
                    <div className="flex items-center gap-1 text-[#FF8800]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FF8800]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Verified Client
                    </span>
                  </div>

                  <p className="text-xs text-[#0A224E] font-medium italic leading-relaxed">
                    &quot;{proj.review.quote}&quot;
                  </p>

                  <div className="text-[11px] font-bold text-slate-600 pt-1 flex items-center justify-between border-t border-slate-100">
                    <span className="text-[#0A224E]">{proj.review.author}</span>
                    <span className="text-slate-400 font-normal">{proj.review.company}</span>
                  </div>
                </div>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-50 hover:bg-[#0A224E] hover:text-white text-xs font-bold text-[#0A224E] border border-slate-200 transition-all group-hover:border-[#0062E6]/30"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

