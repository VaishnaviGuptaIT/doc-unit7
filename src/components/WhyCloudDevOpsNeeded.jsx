import React from 'react';
import { Zap, ShieldCheck, Globe, Users, Check } from 'lucide-react';
import { whyCloudDevOpsNeeded } from '../data/unit7Data';

export default function WhyCloudDevOpsNeeded() {
  return (
    <section id="why-needed" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" /> Key Advantages
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            {whyCloudDevOpsNeeded.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Four key reasons why modern software engineering relies on automated cloud DevOps tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCloudDevOpsNeeded.points.map((pt, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                {idx + 1}
              </div>
              <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white">
                {pt.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
