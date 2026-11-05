'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import AdviksLogo from '@/components/AdviksLogo';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { INITIAL_WEBSITE_SERVICES } from '@/lib/showcaseData';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import {
  Menu,
  X,
  ArrowRight,
  User,
  ChevronDown,
  Code2,
  Smartphone,
  DatabaseZap,
  CloudCog,
  Target,
  Search,
  TrendingUp,
  BrainCircuit,
  Network,
  Share2,
  Megaphone,
  MailCheck,
  ShieldCheck,
  Zap,
  Sparkles,
} from 'lucide-react';

export default function Navbar() {
  const { currentUser, websiteServices } = useEmployeeAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const allServices =
    websiteServices && websiteServices.length > 0
      ? websiteServices.filter((s) => s.showOnWebsite)
      : INITIAL_WEBSITE_SERVICES.filter((s) => s.showOnWebsite);

  const techServices = allServices.filter((s) => s.category === 'Technology & Engineering');
  const growthServices = allServices.filter((s) => s.category === 'Growth & Digital Marketing');

  const navIconMap = {
    Code2,
    Smartphone,
    BrainCircuit,
    CloudCog,
    DatabaseZap,
    Network,
    Target,
    Search,
    TrendingUp,
    Share2,
    Megaphone,
    MailCheck,
  };

  const serviceColumns = [
    {
      title: 'Core Web & Apps',
      subtitle: 'Your Engineering Partner',
      accentColor: 'text-[#0062E6]',
      borderColor: 'border-blue-200',
      bgColor: 'bg-[#EFF6FF]',
      items: techServices.slice(0, 3).map((s) => ({
        name: s.title,
        desc: s.shortDesc || s.tagline,
        icon: navIconMap[s.iconName] || Code2,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: 'Cloud & Systems',
      subtitle: 'Your Infrastructure Partner',
      accentColor: 'text-[#0062E6]',
      borderColor: 'border-blue-200',
      bgColor: 'bg-[#EFF6FF]',
      items: techServices.slice(3, 6).map((s) => ({
        name: s.title,
        desc: s.shortDesc || s.tagline,
        icon: navIconMap[s.iconName] || DatabaseZap,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: 'Acquisition & ROAS',
      subtitle: 'Your Performance Partner',
      accentColor: 'text-[#EA580C]',
      borderColor: 'border-orange-200',
      bgColor: 'bg-[#FFF7ED]',
      items: growthServices.slice(0, 3).map((s) => ({
        name: s.title,
        desc: s.shortDesc || s.tagline,
        icon: navIconMap[s.iconName] || Target,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: 'Inbound & Lifecycle',
      subtitle: 'Your Funnel Partner',
      accentColor: 'text-[#EA580C]',
      borderColor: 'border-orange-200',
      bgColor: 'bg-[#FFF7ED]',
      items: growthServices.slice(3, 6).map((s) => ({
        name: s.title,
        desc: s.shortDesc || s.tagline,
        icon: navIconMap[s.iconName] || Megaphone,
        href: `/services/${s.slug}`,
      })),
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Compact Brand Logo Lockup */}
        <AdviksLogo size="compact" href="/" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Home Link */}
          <Link
            href="/"
            className="text-sm font-bold text-[#475569] hover:text-[#0062E6] transition-colors py-2"
          >
            Home
          </Link>

          {/* Services with 3minds-style Hover Mega-Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 text-sm font-bold transition-colors py-2 ${
                servicesOpen ? 'text-[#0062E6]' : 'text-[#475569] hover:text-[#0062E6]'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#0062E6]' : 'text-slate-400'}`} />
            </Link>

            {/* Mega Dropdown Panel */}
            {servicesOpen && (
              <div
                className="absolute top-full -left-48 w-[920px] max-w-[94vw] bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-7 pt-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* 4-Column Grid */}
                <div className="grid grid-cols-4 gap-5">
                  {serviceColumns.map((col, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      <div className="pb-2 border-b border-slate-100">
                        <div className={`text-xs font-black uppercase tracking-wider ${col.accentColor}`}>
                          {col.title}
                        </div>
                        <div className="text-[10px] text-slate-400 font-semibold truncate">
                          {col.subtitle}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        {col.items.map((item, iIdx) => {
                          const IconComp = item.icon;
                          return (
                            <Link
                              key={iIdx}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="group block p-2 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                            >
                              <div className="flex items-start gap-2.5">
                                <div className={`w-7 h-7 rounded-lg ${col.bgColor} ${col.accentColor} flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}>
                                  <IconComp className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-[#0A224E] group-hover:text-[#0062E6] transition-colors leading-tight">
                                    {item.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar: Consultation Prompt */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between bg-[#F8FAFC] -mx-6 -mb-6 p-4 px-6 rounded-b-3xl">
                  <div className="flex items-center gap-2 text-xs text-[#0A224E] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
                    <span>Need a custom engineering architecture or dedicated full-stack pod?</span>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062E6] hover:text-[#0A224E] transition-colors"
                  >
                    <span>Schedule 30-Min Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Renamed Link: Our Work (Points to /portfolio) */}
          <Link
            href="/portfolio"
            className="text-sm font-bold text-[#475569] hover:text-[#0062E6] transition-colors py-2"
          >
            Our Work
          </Link>

          <Link
            href="/about"
            className="text-sm font-bold text-[#475569] hover:text-[#0062E6] transition-colors py-2"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-sm font-bold text-[#475569] hover:text-[#0062E6] transition-colors py-2"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons & Social Links */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 pr-2 border-r border-[#E2E8F0]">
            <a
              href="https://www.instagram.com/adviks_softech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-[#EA580C] hover:bg-[#FFF7ED] transition-colors"
              title="Instagram @adviks_softech"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-[#0062E6] hover:bg-[#EFF6FF] transition-colors"
              title="LinkedIn @adviks-software-solutions"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {currentUser ? (
            <Link
              href="/admin/projects"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#EFF6FF] border border-blue-200 text-[#0062E6] hover:bg-blue-100 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Admin ({currentUser.name.split(' ')[0]})</span>
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A224E] hover:bg-[#EFF6FF] hover:border-blue-200 transition-colors"
            >
              <User className="w-3 h-3 text-[#0062E6]" />
              <span>Client Portal</span>
            </Link>
          )}

          {/* Growth Amber CTA Button */}
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#EA580C] via-[#FF8800] to-[#FF8800] hover:opacity-95 text-white shadow-sm shadow-orange-500/20 transition-all hover:scale-[1.02]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/dashboard"
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#F8FAFC] text-[#0A224E] border border-[#E2E8F0]"
          >
            Portal
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0A224E] hover:bg-[#EFF6FF]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Home on Mobile */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#0A224E] py-2"
          >
            Home
          </Link>

          {/* Services Accordion on Mobile */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-base font-bold text-[#0A224E] py-2"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pr-1 py-2 space-y-3 bg-[#F8FAFC] rounded-2xl border border-slate-100 my-1">
                {serviceColumns.map((col, cIdx) => (
                  <div key={cIdx} className="space-y-1.5">
                    <div className={`text-[11px] font-black uppercase tracking-wider ${col.accentColor}`}>
                      {col.title}
                    </div>
                    {col.items.map((item, iIdx) => (
                      <Link
                        key={iIdx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-semibold text-slate-600 hover:text-[#0062E6] py-1 pl-2 border-l border-slate-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#0A224E] hover:text-[#0062E6] py-1"
          >
            Our Work
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#0A224E] hover:text-[#0062E6] py-1"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-bold text-[#0A224E] hover:text-[#0062E6] py-1"
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/adviks_softech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-[#EA580C]"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-[#0062E6]"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#FF8800] text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
