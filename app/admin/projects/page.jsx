'use client';

import { useState } from 'react';
import { FolderKanban, Plus, Clock, CheckCircle2, Calendar, User, Edit3 } from 'lucide-react';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([
    {
      id: 'prj-101',
      title: 'Enterprise ERP & Multi-Tenant Portal',
      client: 'Acme Enterprises',
      status: 'IN_PROGRESS',
      progress: 68,
      budget: '₹8,50,000',
      leadEngineer: 'Vivek Pawar',
      targetDate: 'Nov 25, 2026',
    },
    {
      id: 'prj-102',
      title: 'iOS & Android Field Technician App',
      client: 'Acme Enterprises',
      status: 'IN_PROGRESS',
      progress: 42,
      budget: '₹6,00,000',
      leadEngineer: 'Dhiraj Gaikwad',
      targetDate: 'Dec 15, 2026',
    },
    {
      id: 'prj-103',
      title: 'AI Automated Customer Support Engine',
      client: 'OmniHealth AI',
      status: 'PLANNING',
      progress: 15,
      budget: '₹12,00,000',
      leadEngineer: 'Kaustubh Ronge',
      targetDate: 'Jan 30, 2027',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [newTargetDate, setNewTargetDate] = useState('');

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newTitle || !newClient) return;

    const newProj = {
      id: `prj-${Math.floor(100 + Math.random() * 900)}`,
      title: newTitle,
      client: newClient,
      status: 'PLANNING',
      progress: 0,
      budget: newBudget || '₹5,00,000',
      leadEngineer: 'Unassigned',
      targetDate: newTargetDate || 'TBD',
    };

    setProjects([newProj, ...projects]);
    setShowModal(false);
    setNewTitle('');
    setNewClient('');
    setNewBudget('');
    setNewTargetDate('');
  };

  const updateProgress = (id, delta) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const updated = Math.min(100, Math.max(0, p.progress + delta));
          return {
            ...p,
            progress: updated,
            status: updated === 100 ? 'COMPLETED' : 'IN_PROGRESS',
          };
        }
        return p;
      })
    );
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Project Delivery
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Projects & Sprint Milestones
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Manage active client engagements, assign engineering leads, and update delivery percentages.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-amber-400">{p.id}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      p.status === 'COMPLETED'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : p.status === 'IN_PROGRESS'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Client: {p.client}</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">{p.title}</h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Progress</span>
                  <span className="text-base font-bold text-white font-mono">{p.progress}%</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => updateProgress(p.id, -5)}
                    className="px-2 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-800 rounded"
                  >
                    -5%
                  </button>
                  <button
                    onClick={() => updateProgress(p.id, 5)}
                    className="px-2 py-1 text-xs text-amber-400 hover:bg-slate-800 rounded font-bold"
                  >
                    +5%
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${p.progress}%` }}
              />
            </div>

            {/* Meta Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  Lead: <strong className="text-slate-300">{p.leadEngineer}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Target: <strong className="text-slate-300">{p.targetDate}</strong>
                </span>
              </div>
              <div className="font-mono">
                Contract Budget: <strong className="text-emerald-400">{p.budget}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <h3 className="font-bold text-white text-base">Create New Client Project</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-Gen Supply Chain Platform"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Client / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zenith Logistics"
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Budget
                  </label>
                  <input
                    type="text"
                    placeholder="₹5,00,000"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Target Handover
                  </label>
                  <input
                    type="text"
                    placeholder="Jan 2027"
                    value={newTargetDate}
                    onChange={(e) => setNewTargetDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
