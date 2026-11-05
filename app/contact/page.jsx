'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowRight, Globe, Phone } from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service');
  const initialService = useMemo(() => {
    if (!preselectedService) return 'Custom Web & SaaS Platform';
    const s = preselectedService.toLowerCase();
    if (s.includes('market') || s.includes('growth')) return 'Performance Marketing (PPC & ROAS)';
    if (s.includes('saas') || s.includes('web')) return 'Custom Web & SaaS Platform';
    if (s.includes('mobile')) return 'Mobile App Development (iOS/Android)';
    if (s.includes('ai')) return 'AI Sentiment & NLP System';
    return 'Custom Web & SaaS Platform';
  }, [preselectedService]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: initialService,
    budgetRange: '₹1,50,000 - ₹5,00,000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or email us directly at advikssoftech@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Contact Details Card */}
      <div className="lg:col-span-5 space-y-8">
        <div className="p-8 rounded-3xl border border-[#E2E8F0] bg-white shadow-xs space-y-6">
          <h3 className="text-xl font-extrabold text-[#0A224E]">Direct Contacts</h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Have an RFP, urgent consultation, or marketing inquiry? Reach out directly via WhatsApp, email, or our verified social channels.
          </p>

          <div className="space-y-4 pt-2">
            {/* WhatsApp Click-to-Chat Button with Explicit Number */}
            <a
              href="https://wa.me/919370750263?text=Hi%20ADVIKS%20Softech%20team%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FFF7ED] border border-orange-200 hover:border-[#FF8800] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF8800] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-[#EA580C] font-extrabold uppercase tracking-wider">Fastest Response</div>
                <div className="text-sm font-extrabold text-[#0A224E] group-hover:text-[#EA580C] transition-colors flex items-center gap-1">
                  <span>Chat on WhatsApp: +91 93707 50263</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>

            {/* Direct Telephone Lines */}
            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Direct Executive Lines</div>
                <div className="space-y-1 mt-0.5">
                  <a
                    href="tel:+919370750263"
                    className="block text-sm font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors"
                  >
                    +91 93707 50263 <span className="text-[11px] text-slate-400 font-normal">(Primary Business)</span>
                  </a>
                  <a
                    href="tel:+919325646429"
                    className="block text-sm font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors"
                  >
                    +91 93256 46429 <span className="text-[11px] text-slate-400 font-normal">(Technical Architecture)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Official Email</div>
                <a
                  href="mailto:advikssoftech@gmail.com"
                  className="text-sm font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors"
                >
                  advikssoftech@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-[#EA580C] shrink-0">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Instagram Brand Hub</div>
                <a
                  href="https://www.instagram.com/adviks_softech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#0A224E] hover:text-[#EA580C] transition-colors"
                >
                  @adviks_softech
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-blue-200 flex items-center justify-center text-[#0062E6] shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Company LinkedIn</div>
                <a
                  href="https://www.linkedin.com/company/adviks-software-solutions/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors"
                >
                  Adviks Software Solutions
                </a>
              </div>
            </div>

            {/* Official Web Portal */}
            <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A224E] shrink-0">
                <Globe className="w-5 h-5 text-[#0062E6]" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Web Portal</div>
                <a
                  href="https://adviks-softech.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#0A224E] hover:text-[#0062E6] transition-colors"
                >
                  adviks-softech.vercel.app
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Notice */}
        <div className="p-6 rounded-3xl border border-blue-200 bg-[#EFF6FF] text-xs text-[#475569] space-y-2">
          <span className="font-extrabold text-[#0062E6] uppercase tracking-wider block">Notice For Clients</span>
          <p>
            ADVIKS Softech processes invoices via corporate direct bank transfer (NEFT/RTGS/IMPS). Existing clients can view invoice payment instructions and log transaction UTRs directly in their <span className="text-[#0A224E] font-bold">Client Dashboard</span>.
          </p>
        </div>
      </div>

      {/* Interactive Form */}
      <div className="lg:col-span-7">
        <div className="p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] bg-white shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#0A224E]">Inquiry Received!</h3>
              <p className="text-[#475569] max-w-md mx-auto text-sm leading-relaxed">
                Thank you for contacting ADVIKS Softech. Our solutions team has received your project parameters and will reach out within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceInterest: initialService,
                    budgetRange: '₹1,50,000 - ₹5,00,000',
                    message: '',
                  });
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-[#0A224E] hover:bg-[#0062E6] text-sm font-bold text-white transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Metro Retail Corp"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                    Service Interest
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors font-medium"
                  >
                    <option value="Custom Web & SaaS Platform">Custom Web & SaaS Platform</option>
                    <option value="Performance Marketing (PPC & ROAS)">Performance Marketing (PPC & ROAS)</option>
                    <option value="Mobile App Development (iOS/Android)">Mobile App Development (iOS/Android)</option>
                    <option value="VyaparStock ERP / Custom Billing">VyaparStock ERP / Custom Billing</option>
                    <option value="AI Sentiment & NLP System">AI Sentiment & NLP System</option>
                    <option value="Technical SEO & Search Dominance">Technical SEO & Search Dominance</option>
                    <option value="Dedicated Full-Stack Pod">Dedicated Full-Stack Pod</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                    Target Budget Range
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors font-medium"
                  >
                    <option value="₹45,000 - ₹1,50,000">₹45,000 - ₹1,50,000</option>
                    <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000</option>
                    <option value="₹5,00,000 - ₹12,00,000">₹5,00,000 - ₹12,00,000</option>
                    <option value="₹12,00,000+ Enterprise">₹12,00,000+ Enterprise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A224E] mb-2">
                  Project Scope / Goals
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your target features, deadlines, or existing tech stack..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm text-[#0A224E] focus:outline-hidden focus:border-[#0062E6] focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#FF8800] hover:from-[#EA580C] hover:to-[#EA580C] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Transmitting Project Parameters...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569]">
      <Navbar />

      <main className="flex-1 pt-12 pb-16 md:pt-8 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-[#0062E6] uppercase">
              Get In Touch
            </span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-[#0A224E] tracking-tight">
              Start Your Project With ADVIKS Softech
            </h1>
            <p className="mt-4 text-[#475569] text-base">
              Tell us about your technical requirements or marketing goals. Our solutions team will respond within 24 hours.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-12 text-slate-500">Loading inquiry form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
