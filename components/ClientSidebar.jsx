'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  LifeBuoy,
  ArrowLeft,
  Building2,
  ExternalLink,
  Shield,
} from 'lucide-react';

export default function ClientSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Invoices & Bank Info', href: '/dashboard/invoices', icon: Receipt },
    { name: 'Support Helpdesk', href: '/dashboard/tickets', icon: LifeBuoy },
  ];

  return (
    <aside className="w-64 bg-slate-900/90 border-r border-slate-800 flex flex-col justify-between shrink-0 min-h-screen">
      <div>
        {/* Portal Header */}
        <div className="h-20 border-b border-slate-800 px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-base">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">ADVIKS Softech</span>
              <span className="text-[10px] text-blue-400 font-medium uppercase tracking-wider">Client Portal</span>
            </div>
          </Link>
        </div>

        {/* Client Organization Pill */}
        <div className="p-4 mx-4 my-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
            <Building2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-white truncate">Acme Enterprises</div>
            <div className="text-[11px] text-slate-400">Client Account</div>
          </div>
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
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
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
          href="/admin"
          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Admin View</span>
          </span>
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Website</span>
        </Link>
      </div>
    </aside>
  );
}
