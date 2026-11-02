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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold mb-2">
            <CheckSquare2 className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>Sprint Execution &amp; Pod Velocity</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
            Sprint Tasks &amp; Team Velocity
          </h1>
          <p className="text-sm text-[#475569] mt-1">
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
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold transition-all shadow-xs flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Sprint Task</span>
        </button>
      </div>

      {/* TEAM WORKLOAD & VELOCITY CALCULATOR CARDS (Developer vs Marketing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Developer Pod Workload Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-blue-200 shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] shadow-2xs">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0A224E]">Developer Team Pod</h3>
                <span className="text-[11px] text-[#475569]">Architecture, APIs &amp; Full-Stack Systems</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-[#0062E6] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-blue-200">
              {devTotal} Total Tasks
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#475569] font-medium">Sprint Completion Velocity</span>
              <span className="font-mono font-extrabold text-[#0062E6]">{devCompletionRate}% Done</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-[#E2E8F0]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0062E6] via-indigo-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${devCompletionRate}%` }}
              />
            </div>
          </div>

          {/* Work Done vs Working On Metric Counters */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E2E8F0]">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-emerald-200">
              <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Work Done</span>
              </div>
              <div className="text-2xl font-black text-[#0A224E] font-mono">{devDone} Tasks</div>
              <div className="text-[10px] text-[#475569] mt-0.5">Shipped to production</div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-blue-200">
              <div className="text-[11px] text-[#0062E6] font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#0062E6]" />
                <span>Working On</span>
              </div>
              <div className="text-2xl font-black text-[#0A224E] font-mono">{devWorkingOn} Tasks</div>
              <div className="text-[10px] text-[#475569] mt-0.5">Active sprint execution</div>
            </div>
          </div>
        </div>

        {/* Marketing Pod Workload Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-orange-200 shadow-2xs relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] border border-orange-200 flex items-center justify-center text-[#FF8800] shadow-2xs">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#0A224E]">Marketing Team Pod</h3>
                <span className="text-[11px] text-[#475569]">Meta/Google PPC, Local SEO &amp; CRO</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-full border border-orange-200">
              {mktTotal} Total Tasks
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#475569] font-medium">Campaign Milestone Velocity</span>
              <span className="font-mono font-extrabold text-[#EA580C]">{mktCompletionRate}% Done</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-[#E2E8F0]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#FF8800] via-amber-500 to-orange-500 transition-all duration-500"
                style={{ width: `${mktCompletionRate}%` }}
              />
            </div>
          </div>

          {/* Work Done vs Working On Metric Counters */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E2E8F0]">
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-emerald-200">
              <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Work Done</span>
              </div>
              <div className="text-2xl font-black text-[#0A224E] font-mono">{mktDone} Tasks</div>
              <div className="text-[10px] text-[#475569] mt-0.5">Campaigns launched &amp; live</div>
            </div>

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-orange-200">
              <div className="text-[11px] text-[#EA580C] font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Working On</span>
              </div>
              <div className="text-2xl font-black text-[#0A224E] font-mono">{mktWorkingOn} Tasks</div>
              <div className="text-[10px] text-[#475569] mt-0.5">A/B tests &amp; funnel builds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Scope Switcher: All Tasks vs My Tasks */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-[#E2E8F0] shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScopeFilter('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              scopeFilter === 'ALL'
                ? 'bg-[#0062E6] text-white shadow-xs'
                : 'text-[#475569] hover:text-[#0A224E] hover:bg-[#F8FAFC]'
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
                ? 'bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white shadow-xs'
                : 'text-[#475569] hover:text-[#0A224E] hover:bg-[#F8FAFC]'
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
              className="pl-8 pr-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder-slate-400 focus:outline-none focus:border-[#0062E6] w-44 sm:w-56"
            />
          </div>

          {/* Department Filter */}
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none"
          >
            <option value="ALL">All Teams</option>
            <option value="Developer">Developer Team</option>
            <option value="Marketing">Marketing Team</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none"
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
        <div className="p-8 rounded-2xl bg-[#FFF7ED] border border-orange-200 text-center max-w-xl mx-auto space-y-3 shadow-2xs">
          <AlertCircle className="w-8 h-8 text-[#FF8800] mx-auto" />
          <h3 className="text-base font-bold text-[#0A224E]">Employee Login Required for &quot;My Tasks&quot;</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Please log in with your officer account to view and manage tasks assigned specifically to you.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white text-xs font-bold transition-all shadow-xs"
          >
            Log In to View My Tasks
          </button>
        </div>
      )}

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
            <CheckSquare2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-[#475569]">No sprint tasks found for this filter.</p>
            <p className="text-xs text-slate-400 mt-1">
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
                    ? 'bg-[#F8FAFC] border-[#E2E8F0] opacity-80'
                    : isMyTask
                    ? 'bg-[#FFF7ED]/50 border-orange-200 ring-1 ring-orange-500/20 shadow-2xs'
                    : 'bg-white border-[#E2E8F0] hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isDev
                          ? 'text-[#0062E6] bg-[#EFF6FF] border-blue-200'
                          : 'text-[#EA580C] bg-[#FFF7ED] border-orange-200'
                      }`}
                    >
                      {isDev ? 'Developer' : 'Marketing'}
                    </span>

                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                        task.priority === 'URGENT'
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : task.priority === 'HIGH'
                          ? 'bg-orange-50 text-orange-700 border-orange-200'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {task.priority || 'NORMAL'}
                    </span>

                    <span className="text-[11px] text-[#475569] font-mono truncate max-w-xs">
                      {task.project}
                    </span>
                  </div>

                  <h4
                    className={`text-sm sm:text-base font-bold leading-snug ${
                      isDone ? 'line-through text-slate-400' : 'text-[#0A224E]'
                    }`}
                  >
                    {task.title}
                  </h4>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pt-1">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#0062E6]" />
                      <span className="text-[#0A224E] font-bold">{task.assignedTo}</span>
                      {isMyTask && (
                        <span className="text-[10px] text-[#EA580C] bg-[#FFF7ED] px-1.5 py-0.5 rounded font-bold border border-orange-200">
                          You
                        </span>
                      )}
                    </span>

                    <span className="flex items-center gap-1 text-[#475569]">
                      <Calendar className="w-3 h-3 text-[#475569]" />
                      <span>Due: {task.dueDate || 'TBD'}</span>
                    </span>
                  </div>
                </div>

                {/* Status Switcher Action Buttons */}
                <div className="flex items-center gap-1.5 sm:shrink-0 bg-[#F8FAFC] p-1 rounded-xl border border-[#E2E8F0]">
                  <button
                    onClick={() => updateTaskStatus(task.id, 'TODO')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      task.status === 'TODO'
                        ? 'bg-white text-[#0A224E] border border-[#E2E8F0] shadow-2xs'
                        : 'text-[#475569] hover:text-[#0A224E]'
                    }`}
                  >
                    Todo
                  </button>
                  <button
                    onClick={() => updateTaskStatus(task.id, 'IN_PROGRESS')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isInProgress
                        ? 'bg-[#0062E6] text-white shadow-xs'
                        : 'text-[#475569] hover:text-[#0A224E]'
                    }`}
                  >
                    Working On
                  </button>
                  <button
                    onClick={() => updateTaskStatus(task.id, 'DONE')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                      isDone
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-[#475569] hover:text-emerald-600'
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
