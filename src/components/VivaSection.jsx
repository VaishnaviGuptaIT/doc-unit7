import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { vivaQuestions } from '../data/unit7Data';

export default function VivaSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleQuestion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="viva-exam" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Oral Exam Preparation
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            5 Viva  Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Quick answers and tips for viva examinations with external examiners.
          </p>
        </div>

        <div className="space-y-4">
          {vivaQuestions.map((q, idx) => (
            <div 
              key={q.id}
              className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleQuestion(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold font-outfit text-slate-900 dark:text-white text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors"
              >
                <span>{q.question}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {openIdx === idx && (
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-700/60 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 animate-in fade-in">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
                    <span className="font-bold text-blue-700 dark:text-blue-300 block mb-1">Answer:</span>
                    <p>{q.answer}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Viva Tip: {q.tip}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
