/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, ExternalLink, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMess) setErrorMess('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMess('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
      {/* Informational Sidebar Contact Details */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
        <div className="border-l-2 border-brand-500 pl-4 space-y-1">
          <h3 className="font-display font-medium text-2xl tracking-tight text-white uppercase tracking-wider">
            Let's Collaborate
          </h3>
          <p className="text-slate-400 text-sm">
            Interested in consulting, hiring, or talking about analytics architecture? I am ready to help.
          </p>
        </div>

        {/* Structured Details Cards */}
        <div className="bg-[#141419] border border-white/5 rounded-lg p-5 md:p-6 space-y-4 shadow-2xl">
          <a 
            href="mailto:danbassey101@gmail.com"
            className="flex items-center gap-4 p-3 rounded hover:bg-white/5 hover:scale-[1.01] transition-all group duration-200 border border-transparent hover:border-white/5"
          >
            <span className="p-2.5 bg-brand-500/10 text-brand-400 rounded border border-brand-500/20 group-hover:bg-brand-500/25 transition-colors shrink-0">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <span className="text-[9px] uppercase font-bold text-slate-500 font-mono block leading-none tracking-wider">Email address</span>
              <span className="text-xs md:text-sm font-semibold text-white truncate block mt-1 hover:text-brand-400 transition leading-tight">
                danbassey101@gmail.com
              </span>
            </div>
            <ArrowRight className="h-4 w-4 ml-auto text-brand-500 opacity-0 group-hover:opacity-100 transition duration-200" />
          </a>

          <a 
            href="tel:+2348168874976"
            className="flex items-center gap-4 p-3 rounded hover:bg-white/5 hover:scale-[1.01] transition-all group duration-200 border border-transparent hover:border-white/5"
          >
            <span className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors shrink-0">
              <Phone className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <span className="text-[9px] uppercase font-bold text-slate-500 font-mono block leading-none tracking-wider">Phone Contact</span>
              <span className="text-xs md:text-sm font-semibold text-white truncate block mt-1 hover:text-emerald-400 transition leading-tight">
                +234 816 887 4976
              </span>
            </div>
            <ArrowRight className="h-4 w-4 ml-auto text-emerald-400 opacity-0 group-hover:opacity-100 transition duration-200" />
          </a>

          <div className="flex items-center gap-4 p-3 border-t border-white/5 pt-4">
            <span className="p-2.5 bg-white/5 text-slate-400 border border-white/5 rounded shrink-0">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <span className="text-[9px] uppercase font-bold text-slate-500 font-mono block leading-none tracking-wider font-semibold">Location base</span>
              <span className="text-xs md:text-sm font-semibold text-slate-350 block mt-1">
                Agodo-Egbe, Lagos, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Social Portals */}
        <div className="flex gap-3">
          <a 
            href="https://www.linkedin.com/in/danielbassey8/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex-1 py-3 px-4 bg-brand-500 border border-brand-500 text-slate-950 rounded text-xs font-bold hover:bg-brand-400 shadow-md shadow-brand-500/10 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Linkedin className="h-4 w-4 text-slate-950" />
            LinkedIn Profile
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* Interactive Message Canvas Form */}
      <div className="lg:col-span-7 bg-[#141419] rounded-lg border border-white/5 shadow-2xl p-6 md:p-8">
        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-6">
          Write a Direct Message
        </label>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-4 space-y-4"
          >
            <div className="inline-flex h-12 w-12 rounded-full bg-emerald-950/30 text-emerald-400 items-center justify-center border border-emerald-500/25">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-medium text-white text-lg tracking-tight">Thank You, Message Received!</h4>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
                Your communication has been dispatched safely. Daniel will inspect your inquiry details and follow up promptly.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-4 py-2 bg-[#0A0A0B]/50 hover:bg-white/5 border border-white/5 text-slate-300 rounded text-xs font-semibold cursor-pointer select-none transition"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-400">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Connor"
                  className="w-full bg-[#0A0A0B] border border-white/5 focus:border-brand-500 rounded px-3.5 py-2.5 text-xs md:text-sm text-slate-200 outline-none transition focus:ring-1 focus:ring-brand-500/20 placeholder-slate-600"
                  id="contact-name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-400">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@enterprise.com"
                  className="w-full bg-[#0A0A0B] border border-white/5 focus:border-brand-500 rounded px-3.5 py-2.5 text-xs md:text-sm text-slate-200 outline-none transition focus:ring-1 focus:ring-brand-500/20 placeholder-slate-600"
                  id="contact-email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-400">Inquiry Subject</label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Strategic Data Analysis Consultancy"
                className="w-full bg-[#0A0A0B] border border-white/5 focus:border-brand-500 rounded px-3.5 py-2.5 text-xs md:text-sm text-slate-200 outline-none transition focus:ring-1 focus:ring-brand-500/20 placeholder-slate-600"
                id="contact-subject"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-slate-400">Your Message *</label>
              <textarea 
                rows={5}
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Compose details regarding your proposal or inquiries here..."
                className="w-full bg-[#0A0A0B] border border-white/5 focus:border-brand-500 rounded px-3.5 py-2.5 text-xs md:text-sm text-slate-200 outline-none transition resize-none focus:ring-1 focus:ring-brand-500/20 placeholder-slate-600"
                id="contact-message"
              />
            </div>

            {errorMess && (
              <p className="text-rose-400 text-xs font-semibold">{errorMess}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-500 text-slate-950 font-bold text-xs py-3 rounded hover:bg-brand-400 disabled:opacity-50 hover:shadow-lg active:scale-[0.99] transition duration-150 cursor-pointer"
              id="contact-submit-btn"
            >
              <Send className="h-3.5 w-3.5" />
              {isSubmitting ? 'Sending Message...' : 'Send Message Proposal'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
