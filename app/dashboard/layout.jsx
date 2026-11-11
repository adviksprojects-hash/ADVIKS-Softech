'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientSidebar from '@/components/ClientSidebar';
import NotificationDropdown from '@/components/NotificationDropdown';
import ClientLoginModal from '@/components/ClientLoginModal';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import { Search, Building2, LogIn, LogOut, Lock, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ClientDashboardLayout({ children }) {
  const { currentClient, currentUser, logoutClient } = useEmployeeAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // An active client OR an active admin can view the client portal
  const isAuthorized = Boolean(currentClient || currentUser);

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] text-[#0A224E]">
      {/* Sidebar Navigation */}
      {isAuthorized && <ClientSidebar />}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-20 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-[#0A224E]">Client Workspace</span>
            {isAuthorized ? (
              <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold bg-[#EFF6FF] text-[#0062E6] border border-blue-200 rounded-full">
                {currentClient ? `${currentClient.name} (Verified)` : `${currentUser?.name} (Admin Preview)`}
              </span>
            ) : (
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-rose-50 text-rose-600 border border-rose-200 rounded-full flex items-center gap-1">
                <Lock className="w-3 h-3 text-rose-500" />
                <span>Client Access Required</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {isAuthorized && (
              <>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569]">
                  <Search className="w-3.5 h-3.5 text-[#475569]" />
                  <span>Search milestones, invoices...</span>
                </div>
                <NotificationDropdown target="client" />
              </>
            )}

            {/* Client Profile / Login Pill */}
            {isAuthorized ? (
              <div className="flex items-center gap-2.5 pl-2 border-l border-[#E2E8F0]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0062E6] to-[#0A224E] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                  {(currentClient?.name || currentUser?.name || 'CL').slice(0, 2).toUpperCase()}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-[#0A224E] truncate max-w-[130px]">
                    {currentClient?.name || currentUser?.name}
                  </div>
                  <div className="text-[10px] text-[#0062E6] font-mono truncate max-w-[130px]">
                    {currentClient?.email || currentUser?.email}
                  </div>
                </div>
                <button
                  onClick={logoutClient}
                  className="p-1.5 text-[#475569] hover:text-rose-600 transition-colors cursor-pointer"
                  title="Logout from Client Portal"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Client Sign-In</span>
              </button>
            )}
          </div>
        </header>

        {/* Page Body: STRICT CLIENT AUTHORIZATION GUARD */}
        {isAuthorized ? (
          <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
            {children}
          </main>
        ) : (
          <main className="flex-1 flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-blue-600">
                <Building2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Registered Client Workspace
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  This workspace is restricted to active project clients of ADVIKS Softech. Only registered client email accounts can view deliverables, invoices, and sprint milestones.
                </p>
              </div>

              {/* Login Actions */}
              <div className="space-y-3 pt-2">
                <GoogleSignInButton
                  callbackUrl="/dashboard"
                  label="Sign In with Registered Google"
                  roleHint="client"
                />

                <button
                  type="button"
                  onClick={() => setShowLoginModal(true)}
                  className="w-full py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enter Client Passkey</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Public Site</span>
                </Link>

                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Need an Account? Contact Us →
                </Link>
              </div>
            </div>
          </main>
        )}
      </div>

      <ClientLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
