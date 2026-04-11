import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
  label: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle, label }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors border border-slate-300 rounded-full px-3 py-1.5 hover:border-slate-400"
      aria-label={`Switch language to ${label}`}
    >
      <span className={language === 'tr' ? 'text-turkish-red font-bold' : ''}>TR</span>
      <span className="text-slate-300">|</span>
      <span className={language === 'en' ? 'text-turkish-red font-bold' : ''}>EN</span>
    </button>
  );
};

export default LanguageToggle;
