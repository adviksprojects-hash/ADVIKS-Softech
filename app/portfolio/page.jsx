import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductShowcase from '@/components/ProductShowcase';
import { ArrowRight, Sparkles, ExternalLink, CheckCircle2, Laptop } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

export default function PortfolioPage() {
  const gitHubProjects = [
    {
      id: 'paras-business-park',
      title: 'Paras Business Park — Commercial Real Estate Platform',
      category: 'Commercial Web Platform',
      client: 'Paras Business Park',
      liveUrl: 'https://paras-business-park-2.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/paras-business-park-2',
      tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
      summary: 'High-performance digital presentation and leasing platform for a premium commercial corporate hub.',
      deliverables: [
        'Interactive floor plans, office space catalog & virtual specs',
        'Direct tenant leasing inquiry capture with CRM notifications',
        'Sub-second page loads engineered for high-intent corporate investors',
      ],
      impact: '100% digital inquiry pipeline with zero hosting downtime on Vercel infrastructure.',
    },
    {
      id: 'ai-review-system',
      title: 'AI Review System — Intelligent Feedback & Sentiment Engine',
      category: 'AI / ML & Customer Intelligence',
      client: 'AI Review System Lab',
      liveUrl: 'https://ai-review-system-bay.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/AI-Review-System',
      tech: ['TypeScript', 'React', 'Next.js', 'NLP Pipeline', 'Tailwind CSS'],
      summary: 'AI-driven sentiment classification and feedback evaluation platform built to turn customer reviews into actionable insights.',
      deliverables: [
        'Automated sentiment classification (Positive / Neutral / Negative)',
        'Real-time customer feedback categorization & rating trend graphs',
        'Intelligent auto-generated reply recommendations for brand managers',
      ],
      impact: 'Reduces manual review analysis time by 75% with instant customer sentiment scoring.',
    },
    {
      id: 'vyaparstock',
      title: 'VyaparStock — Smart Billing & Inventory Management SaaS',
      category: 'Enterprise SaaS & Fintech',
      client: 'VyaparStock (ADVIKS In-House Product)',
      liveUrl: 'https://www.vyaparstock.in',
      githubUrl: 'https://github.com/adviksprojects-hash',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Cloud API'],
      summary: 'Flagship enterprise cloud billing, GST invoicing, and inventory control platform engineered for modern Indian retailers & wholesalers.',
      deliverables: [
        'Lightning-fast POS billing & digital invoice generation',
        'Real-time stock ledger, low-inventory alerts & barcode lookup',
        'Instant WhatsApp & Email invoice dispatch to customers',
      ],
      impact: 'Empowers merchants to track inventory and reconcile financial statements in seconds.',
    },
    {
      id: 'haruviru-gold-honey',
      title: 'HaruViru Gold Honey — D2C Organic E-Commerce Store',
      category: 'D2C E-Commerce & Growth',
      client: 'HaruViru Natural Foods',
      liveUrl: 'https://haru-viru-gold-honey.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/HaruViru-Gold-Honey',
      tech: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Conversion Funnels'],
      summary: 'Pure honey and natural organic products brand store designed with high-conversion mobile checkouts and SEO optimization.',
      deliverables: [
        'Mobile-first storefront with visual storytelling and product benefits',
        'Conversion-optimized cart & direct checkout pathways',
        'Integrated with digital marketing ad tracking (Meta & Google pixels)',
      ],
      impact: 'Delivers a frictionless, trust-inspiring shopping experience for health-conscious consumers.',
    },
    {
      id: 'aameena-furniture',
      title: 'Aameena Furniture — Premium Interior & Modular Catalog',
      category: 'E-Commerce & Interior Showcase',
      client: 'Aameena Furniture Mart',
      liveUrl: 'https://aameena-ferniture.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/Aameena-Ferniture',
      tech: ['JavaScript', 'Next.js', 'Tailwind CSS', 'WhatsApp Business'],
      summary: 'Digital showroom and custom quotation portal for bespoke home and office furniture collections.',
      deliverables: [
        'Interactive room-by-room furniture galleries (Living, Bedroom, Office)',
        'One-click WhatsApp quotation inquiry for custom sizing',
        'High-resolution image asset optimization with Next.js Image caching',
      ],
      impact: 'Boosts showroom customer footfalls and automated digital quote requests.',
    },
    {
      id: 'hariviru-celebration-house',
      title: 'HaruViru Celebration House — Event Venue & Banquet Booking',
      category: 'Hospitality & Venue Portal',
      client: 'HaruViru Celebrations',
      liveUrl: 'https://haruvirucelebrationhouse.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/Hariviru',
      tech: ['JavaScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
      summary: 'Modern hospitality portal showcasing banquet amenities, event packages, and celebratory bookings.',
      deliverables: [
        'Full amenity tour for weddings, birthdays, and corporate celebrations',
        'Date availability inquiries and custom event package builder',
        'Customer testimonials and photo galleries of past functions',
      ],
      impact: 'Streamlines event discovery and direct customer reservation leads.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6 animate-pulse-subtle">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Verified Repositories & Real Client Deployments</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Products & Case Studies
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Explore our production-deployed software and web platforms built for real-world businesses — all publicly accessible and verified on our GitHub.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://github.com/adviksprojects-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub @adviksprojects-hash</span>
              </a>
              <a
                href="https://www.instagram.com/adviks_softech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold hover:bg-rose-100 transition-colors"
              >
                <span>Instagram @adviks_softech</span>
              </a>
            </div>
          </div>

          {/* Interactive Product Sandbox */}
          <div className="mb-24 p-6 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xs">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Live Interactive Sandbox
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Hands-On Product Laboratory
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Click any product to interact with live feature demos, sentiment simulators, and billing workflows.
              </p>
            </div>

            <ProductShowcase />
          </div>

          {/* Grid of GitHub Projects Deep Dives */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Technical Deliverables Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-10">
              Detailed Case Studies & Architecture Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gitHubProjects.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{item.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Impact Box */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
                    <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
                      Business Outcome:
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{item.impact}</div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-8 text-sm">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Key Highlights:
                    </div>
                    {item.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 mb-6">
                    {item.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links: Live Preview & GitHub Repo */}
                  <div className="flex items-center gap-4">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Need a Similar Web, AI or SaaS Solution?
            </h3>
            <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
              Our engineering team builds custom web platforms and automations tailored to your exact business needs.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white shadow-sm transition-all hover:scale-105"
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
