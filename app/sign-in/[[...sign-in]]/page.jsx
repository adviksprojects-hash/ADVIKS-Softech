'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import AdviksLogo from '@/components/AdviksLogo';
import { ArrowLeft, ShieldCheck, Building2, Sparkles, AlertCircle, ShieldAlert, Lock } from 'lucide-react';

function SignInContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-4 text-slate-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to ADVIKS Softech</span>
      </Link>

      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-900 space-y-6">
        {/* Brand */}
        <div className="text-center space-y-2">
          <div className="inline-flex justify-center mb-1">
            <AdviksLogo className="h-10" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Restricted Single Sign-On
          </h1>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Authorize with your verified corporate or client email to access your workspace.
          </p>
        </div>

        {/* Security Error Alerts */}
        {error === 'AccessDenied' && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-rose-700">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Access Denied: Unauthorized Account</span>
            </div>
            <p className="text-[11px] text-rose-600 leading-relaxed">
              Your Google email is not on the authorized list for ADVIKS portals. Only pre-authorized executives, engineers, and registered clients with an active SOW can enter.
            </p>
          </div>
        )}

        {error === 'AdminAccessRequired' && (
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-800">
              <Lock className="w-4 h-4 shrink-0" />
              <span>Administrator Clearance Required</span>
            </div>
            <p className="text-[11px] text-amber-700 leading-relaxed">
              You must sign in with an authorized ADVIKS officer email or corporate account to access the Operations Hub.
            </p>
          </div>
        )}

        {error === 'ClientAccessRequired' && (
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-blue-800">
              <Building2 className="w-4 h-4 shrink-0" />
              <span>Registered Client Sign-In Required</span>
            </div>
            <p className="text-[11px] text-blue-700 leading-relaxed">
              Please sign in with the email address registered on your project agreement to access your client dashboard.
            </p>
          </div>
        )}

        {/* Google Sign In Options */}
        <div className="space-y-4 pt-1">
          <div>
            <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Client Portal Access</span>
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Clients Only</span>
            </div>
            <GoogleSignInButton
              callbackUrl="/dashboard"
              label="Sign in with Client Google Account"
              roleHint="client"
            />
          </div>

          <div className="pt-2">
            <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>Executive & Admin Access</span>
              </span>
              <span className="text-[10px] text-amber-600 font-normal font-mono">@advikssoftech.com</span>
            </div>
            <GoogleSignInButton
              callbackUrl="/admin"
              label="Sign in with Officer Google Account"
              roleHint="admin"
              className="border-slate-300 bg-slate-50 hover:bg-slate-100"
            />
          </div>
        </div>

        {/* Security Rule Notice */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 space-y-1">
          <div className="font-bold text-slate-700 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Multi-Tenant Security Enforcement</span>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed">
            All logins are cryptographically checked against verified role registries in Neon PostgreSQL. Unapproved emails are rejected automatically.
          </p>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            ← Home
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Request Client Access →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-xs">
          Loading ADVIKS Authentication Gateway...
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
}
