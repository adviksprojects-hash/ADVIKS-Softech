'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import EmployeeLoginModal from '@/components/EmployeeLoginModal';
import NotificationDropdown from '@/components/NotificationDropdown';
import { ShieldCheck, Database, Search, LogIn } from 'lucide-react';

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
    <div className="min-h-screen flex bg-[#F8FAFC] text-[#0A224E]">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Administrative Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#0A224E]">Operations Command Center</span>
            <span className="px-2.5 py-0.5 text-[11px] font-bold bg-[#FFF7ED] text-[#EA580C] border border-orange-200 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#FF8800]" />
              <span>{currentUser?.isSuperAdmin ? 'Super Admin' : 'Staff Access'}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              <Database className="w-3 h-3 text-emerald-500" />
              <span>Neon DB: Active</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]">
              <Search className="w-3.5 h-3.5 text-[#475569]" />
              <span>Search clients, leads, invoices, tasks...</span>
            </div>

            {/* Interactive Admin Notification Dropdown & Broadcast Center */}
            <NotificationDropdown target="admin" />

            {currentUser ? (
              <div className="flex items-center gap-2.5 pl-2 border-l border-[#E2E8F0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF8800] to-[#EA580C] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                  {getInitials(currentUser.name)}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-[#0A224E] truncate max-w-[120px]">
                    {currentUser.name}
                  </div>
                  <div className="text-[10px] text-[#FF8800] font-medium truncate max-w-[120px]">
                    {currentUser.position}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-bold transition-all shadow-xs"
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
