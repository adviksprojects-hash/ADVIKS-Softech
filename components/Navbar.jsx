'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, User } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              ADVIKS <span className="text-blue-500">Softech</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
              Software • Cloud • AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-colors"
          >
            <User className="w-3.5 h-3.5 text-blue-400" />
            Client Portal
          </Link>

          <Link
            href="/admin"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Admin
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-blue-500/30"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/dashboard"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200"
          >
            Portal
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-slate-900 border border-slate-700 text-slate-200"
            >
              Client Dashboard
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-slate-900/60 border border-slate-800 text-slate-400"
            >
              Admin Dashboard
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
