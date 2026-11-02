'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdviksLogo from '@/components/AdviksLogo';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import EmployeeLoginModal from '@/components/EmployeeLoginModal';
import {
  LayoutDashboard,
  CheckSquare2,
  FolderKanban,
  ReceiptText,
  LifeBuoy,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  Kanban,
  LogIn,
  LogOut,
  User,
  UserCheck,
  Globe,
  IndianRupee,
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { currentUser, logout } = useEmployeeAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navItems = [
    { name: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'CFO Finance & Reimbursements', href: '/admin/finance', icon: IndianRupee },
    { name: 'Sprint Tasks & Velocity', href: '/admin/tasks', icon: CheckSquare2 },
    { name: 'Projects & Milestones', href: '/admin/projects', icon: FolderKanban },
    { name: 'Website Showcase Manager', href: '/admin/showcase', icon: Globe },
    { name: 'My About Page Profile', href: '/admin/profile', icon: UserCheck },
    { name: 'Website Leads CRM', href: '/admin/leads', icon: Kanban },
    { name: 'Invoicing & Bank UTRs', href: '/admin/invoices', icon: ReceiptText },
    { name: 'Ticket Helpdesk Queue', href: '/admin/tickets', icon: LifeBuoy },
  ];

  return (
    <>
      <aside className="w-64 bg-white border-r border-[#E2E8F0] flex flex-col justify-between shrink-0 min-h-screen">
        <div>
          {/* Header */}
          <div className="h-20 border-b border-[#E2E8F0] px-5 flex items-center justify-between">
            <AdviksLogo size="small" showTagline={false} />
          </div>

          {/* User Status / Login Pill */}
          <div className="p-3.5 mx-4 my-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs">
            {currentUser ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#0A224E]">Active Officer</span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-[10px] text-[#475569] hover:text-rose-600 flex items-center gap-1 transition-colors font-medium"
                    title="Logout"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Exit</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#0A224E] truncate">{currentUser.name}</div>
                  <div className="text-[10px] text-[#FF8800] font-semibold truncate flex items-center gap-1">
                    <span>{currentUser.position}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#0062E6]">{currentUser.department}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A224E]">Staff Console</span>
                  <ShieldCheck className="w-4 h-4 text-[#FF8800]" />
                </div>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-[11px] font-extrabold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Employee Login</span>
                </button>
              </div>
            )}
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
                      ? 'bg-[#FFF7ED] text-[#EA580C] border border-orange-200 shadow-2xs'
                      : 'text-[#475569] hover:text-[#0A224E] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF8800]' : 'text-[#475569]'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Navigation Actions */}
        <div className="p-4 border-t border-[#E2E8F0] space-y-1.5 bg-[#F8FAFC]/50">
          <Link
            href="/about"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#475569] hover:text-[#0A224E] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-all"
          >
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Public Team / Bio</span>
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#475569] hover:text-[#0A224E] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-all"
          >
            <span className="flex items-center gap-2">
              <LayoutDashboard className="w-3.5 h-3.5 text-[#0062E6]" />
              <span>Client Portal</span>
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-[#475569] hover:text-[#0A224E] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Website</span>
          </Link>
        </div>
      </aside>

      <EmployeeLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
