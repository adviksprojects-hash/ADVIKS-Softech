import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
} from 'lucide-react';

export default function HomePage() {
  const itServices = [
    {
      icon: Code2,
      title: 'Full-Stack Web & SaaS Platforms',
      desc: 'Next.js, React, and Node.js web platforms engineered for microsecond response times, bank-grade security, and scale.',
      badge: 'Engineering',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform iOS & Android mobile applications designed for fluid touch interactions and offline support.',
      badge: 'Mobile',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Containerized Kubernetes deployments, automated CI/CD pipelines, and multi-region AWS & GCP infrastructure.',
      badge: 'Cloud',
    },
    {
      icon: Cpu,
      title: 'AI & Workflow Automation',
      desc: 'Custom LLM integrations, predictive ML models, conversational agents, and automated internal data pipelines.',
      badge: 'AI / Automation',
    },
    {
      icon: Layers,
      title: 'Enterprise ERP & Custom CRM',
      desc: 'Tailored enterprise software workflows, multi-tenant database systems, and role-based operational portals.',
      badge: 'Enterprise',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Audits',
      desc: 'Hardened web security, code vulnerability assessments, OWASP compliance, and end-to-end data encryption.',
      badge: 'Security',
    },
  ];

  const marketingServices = [
    {
      icon: Target,
      title: 'Performance Marketing (PPC)',
      desc: 'High-ROI Google Search, Meta Ads, and LinkedIn campaigns engineered with strict CAC and ROAS optimization.',
      badge: 'Paid Growth',
    },
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Technical SEO audits, keyword dominance strategies, and content architectures to capture organic high-intent leads.',
      badge: 'Organic Search',
    },
    {
      icon: Share2,
      title: 'Social Media & Brand Strategy',
      desc: 'Omnichannel visual storytelling, viral social campaigns, and positioning that transforms casual browsers into brand advocates.',
      badge: 'Brand Presence',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'A/B testing, speed optimizations, heatmaps, and frictionless checkout funnels to turn traffic into paying clients.',
      badge: 'Conversion',
    },
    {
      icon: Megaphone,
      title: 'Content Marketing & Lead Engines',
      desc: 'Authority-building articles, downloadable lead magnets, and automated email nurturing sequences.',
      badge: 'Lead Gen',
    },
    {
      icon: BarChart3,
      title: 'Marketing Automation & Analytics',
      desc: 'Unified tracking dashboards, custom UTM attribution, WhatsApp API workflows, and automated CRM sync.',
      badge: 'Analytics',
    },
  ];

  const stats = [
    { label: 'Successful Projects', value: '160+' },
    { label: 'Average Marketing ROAS', value: '4.6x' },
    { label: 'Client Retention Rate', value: '98.8%' },
    { label: 'Tech & Growth Experts', value: '45+' },
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100 bg-gradient-to-b from-slate-50/70 via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-8 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise IT Engineering & High-Growth Digital Marketing</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.12]">
              Engineering Scalable Tech.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Accelerating Market Growth.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              ADVIKS Softech combines modern software engineering, cloud architecture, and AI with data-driven performance marketing and SEO to build, launch, and scale ambitious brands.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02]"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs transition-all"
              >
                <span>Explore All Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLAR 1: IT & SOFTWARE ENGINEERING SERVICES */}
        <section className="py-20 bg-slate-50/50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Pillar 01 • Technology & Engineering</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Next-Gen IT & Cloud Solutions
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
                  Robust, enterprise-grade architectures crafted with clean code, modern cloud infrastructure, and uncompromising reliability.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>View Technical Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PILLAR 2: DIGITAL MARKETING & REVENUE ACCELERATION */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Pillar 02 • Growth & Digital Marketing</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  High-Impact Digital Marketing & Acquisition
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
                  Data-backed campaigns, organic search domination, and conversion funnels engineered to maximize your return on ad spend (ROAS).
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>View Growth Strategies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY ADVIKS: THE INTEGRATED ADVANTAGE */}
        <section className="py-20 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                The ADVIKS Advantage
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Industry Leaders Choose ADVIKS
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base">
                Eliminate the friction of managing separate software vendors and marketing agencies. We connect technical excellence directly with bottom-line revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyAdviksPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-13">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTAL TRANSPARENCY SECTION */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                  Client-First Delivery
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Complete Project & Campaign Visibility in Real Time
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  Enterprise service delivery should never be a mystery. With ADVIKS Softech, clients receive credentials to an interactive dashboard to monitor code deliverables, live campaign metrics, and billing anytime.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      Live sprint burndowns & milestone progress tracking
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      Transparent invoice downloads with direct NEFT/RTGS bank transfer logging
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      Dedicated SLA-backed support ticket desk for rapid assistance
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                  >
                    <span>Launch Client Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-50 border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    About Our Workflow
                  </Link>
                </div>
              </div>

              {/* Mock Dashboard Preview Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-slate-500">client.advikssoftech.com</span>
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                    Active Retainer
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-slate-600 font-medium">Project: Enterprise SaaS & Paid Acquisition</span>
                      <span className="font-semibold text-blue-600">82% Completed</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '82%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block mb-1">Marketing ROAS</span>
                      <span className="text-emerald-700 font-bold text-sm">4.8x (Avg)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block mb-1">Support Status</span>
                      <span className="text-blue-700 font-bold text-sm">0 Pending Tickets</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="text-slate-500 font-medium block mb-2">Upcoming Milestone:</span>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-800 font-medium">Payment Gateway Handover & Google Ads Launch</span>
                      <span className="text-amber-700 font-mono font-semibold text-[11px]">Due in 3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Accelerate Your Tech & Market Reach?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              Schedule a discovery call with our solutions architects and digital growth strategists to receive a customized roadmap within 48 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-semibold bg-white text-blue-600 hover:bg-slate-100 transition-colors shadow-md"
              >
                Schedule Discovery Call
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3.5 rounded-xl font-semibold bg-blue-700/60 border border-blue-400/40 text-white hover:bg-blue-700 transition-colors"
              >
                Explore Client Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
