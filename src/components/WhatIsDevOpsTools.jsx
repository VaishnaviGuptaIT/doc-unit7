import React, { useState } from 'react';
import { HelpCircle, Utensils, XCircle, CheckCircle, ArrowRight, Lightbulb, Sparkles } from 'lucide-react';
import { whatAreDevOpsTools } from '../data/unit7Data';

export default function WhatIsDevOpsTools() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <section id="what-is-devops" className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Concept 1
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            {whatAreDevOpsTools.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
            {whatAreDevOpsTools.subtitle}
          </p>
        </div>

        {/* 2 Column Definition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white font-bold">
                ❓
              </div>
              <h3 className="text-xl font-bold font-outfit text-blue-950 dark:text-blue-200">
                What is it?
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {whatAreDevOpsTools.whatIsIt}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/60 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-600 text-white font-bold">
                💡
              </div>
              <h3 className="text-xl font-bold font-outfit text-purple-950 dark:text-purple-200">
                Why do we need it?
              </h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {whatAreDevOpsTools.whyNeeded}
            </p>
          </div>

        </div>

        {/* Real-Life Analogy Box: Restaurant Kitchen */}
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative transition-colors duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
            <Utensils className="w-64 h-64 text-amber-500" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                🍽️
              </span>
              <div>
                <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">
                  {whatAreDevOpsTools.restaurantAnalogy.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Real-world analogy comparing manual effort vs automated delivery</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Manual Kitchen */}
              <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 space-y-3">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold font-outfit text-base">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-500" />
                  {whatAreDevOpsTools.restaurantAnalogy.manual.heading}
                </div>
                <p className="text-xs text-red-900 dark:text-red-200 leading-relaxed">
                  {whatAreDevOpsTools.restaurantAnalogy.manual.text}
                </p>
              </div>

              {/* Automated Kitchen */}
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold font-outfit text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  {whatAreDevOpsTools.restaurantAnalogy.automation.heading}
                </div>
                <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                  {whatAreDevOpsTools.restaurantAnalogy.automation.text}
                </p>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs text-amber-700 dark:text-amber-300 font-semibold">
              <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
              <span>{whatAreDevOpsTools.restaurantAnalogy.takeaway}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
