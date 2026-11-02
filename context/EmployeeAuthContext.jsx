'use client';

import React, { createContext, useContext, useState, useSyncExternalStore } from 'react';
import { INITIAL_TEAM_MEMBERS } from '@/lib/teamData';

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const EmployeeAuthContext = createContext();

const INITIAL_PROJECTS = [
  {
    id: 'prj-101',
    title: 'VyaparStock Multi-Warehouse Billing SaaS',
    department: 'Developer',
    category: 'Enterprise SaaS & Fintech',
    clientName: 'VyaparStock In-House',
    clientEmail: 'contact@vyaparstock.in',
    clientPhone: '+91 93707 50263',
    assignedTo: 'Vivek Pawar',
    progress: 60,
    status: 'IN_PROGRESS',
    budget: '₹8,50,000',
    targetDelivery: 'Dec 15, 2026',
    requirements:
      'Multi-branch stock ledgers, thermal POS printer integration, WhatsApp automated GST invoice dispatch, and high-concurrency Neon DB replication for 10,000+ SKU stores.',
    stages: [
      {
        id: 'stg-101-1',
        name: 'Stage 01: Multi-Branch Schema & Ledgers Architecture',
        status: 'COMPLETED',
        listedBy: 'Vivek Pawar',
        updatedAt: '2026-10-15',
        notes: 'High-concurrency PostgreSQL indexes and Neon DB connection pooling established.',
      },
      {
        id: 'stg-101-2',
        name: 'Stage 02: Thermal POS & WhatsApp Cloud Webhooks',
        status: 'IN_PROGRESS',
        listedBy: 'Vivek Pawar',
        updatedAt: '2026-11-01',
        notes: 'ESC-POS USB print drivers and Meta Cloud API GST invoice template dispatch.',
      },
      {
        id: 'stg-101-3',
        name: 'Stage 03: Multi-Store Stress Testing & Rollout',
        status: 'PENDING',
        listedBy: 'Dipak Pawar',
        updatedAt: '2026-11-02',
        notes: 'Testing 500 orders/minute across 5 warehouse branches simultaneously.',
      },
    ],
    checklist: [
      {
        id: 'chk-101-1',
        text: 'Multi-branch stock ledgers & realtime inventory sync',
        done: true,
        addedBy: 'Vivek Pawar',
      },
      {
        id: 'chk-101-2',
        text: 'USB / ESC-POS thermal receipt printer driver integration',
        done: true,
        addedBy: 'Vivek Pawar',
      },
      {
        id: 'chk-101-3',
        text: 'WhatsApp Cloud API webhook for automated GST invoice PDF dispatch',
        done: true,
        addedBy: 'Vivek Pawar',
      },
      {
        id: 'chk-101-4',
        text: 'Neon DB connection pool optimization for 50k item barcode searches',
        done: false,
        addedBy: 'Dipak Pawar',
      },
      {
        id: 'chk-101-5',
        text: 'End-to-end load testing with 500 invoices/minute concurrency',
        done: false,
        addedBy: 'Kaustubh Ronge',
      },
    ],
  },
  {
    id: 'prj-102',
    title: 'Paras Business Park Digital Hub & Leasing Engine',
    department: 'Developer',
    category: 'Commercial Web Platform',
    clientName: 'Paras Business Park Pvt Ltd',
    clientEmail: 'director@parasbusinesspark.com',
    clientPhone: '+91 98200 44556',
    assignedTo: 'Dhiraj Gaikwad',
    progress: 75,
    status: 'IN_PROGRESS',
    budget: '₹6,00,000',
    targetDelivery: 'Nov 30, 2026',
    requirements:
      'Sub-second Next.js 16 Edge architecture, interactive floor plan navigator, virtual office specs, and automated tenant lead capture webhooks routing to leasing directors in < 90 seconds.',
    stages: [
      {
        id: 'stg-102-1',
        name: 'Stage 01: Next.js Edge Routing & Floor Plans',
        status: 'COMPLETED',
        listedBy: 'Dhiraj Gaikwad',
        updatedAt: '2026-10-18',
        notes: 'High-resolution SVG floor plan interactive zoom engine delivered.',
      },
      {
        id: 'stg-102-2',
        name: 'Stage 02: 90s Lead Routing Webhooks',
        status: 'COMPLETED',
        listedBy: 'Dhiraj Gaikwad',
        updatedAt: '2026-10-29',
        notes: 'Direct CRM notification webhooks to leasing officers in < 90 seconds.',
      },
      {
        id: 'stg-102-3',
        name: 'Stage 03: Executive Client Final Walkthrough',
        status: 'IN_PROGRESS',
        listedBy: 'Kaustubh Ronge',
        updatedAt: '2026-11-02',
        notes: 'Final director sign-off and custom domain DNS mapping.',
      },
    ],
    checklist: [
      {
        id: 'chk-102-1',
        text: 'Sub-second Next.js 16 Edge architecture with SVG floor plans',
        done: true,
        addedBy: 'Dhiraj Gaikwad',
      },
      {
        id: 'chk-102-2',
        text: 'Virtual office unit specifications with dynamic square-foot rate calculator',
        done: true,
        addedBy: 'Dhiraj Gaikwad',
      },
      {
        id: 'chk-102-3',
        text: 'Automated tenant inquiry webhooks routing to leasing directors in < 90s',
        done: true,
        addedBy: 'Dhiraj Gaikwad',
      },
      {
        id: 'chk-102-4',
        text: 'Client director walkthrough & final DNS domain handover',
        done: false,
        addedBy: 'Kaustubh Ronge',
      },
    ],
  },
  {
    id: 'prj-103',
    title: 'HaruViru Meta Advantage+ & ROAS Scaling Pod',
    department: 'Marketing',
    category: 'Performance Marketing',
    clientName: 'HaruViru Natural Foods',
    clientEmail: 'founder@haruviru.com',
    clientPhone: '+91 98450 11223',
    assignedTo: 'Shreya Jagtap',
    progress: 60,
    status: 'IN_PROGRESS',
    budget: '₹3,50,000 / mo',
    targetDelivery: 'Ongoing Sprint Retainer',
    requirements:
      'Full-funnel Meta Advantage+ Shopping ads, Google PMax exact intent targeting, WhatsApp automated abandoned cart recovery, and weekly ROAS telemetry targeting 4.8x+ return.',
    stages: [
      {
        id: 'stg-103-1',
        name: 'Stage 01: Meta CAPI Tracking & Server Sync',
        status: 'COMPLETED',
        listedBy: 'Shreya Jagtap',
        updatedAt: '2026-10-22',
        notes: 'Server-side event sync eliminating iOS ad attribution loss.',
      },
      {
        id: 'stg-103-2',
        name: 'Stage 02: Advantage+ Shopping & Video Hooks',
        status: 'IN_PROGRESS',
        listedBy: 'Shreya Jagtap',
        updatedAt: '2026-11-01',
        notes: 'A/B testing 3 raw honey gift pack creative bundles.',
      },
      {
        id: 'stg-103-3',
        name: 'Stage 03: Abandoned Checkout WhatsApp Automation',
        status: 'PENDING',
        listedBy: 'Vijay Patil',
        updatedAt: '2026-11-02',
        notes: 'Targeting 28% recovery on high-intent cart abandons.',
      },
    ],
    checklist: [
      {
        id: 'chk-103-1',
        text: 'Full-funnel Meta Advantage+ Shopping campaign structure',
        done: true,
        addedBy: 'Shreya Jagtap',
      },
      {
        id: 'chk-103-2',
        text: 'Meta Conversions API (CAPI) server-side event sync to eliminate iOS tracking loss',
        done: true,
        addedBy: 'Shreya Jagtap',
      },
      {
        id: 'chk-103-3',
        text: 'WhatsApp automated abandoned checkout recovery sequences',
        done: true,
        addedBy: 'Shreya Jagtap',
      },
      {
        id: 'chk-103-4',
        text: 'High-conversion honey gift box bundle A/B creative testing',
        done: false,
        addedBy: 'Vijay Patil',
      },
      {
        id: 'chk-103-5',
        text: 'Weekly live ROAS telemetry dashboard targeting 4.8x+ return',
        done: false,
        addedBy: 'Shreya Jagtap',
      },
    ],
  },
  {
    id: 'prj-104',
    title: 'Aameena Furniture Google Maps #1 SEO Pack',
    department: 'Marketing',
    category: 'Local SEO & CRO',
    clientName: 'Aameena Furniture Mart',
    clientEmail: 'sales@aameenafurniture.com',
    clientPhone: '+91 97110 99887',
    assignedTo: 'Vijay Patil',
    progress: 50,
    status: 'IN_PROGRESS',
    budget: '₹1,80,000',
    targetDelivery: 'Dec 05, 2026',
    requirements:
      'Regional Google Business Profile 3-pack citation overhaul, high-resolution WebP room catalog optimization, and direct 1-click WhatsApp quote conversion buttons on mobile search.',
    stages: [
      {
        id: 'stg-104-1',
        name: 'Stage 01: Google 3-Pack Citation Audit',
        status: 'COMPLETED',
        listedBy: 'Vijay Patil',
        updatedAt: '2026-10-25',
        notes: 'NAP consistency established across 14 showroom locations.',
      },
      {
        id: 'stg-104-2',
        name: 'Stage 02: Mobile WhatsApp Quote Engine',
        status: 'IN_PROGRESS',
        listedBy: 'Vijay Patil',
        updatedAt: '2026-11-02',
        notes: '1-click quotation links embedded directly in local mobile pack.',
      },
    ],
    checklist: [
      {
        id: 'chk-104-1',
        text: 'Regional Google Business Profile citation sync across 14 showrooms',
        done: true,
        addedBy: 'Vijay Patil',
      },
      {
        id: 'chk-104-2',
        text: 'High-resolution WebP room catalog image compression & lazy loading',
        done: true,
        addedBy: 'Vijay Patil',
      },
      {
        id: 'chk-104-3',
        text: 'Direct 1-click WhatsApp quote conversion buttons on mobile search',
        done: false,
        addedBy: 'Vijay Patil',
      },
      {
        id: 'chk-104-4',
        text: 'Local review solicitation automated SMS sequence',
        done: false,
        addedBy: 'Atharv Malavde',
      },
    ],
  },
  {
    id: 'prj-105',
    title: 'AI Sentiment Intelligence & Review Automation',
    department: 'Developer',
    category: 'Applied AI / NLP',
    clientName: 'Customer Intelligence Lab',
    clientEmail: 'ai@adviks.in',
    clientPhone: '+91 93707 50263',
    assignedTo: 'Kaustubh Ronge',
    progress: 75,
    status: 'IN_PROGRESS',
    budget: '₹7,20,000',
    targetDelivery: 'Nov 25, 2026',
    requirements:
      '180ms inference sentiment classification pipeline, multi-channel review ingestion, context-aware auto-reply generator, and executive dashboard for brand managers.',
    stages: [
      {
        id: 'stg-105-1',
        name: 'Stage 01: 180ms Inference Embeddings & Tokenizer',
        status: 'COMPLETED',
        listedBy: 'Kaustubh Ronge',
        updatedAt: '2026-10-28',
        notes: 'HuggingFace quantized weights deployed on Edge runtime.',
      },
      {
        id: 'stg-105-2',
        name: 'Stage 02: Multi-Channel Ingestion & Context Replies',
        status: 'IN_PROGRESS',
        listedBy: 'Vivek Pawar',
        updatedAt: '2026-11-02',
        notes: 'Real-time webhook ingestion for Google, Amazon, and PlayStore reviews.',
      },
    ],
    checklist: [
      {
        id: 'chk-105-1',
        text: '180ms inference sentiment classification pipeline',
        done: true,
        addedBy: 'Kaustubh Ronge',
      },
      {
        id: 'chk-105-2',
        text: 'Multi-channel customer review ingestion webhook',
        done: true,
        addedBy: 'Vivek Pawar',
      },
      {
        id: 'chk-105-3',
        text: 'Context-aware automated AI response generator with guardrails',
        done: true,
        addedBy: 'Kaustubh Ronge',
      },
      {
        id: 'chk-105-4',
        text: 'Executive brand manager dashboard with real-time sentiment alerts',
        done: false,
        addedBy: 'Vivek Pawar',
      },
    ],
  },
];

const INITIAL_TASKS = [
  // Developer Team Tasks
  {
    id: 'tsk-01',
    title: 'Hardwire WhatsApp Cloud API webhook for instant GST bill dispatch',
    project: 'VyaparStock Multi-Warehouse Billing SaaS',
    department: 'Developer',
    assignedTo: 'Vivek Pawar',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    dueDate: 'Nov 06, 2026',
  },
  {
    id: 'tsk-02',
    title: 'Optimize PostgreSQL Neon DB indexing for 50k item barcode searches',
    project: 'VyaparStock Multi-Warehouse Billing SaaS',
    department: 'Developer',
    assignedTo: 'Dipak Pawar',
    priority: 'URGENT',
    status: 'IN_PROGRESS',
    dueDate: 'Nov 08, 2026',
  },
  {
    id: 'tsk-03',
    title: 'Implement Vercel Edge caching on floor plan SVGs',
    project: 'Paras Business Park Digital Hub & Leasing Engine',
    department: 'Developer',
    assignedTo: 'Dhiraj Gaikwad',
    priority: 'MEDIUM',
    status: 'DONE',
    dueDate: 'Oct 30, 2026',
  },
  {
    id: 'tsk-04',
    title: 'Fine-tune 180ms NLP sentiment embeddings for hospitality reviews',
    project: 'AI Sentiment Intelligence & Review Automation',
    department: 'Developer',
    assignedTo: 'Kaustubh Ronge',
    priority: 'HIGH',
    status: 'DONE',
    dueDate: 'Nov 02, 2026',
  },
  {
    id: 'tsk-05',
    title: 'Configure automated developer sprint velocity reporting',
    project: 'Internal Operations',
    department: 'Developer',
    assignedTo: 'Payal Kharat',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    dueDate: 'Nov 12, 2026',
  },

  // Marketing Team Tasks
  {
    id: 'tsk-06',
    title: 'Setup Meta CAPI server-side event sync to eliminate iOS ad tracking loss',
    project: 'HaruViru Meta Advantage+ & ROAS Scaling Pod',
    department: 'Marketing',
    assignedTo: 'Shreya Jagtap',
    priority: 'URGENT',
    status: 'DONE',
    dueDate: 'Oct 28, 2026',
  },
  {
    id: 'tsk-07',
    title: 'Launch 3 new video hook creatives for D2C raw honey bundle sale',
    project: 'HaruViru Meta Advantage+ & ROAS Scaling Pod',
    department: 'Marketing',
    assignedTo: 'Vijay Patil',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    dueDate: 'Nov 07, 2026',
  },
  {
    id: 'tsk-08',
    title: 'Local Google 3-Pack geo-tagging overhaul across 14 furniture showrooms',
    project: 'Aameena Furniture Google Maps #1 SEO Pack',
    department: 'Marketing',
    assignedTo: 'Vijay Patil',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    dueDate: 'Nov 10, 2026',
  },
  {
    id: 'tsk-09',
    title: 'Cold outreach sequence to Pune & Mumbai logistics founders for ERP SOWs',
    project: 'Internal Commercial Expansion',
    department: 'Marketing',
    assignedTo: 'Atharv Malavde',
    priority: 'HIGH',
    status: 'IN_PROGRESS',
    dueDate: 'Nov 09, 2026',
  },
  {
    id: 'tsk-10',
    title: 'Weekly ROAS & CAC executive client report drafting',
    project: 'HaruViru Meta Advantage+ & ROAS Scaling Pod',
    department: 'Marketing',
    assignedTo: 'Shreya Jagtap',
    priority: 'MEDIUM',
    status: 'DONE',
    dueDate: 'Nov 01, 2026',
  },
];

// Helper to normalize any existing projects to ensure stages & checklist arrays exist
function normalizeProjects(rawProjects) {
  if (!Array.isArray(rawProjects)) return INITIAL_PROJECTS;
  return rawProjects.map((p) => {
    const checklist = Array.isArray(p.checklist) ? p.checklist : [];
    const stages = Array.isArray(p.stages)
      ? p.stages
      : [
          {
            id: `stg-${p.id}-0`,
            name: 'Stage 00: Inception & Scope Definition',
            status: 'IN_PROGRESS',
            listedBy: p.assignedTo || 'Founder',
            updatedAt: '2026-11-01',
            notes: 'Project initiated and registered.',
          },
        ];
    const total = checklist.length;
    const done = checklist.filter((c) => c.done).length;
    const progress = total > 0 ? Math.round((done / total) * 100) : (p.progress || 0);
    return {
      ...p,
      checklist,
      stages,
      progress,
    };
  });
}

export function EmployeeAuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('adviks_employee_user');
        if (stored) return JSON.parse(stored);
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }
    return null;
  });

  const [teamMembers, setTeamMembers] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('adviks_team_profiles');
        if (stored) return JSON.parse(stored);
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }
    return INITIAL_TEAM_MEMBERS;
  });

  const [projects, setProjects] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('adviks_admin_projects');
        if (stored) {
          const parsed = JSON.parse(stored);
          return normalizeProjects(parsed);
        }
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }
    return INITIAL_PROJECTS;
  });

  const [tasks, setTasks] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('adviks_admin_tasks');
        if (stored) return JSON.parse(stored);
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }
    }
    return INITIAL_TASKS;
  });

  const hydrated = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  // Save updates to localStorage
  const saveTeamMembers = (updated) => {
    setTeamMembers(updated);
    try {
      localStorage.setItem('adviks_team_profiles', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const saveProjects = (updated) => {
    setProjects(updated);
    try {
      localStorage.setItem('adviks_admin_projects', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const saveTasks = (updated) => {
    setTasks(updated);
    try {
      localStorage.setItem('adviks_admin_tasks', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Login handler with access restrictions
  const login = (name, position, department = 'Developer', accessCode = '') => {
    const validCodes = ['ADVIKS2026', 'FOUNDER2026', 'DEMO2026', 'adviks2026'];
    const normalizedCode = accessCode.trim();

    if (!validCodes.includes(normalizedCode)) {
      return {
        success: false,
        error: 'Invalid Employee Access Key. (Authorized testing code is: ADVIKS2026)',
      };
    }

    if (!name || !position) {
      return { success: false, error: 'Full name and official position are required.' };
    }

    // Match or create member profile
    const existing = teamMembers.find(
      (m) => m.name.toLowerCase() === name.trim().toLowerCase()
    );

    const userObj = {
      id: existing ? existing.id : name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: name.trim(),
      position: position.trim(),
      department: department || (existing ? existing.department : 'Developer'),
      isSuperAdmin:
        name.toLowerCase().includes('vivek') ||
        name.toLowerCase().includes('kaustubh') ||
        position.toLowerCase().includes('ceo') ||
        position.toLowerCase().includes('cto'),
      loggedInAt: new Date().toISOString(),
    };

    setCurrentUser(userObj);
    try {
      localStorage.setItem('adviks_employee_user', JSON.stringify(userObj));
    } catch (e) {
      console.error(e);
    }

    return { success: true, user: userObj };
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('adviks_employee_user');
    } catch (e) {
      console.error(e);
    }
  };

  // Update member profile
  const updateMemberProfile = (memberId, fields) => {
    const updated = teamMembers.map((m) =>
      m.id === memberId || m.name.toLowerCase() === memberId.toLowerCase()
        ? { ...m, ...fields }
        : m
    );
    saveTeamMembers(updated);
    return true;
  };

  // Add new project
  const addProject = (projectData) => {
    const initialChecklist = Array.isArray(projectData.checklist) ? projectData.checklist : [];
    const total = initialChecklist.length;
    const done = initialChecklist.filter((c) => c.done).length;
    const calculatedProgress = total > 0 ? Math.round((done / total) * 100) : 0;

    const initialStages = Array.isArray(projectData.stages) && projectData.stages.length > 0
      ? projectData.stages
      : [
          {
            id: `stg-${Date.now()}-0`,
            name: 'Stage 00: Inception & Scope Definition',
            status: 'IN_PROGRESS',
            listedBy: projectData.assignedTo || currentUser?.name || 'Founder',
            updatedAt: new Date().toISOString().split('T')[0],
            notes: 'Project requirements and checklist registered.',
          },
        ];

    const newProject = {
      id: `prj-${Math.floor(100 + Math.random() * 900)}`,
      createdAt: new Date().toISOString(),
      progress: calculatedProgress,
      status: calculatedProgress === 100 ? 'COMPLETED' : calculatedProgress > 0 ? 'IN_PROGRESS' : 'PLANNING',
      stages: initialStages,
      checklist: initialChecklist,
      ...projectData,
    };
    const updated = [newProject, ...projects];
    saveProjects(updated);
    return newProject;
  };

  // Update project general fields
  const updateProject = (projectId, fields) => {
    const updated = projects.map((p) =>
      p.id === projectId ? { ...p, ...fields } : p
    );
    saveProjects(updated);
  };

  // 1. Checklist Items management (dynamic completion % calculation)
  const toggleChecklistItem = (projectId, checklistId) => {
    const updated = projects.map((p) => {
      if (p.id !== projectId) return p;
      const oldChecklist = p.checklist || [];
      const newChecklist = oldChecklist.map((c) =>
        c.id === checklistId ? { ...c, done: !c.done } : c
      );
      const total = newChecklist.length;
      const done = newChecklist.filter((c) => c.done).length;
      const newProgress = total > 0 ? Math.round((done / total) * 100) : 0;
      const newStatus =
        newProgress === 100 ? 'COMPLETED' : newProgress > 0 ? 'IN_PROGRESS' : 'PLANNING';
      return {
        ...p,
        checklist: newChecklist,
        progress: newProgress,
        status: newStatus,
      };
    });
    saveProjects(updated);
  };

  const addChecklistItem = (projectId, text, addedBy) => {
    if (!text || !text.trim()) return;
    const updated = projects.map((p) => {
      if (p.id !== projectId) return p;
      const oldChecklist = p.checklist || [];
      const newItem = {
        id: `chk-${Date.now()}-${Math.floor(Math.random() * 100)}`,
        text: text.trim(),
        done: false,
        addedBy: addedBy || currentUser?.name || 'Team Member',
      };
      const newChecklist = [...oldChecklist, newItem];
      const total = newChecklist.length;
      const done = newChecklist.filter((c) => c.done).length;
      const newProgress = total > 0 ? Math.round((done / total) * 100) : 0;
      const newStatus =
        newProgress === 100 ? 'COMPLETED' : newProgress > 0 ? 'IN_PROGRESS' : 'PLANNING';
      return {
        ...p,
        checklist: newChecklist,
        progress: newProgress,
        status: newStatus,
      };
    });
    saveProjects(updated);
  };

  const deleteChecklistItem = (projectId, checklistId) => {
    const updated = projects.map((p) => {
      if (p.id !== projectId) return p;
      const oldChecklist = p.checklist || [];
      const newChecklist = oldChecklist.filter((c) => c.id !== checklistId);
      const total = newChecklist.length;
      const done = newChecklist.filter((c) => c.done).length;
      const newProgress = total > 0 ? Math.round((done / total) * 100) : 0;
      const newStatus =
        newProgress === 100 ? 'COMPLETED' : newProgress > 0 ? 'IN_PROGRESS' : 'PLANNING';
      return {
        ...p,
        checklist: newChecklist,
        progress: newProgress,
        status: newStatus,
      };
    });
    saveProjects(updated);
  };

  // 2. Stages Record management (stage name, listedBy author, status, notes)
  const addProjectStage = (projectId, stageData) => {
    const updated = projects.map((p) => {
      if (p.id !== projectId) return p;
      const oldStages = p.stages || [];
      const newStage = {
        id: `stg-${Date.now()}-${Math.floor(Math.random() * 100)}`,
        name: stageData.name.trim(),
        status: stageData.status || 'PENDING',
        listedBy: stageData.listedBy || currentUser?.name || 'Founder',
        updatedAt: new Date().toISOString().split('T')[0],
        notes: stageData.notes || '',
      };
      return {
        ...p,
        stages: [...oldStages, newStage],
      };
    });
    saveProjects(updated);
  };

  const updateProjectStage = (projectId, stageId, fields) => {
    const updated = projects.map((p) => {
      if (p.id !== projectId) return p;
      const oldStages = p.stages || [];
      const newStages = oldStages.map((s) =>
        s.id === stageId
          ? {
              ...s,
              ...fields,
              updatedAt: new Date().toISOString().split('T')[0],
              listedBy: currentUser?.name || s.listedBy,
            }
          : s
      );
      return {
        ...p,
        stages: newStages,
      };
    });
    saveProjects(updated);
  };

  const deleteProjectStage = (projectId, stageId) => {
    const updated = projects.map((p) => {
      if (p.id !== projectId) return p;
      const oldStages = p.stages || [];
      return {
        ...p,
        stages: oldStages.filter((s) => s.id !== stageId),
      };
    });
    saveProjects(updated);
  };

  // 3. Task management
  const addTask = (taskData) => {
    const newTask = {
      id: `tsk-${Math.floor(10 + Math.random() * 90)}`,
      status: taskData.status || 'TODO',
      ...taskData,
    };
    const updated = [newTask, ...tasks];
    saveTasks(updated);
    return newTask;
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updated = tasks.map((t) =>
      t.id === taskId ? { ...t, status: newStatus } : t
    );
    saveTasks(updated);
  };

  return (
    <EmployeeAuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        teamMembers,
        updateMemberProfile,
        projects,
        addProject,
        updateProject,
        toggleChecklistItem,
        addChecklistItem,
        deleteChecklistItem,
        addProjectStage,
        updateProjectStage,
        deleteProjectStage,
        tasks,
        addTask,
        updateTaskStatus,
        hydrated,
      }}
    >
      {children}
    </EmployeeAuthContext.Provider>
  );
}

export function useEmployeeAuth() {
  const context = useContext(EmployeeAuthContext);
  if (!context) {
    throw new Error('useEmployeeAuth must be used within an EmployeeAuthProvider');
  }
  return context;
}
