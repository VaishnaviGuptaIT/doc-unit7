import React, { useState } from 'react';
import { 
  Play, 
  BookMarked, 
  HelpCircle, 
  Lightbulb, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { cloudToolsData } from '../data/unit7Data';

export default function GCPCloudBuildSection() {
  const data = cloudToolsData.gcpCloudBuild;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="gcp-cloud-build" className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              Developer Tool 3 (Google Cloud Platform)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white flex items-center gap-3">
              {data.name}
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-950/40 p-3 rounded-2xl border border-indigo-200 dark:border-indigo-900/60">
            <img src={data.logo} alt="Google Cloud" className="w-8 h-8 object-contain" />
            <div className="text-xs">
              <p className="font-bold text-slate-900 dark:text-indigo-200">{data.cloud}</p>
              <p className="text-slate-500 dark:text-slate-400">Serverless Cloud Build Service</p>
            </div>
          </div>
        </div>

        {/* Hero Banner Definition Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white shadow-lg mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h3 className="font-bold font-outfit text-lg">Core Concept:</h3>
          </div>
          <p className="text-xl sm:text-2xl font-bold font-outfit leading-relaxed">
            "{data.simpleDefinition}"
          </p>
        </div>

        {/* 4 Core Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">1</span>
              What is it?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.whatIsIt}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">2</span>
              Why do we need it?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.whyDoWeNeedIt}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">3</span>
              How does it work?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.howItWorks}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold font-outfit text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">4</span>
              Simple Real-Life Example
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.realLifeExample}
            </p>
          </div>

        </div>

        {/* Cloud Example Banner */}
        <div className="p-6 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 mb-8 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-600 text-white font-bold shrink-0">
            ☁️
          </div>
          <div>
            <h4 className="font-bold font-outfit text-slate-900 dark:text-indigo-200 text-base mb-1">
              Real-World Enterprise Project Example:
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {data.cloudExample}
            </p>
          </div>
        </div>

        {/* GCP Ecosystem Tools Suite */}
        {data.ecosystemTools && (
          <div className="mb-12">
            <h4 className="text-base font-bold font-outfit text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Related GCP Build & Container Services:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.ecosystemTools.map((tool, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40">
                  <p className="font-bold text-xs text-indigo-950 dark:text-indigo-200">{tool.name}</p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{tool.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERACTIVE DIAGRAM: Code -> Build -> Test -> Output */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">Interactive Diagram</span>
              <h3 className="text-2xl font-bold font-outfit text-white">GCP Cloud Build Flow</h3>
            </div>
            <button 
              onClick={() => setActiveStep((prev) => (prev + 1) % data.diagramSteps.length)}
              className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center gap-2 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Next Stage
            </button>
          </div>

          {/* Pipeline Visual Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8 relative">
            {data.diagramSteps.map((st, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeStep === idx 
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-500/30 scale-105 font-bold' 
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                    activeStep === idx ? 'bg-slate-950 text-indigo-300' : 'bg-slate-700 text-slate-400'
                  }`}>
                    Stage 0{idx + 1}
                  </span>
                  {idx < 3 && <ArrowRight className={`w-4 h-4 hidden sm:block ${activeStep === idx ? 'text-white' : 'text-slate-500'}`} />}
                </div>
                <h4 className="text-base font-bold font-outfit">{st.step}</h4>
                <p className={`text-xs mt-1 ${activeStep === idx ? 'text-indigo-100' : 'text-slate-400'}`}>{st.label}</p>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
            <h4 className="text-indigo-400 font-bold text-base mb-1 font-outfit">
              Selected Stage Details: {data.diagramSteps[activeStep].step}
            </h4>
            <p className="text-xs text-slate-200">
              {data.diagramSteps[activeStep].desc}
            </p>
          </div>
        </div>

        {/* 3 Callout Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800/80 space-y-3">
            <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold font-outfit text-sm">
              <Lightbulb className="w-4 h-4" /> "Remember This" Box
            </div>
            <p className="text-xs text-indigo-900 dark:text-indigo-200 font-semibold leading-relaxed">
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

          <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800/80 space-y-3">
            <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 font-bold font-outfit text-sm">
              <HelpCircle className="w-4 h-4" /> Classroom Question ❓
            </div>
            <p className="text-xs text-purple-900 dark:text-purple-200 leading-relaxed whitespace-pre-line">
              {data.classroomQuestion}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
