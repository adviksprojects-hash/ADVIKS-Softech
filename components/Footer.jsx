import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

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
              Empowering global businesses with bespoke software engineering, scalable cloud architectures, intelligent AI systems, and high-ROI digital marketing growth.
            </p>
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
                  Web & SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Mobile Apps (iOS/Android)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Cloud & DevOps Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Performance Marketing (PPC)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  SEO & Organic Search
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Brand Strategy & CRO
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals & Pages */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              Portals & Pages
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/dashboard" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <span>Client Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/admin" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <span>Admin Operations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                  Case Studies & Results
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Tech Park Hub, Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:contact@advikssoftech.com" className="hover:text-blue-600 transition-colors font-medium">
                  contact@advikssoftech.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                <span>advikssoftech.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
