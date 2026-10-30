import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Award, Users, Shield, Rocket, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Obsession With Quality',
      desc: 'We never compromise on software architecture, automated testing, or code clarity. Every release is hardened for enterprise standards.',
    },
    {
      icon: Shield,
      title: 'Radical Transparency',
      desc: 'Through our real-time Client Dashboard, clients have continuous visibility into sprint tasks, milestone burn-downs, and transparent manual invoicing.',
    },
    {
      icon: Rocket,
      title: 'Engineering Velocity',
      desc: 'By leveraging modern frameworks (Next.js, Neon Serverless PostgreSQL, microservices), we ship robust features in days rather than months.',
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      desc: 'We do not act as an outsourced vendor; we operate as an elite extension of your internal product and engineering team.',
    },
  ];

  const milestones = [
    { year: '2021', title: 'Founding of ADVIKS Softech', desc: 'Established with a focus on modern web architectures and custom cloud applications.' },
    { year: '2022', title: 'Expansion to Enterprise Solutions', desc: 'Scaled delivery team to handle complex ERP, logistics, and fintech development.' },
    { year: '2024', title: 'Global Client Base & AI Integration', desc: 'Introduced dedicated AI/ML engineering practice and served 80+ international clients.' },
    { year: '2026', title: 'Unified Client & Admin Platform', desc: 'Launched proprietary Client Portal and Operations Dashboard for 100% operational transparency.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Our Story & Culture
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering the Future of Software
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              ADVIKS Softech is a premier software development and consulting firm delivering high-reliability web platforms, mobile solutions, and cloud architectures for forward-thinking enterprises.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 sm:p-10 rounded-2xl border border-slate-800 bg-slate-900/50">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Our Mission</span>
              <h2 className="mt-2 text-2xl font-bold text-white">Empower Clients Through Technical Precision</h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                To bridge complex business objectives with elegant, fault-tolerant software engineering. We turn intricate operational challenges into streamlined digital platforms that scale effortlessly.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl border border-slate-800 bg-slate-900/50">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Our Vision</span>
              <h2 className="mt-2 text-2xl font-bold text-white">The Benchmark for Client Transparency</h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                To lead the software consulting industry by providing real-time operational transparency, clear milestone-based accountability, and sustainable software systems that outlast industry shifts.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-xs font-bold tracking-widest text-blue-400 uppercase">Values We Live By</h3>
              <p className="mt-2 text-3xl font-bold text-white">Built on Principles of Excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-xs font-bold tracking-widest text-blue-400 uppercase">Growth Journey</h3>
              <p className="mt-2 text-2xl font-bold text-white">How We Evolved</p>
            </div>

            <div className="space-y-8 border-l-2 border-slate-800 pl-6 ml-4 sm:ml-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950" />
                  <span className="text-xs font-mono font-bold text-blue-400">{m.year}</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">{m.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/60 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Work With Our Engineering Team</h3>
            <p className="mt-3 text-slate-400 text-sm max-w-md mx-auto">
              Discuss your technical roadmap with our engineers and experience the ADVIKS Softech standard of quality.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
