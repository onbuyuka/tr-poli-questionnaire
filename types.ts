// Question categories
export type QuestionCategory = 
  | 'economy'
  | 'secularism'
  | 'democracy'
  | 'foreign_policy'
  | 'social'
  | 'environment'
  | 'kurdish_issue';

// A question in the questionnaire
export interface Question {
  id: string;
  category: QuestionCategory;
  text: {
    tr: string;
    en: string;
  };
  // Optional explanation for context
  explanation?: {
    tr: string;
    en: string;
  };
}

// Political party
export interface Party {
  id: string;
  name: {
    tr: string;
    en: string;
  };
  shortName: string;
  color: string;
  // Party position on each question: -2 (strongly disagree) to +2 (strongly agree)
  positions: Record<string, number>;
  // Brief description
  description: {
    tr: string;
    en: string;
  };
  // Optional: founding year, leader, etc.
  foundedYear?: number;
  ideology?: {
    tr: string;
    en: string;
  };
}

// User's answer to a question
export interface Answer {
  questionId: string;
  value: number; // -2, -1, 0, +1, +2
  skipped?: boolean;
}

// Result for a party
export interface PartyResult {
  party: Party;
  matchPercentage: number;
  agreementCount: number;
  disagreementCount: number;
}

// App state
export type AppScreen = 'welcome' | 'questions' | 'results';

export type Language = 'tr' | 'en';

// Content structure for i18n
export interface AppContent {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
    startButton: string;
    disclaimer: string;
  };
  questions: {
    progress: string;
    skipButton: string;
    prevButton: string;
    nextButton: string;
    finishButton: string;
    categories: Record<QuestionCategory, string>;
  };
  answers: {
    stronglyDisagree: string;
    disagree: string;
    neutral: string;
    agree: string;
    stronglyAgree: string;
  };
  results: {
    title: string;
    subtitle: string;
    matchLabel: string;
    agreementLabel: string;
    disagreementLabel: string;
    restartButton: string;
    shareButton: string;
    copiedMessage: string;
    noAnswersWarning: string;
    disclaimer: string;
  };
  footer: {
    disclaimer: string;
  };
  language: {
    toggle: string;
  };
}
