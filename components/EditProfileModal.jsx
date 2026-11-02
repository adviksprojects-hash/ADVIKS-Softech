'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  X,
  CheckCircle2,
  Sparkles,
  Save,
  Globe,
  Lock,
  Mail,
  KeyRound,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

function EditProfileForm({ member, onClose }) {
  const { updateMemberProfile } = useEmployeeAuth();

  const [role, setRole] = useState(member.role || '');
  const [specialty, setSpecialty] = useState(member.specialty || '');
  const [bio, setBio] = useState(member.bio || '');
  const [linkedinUrl, setLinkedinUrl] = useState(member.linkedinUrl || '');
  const [githubUrl, setGithubUrl] = useState(member.githubUrl || '');
  const [portfolioUrl, setPortfolioUrl] = useState(member.portfolioUrl || '');
  const [skillsText, setSkillsText] = useState(
    Array.isArray(member.skills) ? member.skills.join(', ') : ''
  );
  const [email, setEmail] = useState(member.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const skillsArray = skillsText
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const updatedFields = {
      role: role.trim(),
      specialty: specialty.trim(),
      bio: bio.trim(),
      linkedinUrl: linkedinUrl.trim(),
      githubUrl: githubUrl.trim(),
      portfolioUrl: portfolioUrl.trim(),
      skills: skillsArray,
      email: email.trim(),
    };

    if (newPassword.trim()) {
      updatedFields.password = newPassword.trim();
    }

    updateMemberProfile(member.id, updatedFields);
    setSavedSuccess(true);

    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
      {savedSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Profile updated successfully! Live website and About page updated.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
            Official Title / Role
          </label>
          <input
            type="text"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Chief Technology Officer (CTO)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6] transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
            Specialty Tagline
          </label>
          <input
            type="text"
            required
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            placeholder="e.g. Enterprise Architecture • AI Systems"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6] transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
          Professional Biography
        </label>
        <textarea
          rows={3}
          required
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Describe your role, responsibilities, and key achievements..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6] transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
          Core Competencies / Skills (Comma-separated)
        </label>
        <input
          type="text"
          value={skillsText}
          onChange={(e) => setSkillsText(e.target.value)}
          placeholder="e.g. Next.js 16, Cloud DevOps, High Concurrency, Neon DB"
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6] transition-all"
        />
        <p className="text-[11px] text-slate-500 mt-1">
          Separate each skill with a comma. They will render as verified badges with orange checkmarks.
        </p>
      </div>

      {/* Social Profiles & Web Links */}
      <div className="pt-2 border-t border-slate-200">
        <span className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-3">
          Personal & Professional Profiles
        </span>

        <div className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1.5">
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn Profile URL</span>
            </label>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://www.linkedin.com/in/username"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-orange-600" />
              <span>Personal Portfolio / Vercel Domain</span>
            </label>
            <input
              type="url"
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
              placeholder="https://yourname.vercel.app/"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-slate-800" />
              <span>Personal GitHub Profile URL (Optional)</span>
            </label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/yourhandle"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
            />
          </div>
        </div>
      </div>

      {/* Account Credentials & Password */}
      <div className="pt-2 border-t border-slate-200">
        <span className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <KeyRound className="w-3.5 h-3.5 text-amber-500" />
          <span>Login Credentials & Account Security</span>
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Member Email *</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. member@adviks.in"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-600" />
              <span>Change Password</span>
            </label>
            <input
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password (optional)"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
            />
          </div>
        </div>
        <p className="text-[10px] text-slate-400 mt-1">
          Active login password: <span className="font-mono text-slate-700 font-bold">{member.password || 'adviks@123'}</span>
        </p>
      </div>

      <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
        <button
          type="button"
          onClick={onClose}
          className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2.5 px-6 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold shadow-md shadow-blue-600/20 transition-all flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Save Profile Changes</span>
        </button>
      </div>
    </form>
  );
}

export default function EditProfileModal({ isOpen, onClose, member }) {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl ${member.avatarBg} text-white font-extrabold text-base flex items-center justify-center shadow`}
            >
              {member.initials}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[11px] font-bold text-amber-300 mb-1">
                <Sparkles className="w-3 h-3 text-[#FF8800]" />
                <span>Editing Official Public Profile</span>
              </div>
              <h2 className="text-xl font-extrabold text-white">
                {member.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Inner Form with key to auto-reset state cleanly */}
        <EditProfileForm key={member.id} member={member} onClose={onClose} />
      </div>
    </div>
  );
}
