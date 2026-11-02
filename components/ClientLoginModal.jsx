'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  ShieldCheck,
  Building2,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
  X,
  Sparkles,
  KeyRound,
} from 'lucide-react';

export default function ClientLoginModal({ isOpen, onClose }) {
  const { clients, loginClient } = useEmployeeAuth();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSelectPreset = (c) => {
    setSelectedClient(c.id);
    setIdentifier(c.email);
    setPassword(c.password);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const res = loginClient(identifier, password);
    if (!res.success) {
      setError(res.error);
      return;
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-2xl text-[#0A224E]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-blue-200 mb-2">
            <Building2 className="w-3.5 h-3.5 text-blue-300" />
            <span>ADVIKS Client Portal Sign-In</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Client Workspace Login
          </h3>
          <p className="text-blue-100 text-xs mt-1">
            Access your private sprint deliverables, milestone invoices, and direct helpdesk queue.
          </p>
        </div>

        <div className="p-6 sm:p-7 space-y-5 max-h-[80vh] overflow-y-auto">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Quick Select Client Pills */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-[#0A224E] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Quick Select Registered Client</span>
              </span>
              <span className="text-[10px] text-slate-400">Auto-fills credentials</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {clients.map((c) => {
                const isSelected = selectedClient === c.id || identifier === c.email;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleSelectPreset(c)}
                    className={`p-2.5 rounded-xl border text-left transition-all text-xs flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0062E6] bg-[#EFF6FF] text-[#0A224E] ring-2 ring-blue-500/20'
                        : 'border-[#E2E8F0] bg-[#F8FAFC] hover:bg-slate-100 text-[#0A224E]'
                    }`}
                  >
                    <div className="font-bold text-[#0A224E] truncate">{c.name}</div>
                    <div className="text-[10px] text-[#475569] truncate mt-0.5 font-mono">
                      {c.email}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Client Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    setSelectedClient(null);
                  }}
                  placeholder="e.g. director@parasbusinesspark.com"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                Client Security Passkey *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your confidential passkey"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Passkeys are generated when your project SOW is registered by an ADVIKS founder.
              </p>
            </div>

            <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:bg-[#F8FAFC] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <span>Authorize & Access Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

