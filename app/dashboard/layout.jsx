'use client';

import { useState } from 'react';
import ClientSidebar from '@/components/ClientSidebar';
import NotificationDropdown from '@/components/NotificationDropdown';
import ClientLoginModal from '@/components/ClientLoginModal';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { Search, Building2, LogIn, LogOut } from 'lucide-react';

export default function ClientDashboardLayout({ children }) {
  const { currentClient, logoutClient } = useEmployeeAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] text-[#0A224E]">
      {/* Sidebar Navigation */}
      <ClientSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#0A224E]">Client Workspace</span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[11px] font-bold bg-[#EFF6FF] text-[#0062E6] border border-blue-200 rounded-full">
              {currentClient ? `${currentClient.name} (Active)` : 'Demo Client Mode'}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]">
              <Search className="w-3.5 h-3.5 text-[#475569]" />
              <span>Search milestones, invoices...</span>
            </div>

            {/* Interactive Client Notification Bell */}
            <NotificationDropdown target="client" />

            {/* Client Profile / Login Pill */}
            {currentClient ? (
              <div className="flex items-center gap-2.5 pl-2 border-l border-[#E2E8F0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0062E6] to-[#0A224E] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                  {currentClient.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-[#0A224E] truncate max-w-[130px]">
                    {currentClient.name}
                  </div>
                  <div className="text-[10px] text-[#0062E6] font-mono truncate max-w-[130px]">
                    {currentClient.email}
                  </div>
                </div>
                <button
                  onClick={logoutClient}
                  className="p-1.5 text-[#475569] hover:text-rose-600 transition-colors"
                  title="Logout from Client Portal"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Client Login</span>
              </button>
            )}
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      <ClientLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
