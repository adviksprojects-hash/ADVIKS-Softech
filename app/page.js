import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroInteractive from '@/components/HeroInteractive';
import ClientTrustStrip from '@/components/ClientTrustStrip';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import CapabilitiesBento from '@/components/CapabilitiesBento';
import OurWorkShowcase from '@/components/OurWorkShowcase';
import MarketingRoiCalculator from '@/components/MarketingRoiCalculator';
import GrowthFunnelMatrix from '@/components/GrowthFunnelMatrix';
import FunnelComparisonToggle from '@/components/FunnelComparisonToggle';
import EngagementModels from '@/components/EngagementModels';
import AgencyComparisonCard from '@/components/AgencyComparisonCard';
import {
  Code2,
  Cloud,
  Cpu,
  Layers,
  Shield,
  Smartphone,
  TrendingUp,
  Search,
  Share2,
  Target,
  BarChart3,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Zap,
  ExternalLink,
  Globe,
  Building2,
  Laptop,
} from 'lucide-react';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ADVIKS Softech',
    image: 'https://adviks-softech.vercel.app/logo.png',
    url: 'https://adviks-softech.vercel.app',
    telephone: '+919370750263',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    description:
      'Enterprise Software Engineering, Custom SaaS & High-ROI Performance Marketing Agency in India. Delivering sub-second Next.js web applications, applied AI sentiment engines, and 4.6x+ ROAS ad funnels.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
    },
    sameAs: [
      'https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all',
      'https://www.instagram.com/adviks_softech/',
    ],
  };

  const itServices = [
    {
      icon: Code2,
      title: 'Full-Stack Web & SaaS Platforms',
      desc: 'Next.js 16, React, and PostgreSQL architectures engineered for sub-second page loads, high concurrency, and seamless enterprise integrations.',
      badge: 'Core Engineering',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Engineering',
      desc: 'Cross-platform iOS and Android applications built with React Native and Expo, featuring offline SQLite syncing and micro-interactions.',
      badge: 'Mobile First',
    },
    {
      icon: Cloud,
      title: 'Cloud DevOps & Infrastructure',
      desc: 'Containerized AWS, Docker, and Neon DB pipelines configured for zero-downtime CI/CD deployments and enterprise security standards.',
      badge: 'Cloud & Scale',
    },
    {
      icon: Cpu,
      title: 'AI Systems & NLP Pipelines',
      desc: 'Intelligent sentiment classification, customer feedback automation, and tailored LLM integrations built for commercial operations.',
      badge: 'Applied AI',
    },
  ];

  const marketingServices = [
    {
      icon: Target,
      title: 'Performance Marketing (PPC & ROAS)',
      desc: 'High-ROI Google Search, Meta Advantage+ Ads, and LinkedIn campaigns engineered with strict CAC and ROAS optimization.',
      badge: '4.6x+ Target ROAS',
    },
    {
      icon: Search,
      title: 'Technical & Organic SEO Dominance',
      desc: 'Technical Core Web Vitals optimization, programmatic SEO, and authoritative backlink strategies to rank #1 on Google intent queries.',
      badge: 'Organic Search',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Frictionless landing page copywriting, interactive checkout journeys, and A/B split-testing that converts passive visitors into buyers.',
      badge: 'Funnel CRO',
    },
    {
      icon: BarChart3,
      title: 'Revenue Analytics & Growth Systems',
      desc: 'Unified tracking dashboards, custom UTM attribution, WhatsApp API workflows, and automated CRM sync.',
      badge: 'Analytics',
    },
  ];

  const stats = [
    { label: 'Deployed Projects', value: '160+' },
    { label: 'Average Client ROAS', value: '4.6x' },
    { label: 'Client Retention Rate', value: '98.8%' },
    { label: 'Engineers & Strategists', value: '45+' },
  ];

  const whyAdviksPoints = [
    {
      title: 'Zero Gap Between Code & Growth',
      desc: 'Most tech agencies don’t understand marketing, and marketing firms can’t build custom software. ADVIKS bridges both under one roof.',
    },
    {
      title: 'Speed-Optimized Digital Funnels',
      desc: 'Our engineers build landing pages that load in milliseconds, directly boosting ad quality scores and lowering your cost per lead.',
    },
    {
      title: 'Dedicated Client Portal',
      desc: 'Monitor sprint tasks, milestone progress, invoices, and support tickets in real-time from your private client dashboard.',
    },
    {
      title: 'Measurable ROI & Transparent Billing',
      desc: 'Transparent milestones, manual bank transfer billing with instant downloadable invoices, and weekly performance reporting.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      {/* Technical SEO: Structured JSON-LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION: Brand Mesh Glow & Dual-Logo Gradient */}
        <section className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20 border-b border-[#E2E8F0] hero-mesh-glow" aria-label="Hero Introduction">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill badge with logo blue & orange accent */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#0A224E] mb-8 shadow-xs animate-pulse-subtle">
              <span className="w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
              <span>Full-Stack Software Engineering, Custom SaaS &amp; Performance Marketing Agency</span>
            </div>

            {/* Main Headline: Two-Tone Logo Gradients */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.08] text-[#0A224E]">
              <span className="text-gradient-engineering">Engineering Scalable Tech.</span>
              <br className="hidden sm:inline" />
              <span className="text-gradient-growth"> Accelerating Market Growth.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
              We build mission-critical enterprise software, high-speed SaaS architectures, and high-converting performance marketing funnels designed to scale revenue.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <span>Book Architecture Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0A224E] font-bold border border-[#E2E8F0] shadow-2xs transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Interactive Hero Terminal in Deep Midnight Navy */}
            <HeroInteractive />

            {/* Stats strip */}
            <div className="mt-16 pt-10 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0A224E] tracking-tight group-hover:text-[#0062E6] group-hover:scale-105 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CLIENT TRUST & LIVE DEPLOYMENTS LOGO STRIP */}
            <ClientTrustStrip />
          </div>
        </section>

        {/* INFINITE MARQUEE TICKER OF TECH & BRANDS */}
        <InfiniteMarquee />

        {/* REPLACED WITH SCANNABLE BENTO CARDS (Benchmark Requirement 2) */}
        <CapabilitiesBento />

        {/* DEDICATED OUR WORK SHOWCASE WITH BROWSER FRAMES & REVIEWS (Benchmark Requirement 3) */}
        <OurWorkShowcase />

        {/* PILLAR 1: IT & SOFTWARE ENGINEERING SERVICES (Electric Blue & Midnight Navy) */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]" aria-labelledby="pillar1-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] border border-blue-200 text-[11px] font-extrabold text-[#0062E6] uppercase tracking-wider mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Pillar 01 • Technology &amp; Engineering</span>
                </div>
                <h2 id="pillar1-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0A224E] tracking-tight">
                  Next-Gen IT, Cloud &amp; AI Solutions
                </h2>
                <p className="mt-3 text-[#475569] text-sm sm:text-base max-w-2xl">
                  Enterprise-grade architectures crafted with clean code, scalable microservices, and AI-driven automation.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {itServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-200 text-[#0062E6] flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#0062E6] border border-blue-200">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A224E]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PILLAR 2: DIGITAL MARKETING & REVENUE GROWTH (Warm Amber & Tangerine) */}
        <section className="py-20 bg-white border-b border-[#E2E8F0]" aria-labelledby="pillar2-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF7ED] border border-orange-200 text-[11px] font-extrabold text-[#EA580C] uppercase tracking-wider mb-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Pillar 02 • Growth &amp; Digital Marketing</span>
                </div>
                <h2 id="pillar2-heading" className="text-3xl sm:text-4xl font-extrabold text-[#0A224E] tracking-tight">
                  Data-Driven Revenue Acceleration
                </h2>
                <p className="mt-3 text-[#475569] text-sm sm:text-base max-w-2xl">
                  Targeted ad campaigns, conversion rate optimization, and SEO funnels that turn searchers into long-term enterprise clients.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#EA580C] hover:text-[#0A224E] transition-colors"
              >
                <span>Explore Marketing Stack</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {marketingServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl border border-orange-200/60 bg-white shadow-xs hover:shadow-xl hover:border-[#EA580C]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-orange-200 text-[#EA580C] flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A224E]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4-Stage Full Funnel Growth Architecture */}
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-[#0062E6] uppercase tracking-widest">
                  Our Acquisition Methodology
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
                  The 4-Stage Full-Funnel Growth Framework
                </h3>
                <p className="text-sm text-[#475569] mt-2">
                  See how we systematically eliminate ad leakage and transform anonymous clicks into recurring revenue.
                </p>
              </div>
              <GrowthFunnelMatrix />
            </div>

            {/* Interactive ROAS & Growth Simulator in Warm Amber */}
            <div className="mb-8">
              <MarketingRoiCalculator />
            </div>

            {/* INTERACTIVE BEFORE VS AFTER FUNNEL TOGGLE */}
            <FunnelComparisonToggle />
          </div>
        </section>

        {/* TRANSPARENT ENGAGEMENT MODELS & PRICING TIERS */}
        <EngagementModels />

        {/* WHY ADVIKS: THE INTEGRATED ADVANTAGE & MULTI-VENDOR COMPARISON */}
        <section className="py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]" aria-labelledby="why-adviks-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-[#0062E6] uppercase">
                The ADVIKS Advantage
              </span>
              <h2 id="why-adviks-heading" className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0A224E] tracking-tight">
                Why Industry Leaders Choose ADVIKS
              </h2>
              <p className="mt-4 text-[#475569] text-sm sm:text-base">
                Eliminate the friction of managing separate software vendors and marketing agencies. We connect technical excellence directly with bottom-line revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {whyAdviksPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs space-y-4 hover:shadow-md hover:border-slate-300 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A224E]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed pl-13">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* DIRECT OBJECTION KILLER: Single Hybrid Partner vs Disjointed Vendors (Benchmarked from Matrix Bricks) */}
            <AgencyComparisonCard />
          </div>
        </section>

        {/* CLIENT PORTAL TRANSPARENCY SECTION */}
        <section className="py-20 bg-white border-b border-[#E2E8F0]" aria-labelledby="portal-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#0062E6] uppercase">
                  Client-First Delivery
                </span>
                <h2 id="portal-heading" className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0A224E] tracking-tight">
                  Transparent Progress Tracking With Our Dedicated Client Portal
                </h2>
                <p className="mt-4 text-[#475569] text-sm sm:text-base leading-relaxed">
                  No hidden work, no ghosting, no ambiguous invoices. Every client receives private dashboard credentials to monitor real-time sprint velocity, verify milestone deliverables, and access official downloadable GST invoices with NEFT/RTGS bank transfer tracking.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#0A224E] font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#0062E6]" />
                    <span>Real-time sprint progress &amp; commit handoffs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#0A224E] font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#0062E6]" />
                    <span>Manual bank transfer details &amp; UTR payment reconciliation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#0A224E] font-bold">
                    <CheckCircle2 className="w-5 h-5 text-[#0062E6]" />
                    <span>Direct priority ticketing SLA queue with lead engineers</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A224E] hover:bg-[#0062E6] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Preview Client Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Portal Visual Mockup in Clean Light Border */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-md space-y-5">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-500 ml-2">
                      portal.advikssoftech.com
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                    Live Client Sync
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-[#0A224E]">VyaparStock ERP Sprint 3</span>
                    <span className="text-[#0062E6]">68% Completed</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0062E6] h-full rounded-full w-[68%]" />
                  </div>
                  <div className="text-[11px] text-slate-500 flex justify-between pt-1">
                    <span>Lead: Vivek Pawar</span>
                    <span>Target: Nov 25, 2026</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-[#0A224E]">Pending Milestone Invoice #089</span>
                    <span className="text-[#EA580C] font-mono">₹1,50,000</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Official HDFC Bank NEFT / RTGS Transfer Details attached with verified beneficiary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA: Light Gradient with Tangerine Accent */}
        <section className="py-20 bg-gradient-to-r from-[#EFF6FF] via-white to-[#FFF7ED] border-b border-[#E2E8F0]" aria-label="Call to Action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0A224E] tracking-tight max-w-3xl mx-auto">
              Ready to Build Scalable Software or Accelerate Customer Acquisition?
            </h2>
            <p className="mt-4 text-[#475569] text-base max-w-2xl mx-auto leading-relaxed">
              Partner with an agency that combines deep technical engineering depth with proven performance marketing power.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white font-bold shadow-md shadow-orange-500/20 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#0A224E] font-bold border border-[#E2E8F0] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
