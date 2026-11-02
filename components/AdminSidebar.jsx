'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdviksLogo from '@/components/AdviksLogo';
import {
  LayoutDashboard,
  Users2,
  FolderKanban,
  ReceiptText,
  LifeBuoy,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  Kanban,
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Website Leads CRM', href: '/admin/leads', icon: Kanban },
    { name: 'Projects & Milestones', href: '/admin/projects', icon: FolderKanban },
    { name: 'Invoicing & Bank UTRs', href: '/admin/invoices', icon: ReceiptText },
    { name: 'Ticket Helpdesk Queue', href: '/admin/tickets', icon: LifeBuoy },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between shrink-0 min-h-screen">
      <div>
        {/* Header */}
        <div className="h-20 border-b border-slate-800 px-5 flex items-center justify-between">
          <AdviksLogo size="small" showTagline={false} />
        </div>

        {/* Admin Badge */}
        <div className="p-3 mx-4 my-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF8800] animate-pulse" />
            <span className="text-xs font-semibold text-amber-300">Operations Control</span>
          </div>
          <ShieldCheck className="w-4 h-4 text-[#FF8800]" />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold shadow-md shadow-orange-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Navigation Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
        >
          <span className="flex items-center gap-2">
            <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
            <span>Client Portal View</span>
          </span>
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Website</span>
        </Link>
      </div>
    </aside>
  );
}
