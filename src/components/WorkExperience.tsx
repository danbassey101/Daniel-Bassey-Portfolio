/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, Building, ChevronDown, Award, TrendingUp, Sparkles } from 'lucide-react';
import { WorkExperience as WorkExpType } from '../types';

const EXPERIENCES: WorkExpType[] = [
  {
    role: 'Lead Business Analyst',
    company: 'Incrosoft',
    location: 'Bangladesh',
    period: 'January 2026 – Present',
    bullets: [
      'Leading the development of a Software Requirements Specification (SRS) to guide the company in creating a new product concept.',
      'Designing an advanced financial revenue model to project potential revenue outcomes and ROI configurations for the new system.',
      'Establishing a sustainable business model with a robust anti-failure mechanism to ensure resilient long-term success.'
    ],
    metrics: [
      { label: 'Requirements Alignment', value: '100%', description: 'Comprehensive SRS coverage for core modules' },
      { label: 'Revenue Modeling Accuracy', value: '95%', description: 'Validated against multiple growth scenarios' },
      { label: 'Risk Protection Safeguards', value: 'High Policy', description: 'Anti-failure business frameworks designed' }
    ]
  },
  {
    role: 'Data Analyst',
    company: 'Deloitte',
    location: 'Australia',
    period: 'November 2025 – December 2025',
    bullets: [
      'Processed and parsed large real-time JSON datasets containing 9 distinct machine categories reporting every 10 minutes to extract live sensor telemetry.',
      'Applied advanced data unification, cleaning, and diagnostic analysis to uncover high-frequency mechanical breakdown patterns across regional factories.',
      'Enhanced strategic HR analytics by creating a modern classification concept that enables clear interpretation and profiling of Equality Scores across factories and job roles.'
    ],
    metrics: [
      { label: 'Reporting Resolution', value: '10-Min Pulsing', description: 'Real-time JSON streams unified cleanly' },
      { label: 'Asset Categorization', value: '9 Divisions', description: 'Separate equipment patterns mapped' },
      { label: 'Equality Indicators Analyzed', value: '450+ Personnel', description: 'Strategic HR matrices parsed' }
    ]
  },
  {
    role: 'Financial Analyst',
    company: 'Orion Marine LTD',
    location: 'Lagos, Nigeria ',
    period: 'June 2025 – November 2025',
    bullets: [
      'Maintained and audited database records, ensuring 100% accuracy and compliance while streamlining the documentation of journal vouchers.',
      'Analyzed withholding taxes, directly contributing to organizational financial transparency and compliance with tax regulations.',
      'Implemented a meticulous filing system for journal vouchers, vastly enhancing document retrieval efficiency and daily workflow.'
    ],
    metrics: [
      { label: 'Data Accuracy & Compliance', value: '100%', description: 'Achieved total accuracy and strict regulatory compliance during the continuous management and entry of financial records into the central database.' },
      { label: 'Tax Analysis Coverage', value: '100%', description: 'Conducted thorough, comprehensive analysis of all corporate withholding taxes, significantly increasing financial transparency across the organization.' },
      { label: 'Document Retrieval Efficiency', value: '+35%', description: 'Streamlined the development, organization, and meticulous filing of journal vouchers to accelerate document retrieval speeds for the finance team.' }
    ]
  },
  {
    role: 'Research Analyst',
    company: 'Chitt Organization',
    location: 'Uttar Pradesh, India',
    period: 'January 2025 – October 2025',
    bullets: [
      'Analyzed core trends and structured high-volume datasets to inform strategic initiatives, leading to a 20% improvement in operational efficiency and a 15% increase in project success rates.',
      'Collaborated cross-functionally with senior leadership to design and implement high-impact social programs, resulting in a 25% boost in stakeholder engagement and a 30% increase in programmatic efficacy.',
      'Ensured strict research accuracy, validation methodologies, and overall relevance to Chitt Organization\'s key objectives, maintaining a 99% alignment rate to strategic priorities.'
    ],
    metrics: [
      { label: 'Operational Efficiency', value: '+20%', description: 'Measurable streamlining in organizational flow' },
      { label: 'Project Success Rates', value: '+15%', description: 'Achieved through strategic data insights' },
      { label: 'Stakeholder Engagement', value: '+25%', description: 'Driven by collaborative community initiatives' },
      { label: 'Strategic Priorities Met', value: '99% Match', description: 'Aligned exactly with corporate goals' }
    ]
  }
];

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Cloud Data Analytics – Specialty',
    issuer: 'Google Cloud Platform (GCP)',
    date: 'Certified: 2024',
    skills: ['BigQuery', 'Cloud Computing', 'Business Intelligence']
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'Freecodecamp',
    date: 'Certified: 2024',
    skills: ['Numpy', 'Pandas', 'Seaborn']
  },
  {
    title: 'Innovating with Google Cloud AI',
    issuer: 'SimpliLearn',
    date: 'Certified: 2024',
    skills: ['Google Cloud', 'Generative AI', 'AI/ML Concept']
  },
  {
    title: 'Scrum:Basics',
    issuer: 'LinkedIn Learning',
    date: 'Certified: 2025',
    skills: ['Scrum', 'Agile', 'Project Management']
  },
  {
    title: 'Data Wrangling in R',
    issuer: 'LinkedIn Learning',
    date: 'Certified: 2025',
    skills: ['ggplot2', 'Data Wrangling', 'R(Programming Language)']
  },
  {
    title: 'SQL Database Development Mastery',
    issuer: 'Udemy',
    date: 'Certified: 2024',
    skills: ['CTEs', 'Window Functions', 'Subqueries']
  },
  {
    title: 'PowerBI Beginner to Pro Workshop',
    issuer: 'Pragmatic Works',
    date: 'Certified: 2024',
    skills: ['Dax Measures', 'Data Modeling', 'Advance ETL and Power Query']
  }
];

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-6">
      <div className="border-l-2 border-brand-500 pl-4 space-y-1 mb-8">
        <h3 className="font-display font-medium text-2xl tracking-tight text-white uppercase tracking-wider">
          Professional Journey
        </h3>
        <p className="text-slate-400 text-sm max-w-xl">
          A track record of leveraging data pipelines, cloud architecture, and predictive analysis to compound enterprise value.
        </p>
      </div>

      <div className="space-y-4">
        {EXPERIENCES.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div 
              key={idx}
              className={`bg-[#131B2A] rounded-lg border transition-all duration-300 overflow-hidden ${
                isExpanded 
                  ? 'border-brand-500/50 shadow-2xl ring-1 ring-brand-500/20' 
                  : 'border-white/5 hover:border-white/10 hover:bg-[#1E293B]/40 shadow-sm'
              }`}
            >
              {/* Header Toggle Row */}
              <div 
                onClick={() => toggleExpand(idx)}
                className="p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer select-none"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="p-1.5 bg-brand-500/10 text-brand-300 rounded-md">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <h4 className="font-display font-bold text-white text-base md:text-lg tracking-tight select-text">
                      {exp.role}
                    </h4>
                    <span className="text-slate-650 hidden sm:inline select-none">•</span>
                    <div className="flex items-center gap-1 text-slate-350 font-medium text-xs select-text">
                      <Building className="h-3 w-3 text-brand-500" />
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-450 font-mono">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="h-3.5 w-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="h-3.5 w-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded font-mono border ${
                    idx === 0 
                      ? 'bg-brand-500/10 text-brand-300 border-brand-500/20' 
                      : 'bg-white/5 text-slate-450 border-white/5'
                  }`}>
                    {idx === 0 ? 'Current' : 'Completed'}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-1 text-slate-400 hover:text-white rounded-md"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </div>
              </div>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-6 pt-1 md:px-6 md:pb-8 border-t border-white/5 space-y-6">
                      {/* Detailed Bullet Points */}
                      <div className="space-y-3 font-sans">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                          Core Contributions
                        </label>
                        <ul className="space-y-2.5">
                          {exp.bullets.map((bullet, BulletIdx) => (
                            <li key={BulletIdx} className="flex items-start gap-2.5 text-slate-300 text-xs md:text-sm leading-relaxed">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#706FD3] mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Experience Impact Indicators */}
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div className="space-y-3">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                            Key Metrics & Achievements
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {exp.metrics.map((metric, MetricIdx) => (
                              <div 
                                key={MetricIdx}
                                className="bg-[#0B0F19] border border-white/5 p-3.5 rounded flex flex-col justify-between shadow-inner"
                              >
                                <div className="flex justify-between items-start">
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono truncate max-w-[140px]">
                                    {metric.label}
                                  </span>
                                  <span className="p-1 bg-[#131B2A] border border-white/5 rounded text-brand-300">
                                    <TrendingUp className="h-3 w-3" />
                                  </span>
                                </div>
                                <div className="mt-2.5">
                                  <div className="text-lg font-display font-semibold text-white">
                                    {metric.value}
                                  </div>
                                  <div className="text-[10px] text-slate-450 leading-tight mt-0.5">
                                    {metric.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* SECTION: Certifications Hub */}
      <div className="pt-10 space-y-6">
        <div className="border-l-2 border-brand-500 pl-4 space-y-1">
          <h3 className="font-display font-medium text-xl tracking-tight text-white uppercase tracking-wider flex items-center gap-2">
            <Award className="h-5 w-5 text-brand-500" />
            Certifications & Global Standards
          </h3>
          <p className="text-slate-400 text-xs max-w-xl">
            Verified professional credentials and continuous technical validation milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert.title}
              className="bg-[#131B2A] rounded-lg border border-white/5 hover:border-brand-500/20 hover:bg-[#1E293B]/75 p-5 transition-all duration-300 flex flex-col justify-between group relative shadow-2xl"
            >
              {/* Outer Glow Overlay */}
              <div className="absolute inset-0 bg-brand-500/[0.01] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
              
              <div className="space-y-3 z-10">
                <div className="flex justify-between items-start gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-300 font-bold uppercase tracking-wider bg-brand-500/5 px-2 py-0.5 rounded border border-brand-500/10">
                      {cert.issuer}
                    </span>
                    <h4 className="font-display font-bold text-white text-sm md:text-base leading-tight mt-1.5 group-hover:text-brand-300 transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="p-1.5 bg-[#0B0F19] border border-white/5 rounded-md text-slate-400 group-hover:text-brand-300 group-hover:bg-brand-500/10 group-hover:border-brand-500/20 transition-all duration-300">
                    <Award className="h-4 w-4" />
                  </div>
                </div>

                {/* Tags mapping */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {cert.skills.map(sk => (
                    <span 
                      key={sk} 
                      className="text-[9px] font-mono bg-[#0B0F19] text-slate-300 px-1.5 py-0.5 rounded border border-white/5 leading-none"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lower Details Row */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-4 mt-4 border-t border-white/5 z-10 select-text">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {cert.date}
                </span>
                <span className="text-slate-500 group-hover:text-slate-300 transition duration-155">
                
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
