'use client';

import AdminSidebar from '@/components/AdminSidebar';
import { ShieldCheck, Database, Bell, Search } from 'lucide-react';

export default function AdminDashboardLayout({ children }) {
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
              Super Admin
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Database className="w-3 h-3" />
              Neon DB: Active
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <Search className="w-3.5 h-3.5" />
              <span>Search clients, leads, invoices...</span>
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 text-white font-bold text-xs flex items-center justify-center">
                SA
              </div>
              <span className="hidden sm:block text-xs font-semibold text-white">Super Admin</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
