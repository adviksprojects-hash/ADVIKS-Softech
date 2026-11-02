'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdviksLogo from '@/components/AdviksLogo';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
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
  const { currentClient } = useEmployeeAuth();

  const navItems = [
    { name: 'Dashboard Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Invoices & Bank Info', href: '/dashboard/invoices', icon: Receipt },
    { name: 'Support Helpdesk', href: '/dashboard/tickets', icon: LifeBuoy },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#E2E8F0] flex flex-col justify-between shrink-0 min-h-screen">
      <div>
        {/* Portal Header */}
        <div className="h-20 border-b border-[#E2E8F0] px-5 flex items-center justify-between">
          <AdviksLogo size="small" showTagline={false} />
        </div>

        {/* Client Organization Pill */}
        <div className="p-3.5 mx-4 my-3.5 rounded-2xl bg-[#EFF6FF] border border-blue-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-[#0062E6] shadow-2xs">
            <Building2 className="w-4 h-4 text-[#0062E6]" />
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-[#0A224E] truncate">
              {currentClient ? currentClient.name : 'Acme Enterprises'}
            </div>
            <div className="text-[11px] text-[#475569] truncate">
              {currentClient ? currentClient.email : 'Demo Client Workspace'}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#EFF6FF] text-[#0062E6] border border-blue-200 shadow-2xs'
                    : 'text-[#475569] hover:text-[#0A224E] hover:bg-[#F8FAFC]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0062E6]' : 'text-[#475569]'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Navigation Actions */}
      <div className="p-4 border-t border-[#E2E8F0] space-y-1.5 bg-[#F8FAFC]/50">
        <Link
          href="/admin"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#475569] hover:text-[#0A224E] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-all"
        >
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>Admin View</span>
          </span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-[#475569] hover:text-[#0A224E] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Website</span>
        </Link>
      </div>
    </aside>
  );
}
