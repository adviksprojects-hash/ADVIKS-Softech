import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
  ShieldCheck,
  Zap,
  Layers,
  Calendar,
  Clock,
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

export async function generateStaticParams() {
  return INITIAL_WEBSITE_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = INITIAL_WEBSITE_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Code2;
  const isDev = service.category === 'Technology & Engineering';

  const defaultBg = isDev
    ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80'
    : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80';

  const backgroundImage = service.bgImage || defaultBg;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION WITH BEAUTIFUL BACKGROUND IMAGE & GRADIENT OVERLAY */}
        <section className="relative min-h-[460px] md:min-h-[520px] flex items-center bg-[#071736] overflow-hidden">
          {/* Background Image with reliable Fallback and overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Multi-layered gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071736] via-[#0A224E]/95 to-[#0A224E]/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,98,230,0.25),transparent_60%)]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-medium text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-amber-400 font-bold truncate max-w-[220px]">
                {service.title}
              </span>
            </nav>

            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 mb-4">
              <IconComponent className="w-4 h-4 text-[#FF8800]" />
              <span>{service.category}</span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed font-normal">
              {service.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] via-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-orange-600/30 transition-all hover:scale-105"
              >
                <span>Schedule Free 30-Min Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md transition-all"
              >
                <span>View Related Case Studies</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* IN-DEPTH CAPABILITIES & ARCHITECTURE */}
        <section className="py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Capabilities List */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6]">
                    Engineered Capabilities
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A224E] mt-1">
                    What We Deliver Under This Service
                  </h2>
                  <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                    Every deployment is handled by dedicated engineering and growth pods following strict SLAs, code reviews, and transparent milestone tracking.
                  </p>
                </div>

                <div className="space-y-4">
                  {(service.capabilities || []).map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-slate-200 bg-[#F8FAFC] hover:border-blue-300 hover:bg-white transition-all flex items-start gap-3.5 shadow-xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0A224E] leading-snug">
                          {cap}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables */}
                <div className="pt-6 border-t border-slate-200 space-y-4">
                  <h3 className="text-base font-extrabold text-[#0A224E]">
                    Production Deliverables &amp; Artifacts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(service.deliverables || []).map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5 font-medium"
                      >
                        <Zap className="w-4 h-4 text-[#FF8800] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tech Stack & Service Scope Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-8 space-y-6 shadow-xs sticky top-24">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Service Architecture
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A224E]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {service.shortDesc || service.tagline}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider block">
                      Core Technology Stack &amp; Tooling
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(service.techStack || []).map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-mono font-bold border border-slate-200 shadow-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Guaranteed SLA metrics */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider block">
                      ADVIKS Service Commitments
                    </span>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Deployment SLA:</span>
                        <span className="font-bold text-[#0A224E]">2 to 4 Week Sprints</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Code Quality:</span>
                        <span className="font-bold text-emerald-600">100% TypeScript Verified</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Client Visibility:</span>
                        <span className="font-bold text-[#0062E6]">Live Client Portal &amp; SOWs</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0062E6] hover:bg-[#0A224E] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Request Service Proposal &amp; SOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP SPRINT PROCESS */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6]">
                Our Delivery Cadence
              </span>
              <h2 className="text-3xl font-extrabold text-[#0A224E] mt-1">
                From Discovery to Production Scale
              </h2>
              <p className="text-xs text-slate-500 mt-2">
                Predictable 4-phase agile sprints with full visibility in our client portal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  name: 'Discovery & SOW',
                  desc: 'Deep-dive into your requirements, database models, target KPIs, and competitive landscape.',
                },
                {
                  step: '02',
                  name: 'Architecture & Design',
                  desc: 'System architecture design, interactive prototypes, schema normalization, and security auditing.',
                },
                {
                  step: '03',
                  name: 'Sprint Execution',
                  desc: 'High-velocity development or ad setup with weekly milestone demos and real-time task tracking.',
                },
                {
                  step: '04',
                  name: 'Deployment & Scaling',
                  desc: 'Zero-downtime production deployment, server-side attribution verification, and 24/7 telemetry.',
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative"
                >
                  <span className="text-2xl font-black text-[#EA580C] font-mono">
                    {phase.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0A224E] mt-2 mb-1.5">
                    {phase.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-8 sm:p-12 text-white text-center shadow-xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
                Ready to Deploy {service.title}?
              </h2>
              <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
                Speak directly with Vivek Pawar or our engineering leads. We provide a complimentary 30-minute technical architectural review or digital growth audit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white text-xs font-extrabold shadow-lg transition-transform hover:scale-105"
              >
                <span>Book Your 30-Min Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

