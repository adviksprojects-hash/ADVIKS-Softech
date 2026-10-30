import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Code2,
  Smartphone,
  CloudCog,
  BrainCircuit,
  DatabaseZap,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: 'web-development',
      icon: Code2,
      title: 'Full-Stack Web & SaaS Engineering',
      tagline: 'Modern, high-velocity web platforms built with Next.js, React, Node, and PostgreSQL.',
      capabilities: [
        'Custom SaaS Architectures (Multi-tenant, RBAC)',
        'Next.js SSR/SSG for ultra-fast SEO and performance',
        'RESTful & GraphQL API design with rate-limiting & caching',
        'Progressive Web Apps (PWA) with offline capabilities',
      ],
      tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Native & Cross-Platform Mobile Apps',
      tagline: 'Production-ready iOS and Android applications built for enterprise performance.',
      capabilities: [
        'React Native & Flutter cross-platform development',
        'Offline data synchronization & push notifications',
        'Hardware integrations (Bluetooth, Camera, GPS, Biometrics)',
        'App Store and Google Play publishing & compliance',
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      id: 'cloud-devops',
      icon: CloudCog,
      title: 'Cloud Infrastructure & DevOps',
      tagline: 'Automated, resilient cloud platforms engineered for zero-downtime scalability.',
      capabilities: [
        'AWS, Google Cloud & Azure infrastructure as code (Terraform)',
        'Docker containerization & Kubernetes cluster orchestration',
        'Automated CI/CD pipelines (GitHub Actions, GitLab CI)',
        '24/7 observability, APM monitoring & incident alerts',
      ],
      tech: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus'],
    },
    {
      id: 'ai-ml',
      icon: BrainCircuit,
      title: 'Artificial Intelligence & Machine Learning',
      tagline: 'Practical AI implementations to automate processes and generate competitive intelligence.',
      capabilities: [
        'Custom Large Language Model (LLM) fine-tuning & RAG architectures',
        'Automated enterprise workflows & intelligent agentic systems',
        'Computer vision, document OCR, and automated parsing',
        'Predictive analytics & real-time anomaly detection',
      ],
      tech: ['Python', 'PyTorch', 'OpenAI', 'LangChain', 'FastAPI', 'Vector DBs'],
    },
    {
      id: 'enterprise-erp',
      icon: DatabaseZap,
      title: 'Enterprise ERP & Custom CRM Solutions',
      tagline: 'Digital nerve systems tailored to your specific organizational operations.',
      capabilities: [
        'Centralized inventory, supply chain, and order tracking',
        'Integrated billing, manual invoice workflows, and tax compliance',
        'Automated customer journey tracking and ticket helpdesks',
        'Legacy data migration & enterprise API middleware',
      ],
      tech: ['PostgreSQL', 'Neon DB', 'Prisma', 'Microservices', 'Apache Kafka'],
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      title: 'Cybersecurity, Code Audits & Compliance',
      tagline: 'Rigorous penetration testing and security architecture to protect your mission-critical data.',
      capabilities: [
        'Static & dynamic application security testing (SAST/DAST)',
        'Vulnerability assessments & penetration testing (VAPT)',
        'SOC2, ISO 27001, and GDPR compliance architectural reviews',
        'Identity & access management (IAM), OAuth2, and MFA integration',
      ],
      tech: ['OWASP ZAP', 'Snyk', 'SonarQube', 'Clerk Auth', 'Vault'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Our Expertise
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Engineering Services
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              We design, build, deploy, and maintain bespoke software systems tailored to high-growth startups and established corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceOfferings.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{svc.title}</h2>
                    <p className="text-sm text-slate-400 mb-6">{svc.tagline}</p>

                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Core Capabilities:
                    </h4>
                    <ul className="space-y-2.5 mb-8">
                      {svc.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 mb-6">
                      {svc.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-blue-900/30 bg-gradient-to-r from-blue-950/60 to-slate-900 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Need a Custom Architecture or Team Augmentation?
            </h3>
            <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">
              We provide dedicated engineering pods with senior project managers, tech leads, and QA specialists ready to embed into your operations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-colors"
              >
                Schedule Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
