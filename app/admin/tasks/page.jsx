'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import EmployeeLoginModal from '@/components/EmployeeLoginModal';
import {
  CheckSquare2,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp,
  User,
  Calendar,
  Sparkles,
  Layers,
  Code2,
  Megaphone,
  UserCheck,
  ChevronRight,
  Flame,
  ArrowRight,
  X,
} from 'lucide-react';

export default function AdminTasksPage() {
  const { tasks, addTask, updateTaskStatus, projects, teamMembers, currentUser } =
    useEmployeeAuth();

  const [scopeFilter, setScopeFilter] = useState('ALL'); // 'ALL' or 'MY'
  const [deptFilter, setDeptFilter] = useState('ALL'); // 'ALL', 'Developer', 'Marketing'
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL', 'DONE', 'IN_PROGRESS', 'TODO'
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // New task form fields
  const [title, setTitle] = useState('');
  const [selectedProject, setSelectedProject] = useState(
    projects[0]?.title || 'VyaparStock Multi-Warehouse Billing SaaS'
  );
  const [department, setDepartment] = useState('Developer');
  const [assignedTo, setAssignedTo] = useState(currentUser?.name || 'Vivek Pawar');
  const [priority, setPriority] = useState('HIGH');
  const [dueDate, setDueDate] = useState('');
  const [initialStatus, setInitialStatus] = useState('IN_PROGRESS');

  // Work Calculation Metrics
  const devTasks = tasks.filter((t) => t.department === 'Developer');
  const devDone = devTasks.filter((t) => t.status === 'DONE').length;
  const devWorkingOn = devTasks.filter((t) => t.status === 'IN_PROGRESS' || t.status === 'TODO').length;
  const devTotal = devTasks.length;
  const devCompletionRate = devTotal > 0 ? Math.round((devDone / devTotal) * 100) : 0;

  const mktTasks = tasks.filter((t) => t.department === 'Marketing');
  const mktDone = mktTasks.filter((t) => t.status === 'DONE').length;
  const mktWorkingOn = mktTasks.filter((t) => t.status === 'IN_PROGRESS' || t.status === 'TODO').length;
  const mktTotal = mktTasks.length;
  const mktCompletionRate = mktTotal > 0 ? Math.round((mktDone / mktTotal) * 100) : 0;

  // Filtered task items
  const filteredTasks = tasks.filter((task) => {
    // Scope filter (All vs My Tasks)
    if (scopeFilter === 'MY') {
      if (!currentUser) return false;
      const isMyTask =
        task.assignedTo &&
        task.assignedTo.toLowerCase().trim() === currentUser.name.toLowerCase().trim();
      if (!isMyTask) return false;
    }

    // Department filter
    if (deptFilter !== 'ALL' && task.department !== deptFilter) return false;

    // Status filter
    if (statusFilter !== 'ALL' && task.status !== statusFilter) return false;

    // Priority filter
    if (priorityFilter !== 'ALL' && task.priority !== priorityFilter) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = task.title?.toLowerCase().includes(q);
      const matchProj = task.project?.toLowerCase().includes(q);
      const matchAssigned = task.assignedTo?.toLowerCase().includes(q);
      return matchTitle || matchProj || matchAssigned;
    }

    return true;
  });

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!title) return;

    addTask({
      title,
      project: selectedProject,
      department,
      assignedTo,
      priority,
      status: initialStatus,
      dueDate: dueDate || 'Nov 15, 2026',
    });

    setTitle('');
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold mb-2">
            <CheckSquare2 className="w-3.5 h-3.5" />
            <span>Sprint Execution & Pod Velocity</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Sprint Tasks & Team Velocity
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time calculation of work done vs working on across Developer and Marketing teams.
          </p>
        </div>

        <button
          onClick={() => {
            if (currentUser) {
              setAssignedTo(currentUser.name);
              setDepartment(currentUser.department || 'Developer');
            }
            setShowAddModal(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:opacity-95 text-white text-xs font-extrabold transition-all shadow-md shadow-orange-600/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Sprint Task</span>
        </button>
      </div>

      {/* TEAM WORKLOAD & VELOCITY CALCULATOR CARDS (Developer vs Marketing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Developer Pod Workload Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-blue-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Developer Team Pod</h3>
                <span className="text-[11px] text-slate-400">Architecture, APIs & Full-Stack Systems</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
              {devTotal} Total Tasks
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Sprint Completion Velocity</span>
              <span className="font-mono font-extrabold text-blue-400">{devCompletionRate}% Done</span>
            </div>
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${devCompletionRate}%` }}
              />
            </div>
          </div>

          {/* Work Done vs Working On Metric Counters */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/20">
              <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Work Done</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">{devDone} Tasks</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Shipped to production</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-500/20">
              <div className="text-[11px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Working On</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">{devWorkingOn} Tasks</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Active sprint execution</div>
            </div>
          </div>
        </div>

        {/* Marketing Pod Workload Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-orange-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-[#FF8800]">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Marketing Team Pod</h3>
                <span className="text-[11px] text-slate-400">Meta/Google PPC, Local SEO & CRO</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20">
              {mktTotal} Total Tasks
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Campaign Milestone Velocity</span>
              <span className="font-mono font-extrabold text-orange-400">{mktCompletionRate}% Done</span>
            </div>
            <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 transition-all duration-500"
                style={{ width: `${mktCompletionRate}%` }}
              />
            </div>
          </div>

          {/* Work Done vs Working On Metric Counters */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/20">
              <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Work Done</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">{mktDone} Tasks</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Campaigns launched & live</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-orange-500/20">
              <div className="text-[11px] text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Working On</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">{mktWorkingOn} Tasks</div>
              <div className="text-[10px] text-slate-400 mt-0.5">A/B tests & funnel builds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Scope Switcher: All Tasks vs My Tasks */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScopeFilter('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              scopeFilter === 'ALL'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CheckSquare2 className="w-4 h-4" />
            <span>All Tasks Across Teams</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {tasks.length}
            </span>
          </button>

          <button
            onClick={() => {
              if (!currentUser) {
                setShowLoginModal(true);
              } else {
                setScopeFilter('MY');
              }
            }}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              scopeFilter === 'MY'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>My Tasks {currentUser ? `(${currentUser.name.split(' ')[0]})` : ''}</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {currentUser
                ? tasks.filter((t) => t.assignedTo?.toLowerCase() === currentUser.name.toLowerCase()).length
                : '0'}
            </span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sprint task..."
              className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 w-44 sm:w-56"
            />
          </div>

          {/* Department Filter */}
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none"
          >
            <option value="ALL">All Teams</option>
            <option value="Developer">Developer Team</option>
            <option value="Marketing">Marketing Team</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none"
          >
            <option value="ALL">All Status</option>
            <option value="IN_PROGRESS">Working On (In Progress)</option>
            <option value="DONE">Work Done (Completed)</option>
            <option value="TODO">Backlog (Todo)</option>
          </select>
        </div>
      </div>

      {/* Prompt if "My Tasks" is selected without being logged in */}
      {scopeFilter === 'MY' && !currentUser && (
        <div className="p-8 rounded-2xl bg-slate-900 border border-amber-500/30 text-center max-w-xl mx-auto space-y-3">
          <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-base font-bold text-white">Employee Login Required for &quot;My Tasks&quot;</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Please log in with your name and access PIN (e.g. ADVIKS2026) to view and manage tasks assigned specifically to you.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md"
          >
            Log In to View My Tasks
          </button>
        </div>
      )}

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <CheckSquare2 className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-400">No sprint tasks found for this filter.</p>
            <p className="text-xs text-slate-500 mt-1">
              Click &quot;+ Add Sprint Task&quot; above to create a new engineering or marketing deliverable.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => {
            const isDev = task.department === 'Developer';
            const isDone = task.status === 'DONE';
            const isInProgress = task.status === 'IN_PROGRESS';
            const isMyTask =
              currentUser &&
              task.assignedTo &&
              task.assignedTo.toLowerCase() === currentUser.name.toLowerCase();

            return (
              <div
                key={task.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isDone
                    ? 'bg-slate-950/60 border-slate-800/80 opacity-80'
                    : isMyTask
                    ? 'bg-slate-900 border-amber-500/40 ring-1 ring-amber-500/20 shadow-md'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isDev
                          ? 'text-blue-400 bg-blue-500/10 border-blue-500/30'
                          : 'text-orange-400 bg-orange-500/10 border-orange-500/30'
                      }`}
                    >
                      {isDev ? 'Developer' : 'Marketing'}
                    </span>

                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        task.priority === 'URGENT'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                          : task.priority === 'HIGH'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {task.priority || 'NORMAL'}
                    </span>

                    <span className="text-[11px] text-slate-400 font-mono truncate max-w-xs">
                      {task.project}
                    </span>
                  </div>

                  <h4
                    className={`text-sm sm:text-base font-bold leading-snug ${
                      isDone ? 'line-through text-slate-400' : 'text-white'
                    }`}
                  >
                    {task.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-slate-300 font-semibold">{task.assignedTo}</span>
                      {isMyTask && (
                        <span className="text-[10px] text-amber-300 bg-amber-500/20 px-1.5 py-0.2 rounded font-bold">
                          You
                        </span>
                      )}
                    </span>

                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>Due: {task.dueDate || 'TBD'}</span>
                    </span>
                  </div>
                </div>

                {/* Status Switcher Action Buttons */}
                <div className="flex items-center gap-1.5 sm:shrink-0 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => updateTaskStatus(task.id, 'TODO')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      task.status === 'TODO'
                        ? 'bg-slate-800 text-slate-200'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Todo
                  </button>
                  <button
                    onClick={() => updateTaskStatus(task.id, 'IN_PROGRESS')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isInProgress
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Working On
                  </button>
                  <button
                    onClick={() => updateTaskStatus(task.id, 'DONE')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      isDone
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-500 hover:text-emerald-400'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Done</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-amber-300 mb-2">
                <Plus className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Sprint Task Orchestration</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">Create New Sprint Task</h2>
              <p className="text-xs text-blue-100 mt-1">
                Assign actionable engineering or growth tasks to team officers with deadlines.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateTask} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Implement Vercel server-side edge caching for invoice PDF downloads"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Associated Project / SOW
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                >
                  {projects.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.department})
                    </option>
                  ))}
                  <option value="Internal Operations">Internal Operations & Core Infra</option>
                  <option value="Client Acquisition">Client Acquisition & Funnel Ops</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Team Pod
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  >
                    <option value="Developer">Developer Pod (Engineering)</option>
                    <option value="Marketing">Marketing Pod (Growth & CRO)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Assign To
                  </label>
                  <select
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  >
                    {teamMembers.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name} ({m.department})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Priority
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  >
                    <option value="URGENT">Urgent (SLA critical)</option>
                    <option value="HIGH">High Priority</option>
                    <option value="MEDIUM">Medium Priority</option>
                    <option value="LOW">Low Priority</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Initial Status
                  </label>
                  <select
                    value={initialStatus}
                    onChange={(e) => setInitialStatus(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  >
                    <option value="IN_PROGRESS">Working On</option>
                    <option value="TODO">Todo (Backlog)</option>
                    <option value="DONE">Work Done</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    placeholder="Nov 15, 2026"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-extrabold shadow-md shadow-orange-600/20 hover:opacity-95"
                >
                  Create Sprint Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <EmployeeLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
