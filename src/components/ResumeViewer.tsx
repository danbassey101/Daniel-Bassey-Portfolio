/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  ExternalLink,
  Sparkles,
  FileText
} from 'lucide-react';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [copied, setCopied] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    // We trigger browser standard printing. 
    // We rely on specialized print CSS that isolates the resume element.
    window.print();
  };

  const handleCopyText = () => {
    const rawResumeText = `
DANIEL BASSEY
Data Analyst | Cloud Data Analyst | Business Analyst
Agodo-Egbe, Lagos, Nigeria
Phone: +234 816 887 4976
Email: danbassey101@gmail.com
LinkedIn: linkedin.com/in/danielbassey8/
Portfolio: danbassey.com

SKILLS
- Programming languages: SQL, Python (Pandas, NumPy, Seaborn, MatPlotLib), R programming
- BI & Visualization Tools: Power BI, Google Data Studio, Tableau, MS Excel, Canva
- Cloud Platforms: AWS, GCP

WORK EXPERIENCE

LEAD BUSINESS ANALYST – Incrosoft – Bangladesh (January 2026 – Present)
- Leading the development of a Software Requirements Specification (SRS) to guide the company in creating a new concept.
- Designing a financial revenue model to project potential revenue outcomes for the new system.
- Establishing a sustainable business model with a robust anti-failure process to ensure long-term success.

DATA ANALYST – Deloitte – Australia (November 2025 – December 2025)
- Processing a large JSON dataset containing 9 machine categories reporting every 10 minutes, also applying data unification and diagnostic analysis to reveal breakdown patterns.
- Enhancing HR analytics by creating a classification concept that will enable clearer interpretation of Equality Scores across factories and job roles.

RESEARCH ANALYST – Chitt Organization – Uttar Pradesh, India (January 2025 – October 2025)
- Analyzing trends and data to inform strategic initiatives, leading to a 20% improvement in operational efficiency and a 15% increase in project success rates.
- Collaborating with the team to design and implement impactful programs, resulting in a 25% boost in stakeholder engagement and a 30% increase in program effectiveness.
- Ensuring research accuracy and relevance to Chitt Organization’s objectives, with a 99% alignment rate to strategic priorities.

PROJECTS
DATA ANALYSIS – Freelance Project – Lagos, NG (August 2025)
- Extracted and cleaned raw datasets using Microsoft Excel to ensure accuracy and consistency for analysis.
- Designed and implemented a relational database using Microsoft SQL Server, writing optimized queries to support efficient data analysis, also developing interactive dashboards in Looker Studio to visualize key metrics and improve data comprehension for stakeholders.
- Migrated data to AWS cloud infrastructure (S3, Athena, Glue, Glue DataBrew, and QuickSight), enhancing scalability, storage, and performance of analytical processes.

EDUCATION
BACHELOR OF TECHNOLOGY IN STATISTICS – Federal University of Technology Minna – Niger, NG
    `.trim();

    navigator.clipboard.writeText(rawResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07090E]/90 backdrop-blur-md overflow-y-auto p-4 md:p-6 no-print">
      {/* Outer Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#131B2A] border border-white/10 rounded-xl w-full max-w-4xl shadow-2xl flex flex-col my-8 overflow-hidden max-h-[90vh]"
      >
        {/* Action Header Nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b border-white/5 bg-[#0D1220] shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-brand-500/10 text-brand-300 rounded">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-white font-display font-bold text-sm md:text-base leading-tight">Official Resume Hub</h3>
              <p className="text-slate-400 text-xs font-mono">Daniel Bassey • Full-Stack Analytics Architect</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
            {/* Print/Download Trigger */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#1E293B] border border-white/5 hover:border-brand-500/25 text-slate-200 hover:text-brand-300 text-xs font-semibold rounded transition cursor-pointer grow sm:grow-0"
              title="Print standard physical page layout"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print CV</span>
            </button>

            {/* Plaintext Copy Trigger */}
            <button
              onClick={handleCopyText}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#1E293B] border border-white/5 hover:border-brand-500/25 text-slate-200 hover:text-brand-300 text-xs font-semibold rounded transition cursor-pointer grow sm:grow-0"
              title="Copy clean plaintext for HR / ATS systems"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            {/* Direct Close */}
            <button
              onClick={onClose}
              className="p-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 rounded transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Paper Container Body (Scrollable container on web) */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#0B0F19] flex justify-center">
          
          {/* Mock Document Page Card (Exact visual translation) */}
          <div 
            ref={printableRef}
            id="printable-resume-node"
            className="w-full max-w-[800px] bg-white text-slate-800 p-6 md:p-10 shadow-2xl rounded-lg border border-slate-200 text-left relative font-sans print:shadow-none print:border-none print:p-0 print:bg-white print:text-black"
          >
            {/* Top Identity Header Block */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-800 pb-5 gap-4">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
                  Daniel Bassey
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wide font-mono uppercase flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0" />
                  Data Analyst • Cloud Data Analyst • Business Analyst
                </p>
              </div>

              {/* Personal Coordinates */}
              <div className="text-[11px] md:text-xs text-slate-500 space-y-1 font-mono leading-relaxed md:text-right flex flex-col md:items-end w-full md:w-auto shrink-0 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                <div className="flex items-center gap-1.5 md:justify-end">
                  <Phone className="h-3 w-3 text-slate-400" />
                  <span>+234 816 887 4976</span>
                </div>
                <div className="flex items-center gap-1.5 md:justify-end">
                  <Mail className="h-3 w-3 text-slate-400" />
                  <a href="mailto:danbassey101@gmail.com" className="hover:underline">danbassey101@gmail.com</a>
                </div>
                <div className="flex items-center gap-1.5 md:justify-end">
                  <Linkedin className="h-3 w-3 text-slate-400" />
                  <a href="https://www.linkedin.com/in/danielbassey8/" target="_blank" referrerPolicy="no-referrer" className="hover:underline">linkedin.com/in/danielbassey8/</a>
                </div>
                <div className="flex items-center gap-1.5 md:justify-end">
                  <MapPin className="h-3 w-3 text-slate-400" />
                  <span>Agodo-Egbe, Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* SKILLS SECTION */}
            <div className="mt-6 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5 font-sans">
                Skills Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 gap-x-4 pt-1 font-sans text-xs sm:text-sm">
                <div className="md:col-span-4 font-bold text-slate-700">Programming Languages:</div>
                <div className="md:col-span-8 text-slate-600">SQL, Python (Pandas, NumPy, Seaborn, MatPlotLib), R programming</div>

                <div className="md:col-span-4 font-bold text-slate-700">BI & Visualization:</div>
                <div className="md:col-span-8 text-slate-600">Power BI, Google Data Studio, Tableau, MS Excel, Canva</div>

                <div className="md:col-span-4 font-bold text-slate-700">Cloud Platforms:</div>
                <div className="md:col-span-8 text-slate-600">AWS (S3, Athena, Glue, QuickSight), GCP (BigQuery, Storage)</div>
              </div>
            </div>

            {/* WORK EXPERIENCE */}
            <div className="mt-6 space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5 font-sans">
                Work Experience
              </h2>

              <div className="space-y-5">
                {/* ROLE 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                    <h3 className="font-extrabold text-slate-800 text-xs sm:text-base">
                      LEAD BUSINESS ANALYST <span className="font-medium text-slate-500">— Incrosoft</span>
                    </h3>
                    <span className="text-[11px] font-bold font-mono text-slate-500 shrink-0 uppercase sm:text-right">
                      Jan 2026 – Present | Bangladesh
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    <li>Leading the development of a Software Requirements Specification (SRS) to guide the company in creating a new concept.</li>
                    <li>Designing a financial revenue model to project potential revenue outcomes and ROI parameters for the new system.</li>
                    <li>Establishing a sustainable business model with a robust anti-failure process to ensure resilient, long-term operational success.</li>
                  </ul>
                </div>

                {/* ROLE 2 */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                    <h3 className="font-extrabold text-slate-800 text-xs sm:text-base">
                      DATA ANALYST <span className="font-medium text-slate-500">— Deloitte</span>
                    </h3>
                    <span className="text-[11px] font-bold font-mono text-slate-500 shrink-0 uppercase sm:text-right">
                      Nov 2025 – Dec 2025 | Australia
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    <li>Processed a large raw JSON dataset containing 9 machine categories reporting every 10 minutes, applying statistical alignment, data unification and diagnostic analysis to uncover pattern breakdowns.</li>
                    <li>Enhanced HR analytics by writing a custom categorization classification concept to enable clearer, diagnostic interpretations of Equality Scores across factories and organizational job roles.</li>
                  </ul>
                </div>

                {/* ROLE 3 */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                    <h3 className="font-extrabold text-slate-800 text-xs sm:text-base">
                      RESEARCH ANALYST <span className="font-medium text-slate-500">— Chitt Organization</span>
                    </h3>
                    <span className="text-[11px] font-bold font-mono text-slate-500 shrink-0 uppercase sm:text-right">
                      Jan 2025 – Oct 2025 | India
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    <li>Analyzed critical trends and high-volume structured research datasets to inform corporate strategic initiatives, driving a 20% improvement in operational flow and a 15% increase in project success rates.</li>
                    <li>Collaborated cross-functionally with team members to design and implement impactful community programs, achieving a 25% boost in stakeholder engagement and a 30% increase in programmatic effectiveness.</li>
                    <li>Guaranteed extreme research metrics accuracy and technical validation aligning perfectly with target objectives, hitting a 99% alignment rate to strategic priorities.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PROJECTS SECTION */}
            <div className="mt-6 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5 font-sans">
                Featured Projects
              </h2>

              <div className="space-y-1.5">
                <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                  <h3 className="font-extrabold text-slate-800 text-xs sm:text-sm">
                    DATA ANALYSIS <span className="font-medium text-slate-500">— Freelance End-to-End Pipeline</span>
                  </h3>
                  <span className="text-[11px] font-bold font-mono text-slate-500 shrink-0 uppercase">
                    August 2025 | Lagos, NG
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  <li>Formulated extraction models and cleaned multi-source tabular datasets using Microsoft Excel to guarantee data normalization.</li>
                  <li>Designed and built a relational Microsoft SQL Server database schema, coding optimized queries, subqueries, and views, and integrated Looker Studio dashboards to communicate metric KPIs to commercial stakeholders.</li>
                  <li>Migrated analytical loads to serverless AWS infrastructure (Amazon S3 bucket lakes, AWS Glue Crawlers, Athena querying engine, and QuickSight visuals) to scale cloud workloads.</li>
                </ul>
              </div>
            </div>

            {/* EDUCATION SECTION */}
            <div className="mt-6 space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5 font-sans">
                Education History
              </h2>

              <div className="flex justify-between items-start gap-3 flex-wrap sm:flex-nowrap pt-1">
                <div>
                  <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm">
                    BACHELOR OF TECHNOLOGY IN STATISTICS
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Federal University of Technology Minna
                  </p>
                </div>
                <span className="text-[11px] font-bold font-mono text-slate-500 shrink-0 uppercase sm:text-right">
                  Niger State, NG
                </span>
              </div>
            </div>

            {/* Print Friendly Credit Line */}
            <div className="hidden print:block text-[8px] font-mono text-slate-400 mt-8 pt-4 border-t border-slate-200 text-center">
              Daniel Bassey • Interactive Portfolio Resume Generation. https://danbassey.com
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
