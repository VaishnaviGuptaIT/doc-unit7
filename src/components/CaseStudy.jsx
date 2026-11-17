import React from 'react';
import { GraduationCap, ArrowDown, Sparkles, CheckCircle } from 'lucide-react';
import { caseStudyData } from '../data/unit7Data';

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Real-Life Practical Application
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            {caseStudyData.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            {caseStudyData.scenario}
          </p>
        </div>

        {/* Case Study Pipeline Card */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 transition-colors duration-300">
          
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
              🎓
            </span>
            <div>
              <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">
                University Student Exam Portal Workflow
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Faculty Vaishnavi Gupta & Developers Team
              </p>
            </div>
          </div>

          {/* Vertical Flow Steps */}
          <div className="space-y-4 relative">
            {caseStudyData.flow.map((st, idx) => (
              <React.Fragment key={idx}>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-outfit text-emerald-700 dark:text-emerald-300">
                      {st.stage}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      {st.detail}
                    </p>
                  </div>
                </div>

                {idx < caseStudyData.flow.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-5 h-5 text-emerald-500 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Key Outcome Highlight Box */}
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold font-outfit text-emerald-900 dark:text-emerald-300 text-base mb-1">
                Key Takeaway for Exam & Viva
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-100 leading-relaxed">
                {caseStudyData.keyOutcome}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
