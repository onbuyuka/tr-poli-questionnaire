import React, { useState } from 'react';
import { Question, Answer, AppContent, QuestionCategory } from '../types';

interface QuestionCardProps {
  question: Question;
  currentAnswer?: Answer;
  content: AppContent;
  onAnswer: (value: number) => void;
  onSkip: () => void;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  language: 'tr' | 'en';
}

const ANSWER_VALUES = [
  { value: -2, labelKey: 'stronglyDisagree' as const, emoji: '😠' },
  { value: -1, labelKey: 'disagree' as const, emoji: '🙁' },
  { value: 0, labelKey: 'neutral' as const, emoji: '😐' },
  { value: 1, labelKey: 'agree' as const, emoji: '🙂' },
  { value: 2, labelKey: 'stronglyAgree' as const, emoji: '😃' },
];

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  content,
  onAnswer,
  onSkip,
  onPrev,
  onNext,
  isFirst,
  isLast,
  language,
}) => {
  const categoryLabel = content.questions.categories[question.category];
  const questionText = question.text[language];
  const selectedValue = currentAnswer?.value;

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Category Badge */}
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
          {categoryLabel}
        </span>
      </div>

      {/* Question Text */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 text-center leading-relaxed">
          {questionText}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-5 gap-2 md:gap-3 mb-6">
        {ANSWER_VALUES.map(({ value, labelKey, emoji }) => {
          const isSelected = selectedValue === value;
          return (
            <button
              key={value}
              onClick={() => onAnswer(value)}
              className={`
                flex flex-col items-center justify-center p-3 md:p-4 rounded-xl transition-all duration-200
                ${isSelected 
                  ? 'bg-turkish-red text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-50 shadow-md hover:shadow-lg'
                }
              `}
            >
              <span className="text-2xl md:text-3xl mb-1">{emoji}</span>
              <span className="text-xs font-medium text-center leading-tight hidden md:block">
                {content.answers[labelKey]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Labels */}
      <div className="flex justify-between px-2 mb-6 md:hidden">
        <span className="text-xs text-slate-500">{content.answers.stronglyDisagree}</span>
        <span className="text-xs text-slate-500">{content.answers.stronglyAgree}</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-3">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`
            px-5 py-2.5 rounded-lg font-medium transition-all duration-200
            ${isFirst 
              ? 'text-slate-300 cursor-not-allowed' 
              : 'text-slate-600 hover:bg-slate-100'
            }
          `}
        >
          ← {content.questions.prevButton}
        </button>

        <button
          onClick={onSkip}
          className="px-5 py-2.5 text-slate-400 hover:text-slate-600 font-medium transition-colors"
        >
          {content.questions.skipButton}
        </button>

        <button
          onClick={onNext}
          className="px-6 py-2.5 bg-turkish-red hover:bg-turkish-darkRed text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          {isLast ? content.questions.finishButton : content.questions.nextButton} →
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
