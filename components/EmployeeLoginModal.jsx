'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import {
  ShieldCheck,
  UserCheck,
  X,
  Sparkles,
  Lock,
  ArrowRight,
  AlertCircle,
  Mail,
  Eye,
  EyeOff,
} from 'lucide-react';

export default function EmployeeLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const { teamMembers, login } = useEmployeeAuth();

  const [selectedPreset, setSelectedPreset] = useState(null);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('adviks@123');
  const [showPassword, setShowPassword] = useState(false);
  const [department, setDepartment] = useState('Developer');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSelectPreset = (member) => {
    setSelectedPreset(member.id);
    setIdentifier(member.email || member.name);
    setPosition(member.role);
    setDepartment(member.department || 'Developer');
    setPassword(member.password || 'adviks@123');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const res = login(identifier, password, department, { position });
    if (!res.success) {
      setError(res.error);
      return;
    }

    if (onLoginSuccess) {
      onLoginSuccess(res.user);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold text-amber-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>ADVIKS Internal Access Gate</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            Founder, Executive & Employee Login
          </h2>
          <p className="text-blue-100 text-xs mt-1">
            Sign in with your official Google account or select your officer profile below.
          </p>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Google Sign In Option */}
          <div className="mb-5">
            <GoogleSignInButton
              callbackUrl="/admin"
              label="Sign in with Google (Admin / Team)"
              roleHint="admin"
            />
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="w-full border-t border-slate-200" />
            <span className="absolute bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Or use internal passkey
            </span>
          </div>

          {/* Quick 1-Click Founder Select */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Quick Select Founder / Officer ({teamMembers.length})</span>
              </span>
              <span className="text-[11px] text-slate-400">1-click autofill</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {teamMembers.map((m) => {
                const isSelected = selectedPreset === m.id || identifier === m.email || identifier === m.name;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => handleSelectPreset(m)}
                    className={`p-2.5 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0062E6] bg-[#EFF6FF] ring-2 ring-[#0062E6]/20'
                        : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-[#0A224E] truncate">{m.name}</div>
                    <div className="text-[10px] text-slate-500 truncate mt-0.5">
                      {m.role.split('(')[0].trim()}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Manual Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Official Email Address or Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    setSelectedPreset(null);
                  }}
                  placeholder="e.g. vivekpawar932564@gmail.com"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Department *
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all font-medium"
                >
                  <option value="Executive">Executive / Founder</option>
                  <option value="Developer">Engineering & Dev</option>
                  <option value="Marketing">Growth & Marketing</option>
                  <option value="Finance">Finance & CFO</option>
                  <option value="Operations">Operations & HR</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Internal Passkey *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter security key"
                    className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2.5 px-6 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <span>Authorize & Enter Admin Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
