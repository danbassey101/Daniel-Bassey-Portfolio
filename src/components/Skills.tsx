/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  BarChart, 
  Cloud, 
  Database, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  BookOpen 
} from 'lucide-react';
import { Skill as SkillType } from '../types';

const SKILLS_DATA: SkillType[] = [
  // Programming
  {
    name: 'SQL (Structured Query Language)',
    category: 'programming',
    level: 95,
    iconName: 'Database',
    subTools: ['CTEs & Subqueries', 'Stored Procedures', 'Window Functions', 'Relational Database Design', 'MS SQL Server Query Tuning'],
    description: 'Expert in designing complex queries, managing database schemas, and writing optimized scripts for corporate analytical layers.'
  },
  {
    name: 'Python (Pandas, NumPy, Seaborn)',
    category: 'programming',
    level: 88,
    iconName: 'Code',
    subTools: ['Pandas (DataFrames)', 'NumPy (Arrays)', 'Seaborn & MatPlotLib (Charts)', 'Data Cleaning', 'Diagnostic Modelling'],
    description: 'Strong foundation in scientific data computing, cleaning complex telemetry JSON datasets, and creating diagnostic visuals.'
  },
  {
    name: 'R Programming',
    category: 'programming',
    level: 75,
    iconName: 'Terminal',
    subTools: ['Tidyverse', 'ggplot2', 'Statistical Testing', 'Predictive Analysis'],
    description: 'Adept in conducting hypothesis verification tests, statistics modeling, and plotting elegant research charts.'
  },

  // BI
  {
    name: 'Power BI',
    category: 'bi_vis',
    level: 90,
    iconName: 'BarChart',
    subTools: ['DAX Formulas', 'Power Query M language', 'Star Schemas', 'Interactive Workspaces'],
    description: 'Designing corporate reporting dashboards, modeling star schemas, and programming custom DAX analytics.'
  },
  {
    name: 'Looker Studio / Data Studio',
    category: 'bi_vis',
    level: 92,
    iconName: 'Layers',
    subTools: ['Blending DataSources', 'Custom Filters & Metrics', 'Real-time Feeds', 'Client Reports'],
    description: 'Creating cloud-integrated dashboard layouts that connect live with AWS Athena queries or MS SQL sources.'
  },
  {
    name: 'Tableau',
    category: 'bi_vis',
    level: 80,
    iconName: 'Layers',
    subTools: ['Calculated Fields', 'LOD Expressions', 'Tableau Public', 'Storyboard reporting'],
    description: 'Formulating insightful interactive maps, charts, and executive storyboards to extract clean business analytics.'
  },
  {
    name: 'Microsoft Excel',
    category: 'bi_vis',
    level: 95,
    iconName: 'BookOpen',
    subTools: ['VLOOKUP & XLOOKUP', 'Pivot Tables & Charts', 'Power Queries', 'Advanced formulas'],
    description: 'Expert at rapid initial data munging, parsing commercial reports, and building quick validation prototypes.'
  },
  {
    name: 'Canva',
    category: 'bi_vis',
    level: 78,
    iconName: 'Layers',
    subTools: ['Strategic Presentation Design', 'Reporting Infographics', 'UI Wireframing'],
    description: 'Polishing corporate reporting decks, presentation templates, and custom infographics for management reviews.'
  },

  // Cloud Platforms
  {
    name: 'AWS (Amazon Web Services)',
    category: 'cloud',
    level: 85,
    iconName: 'Cloud',
    subTools: ['S3 (Data Lakes)', 'Athena (Serverless Queries)', 'AWS Glue (ETL Pipelines)', 'Glue DataBrew', 'QuickSight (Cloud BI)'],
    description: 'Setting up cost-effective metadata catalog crawls, hosting partitioned raw data buckets, and building serverless analytical pipelines.'
  },
  {
    name: 'GCP (Google Cloud Platform)',
    category: 'cloud',
    level: 76,
    iconName: 'Cloud',
    subTools: ['Cloud Storage', 'BigQuery', 'Looker Integration'],
    description: 'Managing cloud storage buckets, uploading large logs, and linking Google ecosystems to Looker dashboards.'
  }
];

export default function Skills() {
  const [filterCategory, setFilterCategory] = useState<'all' | 'programming' | 'bi_vis' | 'cloud'>('all');
  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(0);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (filterCategory === 'all') return true;
    return skill.category === filterCategory;
  });

  const getIcon = (name: string) => {
    switch (name) {
      case 'Database': return Database;
      case 'Code': return Code;
      case 'Terminal': return Terminal;
      case 'BarChart': return BarChart;
      case 'Cloud': return Cloud;
      case 'BookOpen': return BookOpen;
      default: return Layers;
    }
  };

  return (
    <div className="space-y-6 flex-1">
      <div className="border-l-2 border-brand-500 pl-4 space-y-1 mb-8">
        <h3 className="font-display font-medium text-2xl tracking-tight text-white uppercase tracking-wider">
          Core Capabilities
        </h3>
        <p className="text-slate-400 text-sm max-w-xl">
          A balanced stack spanning programming logic, commercial business intelligence stacks, and modern serverless cloud infrastructures.
        </p>
      </div>

      {/* Category Tab buttons */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-white/5">
        {[
          { id: 'all', label: 'All Stack Tools' },
          { id: 'programming', label: 'Programming & DB' },
          { id: 'bi_vis', label: 'BI & Visualization' },
          { id: 'cloud', label: 'Cloud Platforms' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setFilterCategory(tab.id as any);
              setActiveSkillIndex(null); // Reset detail expansion
            }}
            className={`px-4 py-2 rounded text-xs font-semibold tracking-tight transition cursor-pointer border ${
              filterCategory === tab.id
                ? 'bg-brand-500 text-slate-950 font-bold border-brand-500 shadow-sm'
                : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Layout Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left column list */}
        <div className="md:col-span-7 space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {filteredSkills.map((skill, listIdx) => {
            const SkillIcon = getIcon(skill.iconName);
            const isSelected = activeSkillIndex === listIdx;

            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkillIndex(listIdx)}
                className={`p-4 rounded border cursor-pointer select-none transition-all duration-200 flex items-center justify-between gap-4 ${
                  isSelected 
                    ? 'bg-[#1a1a23] border-brand-500/30 text-white shadow-xl' 
                    : 'bg-[#141419] border-white/5 hover:border-white/10 text-slate-300 hover:text-white'
                }`}
                id={`skill-row-${listIdx}`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span className={`p-2 rounded ${isSelected ? 'bg-brand-500/10 text-brand-500' : 'bg-white/5 text-slate-400 border border-white/5'}`}>
                    <SkillIcon className="h-4 w-4" />
                  </span>
                  <div className="truncate">
                    <h5 className="font-semibold text-xs md:text-sm tracking-tight truncate leading-snug">
                       {skill.name}
                    </h5>
                    <span className={`text-[9.5px] uppercase font-bold font-mono tracking-wider ${isSelected ? 'text-brand-400' : 'text-slate-500'}`}>
                      {skill.category === 'programming' ? 'Lang & Query' : skill.category === 'bi_vis' ? 'BI Reporting' : 'Cloud Architecture'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex flex-col items-end w-20">
                    <span className="text-xs font-mono font-bold">{skill.level}%</span>
                    <div className="w-16 bg-white/5 rounded-full h-1 mt-1 overflow-hidden border border-white/5">
                      <div 
                        className={`h-full rounded-full ${isSelected ? 'bg-brand-500' : 'bg-slate-600'}`} 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column detail panel */}
        <div className="md:col-span-5">
          <AnimatePresence mode="wait">
            {activeSkillIndex !== null && filteredSkills[activeSkillIndex] ? (
              <motion.div
                key={filteredSkills[activeSkillIndex].name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="bg-[#141419] border border-white/5 rounded-lg p-5 shadow-2xl space-y-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-display font-bold text-white text-base md:text-lg tracking-tight leading-tight">
                      {filteredSkills[activeSkillIndex].name}
                    </h4>
                    <span className="text-[9px] bg-[#0A0A0B] text-brand-500 px-2.5 py-1 rounded font-mono font-bold inline-block mt-2 border border-white/5 uppercase tracking-wide">
                      Level: {filteredSkills[activeSkillIndex].level}% Match
                    </span>
                  </div>
                  <span className="p-2 bg-white/5 text-brand-500 rounded border border-white/5">
                    {React.createElement(getIcon(filteredSkills[activeSkillIndex].iconName), { className: 'h-5 w-5' })}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {filteredSkills[activeSkillIndex].description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                    Sub-modules & Techniques
                  </h6>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {filteredSkills[activeSkillIndex].subTools?.map((sub) => (
                      <span
                        key={sub}
                        className="px-2.5 py-1 bg-[#0A0A0B] border border-white/5 hover:bg-white/5 text-slate-300 text-[10.5px] font-semibold rounded flex items-center gap-1.5 transition duration-150"
                      >
                        <CheckCircle2 className="h-3 w-3 text-brand-500 shrink-0" />
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-[#141419]/85 border border-white/5 rounded-lg p-8 text-center text-slate-500 text-xs">
                <p>Click any skill from the list to look up detailed toolkit execution details.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
