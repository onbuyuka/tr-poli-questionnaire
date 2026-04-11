import React from 'react';
import { Language, AppContent } from '../types';

interface WelcomeProps {
  content: AppContent;
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ content, onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full text-center animate-fade-in-up">
        {/* Icon */}
        <div className="mb-8">
          <span className="text-7xl">🗳️</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
          {content.welcome.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-turkish-red font-medium mb-6">
          {content.welcome.subtitle}
        </p>
        
        {/* Description */}
        <p className="text-slate-600 mb-10 leading-relaxed">
          {content.welcome.description}
        </p>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full sm:w-auto px-10 py-4 bg-turkish-red hover:bg-turkish-darkRed text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-turkish-red/30"
        >
          {content.welcome.startButton}
        </button>

        {/* Disclaimer */}
        <p className="mt-10 text-sm text-slate-400">
          {content.welcome.disclaimer}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-turkish-red via-white to-turkish-red opacity-50"></div>
    </div>
  );
};

export default Welcome;
