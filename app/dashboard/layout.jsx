'use client';

import ClientSidebar from '@/components/ClientSidebar';
import { Bell, Search, ShieldCheck } from 'lucide-react';

export default function ClientDashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      {/* Sidebar Navigation */}
      <ClientSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 border-b border-slate-800 bg-slate-950/60 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-300">Client Workspace</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
              Verified Client
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <Search className="w-3.5 h-3.5" />
              <span>Search milestones, invoices...</span>
            </div>

            <button
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500" />
            </button>

            {/* Profile pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                AC
              </div>
              <span className="hidden sm:block text-xs font-semibold text-white">Acme Admin</span>
            </div>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
