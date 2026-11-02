'use client';

import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  FolderKanban,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  ArrowRight,
  Layers,
  CheckSquare,
  Square,
  User,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function ClientProjectsPage() {
  const { projects, currentClient } = useEmployeeAuth();

  // Filter projects for the logged-in client, or show full projects if in demo/admin preview
  const clientProjects = currentClient
    ? projects.filter(
        (p) =>
          (p.clientEmail && p.clientEmail.toLowerCase() === currentClient.email.toLowerCase()) ||
          (p.clientName && p.clientName.toLowerCase().includes(currentClient.name.toLowerCase())) ||
          (currentClient.projectIds && currentClient.projectIds.includes(p.id))
      )
    : projects;

  const displayProjects = clientProjects.length > 0 ? clientProjects : projects.slice(0, 2);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0062E6] border border-blue-200 text-xs font-bold mb-2">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Client SOW Execution Workspaces</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
            {currentClient ? `${currentClient.name} Projects & Milestones` : 'My Ongoing Projects & Milestones'}
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Track real-time progress, dynamic sprint requirements, and architectural milestones for your projects.
          </p>
        </div>

        <Link
          href="/dashboard/tickets"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-xs font-bold text-white transition-all shadow-sm self-start sm:self-auto"
        >
          <span>Ask Query / Request Scope</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-8">
        {displayProjects.map((proj) => {
          const checklist = proj.checklist || [];
          const stages = proj.stages || [];
          const progress = proj.progress || 0;

          return (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] space-y-6 shadow-2xs"
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#0062E6] font-bold bg-[#EFF6FF] px-2 py-0.5 rounded border border-blue-200">
                      {proj.id}
                    </span>
                    <span className="px-2.5 py-0.5 text-[11px] font-bold bg-[#EFF6FF] text-[#0062E6] rounded-md border border-blue-200">
                      {proj.category || 'Custom Software'}
                    </span>
                    <span className="text-xs text-[#475569]">Client: <strong className="text-[#0A224E]">{proj.clientName}</strong></span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0A224E] mt-2">{proj.title}</h2>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xs text-[#475569]">Completion Status</div>
                    <div className="text-xl font-black text-[#0062E6]">{progress}%</div>
                  </div>
                  <div className="w-36 bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-[#E2E8F0]">
                    <div
                      className="bg-gradient-to-r from-[#0062E6] via-indigo-500 to-[#10B981] h-full rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Meta information: Target Delivery, Lead Architect, Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs">
                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">Target Delivery</span>
                  <span className="font-bold text-[#0A224E]">{proj.targetDelivery || 'Q4 2026 Sprint'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">Lead Engineering Architect</span>
                  <span className="font-bold text-[#0062E6]">{proj.assignedTo || 'Vivek Pawar (CTO)'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#475569] uppercase tracking-wider block font-bold">Approved SOW Budget</span>
                  <span className="font-bold text-emerald-700">{proj.budget || 'Confidential SOW'}</span>
                </div>
              </div>

              {/* Requirements & Checklist Items */}
              {checklist.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A224E] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Sprint Deliverable Checkpoints ({checklist.filter((c) => c.done).length}/{checklist.length} Complete)</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {checklist.map((item) => (
                      <div
                        key={item.id}
                        className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs transition-colors ${
                          item.done
                            ? 'bg-emerald-50 border-emerald-200 text-slate-700'
                            : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0A224E]'
                        }`}
                      >
                        {item.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="w-4 h-4 text-[#FF8800] shrink-0 mt-0.5" />
                        )}
                        <span className={item.done ? 'line-through text-slate-400 font-medium' : 'text-[#0A224E] font-medium'}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Delivery Stages History */}
              {stages.length > 0 && (
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A224E] block mb-3">
                    Milestone Architecture Stages
                  </span>
                  <div className="space-y-2">
                    {stages.map((stg) => (
                      <div
                        key={stg.id}
                        className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between gap-4 text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          {stg.status === 'COMPLETED' || stg.status === 'DONE' ? (
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-[#0062E6] animate-pulse" />
                          )}
                          <div>
                            <span className="font-bold text-[#0A224E] block">{stg.name}</span>
                            {stg.notes && (
                              <span className="text-[11px] text-[#475569] block mt-0.5">{stg.notes}</span>
                            )}
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            stg.status === 'COMPLETED' || stg.status === 'DONE'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-blue-50 text-[#0062E6] border-blue-200'
                          }`}
                        >
                          {stg.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
