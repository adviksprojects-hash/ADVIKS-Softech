'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Custom Web Platform',
    budgetRange: '₹2,00,000 - ₹5,00,000',
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
      setErrorMsg('Network error. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
              Get In Touch
            </span>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Start Your Project With ADVIKS Softech
            </h1>
            <p className="mt-4 text-slate-400 text-base">
              Tell us about your project requirements or technical challenges. Our solutions architect will respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md space-y-6">
                <h3 className="text-xl font-bold text-white">Direct Contacts</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Have an RFP or urgent consultation? Reach out directly via phone or email to speak with our technical team.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email Inquiry</div>
                      <a href="mailto:contact@advikssoftech.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                        contact@advikssoftech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Direct Line</div>
                      <div className="text-sm font-semibold text-white">
                        +91 98765 43210
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Headquarters</div>
                      <div className="text-sm text-slate-300">
                        Tech Park Hub, Bengaluru, Karnataka 560100, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Bank Account Info Note for Clients */}
              <div className="p-6 rounded-2xl border border-blue-900/40 bg-blue-950/20 text-xs text-slate-400 space-y-2">
                <span className="font-semibold text-blue-300 uppercase tracking-wider block">Notice For Clients</span>
                <p>
                  ADVIKS Softech processes invoices via corporate direct bank transfer (NEFT/RTGS/IMPS). Existing clients can view invoice payment instructions and log transaction UTRs directly in their <span className="text-white font-medium">Client Dashboard</span>.
                </p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="text-slate-400 max-w-md mx-auto text-sm">
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
                          serviceInterest: 'Custom Web Platform',
                          budgetRange: '₹2,00,000 - ₹5,00,000',
                          message: '',
                        });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3 text-rose-400 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rahul@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 00000"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="Custom Web Platform">Custom Web Platform</option>
                          <option value="Mobile App Development">Mobile App (iOS/Android)</option>
                          <option value="Cloud & DevOps Engineering">Cloud & DevOps Engineering</option>
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="Enterprise ERP / CRM">Enterprise ERP / CRM</option>
                          <option value="IT Staff Augmentation">Dedicated Team / Augmentation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Estimated Budget
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="Under ₹2,00,000">Under ₹2,00,000</option>
                          <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000</option>
                          <option value="₹5,00,000 - ₹15,00,000">₹5,00,000 - ₹15,00,000</option>
                          <option value="₹15,00,000+">₹15,00,000+ (Enterprise)</option>
                          <option value="Flexible / Undetermined">Flexible / Undetermined</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Project Description & Scope *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details about your project goals, timelines, and required features..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
