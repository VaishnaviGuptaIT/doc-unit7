import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../data/unit7Data';

export default function QuizSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (score >= 7) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore if canvas confetti unavailable
        }
      }
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" /> Unit 7 Evaluation Quiz
          </div>
          <h2 className="text-3xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Test Your Knowledge
          </h2>
         
        </div>

        {!quizFinished ? (
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 transition-colors duration-300">
            
            {/* Progress Header */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-slate-800">
              <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
              <span className="text-purple-600 dark:text-purple-400 font-bold">Score: {score} / {quizQuestions.length}</span>
            </div>

            {/* Quiz Progress Bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>

            {/* 4 Options Grid */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = "bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750";
                
                if (isAnswered) {
                  if (idx === currentQ.answer) {
                    btnStyle = "bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border-emerald-500 font-bold";
                  } else if (idx === selectedOption) {
                    btnStyle = "bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-200 border-red-500 font-bold";
                  } else {
                    btnStyle = "bg-slate-50/40 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-800 opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswered && idx === currentQ.answer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.answer && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box on Answer */}
            {isAnswered && (
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-slate-800/90 border border-purple-200 dark:border-slate-700 space-y-2 animate-in fade-in">
                <span className="text-xs font-mono text-purple-700 dark:text-purple-400 font-bold">Explanation:</span>
                <p className="text-xs text-purple-950 dark:text-slate-200 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Footer Navigation */}
            <div className="pt-4 flex justify-end">
              <button
                disabled={!isAnswered}
                onClick={handleNextQuestion}
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                {currentIdx < quizQuestions.length - 1 ? (
                  <>Next Question <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>See Final Score <Award className="w-4 h-4" /></>
                )}
              </button>
            </div>

          </div>
        ) : (
          /* Quiz Results Card */
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center mx-auto text-2xl font-bold">
              🏆
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">Quiz Completed!</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Here is your Unit 7 score breakdown:</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-sm mx-auto">
              <p className="text-4xl font-extrabold font-outfit text-purple-600 dark:text-purple-400">
                {score} / {quizQuestions.length}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                {score >= 8 ? '🎉 Outstanding performance!' : score >= 5 ? '👍 Good job! Review the weak areas.' : '📚 Keep practicing! Re-read the unit summary.'}
              </p>
            </div>

            <button
              onClick={handleRestartQuiz}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-md"
            >
              <RotateCcw className="w-4 h-4" /> Restart Quiz
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
