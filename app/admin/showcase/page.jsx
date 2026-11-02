'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  Globe,
  Layers,
  Sparkles,
  Eye,
  EyeOff,
  Edit2,
  Trash2,
  Plus,
  CheckCircle2,
  ExternalLink,
  Code2,
  Target,
  ArrowRight,
  X,
  Save,
  Image as ImageIcon,
} from 'lucide-react';

export default function AdminShowcaseManagerPage() {
  const {
    websiteProjects,
    updateWebsiteProject,
    toggleProjectVisibility,
    addWebsiteProject,
    deleteWebsiteProject,
    websiteServices,
    updateWebsiteService,
    toggleServiceVisibility,
    addWebsiteService,
    deleteWebsiteService,
  } = useEmployeeAuth();

  const [activeTab, setActiveTab] = useState('PROJECTS'); // 'PROJECTS' or 'SERVICES'

  // Edit Project Modal
  const [editingProject, setEditingProject] = useState(null);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    subtitle: '',
    domain: '',
    liveUrl: '',
    description: '',
    category: 'Full-Stack Engineering',
  });

  // Edit Service Modal
  const [editingService, setEditingService] = useState(null);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [newService, setNewService] = useState({
    title: '',
    shortDesc: '',
    tagline: '',
    slug: '',
    category: 'Technology & Engineering',
    bgImage: '',
  });

  // Feedback banner
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProject.name) return;
    addWebsiteProject({
      ...newProject,
      showOnWebsite: true,
      tag: newProject.category,
      outcomePills: [{ label: '100% Production Ready', highlight: true }],
    });
    triggerToast(`Created project "${newProject.name}"`);
    setShowAddProjectModal(false);
    setNewProject({
      name: '',
      subtitle: '',
      domain: '',
      liveUrl: '',
      description: '',
      category: 'Full-Stack Engineering',
    });
  };

  const handleCreateService = (e) => {
    e.preventDefault();
    if (!newService.title) return;
    const slug = newService.slug || newService.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    addWebsiteService({
      ...newService,
      slug,
      showOnWebsite: true,
    });
    triggerToast(`Created service "${newService.title}"`);
    setShowAddServiceModal(false);
    setNewService({
      title: '',
      shortDesc: '',
      tagline: '',
      slug: '',
      category: 'Technology & Engineering',
      bgImage: '',
    });
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#0062E6] border border-blue-200 text-xs font-bold mb-2">
            <Globe className="w-3.5 h-3.5 text-[#0062E6]" />
            <span>Public Website CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A224E]">
            Website Showcase & Services Manager
          </h1>
          <p className="text-sm text-[#475569] mt-1">
            Super Admin control center to manage live projects, navbar mega-menu offerings, and service detail pages.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portfolio"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E8F0] text-xs font-bold text-[#0A224E] shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Preview Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
          <Link
            href="/services"
            target="_blank"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold shadow-md shadow-orange-500/20 transition-all flex items-center gap-1.5"
          >
            <span>Preview Services</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {toastMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-bold shadow-sm animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Primary Tab Switcher */}
      <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm w-fit">
        <button
          onClick={() => setActiveTab('PROJECTS')}
          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'PROJECTS'
              ? 'bg-[#0062E6] text-white shadow-md shadow-blue-600/20'
              : 'text-[#475569] hover:text-[#0A224E] hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Live Client Projects</span>
          <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20 font-bold">
            {websiteProjects.filter((p) => p.showOnWebsite).length} / {websiteProjects.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('SERVICES')}
          className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            activeTab === 'SERVICES'
              ? 'bg-gradient-to-r from-[#FF8800] to-[#EA580C] text-white shadow-md shadow-orange-500/20'
              : 'text-[#475569] hover:text-[#0A224E] hover:bg-slate-50'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Website & Mega-Menu Services</span>
          <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-white/20 font-bold">
            {websiteServices.filter((s) => s.showOnWebsite).length} / {websiteServices.length}
          </span>
        </button>
      </div>

      {/* TAB 1: CLIENT PROJECTS SHOWCASE */}
      {activeTab === 'PROJECTS' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#0A224E]">Live Website Projects</h2>
              <p className="text-xs text-[#475569] mt-0.5">
                These projects display on the Home page, Our Work showcase, and Portfolio.
              </p>
            </div>
            <button
              onClick={() => setShowAddProjectModal(true)}
              className="px-4 py-2.5 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Website Project</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {websiteProjects.map((project) => (
              <div
                key={project.id}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                  project.showOnWebsite
                    ? 'bg-white border-[#E2E8F0]'
                    : 'bg-slate-50/80 border-[#E2E8F0] opacity-70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full border text-[#0062E6] bg-[#EFF6FF] border-blue-200">
                      {project.tag || project.category}
                    </span>

                    {/* Visibility Toggle Button */}
                    <button
                      onClick={() => {
                        toggleProjectVisibility(project.id);
                        triggerToast(
                          `Project "${project.name}" visibility toggled!`
                        );
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all border ${
                        project.showOnWebsite
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {project.showOnWebsite ? (
                        <>
                          <Eye className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Shown on Live Site</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                          <span>Hidden</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0A224E]">{project.name}</h3>
                  <div className="text-xs font-bold text-[#EA580C] mt-0.5 mb-2">
                    {project.subtitle}
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Outcome metrics pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.outcomePills || []).map((pill, idx) => {
                      const label = typeof pill === 'string' ? pill : pill?.label || '';
                      const isHighlight = typeof pill === 'object' && pill?.highlight;
                      return (
                        <span
                          key={idx}
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${
                            isHighlight
                              ? 'bg-[#FFF7ED] text-[#EA580C] border-orange-200'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Review quote snippet */}
                  {project.review?.quote && (
                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569] italic mb-4">
                      &quot;{project.review.quote}&quot;
                      <div className="text-[10px] text-slate-800 not-italic font-bold mt-1.5">
                        — {project.review.author}, {project.review.company}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#475569] text-[11px]">
                    Domain: <span className="text-[#0A224E] font-bold">{project.domain || 'Internal'}</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0A224E] font-bold flex items-center gap-1.5 transition-colors border border-slate-200 text-xs"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-[#0062E6]" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete project "${project.name}" from website showcase?`)) {
                          deleteWebsiteProject(project.id);
                          triggerToast(`Deleted ${project.name}`);
                        }
                      }}
                      className="p-1.5 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: SERVICES & SOLUTION OFFERINGS */}
      {activeTab === 'SERVICES' && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold text-[#0A224E]">
                Live Website Services & Mega-Menu Offerings
              </h2>
              <p className="text-xs text-[#475569] mt-0.5">
                Controls the 4-column dropdown in the Navbar and cards on the /services page.
              </p>
            </div>
            <button
              onClick={() => setShowAddServiceModal(true)}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-orange-500/20"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add New Service</span>
            </button>
          </div>

          {/* Group 1: Technology & Engineering */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2.5 border-b border-blue-200">
              <Code2 className="w-5 h-5 text-[#0062E6]" />
              <h3 className="text-base font-extrabold text-[#0A224E]">
                Pillar 1: Technology & Engineering Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {websiteServices
                .filter((s) => s.category === 'Technology & Engineering')
                .map((service) => (
                  <div
                    key={service.id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                      service.showOnWebsite
                        ? 'bg-white border-[#E2E8F0]'
                        : 'bg-slate-50/80 border-[#E2E8F0] opacity-70'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#0062E6] border border-blue-200">
                          Engineering
                        </span>
                        <button
                          onClick={() => {
                            toggleServiceVisibility(service.id);
                            triggerToast(
                              `Service "${service.title}" visibility toggled!`
                            );
                          }}
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                            service.showOnWebsite
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {service.showOnWebsite ? (
                            <>
                              <Eye className="w-3 h-3 text-emerald-600" />
                              <span>Live</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3 text-slate-500" />
                              <span>Hidden</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-[#0A224E] mb-1 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-[#475569] mb-3 line-clamp-2">
                        {service.shortDesc || service.tagline}
                      </p>

                      <div className="text-[10px] text-slate-400 font-mono mb-3">
                        Slug: <span className="text-[#0062E6] font-semibold">/services/{service.slug}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                      <Link
                        href={`/services/${service.slug}`}
                        target="_blank"
                        className="text-[11px] font-bold text-[#0062E6] hover:underline flex items-center gap-1"
                      >
                        <span>View Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingService(service)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0A224E] text-xs font-bold border border-slate-200 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete service "${service.title}"?`)) {
                              deleteWebsiteService(service.id);
                              triggerToast(`Deleted ${service.title}`);
                            }
                          }}
                          className="p-1 hover:text-rose-600 text-slate-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Group 2: Growth & Digital Marketing */}
          <div className="space-y-4 pt-6 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-2 pb-2.5 border-b border-orange-200">
              <Target className="w-5 h-5 text-[#EA580C]" />
              <h3 className="text-base font-extrabold text-[#0A224E]">
                Pillar 2: Growth & Digital Marketing Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {websiteServices
                .filter((s) => s.category === 'Growth & Digital Marketing')
                .map((service) => (
                  <div
                    key={service.id}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                      service.showOnWebsite
                        ? 'bg-white border-[#E2E8F0]'
                        : 'bg-slate-50/80 border-[#E2E8F0] opacity-70'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200">
                          Growth Marketing
                        </span>
                        <button
                          onClick={() => {
                            toggleServiceVisibility(service.id);
                            triggerToast(
                              `Service "${service.title}" visibility toggled!`
                            );
                          }}
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                            service.showOnWebsite
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {service.showOnWebsite ? (
                            <>
                              <Eye className="w-3 h-3 text-emerald-600" />
                              <span>Live</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3 text-slate-500" />
                              <span>Hidden</span>
                            </>
                          )}
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-[#0A224E] mb-1 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-[#475569] mb-3 line-clamp-2">
                        {service.shortDesc || service.tagline}
                      </p>

                      <div className="text-[10px] text-slate-400 font-mono mb-3">
                        Slug: <span className="text-[#EA580C] font-semibold">/services/{service.slug}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                      <Link
                        href={`/services/${service.slug}`}
                        target="_blank"
                        className="text-[11px] font-bold text-[#EA580C] hover:underline flex items-center gap-1"
                      >
                        <span>View Page</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingService(service)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0A224E] text-xs font-bold border border-slate-200 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete service "${service.title}"?`)) {
                              deleteWebsiteService(service.id);
                              triggerToast(`Deleted ${service.title}`);
                            }
                          }}
                          className="p-1 hover:text-rose-600 text-slate-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ADD PROJECT MODAL */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden text-slate-900">
            <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
              <button
                onClick={() => setShowAddProjectModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <h2 className="text-xl font-extrabold text-white">Add New Website Project</h2>
              <p className="text-xs text-blue-100 mt-0.5">Publish a completed project to ADVIKS public showcase</p>
            </div>

            <form onSubmit={handleCreateProject} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Project Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. VyaparStock Enterprise"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Subtitle / Tagline *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Billing & Multi-Branch Inventory SaaS"
                  value={newProject.subtitle}
                  onChange={(e) => setNewProject({ ...newProject, subtitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0A224E] uppercase mb-1">Domain</label>
                  <input
                    type="text"
                    placeholder="e.g. Retail SaaS"
                    value={newProject.domain}
                    onChange={(e) => setNewProject({ ...newProject, domain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0A224E] uppercase mb-1">Live URL / Preview</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Full Description</label>
                <textarea
                  rows={3}
                  placeholder="Architectural highlights and system capabilities..."
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/20"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT PROJECT MODAL */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden text-slate-900">
            <div className="bg-gradient-to-r from-[#0A224E] via-[#0062E6] to-[#0A224E] p-6 text-white relative">
              <button
                onClick={() => setEditingProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <h2 className="text-xl font-extrabold text-white">Edit Website Project</h2>
              <p className="text-xs text-blue-100 mt-0.5">{editingProject.name}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateWebsiteProject(editingProject.id, editingProject);
                triggerToast(`Saved ${editingProject.name}`);
                setEditingProject(null);
              }}
              className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs"
            >
              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  value={editingProject.name}
                  onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Subtitle / Tagline</label>
                <input
                  type="text"
                  required
                  value={editingProject.subtitle}
                  onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0A224E] uppercase mb-1">Domain</label>
                  <input
                    type="text"
                    value={editingProject.domain || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, domain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0A224E] uppercase mb-1">Live URL</label>
                  <input
                    type="text"
                    value={editingProject.liveUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Full Description</label>
                <textarea
                  rows={3}
                  value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0062E6]"
                />
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="block font-bold text-[#0A224E] uppercase text-[11px]">Client Review</span>
                <input
                  type="text"
                  placeholder="Review quote..."
                  value={editingProject.review?.quote || ''}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      review: { ...editingProject.review, quote: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Author title / name"
                    value={editingProject.review?.author || ''}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        review: { ...editingProject.review, author: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    value={editingProject.review?.company || ''}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        review: { ...editingProject.review, company: e.target.value },
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl bg-[#0062E6] hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/20"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD SERVICE MODAL */}
      {showAddServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden text-slate-900">
            <div className="bg-gradient-to-r from-[#FF8800] via-[#EA580C] to-[#FF8800] p-6 text-white relative">
              <button
                onClick={() => setShowAddServiceModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <h2 className="text-xl font-extrabold text-white">Add New Website Service</h2>
              <p className="text-xs text-orange-100 mt-0.5">Publish a capability to Navbar mega menu & services page</p>
            </div>

            <form onSubmit={handleCreateService} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Customer Service Copilot"
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Navbar Short Description *</label>
                <input
                  type="text"
                  required
                  placeholder="Appears in hover mega dropdown..."
                  value={newService.shortDesc}
                  onChange={(e) => setNewService({ ...newService, shortDesc: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Tagline / Subtitle *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Enterprise RAG & Autonomous Support Bots"
                  value={newService.tagline}
                  onChange={(e) => setNewService({ ...newService, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Pillar Category</label>
                <select
                  value={newService.category}
                  onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Technology & Engineering">Technology & Engineering</option>
                  <option value="Growth & Digital Marketing">Growth & Digital Marketing</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowAddServiceModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white font-bold shadow-md shadow-orange-500/20"
                >
                  Create Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT SERVICE MODAL */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden text-slate-900">
            <div className="bg-gradient-to-r from-[#FF8800] via-[#EA580C] to-[#FF8800] p-6 text-white relative">
              <button
                onClick={() => setEditingService(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <h2 className="text-xl font-extrabold text-white">Edit Service Offering</h2>
              <p className="text-xs text-orange-100 mt-0.5">{editingService.title}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateWebsiteService(editingService.id, editingService);
                triggerToast(`Saved ${editingService.title}`);
                setEditingService(null);
              }}
              className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs"
            >
              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={editingService.title}
                  onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Navbar Short Description *</label>
                <input
                  type="text"
                  required
                  value={editingService.shortDesc || ''}
                  onChange={(e) => setEditingService({ ...editingService, shortDesc: e.target.value })}
                  placeholder="Appears in hover mega dropdown..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Tagline / Subtitle *</label>
                <input
                  type="text"
                  required
                  value={editingService.tagline || ''}
                  onChange={(e) => setEditingService({ ...editingService, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block font-bold text-[#0A224E] uppercase mb-1">Pillar Category</label>
                <select
                  value={editingService.category}
                  onChange={(e) => setEditingService({ ...editingService, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Technology & Engineering">Technology & Engineering</option>
                  <option value="Growth & Digital Marketing">Growth & Digital Marketing</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white font-bold shadow-md shadow-orange-500/20"
                >
                  Save Service Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
