import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, Rocket, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Obsession With Quality',
      desc: 'We never compromise on software architecture, design aesthetics, or campaign optimization. Every release is hardened for enterprise standards.',
    },
    {
      icon: Shield,
      title: 'Radical Transparency',
      desc: 'Through our real-time Client Dashboard, clients have continuous visibility into sprint tasks, marketing ROAS, and transparent manual billing.',
    },
    {
      icon: Rocket,
      title: 'Execution Velocity',
      desc: 'By leveraging modern frameworks (Next.js, PostgreSQL) and data-backed marketing funnels, we launch high-performing assets in days rather than months.',
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      desc: 'We do not act as an outsourced vendor; we operate as an elite extension of your internal product, engineering, and marketing teams.',
    },
  ];

  const milestones = [
    { year: '2021', title: 'Founding of ADVIKS Softech', desc: 'Established with a focus on modern web architectures, custom applications, and cloud infrastructure.' },
    { year: '2022', title: 'Expansion to Enterprise Software', desc: 'Scaled delivery team to handle complex ERP, logistics, and fintech development.' },
    { year: '2024', title: 'Full-Funnel Digital Marketing Practice', desc: 'Launched specialized performance marketing, SEO, and brand growth divisions to provide end-to-end client scale.' },
    { year: '2026', title: 'Unified Client & Admin Operations', desc: 'Introduced our proprietary Client Portal for 100% visibility into code deliverables, campaign KPIs, and billing.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Our Story & Mission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Where Technology Meets Market Impact
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              ADVIKS Softech is a full-service IT engineering and digital marketing agency delivering high-reliability software platforms, cloud infrastructure, and data-backed customer acquisition for modern enterprises.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Our Mission</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Bridge Engineering With Revenue Growth</h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                To eliminate the divide between software development and customer acquisition. We architect scalable, secure digital platforms and drive high-intent audiences directly through them.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-slate-50/70">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Our Vision</span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">The Benchmark for Agency Transparency</h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                To transform enterprise consulting by providing real-time operational transparency, clear milestone accountability, and sustainable digital solutions that compound client revenue over time.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase">Values We Live By</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">Built on Principles of Excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-xs font-bold tracking-widest text-blue-600 uppercase">Growth Journey</h3>
              <p className="mt-2 text-2xl font-bold text-slate-900">How We Evolved</p>
            </div>

            <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-4 sm:ml-8">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs" />
                  <span className="text-xs font-mono font-bold text-blue-700">{m.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">{m.title}</h4>
                  <p className="text-sm text-slate-600 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to Partner With ADVIKS?</h3>
            <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
              Discuss your technical architecture or marketing goals with our team and experience the ADVIKS standard.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors shadow-sm"
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
