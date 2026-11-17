import React from 'react';
import { PenTool, CheckCircle } from 'lucide-react';
import { assignments } from '../data/unit7Data';

export default function AssignmentSection() {
  return (
    <section id="assignment" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <PenTool className="w-3.5 h-3.5" /> Classroom Homework
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Practical Student Assignments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Simple homework tasks to submit in class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assignments.map((asgn) => (
            <div 
              key={asgn.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 hover:border-emerald-500/50 transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-xs">
                #{asgn.id}
              </span>
              <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white">
                {asgn.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {asgn.task}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
