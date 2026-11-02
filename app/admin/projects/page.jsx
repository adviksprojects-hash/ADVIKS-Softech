'use client';

import { useState } from 'react';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import EmployeeLoginModal from '@/components/EmployeeLoginModal';
import {
  FolderKanban,
  Plus,
  Clock,
  CheckCircle2,
  Calendar,
  User,
  Sliders,
  Sparkles,
  Search,
  Filter,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Layers,
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  X,
  UserCheck,
  CheckSquare,
  Square,
  Trash2,
  Milestone,
  History,
  ChevronDown,
  ChevronUp,
  Edit2,
  Save,
  Lock,
  KeyRound,
  Copy,
} from 'lucide-react';

export default function AdminProjectsPage() {
  const {
    projects,
    addProject,
    updateProject,
    toggleChecklistItem,
    addChecklistItem,
    deleteChecklistItem,
    addProjectStage,
    updateProjectStage,
    deleteProjectStage,
    currentUser,
    teamMembers,
  } = useEmployeeAuth();

  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL' or 'MY'
  const [selectedDept, setSelectedDept] = useState('ALL'); // 'ALL', 'Developer', 'Marketing'
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Expanded Stage view per project ID
  const [expandedStages, setExpandedStages] = useState({});

  // Inline input state for adding requirement checkbox per project
  const [newChecklistText, setNewChecklistText] = useState({});

  // Inline state for adding stage per project
  const [showAddStageModal, setShowAddStageModal] = useState(null); // projectId or null
  const [stageName, setStageName] = useState('');
  const [stageStatus, setStageStatus] = useState('IN_PROGRESS');
  const [stageNotes, setStageNotes] = useState('');

  // New Project Form State
  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientPassword, setClientPassword] = useState('Client@2026');
  const [department, setDepartment] = useState('Developer');
  const [category, setCategory] = useState('Enterprise SaaS & Fintech');
  const [assignedTo, setAssignedTo] = useState(currentUser?.name || 'Vivek Pawar');
  const [budget, setBudget] = useState('₹5,00,000');
  const [targetDelivery, setTargetDelivery] = useState('');
  const [requirementsSummary, setRequirementsSummary] = useState('');
  const [initialChecklistItems, setInitialChecklistItems] = useState([
    'Core architecture & database schema setup',
    'Primary user flow and API endpoints',
    'Client review & staging QA approval',
  ]);
  const [newInitChecklistText, setNewInitChecklistText] = useState('');

  // Toggle stage view accordion
  const toggleStageAccordion = (projectId) => {
    setExpandedStages((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Filter projects
  const myProjects = projects.filter((p) => {
    if (!currentUser) return false;
    return (
      p.assignedTo &&
      p.assignedTo.toLowerCase().trim() === currentUser.name.toLowerCase().trim()
    );
  });

  const displayedList = (activeTab === 'MY' ? myProjects : projects).filter((p) => {
    // Department filter
    if (selectedDept !== 'ALL' && p.department !== selectedDept) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title?.toLowerCase().includes(q);
      const matchClient = p.clientName?.toLowerCase().includes(q);
      const matchAssigned = p.assignedTo?.toLowerCase().includes(q);
      const matchReq = p.requirements?.toLowerCase().includes(q);
      return matchTitle || matchClient || matchAssigned || matchReq;
    }

    return true;
  });

  // Handle adding checklist item to existing project
  const handleAddRequirement = (projectId) => {
    const text = newChecklistText[projectId];
    if (!text || !text.trim()) return;

    addChecklistItem(projectId, text.trim(), currentUser?.name || 'Team Member');
    setNewChecklistText((prev) => ({ ...prev, [projectId]: '' }));
  };

  // Handle adding new stage to existing project
  const handleAddStageSubmit = (e) => {
    e.preventDefault();
    if (!stageName.trim() || !showAddStageModal) return;

    addProjectStage(showAddStageModal, {
      name: stageName.trim(),
      status: stageStatus,
      listedBy: currentUser?.name || 'Team Member',
      notes: stageNotes.trim(),
    });

    setStageName('');
    setStageNotes('');
    setShowAddStageModal(null);
  };

  // Handle adding new project
  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!title || !clientName) return;

    const checklist = initialChecklistItems
      .filter((item) => item.trim().length > 0)
      .map((item, idx) => ({
        id: `chk-${Date.now()}-${idx}`,
        text: item.trim(),
        done: false,
        addedBy: currentUser?.name || assignedTo || 'Founder',
      }));

    const stages = [
      {
        id: `stg-${Date.now()}-0`,
        name: 'Stage 00: Project Inception & Scope Definition',
        status: 'IN_PROGRESS',
        listedBy: currentUser?.name || assignedTo || 'Founder',
        updatedAt: new Date().toISOString().split('T')[0],
        notes: 'Project initiated and requirement checklist registered.',
      },
    ];

    addProject({
      title,
      clientName,
      clientEmail,
      clientPhone,
      clientPassword: clientPassword.trim() || `${(clientName || 'Client').split(' ')[0]}@2026`,
      department,
      category,
      assignedTo,
      budget,
      targetDelivery: targetDelivery || 'Dec 2026',
      requirements: requirementsSummary || 'Detailed requirements specification pending client SOW sync.',
      checklist,
      stages,
      status: 'PLANNING',
    });

    // Reset form
    setTitle('');
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setClientPassword('Client@2026');
    setRequirementsSummary('');
    setInitialChecklistItems([
      'Core architecture & database schema setup',
      'Primary user flow and API endpoints',
      'Client review & staging QA approval',
    ]);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Title Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>SOW Delivery &amp; Dynamic Checklists</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
            Client Projects &amp; Milestones
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Checklist-driven completion percentages, recorded stage history, and collaborative deliverable management.
          </p>
        </div>

        <div className="flex items-center gap-3">
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
            <span>+ Add New Project / Client SOW</span>
          </button>
        </div>
      </div>

      {/* Primary Tab Switcher: "All Projects" vs "My Projects" */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-[#E2E8F0] shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'ALL'
                ? 'bg-[#0062E6] text-white shadow-xs'
                : 'text-[#475569] hover:text-[#0A224E] hover:bg-[#F8FAFC]'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>All Company Projects</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {projects.length}
            </span>
          </button>

          <button
            onClick={() => {
              if (!currentUser) {
                setShowLoginModal(true);
              } else {
                setActiveTab('MY');
              }
            }}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
              activeTab === 'MY'
                ? 'bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white shadow-xs'
                : 'text-[#475569] hover:text-[#0A224E] hover:bg-[#F8FAFC]'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>My Projects {currentUser ? `(${currentUser.name.split(' ')[0]})` : ''}</span>
            <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20">
              {currentUser ? myProjects.length : '0'}
            </span>
          </button>
        </div>

        {/* Search & Department Filters */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, client, lead..."
              className="pl-8 pr-3 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder-slate-400 focus:outline-none focus:border-[#0062E6] w-48 sm:w-60"
            />
          </div>

          <div className="flex items-center gap-1 bg-[#F8FAFC] p-1 rounded-xl border border-[#E2E8F0]">
            {['ALL', 'Developer', 'Marketing'].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDept(d)}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                  selectedDept === d
                    ? 'bg-white text-[#0A224E] shadow-2xs border border-[#E2E8F0]'
                    : 'text-[#475569] hover:text-[#0A224E]'
                }`}
              >
                {d === 'ALL' ? 'All Pods' : d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* If "My Projects" is selected but no user is logged in */}
      {activeTab === 'MY' && !currentUser && (
        <div className="p-8 rounded-2xl bg-[#FFF7ED] border border-orange-200 text-center max-w-xl mx-auto space-y-3 shadow-2xs">
          <AlertCircle className="w-8 h-8 text-[#FF8800] mx-auto" />
          <h3 className="text-base font-bold text-[#0A224E]">Employee Login Required for &quot;My Projects&quot;</h3>
          <p className="text-xs text-[#475569] leading-relaxed">
            Please log in with your officer account so ADVIKS can filter projects assigned specifically to your pod.
          </p>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white text-xs font-bold transition-all shadow-xs"
          >
            Log In as Team Member
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {displayedList.length === 0 ? (
          <div className="col-span-full py-16 text-center rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs">
            <FolderKanban className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-[#475569]">No projects match the current filter.</p>
            <p className="text-xs text-slate-400 mt-1">
              Click &quot;+ Add New Project&quot; above to register a new client scope or product idea.
            </p>
          </div>
        ) : (
          displayedList.map((project) => {
            const isDev = project.department === 'Developer';
            const isAssignedToCurrentUser =
              currentUser &&
              project.assignedTo &&
              project.assignedTo.toLowerCase() === currentUser.name.toLowerCase();

            const checklist = project.checklist || [];
            const stages = project.stages || [];
            const completedCount = checklist.filter((c) => c.done).length;
            const totalCount = checklist.length;
            const isStagesOpen = expandedStages[project.id];

            return (
              <div
                key={project.id}
                className={`p-6 sm:p-7 rounded-3xl border bg-white transition-all flex flex-col justify-between shadow-2xs relative overflow-hidden ${
                  isAssignedToCurrentUser
                    ? 'border-orange-300 ring-1 ring-orange-500/20'
                    : 'border-[#E2E8F0] hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                          isDev
                            ? 'text-[#0062E6] bg-[#EFF6FF] border-blue-200'
                            : 'text-[#EA580C] bg-[#FFF7ED] border-orange-200'
                        }`}
                      >
                        {isDev ? 'Developer Pod' : 'Marketing Pod'}
                      </span>
                      <span className="text-[11px] text-[#475569] font-mono">
                        {project.category || 'Custom Solution'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                          project.status === 'COMPLETED'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : project.status === 'REVIEW'
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            : 'bg-[#FFF7ED] text-[#EA580C] border-orange-200'
                        }`}
                      >
                        {project.status || 'IN_PROGRESS'}
                      </span>
                      {isAssignedToCurrentUser && (
                        <span className="text-[10px] font-bold text-[#EA580C] bg-[#FFF7ED] border border-orange-200 px-2 py-0.5 rounded-full">
                          Your Assignment
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A224E] mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Client Info Block */}
                  <div className="mb-4 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#475569] font-medium">Client / Stakeholder:</span>
                      <span className="text-[#0A224E] font-bold">{project.clientName}</span>
                    </div>
                    {(project.clientEmail || project.clientPhone) && (
                      <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-[#E2E8F0] text-[11px] text-[#475569]">
                        {project.clientEmail && (
                          <a
                            href={`mailto:${project.clientEmail}`}
                            className="hover:text-[#0062E6] flex items-center gap-1 transition-colors"
                          >
                            <Mail className="w-3 h-3 text-[#0062E6]" />
                            <span>{project.clientEmail}</span>
                          </a>
                        )}
                        {project.clientPhone && (
                          <a
                            href={`tel:${project.clientPhone}`}
                            className="hover:text-[#EA580C] flex items-center gap-1 transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#FF8800]" />
                            <span>{project.clientPhone}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* DYNAMIC REQUIREMENTS CHECKLIST WITH AUTO-CALCULATED PROGRESS */}
                  <div className="mb-5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                    {/* Header with percentage & counters */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A224E]">
                          Requirements Checklist
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#475569]">
                          {completedCount} / {totalCount} Done
                        </span>
                        <span className="text-sm font-black font-mono text-[#0062E6] bg-white px-2 py-0.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                          {project.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar (Dynamic gradient that glides as checkboxes toggle) */}
                    <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden border border-[#E2E8F0]">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ease-out ${
                          project.progress === 100
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                            : isDev
                            ? 'bg-gradient-to-r from-[#0062E6] via-indigo-500 to-cyan-400'
                            : 'bg-gradient-to-r from-[#FF8800] via-amber-500 to-[#EA580C]'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    {/* Checklist Items */}
                    <div className="space-y-1.5 pt-1">
                      {checklist.length === 0 ? (
                        <div className="text-xs text-[#475569] italic py-2 text-center">
                          No requirement checkboxes added yet. Add below to auto-calculate completion.
                        </div>
                      ) : (
                        checklist.map((item) => (
                          <div
                            key={item.id}
                            className={`p-2.5 rounded-xl border text-xs flex items-start justify-between gap-3 transition-all ${
                              item.done
                                ? 'bg-emerald-50/60 border-emerald-200 text-[#475569]'
                                : 'bg-white border-[#E2E8F0] text-[#0A224E] shadow-2xs'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleChecklistItem(project.id, item.id)}
                              className="flex items-start gap-2.5 flex-1 min-w-0 text-left cursor-pointer group"
                            >
                              <div className="mt-0.5 shrink-0 transition-transform group-hover:scale-110">
                                {item.done ? (
                                  <div className="w-4 h-4 rounded bg-emerald-600 flex items-center justify-center text-white shadow-2xs">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                  </div>
                                ) : (
                                  <div className="w-4 h-4 rounded border-2 border-slate-300 group-hover:border-[#0062E6] bg-white transition-colors" />
                                )}
                              </div>
                              <span
                                className={`text-xs leading-snug break-words ${
                                  item.done ? 'line-through text-slate-400 font-normal' : 'font-medium text-[#0A224E]'
                                }`}
                              >
                                {item.text}
                              </span>
                            </button>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                                By {item.addedBy?.split(' ')[0] || 'Team'}
                              </span>
                              <button
                                type="button"
                                onClick={() => deleteChecklistItem(project.id, item.id)}
                                className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                                title="Delete requirement"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add New Checkbox Input */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[#E2E8F0]">
                      <input
                        type="text"
                        value={newChecklistText[project.id] || ''}
                        onChange={(e) =>
                          setNewChecklistText((prev) => ({
                            ...prev,
                            [project.id]: e.target.value,
                          }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddRequirement(project.id);
                          }
                        }}
                        placeholder="Add new requirement checkbox &amp; press Enter..."
                        className="flex-1 px-3 py-1.5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#0A224E] placeholder-slate-400 focus:outline-none focus:border-[#0062E6]"
                      />
                      <button
                        type="button"
                        onClick={() => handleAddRequirement(project.id)}
                        className="px-3 py-1.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-colors shrink-0 flex items-center gap-1 shadow-2xs"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>

                  {/* STAGES & MILESTONE HISTORY RECORD */}
                  <div className="mb-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleStageAccordion(project.id)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Milestone className="w-4 h-4 text-[#FF8800]" />
                        <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider">
                          Stages &amp; Milestone Record ({stages.length} Stages)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#475569]">
                          {isStagesOpen ? 'Hide Stages' : 'View / Edit Stages'}
                        </span>
                        {isStagesOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isStagesOpen && (
                      <div className="p-4 pt-1 border-t border-[#E2E8F0] space-y-3 animate-in fade-in duration-200">
                        {/* Stages Timeline */}
                        <div className="space-y-3 relative pl-4 border-l-2 border-[#E2E8F0]">
                          {stages.map((stage, sIdx) => {
                            const isCompleted = stage.status === 'COMPLETED';
                            const isInProgress = stage.status === 'IN_PROGRESS';

                            return (
                              <div key={stage.id} className="relative space-y-1 text-xs">
                                {/* Dot on vertical line */}
                                <div
                                  className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-white ${
                                    isCompleted
                                      ? 'bg-emerald-500'
                                      : isInProgress
                                      ? 'bg-[#0062E6] animate-pulse'
                                      : 'bg-slate-400'
                                  }`}
                                />

                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <span className="font-bold text-[#0A224E] text-xs">
                                    {stage.name}
                                  </span>

                                  {/* Stage Status Selector / Pill */}
                                  <div className="flex items-center gap-1.5">
                                    <select
                                      value={stage.status}
                                      onChange={(e) =>
                                        updateProjectStage(project.id, stage.id, {
                                          status: e.target.value,
                                        })
                                      }
                                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md border focus:outline-none ${
                                        isCompleted
                                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                          : isInProgress
                                          ? 'bg-blue-50 text-[#0062E6] border-blue-200'
                                          : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]'
                                      }`}
                                    >
                                      <option value="COMPLETED">Completed</option>
                                      <option value="IN_PROGRESS">In Progress</option>
                                      <option value="PENDING">Pending</option>
                                    </select>

                                    <button
                                      type="button"
                                      onClick={() => deleteProjectStage(project.id, stage.id)}
                                      className="text-slate-400 hover:text-rose-600 p-0.5"
                                      title="Delete stage"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>

                                <div className="text-[11px] text-[#475569] font-normal">
                                  {stage.notes}
                                </div>

                                <div className="flex items-center gap-2 text-[10px] text-slate-400 pt-0.5">
                                  <span className="text-[#FF8800] font-semibold">
                                    Stage listed by: <strong className="text-[#0A224E]">{stage.listedBy}</strong>
                                  </span>
                                  <span>•</span>
                                  <span>{stage.updatedAt}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Add New Stage Button */}
                        <div className="pt-2 border-t border-[#E2E8F0]">
                          <button
                            type="button"
                            onClick={() => {
                              setShowAddStageModal(project.id);
                              setStageName(`Stage 0${stages.length + 1}: `);
                            }}
                            className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A224E] text-xs font-bold border border-[#E2E8F0] shadow-2xs flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5 text-[#FF8800]" />
                            <span>+ Record New Stage to Timeline</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#0062E6]" />
                    <span className="text-[#475569]">Handled By:</span>
                    <span className="text-[#0A224E] font-bold">{project.assignedTo || 'Unassigned'}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[#475569] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF8800]" />
                      <span>{project.targetDelivery}</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                      {project.budget}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Add New Stage Modal */}
      {showAddStageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
            <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
              <button
                onClick={() => setShowAddStageModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-amber-300 mb-2">
                <Milestone className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Stage Milestone Record</span>
              </div>
              <h2 className="text-xl font-extrabold text-white">Add Stage to Project Timeline</h2>
              <p className="text-xs text-blue-100 mt-1">
                Will be recorded as listed by: <strong className="text-white">{currentUser?.name || 'You'}</strong>
              </p>
            </div>

            <form onSubmit={handleAddStageSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Stage Name / Milestone *
                </label>
                <input
                  type="text"
                  required
                  value={stageName}
                  onChange={(e) => setStageName(e.target.value)}
                  placeholder="e.g. Stage 03: Performance Optimization & CDN Edge"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Initial Status
                </label>
                <select
                  value={stageStatus}
                  onChange={(e) => setStageStatus(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                >
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="PENDING">Pending (Upcoming)</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Stage Deliverables & Notes
                </label>
                <textarea
                  rows={2}
                  value={stageNotes}
                  onChange={(e) => setStageNotes(e.target.value)}
                  placeholder="Detail what is being built or delivered in this specific stage..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowAddStageModal(null)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-extrabold shadow-md hover:opacity-95"
                >
                  Save Stage
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-amber-300 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8800]" />
                <span>Founder SOW Project Registration</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Add New Client Project / Product Idea
              </h2>
              <p className="text-xs text-blue-100 mt-1">
                Starts at 0% with recorded Stage 0 and customizable requirement checkboxes.
              </p>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateProject} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Acme Health High-Throughput Patient Booking Portal"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Client / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Acme Health Pvt Ltd"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Client Email
                  </label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="contact@acmehealth.in"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Client Phone
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+91 98200 12345"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
              </div>

              {/* Client Portal Access Generator Card */}
              <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/90 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A224E] uppercase tracking-wider flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-[#0062E6]" />
                    <span>Client Portal Access & Auto-Generated Passkey</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                    ID: CLT-{clientEmail ? clientEmail.split('@')[0].toUpperCase().slice(0, 8) : 'NEW'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Client Portal Security Passkey *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientPassword}
                      onChange={(e) => setClientPassword(e.target.value)}
                      placeholder="e.g. Paras@2026"
                      className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                    />
                  </div>

                  <div className="flex flex-col justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const randomSuffix = Math.floor(100 + Math.random() * 900);
                        const prefix = clientName ? clientName.split(' ')[0] : 'Client';
                        setClientPassword(`${prefix}@${randomSuffix}`);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-blue-200 text-xs font-bold text-[#0062E6] transition-colors"
                    >
                      🎲 Generate Random Passkey
                    </button>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500">
                  Client can log into <span className="font-mono text-blue-700 font-bold">/dashboard</span> using their email and this passkey to track milestones, inspect invoices &amp; bank transfer UTRs, and raise priority tickets.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Assigned Pod / Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  >
                    <option value="Developer">Developer Pod (Code & Architecture)</option>
                    <option value="Marketing">Marketing Pod (Growth, ROAS & CRO)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Member Currently Handling
                  </label>
                  <select
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  >
                    {teamMembers.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name} ({m.role.split('(')[0].trim()})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Detailed Requirements Summary
                </label>
                <textarea
                  rows={2}
                  value={requirementsSummary}
                  onChange={(e) => setRequirementsSummary(e.target.value)}
                  placeholder="Summary of the scope, tech architecture, or marketing KPIs..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              {/* Initial Checkboxes Builder */}
              <div>
                <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                  Initial Deliverable Checkboxes ({initialChecklistItems.length} items)
                </label>
                <div className="space-y-1.5 mb-2 max-h-36 overflow-y-auto">
                  {initialChecklistItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{item}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setInitialChecklistItems(
                            initialChecklistItems.filter((_, i) => i !== idx)
                          )
                        }
                        className="text-slate-400 hover:text-rose-500"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newInitChecklistText}
                    onChange={(e) => setNewInitChecklistText(e.target.value)}
                    placeholder="Type deliverable checkbox & click Add..."
                    className="flex-1 px-3 py-1.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        if (newInitChecklistText.trim()) {
                          setInitialChecklistItems([
                            ...initialChecklistItems,
                            newInitChecklistText.trim(),
                          ]);
                          setNewInitChecklistText('');
                        }
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (newInitChecklistText.trim()) {
                        setInitialChecklistItems([
                          ...initialChecklistItems,
                          newInitChecklistText.trim(),
                        ]);
                        setNewInitChecklistText('');
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Budget / Retainer
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="₹5,00,000"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A224E] uppercase tracking-wider mb-1.5">
                    Target Delivery Date
                  </label>
                  <input
                    type="text"
                    value={targetDelivery}
                    onChange={(e) => setTargetDelivery(e.target.value)}
                    placeholder="Dec 20, 2026"
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
                  Save & Register Project (0% Initialized)
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
