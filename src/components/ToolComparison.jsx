import React, { useState } from 'react';
import { Table, CheckCircle2, Cloud, Sparkles } from 'lucide-react';
import { toolComparisonTable } from '../data/unit7Data';

export default function ToolComparison() {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <section id="comparison" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <Table className="w-3.5 h-3.5" /> Direct Syllabus Comparison
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Cloud DevOps Tools Comparison
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Quick reference guide comparing the 3 cloud-based developer tools by platform and main purpose.
          </p>
        </div>

        {/* Clean Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-outfit text-sm border-b border-slate-200 dark:border-slate-700">
                <th className="p-4 font-bold">Tool</th>
                <th className="p-4 font-bold">Cloud Platform</th>
                <th className="p-4 font-bold">Main Purpose</th>
                <th className="p-4 font-bold">Best Suited For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
              {toolComparisonTable.map((row, idx) => (
                <tr 
                  key={idx}
                  onClick={() => setSelectedTool(row.tool === selectedTool ? null : row.tool)}
                  className={`cursor-pointer transition-colors ${
                    selectedTool === row.tool 
                      ? 'bg-blue-50 dark:bg-blue-950/40 font-medium' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <td className="p-4 font-bold font-outfit text-slate-900 dark:text-white">
                    <span className={row.color}>{row.tool}</span>
                  </td>
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">
                    {row.platform}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-semibold text-xs inline-block">
                      {row.purpose}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Exam Memory Aid Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white border border-blue-800/60 shadow-md">
          <div className="flex items-center gap-2 text-amber-400 font-bold font-outfit mb-2">
            <Sparkles className="w-5 h-5" /> Quick Exam Formula to Remember:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-amber-500/30">
              <span className="font-bold text-amber-400">AWS:</span> CodePipeline = Software Delivery Automation
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-sky-500/30">
              <span className="font-bold text-sky-400">Azure:</span> Azure DevOps = Complete Lifecycle Toolkit
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-indigo-500/30">
              <span className="font-bold text-indigo-400">GCP:</span> Cloud Build = Fast Cloud Compilation & Tests
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
