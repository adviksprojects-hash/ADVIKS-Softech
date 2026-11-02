'use client';

import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

export default function FreeAuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    fullName: '',
    contact: '',
    auditType: 'Full-Funnel Audit (Tech Speed + ROAS + SEO)',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName || 'Anonymous Founder',
          email: formData.contact.includes('@') ? formData.contact : 'audit-request@adviks.in',
          phone: !formData.contact.includes('@') ? formData.contact : '',
          company: formData.websiteUrl,
          serviceInterest: `Free Audit: ${formData.auditType}`,
          budgetRange: 'Complimentary Audit',
          message: `Requested Free Audit for URL: ${formData.websiteUrl}. Contact: ${formData.contact}. Focus: ${formData.auditType}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Subtle top brand glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0062E6] via-[#FF8800] to-[#EA580C]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-blue-200 text-[11px] font-extrabold text-[#0062E6] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Complimentary 30-Min Diagnostic</span>
            </div>

            <h3 className="text-2xl font-black text-[#0A224E] tracking-tight">
              Get Your Free Tech & Growth Audit
            </h3>
            <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
              Drop your URL below. Our CTO & CMO will benchmark your page speed, Next.js architecture, Meta/Google ad tracking, and conversion funnel leaks within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#0A224E] uppercase tracking-wider mb-1">
                  Website or Product URL *
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourbrand.com or app.yourbrand.com"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0A224E] uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vivek Pawar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0A224E] uppercase tracking-wider mb-1">
                  WhatsApp Number or Work Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 98765 43210 or founder@brand.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#0A224E] uppercase tracking-wider mb-1">
                  Audit Focus Area
                </label>
                <select
                  value={formData.auditType}
                  onChange={(e) => setFormData({ ...formData, auditType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-xs text-slate-800 focus:outline-none focus:border-[#0062E6] focus:bg-white transition-all"
                >
                  <option>Full-Funnel Audit (Tech Speed + ROAS + SEO)</option>
                  <option>Website Speed & Next.js Architecture Audit</option>
                  <option>Meta & Google Ads Pixel / ROAS Audit</option>
                  <option>Local & Organic SEO Keyword Gap Audit</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all hover:scale-[1.01]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send My Free Audit Report</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Confidential. Zero spam. Directly reviewed by executive partners.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-black text-[#0A224E]">
              Audit Request Received!
            </h4>
            <p className="text-xs text-[#475569] mt-2 max-w-sm mx-auto leading-relaxed">
              Our engineering & growth partners are reviewing <strong className="text-[#0A224E]">{formData.websiteUrl}</strong>. We will send the full teardown report to <strong className="text-[#0A224E]">{formData.contact}</strong> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#0A224E] text-white text-xs font-bold hover:bg-[#0062E6] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

