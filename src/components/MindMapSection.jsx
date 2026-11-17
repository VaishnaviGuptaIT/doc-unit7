import React from 'react';
import { Network, CheckCircle2, Sparkles } from 'lucide-react';
import { mindMapSummary } from '../data/unit7Data';

export default function MindMapSection() {
  return (
    <section id="mind-map" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Network className="w-3.5 h-3.5" /> Unit 7 Mind Map
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Unit 7 Revision Mind Map
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Quick visual summary of all key topics covered in Unit 7.
          </p>
        </div>

        {/* Mind Map Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mindMapSummary.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
