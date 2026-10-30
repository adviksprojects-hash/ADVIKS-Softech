import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Code,
  Cloud,
  Cpu,
  Layers,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Star,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Engineering',
      desc: 'Scalable Next.js, React, Node.js applications built for microsecond response times and high availability.',
      tag: 'Web Dev',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Architecture',
      desc: 'Automated CI/CD pipelines, container orchestration with Kubernetes/Docker, and multi-region AWS/GCP deployments.',
      tag: 'Cloud',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning Systems',
      desc: 'Bespoke LLM integrations, predictive data models, NLP pipelines, and enterprise automation agents.',
      tag: 'AI/ML',
    },
    {
      icon: Layers,
      title: 'Custom ERP & SaaS Platforms',
      desc: 'Tailored enterprise software workflows, multi-tenant databases, real-time analytics, and role-based access portals.',
      tag: 'Enterprise',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      desc: 'Hardened application security, vulnerability audits, OWASP top 10 compliance, and encrypted data storage.',
      tag: 'Security',
    },
    {
      icon: Zap,
      title: 'Mobile App Development',
      desc: 'Native and cross-platform iOS & Android mobile apps engineered for fluid performance and intuitive UX.',
      tag: 'Mobile',
    },
  ];

  const stats = [
    { label: 'Delivered Projects', value: '120+' },
    { label: 'Client Satisfaction', value: '99.4%' },
    { label: 'Uptime SLA', value: '99.99%' },
    { label: 'Active Engineers', value: '45+' },
  ];

  const highlights = [
    'Direct client dashboard to monitor sprint deliverables and milestones',
    'Transparent manual billing with instant invoice downloads and bank transfer logging',
    'Dedicated ticket helpdesk with SLA tracking for rapid issue resolution',
    'Agile sprint releases with staging preview environments',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 border-b border-slate-900">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Innovating Next-Gen Software & Digital Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
              Architecting Digital Excellence for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                Modern Enterprises
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              ADVIKS Softech engineers enterprise web platforms, scalable cloud infrastructure, and intelligent automation systems — backed by transparent client collaboration.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all hover:border-slate-600"
              >
                <span>Access Client Portal</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-20 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24 bg-slate-950/60 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Our Capabilities
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                High-Performance Solutions Built to Scale
              </p>
              <p className="mt-4 text-slate-400 text-sm sm:text-base">
                From initial architectural design to deployment and lifecycle management, we deliver precision software engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-slate-800 bg-slate-900/40 p-8 hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-800/80 px-2.5 py-1 rounded-md">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLIENT TRANSPARENCY & DASHBOARD SHOWCASE */}
        <section className="py-24 relative overflow-hidden border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
                  Client-First Delivery
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  Total Project Visibility Through Your Dedicated Client Portal
                </h2>
                <p className="mt-4 text-slate-300 text-base leading-relaxed">
                  We believe enterprise development should never be a black box. With ADVIKS Softech, every client receives credentials to an interactive dashboard to monitor deliverables in real time.
                </p>

                <div className="mt-8 space-y-4">
                  {highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Launch User Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    Learn About Our Process
                  </Link>
                </div>
              </div>

              {/* Mock Dashboard Preview Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-slate-400">client.advikssoftech.com</span>
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-semibold bg-emerald-500/20 text-emerald-400 rounded">
                    Active Sprint 4
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-slate-400">Project: Enterprise SaaS Platform</span>
                      <span className="font-semibold text-blue-400">78% Completed</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-500 block mb-1">Latest Invoice</span>
                      <span className="text-emerald-400 font-semibold">₹1,25,000 (Paid)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-500 block mb-1">Support SLA</span>
                      <span className="text-blue-400 font-semibold">0 Open Tickets</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                    <span className="text-slate-400 font-medium block mb-2">Upcoming Milestone:</span>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200">Payment Gateway & Analytics Handover</span>
                      <span className="text-amber-400 font-mono text-[11px]">Due in 4 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-slate-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Software Roadmap?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
              Schedule a technical discovery session with our senior architects and receive a detailed roadmap within 48 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
              >
                Start Discovery Call
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-xl font-semibold bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 transition-colors"
              >
                Explore Technology Stack
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
