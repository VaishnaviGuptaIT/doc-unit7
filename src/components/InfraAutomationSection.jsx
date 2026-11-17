import React, { useState } from 'react';
import { 
  Cpu, 
  XCircle, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  BookMarked, 
  HelpCircle,
  Sparkles,
  Play,
  FileCode,
  Cloud,
  Server
} from 'lucide-react';
import { infraAutomationData } from '../data/unit7Data';

export default function InfraAutomationSection() {
  const data = infraAutomationData;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="infrastructure-automation" className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" /> Topic 2 in Syllabus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            {data.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
            Infrastructure automation tools specific to cloud platforms
          </p>
        </div>

        {/* Hero Banner Definition Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-purple-200" />
            <h3 className="font-bold font-outfit text-lg">Core Concept:</h3>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-outfit leading-relaxed">
            "{data.simpleDefinition}"
          </p>
        </div>

        {/* Manual vs Automation Visual Comparison Box */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-12">
          <h3 className="text-xl font-bold font-outfit text-center text-white mb-6">
            Manual Creation vs Infrastructure Automation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Manual Box */}
            <div className="p-6 rounded-2xl bg-red-950/40 border border-red-800/60 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-bold font-outfit text-lg">
                <XCircle className="w-6 h-6 text-red-500" />
                {data.comparison.manual.title}
              </div>
              <ul className="space-y-2 text-xs text-red-200">
                {data.comparison.manual.steps.map((st, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {st}
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs font-bold text-red-300 bg-red-900/40 p-2.5 rounded-xl border border-red-800/40 text-center">
                Manual: Create 10 cloud resources one by one ❌
              </div>
            </div>

            {/* Automation Box */}
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-outfit text-lg">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                {data.comparison.automation.title}
              </div>
              <ul className="space-y-2 text-xs text-emerald-200">
                {data.comparison.automation.steps.map((st, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {st}
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-xs font-bold text-emerald-300 bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-800/40 text-center">
                Automation: Give instructions once → resources created automatically ✅
              </div>
            </div>

          </div>
        </div>

        {/* 4 Questions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">1</span>
              What is it?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.whatIsIt}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">2</span>
              Why do we need it?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.whyDoWeNeedIt}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">3</span>
              How does it work?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.howItWorks}
            </p>
          </div>

        </div>

        {/* Cloud-Specific Infrastructure Tools Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Cloud className="w-5 h-5 text-purple-500" />
            Cloud Platform-Specific Automation Tools
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.cloudExamples.map((ex, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-purple-500/50 transition-colors"
              >
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                  {ex.cloud}
                </span>
                <h4 className="text-base font-bold font-outfit text-slate-900 dark:text-white">
                  {ex.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {ex.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE DIAGRAM: Instructions/Code -> Cloud Platform -> Resources Created */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Interactive Diagram</span>
              <h3 className="text-2xl font-bold font-outfit text-white">Infrastructure Automation Diagram</h3>
            </div>
            <button 
              onClick={() => setActiveStep((prev) => (prev + 1) % data.diagramSteps.length)}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Next Step
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {data.diagramSteps.map((st, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  activeStep === idx 
                    ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-500/30 scale-105 font-bold' 
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                    activeStep === idx ? 'bg-slate-950 text-purple-300' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {st.step}
                  </span>
                  {idx < 2 && <ArrowRight className={`w-4 h-4 hidden sm:block ${activeStep === idx ? 'text-white' : 'text-slate-500'}`} />}
                </div>
                <h4 className="text-base font-bold font-outfit">{st.title}</h4>
                <p className={`text-xs mt-1 ${activeStep === idx ? 'text-purple-100' : 'text-slate-400'}`}>{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
            <span className="font-bold text-purple-400">Step Explanation: </span>
            {data.diagramSteps[activeStep].desc}
          </div>
        </div>

        {/* 3 Callout Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800/80 space-y-3">
            <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 font-bold font-outfit text-sm">
              <Lightbulb className="w-4 h-4" /> "Remember This" Box
            </div>
            <p className="text-xs text-purple-900 dark:text-purple-200 font-semibold leading-relaxed">
              {data.rememberBox}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-800/80 space-y-3">
            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold font-outfit text-sm">
              <BookMarked className="w-4 h-4" /> Exam Point 📌
            </div>
            <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
              {data.examPoint}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 space-y-3">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold font-outfit text-sm">
              <HelpCircle className="w-4 h-4" /> Classroom Question ❓
            </div>
            <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed whitespace-pre-line">
              {data.classroomQuestion}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
