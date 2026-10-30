import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ADVIKS <span className="text-blue-500">Softech</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering global enterprises with bespoke software engineering, scalable cloud architectures, intelligent AI systems, and end-to-end digital transformation.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              © {new Date().getFullYear()} ADVIKS Softech Pvt. Ltd. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Custom Web Platforms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Cloud & DevOps Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Enterprise ERP & CRM
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  AI & Automation Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Portals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/dashboard" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <span>Client Dashboard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/admin" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                  <span>Admin Operations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Tech Park Hub, Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:contact@advikssoftech.com" className="hover:text-white transition-colors">
                  contact@advikssoftech.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-500 shrink-0" />
                <span>advikssoftech.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
