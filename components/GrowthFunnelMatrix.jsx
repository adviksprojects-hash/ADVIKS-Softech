'use client';

import React, { useState } from 'react';
import {
  Target,
  Zap,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Search,
  MousePointerClick,
  Share2,
  Sparkles,
} from 'lucide-react';

export default function GrowthFunnelMatrix() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Intent & Capture',
      subtitle: 'High-Value Traffic Acquisition',
      icon: Target,
      color: 'blue',
      badge: 'Acquisition',
      headline: 'Stop Wasting Ad Spend on Low-Intent Clicks',
      description:
        'We engineer hyper-targeted PPC ad campaigns and dominate technical organic search rankings so you only pay for prospects ready to buy.',
      tactics: [
        { label: 'Google Search Intent', detail: 'Zero-waste negative keyword filtering targeting transactional commercial keywords.' },
        { label: 'Meta AI Lookalikes', detail: 'Advanced custom audience seeding trained on high-LTV past customer data.' },
        { label: 'Technical SEO Architecture', detail: 'Programmatic Next.js SSR metadata and JSON-LD schema for Google Rich Snippets.' },
      ],
      kpi: 'Average 34% Lower Cost-Per-Click (CPC)',
    },
    {
      step: '02',
      title: 'Sub-Second Conversion',
      subtitle: 'Frictionless Code-Backed Funnels',
      icon: Zap,
      color: 'amber',
      badge: 'Conversion Rate Optimization',
      headline: 'Turn Up to 3x More Visitors Into Paying Customers',
      description:
        'Standard agency landing pages take 3-5 seconds to load, losing half the paid clicks before the page renders. Our Next.js funnels load in 600ms flat.',
      tactics: [
        { label: 'Sub-Second Edge Rendering', detail: 'Pre-rendered static assets deployed across global edge networks.' },
        { label: 'A/B Headline Testing', detail: 'Multi-variant testing of value propositions, hero CTAs, and trust badges.' },
        { label: 'Mobile-First Form Friction Removal', detail: 'One-tap auto-fill inputs, localized currency, and instant validation.' },
      ],
      kpi: '+48% Conversion Rate Improvement',
    },
    {
      step: '03',
      title: 'Automated Retention & Routing',
      subtitle: 'Instant Lead Engagement',
      icon: MessageSquare,
      color: 'emerald',
      badge: 'Automation & CRM',
      headline: 'Engage Inbound Leads in Under 90 Seconds',
      description:
        'When a prospect submits an inquiry, every second of delay reduces closing rates. We hook your funnels directly into WhatsApp Business API and CRM workflows.',
      tactics: [
        { label: 'WhatsApp Webhook Routing', detail: 'Instant personalized WhatsApp acknowledgment message with brochure/spec sheet.' },
        { label: 'Automated CRM Lead Scoring', detail: 'Automatic qualification and instant SMS/Slack ping to the designated closer.' },
        { label: 'Smart Drip Sequences', detail: 'Multi-day nurture workflows addressing objections, case studies, and testimonials.' },
      ],
      kpi: '90-Second Lead Response Time',
    },
    {
      step: '04',
      title: 'Attribution & Scale',
      subtitle: 'Data-Backed Budget Expansion',
      icon: BarChart3,
      color: 'purple',
      badge: 'Analytics & Scaling',
      headline: 'Scale Budgets with Complete Revenue Certainty',
      description:
        'With cookie degradation and iOS privacy blocks, client-side tracking loses 30% of sales data. We deploy server-side Conversions API (CAPI) for 100% accurate tracking.',
      tactics: [
        { label: 'Meta Conversions API (CAPI)', detail: 'Direct server-to-server event tracking bypassing ad blockers and iOS blocks.' },
        { label: 'Multi-Touch ROAS Attribution', detail: 'Identify exact ad creatives and keywords driving offline deals and revenue.' },
        { label: 'Predictive Budget Scaling', detail: 'Systematically ramp spend into top-performing ad sets without destabilizing ad auctions.' },
      ],
      kpi: '4.6x – 5.4x Sustained Client ROAS',
    },
  ];

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full">
      {/* Stage Navigation Pills */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {stages.map((stg, idx) => {
          const Icon = stg.icon;
          const isActive = activeStage === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                isActive
                  ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-slate-600">Stage {stg.step}</span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
              </div>
              <div className="text-sm font-bold text-slate-900 leading-snug">{stg.title}</div>
              <div className="text-[11px] text-slate-600 truncate mt-0.5">{stg.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Sandbox */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
              <CurrentIcon className="w-3.5 h-3.5" />
              <span>{current.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {current.headline}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shrink-0 text-center sm:text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
              Engineered Milestone
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-blue-600 tracking-tight">
              {current.kpi}
            </span>
          </div>
        </div>

        {/* Tactical Breakdown */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.tactics.map((tac, tIdx) => (
            <div
              key={tIdx}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <h4 className="text-sm font-bold text-slate-900">{tac.label}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6.5">
                {tac.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
