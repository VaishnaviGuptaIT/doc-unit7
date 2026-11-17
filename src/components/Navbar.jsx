import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles,
  BookOpen,
  Cpu,
  Layers,
  HelpCircle,
  Award
} from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Objectives', href: '#objectives' },
    { label: 'DevOps Tools', href: '#what-is-devops' },
    { label: 'AWS Pipeline', href: '#aws-codepipeline' },
    { label: 'Azure DevOps', href: '#azure-devops' },
    { label: 'GCP Cloud Build', href: '#gcp-cloud-build' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Automation', href: '#infrastructure-automation' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Quiz', href: '#quiz' },
    { label: 'Viva & Exam', href: '#viva-exam' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm' 
        : 'bg-white dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/50'
    }`}>
      {/* Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Title */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Cloud className="w-5 h-5 animate-pulse-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold font-outfit text-slate-900 dark:text-white text-lg tracking-tight">
                  Unit 7: DevOps Tools
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Cloud
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Faculty: <span className="text-purple-600 dark:text-purple-400 font-semibold">Vaishnavi Gupta (VRG)</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links - Centered */}
          <nav className="hidden xl:flex items-center justify-center gap-1 font-medium text-sm flex-1 mx-4">
            {navItems.slice(0, 8).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#quiz"
              className="px-2.5 py-1.5 rounded-lg font-semibold text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors flex items-center gap-1"
            >
              <Award className="w-4 h-4" /> Quiz
            </a>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-2 text-xs font-medium border border-slate-200 dark:border-slate-800"
              title="Quick Search"
            >
              <Search className="w-4 h-4 text-blue-500" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-slate-100 dark:bg-slate-800 rounded text-slate-400 border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
            <span className="text-xs text-slate-500">Prepared by Faculty: Vaishnavi Gupta (VRG)</span>
          </div>
        </div>
      )}
    </header>
  );
}
