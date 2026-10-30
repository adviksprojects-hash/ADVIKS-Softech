'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Building2,
  ShoppingBag,
  Zap,
  Globe,
  Activity,
  Check,
  MessageSquare,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProductId, setSelectedProductId] = useState('vyaparstock');
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  // Live sentiment tester state for AI Review System
  const [customReview, setCustomReview] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);

  const products = [
    {
      id: 'vyaparstock',
      name: 'VyaparStock Cloud',
      tagline: 'Enterprise Billing, GST Invoicing & Inventory Control SaaS',
      category: 'saas',
      badge: 'Flagship In-House SaaS',
      status: 'Live in Production',
      liveUrl: 'https://www.vyaparstock.in',
      githubUrl: 'https://github.com/adviksprojects-hash',
      stats: [
        { label: 'Invoice Generation', val: '< 2 Sec' },
        { label: 'Uptime SLA', val: '99.98%' },
        { label: 'GST Compliance', val: '100% Ready' },
      ],
      description:
        'A comprehensive cloud ERP & POS platform built for wholesalers and retail merchants. Features real-time multi-warehouse stock ledgers, automated GST invoice dispatch via WhatsApp, and low-inventory triggers.',
      techStack: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Cloud API', 'TypeScript'],
      interactiveTabs: [
        {
          title: 'Smart Billing POS',
          desc: 'Instant digital invoice creation with dynamic GST calculation and customer ledger updates.',
          mockView: {
            type: 'billing',
            invoiceNo: 'INV-2026-0849',
            customer: 'Metro Electronics Wholesalers',
            items: [
              { name: 'Industrial IoT Sensor Pack', qty: 4, rate: '₹3,200', gst: '18%', total: '₹15,096' },
              { name: 'Cloud Gateway Hub (v2)', qty: 2, rate: '₹5,800', gst: '18%', total: '₹13,688' },
            ],
            grandTotal: '₹28,784',
          },
        },
        {
          title: 'Real-Time Stock Ledger',
          desc: 'Real-time stock alerts, SKU barcode scanning, and multi-location inventory reconciliation.',
          mockView: {
            type: 'stock',
            items: [
              { name: 'Microcontroller Unit Rev A', sku: 'MCU-9901', inStock: 420, status: 'Optimal' },
              { name: 'Fiber Patch Cable 10m', sku: 'FPC-1020', inStock: 14, status: 'Low Stock Alert' },
              { name: 'Thermal Receipt Rolls', sku: 'TRR-5541', inStock: 850, status: 'Optimal' },
            ],
          },
        },
        {
          title: 'WhatsApp Dispatch',
          desc: 'Instant PDF invoice dispatch and payment reminder workflows sent straight to customers.',
          mockView: {
            type: 'whatsapp',
            recipient: '+91 98230 XXXXX',
            msgPreview: 'Dear Client, thank you for your business. Your invoice INV-2026-0849 for ₹28,784 is ready. Download PDF: vyaparstock.in/inv/849',
          },
        },
      ],
    },
    {
      id: 'ai-review-system',
      name: 'AI Review & Sentiment Engine',
      tagline: 'Intelligent Feedback Classification & Automated Response AI',
      category: 'ai',
      badge: 'AI / NLP Platform',
      status: 'Live Vercel Deployment',
      liveUrl: 'https://ai-review-system-bay.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/AI-Review-System',
      stats: [
        { label: 'Classification Speed', val: '180ms' },
        { label: 'Accuracy Score', val: '97.4%' },
        { label: 'Sentiment Categories', val: 'Multi-Class' },
      ],
      description:
        'A high-performance machine learning feedback engine. Ingests customer reviews across Google, Trustpilot, and apps to categorize sentiment, isolate product pain points, and generate automated context-aware replies.',
      techStack: ['TypeScript', 'React', 'Next.js', 'NLP Pipeline', 'Tailwind'],
      interactiveTabs: [
        {
          title: 'Real-Time Sentiment Classifier',
          desc: 'Try our live model preview by selecting a customer review to run automated inference.',
          mockView: {
            type: 'sentiment_demo',
          },
        },
        {
          title: 'Automated AI Response',
          desc: 'Drafts human-like, empathetic response templates tailored to customer satisfaction ratings.',
          mockView: {
            type: 'ai_reply',
            review: '"The platform migration was flawless, delivery completed 4 days ahead of sprint schedule!"',
            reply: '"Thank you for your high-trust partnership! Our engineering team takes pride in beating milestone timelines while maintaining zero production defect rates."',
          },
        },
        {
          title: 'CSAT Trend Dashboard',
          desc: 'Actionable customer intelligence graphs categorizing sentiment across product features.',
          mockView: {
            type: 'csat_metrics',
            metrics: [
              { label: 'Positive Experience', pct: '88%', color: 'bg-emerald-500' },
              { label: 'Feature Suggestions', pct: '9%', color: 'bg-blue-500' },
              { label: 'Critical Resolution', pct: '3%', color: 'bg-amber-500' },
            ],
          },
        },
      ],
    },
    {
      id: 'paras-business-park',
      name: 'Paras Business Park',
      tagline: 'High-Performance Commercial Corporate Real Estate Hub',
      category: 'realestate',
      badge: 'Commercial Enterprise',
      status: 'Live Vercel Deployment',
      liveUrl: 'https://paras-business-park-2.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/paras-business-park-2',
      stats: [
        { label: 'Page Load Speed', val: '0.6s' },
        { label: 'Inquiry Conversion', val: '+44%' },
        { label: 'Architecture', val: 'Next.js 15' },
      ],
      description:
        'Modern digital leasing and property presentation portal built for premium corporate office spaces. Features interactive floor plan navigators, virtual unit specs, and high-intent tenant inquiry capture funnels.',
      techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel Edge'],
      interactiveTabs: [
        {
          title: 'Interactive Floor Specs',
          desc: 'Explore unit configurations, square footage, and ready-to-move corporate amenities.',
          mockView: {
            type: 'specs',
            units: [
              { tower: 'Tower A - 6th Floor', sqft: '14,500 sq.ft.', type: 'Executive Tech Suite', status: 'Available' },
              { tower: 'Tower B - Penthouse', sqft: '8,200 sq.ft.', type: 'Bespoke Corporate HQ', status: 'Reserved' },
              { tower: 'Tower C - Ground Floor', sqft: '6,400 sq.ft.', type: 'Retail & Banking Space', status: 'Available' },
            ],
          },
        },
        {
          title: 'Tenant Leasing Funnel',
          desc: 'Direct digital lead intake with automated routing to commercial leasing directors.',
          mockView: {
            type: 'lead_funnel',
            inquiry: 'Corporate Lease Inquiry #PBP-492',
            company: 'National Cloud Infrastructure Corp',
            interest: 'Full Floor Tech Suite (Tower A)',
            status: 'Qualified Prospect (Auto-Synced to CRM)',
          },
        },
      ],
    },
    {
      id: 'haruviru-gold-honey',
      name: 'HaruViru Gold Honey',
      tagline: 'D2C Organic Wellness & High-Conversion E-Commerce Store',
      category: 'ecommerce',
      badge: 'D2C E-Commerce & Growth',
      status: 'Live Vercel Deployment',
      liveUrl: 'https://haru-viru-gold-honey.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/HaruViru-Gold-Honey',
      stats: [
        { label: 'Checkout Velocity', val: 'Sub-second' },
        { label: 'Mobile Cart CRO', val: '+38%' },
        { label: 'Tracking', val: 'Meta CAPI' },
      ],
      description:
        'Modern consumer storefront for organic honey and raw wellness foods. Engineered with friction-free mobile checkouts, instant WhatsApp order notifications, and ad tracking integrations.',
      techStack: ['Next.js', 'Tailwind CSS', 'WhatsApp Business', 'Meta Ads Pixel'],
      interactiveTabs: [
        {
          title: 'High-Converting Checkout',
          desc: 'Streamlined 1-step checkout process designed to eliminate cart abandonment.',
          mockView: {
            type: 'cart',
            product: 'HaruViru Raw Wild Forest Honey (500g)',
            price: '₹599',
            badge: '100% Raw Certified',
            upsell: 'Add Organic Bee Pollen (+₹299)',
          },
        },
        {
          title: 'Growth Tracking Engine',
          desc: 'Full-funnel Meta and Google ad pixel telemetry tracking ROAS on every purchase.',
          mockView: {
            type: 'growth',
            roas: '5.2x Average ROAS',
            cpa: '₹142 Acquisition Cost',
            repeatRate: '41% Customer Re-order',
          },
        },
      ],
    },
    {
      id: 'aameena-furniture',
      name: 'Aameena Furniture',
      tagline: 'Digital Showroom & Bespoke Interior Quotation Engine',
      category: 'ecommerce',
      badge: 'Interior Catalog',
      status: 'Live Vercel Deployment',
      liveUrl: 'https://aameena-ferniture.vercel.app',
      githubUrl: 'https://github.com/adviksprojects-hash/Aameena-Ferniture',
      stats: [
        { label: 'Catalog Assets', val: '120+ Items' },
        { label: 'Lead Velocity', val: '< 60 Sec' },
        { label: 'Image Load', val: 'Instant WebP' },
      ],
      description:
        'Interactive digital showroom catalog enabling homeowners and corporate architects to explore custom living, bedroom, and office setups with direct WhatsApp quotation requests.',
      techStack: ['JavaScript', 'Next.js', 'Tailwind CSS', 'WhatsApp API'],
      interactiveTabs: [
        {
          title: 'Bespoke Quotation Flow',
          desc: 'Instant dimension selection with automated quote dispatch via WhatsApp.',
          mockView: {
            type: 'quote',
            category: 'Modular Executive L-Shaped Desk',
            wood: 'Grade-A Teak & Powder-Coated Steel',
            quoteStatus: 'WhatsApp Instant Spec Dispatch',
          },
        },
      ],
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const selectedProduct =
    products.find((p) => p.id === selectedProductId) || products[0];

  const handleRunSentiment = (sampleText) => {
    setCustomReview(sampleText);
    if (sampleText.toLowerCase().includes('great') || sampleText.toLowerCase().includes('love') || sampleText.toLowerCase().includes('fast') || sampleText.toLowerCase().includes('best')) {
      setSentimentResult({ sentiment: 'Positive (99.2% confidence)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' });
    } else if (sampleText.toLowerCase().includes('slow') || sampleText.toLowerCase().includes('bug') || sampleText.toLowerCase().includes('error')) {
      setSentimentResult({ sentiment: 'Negative / Urgent (96.8% confidence)', color: 'text-rose-700 bg-rose-50 border-rose-200' });
    } else {
      setSentimentResult({ sentiment: 'Neutral Inquiry (94.1% confidence)', color: 'text-blue-700 bg-blue-50 border-blue-200' });
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: 'all', label: 'All Shipped Products' },
          { id: 'saas', label: 'Enterprise SaaS & ERP' },
          { id: 'ai', label: 'AI & Sentiment Engines' },
          { id: 'realestate', label: 'Commercial Real Estate' },
          { id: 'ecommerce', label: 'D2C & Catalog Portals' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-105'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Interactive Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Product Selector Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 px-1">
            Select a Shipped Product to Inspect:
          </div>

          {filteredProducts.map((prod) => {
            const isSelected = prod.id === selectedProduct.id;
            return (
              <div
                key={prod.id}
                onClick={() => {
                  setSelectedProductId(prod.id);
                  setActiveFeatureTab(0);
                  setSentimentResult(null);
                }}
                className={`cursor-pointer rounded-2xl p-5 border text-left transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20 translate-x-1'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {prod.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{prod.status}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center justify-between">
                  <span>{prod.name}</span>
                  {isSelected && <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {prod.tagline}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1">
                  {prod.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] rounded bg-slate-100 text-slate-600 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Interactive Browser Frame & Live Preview (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-300 bg-white shadow-xl overflow-hidden sticky top-24 transition-all duration-300">
            {/* Browser Top Bar */}
            <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>

              {/* URL Address Pill */}
              <div className="flex-1 max-w-md mx-4">
                <div className="flex items-center justify-center gap-2 bg-white px-3 py-1 rounded-lg border border-slate-200 text-xs text-slate-600 font-mono shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{selectedProduct.liveUrl}</span>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Active</span>
              </div>
            </div>

            {/* Product Meta Header */}
            <div className="p-6 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {selectedProduct.badge}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500">Live Client Build</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                    {selectedProduct.name}
                  </h2>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={selectedProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs hover:scale-105"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={selectedProduct.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Verified Product Metrics Strip */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {selectedProduct.stats.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-center"
                  >
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                      {st.val}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Feature Tabs */}
            <div className="p-6 bg-white">
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                Explore Shipped Architecture & Features:
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProduct.interactiveTabs.map((tab, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => setActiveFeatureTab(tIdx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      activeFeatureTab === tIdx
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Dynamic Feature Sandbox Preview */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 min-h-[220px]">
                {/* Current Tab Info */}
                <div className="text-xs text-slate-600 mb-4 pb-3 border-b border-slate-200 font-medium">
                  {selectedProduct.interactiveTabs[activeFeatureTab]?.desc}
                </div>

                {/* Conditional View by Type */}
                {/* 1. VyaparStock Billing Mock */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'billing' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-600 pb-2 border-b border-slate-200">
                      <span>Invoice: {selectedProduct.interactiveTabs[activeFeatureTab].mockView.invoiceNo}</span>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Paid & Reconciled
                      </span>
                    </div>
                    <div className="text-slate-800 font-sans font-semibold">
                      Client: {selectedProduct.interactiveTabs[activeFeatureTab].mockView.customer}
                    </div>
                    <div className="space-y-1.5 pt-1">
                      {selectedProduct.interactiveTabs[activeFeatureTab].mockView.items.map((it, i) => (
                        <div key={i} className="flex justify-between text-slate-600 text-[11px] bg-white p-2 rounded border border-slate-200">
                          <span>{it.name} (x{it.qty})</span>
                          <span className="font-semibold text-slate-900">{it.total}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-200 font-sans font-bold text-sm text-slate-900">
                      <span>Total Invoice Amount (Incl. GST):</span>
                      <span className="text-blue-600">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.grandTotal}</span>
                    </div>
                  </div>
                )}

                {/* 2. Stock Ledger Mock */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'stock' && (
                  <div className="space-y-2 text-xs">
                    {selectedProduct.interactiveTabs[activeFeatureTab].mockView.items.map((stk, i) => (
                      <div key={i} className="flex items-center justify-between p-2.5 rounded bg-white border border-slate-200">
                        <div>
                          <div className="font-semibold text-slate-800">{stk.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">SKU: {stk.sku}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900">{stk.inStock} units</div>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                              stk.status === 'Optimal'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-rose-50 text-rose-700'
                            }`}
                          >
                            {stk.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. WhatsApp Dispatch Mock */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'whatsapp' && (
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Automated WhatsApp Business Gateway</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-emerald-100 text-xs text-slate-700 leading-relaxed shadow-2xs font-sans">
                      {selectedProduct.interactiveTabs[activeFeatureTab].mockView.msgPreview}
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-emerald-700">
                      <span>Status: Delivered & Read</span>
                      <span className="font-mono">WhatsApp Cloud API</span>
                    </div>
                  </div>
                )}

                {/* 4. AI Sentiment Live Tester */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'sentiment_demo' && (
                  <div className="space-y-3 text-xs">
                    <div className="text-slate-700 font-medium">Click a sample review or enter your own:</div>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => handleRunSentiment('The Next.js website loads so fast and our lead volume doubled in 3 weeks!')}
                        className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-[11px] text-slate-700 transition-colors"
                      >
                        Sample 1: &quot;Loads so fast and lead volume doubled!&quot;
                      </button>
                      <button
                        onClick={() => handleRunSentiment('Encountered an inventory barcode sync delay during peak rush hour.')}
                        className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-[11px] text-slate-700 transition-colors"
                      >
                        Sample 2: &quot;Barcode sync delay during rush hour&quot;
                      </button>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={customReview}
                        onChange={(e) => setCustomReview(e.target.value)}
                        placeholder="Type any review text to test sentiment..."
                        className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs focus:outline-hidden focus:border-blue-500"
                      />
                      <button
                        onClick={() => handleRunSentiment(customReview || 'Fantastic engineering and fast support!')}
                        className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700"
                      >
                        Analyze AI
                      </button>
                    </div>

                    {sentimentResult && (
                      <div className={`p-3 rounded-lg border font-semibold text-xs flex items-center justify-between ${sentimentResult.color}`}>
                        <span>Predicted Sentiment:</span>
                        <span>{sentimentResult.sentiment}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* 5. AI Reply Mock */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'ai_reply' && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-white border border-slate-200">
                      <div className="text-slate-500 text-[11px] font-medium mb-1">Customer Review:</div>
                      <div className="text-slate-800 italic">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.review}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200">
                      <div className="text-blue-800 text-[11px] font-bold mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>AI Autopilot Generated Response:</span>
                      </div>
                      <div className="text-slate-700">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.reply}</div>
                    </div>
                  </div>
                )}

                {/* 6. CSAT Metrics Mock */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'csat_metrics' && (
                  <div className="space-y-3 text-xs">
                    {selectedProduct.interactiveTabs[activeFeatureTab].mockView.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between font-medium text-slate-700">
                          <span>{m.label}</span>
                          <span className="font-bold">{m.pct}</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${m.color}`} style={{ width: m.pct }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 7. Real Estate Specs */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'specs' && (
                  <div className="space-y-2 text-xs">
                    {selectedProduct.interactiveTabs[activeFeatureTab].mockView.units.map((u, i) => (
                      <div key={i} className="flex justify-between items-center p-2.5 rounded bg-white border border-slate-200">
                        <div>
                          <div className="font-semibold text-slate-900">{u.tower}</div>
                          <div className="text-slate-500 text-[11px]">{u.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono font-bold text-blue-600">{u.sqft}</div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                            {u.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 8. Lead Funnel */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'lead_funnel' && (
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-semibold text-slate-900">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.inquiry}</span>
                      <span className="text-emerald-600 font-semibold">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.status}</span>
                    </div>
                    <div className="text-slate-600">
                      Company: <strong className="text-slate-900">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.company}</strong>
                    </div>
                    <div className="text-slate-600">
                      Target Space: <strong className="text-slate-900">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.interest}</strong>
                    </div>
                  </div>
                )}

                {/* 9. Cart & D2C */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'cart' && (
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-slate-900">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.product}</div>
                        <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-semibold">
                          {selectedProduct.interactiveTabs[activeFeatureTab].mockView.badge}
                        </span>
                      </div>
                      <div className="font-bold text-base text-blue-600">
                        {selectedProduct.interactiveTabs[activeFeatureTab].mockView.price}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-600 flex justify-between items-center">
                      <span>Upsell Funnel: {selectedProduct.interactiveTabs[activeFeatureTab].mockView.upsell}</span>
                      <span className="text-[11px] font-semibold text-emerald-600">+42% Take Rate</span>
                    </div>
                  </div>
                )}

                {/* 10. Growth tracking */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'growth' && (
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-emerald-600 font-bold text-sm">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.roas}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Paid Return</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-blue-600 font-bold text-sm">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.cpa}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Target CPA</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-purple-600 font-bold text-sm">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.repeatRate}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Customer LTV</div>
                    </div>
                  </div>
                )}

                {/* 11. Quote */}
                {selectedProduct.interactiveTabs[activeFeatureTab]?.mockView?.type === 'quote' && (
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                    <div className="font-bold text-slate-900">{selectedProduct.interactiveTabs[activeFeatureTab].mockView.category}</div>
                    <div className="text-slate-600">Material: {selectedProduct.interactiveTabs[activeFeatureTab].mockView.wood}</div>
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-emerald-700 font-semibold">
                      <span>{selectedProduct.interactiveTabs[activeFeatureTab].mockView.quoteStatus}</span>
                      <span>Connected</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
