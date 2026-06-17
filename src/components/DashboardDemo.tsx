/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Cpu, 
  RefreshCw, 
  Database, 
  Lock, 
  BarChart2, 
  Calendar,
  Layers,
  ChevronRight,
  TrendingDown,
  FileDown,
  Copy,
  Check
} from 'lucide-react';

// Live interactive Data Demonstrator to showcase Daniel's exact skills specified in CV.
// Demonstrates:
// 1. Machine Breakdown Diagnostics (for Deloitte Australia, 9 categories, 10-min reports)
// 2. HR Equality Scoring & Classification (for Deloitte Australia, equality metric analysis)

interface MachineReportPoint {
  time: string;
  category: string;
  frequency: number;
  criticality: 'High' | 'Medium' | 'Low';
  status: 'Unresolved' | 'Resolving' | 'Fixed';
}

const MACHINE_CATEGORIES = [
  'Rotary Turbines', 'Hydraulic Pumps', 'Pneumatic Conveyors', 
  'Thermal Compressors', 'Optical Sensors', 'Robotic Arms', 
  'Cooling Systems', 'Power Inverters', 'Logic Controllers'
];

const INITIAL_REPORTS: MachineReportPoint[] = [
  { time: '08:00', category: 'Rotary Turbines', frequency: 12, criticality: 'High', status: 'Fixed' },
  { time: '08:10', category: 'Hydraulic Pumps', frequency: 4, criticality: 'Low', status: 'Fixed' },
  { time: '08:20', category: 'Pneumatic Conveyors', frequency: 19, criticality: 'High', status: 'Resolving' },
  { time: '08:30', category: 'Optical Sensors', frequency: 8, criticality: 'Medium', status: 'Fixed' },
  { time: '08:40', category: 'Thermal Compressors', frequency: 15, criticality: 'High', status: 'Unresolved' },
  { time: '08:50', category: 'Cooling Systems', frequency: 6, criticality: 'Low', status: 'Fixed' },
  { time: '09:00', category: 'Power Inverters', frequency: 11, criticality: 'Medium', status: 'Fixed' },
  { time: '09:10', category: 'Robotic Arms', frequency: 22, criticality: 'High', status: 'Resolving' },
  { time: '09:20', category: 'Logic Controllers', frequency: 3, criticality: 'Low', status: 'Fixed' },
  { time: '09:30', category: 'Rotary Turbines', frequency: 14, criticality: 'High', status: 'Fixed' },
  { time: '09:40', category: 'Hydraulic Pumps', frequency: 7, criticality: 'Medium', status: 'Fixed' },
  { time: '09:50', category: 'Pneumatic Conveyors', frequency: 16, criticality: 'High', status: 'Fixed' },
];

interface EqualityScoreRow {
  factoryLocation: string;
  department: string;
  headcount: number;
  avgWageGap: number; // percentage gap
  repRatio: number; // percentage of leadership
  equalityScore: number; // calculated combined
}

const INITIAL_EQUALITY_DATA: EqualityScoreRow[] = [
  { factoryLocation: 'Sydney Hub', department: 'Logistics', headcount: 240, avgWageGap: 4.8, repRatio: 42, equalityScore: 88 },
  { factoryLocation: 'Melbourne Plant', department: 'Logistics', headcount: 450, avgWageGap: 11.2, repRatio: 28, equalityScore: 71 },
  { factoryLocation: 'Brisbane Sector', department: 'Engineering', headcount: 120, avgWageGap: 3.5, repRatio: 51, equalityScore: 94 },
  { factoryLocation: 'Perth Works', department: 'Engineering', headcount: 310, avgWageGap: 9.1, repRatio: 33, equalityScore: 79 },
  { factoryLocation: 'Adelaide Core', department: 'Operations', headcount: 180, avgWageGap: 1.2, repRatio: 48, equalityScore: 97 },
  { factoryLocation: 'Sydney Hub', department: 'Operations', headcount: 520, avgWageGap: 7.9, repRatio: 36, equalityScore: 82 },
  { factoryLocation: 'Melbourne Plant', department: 'Engineering', headcount: 380, avgWageGap: 12.4, repRatio: 22, equalityScore: 66 },
  { factoryLocation: 'Perth Works', department: 'Logistics', headcount: 190, avgWageGap: 8.5, repRatio: 35, equalityScore: 80 },
];

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState<'diagnostics' | 'equality'>('diagnostics');
  
  // Machine Diagnostic Controls
  const [machineData, setMachineData] = useState<MachineReportPoint[]>(INITIAL_REPORTS);
  const [selectedMachineCategory, setSelectedMachineCategory] = useState<string>('All');
  const [diagnosticFilter, setDiagnosticFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
  const [isSimulatingLoad, setIsSimulatingLoad] = useState<boolean>(false);

  // HR Equality Controls
  const [equalityData, setEqualityData] = useState<EqualityScoreRow[]>(INITIAL_EQUALITY_DATA);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [equalityTargetMin, setEqualityTargetMin] = useState<number>(75);

  // Copy & Export UX States
  const [copiedDiagnostics, setCopiedDiagnostics] = useState(false);
  const [copiedEquality, setCopiedEquality] = useState(false);

  // Export & Copy Helpers
  const handleExportDiagnosticsCSV = () => {
    const headers = 'Time,Sensor Asset,Anomalies Count,Risk Level\n';
    const csvContent = filteredMachineData.map(d => `${d.time},"${d.category}",${d.frequency},${d.criticality}`).join('\n');
    const blob = new Blob([headers + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'machine_sensor_diagnostics.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyDiagnosticsJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(filteredMachineData, null, 2));
    setCopiedDiagnostics(true);
    setTimeout(() => setCopiedDiagnostics(false), 2000);
  };

  const handleExportEqualityCSV = () => {
    const headers = 'Location,Department,Headcount,Wage Gap %,Leadership Ratio %,Equality Score\n';
    const csvContent = filteredEqualityData.map(d => `"${d.factoryLocation}","${d.department}",${d.headcount},${d.avgWageGap},${d.repRatio},${d.equalityScore}`).join('\n');
    const blob = new Blob([headers + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'hr_equality_scorecard.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEqualityJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(filteredEqualityData, null, 2));
    setCopiedEquality(true);
    setTimeout(() => setCopiedEquality(false), 2000);
  };

  const simulateRealtimeFeed = () => {
    setIsSimulatingLoad(true);
    setTimeout(() => {
      const generated: MachineReportPoint[] = machineData.map(item => {
        const delta = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newFreq = Math.max(1, Math.min(35, item.frequency + delta));
        
        // Dynamic reclassification
        let criticality: 'High' | 'Medium' | 'Low' = 'Low';
        if (newFreq > 15) criticality = 'High';
        else if (newFreq > 7) criticality = 'Medium';
        
        const statuses: ('Unresolved' | 'Resolving' | 'Fixed')[] = ['Unresolved', 'Resolving', 'Fixed'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

        return {
          ...item,
          frequency: newFreq,
          criticality,
          status: item.status === 'Fixed' ? (Math.random() > 0.4 ? 'Fixed' : randomStatus) : randomStatus
        };
      });
      setMachineData(generated);
      setIsSimulatingLoad(false);
    }, 800);
  };

  const simulateHRAjustments = () => {
    setIsSimulatingLoad(true);
    setTimeout(() => {
      const adjusted = equalityData.map(row => {
        // Boost scores slowly to simulate an automated "equality score optimization" algorithm
        const wageReduction = (Math.random() * 1.5);
        const newWageGap = Math.max(0.5, Number((row.avgWageGap - wageReduction).toFixed(1)));
        const leadershipIncrease = Math.floor(Math.random() * 3);
        const newRepRatio = Math.min(60, row.repRatio + leadershipIncrease);
        
        // Recalculate equality rating
        const calculated = Math.min(100, Math.floor(100 - (newWageGap * 3) + (newRepRatio / 2)));

        return {
          ...row,
          avgWageGap: newWageGap,
          repRatio: newRepRatio,
          equalityScore: calculated
        };
      });
      setEqualityData(adjusted);
      setIsSimulatingLoad(false);
    }, 700);
  };

  // Memoized Diagnostic Analytics
  const filteredMachineData = useMemo(() => {
    return machineData.filter(item => {
      const catMatch = selectedMachineCategory === 'All' || item.category === selectedMachineCategory;
      const critMatch = diagnosticFilter === 'All' || item.criticality === diagnosticFilter;
      return catMatch && critMatch;
    });
  }, [machineData, selectedMachineCategory, diagnosticFilter]);

  const machineStats = useMemo(() => {
    const totalFreq = filteredMachineData.reduce((acc, curr) => acc + curr.frequency, 0);
    const criticalCount = filteredMachineData.filter(i => i.criticality === 'High').length;
    const avgFrequency = filteredMachineData.length > 0 ? (totalFreq / filteredMachineData.length).toFixed(1) : '0';
    return { totalFreq, criticalCount, avgFrequency };
  }, [filteredMachineData]);

  // Memoized Equality Analytics
  const filteredEqualityData = useMemo(() => {
    return equalityData.filter(item => {
      const locationMatch = selectedLocation === 'All' || item.factoryLocation === selectedLocation;
      const targetMatch = item.equalityScore >= equalityTargetMin;
      return locationMatch && targetMatch;
    });
  }, [equalityData, selectedLocation, equalityTargetMin]);

  const equalityStats = useMemo(() => {
    const sumScore = filteredEqualityData.reduce((acc, curr) => acc + curr.equalityScore, 0);
    const avgScore = filteredEqualityData.length > 0 ? (sumScore / filteredEqualityData.length).toFixed(1) : '0';
    const totalEmployees = filteredEqualityData.reduce((acc, curr) => acc + curr.headcount, 0);
    const underperforming = equalityData.filter(i => i.equalityScore < 80).length;
    return { avgScore, totalEmployees, underperforming };
  }, [filteredEqualityData, equalityData]);

  // Find max value in dataset to scale custom SVG elements properly
  const maxDiagnosticFreq = useMemo(() => {
    return Math.max(...machineData.map(d => d.frequency), 10);
  }, [machineData]);

  return (
    <div className="bg-[#0F0F12] rounded-xl border border-white/5 shadow-2xl overflow-hidden">
      {/* Header bar / Tabs */}
      <div className="bg-[#141419] px-6 py-5 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 animate-pulse" />
            <h3 className="font-display font-semibold text-lg tracking-wide text-white">Interactive Data Sandbox</h3>
          </div>
          <p className="text-slate-400 text-xs font-mono mt-0.5">
            React interactive simulation of key Deloitte Australia analytics projects
          </p>
        </div>

        <div className="flex bg-[#0A0A0B] p-1 rounded-md border border-white/5 w-full md:w-auto">
          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-1.5 rounded text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer ${
              activeTab === 'diagnostics' 
                ? 'bg-brand-500 text-slate-950 font-semibold shadow-md shadow-brand-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Cpu className="h-3.5 w-3.5" />
            Machine Diagnostic Diagnostics
          </button>
          <button
            onClick={() => setActiveTab('equality')}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-1.5 rounded text-xs font-medium tracking-tight transition-all duration-200 cursor-pointer ${
              activeTab === 'equality' 
                ? 'bg-brand-500 text-slate-950 font-semibold shadow-md shadow-brand-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            HR Equality Classifier
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'diagnostics' ? (
            <motion.div
              key="diagnostics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Project Abstract */}
              <div className="bg-[#141419] border border-white/5 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-block bg-white/5 font-mono text-[10px] text-brand-500 px-2 py-0.5 rounded tracking-wider font-semibold border border-white/5">
                    Client Case Study
                  </span>
                  <h4 className="text-white font-semibold text-sm tracking-tight font-display">
                    Diagnostic Analysis of 9-Category Real-time Asset Logs
                  </h4>
                  <p className="text-xs text-slate-450 leading-relaxed max-w-2xl">
                    Processed a dataset of machinery sensor anomalies, reporting every 10 minutes. Designed diagnostic 
                    analytics to combine separate diagnostic streams, helping engineers reveal critical bottleneck patterns.
                  </p>
                </div>
                <button
                  onClick={simulateRealtimeFeed}
                  disabled={isSimulatingLoad}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-slate-950 rounded-md text-xs font-semibold hover:bg-brand-500 transition-all duration-150 active:scale-95 duration-100 transition-all self-start md:self-center shrink-0 shadow-md disabled:opacity-50 cursor-pointer"
                  id="btn-simulate-diagnostics"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isSimulatingLoad ? 'animate-spin' : ''}`} />
                  Anomalies Simulation
                </button>
              </div>

              {/* Stat Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Anomaly Pulse rate</span>
                    <h5 className="text-2xl font-display font-semibold text-white mt-1">
                      {machineStats.totalFreq} <span className="text-xs text-slate-500 font-normal">pts</span>
                    </h5>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-md text-emerald-400">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>

                <div className="bg-amber-500/5 border border-amber-500/10 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">High Critical Risk Nodes</span>
                    <h5 className="text-2xl font-display font-semibold text-white mt-1">
                      {machineStats.criticalCount} <span className="text-xs text-slate-500 font-normal">assets</span>
                    </h5>
                  </div>
                  <div className="p-2 bg-amber-500/10 rounded-md text-amber-500">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Average Load Speed</span>
                    <h5 className="text-2xl font-display font-semibold text-white mt-1">
                      {machineStats.avgFrequency} <span className="text-xs text-slate-500 font-normal">/ 10m</span>
                    </h5>
                  </div>
                  <div className="p-2 bg-white/5 rounded-md text-slate-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Filters / Controller Bar */}
              <div className="flex flex-wrap items-center gap-4 py-3 border-b border-white/5">
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">
                    Machine Categories
                  </label>
                  <select 
                    value={selectedMachineCategory}
                    onChange={(e) => setSelectedMachineCategory(e.target.value)}
                    className="bg-[#141419] border border-white/5 rounded px-3 py-1.5 text-xs text-slate-200 outline-none focus:border-brand-500 cursor-pointer font-sans"
                  >
                    <option value="All">All Categories ({MACHINE_CATEGORIES.length})</option>
                    {MACHINE_CATEGORIES.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">
                    Risk Classification
                  </label>
                  <div className="flex gap-1 bg-[#0A0A0B] p-0.5 rounded border border-white/5">
                    {['All', 'High', 'Medium', 'Low'].map(lvl => (
                      <button
                        key={lvl}
                        onClick={() => setDiagnosticFilter(lvl as any)}
                        className={`px-3 py-1 rounded text-xs transition-colors font-medium cursor-pointer ${
                          diagnosticFilter === lvl 
                            ? 'bg-brand-500 text-slate-950 font-semibold' 
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Render Area: Visual Anomaly Chart + Table */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Visual Chart Panel */}
                <div className="lg:col-span-7 bg-[#141419] rounded-lg p-5 border border-white/5">
                  <div className="mb-4 flex justify-between items-center">
                    <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <BarChart2 className="h-4 w-4 text-brand-500" />
                      Anomalies Distribution Analysis
                    </h5>
                    <span className="text-[11px] font-mono text-slate-500">Values: Max {maxDiagnosticFreq} hz</span>
                  </div>

                  {/* Responsive Custom SVG Line & Scatter Chart */}
                  <div className="h-64 flex items-end justify-between gap-1.5 pt-4 px-2 relative border-b border-l border-white/10">
                    {/* SVG lines in the background */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[8px] font-mono text-slate-700">
                      <div className="border-b border-white/5 w-full h-0 pt-1" />
                      <div className="border-b border-white/5 w-full h-0" />
                      <div className="border-b border-white/5 w-full h-0 mb-6" />
                    </div>

                    {filteredMachineData.map((item, idx) => {
                      const percent = (item.frequency / maxDiagnosticFreq) * 100;
                      // Color based on risk level
                      const barColor = item.criticality === 'High' 
                        ? 'bg-rose-500/80 hover:bg-rose-500' 
                        : item.criticality === 'Medium' 
                        ? 'bg-amber-500/80 hover:bg-amber-500' 
                        : 'bg-emerald-500/80 hover:bg-emerald-500';

                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center h-full group relative">
                           {/* Hover Tooltip card */}
                          <div className="absolute bottom-full mb-2 bg-[#0A0A0B]/95 backdrop-blur-md text-white rounded px-2.5 py-1.5 text-[10px] hidden group-hover:block transition-all duration-150 z-30 pointer-events-none shadow-xl w-32 border border-white/10 font-sans">
                            <p className="font-semibold text-[11px] truncate">{item.category}</p>
                            <div className="flex justify-between text-slate-400 mt-1 font-mono text-[9px]">
                              <span>Freq: {item.frequency}</span>
                              <span className="text-brand-500 font-semibold">{item.criticality}</span>
                            </div>
                            <p className="text-slate-500 text-[8px] mt-0.5">Time: {item.time}</p>
                          </div>

                          {/* Interactive Bar */}
                          <div className="w-full flex items-end h-full relative">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${percent}%` }}
                              transition={{ type: 'spring', damping: 20 }}
                              className={`w-full ${barColor} rounded-t opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer`}
                            />
                          </div>

                          {/* Time label */}
                          <span className="text-[9px] font-mono text-slate-500 mt-2 rotate-45 select-none origin-left truncate max-w-[28px] h-4">
                            {item.time}
                          </span>
                        </div>
                      );
                    })}

                    <AnimatePresence>
                      {filteredMachineData.length === 0 && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                        >
                          <AlertTriangle className="h-8 w-8 text-slate-600 mb-2 animate-bounce" />
                          <p className="text-slate-400 font-semibold text-xs">No anomalies match selection criteria</p>
                          <p className="text-slate-500 text-[10px] mt-1">Try resetting the risk filter or switching machine category</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-8 flex justify-center gap-6 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded bg-rose-500 inline-block" />
                      <span className="text-slate-400">High (&gt;15 anomalies/10m)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded bg-amber-500 inline-block" />
                      <span className="text-slate-400">Medium (8-15)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded bg-emerald-500 inline-block" />
                      <span className="text-slate-400">Low (&lt;8)</span>
                    </div>
                  </div>
                </div>

                {/* Table Breakdown Panel */}
                <div className="lg:col-span-5 bg-[#141419] border border-white/5 rounded-lg overflow-hidden shadow-2xl">
                  <div className="px-5 py-4 border-b border-white/5 flex flex-wrap gap-2 justify-between items-center bg-[#111116]/60">
                    <div className="space-y-0.5">
                      <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Processed Feed Log
                      </h5>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Real-time telemetry reports
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyDiagnosticsJSON}
                        className="p-1.5 rounded bg-[#0A0A0B] hover:bg-white/5 border border-white/5 text-slate-400 hover:text-white transition duration-150 relative group cursor-pointer"
                        title="Copy as JSON"
                      >
                        {copiedDiagnostics ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                        <span className="absolute bottom-full mb-1 right-0 bg-[#0A0A0B] text-[8px] text-slate-300 px-1 py-0.5 rounded hidden group-hover:block whitespace-nowrap border border-white/10">
                          {copiedDiagnostics ? 'Copied JSON!' : 'Copy raw JSON'}
                        </span>
                      </button>
                      
                      <button
                        onClick={handleExportDiagnosticsCSV}
                        className="p-1.5 rounded bg-[#0A0A0B] hover:bg-white/5 border border-white/5 text-slate-400 hover:text-white transition duration-150 relative group cursor-pointer"
                        title="Download CSV"
                      >
                        <FileDown className="h-3 w-3" />
                        <span className="absolute bottom-full mb-1 right-0 bg-[#0A0A0B] text-[8px] text-slate-300 px-1 py-0.5 rounded hidden group-hover:block whitespace-nowrap border border-white/10">
                          Download CSV Report
                        </span>
                      </button>

                      <span className="text-[10px] font-mono bg-brand-500/10 text-brand-500 px-2 py-0.5 rounded font-bold border border-brand-500/20">
                        {filteredMachineData.length} pts
                      </span>
                    </div>
                  </div>

                  <div className="overflow-y-auto max-h-[300px]">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#0A0A0B] border-b border-white/5 text-slate-400 font-medium select-none text-[10px] uppercase">
                          <th className="py-2.5 px-4 font-bold tracking-wider">Time</th>
                          <th className="py-2.5 px-4 font-bold tracking-wider">Sensor Asset</th>
                          <th className="py-2.5 px-4 text-center font-bold tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 font-sans text-slate-300">
                        {filteredMachineData.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="py-2.5 px-4 font-mono font-medium text-[11px] text-slate-500">{row.time}</td>
                            <td className="py-2.5 px-4 font-semibold text-slate-200 truncate max-w-[140px]">{row.category}</td>
                            <td className="py-2.5 px-4 text-center">
                              <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                                row.criticality === 'High' 
                                  ? 'bg-rose-950/20 text-rose-450 border border-rose-500/25' 
                                  : row.criticality === 'Medium' 
                                  ? 'bg-amber-950/20 text-amber-450 border border-amber-500/25' 
                                  : 'bg-emerald-950/20 text-emerald-455 border border-emerald-500/25'
                              }`}>
                                {row.frequency} Hz
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="equality"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Project Abstract */}
              <div className="bg-[#141419] border border-white/5 p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-block bg-white/5 font-mono text-[10px] text-brand-500 px-2 py-0.5 rounded tracking-wider font-semibold border border-white/5">
                    Strategic AI Consulting
                  </span>
                  <h4 className="text-white font-semibold text-sm tracking-tight font-display">
                    Cognitive Equality Classification System (HR Analytics)
                  </h4>
                  <p className="text-xs text-slate-450 leading-relaxed max-w-2xl">
                    Spearheaded a classification paradigm mapping wages, representational ratios, and workforces 
                    to compute structured <strong>Equality Scores</strong>. Designed predictive actions to optimize 
                    gaps in factory divisions.
                  </p>
                </div>
                <button
                  onClick={simulateHRAjustments}
                  disabled={isSimulatingLoad}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-slate-950 rounded-md text-xs font-semibold hover:bg-brand-500 transition-all duration-150 active:scale-95 duration-100 transition-all self-start md:self-center shrink-0 shadow-md disabled:opacity-50 cursor-pointer"
                  id="btn-simulate-equality"
                >
                  <Users className={`h-3.5 w-3.5 ${isSimulatingLoad ? 'animate-spin' : ''}`} />
                  Optimize Analytics
                </button>
              </div>

              {/* Stat Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-amber-500/5 border border-brand-500/10 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Average Equality Score</span>
                    <h5 className="text-2xl font-display font-semibold text-brand-500 mt-1">
                      {equalityStats.avgScore} <span className="text-xs text-slate-500 font-normal">pts</span>
                    </h5>
                  </div>
                  <div className="p-2 bg-brand-500/10 rounded-md text-brand-500">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Assessed Headcount</span>
                    <h5 className="text-2xl font-display font-semibold text-white mt-1">
                      {equalityStats.totalEmployees.toLocaleString()} <span className="text-xs text-slate-500 font-normal">personnel</span>
                    </h5>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-md text-emerald-400">
                    <Users className="h-5 w-5" />
                  </div>
                </div>

                <div className="bg-rose-500/5 border border-rose-500/10 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Below Target (80 pts)</span>
                    <h5 className="text-2xl font-display font-semibold text-white mt-1">
                      {equalityStats.underperforming} <span className="text-xs text-slate-500 font-normal">divisions</span>
                    </h5>
                  </div>
                  <div className="p-2 bg-rose-500/10 rounded-md text-rose-400">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Filters / Controller Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/5">
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">
                      Factory Location
                    </label>
                    <select 
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="bg-[#141419] border border-white/5 rounded px-3 py-1.5 text-xs text-slate-200 outline-none focus:border-brand-500 cursor-pointer font-sans"
                    >
                      <option value="All">All Factory Hubs</option>
                      <option value="Sydney Hub">Sydney Hub</option>
                      <option value="Melbourne Plant">Melbourne Plant</option>
                      <option value="Brisbane Sector">Brisbane Sector</option>
                      <option value="Perth Works">Perth Works</option>
                      <option value="Adelaide Core">Adelaide Core</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.12em]">
                      Show values above threshold: <span className="font-mono text-brand-500 font-bold">{equalityTargetMin} pts</span>
                    </label>
                    <input 
                      type="range" 
                      min="60" 
                      max="95" 
                      value={equalityTargetMin} 
                      onChange={(e) => setEqualityTargetMin(Number(e.target.value))}
                      className="w-48 h-2 bg-[#0A0A0B] rounded appearance-none cursor-pointer accent-brand-500 mt-2.5 block border border-white/5"
                    />
                  </div>
                </div>
              </div>

              {/* Render Area: Visual Comparison Matrix + Table */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Visual Equality Matrix Radar Bars */}
                <div className="lg:col-span-6 bg-[#141419] rounded-lg p-5 border border-white/5">
                  <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-slate-400" />
                    Wage Gap Comparison (Wider is worse)
                  </h5>

                  <div className="space-y-4">
                    {filteredEqualityData.map((row, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold text-slate-300">{row.factoryLocation} — <span className="text-slate-500 font-normal">{row.department}</span></span>
                          <span className="font-mono text-slate-400 text-[11px]">Wage Gap: <strong className="text-brand-500 font-bold">{row.avgWageGap}%</strong></span>
                        </div>
                        {/* Custom visual progress bar */}
                        <div className="w-full bg-[#0A0A0B] h-2 rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${row.avgWageGap * 6}%` }} 
                            transition={{ type: 'spring', duration: 0.8 }}
                            className={`h-full rounded-full ${
                              row.avgWageGap > 10 
                                ? 'bg-amber-500' 
                                : row.avgWageGap > 5 
                                ? 'bg-brand-500/50' 
                                : 'bg-emerald-500'
                            }`}
                          />
                        </div>
                      </div>
                    ))}

                    {filteredEqualityData.length === 0 && (
                      <div className="py-12 text-center text-slate-500 text-xs">
                        No locations meet criteria above {equalityTargetMin} score.
                      </div>
                    )}
                  </div>
                </div>

                {/* Table Breakdown Panel */}
                <div className="lg:col-span-6 bg-[#141419] border border-white/5 rounded-lg overflow-hidden shadow-2xl">
                  <div className="px-5 py-4 border-b border-white/5 flex flex-wrap gap-2 justify-between items-center bg-[#111116]/60">
                    <div className="space-y-0.5">
                      <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <TrendingUp className="h-4 w-4 text-brand-500" />
                        Evaluated Scorecards
                      </h5>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Classification scorecard rows
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyEqualityJSON}
                        className="p-1.5 rounded bg-[#0A0A0B] hover:bg-white/5 border border-white/5 text-slate-400 hover:text-white transition duration-150 relative group cursor-pointer"
                        title="Copy as JSON"
                      >
                        {copiedEquality ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                        <span className="absolute bottom-full mb-1 right-0 bg-[#0A0A0B] text-[8px] text-slate-300 px-1 py-0.5 rounded hidden group-hover:block whitespace-nowrap border border-white/10">
                          {copiedEquality ? 'Copied JSON!' : 'Copy raw JSON'}
                        </span>
                      </button>
                      
                      <button
                        onClick={handleExportEqualityCSV}
                        className="p-1.5 rounded bg-[#0A0A0B] hover:bg-white/5 border border-white/5 text-slate-400 hover:text-white transition duration-150 relative group cursor-pointer"
                        title="Download CSV"
                      >
                        <FileDown className="h-3 w-3" />
                        <span className="absolute bottom-full mb-1 right-0 bg-[#0A0A0B] text-[8px] text-slate-300 px-1 py-0.5 rounded hidden group-hover:block whitespace-nowrap border border-white/10">
                          Download CSV Report
                        </span>
                      </button>

                      <span className="text-[10px] font-mono bg-brand-500/10 text-brand-500 px-2 py-0.5 rounded font-bold border border-brand-500/20">
                        {filteredEqualityData.length} recs
                      </span>
                    </div>
                  </div>

                  <div className="overflow-y-auto max-h-[300px]">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#0A0A0B] border-b border-white/5 text-slate-400 select-none text-[10px] font-bold uppercase">
                          <th className="py-2.5 px-4">Division Hub</th>
                          <th className="py-2.5 px-4">Leaders</th>
                          <th className="py-2.5 px-4 text-right">Computed</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                        {filteredEqualityData.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="py-2.5 px-4">
                              <p className="font-semibold text-slate-200">{row.factoryLocation}</p>
                              <p className="text-[10px] text-slate-500 font-mono">{row.department} Division</p>
                            </td>
                            <td className="py-2.5 px-4 font-mono font-medium text-[11px] text-slate-400">
                              {row.repRatio}% leadership
                            </td>
                            <td className="py-2.5 px-4 text-right">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                                row.equalityScore >= 90
                                  ? 'bg-emerald-950/20 text-emerald-400 border border-emerald-500/25'
                                  : row.equalityScore >= 80
                                  ? 'bg-brand-500/5 text-brand-400 border border-brand-500/20'
                                  : 'bg-rose-950/20 text-rose-400 border border-rose-500/25'
                              }`}>
                                {row.equalityScore} pts
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
