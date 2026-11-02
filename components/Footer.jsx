import Link from 'next/link';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import AdviksLogo from '@/components/AdviksLogo';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <AdviksLogo href="/" />
            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              Empowering ambitious Indian and global brands with scalable custom software architectures, AI sentiment pipelines, and high-ROI digital performance marketing.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/adviks_softech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-[#EA580C] hover:border-orange-300 hover:bg-[#FFF7ED] flex items-center justify-center transition-colors shadow-2xs"
                title="Instagram @adviks_softech"
                aria-label="Instagram @adviks_softech"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-[#0062E6] hover:border-blue-300 hover:bg-[#EFF6FF] flex items-center justify-center transition-colors shadow-2xs"
                title="LinkedIn @adviks-software-solutions"
                aria-label="LinkedIn @adviks-software-solutions"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-[#64748B]">
              © {new Date().getFullYear()} ADVIKS Softech Pvt. Ltd. All rights reserved.
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-[#0A224E] tracking-wider uppercase mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/services" className="hover:text-[#0062E6] transition-colors">
                  Web & SaaS Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0062E6] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#0062E6] transition-colors">
                  AI Review & NLP Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#EA580C] transition-colors">
                  Performance Marketing (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#EA580C] transition-colors">
                  SEO & Search Dominance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#EA580C] transition-colors">
                  Social Media & Brand Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Platforms & Products */}
          <div>
            <h4 className="text-xs font-bold text-[#0A224E] tracking-wider uppercase mb-4">
              Our Products & Work
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a
                  href="https://vyaparstock.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#0062E6] transition-colors"
                >
                  <span>VyaparStock (Billing SaaS)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0062E6]" />
                </a>
              </li>
              <li>
                <a
                  href="https://paras-business-park-2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#0062E6] transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0062E6] transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0062E6] transition-colors"
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
                  className="flex items-center gap-1 hover:text-[#0062E6] transition-colors"
                >
                  <span>HaruViru Gold Honey</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#0062E6] font-bold hover:underline">
                  View All 6+ GitHub Projects →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-[#0A224E] tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0062E6] shrink-0 mt-0.5" />
                <span>Tech Park Hub, Bengaluru & Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0062E6] shrink-0" />
                <a href="mailto:advikssoftech@gmail.com" className="hover:text-[#0062E6] transition-colors font-bold text-[#0A224E]">
                  advikssoftech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href="https://www.instagram.com/adviks_softech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EA580C] transition-colors font-semibold text-[#475569]"
                >
                  @adviks_softech
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#0062E6] shrink-0" />
                <a
                  href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0062E6] transition-colors font-semibold text-[#475569]"
                >
                  Adviks Software Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
