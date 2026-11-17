import React from 'react';
import { 
  Cloud, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  BookOpen, 
  Cpu, 
  Zap, 
  Code,
  Layers,
  GraduationCap
} from 'lucide-react';
import { unitMetaData } from '../data/unit7Data';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-800 dark:text-white transition-colors duration-300">
      {/* Background Decorative Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700/80 backdrop-blur-sm shadow-sm text-xs sm:text-sm text-blue-900 dark:text-blue-300 font-medium">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{unitMetaData.subject}</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-purple-700 dark:text-purple-300 font-bold">{unitMetaData.unitNumber}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-outfit tracking-tight leading-tight text-slate-900 dark:text-white">
            DevOps Tools <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-300 bg-clip-text text-transparent">
              in the Cloud
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            A beginner-friendly interactive guide covering <strong className="text-blue-600 dark:text-blue-300 font-semibold">AWS CodePipeline</strong>, <strong className="text-sky-600 dark:text-sky-300 font-semibold">Azure DevOps</strong>, <strong className="text-purple-600 dark:text-purple-300 font-semibold">GCP Cloud Build</strong>, and <strong className="text-cyan-600 dark:text-cyan-300 font-semibold">Infrastructure Automation</strong> with real-world cloud architecture examples!
          </p>

          {/* Faculty Box */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 backdrop-blur-md shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Course Faculty</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white font-outfit">{unitMetaData.faculty}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#objectives"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center gap-2 group"
            >
              Start Learning Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#comparison"
              className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              Quick Tool Comparison
            </a>
          </div>

        </div>

        {/* Feature Cards Grid - 3 Cloud logos */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <a href="#aws-codepipeline" className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/50 hover:bg-amber-50/50 dark:hover:bg-slate-800/80 border border-amber-200 dark:border-amber-500/30 hover:border-amber-400 dark:hover:border-amber-500/60 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-3">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
                alt="AWS Logo" 
                className="w-10 h-10 object-contain bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-amber-500/30"
              />
              <div>
                <h3 className="font-bold font-outfit text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">AWS CodePipeline</h3>
                <span className="text-xs text-amber-600 dark:text-amber-300 font-mono font-semibold">AWS Cloud</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
              Automate moving code from development to testing & deployment automatically.
            </p>
          </a>

          <a href="#azure-devops" className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/50 hover:bg-sky-50/50 dark:hover:bg-slate-800/80 border border-sky-200 dark:border-sky-500/30 hover:border-sky-400 dark:hover:border-sky-500/60 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-3">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
                alt="Azure Logo" 
                className="w-10 h-10 object-contain bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-sky-500/30"
              />
              <div>
                <h3 className="font-bold font-outfit text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Azure DevOps</h3>
                <span className="text-xs text-sky-600 dark:text-sky-300 font-mono font-semibold">Microsoft Azure</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
              Complete toolkit to plan, write code, build, test, and deliver software.
            </p>
          </a>

          <a href="#gcp-cloud-build" className="p-6 rounded-2xl bg-white/90 dark:bg-slate-800/50 hover:bg-indigo-50/50 dark:hover:bg-slate-800/80 border border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-500/60 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-3">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" 
                alt="GCP Logo" 
                className="w-10 h-10 object-contain bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-indigo-500/30"
              />
              <div>
                <h3 className="font-bold font-outfit text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">GCP Cloud Build</h3>
                <span className="text-xs text-indigo-600 dark:text-indigo-300 font-mono font-semibold">Google Cloud</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
              Automatically compile and test application code using Google Cloud infrastructure.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
