'use client';

import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';
import { ArrowLeft } from 'lucide-react';

export default function SignUpPage() {
  const hasClerkKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_clerk_publishable_key');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-4 text-slate-100">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to ADVIKS Softech</span>
      </Link>

      {hasClerkKey ? (
        <SignUp />
      ) : (
        <div className="max-w-md w-full p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto text-xl font-bold">
            A
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Client Portal Registration</h2>
            <p className="text-xs text-slate-400 mt-2">
              Sign up is handled via Clerk Auth. Add your Clerk API keys into <code className="text-amber-400">.env.local</code>.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/dashboard"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs text-white transition-colors"
            >
              Continue to Client Portal
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
