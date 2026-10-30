import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrowthFunnelMatrix from '@/components/GrowthFunnelMatrix';
import MarketingRoiCalculator from '@/components/MarketingRoiCalculator';
import {
  Code2,
  Smartphone,
  CloudCog,
  BrainCircuit,
  DatabaseZap,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Target,
  Search,
  Share2,
  TrendingUp,
  Megaphone,
  BarChart3,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function ServicesPage() {
  const itServices = [
    {
      id: 'web-development',
      icon: Code2,
      category: 'Software Engineering',
      title: 'Full-Stack Web & SaaS Engineering',
      tagline: 'Modern, high-velocity web platforms built with Next.js, React, Node, and PostgreSQL.',
      capabilities: [
        'Custom SaaS Architectures (Multi-tenant, RBAC)',
        'Next.js SSR/SSG for sub-second performance & SEO',
        'RESTful & GraphQL API design with rate-limiting & caching',
        'Progressive Web Apps (PWA) with offline capabilities',
      ],
      tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      category: 'Mobile Engineering',
      title: 'Native & Cross-Platform Mobile Apps',
      tagline: 'Production-ready iOS and Android applications built for enterprise performance.',
      capabilities: [
        'React Native & Flutter cross-platform development',
        'Offline data synchronization & push notifications',
        'Hardware integrations (Bluetooth, Camera, GPS, Biometrics)',
        'App Store and Google Play publishing & compliance',
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      id: 'cloud-devops',
      icon: CloudCog,
      category: 'Cloud & Infrastructure',
      title: 'Cloud Infrastructure & DevOps',
      tagline: 'Automated, resilient cloud platforms engineered for zero-downtime scalability.',
      capabilities: [
        'AWS, Google Cloud & Azure infrastructure as code (Terraform)',
        'Docker containerization & Kubernetes cluster orchestration',
        'Automated CI/CD pipelines (GitHub Actions, GitLab CI)',
        '24/7 observability, APM monitoring & incident alerts',
      ],
      tech: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus'],
    },
    {
      id: 'ai-ml',
      icon: BrainCircuit,
      category: 'Artificial Intelligence',
      title: 'Artificial Intelligence & Machine Learning',
      tagline: 'Practical AI implementations to automate processes and generate competitive intelligence.',
      capabilities: [
        'Private LLM deployments, fine-tuning & RAG architectures',
        'Predictive machine learning algorithms & classification engines',
        'Intelligent document parsing (OCR) & NLP sentiment models',
        'Automated AI customer support agents with CRM sync',
      ],
      tech: ['Python', 'OpenAI', 'LangChain', 'PyTorch', 'Vector DBs', 'FastAPI'],
    },
    {
      id: 'enterprise-erp',
      icon: DatabaseZap,
      category: 'Enterprise Systems',
      title: 'Custom Enterprise ERP & CRM',
      tagline: 'Replace disjointed spreadsheets with custom centralized business software.',
      capabilities: [
        'Inventory, warehouse & supply chain management hubs',
        'Automated billing, manual bank transfer reconciliation & invoicing',
        'Role-based staff access permissions & approval workflows',
        'Custom third-party integrations (Stripe, Razorpay, QuickBooks, Tally)',
      ],
      tech: ['PostgreSQL', 'Node.js', 'Next.js', 'Prisma', 'Tailwind CSS'],
    },
    {
      id: 'security-compliance',
      icon: ShieldCheck,
      category: 'Security & Compliance',
      title: 'Cybersecurity, Compliance & Audits',
      tagline: 'Bulletproof your digital assets with enterprise threat defense and regulatory compliance.',
      capabilities: [
        'OWASP Top 10 web & API penetration testing audits',
        'SOC2, HIPAA & GDPR compliance architectural roadmaps',
        'Zero-trust network architecture & role segregation',
        'Encrypted database storage & secure secrets management',
      ],
      tech: ['Vault', 'SonarQube', 'Snyk', 'Cloudflare', 'OWASP ZAP'],
    },
  ];

  const marketingServices = [
    {
      id: 'performance-marketing',
      icon: Target,
      category: 'Paid Acquisition',
      title: 'Performance Marketing (Google & Meta Ads)',
      tagline: 'ROI-driven ad campaigns crafted for predictable revenue and customer acquisition.',
      capabilities: [
        'Google Search, Display & Performance Max campaigns',
        'Meta Ads (Facebook & Instagram) full-funnel remarketing',
        'LinkedIn B2B lead generation & account-based marketing (ABM)',
        'Strict ROAS bidding and daily budget optimization',
      ],
      tech: ['Google Ads', 'Meta Business Suite', 'LinkedIn Ads', 'Google Tag Manager', 'GA4'],
    },
    {
      id: 'seo-search',
      icon: Search,
      category: 'Organic Visibility',
      title: 'Search Engine Optimization (SEO)',
      tagline: 'Dominate organic search rankings and turn high-intent searchers into qualified inbound leads.',
      capabilities: [
        'Comprehensive technical SEO audits & core web vitals speed fixes',
        'High-intent commercial keyword clustering & strategy',
        'Authoritative backlink acquisition & digital PR',
        'Local SEO & Google Business Profile optimization',
      ],
      tech: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'SurferSEO'],
    },
    {
      id: 'social-branding',
      icon: Share2,
      category: 'Brand Strategy',
      title: 'Social Media Strategy & Brand Identity',
      tagline: 'Build an iconic, recognizable presence that commands premium pricing.',
      capabilities: [
        'End-to-end visual identity, logo systems & brand guidelines',
        'Monthly social content calendars, reels, infographics & thought leadership',
        'Community management & audience engagement strategy',
        'Influencer partnerships & brand amplification',
      ],
      tech: ['Figma', 'Adobe Creative Cloud', 'Canva Pro', 'Buffer', 'Sprout Social'],
    },
    {
      id: 'cro-funnels',
      icon: TrendingUp,
      category: 'Conversion Optimization',
      title: 'Conversion Rate Optimization (CRO)',
      tagline: 'Double your sales without spending a rupee more on paid traffic.',
      capabilities: [
        'Heatmap analysis, user session recordings & scroll maps',
        'High-converting landing page copywriting & design',
        'A/B split testing on headlines, CTAs, and pricing tables',
        'Frictionless mobile checkout & multi-step forms',
      ],
      tech: ['Hotjar', 'Microsoft Clarity', 'Optimizely', 'VWO', 'Next.js'],
    },
    {
      id: 'content-leadgen',
      icon: Megaphone,
      category: 'Inbound Growth',
      title: 'Content Marketing & Lead Engines',
      tagline: 'Position your company as the undisputed category leader with authority content.',
      capabilities: [
        'Data-backed whitepapers, case study drafting & industry reports',
        'High-converting lead magnet creation (ebooks, calculators, checklists)',
        'Founder personal branding on LinkedIn & Twitter/X',
        'Email newsletter creation and subscriber list nurturing',
      ],
      tech: ['Notion', 'Substack', 'ActiveCampaign', 'Ghost', 'Grammarly'],
    },
    {
      id: 'marketing-automation',
      icon: BarChart3,
      category: 'Lifecycle Marketing',
      title: 'Marketing Automation & CRM Funnels',
      tagline: 'Automate lead follow-ups and never let another prospect slip through the cracks.',
      capabilities: [
        'WhatsApp Business API automated workflows & broadcast messaging',
        'Automated email drip campaigns based on user behavior',
        'Lead scoring, pipeline stage automation & sales handoff',
        'Custom multi-touch revenue attribution modeling',
      ],
      tech: ['HubSpot', 'Make.com', 'Zapier', 'WhatsApp API', 'Klaviyo'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6 animate-pulse-subtle">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Comprehensive IT & Growth Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Integrated Capabilities for Modern Enterprises
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide full-spectrum technological engineering and revenue-focused digital marketing under a unified, accountable team.
            </p>
          </div>

          {/* TRACK 1: IT & CLOUD ENGINEERING */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">
                01
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  IT, Cloud & Software Engineering
                </h2>
                <p className="text-xs text-slate-500">
                  Custom software architectures, mobile apps, and scalable cloud infrastructure.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                          {svc.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                      <p className="text-sm text-slate-600 mb-6">{svc.tagline}</p>

                      <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {svc.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 mb-6">
                        {svc.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] rounded bg-slate-100 text-slate-700 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>Inquire About Engineering</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TRACK 2: DIGITAL MARKETING & GROWTH */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
                02
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Digital Marketing & Revenue Growth
                </h2>
                <p className="text-xs text-slate-500">
                  Data-backed customer acquisition, organic search rankings, and brand scaling.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {marketingServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                          {svc.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                      <p className="text-sm text-slate-600 mb-6">{svc.tagline}</p>

                      <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {svc.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 mb-6">
                        {svc.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] rounded bg-slate-100 text-slate-700 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <span>Inquire About Growth</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Growth Funnel Architecture deep dive */}
            <div className="mb-16">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Growth Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  The 4-Stage Full-Funnel Architecture
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  How our engineering and performance teams systematically acquire, convert, and scale customer pipelines.
                </p>
              </div>
              <GrowthFunnelMatrix />
            </div>

            {/* Interactive Marketing Simulator */}
            <div>
              <MarketingRoiCalculator />
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Need an Integrated Tech & Marketing Partner?
            </h3>
            <p className="mt-3 text-slate-600 text-sm max-w-lg mx-auto">
              We provide dedicated cross-functional pods — senior engineers, UI/UX designers, and growth marketers ready to scale your business.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-white transition-colors shadow-sm hover:scale-105"
              >
                Schedule Free Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
