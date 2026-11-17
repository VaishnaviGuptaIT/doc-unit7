import React from 'react';
import { ArrowUp, Cloud, Heart, GraduationCap, Sparkles } from 'lucide-react';
import { unitMetaData } from '../data/unit7Data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Thank You & Faculty Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-950 dark:via-slate-900 dark:to-purple-950 border border-blue-500/30 dark:border-slate-800 text-center max-w-3xl mx-auto mb-10 space-y-4 shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-white/20 dark:bg-gradient-to-tr dark:from-blue-500 dark:to-purple-600 backdrop-blur-md flex items-center justify-center text-white mx-auto shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-2xl font-bold font-outfit text-white">
            Thank You for Learning Unit 7! 🎉
          </h3>

          <p className="text-xs sm:text-sm text-blue-50 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Keep practicing the diagrams and key concepts. You are now fully prepared for Unit 7 quizzes, vivas, and university semester examinations!
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 dark:bg-slate-800 border border-white/30 dark:border-slate-700 text-xs font-bold text-white dark:text-purple-300">
              Faculty: {unitMetaData.faculty}
            </span>
          </div>
        </div>

        {/* Footer Bottom Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs">
          
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
            <Cloud className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>DevOps in Cloud — {unitMetaData.unitNumber}</span>
          </div>

          <div className="font-bold text-slate-900 dark:text-white font-outfit text-sm">
            {unitMetaData.footerText}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all flex items-center gap-2 font-medium"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>

        </div>

      </div>
    </footer>
  );
}
