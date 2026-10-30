import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Target,
  Users,
  Shield,
  Rocket,
  ArrowRight,
  Sparkles,
  Globe,
  Code2,
  Terminal,
  Cpu,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Vivek Pawar',
      role: 'Co-Founder & Lead Software Architect',
      specialty: 'Full-Stack Architecture • Java • AI Systems',
      bio: 'Computer Science Graduate and Incoming Software Engineer @ TCS Digital. Specializes in building high-concurrency backend services, cloud systems, and AI-driven web architectures.',
      skills: [
        'Next.js & React.js',
        'Java & Spring Boot',
        'AI / ML & LLM Integrations',
        'PostgreSQL & Cloud Infrastructure',
        'System Design & Microservices',
      ],
      githubUrl: 'https://github.com/vivekpawar3010',
      portfolioUrl: 'https://vivekpawar.vercel.app/',
      badge: 'Architecture & Engineering',
    },
    {
      name: 'Dhiraj Gaikwad',
      role: 'Co-Founder & Principal Full-Stack Engineer',
      specialty: 'Next.js • TypeScript • Enterprise ERP/CRM',
      bio: 'Lead developer behind ADVIKS Softech’s core production repositories. Passionate about architecting scalable business web apps, modular ERP systems, and responsive modern user experiences.',
      skills: [
        'TypeScript & JavaScript',
        'Next.js App Router & Tailwind CSS',
        'ERP & Billing System Architecture',
        'REST & Serverless APIs',
        'Vercel & Cloud CI/CD',
      ],
      githubUrl: 'https://github.com/GaikwadDhiraj',
      portfolioUrl: null,
      badge: 'Core Platform Engineering',
    },
    {
      name: 'Kaustubh Ronge',
      role: 'Frontend & AI Applications Engineer',
      specialty: 'React • TypeScript • AI Chatbots & LMS',
      bio: 'Product engineer specializing in interactive user interfaces, AI chatbot builders, and educational/civic technology web applications engineered with precision and speed.',
      skills: [
        'React & Next.js',
        'TypeScript & Frontend UI/UX',
        'AI Chatbot Systems & LMS Platforms',
        'Responsive Mobile-First Design',
        'State Management & Performance',
      ],
      githubUrl: 'https://github.com/kaustubh-ronge',
      portfolioUrl: null,
      badge: 'AI Apps & UI/UX',
    },
    {
      name: 'Growth & Performance Marketing Pod',
      role: 'Digital Acquisition & Brand Strategists',
      specialty: 'Performance Ads • SEO • Instagram Strategy',
      bio: 'Dedicated growth team managing campaigns for client brands and ADVIKS digital presence (@adviks_softech). Focused on measurable return on ad spend (ROAS) and search dominance.',
      skills: [
        'Meta Ads (Facebook & Instagram)',
        'Google Search & Performance Max',
        'Technical & Local SEO',
        'WhatsApp API & CRM Workflows',
        'Content Creation & Brand Identity',
      ],
      githubUrl: 'https://github.com/adviksprojects-hash',
      portfolioUrl: 'https://www.instagram.com/adviks_softech/',
      badge: 'Digital Marketing & Growth',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Obsession With Quality',
      desc: 'We never compromise on software architecture, design aesthetics, or campaign optimization. Every release is hardened for real business operations.',
    },
    {
      icon: Shield,
      title: 'Radical Transparency',
      desc: 'Through our public GitHub repositories and dedicated Client Portal, our clients have 100% visibility into code deliverables and milestones.',
    },
    {
      icon: Rocket,
      title: 'Execution Velocity',
      desc: 'By leveraging modern frameworks (Next.js, TypeScript, PostgreSQL) and data-backed marketing funnels, we launch high-performing assets in record time.',
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      desc: 'We operate as an agile, dedicated extension of your team — translating complex business problems into revenue-generating digital products.',
    },
  ];

  const milestones = [
    { year: '2021', title: 'Founding of ADVIKS', desc: 'Started as a technology development group building custom web platforms and internal business tools.' },
    { year: '2023', title: 'Enterprise & SaaS Product Expansion', desc: 'Engineered flagship solutions including VyaparStock (smart billing/inventory) and commercial hubs like Paras Business Park.' },
    { year: '2025', title: 'Integrated IT & Digital Marketing Practice', desc: 'Expanded into full-funnel digital marketing, social media branding (@adviks_softech), and AI review intelligence.' },
    { year: '2026', title: 'Unified Client & Admin Operations', desc: 'Introduced our automated Client Portal with real-time sprint burndowns, invoice tracking, and SLA support.' },
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
              <span>Meet the Innovators Behind ADVIKS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineering Talent Driving Real Business Results
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              ADVIKS Softech combines seasoned full-stack engineers, AI developers, and digital marketing strategists working in sync to build scalable platforms and accelerate revenue.
            </p>
          </div>

          {/* TEAM MEMBERS SECTION */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                Core Leadership & Technical Specialists
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Core Team & Skills
              </h2>
              <p className="mt-2 text-slate-600 text-sm">
                Each member brings specialized technical depth in modern architectures, algorithms, and growth marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        {member.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 mb-3">
                      {member.role}
                    </div>
                    <div className="text-xs font-mono font-medium text-slate-500 mb-4 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      {member.specialty}
                    </div>

                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skill Pills */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                        Technical Competencies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links / GitHub */}
                  <div className="pt-5 border-t border-slate-100 flex items-center gap-4">
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Profile</span>
                      </a>
                    )}
                    {member.portfolioUrl && (
                      <a
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Portfolio / Social</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to Partner With Our Engineering Team?</h3>
            <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
              Discuss your technical architecture or marketing goals directly with our engineers and experience the ADVIKS standard.
            </p>
            <div className="mt-6 flex justify-center gap-4">
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
