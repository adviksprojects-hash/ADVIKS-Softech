'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import EmployeeLoginModal from '@/components/EmployeeLoginModal';
import EditProfileModal from '@/components/EditProfileModal';
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
  Edit3,
  UserCheck,
  ShieldCheck,
  LogIn,
  LogOut,
  Mail,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, PlatformIcon } from '@/components/SocialIcons';

export default function AboutPage() {
  const { teamMembers, currentUser, logout } = useEmployeeAuth();

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const values = [
    {
      icon: Target,
      title: 'Obsession With Quality',
      desc: 'We never compromise on software architecture, design aesthetics, or campaign optimization. Every release is hardened for real business operations.',
    },
    {
      icon: Shield,
      title: 'Radical Transparency',
      desc: 'Through our dedicated Client Portal, sprint milestones, and transparent SOW deliverables, clients have 100% visibility into progress.',
    },
    {
      icon: Rocket,
      title: 'Execution Velocity',
      desc: 'By leveraging high-performance cloud architectures and data-backed marketing funnels, we launch high-performing assets in record time.',
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
      title: 'Strategic Growth & AI Expansion',
      desc: 'Integrated full-funnel performance marketing, conversion rate optimization (CRO), automated WhatsApp revenue channels, and custom applied AI engines directly alongside software builds.',
    },
    {
      year: '2026',
      title: 'Global Enterprise Systems Force',
      desc: 'Architecting end-to-end multi-tenant ERP suites, mission-critical SaaS platforms, commercial real-estate web portals, and high-ROI acquisition engines worldwide.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 pt-12 pb-16 md:pt-8 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
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

          {/* Employee / Founder Mode Status Banner */}
          <div className="mb-10 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                {currentUser ? (
                  <>
                    <div className="text-xs font-bold text-[#0A224E] flex items-center gap-2">
                      <span>Logged in as:</span>
                      <span className="text-[#0062E6] font-extrabold">{currentUser.name}</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                        {currentUser.position}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      You can edit your profile directly below, or manage client projects in the Admin Center.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-xs font-bold text-[#0A224E]">
                      Founder & Employee Self-Service Portal
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Log in with your employee passkey to edit your public biography, skills, and links.
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              {currentUser ? (
                <>
                  <Link
                    href="/admin/projects"
                    className="px-3.5 py-2 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold transition-colors shadow-xs"
                  >
                    Go to Admin Portal
                  </Link>
                  <button
                    onClick={logout}
                    className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white text-xs font-extrabold transition-all shadow-md shadow-orange-600/20 flex items-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Employee / Founder Login</span>
                </button>
              )}
            </div>
          </div>

          {/* Team Grid */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0A224E]">Core Leadership & Officers</h2>
                <p className="text-xs text-slate-500 mt-1">Directly accessible founders and executive team members.</p>
              </div>
              <span className="text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-3 py-1 rounded-full border border-blue-200">
                {teamMembers.length} Team Members
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => {
                const isCurrentMember =
                  currentUser &&
                  (currentUser.name.toLowerCase() === member.name.toLowerCase() ||
                    currentUser.isSuperAdmin);

                return (
                  <div
                    key={member.id || member.name}
                    className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#0062E6]/40 transition-all duration-300 hover:-translate-y-1 relative group"
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
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-extrabold text-[#0A224E]">
                                {member.name}
                              </h3>
                              {isCurrentMember && (
                                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                                  You
                                </span>
                              )}
                            </div>
                            <div className="text-xs font-bold text-[#0062E6]">
                              {member.role}
                            </div>
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="text-[11px] text-slate-500 hover:text-[#0062E6] flex items-center gap-1 mt-0.5 transition-colors"
                                title={`Send email to ${member.name}`}
                              >
                                <Mail className="w-3 h-3 text-[#FF8800] shrink-0" />
                                <span className="truncate">{member.email}</span>
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <span
                            className={`text-[11px] font-bold px-3 py-1 rounded-full border ${member.badgeColor || 'text-[#0062E6] bg-[#EFF6FF] border-blue-200'}`}
                          >
                            {member.badge || member.department || 'Leadership'}
                          </span>

                          {/* Quick Edit Profile Pill */}
                          {isCurrentMember && (
                            <button
                              onClick={() => setEditingMember(member)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-[#EA580C] border border-amber-200 text-[11px] font-bold transition-colors shadow-xs"
                              title="Edit your bio, role, and social links"
                            >
                              <Edit3 className="w-3 h-3" />
                              <span>Edit Profile</span>
                            </button>
                          )}
                        </div>
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
                          {(member.skills || []).map((skill, sIdx) => (
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
                    <div className="pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
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
                        {Array.isArray(member.customLinks) && member.customLinks.filter(lnk => lnk && lnk.url).map((lnk, cIdx) => (
                          <a
                            key={cIdx}
                            href={lnk.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors bg-[#F8FAFC] hover:bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-200 shadow-2xs"
                            title={`${member.name} on ${lnk.label}`}
                          >
                            <PlatformIcon platform={lnk.platform || lnk.label} className="w-3.5 h-3.5 text-[#0062E6]" />
                            <span>{lnk.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
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
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-[#0A224E]">Our Operating Principles</h2>
              <p className="text-sm text-[#475569] mt-2">
                How our developer and marketing pods execute with discipline every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#0062E6]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#0062E6] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0A224E] mb-2">{v.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company Milestones */}
          <div className="p-8 sm:p-12 rounded-3xl border border-slate-200 bg-white shadow-xs mb-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0062E6]">Company Trajectory</span>
              <h2 className="text-3xl font-extrabold text-[#0A224E] mt-1">Our Journey So Far</h2>
              <p className="text-xs text-slate-500 mt-1">From boutique code craft to unified engineering & marketing pods.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#0062E6]/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0062E6] border-4 border-white" />
                  <span className="text-xs font-extrabold text-[#EA580C] font-mono">{m.year}</span>
                  <h3 className="text-base font-bold text-[#0A224E] mt-1">{m.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Login Modal */}
      <EmployeeLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={Boolean(editingMember)}
        member={editingMember}
        onClose={() => setEditingMember(null)}
      />
    </div>
  );
}
