import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ADVIKS <span className="text-blue-600">Softech</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Empowering global and Indian businesses with bespoke software development, real estate & SaaS platforms, AI integrations, and high-ROI digital marketing growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/adviksprojects-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 flex items-center justify-center transition-colors shadow-2xs"
                title="GitHub @adviksprojects-hash"
                aria-label="GitHub @adviksprojects-hash"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/adviks_softech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-rose-600 hover:border-rose-300 hover:bg-rose-50 flex items-center justify-center transition-colors shadow-2xs"
                title="Instagram @adviks_softech"
                aria-label="Instagram @adviks_softech"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center transition-colors shadow-2xs"
                title="LinkedIn @adviks-software-solutions"
                aria-label="LinkedIn @adviks-software-solutions"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              © {new Date().getFullYear()} ADVIKS Softech Pvt. Ltd. All rights reserved.
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Web & SaaS Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  AI Review & NLP Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Performance Marketing (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  SEO & Search Dominance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Social Media & Brand Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Platforms & Products */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              Our Products & Work
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a
                  href="https://vyaparstock.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>VyaparStock (Billing SaaS)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://paras-business-park-2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Paras Business Park</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://ai-review-system-bay.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>AI Review System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://aameena-ferniture.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Aameena Furniture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://haru-viru-gold-honey.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>HaruViru Gold Honey</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="/portfolio" className="text-blue-600 font-semibold hover:underline">
                  View All 7+ GitHub Projects →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Tech Park Hub, Bengaluru & Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:advikssoftech@gmail.com" className="hover:text-blue-600 transition-colors font-semibold text-slate-900">
                  advikssoftech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-rose-600 shrink-0" />
                <a
                  href="https://www.instagram.com/adviks_softech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-600 transition-colors font-medium text-slate-700"
                >
                  @adviks_softech
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors font-medium text-slate-700"
                >
                  Adviks Software Solutions
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <GithubIcon className="w-4 h-4 text-slate-800 shrink-0" />
                <a
                  href="https://github.com/adviksprojects-hash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors font-medium text-slate-700"
                >
                  github.com/adviksprojects-hash
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
