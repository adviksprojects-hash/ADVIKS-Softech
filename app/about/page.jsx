'use client';

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
      name: 'Kaustubh Ronge',
      initials: 'KR',
      avatarBg: 'bg-gradient-to-tr from-[#0A224E] via-[#0062E6] to-[#0088FF]',
      role: 'Chief Executive Officer (CEO)',
      specialty: 'Corporate Strategy • AI Systems • Executive Leadership',
      bio: 'Chief Executive Officer driving ADVIKS Softech’s global vision, executive strategy, and client success. Focuses on orchestrating high-velocity technology execution, enterprise AI product adoption, and cross-border operational excellence.',
      skills: [
        'Executive Leadership',
        'Product Strategy & Vision',
        'AI Applications & Chatbots',
        'React & Next.js Platforms',
        'Cross-Functional Operations',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/kaustubh-ronge-ba2733289/',
      githubUrl: 'https://github.com/kaustubh-ronge',
      portfolioUrl: null,
      badge: 'Executive Leadership',
      badgeColor: 'text-[#0062E6] bg-[#EFF6FF] border-blue-200',
    },
    {
      name: 'Vivek Pawar',
      initials: 'VP',
      avatarBg: 'bg-gradient-to-tr from-[#0A224E] to-[#0062E6]',
      role: 'Chief Technology Officer (CTO)',
      specialty: 'Enterprise Architecture • Java Concurrency • AI Systems',
      bio: 'Chief Technology Officer and Lead Solutions Architect with 500+ algorithmic problem-solving depth. Directs core technical architecture, resilient multi-tenant microservices, and AI integrations engineered for commercial scale.',
      skills: [
        'Next.js 16 & React.js',
        'Java & Spring Boot',
        'Cloud Microservices & DevOps',
        'PostgreSQL & Neon DB',
        'AI / ML Integration Pipelines',
      ],
      linkedinUrl: 'https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all',
      githubUrl: 'https://github.com/vivekpawar3010',
      portfolioUrl: 'https://vivekpawar.vercel.app/',
      badge: 'Architecture & Leadership',
      badgeColor: 'text-[#0062E6] bg-[#EFF6FF] border-blue-200',
    },
    {
      name: 'Dipak Pawar',
      initials: 'DP',
      avatarBg: 'bg-gradient-to-tr from-[#071736] via-[#0A224E] to-[#0088FF]',
      role: 'Chief Technology Officer (CTO)',
      specialty: 'Backend Scalability • High-Concurrency APIs • Cloud Infrastructure',
      bio: 'Chief Technology Officer directing backend infrastructure, high-concurrency data streaming, and production reliability. Specializes in robust API design, containerized cloud deployments, and resilient database performance.',
      skills: [
        'System Design & Scalability',
        'Backend APIs & Microservices',
        'Database Optimization',
        'Cloud DevOps & CI/CD',
        'Production Reliability & Security',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/dipakpawar356/',
      githubUrl: null,
      portfolioUrl: null,
      badge: 'Core Infrastructure',
      badgeColor: 'text-[#0062E6] bg-[#EFF6FF] border-blue-200',
    },
    {
      name: 'Atharv Malavde',
      initials: 'AM',
      avatarBg: 'bg-gradient-to-tr from-[#0A224E] via-indigo-900 to-[#FF8800]',
      role: 'Chief Business Development Officer (CBDO)',
      specialty: 'Strategic Partnerships • Client Acquisition • Enterprise Expansion',
      bio: 'Chief Business Development Officer leading commercial growth, enterprise client acquisition, and high-value strategic partnerships. Bridges client business goals with ADVIKS software delivery pods.',
      skills: [
        'Enterprise Account Management',
        'Client Acquisition & Inbound Sales',
        'Strategic Partnerships',
        'Contract Negotiation',
        'Go-To-Market Strategy',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/atharv-malavde-74a661275/',
      githubUrl: null,
      portfolioUrl: null,
      badge: 'Business Development',
      badgeColor: 'text-[#FF8800] bg-[#FFF7ED] border-orange-200',
    },
    {
      name: 'Dhiraj Gaikwad',
      initials: 'DG',
      avatarBg: 'bg-gradient-to-tr from-[#0A224E] to-[#0088FF]',
      role: 'Chief Financial Officer (CFO)',
      specialty: 'Fiscal Strategy • ERP Architecture • Full-Stack Systems',
      bio: 'Chief Financial Officer overseeing corporate finance, resource allocation, and billing systems engineering. Deep expertise in full-stack architecture, ledger data integrity, and scalable ERP products like VyaparStock.',
      skills: [
        'Financial Modeling & Budgets',
        'Next.js & TypeScript',
        'ERP & Billing Architecture',
        'Resource Optimization',
        'REST & Cloud APIs',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/dhirajgaikwad333/',
      githubUrl: 'https://github.com/GaikwadDhiraj',
      portfolioUrl: null,
      badge: 'Finance & Systems',
      badgeColor: 'text-[#0062E6] bg-[#EFF6FF] border-blue-200',
    },
    {
      name: 'Vijay Patil',
      initials: 'VP',
      avatarBg: 'bg-gradient-to-tr from-[#EA580C] to-[#FF8800]',
      role: 'Chief Marketing Officer (CMO)',
      specialty: 'Brand Positioning • Market Penetration • Digital Acquisition',
      bio: 'Chief Marketing Officer heading brand positioning, multi-channel marketing campaigns, and B2B market expansion. Directs creative and performance teams to maximize client acquisition and brand equity.',
      skills: [
        'Brand Strategy & Positioning',
        'Performance Marketing Campaigns',
        'Inbound Acquisition Funnels',
        'Market Research & Analytics',
        'Multi-Channel Media Buying',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/vijay-patil-706239259/',
      githubUrl: null,
      portfolioUrl: null,
      badge: 'Marketing Leadership',
      badgeColor: 'text-[#EA580C] bg-[#FFF7ED] border-orange-200',
    },
    {
      name: 'Shreya Jagtap',
      initials: 'SJ',
      avatarBg: 'bg-gradient-to-tr from-[#FF8800] via-rose-500 to-[#EA580C]',
      role: 'Chief Marketing Officer (CMO)',
      specialty: 'Performance Marketing • Social Growth • Campaign Execution',
      bio: 'Chief Marketing Officer leading performance ads, organic social expansion, and brand messaging across digital touchpoints. Expert in ROAS optimization, viral social positioning, and conversion rate optimization.',
      skills: [
        'Meta Ads (Advantage+ Shopping)',
        'Google Search Intent & PMax',
        'Conversion Rate Optimization',
        'Social Media Branding',
        'Creative Direction & Copywriting',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/shreya-jagtap-0b5a1326b/',
      githubUrl: null,
      portfolioUrl: null,
      badge: 'Growth & Campaigns',
      badgeColor: 'text-[#EA580C] bg-[#FFF7ED] border-orange-200',
    },
    {
      name: 'Payal Kharat',
      initials: 'PK',
      avatarBg: 'bg-gradient-to-tr from-[#0A224E] via-teal-800 to-teal-600',
      role: 'HR & Project Manager',
      specialty: 'Agile Sprint Management • Talent Operations • Delivery Timelines',
      bio: 'HR & Project Manager coordinating agile sprint cadences, developer resource management, and client milestone delivery. Ensures cross-functional sync across engineering, growth pods, and client stakeholders.',
      skills: [
        'Agile & Scrum Facilitation',
        'Milestone Tracking & SLA Delivery',
        'Team Operations & HR Policy',
        'Stakeholder Communications',
        'Sprint Velocity Optimization',
      ],
      linkedinUrl: 'https://www.linkedin.com/in/shreya-jagtap-0b5a1326b/',
      githubUrl: null,
      portfolioUrl: null,
      badge: 'Operations & HR',
      badgeColor: 'text-teal-700 bg-teal-50 border-teal-200',
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
      desc: 'By leveraging modern frameworks (Next.js 16, TypeScript, PostgreSQL) and data-backed marketing funnels, we launch high-performing assets in record time.',
    },
    {
      icon: Users,
      title: 'True Partnership',
      desc: 'We embed deeply with client founders and executive teams, functioning as a dedicated engineering and growth department rather than a distant vendor.',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      desc: 'Founded as a dedicated engineering pod delivering high-performance full-stack web applications and custom automation for Indian enterprises.',
    },
    {
      year: '2023',
      title: 'VyaparStock In-House SaaS',
      desc: 'Architected and launched VyaparStock — an enterprise multi-branch billing, inventory, and POS platform for Indian merchants.',
    },
    {
      year: '2025',
      title: 'Expansion into Performance Growth',
      desc: 'Integrated digital marketing, conversion rate optimization (CRO), and ROAS ad pipelines directly alongside custom software builds.',
    },
    {
      year: '2026',
      title: 'Full-Service Digital Force',
      desc: 'Now delivering end-to-end SaaS platforms, commercial real-estate web solutions, and high-ROI acquisition engines worldwide.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-blue-200 text-xs font-extrabold text-[#0062E6] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0062E6]" />
              <span>Executive Leadership & Engineering Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A224E] tracking-tight">
              The Minds Behind ADVIKS Softech
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
              We are a team of software architects, product executives, and performance marketing specialists dedicated to building resilient technology and accelerating revenue growth.
            </p>
          </div>

          {/* Team Grid */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A224E]">Core Leadership & Officers</h2>
                <p className="text-xs text-slate-500 mt-1">Directly accessible founders and executive team members.</p>
              </div>
              <span className="text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200">
                8 Team Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Avatar, Name, Title, Badge */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-2xl ${member.avatarBg} text-white font-extrabold text-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-900/10`}
                        >
                          {member.initials}
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-[#0A224E]">
                            {member.name}
                          </h3>
                          <div className="text-xs font-bold text-[#0062E6]">
                            {member.role}
                          </div>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${member.badgeColor}`}>
                        {member.badge}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-medium text-slate-600 mb-4 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-slate-200">
                      {member.specialty}
                    </div>

                    <p className="text-sm text-[#475569] mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Skill Pills */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-2.5">
                        Core Competencies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-[#F8FAFC] text-slate-700 font-semibold border border-slate-200"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#FF8800] shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links / Social Profiles */}
                  <div className="pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-4">
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors bg-[#EFF6FF] px-3 py-1.5 rounded-lg border border-blue-200"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {member.portfolioUrl && (
                      <a
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-orange-700 transition-colors bg-[#FFF7ED] px-3 py-1.5 rounded-lg border border-orange-200"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Portfolio</span>
                      </a>
                    )}
                    {member.githubUrl && (
                      <a
                        href={member.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors bg-[#F8FAFC] px-3 py-1.5 rounded-lg border border-slate-200"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] bg-white shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6]">Our Mission</span>
              <h2 className="mt-2 text-2xl font-extrabold text-[#0A224E]">Bridge Engineering With Revenue Growth</h2>
              <p className="mt-4 text-[#475569] text-sm leading-relaxed">
                To eliminate the divide between software development and customer acquisition. We architect scalable, secure digital platforms and drive high-intent audiences directly through them.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] bg-white shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#EA580C]">Our Vision</span>
              <h2 className="mt-2 text-2xl font-extrabold text-[#0A224E]">The Benchmark for Agency Transparency</h2>
              <p className="mt-4 text-[#475569] text-sm leading-relaxed">
                To transform enterprise consulting by providing real-time operational transparency, clear milestone accountability, and sustainable digital solutions that compound client revenue over time.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-widest text-[#0062E6] uppercase">
                Principles That Guide Us
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0A224E] tracking-tight">
                Our Core Operating Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-blue-200 text-[#0062E6] flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0A224E] mb-2">{val.title}</h3>
                      <p className="text-xs text-[#475569] leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-widest text-[#0062E6] uppercase">
                Our Journey
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0A224E] tracking-tight">
                From Development Pod to Full-Service Agency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-xs"
                >
                  <div className="text-2xl font-extrabold text-[#0062E6] mb-2 font-mono">
                    {m.year}
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A224E] mb-2">{m.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-[#EFF6FF] to-white text-center max-w-4xl mx-auto shadow-xs">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
              Want to Build or Scale With Us?
            </h3>
            <p className="mt-3 text-[#475569] text-sm max-w-md mx-auto">
              Schedule a discovery session with our core engineering and leadership team to plan your roadmap.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:from-[#EA580C] hover:to-[#EA580C] font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
