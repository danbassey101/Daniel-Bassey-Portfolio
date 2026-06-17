/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Cloud, 
  FileSpreadsheet, 
  Search, 
  Workflow, 
  Eye, 
  ArrowRight, 
  Server, 
  Sparkles, 
  BarChart, 
  CheckCircle,
  HelpCircle,
  FolderLock
} from 'lucide-react';
import { ProjectData } from '../types';

const METADATA_PIPELINE = [
  {
    phase: '1. Ingestion',
    tool: 'Microsoft Excel',
    icon: FileSpreadsheet,
    desc: 'Extracting and cleansing raw datasets using advanced power query scripts to guarantee consistent formats and robust analysis prerequisites.',
    implementation: 'Identified corrupted column headers, handled blank records, unified currency/date standard notation, and validated records before database loading.'
  },
  {
    phase: '2. Relational DB',
    tool: 'Microsoft SQL Server',
    icon: Server,
    desc: 'Designing schema relations to map business entities. Composing optimized subqueries, indices, and views to prepare quick data delivery.',
    implementation: 'Created relational tables with foreign keys matching third-normal form. Crafted efficient CTEs and indexed views for aggregations.'
  },
  {
    phase: '3. Staging Storage',
    tool: 'AWS S3 Data Lake',
    icon: FolderLock,
    desc: 'Migrating and archiving tabular records into clean cloud object directories. Managing security classes and cost-effective lifecycle backups.',
    implementation: 'Bucketed historical datasets into logical raw, staging, and optimized partitions using compressed CSV formats for lightweight transit.'
  },
  {
    phase: '4. ETL & Cataloging',
    tool: 'AWS Glue & DataBrew',
    icon: Workflow,
    desc: 'Setting up schema crawling jobs to autocheck structures. Customizing clean-up profiles to refine the metadata inventory.',
    implementation: 'Configured scheduled crawler agents to discover structures dynamically, outputting a consolidated Glue Data Catalog across multiple buckets.'
  },
  {
    phase: '5. Serverless Query',
    tool: 'AWS Athena',
    icon: Search,
    desc: 'Enabling on-demand SQL queries on top of raw S3 flat files, completely bypassing server computing configurations.',
    implementation: 'Wrote partition-friendly DDL tables. Optimized analytical workloads by scoping scans only to necessary subfolders, reducing query costs.'
  },
  {
    phase: '6. Strategic BI',
    tool: 'Looker Studio & QuickSight',
    icon: BarChart,
    desc: 'Constructing interactive dashboard hubs. Connecting database sources live to facilitate clear stakeholder comprehension.',
    implementation: 'Created real-time filter panes, sales and inventory metrics grids, and performance trackers with dynamic data refreshes.'
  }
];

export default function Projects() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="space-y-8 flex-1">
      <div className="border-l-2 border-brand-500 pl-4 space-y-1">
        <h3 className="font-display font-medium text-2xl tracking-tight text-white uppercase tracking-wider">
          Featured Analytics Project
        </h3>
        <p className="text-slate-400 text-sm max-w-xl">
          Deep dive into real-world freelance projects and production analytical workflows.
        </p>
      </div>

      {/* Main Freelance Project Card */}
      <div className="bg-[#141419] rounded-lg border border-white/5 shadow-2xl p-6 md:p-8 space-y-6">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
            <span className="inline-block bg-brand-500/10 text-brand-500 font-mono text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider border border-brand-500/10">
              End-to-End Solutions Delivery
            </span>
            <span className="text-xs text-slate-500 font-mono font-medium">Lagos, NG • August 2025</span>
          </div>
          <h4 className="font-display font-bold text-white text-xl md:text-2xl">
            Automated Data Analytics & AWS Cloud Migration Pipeline
          </h4>
          <p className="text-xs md:text-sm text-slate-400 max-w-3xl mt-2 leading-relaxed">
            Successfully spearheaded the design and implementation of an end-to-end analytics workflow for a commercial merchant. 
            Replaced localized spreadsheets with a secure relational database (Microsoft SQL Server), established 
            AWS serverless querying, and unified visual reports in Looker Studio and AWS QuickSight.
          </p>
        </div>

        {/* Dynamic Technologies Tag list */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-b border-white/5 py-4">
          {['Microsoft Excel', 'MS SQL Server', 'AWS S3', 'AWS Athena', 'AWS Glue', 'Looker Studio', 'QuickSight'].map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs font-semibold text-slate-300 hover:bg-white/10 transition duration-150"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5 p-4 bg-[#0A0A0B]/50 rounded-lg border border-white/5">
            <div className="flex items-center gap-1.5 text-brand-500 font-bold text-xs font-mono uppercase">
              <span className="p-1 bg-white/5 rounded border border-white/5 text-brand-500"><FileSpreadsheet className="h-3.5 w-3.5" /></span>
              Excel & SQL Foundation
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Extracted tabular data, formulated schema relations in SQL Server, and built complex stored procedures to speed up analysis.
            </p>
          </div>

          <div className="space-y-1.5 p-4 bg-[#0A0A0B]/50 rounded-lg border border-white/5">
            <div className="flex items-center gap-1.5 text-brand-500 font-bold text-xs font-mono uppercase">
              <span className="p-1 bg-white/5 rounded border border-white/5 text-brand-500"><Cloud className="h-3.5 w-3.5" /></span>
              Scalable Cloud Migration
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Uploaded cleaned staging databases to Amazon S3 buckets, crawled layout changes with AWS Glue, and enabled query structures via Athena.
            </p>
          </div>

          <div className="space-y-1.5 p-4 bg-[#0A0A0B]/50 rounded-lg border border-white/5">
            <div className="flex items-center gap-1.5 text-brand-500 font-bold text-xs font-mono uppercase">
              <span className="p-1 bg-white/5 rounded border border-white/5 text-brand-500"><BarChart className="h-3.5 w-3.5" /></span>
              BI Visual Dashboards
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Integrated real-time streaming queries with Looker Studio dashboards, providing simple interfaces for C-suite decision making.
            </p>
          </div>
        </div>

        {/* Interactive Interactive Cloud Architecture Explorer */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between">
            <h5 className="text-xs font-bold text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
              <Workflow className="h-4 w-4 text-brand-500" />
              Interactive Architecture Flow
            </h5>
            <span className="text-[11px] text-slate-500 font-medium">Click any node to inspect pipeline action</span>
          </div>

          {/* Flow Line Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
            {METADATA_PIPELINE.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-4 rounded flex flex-col items-center justify-center text-center transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/25 scale-105 border border-brand-500' 
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:scale-[1.02] border border-white/5'
                  }`}
                  id={`arch-step-${idx}`}
                >
                  <StepIcon className={`h-6 w-6 mb-2.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span className={`font-display font-medium text-[11px] leading-tight block truncate max-w-full ${isActive ? 'text-slate-950 font-semibold' : ''}`}>
                    {step.tool}
                  </span>
                  <span className={`text-[9px] font-mono mt-1 uppercase font-bold ${isActive ? 'text-slate-900/80' : 'text-slate-500'}`}>
                    {step.phase.split('.')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="mt-4 bg-[#0A0A0B]/60 border border-white/5 p-5 rounded-lg shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              >
                {/* Visual Circle Emblem */}
                <div className="md:col-span-3 flex md:flex-col items-center justify-start md:justify-center p-3 text-center md:border-r border-white/5 gap-3 md:gap-2">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center font-display font-medium text-lg border border-brand-500/20">
                    {activeStep + 1}
                  </div>
                  <div>
                    <h6 className="font-semibold text-white text-xs md:text-sm">{METADATA_PIPELINE[activeStep].tool}</h6>
                    <span className="text-[10px] text-slate-500 font-mono leading-none">{METADATA_PIPELINE[activeStep].phase}</span>
                  </div>
                </div>

                {/* Scope & Description */}
                <div className="md:col-span-9 space-y-3 font-sans">
                  <div>
                    <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Workflow Outline</h6>
                    <p className="text-slate-350 text-xs leading-relaxed mt-1">
                      {METADATA_PIPELINE[activeStep].desc}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Daniel's Core Task</h6>
                    <p className="text-slate-305 text-xs leading-relaxed mt-1 flex items-start gap-1.5 text-slate-300">
                      <span className="text-brand-500 font-bold shrink-0 mt-0.5"><CheckCircle className="h-3.5 w-3.5" /></span>
                      <span>{METADATA_PIPELINE[activeStep].implementation}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
