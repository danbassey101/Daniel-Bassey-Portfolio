/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Menu, X, FileText, BarChart2 } from 'lucide-react';

export default function Header({ onViewResume }: { onViewResume: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Sandbox', href: '#sandbox' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Cloud Architecture', href: '#projects' },
    { label: 'Get in Touch', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled 
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Name / Title */}
        <div className="space-y-0.5">
          <a href="#" className="font-display font-bold text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5 hover:text-brand-400 transition duration-350">
            DANIEL BASSEY
          </a>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-brand-400">
            Analytics & Cloud Architect
          </p>
        </div>

        {/* Desktop nav tabs */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-xs tracking-wider uppercase font-medium text-slate-300 hover:text-brand-400 transition-colors duration-200 py-1.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Menu (Download CV button or Contact directly) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onViewResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#1E293B] border border-white/5 hover:border-brand-500/25 hover:text-brand-300 text-slate-200 text-xs font-semibold hover:bg-[#1E293B]/80 transition duration-300 cursor-pointer shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            View Resume
          </button>
          <a
            href="mailto:danbassey101@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-brand-500 text-white font-semibold text-xs hover:bg-brand-600 transition-all duration-300 shadow-sm"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact Daniel
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-305 hover:bg-white/5 hover:text-white rounded-lg outline-none cursor-pointer"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav expander */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1220]/95 backdrop-blur-md border-b border-white/5 absolute top-full left-0 right-0 p-6 shadow-xl flex flex-col gap-4 animate-in fade-in-50 duration-150">
          <div className="flex flex-col gap-2.5">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-brand-400 transition py-2.5 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onViewResume();
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1E293B] hover:bg-[#1E293B]/80 text-slate-200 border border-white/5 font-semibold text-xs rounded-lg shadow transition cursor-pointer"
            >
              <FileText className="h-4 w-4 text-brand-400" />
              View Official Resume
            </button>
            <a
              href="mailto:danbassey101@gmail.com"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-500 text-white font-semibold text-xs rounded-lg shadow hover:bg-brand-600 transition"
            >
              <Mail className="h-4 w-4" />
              Email Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
