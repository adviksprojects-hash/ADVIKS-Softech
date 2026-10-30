import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PortfolioPage() {
  const caseStudies = [
    {
      title: 'Cloud-Native Logistics & Fleet Dispatch Platform',
      client: 'Apex Global Freight',
      category: 'Enterprise SaaS & Cloud',
      impact: 'Reduced dispatch latency by 45% and scaled to 100,000+ real-time tracking pings per minute.',
      challenge: 'Legacy monolith with 12-second query times unable to handle holiday season GPS ingestion.',
      solution: 'Designed microservices architecture using Next.js App Router, Go event stream consumers, and Neon serverless PostgreSQL connection pooling.',
      tags: ['Next.js', 'PostgreSQL', 'Go', 'Docker', 'AWS'],
    },
    {
      title: 'D2C Brand Omnichannel Scaling & Paid Acquisition',
      client: 'Aura Living',
      category: 'Performance Marketing & CRO',
      impact: 'Scaled monthly revenue from ₹12L to ₹85L at a consistent 5.2x ROAS across Meta & Google Ads.',
      challenge: 'Stagnant customer acquisition costs (CAC) and high mobile cart abandonment rates on Shopify.',
      solution: 'Re-engineered headless Next.js landing funnels with sub-second page loads, dynamic creative testing, and automated WhatsApp cart recovery.',
      tags: ['Meta Ads', 'Google Ads', 'CRO', 'Next.js', 'WhatsApp API'],
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
      title: 'B2B SaaS Organic SEO & Inbound Lead Engine',
      client: 'CloudMetrics Corp',
      category: 'SEO & Content Marketing',
      impact: 'Grew organic traffic from 3,500 to 110,000+ monthly visits, generating 420+ qualified inbound leads/month.',
      challenge: 'High reliance on expensive LinkedIn ads with rising customer acquisition costs and zero organic presence.',
      solution: 'Conducted exhaustive technical SEO fixes, implemented programmatic landing pages, and authored high-intent comparison content.',
      tags: ['Technical SEO', 'Content Strategy', 'Google Search Console', 'Ahrefs'],
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Proven Business Outcomes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Case Studies: Tech Innovation & Market Growth
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Explore how ADVIKS Softech partners with businesses to engineer resilient software architectures and execute high-growth marketing strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{item.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
                    {item.title}
                  </h3>

                  {/* Impact Highlight Box */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
                    <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      Business Impact:
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{item.impact}</div>
                  </div>

                  <div className="space-y-4 mb-8 text-sm">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        The Challenge:
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.challenge}</p>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                        The ADVIKS Solution:
                      </div>
                      <p className="text-slate-700 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Discuss a Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
              Whether you need to architect an enterprise platform or launch high-ROAS marketing campaigns, we are ready to help.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white shadow-sm transition-all"
              >
                Schedule Project Discovery
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
