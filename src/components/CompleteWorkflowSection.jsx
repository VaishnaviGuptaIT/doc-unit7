import React, { useState } from 'react';
import { 
  User, 
  Cpu, 
  Hammer, 
  CheckCircle2, 
  Rocket, 
  Globe,
  ArrowRight,
  Play,
  RotateCcw
} from 'lucide-react';
import { completeWorkflowData } from '../data/unit7Data';

export default function CompleteWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'User': return <User className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  return (
    <section id="workflow" className="py-16 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5" /> Complete Cloud DevOps Diagram
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            {completeWorkflowData.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
            {completeWorkflowData.subtitle}
          </p>
        </div>

        {/* Interactive Step-by-Step Simulator Card */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative transition-colors duration-300">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">End-to-End Pipeline</span>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">Click or Run Simulation</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % completeWorkflowData.steps.length)}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Next Step
              </button>
              <button
                onClick={() => setActiveStep(0)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700"
                title="Reset Pipeline"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Node Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {completeWorkflowData.steps.map((st, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  activeStep === idx 
                    ? 'bg-gradient-to-b from-cyan-600 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30 scale-105 font-bold' 
                    : idx < activeStep
                    ? 'bg-cyan-50 dark:bg-slate-800/90 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900'
                    : 'bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    activeStep === idx ? 'bg-white text-cyan-700' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}>
                    {st.number}
                  </span>
                  <div className={activeStep === idx ? 'text-white' : 'text-slate-400 dark:text-slate-500'}>
                    {getIcon(st.icon)}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-outfit">{st.name}</h4>
                  <p className={`text-[10px] mt-0.5 truncate ${activeStep === idx ? 'text-cyan-100 font-medium' : 'text-slate-400 dark:text-slate-500'}`}>
                    Step 0{idx + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Description Details Box */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 shrink-0">
              {getIcon(completeWorkflowData.steps[activeStep].icon)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                  Step {completeWorkflowData.steps[activeStep].number} of 6:
                </span>
                <h4 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                  {completeWorkflowData.steps[activeStep].name}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {completeWorkflowData.steps[activeStep].desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
