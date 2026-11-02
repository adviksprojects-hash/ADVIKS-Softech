'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  UserCheck,
  Save,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Globe,
  Briefcase,
  FileText,
  Plus,
  Trash2,
  Shield,
  Layers,
  ArrowRight,
  Eye,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

function ProfileEditorForm({ currentMember }) {
  const { updateMemberProfile } = useEmployeeAuth();

  // Initialized directly from props - no effect needed
  const [role, setRole] = useState(currentMember?.role || '');
  const [department, setDepartment] = useState(currentMember?.department || 'Developer');
  const [specialty, setSpecialty] = useState(currentMember?.specialty || '');
  const [bio, setBio] = useState(currentMember?.bio || '');
  const [skills, setSkills] = useState(
    Array.isArray(currentMember?.skills) ? currentMember.skills : []
  );
  const [newSkillInput, setNewSkillInput] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState(currentMember?.linkedinUrl || '');
  const [portfolioUrl, setPortfolioUrl] = useState(currentMember?.portfolioUrl || '');
  const [githubUrl, setGithubUrl] = useState(currentMember?.githubUrl || '');
  const [badge, setBadge] = useState(currentMember?.badge || 'Leadership');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkillInput.trim()) return;
    if (!skills.includes(newSkillInput.trim())) {
      setSkills([...skills, newSkillInput.trim()]);
    }
    setNewSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updated = {
      role: role.trim(),
      department,
      specialty: specialty.trim(),
      bio: bio.trim(),
      skills,
      linkedinUrl: linkedinUrl.trim(),
      portfolioUrl: portfolioUrl.trim(),
      githubUrl: githubUrl.trim(),
      badge: badge.trim(),
    };

    updateMemberProfile(currentMember.id, updated);
    setSavedSuccess(true);

    setTimeout(() => {
      setSavedSuccess(false);
    }, 3500);
  };

  return (
    <div className="space-y-6">
      {savedSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between gap-3 animate-in fade-in duration-300">
          <div className="flex items-center gap-2.5 font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Profile updated successfully! Live website and /about page updated.</span>
          </div>
          <Link
            href="/about"
            className="px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-xs font-bold transition-colors"
          >
            Check Live View →
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Form (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 p-6 sm:p-7 rounded-3xl border border-slate-800 space-y-5">
          <h2 className="text-base font-extrabold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Edit Information for {currentMember?.name}</span>
          </h2>

          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Official Role / Title *
                </label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Chief Technology Officer (CTO)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Pod / Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Developer">Developer Pod (Engineering)</option>
                  <option value="Marketing">Marketing Pod (Growth & CRO)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Specialty Tagline *
                </label>
                <input
                  type="text"
                  required
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  placeholder="e.g. Enterprise Architecture • AI Systems"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Card Badge Label
                </label>
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  placeholder="e.g. Architecture & Leadership"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Professional Biography *
              </label>
              <textarea
                rows={3}
                required
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Describe your executive responsibilities, technology focus, or growth track record..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500 leading-relaxed"
              />
            </div>

            {/* Core Competencies / Skills Chip Editor */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Core Competencies / Skills ({skills.length} skills listed)
              </label>

              <div className="flex flex-wrap gap-2 mb-2 p-3 rounded-xl bg-slate-950 border border-slate-800 min-h-[50px]">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-slate-400 hover:text-rose-400 transition-colors"
                      title="Remove skill"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newSkillInput}
                  onChange={(e) => setNewSkillInput(e.target.value)}
                  placeholder="Type new skill (e.g. Next.js 16, Neon DB) & press Add..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill(e);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>

            {/* Social & Personal Links */}
            <div className="pt-3 border-t border-slate-800 space-y-3">
              <span className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Personal Web & Social Links
              </span>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile URL</span>
                </label>
                <input
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/username"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-orange-400" />
                  <span>Personal Portfolio / Vercel Domain</span>
                </label>
                <input
                  type="url"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  placeholder="https://yourname.vercel.app/"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>Personal GitHub Profile URL (Optional)</span>
                </label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/yourhandle"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
              <button
                type="submit"
                className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:opacity-95 text-white text-xs font-extrabold shadow-md shadow-orange-600/20 transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile to Live /about Page</span>
              </button>
            </div>
          </form>
        </div>

        {/* Live Card Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-blue-400" />
              <span>Live /about Page Replica Preview</span>
            </span>
            <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full font-bold">
              Updates Live as You Type
            </span>
          </div>

          {/* Exact Replica of /about Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl flex flex-col justify-between text-slate-700">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-13 h-13 rounded-2xl ${
                      currentMember?.avatarBg || 'bg-gradient-to-tr from-[#0A224E] to-[#0062E6]'
                    } text-white font-extrabold text-base flex items-center justify-center shrink-0 shadow-md`}
                  >
                    {currentMember?.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0A224E]">
                      {currentMember?.name}
                    </h3>
                    <div className="text-xs font-bold text-[#0062E6]">{role || 'Position'}</div>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    department === 'Developer'
                      ? 'text-[#0062E6] bg-[#EFF6FF] border-blue-200'
                      : 'text-[#EA580C] bg-[#FFF7ED] border-orange-200'
                  }`}
                >
                  {badge || department}
                </span>
              </div>

              {/* Specialty */}
              <div className="text-[11px] font-mono font-medium text-slate-600 mb-3 bg-[#F8FAFC] px-3 py-1.5 rounded-xl border border-slate-200">
                {specialty || 'Specialty tagline'}
              </div>

              {/* Bio */}
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {bio || 'Professional biography will appear here...'}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-[10px] font-bold text-[#0A224E] uppercase tracking-wider mb-2">
                  Core Competencies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.length > 0 ? (
                    skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] rounded bg-[#F8FAFC] text-slate-700 font-semibold border border-slate-200"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#FF8800] shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))
                  ) : (
                    <span className="text-[11px] text-slate-400 italic">No skills added yet</span>
                  )}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
              {linkedinUrl && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-1 rounded-lg border border-blue-200">
                  <LinkedinIcon className="w-3 h-3" />
                  <span>LinkedIn</span>
                </span>
              )}
              {portfolioUrl && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-lg border border-orange-200">
                  <Globe className="w-3 h-3" />
                  <span>Portfolio</span>
                </span>
              )}
              {githubUrl && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0A224E] bg-[#F8FAFC] px-2.5 py-1 rounded-lg border border-slate-200">
                  <GithubIcon className="w-3 h-3" />
                  <span>GitHub</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminProfileEditPage() {
  const { teamMembers, currentUser } = useEmployeeAuth();

  const defaultMember =
    currentUser && teamMembers.find((m) => m.name.toLowerCase() === currentUser.name.toLowerCase())
      ? teamMembers.find((m) => m.name.toLowerCase() === currentUser.name.toLowerCase())
      : teamMembers[0];

  const [selectedMemberId, setSelectedMemberId] = useState(defaultMember?.id || 'vivek-pawar');

  const currentMember =
    teamMembers.find((m) => m.id === selectedMemberId) || teamMembers[0];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold mb-2">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Public Executive Identity</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            My About Page Profile Editor
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Update your public executive bio, competencies, and personal portfolio links rendered on the /about page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <span>View Public /about Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Member Selector Pill */}
      <div className="bg-slate-900/90 p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Editing Profile For:
            </span>
            <div className="text-base font-extrabold text-white">{currentMember?.name}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs text-slate-400 hidden md:block">Switch Officer:</label>
          <select
            value={selectedMemberId}
            onChange={(e) => setSelectedMemberId(e.target.value)}
            className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-medium focus:outline-none focus:border-blue-500"
          >
            {teamMembers.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} — {m.role.split('(')[0].trim()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Inner Form with key ensuring clean auto-reset when member changes */}
      {currentMember && (
        <ProfileEditorForm key={currentMember.id} currentMember={currentMember} />
      )}
    </div>
  );
}
