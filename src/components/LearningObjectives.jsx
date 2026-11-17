import React from 'react';
import { Target, Cloud, Cpu, Table, GraduationCap, CheckCircle2 } from 'lucide-react';
import { learningObjectives } from '../data/unit7Data';

export default function LearningObjectives() {
  const getIcon = (name) => {
    switch(name) {
      case 'Cloud': return <Cloud className="w-6 h-6 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-500" />;
      case 'Table': return <Table className="w-6 h-6 text-cyan-500" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-500" />;
      default: return <Target className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="objectives" className="py-16 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5" /> Unit 7 Goals
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            What Will You Learn in Unit 7?
          </h2>
  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningObjectives.map((obj) => (
            <div 
              key={obj.id} 
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700/60 group-hover:scale-110 transition-transform">
                  {getIcon(obj.icon)}
                </div>
                <span className="text-xs font-bold text-slate-400 font-mono">0{obj.id}</span>
              </div>
              
              <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white mb-2">
                {obj.title}
              </h3>
              
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {obj.desc}
              </p>

              {/* <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Syllabus Covered
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
