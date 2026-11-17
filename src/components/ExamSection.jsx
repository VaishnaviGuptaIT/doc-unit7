import React, { useState } from 'react';
import { BookOpen, FileText, CheckCircle2 } from 'lucide-react';
import { examQuestions, shortAnswerQuestions } from '../data/unit7Data';

export default function ExamSection() {
  const [activeTab, setActiveTab] = useState('long');

  return (
    <section id="university-exam" className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" /> University Exam Ready
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Exam & Short Answer Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            Model answers formatted precisely for university theoretical papers.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 inline-flex gap-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('long')}
              className={`px-5 py-2.5 rounded-xl transition-colors ${
                activeTab === 'long' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              5 University Exam Questions (5 & 10 Marks)
            </button>
            <button
              onClick={() => setActiveTab('short')}
              className={`px-5 py-2.5 rounded-xl transition-colors ${
                activeTab === 'short' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              3 Short Answer Questions (2 Marks)
            </button>
          </div>
        </div>

        {/* Tab 1: 5 Long Exam Questions */}
        {activeTab === 'long' && (
          <div className="space-y-6">
            {examQuestions.map((q) => (
              <div 
                key={q.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4"
              >
                <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                  {q.question}
                </h3>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                    Model Solution:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {q.answer.map((ans, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ans}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 3 Short Answer Questions */}
        {activeTab === 'short' && (
          <div className="space-y-6">
            {shortAnswerQuestions.map((q) => (
              <div 
                key={q.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <h3 className="text-base font-bold font-outfit text-slate-900 dark:text-white">
                  {q.question}
                </h3>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-indigo-600 dark:text-indigo-400">Answer: </strong>
                    {q.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
