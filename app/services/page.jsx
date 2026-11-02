import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectScopeEstimator from '@/components/ProjectScopeEstimator';
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
  Clock,
  Layers,
  HelpCircle,
} from 'lucide-react';

export default function ServicesPage() {
  const itServices = [
    {
      id: 'web-development',
      icon: Code2,
      category: 'Software Engineering',
      title: 'Full-Stack Web & SaaS Engineering',
      tagline: 'Modern, high-velocity web platforms built with Next.js 15, React, Node, and PostgreSQL.',
      capabilities: [
        'Custom SaaS Architectures (Multi-tenant, RBAC)',
        'Next.js SSR/SSG for sub-second performance & SEO',
        'RESTful & GraphQL API design with rate-limiting & caching',
        'Progressive Web Apps (PWA) with offline capabilities',
      ],
      tech: ['Next.js 15', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
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

  const deliverySteps = [
    {
      step: '01',
      title: 'Discovery & Systems Architecture',
      desc: 'We map user flows, database schemas, API contracts, and ad campaign benchmarks before writing a single line of code.',
      badge: 'Sprint 0',
    },
    {
      step: '02',
      title: 'High-Velocity Agile Development',
      desc: 'Weekly milestone demos pushed to live Vercel staging environments so you test real software in real time.',
      badge: 'Bi-Weekly Sprints',
    },
    {
      step: '03',
      title: 'Security Audits & Performance QA',
      desc: 'OWASP vulnerability checks, Core Web Vitals speed tests (< 600ms load), and automated test coverage.',
      badge: 'Lighthouse 100/100',
    },
    {
      step: '04',
      title: 'Deployment & Growth Activation',
      desc: 'Zero-downtime production cutover, Meta CAPI and Google Ads webhook sync, and post-launch SLA monitoring.',
      badge: 'Sustained Scale',
    },
  ];

  const faqs = [
    {
      q: 'Who owns the intellectual property (IP) and code produced?',
      a: 'You own 100% of the code, database schemas, design assets, and marketing collateral. Everything is transferred to your GitHub and cloud accounts upon milestone completion.',
    },
    {
      q: 'How do you bridge the gap between engineering and marketing?',
      a: 'Our developers build landing pages engineered for sub-second speeds, which directly lowers Google Ads CPC and boosts Meta conversion scores. Technical and growth teams communicate in the same sprint room.',
    },
    {
      q: 'What are your standard payment structures and invoicing?',
      a: 'For software builds, we use transparent milestone-based billing (e.g. 25% Wireframe -> 50% API Backend -> 85% Beta -> 100% Go-Live) with direct NEFT/RTGS bank transfer logging and downloadable GST invoices.',
    },
    {
      q: 'Do you offer ongoing post-launch maintenance & support?',
      a: 'Yes. All custom builds include a 30-day post-launch warranty. We also provide ongoing SLA retainer plans for cloud DevOps, feature iterations, and performance marketing optimization.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-6 animate-pulse-subtle">
              <Sparkles className="w-3.5 h-3.5 text-[#0062E6]" />
              <span>Comprehensive IT & Growth Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A224E] tracking-tight leading-tight">
              Integrated Capabilities for Modern Enterprises
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              We provide full-spectrum technological engineering and revenue-focused digital marketing under a unified, accountable team.
            </p>
          </div>

          {/* TRACK 1: IT & CLOUD ENGINEERING (Electric Royal Blue & Midnight Navy) */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] font-extrabold">
                01
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A224E]">
                  IT, Cloud & Software Engineering
                </h2>
                <p className="text-xs text-slate-500 font-medium">
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
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-100 text-[#0062E6] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A224E] bg-slate-100 px-2.5 py-1 rounded-md">
                          {svc.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A224E] mb-2">{svc.title}</h3>
                      <p className="text-sm text-[#475569] mb-6">{svc.tagline}</p>

                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {svc.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#0062E6] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-1.5 mb-6">
                        {svc.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] rounded bg-[#F8FAFC] text-slate-700 font-mono border border-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/contact?service=${svc.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors"
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

          {/* TRACK 2: DIGITAL MARKETING & GROWTH (Growth Amber Orange & Deep Tangerine) */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] border border-orange-200 flex items-center justify-center text-[#EA580C] font-extrabold">
                02
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A224E]">
                  Digital Marketing & Revenue Growth
                </h2>
                <p className="text-xs text-slate-500 font-medium">
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
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-orange-100 text-[#FF8800] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A224E] bg-slate-100 px-2.5 py-1 rounded-md">
                          {svc.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A224E] mb-2">{svc.title}</h3>
                      <p className="text-sm text-[#475569] mb-6">{svc.tagline}</p>

                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {svc.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#FF8800] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-1.5 mb-6">
                        {svc.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] rounded bg-[#F8FAFC] text-slate-700 font-mono border border-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/contact?service=${svc.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#EA580C] hover:text-[#0A224E] transition-colors"
                      >
                        <span>Inquire About Growth</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DEDICATED SERVICES COMPONENT: INTERACTIVE SCOPE ESTIMATOR (Replaces Duplicated Homepage Section) */}
          <div className="mb-24">
            <ProjectScopeEstimator />
          </div>

          {/* 4-STEP AGILE DELIVERY TIMELINE */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6]">
                Execution Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
                Our 4-Step Agile Delivery Process
              </h3>
              <p className="text-sm text-[#475569] mt-2">
                Predictable, transparent sprints engineered to eliminate delivery bottlenecks and scope creep.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {deliverySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-extrabold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-1 rounded-md">
                        STAGE {step.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-slate-500">
                        {step.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-[#0A224E] mb-2">{step.title}</h4>
                    <p className="text-xs text-[#475569] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICE FAQ ACCORDION */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF8800]">
                Common Questions
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E] mt-1">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-2xs"
                >
                  <h4 className="text-base font-extrabold text-[#0A224E] mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0062E6] shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-[#EFF6FF] to-white text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A224E]">
              Need an Integrated Tech & Marketing Partner?
            </h3>
            <p className="mt-3 text-[#475569] text-sm max-w-lg mx-auto">
              We provide dedicated cross-functional pods — senior engineers, UI/UX designers, and growth marketers ready to scale your business.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:from-[#EA580C] hover:to-[#EA580C] font-bold text-white transition-all shadow-md shadow-orange-500/20 hover:scale-105"
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
