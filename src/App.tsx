/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Cloud, 
  TrendingUp, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle, 
  Cpu, 
  Sparkles,
  BarChart2,
  Calendar,
  Layers,
  ArrowDown
} from 'lucide-react';

import Header from './components/Header';
import DashboardDemo from './components/DashboardDemo';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [activeHeroTab, setActiveHeroTab] = useState<'outcomes' | 'linkedin'>('outcomes');

  return (
    <div className="bg-[#0B0F19] min-h-screen text-[#E2E8F0] selection:bg-brand-500 selection:text-white">
      {/* Dynamic Navigation Banner */}
      <Header />

      {/* Hero Showcase Frame */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0D1220] border-b border-brand-500/10">
        {/* Subtle tech grid pattern background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(112,111,211,0.06)_0.01rem,transparent_0.01rem),linear-gradient(to_bottom,rgba(112,111,211,0.06)_0.01rem,transparent_0.01rem)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.4] pointer-events-none" />
        
        {/* Soft decorative cloud blur glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline Details */}
            <div className="lg:col-span-11 xl:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-500/10 text-brand-300 text-xs font-semibold tracking-tight border border-brand-500/20">
                  <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                  Available for Remote & Global Opportunities
                </span>

                <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight text-white leading-[1.1] uppercase tracking-wide">
                  Transforming Raw Datasets Into <span className="text-brand-500">Automated Intelligence</span>
                </h1>

                <div className="space-y-4 max-w-xl text-[#E2E8F0]">
                  <p className="font-sans text-[#E2E8F0]/80 text-sm md:text-base leading-relaxed">
                    Hi, I’m <strong className="text-white font-bold">Daniel Bassey</strong>. I am a versatile and results-driven professional with expertise as a Data Analyst, Cloud Data Analyst, and Business Intelligence Analyst. My passion lies in transforming raw data into meaningful insights that drive decision-making and business growth. With a strong foundation in data analytics, cloud platforms, and BI tools, I excel in uncovering trends, optimizing processes, and delivering actionable recommendations.
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-[18px] font-mono text-brand-300 font-bold uppercase tracking-wider">
                      What I Bring to the Table
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm text-[#E2E8F0]/85">
                      <li className="flex items-start gap-2 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mt-2 shrink-0 animate-pulse outline outline-offset-1 outline-brand-500/10" />
                        <span>
                          A track record of enabling businesses to make <strong className="text-white font-semibold flex-inline">informed decisions</strong> by analyzing complex datasets and presenting insights in a clear, actionable manner.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mt-2 shrink-0 animate-pulse outline outline-offset-1 outline-brand-500/10" />
                        <span>
                          Hands-on experience in <strong className="text-white font-bold">cloud-based analytics</strong>, enabling cost-efficient and scalable data solutions.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mt-2 shrink-0 animate-pulse outline outline-offset-1 outline-brand-500/10" />
                        <span>
                          A collaborative approach to working with <strong className="text-white font-semibold flex-inline">cross-functional teams</strong>, ensuring alignment between technical capabilities and business goals.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Dynamic Shortcut Pillars / Badges */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap gap-4 pt-2 text-[#E2E8F0] text-xs font-semibold font-mono"
              >
                <div className="flex items-center gap-2 px-3.5 py-2 bg-[#1E293B] border border-white/5 rounded shadow-sm">
                  <span className="p-1 bg-brand-500/10 text-brand-300 rounded"><Database className="h-3.5 w-3.5" /></span>
                  Data Analyst
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 bg-[#1E293B] border border-white/5 rounded shadow-sm">
                  <span className="p-1 bg-brand-500/10 text-brand-300 rounded"><Cloud className="h-3.5 w-3.5" /></span>
                  Cloud Data Analyst
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 bg-[#1E293B] border border-white/5 rounded shadow-sm">
                  <span className="p-1 bg-brand-500/10 text-brand-300 rounded"><TrendingUp className="h-3.5 w-3.5" /></span>
                  Business Analyst
                </div>
              </motion.div>

              {/* Action Anchors */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                <a
                  href="#sandbox"
                  className="px-5 py-3 rounded bg-brand-500 border border-brand-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-600 transition active:scale-[0.98] cursor-pointer shadow-lg shadow-brand-500/25"
                >
                  Explore Interactive Sandbox
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 rounded bg-transparent border border-white/15 text-[#E2E8F0] font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>

            {/* Right Isometric Metric Bento Card Showcase */}
            <div className="lg:col-span-11 xl:col-span-5 relative mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-[#1E293B] rounded-lg p-6 text-[#E2E8F0] border border-white/5 shadow-2xl space-y-5"
              >
                {/* Floating Status Indicator */}
                <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-[#E2E8F0]/50 font-mono flex items-center gap-1.5 z-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  {activeHeroTab === 'outcomes' ? 'Outcome Telemetry' : 'LinkedIn Verified'}
                </div>

                {/* Subtitle / Title */}
                <div className="space-y-1">
                  <h3 className="font-display font-medium text-lg uppercase tracking-wider text-white">
                    {activeHeroTab === 'outcomes' ? 'Operational Impact' : 'LinkedIn Snapshot'}
                  </h3>
                  <p className="text-slate-400 text-xs">
                    {activeHeroTab === 'outcomes' 
                      ? 'Measurable efficiency outcomes structured for global teams' 
                      : 'Verified resume overview parsed from his professional directory link'}
                  </p>
                </div>

                {/* Segmented Controller Tab Bar */}
                <div className="flex bg-[#0B0F19] p-1 rounded border border-white/5 shrink-0 z-20 relative">
                  <button
                    onClick={() => setActiveHeroTab('outcomes')}
                    className={`flex-1 py-1.5 text-[10px] uppercase tracking-wider font-bold transition rounded cursor-pointer select-none text-center ${
                      activeHeroTab === 'outcomes' 
                        ? 'bg-[#706FD3] text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Metrics Hub
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('linkedin')}
                    className={`flex-1 py-1.5 text-[10px] uppercase tracking-wider font-bold transition rounded cursor-pointer select-none flex items-center justify-center gap-1.5 ${
                      activeHeroTab === 'linkedin' 
                        ? 'bg-[#0077b5] text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn Profile
                  </button>
                </div>

                {/* Dynamic Content Frame */}
                <div className="min-h-[224px] flex flex-col justify-between">
                  {activeHeroTab === 'outcomes' ? (
                    <motion.div
                      key="outcomes-view"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="divide-y divide-white/5 text-slate-300 space-y-3"
                    >
                      <div className="flex justify-between items-center py-2">
                        <div>
                          <h4 className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">Operational Flow</h4>
                          <p className="text-sm font-semibold text-white mt-0.5">Streamlined overall structures</p>
                        </div>
                        <span className="text-lg font-display font-bold text-[#E2E8F0] bg-brand-500/10 px-2.5 py-1 rounded border border-[#706FD3]/40">
                          +20%
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2.5">
                        <div>
                          <h4 className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">Stakeholder Engagement</h4>
                          <p className="text-sm font-semibold text-white mt-0.5">Programmatic initiative efficacy</p>
                        </div>
                        <span className="text-lg font-display font-bold text-[#E2E8F0] bg-brand-500/10 px-2.5 py-1 rounded border border-[#706FD3]/40">
                          +25%
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2.5">
                        <div>
                          <h4 className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider">Research Match Rate</h4>
                          <p className="text-sm font-semibold text-white mt-0.5">Strict compliance to company scope</p>
                        </div>
                        <span className="text-lg font-display font-bold text-[#E2E8F0] bg-brand-500/10 px-2.5 py-1 rounded border border-[#706FD3]/40">
                          99%
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="linkedin-view"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 text-slate-300 pt-2"
                    >
                      {/* LinkedIn Header Badge */}
                      <div className="flex items-center gap-3 bg-[#0B0F19]/60 p-3 rounded-lg border border-white/5">
                        <div className="h-10 w-10 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5] font-bold text-sm shrink-0">
                          DB
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white leading-tight">Daniel Bassey</h4>
                          <p className="text-[10px] text-slate-400 mt-0.5 truncate font-mono">Lead Business Analyst & Cloud Data Analyst</p>
                        </div>
                      </div>

                      {/* Scraped Bio Details List */}
                      <div className="space-y-2 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                          <p className="text-slate-300"><strong className="text-white">Experience Scope:</strong> Active roles at <span className="text-brand-300 font-semibold">Incrosoft</span> (Lead BA), <span className="text-brand-300 font-semibold">Deloitte</span> (Data Analyst), and <span className="text-brand-300 font-semibold">Chitt Organization</span> (Research Analyst).</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                          <p className="text-slate-300"><strong className="text-white">Credentials:</strong> B.Tech in Statistics (F.U.T. Minna), specializing in experimental designs and probability modeling.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                          <p className="text-slate-300"><strong className="text-white font-semibold">Endorsed Specialties:</strong> Database design (MS SQL Server), serverless AWS (Athena/S3), dashboarding (Looker Studio), and Python statistics.</p>
                        </div>
                      </div>

                      {/* View Button CTA */}
                      <div className="pt-1">
                        <a 
                          href="https://www.linkedin.com/in/danielbassey8/"
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="w-full py-2 px-3 bg-[#0077b5] border border-[#0077b5]/30 text-white hover:bg-[#006297] rounded text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer select-none shadow-md"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                          Visit Verified LinkedIn Profile
                          <ExternalLink className="h-3 w-3 opacity-90" />
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* Standard Metadata Base Row */}
                  <div className="border-t border-white/5 pt-3.5 flex gap-4 text-xs text-slate-500 font-mono justify-between align-middle items-center mt-3">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-brand-500" />
                      Lagos, Nigeria
                    </div>
                    <div className="flex gap-2">
                      <span className="h-1.5 w-1.5 bg-brand-500 rounded-full animate-ping mt-1.5" />
                      500+ Connections
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Interactive Data Playground Sandbox */}
      <section id="sandbox" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-300 tracking-widest font-mono uppercase">
              Demonstration Environment
            </span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white tracking-tight uppercase tracking-wider">
              Interactive Dashboard Playground
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Play with live diagnostic mock data models simulating Daniel’s analytical workloads. See how raw streams reorganize automatically using custom-engineered algorithms.
            </p>
          </div>

          <DashboardDemo />
        </div>
      </section>

      {/* SECTION 2: Core Capabilities & Skills Matrix */}
      <section id="skills" className="py-20 bg-[#0E0E11] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Skills />
        </div>
      </section>

      {/* SECTION 3: Timeline Work Experience Journey */}
      <section id="experience" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <WorkExperience />
      </section>

      {/* SECTION 4: Projects Showcase & Cloud Migrator */}
      <section id="projects" className="py-20 bg-[#0E0E11] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Projects />
        </div>
      </section>

      {/* SECTION 5: Education & Technical Backbone */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="border-l-2 border-brand-500 pl-4 space-y-1 mb-8">
          <h3 className="font-display font-medium text-2xl tracking-tight text-white uppercase tracking-wider">
            Academic Legacy
          </h3>
          <p className="text-slate-400 text-sm max-w-xl">
            Rooted in technical theories, numerical methods, and structural modeling parameters.
          </p>
        </div>

        <div className="bg-[#1E293B] rounded-lg border border-white/5 shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Emblem column */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-[#080B12] rounded border border-white/5 gap-3">
            <div className="p-3 bg-brand-500/10 text-brand-400 rounded border border-brand-500/20 shadow-sm">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <span className="inline-block bg-white/5 text-slate-300 font-mono text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase border border-white/5">
                Bachelor of Technology (B.Tech)
              </span>
              <h4 className="font-display font-bold text-white mt-1 text-sm md:text-base leading-tight">
                Statistics
              </h4>
            </div>
          </div>

          {/* Details column */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 font-mono">University Institution</span>
              <h5 className="text-base md:text-lg font-bold text-white mt-1">
                Federal University of Technology Minna
              </h5>
              <p className="text-xs text-slate-500 font-mono mt-0.5">Minna, Niger State, Nigeria</p>
            </div>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
              A solid mathematical foundation in design of experiments, probability forecasting, multi-variable sample regressions, 
              and statistical inference testing. This statistical discipline provides the raw theoretical rigor behind Daniel’s clean telemetry 
              parsing, predictive classifications, and deep business data intelligence models.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Get in Touch / Contacts */}
      <section id="contact" className="py-16 bg-[#080B12] border-t border-white/5 text-white relative">
        {/* Subtle decorative mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_0.01rem,transparent_0.01rem),linear-gradient(to_bottom,#fff_0.01rem,transparent_0.01rem)] bg-[size:4rem_4rem] opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <Contact />
        </div>
      </section>

      {/* Clean Simplified Footer */}
      <footer className="bg-[#0B0F19] text-slate-500 py-12 border-t border-white/5 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h5 className="text-white font-semibold font-display tracking-tight text-sm">DANIEL BASSEY</h5>
            <p className="text-[10px] text-slate-600">Data Analyst • Cloud Data Analyst • Business Analyst</p>
          </div>

          <div className="flex gap-4">
            <a href="mailto:danbassey101@gmail.com" className="hover:text-brand-400 transition">Email</a>
            <span className="text-slate-800">•</span>
            <a href="https://www.linkedin.com/in/danielbassey8/" target="_blank" referrerPolicy="no-referrer" className="hover:text-brand-400 transition flex items-center gap-1">
              LinkedIn <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <p className="text-[10px] text-slate-600">
            &copy; {new Date().getFullYear()} Daniel Bassey. Engineered with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
