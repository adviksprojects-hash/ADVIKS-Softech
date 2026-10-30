import Link from 'next/link';
import { FolderKanban, CheckCircle2, Clock, AlertCircle, Calendar, ArrowRight, Layers } from 'lucide-react';

export default function ClientProjectsPage() {
  const projects = [
    {
      id: 'prj-101',
      title: 'Enterprise ERP & Multi-Tenant Portal',
      category: 'Custom Web Platform',
      startDate: 'Aug 10, 2026',
      targetDate: 'Nov 25, 2026',
      status: 'IN_PROGRESS',
      progress: 68,
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Neon PostgreSQL', 'Docker'],
      milestones: [
        { name: '1. Discovery & Architecture Blueprint', status: 'COMPLETED', date: 'Aug 24, 2026' },
        { name: '2. UI Design System & Component Library', status: 'COMPLETED', date: 'Sep 15, 2026' },
        { name: '3. Multi-Tenant DB Schema & Core APIs', status: 'IN_PROGRESS', date: 'Oct 30, 2026' },
        { name: '4. Client Role-Based Access & Billing Engine', status: 'PENDING', date: 'Nov 12, 2026' },
        { name: '5. End-to-End QA Testing & Prod Deployment', status: 'PENDING', date: 'Nov 25, 2026' },
      ],
    },
    {
      id: 'prj-102',
      title: 'iOS & Android Field Technician App',
      category: 'Mobile Application',
      startDate: 'Sep 01, 2026',
      targetDate: 'Dec 15, 2026',
      status: 'IN_PROGRESS',
      progress: 42,
      techStack: ['React Native', 'Expo', 'SQLite', 'Node.js', 'AWS S3'],
      milestones: [
        { name: '1. Wireframes & UX User Journey', status: 'COMPLETED', date: 'Sep 14, 2026' },
        { name: '2. Offline Sync Protocol & SQLite Engine', status: 'IN_PROGRESS', date: 'Nov 05, 2026' },
        { name: '3. Bluetooth Barcode Scanner Integration', status: 'PENDING', date: 'Nov 22, 2026' },
        { name: '4. App Store & Play Store Sandbox Testing', status: 'PENDING', date: 'Dec 15, 2026' },
      ],
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Workspaces
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            My Ongoing Projects & Milestones
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Track real-time progress, sprint deliverables, and architectural milestones.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors self-start sm:self-auto"
        >
          <span>Request New Feature / Scope</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-6"
          >
            {/* Project Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 font-semibold">{proj.id}</span>
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                    {proj.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{proj.title}</h2>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs text-slate-400">Overall Progress</div>
                  <div className="text-lg font-bold text-blue-400">{proj.progress}%</div>
                </div>
                <div className="w-32 bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                    style={{ width: `${proj.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Dates and Stack */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Started: <strong className="text-slate-300">{proj.startDate}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                Target Handover: <strong className="text-slate-300">{proj.targetDate}</strong>
              </span>
              <div className="flex items-center gap-1.5 ml-auto">
                <span className="text-slate-500">Stack:</span>
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestones timeline */}
            <div className="pt-4 border-t border-slate-800">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Sprint Milestones Breakdown:
              </h3>
              <div className="space-y-3">
                {proj.milestones.map((ms, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      {ms.status === 'COMPLETED' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : ms.status === 'IN_PROGRESS' ? (
                        <Clock className="w-4 h-4 text-blue-400 shrink-0 animate-pulse" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0" />
                      )}
                      <span className={`font-medium ${ms.status === 'COMPLETED' ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                        {ms.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-slate-500 font-mono text-[11px]">{ms.date}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          ms.status === 'COMPLETED'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : ms.status === 'IN_PROGRESS'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {ms.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
