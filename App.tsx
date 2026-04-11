import React, { useState, useCallback, useMemo } from 'react';
import Welcome from './components/Welcome';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import LanguageToggle from './components/LanguageToggle';
import { calculateAllPartyMatches } from './utils/scoring';
import { QUESTIONS, PARTIES, CONTENT } from './constants';
import { AppScreen, Language, Answer, PartyResult } from './types';

const getInitialLanguage = (): Language => {
  return 'tr';
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('welcome');
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<PartyResult[]>([]);

  const content = CONTENT[language];
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUESTIONS.length;

  // Get current answer for the current question
  const currentAnswer = useMemo(
    () => answers.find(a => a.questionId === currentQuestion?.id),
    [answers, currentQuestion]
  );

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => (prev === 'tr' ? 'en' : 'tr'));
  }, []);

  const handleStart = useCallback(() => {
    setScreen('questions');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback((value: number) => {
    const questionId = QUESTIONS[currentQuestionIndex].id;
    
    setAnswers(prev => {
      // Remove existing answer for this question if any
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, { questionId, value, skipped: false }];
    });
  }, [currentQuestionIndex]);

  const handleSkip = useCallback(() => {
    const questionId = QUESTIONS[currentQuestionIndex].id;
    
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, { questionId, value: 0, skipped: true }];
    });

    // Move to next question or finish
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuestionnaire();
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuestionnaire();
    }
  }, [currentQuestionIndex, totalQuestions]);

  const finishQuestionnaire = useCallback(() => {
    const calculatedResults = calculateAllPartyMatches(answers, PARTIES);
    setResults(calculatedResults);
    setScreen('results');
  }, [answers]);

  const handleRestart = useCallback(() => {
    setScreen('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults([]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex justify-between items-center">
          <button
            onClick={handleRestart}
            className="text-lg font-bold tracking-tight text-slate-800 hover:text-turkish-red transition-colors flex items-center gap-2"
          >
            <span>🗳️</span>
            <span className="hidden sm:inline">
              {language === 'tr' ? 'Seçim Pusulası' : 'Election Compass'}
            </span>
          </button>
          
          <LanguageToggle
            language={language}
            onToggle={toggleLanguage}
            label={content.language.toggle}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-14">
        {screen === 'welcome' && (
          <Welcome content={content} onStart={handleStart} />
        )}

        {screen === 'questions' && currentQuestion && (
          <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center px-4 py-8">
            <div className="w-full max-w-2xl">
              <ProgressBar
                current={currentQuestionIndex + 1}
                total={totalQuestions}
                label={content.questions.progress}
              />
              
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion}
                currentAnswer={currentAnswer}
                content={content}
                onAnswer={handleAnswer}
                onSkip={handleSkip}
                onPrev={handlePrev}
                onNext={handleNext}
                isFirst={currentQuestionIndex === 0}
                isLast={currentQuestionIndex === totalQuestions - 1}
                language={language}
              />
            </div>
          </div>
        )}

        {screen === 'results' && (
          <Results
            results={results}
            content={content}
            language={language}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm px-4">
        <p className="max-w-lg mx-auto">
          {content.footer.disclaimer}
        </p>
        <p className="mt-4 text-slate-500">
          © {new Date().getFullYear()} • {language === 'tr' ? 'Bağımsız Proje' : 'Independent Project'}
        </p>
      </footer>
    </div>
  );
};

export default App;
