'use client';

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Layers, TrendingUp, Cpu } from 'lucide-react';

export default function EngagementModels() {
  const models = [
    {
      title: 'Custom MVP & Web Build',
      tagline: 'Fixed Milestone Delivery',
      badge: 'Software Engineering',
      badgeColor: 'text-[#0062E6] bg-[#EFF6FF] border-blue-200',
      icon: Layers,
      highlight: false,
      desc: 'Complete full-stack architecture built from scratch with sub-second performance, bank-grade auth, and clean code.',
      features: [
        'Next.js 15, TypeScript & Tailwind CSS frontend',
        'PostgreSQL database & secure API architecture',
        'Interactive client portal sprint burndown tracking',
        '30-day post-launch warranty & bug-fix SLA',
        'Full source code ownership on your GitHub',
      ],
      ctaText: 'Inquire for Custom Build',
      ctaUrl: '/contact?service=web-engineering',
    },
    {
      title: 'Growth & ROAS Retainer',
      tagline: 'Predictable Monthly Revenue',
      badge: 'Most Popular for Scaling',
      badgeColor: 'text-[#EA580C] bg-[#FFF7ED] border-orange-200',
      icon: TrendingUp,
      highlight: true,
      desc: 'End-to-end performance marketing, organic Google search dominance, and conversion rate optimization (CRO).',
      features: [
        'Meta Ads (Advantage+) & Google Search PMax',
        'Sub-second CRO landing page optimization',
        'WhatsApp Business API webhook lead routing',
        'Server-side Meta Conversions API (CAPI)',
        'Weekly ROAS & CAC performance reporting',
      ],
      ctaText: 'Scale Your Marketing',
      ctaUrl: '/contact?service=digital-marketing',
    },
    {
      title: 'Dedicated Full-Stack Pod',
      tagline: 'Tech + Marketing Under One Roof',
      badge: 'Enterprise Partnership',
      badgeColor: 'text-[#0A224E] bg-slate-100 border-slate-300',
      icon: Cpu,
      highlight: false,
      desc: 'A cross-functional pod of senior architects and growth strategists dedicated to your company’s full roadmap.',
      features: [
        'Dedicated senior lead engineer + growth manager',
        'Continuous feature deployment & cloud DevOps',
        'Direct Slack/WhatsApp real-time communication',
        'Priority 1-hour P0 ticket SLA resolution',
        'Bi-weekly roadmap planning & execution',
      ],
      ctaText: 'Hire Dedicated Pod',
      ctaUrl: '/contact?service=dedicated-pod',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Collaboration Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A224E] tracking-tight">
            Flexible Partnership Engagements
          </h2>
          <p className="mt-3 text-[#475569] text-base">
            Choose the engagement model that matches your growth stage — from fixed-milestone web builds to continuous revenue retainers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {models.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.highlight
                    ? 'bg-white border-2 border-[#FF8800] shadow-xl shadow-orange-500/10 ring-4 ring-orange-500/10 md:-translate-y-2'
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${tier.badgeColor}`}>
                      {tier.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0A224E] shadow-2xs">
                      <Icon className="w-5 h-5 text-[#0062E6]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0A224E] mb-1">
                    {tier.title}
                  </h3>
                  <div className="text-xs font-bold text-[#FF8800] uppercase tracking-wider mb-4">
                    {tier.tagline}
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200/80 mb-8 space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Deliverables Included:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                        <Check className="w-4 h-4 text-[#0062E6] shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={tier.ctaUrl}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-[#EA580C] to-[#FF8800] text-white shadow-md shadow-orange-500/20 hover:scale-[1.02]'
                      : 'bg-[#0A224E] text-white hover:bg-[#0062E6] shadow-2xs'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

