'use client';

import Link from 'next/link';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-12 pb-16 md:pt-8 md:pb-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>404 • Page Not Found</span>
          </div>

          <h1 className="text-6xl font-black text-[#0A224E] tracking-tight">
            404
          </h1>

          <p className="text-base text-[#475569] leading-relaxed">
            The page or route you are looking for does not exist or has been relocated within the ADVIKS enterprise architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0A224E] text-xs font-bold border border-[#E2E8F0] transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse Portfolio</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

