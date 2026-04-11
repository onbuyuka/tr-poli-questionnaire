import React, { useState } from 'react';
import { PartyResult, AppContent, Language } from '../types';

interface ResultsProps {
  results: PartyResult[];
  content: AppContent;
  language: Language;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ results, content, language, onRestart }) => {
  const [expandedParty, setExpandedParty] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = language === 'tr' 
      ? `Seçim Pusulası sonuçlarım:\n${results.slice(0, 3).map((r, i) => `${i + 1}. ${r.party.shortName}: %${r.matchPercentage}`).join('\n')}`
      : `My Election Compass results:\n${results.slice(0, 3).map((r, i) => `${i + 1}. ${r.party.shortName}: ${r.matchPercentage}%`).join('\n')}`;
    
    try {
      await navigator.clipboard.writeText(text + '\n\n' + window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      console.log('Could not copy to clipboard');
    }
  };

  const toggleExpand = (partyId: string) => {
    setExpandedParty(expandedParty === partyId ? null : partyId);
  };

  // Check if there are valid results
  const hasValidResults = results.some(r => r.agreementCount > 0 || r.disagreementCount > 0);

  if (!hasValidResults) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-lg w-full text-center">
          <span className="text-6xl mb-6 block">⚠️</span>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {content.results.noAnswersWarning}
          </h2>
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-turkish-red hover:bg-turkish-darkRed text-white font-semibold rounded-xl shadow-lg transition-all"
          >
            {content.results.restartButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <span className="text-5xl mb-4 block">📊</span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {content.results.title}
          </h1>
          <p className="text-slate-500">
            {content.results.subtitle}
          </p>
        </div>

        {/* Results List */}
        <div className="space-y-4 mb-8">
          {results.map((result, index) => {
            const isExpanded = expandedParty === result.party.id;
            const isTop3 = index < 3;
            
            return (
              <div
                key={result.party.id}
                className={`
                  bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300
                  ${isTop3 ? 'animate-fade-in-up' : 'animate-fade-in'}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Main Row */}
                <button
                  onClick={() => toggleExpand(result.party.id)}
                  className="w-full p-4 md:p-5 flex items-center gap-4 hover:bg-slate-50 transition-colors text-left"
                >
                  {/* Rank */}
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                      ${index === 0 ? 'bg-yellow-400 text-yellow-900' : ''}
                      ${index === 1 ? 'bg-slate-300 text-slate-700' : ''}
                      ${index === 2 ? 'bg-amber-600 text-white' : ''}
                      ${index > 2 ? 'bg-slate-100 text-slate-500' : ''}
                    `}
                  >
                    {index + 1}
                  </div>

                  {/* Party Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: result.party.color }}
                      />
                      <h3 className="font-semibold text-slate-800 truncate">
                        {result.party.shortName}
                      </h3>
                      <span className="text-slate-400 text-sm hidden md:inline truncate">
                        {result.party.name[language]}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${result.matchPercentage}%`,
                          backgroundColor: result.party.color,
                        }}
                      />
                    </div>
                  </div>

                  {/* Match Percentage */}
                  <div className="text-right flex-shrink-0">
                    <span className="text-2xl font-bold" style={{ color: result.party.color }}>
                      {result.matchPercentage}%
                    </span>
                    <p className="text-xs text-slate-400">{content.results.matchLabel}</p>
                  </div>

                  {/* Expand Arrow */}
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-4 pb-4 md:px-5 md:pb-5 border-t border-slate-100 animate-fade-in">
                    <div className="pt-4">
                      {/* Party Description */}
                      <p className="text-slate-600 mb-4">
                        {result.party.description[language]}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-slate-600">
                            {content.results.agreementLabel}: {result.agreementCount}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="text-slate-600">
                            {content.results.disagreementLabel}: {result.disagreementCount}
                          </span>
                        </div>
                      </div>

                      {/* Ideology & Founded */}
                      {(result.party.ideology || result.party.foundedYear) && (
                        <div className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-500">
                          {result.party.ideology && (
                            <span>{result.party.ideology[language]}</span>
                          )}
                          {result.party.ideology && result.party.foundedYear && (
                            <span className="mx-2">•</span>
                          )}
                          {result.party.foundedYear && (
                            <span>{result.party.foundedYear}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
          >
            🔄 {content.results.restartButton}
          </button>
          <button
            onClick={handleShare}
            className="px-6 py-3 bg-turkish-red hover:bg-turkish-darkRed text-white font-medium rounded-xl shadow-md transition-all"
          >
            {copied ? '✓ ' + content.results.copiedMessage : '📤 ' + content.results.shareButton}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-slate-400 px-4">
          {content.results.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Results;
