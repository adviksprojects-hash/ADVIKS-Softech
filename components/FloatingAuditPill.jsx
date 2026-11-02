'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, X } from 'lucide-react';
import FreeAuditModal from '@/components/FreeAuditModal';

export default function FloatingAuditPill() {
  const [modalOpen, setModalOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setMinimized(false)}
          className="p-3 rounded-full bg-[#0A224E] text-white shadow-xl hover:bg-[#0062E6] border border-blue-400/30 transition-all hover:scale-105"
          title="Open Free Audit Request"
          aria-label="Open Free Audit Request"
        >
          <Sparkles className="w-5 h-5 text-[#FF8800]" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 animate-bounce-subtle">
        <div className="flex items-center gap-2 p-1.5 pl-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-blue-950/10 hover:shadow-2xl transition-all">
          {/* Pulsing indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8800] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EA580C]" />
            </span>
            <span className="text-[11px] font-black tracking-tight text-[#0A224E] hidden sm:inline">
              Free Tech & Growth Audit
            </span>
            <span className="text-[11px] font-black tracking-tight text-[#0A224E] sm:hidden">
              Free Audit
            </span>
          </div>

          {/* Trigger Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:opacity-95 text-white text-[11px] font-extrabold shadow-sm transition-all"
          >
            <span>Claim 30-Min Call</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Minimize button */}
          <button
            onClick={() => setMinimized(true)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Minimize"
            aria-label="Minimize Audit Banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <FreeAuditModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

