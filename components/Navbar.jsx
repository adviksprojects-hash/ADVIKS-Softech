'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              ADVIKS <span className="text-blue-600">Softech</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold">
              IT Services • Digital Marketing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons & Social Links */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200">
            <a
              href="https://github.com/adviksprojects-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/adviks_softech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <User className="w-3.5 h-3.5 text-blue-600" />
            Client Portal
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 transition-all hover:scale-[1.02]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/dashboard"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
          >
            Portal
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Case Studies & Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              About Our Team
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-200 flex items-center gap-4">
            <a
              href="https://github.com/adviksprojects-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/adviks_softech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-rose-600"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-blue-600"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-slate-100 border border-slate-200 text-slate-800"
            >
              Client Dashboard
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold bg-blue-600 text-white shadow-sm"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
