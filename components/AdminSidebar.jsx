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
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { currentUser, logout } = useEmployeeAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navItems = [
    { name: 'Executive Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Sprint Tasks & Velocity', href: '/admin/tasks', icon: CheckSquare2 },
    { name: 'Projects & Milestones', href: '/admin/projects', icon: FolderKanban },
    { name: 'My About Page Profile', href: '/admin/profile', icon: UserCheck },
    { name: 'Website Leads CRM', href: '/admin/leads', icon: Kanban },
    { name: 'Invoicing & Bank UTRs', href: '/admin/invoices', icon: ReceiptText },
    { name: 'Ticket Helpdesk Queue', href: '/admin/tickets', icon: LifeBuoy },
  ];

  return (
    <>
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between shrink-0 min-h-screen">
        <div>
          {/* Header */}
          <div className="h-20 border-b border-slate-800 px-5 flex items-center justify-between">
            <AdviksLogo size="small" showTagline={false} />
          </div>

          {/* User Status / Login Pill */}
          <div className="p-3 mx-4 my-3 rounded-xl bg-slate-900 border border-slate-800">
            {currentUser ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-300">Active Officer</span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-[10px] text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Exit</span>
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-800/80">
                  <div className="text-xs font-bold text-white truncate">{currentUser.name}</div>
                  <div className="text-[10px] text-amber-400 font-medium truncate flex items-center gap-1">
                    <span>{currentUser.position}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-blue-400">{currentUser.department}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">Staff Mode</span>
                  <ShieldCheck className="w-4 h-4 text-[#FF8800]" />
                </div>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[11px] font-extrabold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Employee Login</span>
                </button>
              </div>
            )}
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
            href="/about"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>Public Team / Bio Page</span>
            </span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </Link>

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

      <EmployeeLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
