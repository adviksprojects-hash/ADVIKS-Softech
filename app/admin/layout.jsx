'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import EmployeeLoginModal from '@/components/EmployeeLoginModal';
import { ShieldCheck, Database, Bell, Search, UserCheck, LogIn } from 'lucide-react';

export default function AdminDashboardLayout({ children }) {
  const { currentUser } = useEmployeeAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const getInitials = (name) => {
    if (!name) return 'SA';
    const parts = name.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Administrative Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-200">Operations Command Center</span>
            <span className="px-2.5 py-0.5 text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>{currentUser?.isSuperAdmin ? 'Super Admin' : 'Staff Access'}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Database className="w-3 h-3" />
              <span>Neon DB: Active</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <Search className="w-3.5 h-3.5" />
              <span>Search clients, leads, invoices, tasks...</span>
            </div>

            {currentUser ? (
              <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 text-white font-extrabold text-xs flex items-center justify-center shadow">
                  {getInitials(currentUser.name)}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-white truncate max-w-[120px]">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-amber-400 font-medium truncate max-w-[120px]">
                    {currentUser.position}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Employee Login</span>
              </button>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      <EmployeeLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
