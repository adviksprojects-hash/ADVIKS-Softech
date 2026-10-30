import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const caseStudies = [
    {
      title: 'Cloud-Native Logistics & Fleet Dispatch Platform',
      client: 'Apex Global Freight',
      category: 'Enterprise SaaS',
      impact: 'Reduced dispatch latency by 45% and scaled to 100,000+ real-time tracking pings per minute.',
      challenge: 'Legacy monolith with 12-second query times unable to handle holiday season GPS ingestion.',
      solution: 'Designed microservices architecture using Next.js App Router, Go event stream consumers, and Neon serverless PostgreSQL connection pooling.',
      tags: ['Next.js', 'PostgreSQL', 'Go', 'Docker', 'AWS'],
    },
    {
      title: 'Real-Time Financial Analytics & Invoicing Engine',
      client: 'Vanguard Capital Partners',
      category: 'Fintech & Analytics',
      impact: 'Automated 12,000+ monthly invoice reconciliations with 99.98% accounting accuracy.',
      challenge: 'Manual offline bank reconciliations causing delayed payroll and 3-week payment verification cycles.',
      solution: 'Engineered automated manual-bank transfer reconciliation portal with UTR lookup, audit logging, and role-based client views.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    },
    {
      title: 'Telemedicine Consultation & EHR Hub',
      client: 'CarePlus Health Systems',
      category: 'Healthcare & HIPAA',
      impact: 'Servicing over 250,000 patient tele-consultations across 4 states with zero HIPAA non-compliance alerts.',
      challenge: 'Fragmented video software, insecure chat channels, and unencrypted file attachments.',
      solution: 'End-to-end encrypted WebRTC audio/video consultations, HIPAA-compliant patient document vault, and automated doctor scheduling.',
      tags: ['Next.js', 'WebRTC', 'HIPAA AWS', 'PostgreSQL', 'Tailwind'],
    },
    {
      title: 'AI Automated Customer Support & Ticketing Engine',
      client: 'OmniRetail E-Commerce',
      category: 'AI & Machine Learning',
      impact: 'Resolved 65% of customer inquiries autonomously, dropping average support ticket resolution time from 8 hours to 4 minutes.',
      challenge: 'Support agents swamped with order status queries and return authorizations.',
      solution: 'Custom LLM agent fine-tuned with company documentation, integrated into client helpdesk ticketing system with human agent fallback.',
      tags: ['Python', 'OpenAI', 'Next.js', 'Vector DB', 'PostgreSQL'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Proven Track Record
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies & Work
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Explore how ADVIKS Softech engineers resilient digital systems that solve core business bottlenecks.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {cs.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                      {cs.title}
                    </h2>
                    <span className="text-xs text-slate-400">Client: {cs.client}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-lg bg-slate-800 text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-2">
                      The Challenge
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-2">
                      The Solution
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
                      Key Business Impact
                    </span>
                    <p className="text-sm text-emerald-200 font-medium leading-relaxed">{cs.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white">Have a project with similar complexity?</h3>
            <p className="mt-2 text-slate-400 text-sm">Let’s discuss your technical specifications in an exploratory consultation.</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-colors"
              >
                <span>Request Case Study Deck</span>
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
