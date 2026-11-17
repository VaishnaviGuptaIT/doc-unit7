import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal
          const btn = document.querySelector('button[title="Quick Search"]');
          if (btn) btn.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const topics = [
    { title: "AWS CodePipeline", desc: "Automate code from dev to testing & deployment (Code -> Build -> Test -> Deploy)", href: "#aws-codepipeline", tag: "AWS" },
    { title: "Azure DevOps", desc: "Tools that help teams plan, build, test and deliver software", href: "#azure-devops", tag: "Azure" },
    { title: "GCP Cloud Build", desc: "Automatically build and test application code on Google Cloud", href: "#gcp-cloud-build", tag: "GCP" },
    { title: "Infrastructure Automation", desc: "Create cloud resources automatically using code instructions instead of manual clicks", href: "#infrastructure-automation", tag: "Automation" },
    { title: "Restaurant Kitchen Analogy", desc: "Manual chef work vs Automated order system in kitchen", href: "#what-is-devops", tag: "Analogy" },
    { title: "Complete Cloud DevOps Workflow", desc: "Developer -> Cloud DevOps Tool -> Build -> Test -> Deploy -> Application", href: "#workflow", tag: "Workflow" },
    { title: "College Web Application Case Study", desc: "Student portal automated release & cloud infrastructure creation", href: "#case-study", tag: "Case Study" },
    { title: "Quiz & Evaluation", desc: "10 beginner MCQs with instant feedback & scoring", href: "#quiz", tag: "Quiz" },
    { title: "Viva  Questions", desc: "5 essential oral exam questions and tips", href: "#viva-exam", tag: "Viva" },
    { title: "University Exam Solutions", desc: "5 model solutions for 5 & 10 marks exam questions", href: "#viva-exam", tag: "Exam" },
  ];

  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(query.toLowerCase()) || 
    t.desc.toLowerCase().includes(query.toLowerCase()) ||
    t.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input 
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AWS CodePipeline, Azure DevOps, GCP Cloud Build..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-sm"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1 divide-y divide-slate-100 dark:divide-slate-800">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={onClose}
                className="block p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold font-outfit text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-[10px] font-mono">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </a>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              No matching topic found. Try searching "AWS", "Azure", "GCP", or "Automation".
            </div>
          )}
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 text-center">
          Press <kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800">ESC</kbd> to close
        </div>

      </div>
    </div>
  );
}
