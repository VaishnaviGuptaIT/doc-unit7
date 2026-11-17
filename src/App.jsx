import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningObjectives from './components/LearningObjectives';
import WhatIsDevOpsTools from './components/WhatIsDevOpsTools';
import WhyCloudDevOpsNeeded from './components/WhyCloudDevOpsNeeded';
import AWSCodePipelineSection from './components/AWSCodePipelineSection';
import AzureDevOpsSection from './components/AzureDevOpsSection';
import GCPCloudBuildSection from './components/GCPCloudBuildSection';
import ToolComparison from './components/ToolComparison';
import InfraAutomationSection from './components/InfraAutomationSection';
import CompleteWorkflowSection from './components/CompleteWorkflowSection';
import CaseStudy from './components/CaseStudy';
import MindMapSection from './components/MindMapSection';
import QuizSection from './components/QuizSection';
import VivaSection from './components/VivaSection';
import ExamSection from './components/ExamSection';
import AssignmentSection from './components/AssignmentSection';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default dark theme
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenSearch={() => setSearchOpen(true)} 
      />

      <main>
        <Hero />
        <LearningObjectives />
        <WhatIsDevOpsTools />
        <WhyCloudDevOpsNeeded />
        <AWSCodePipelineSection />
        <AzureDevOpsSection />
        <GCPCloudBuildSection />
        <ToolComparison />
        <InfraAutomationSection />
        <CompleteWorkflowSection />
        <CaseStudy />
        <MindMapSection />
        <QuizSection />
        <VivaSection />
        <ExamSection />
        <AssignmentSection />
      </main>

      <Footer />

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  );
}
