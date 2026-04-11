import { Answer, Party, PartyResult } from '../types';

/**
 * Calculate match percentage between user answers and party positions
 * 
 * Algorithm:
 * For each question the user answered:
 *   - User answer: -2 to +2
 *   - Party position: -2 to +2
 *   - Agreement score = userAnswer * partyPosition (ranges from -4 to +4)
 * 
 * Total score = sum of all agreement scores
 * Max possible score = sum of |partyPosition| * 2 for all answered questions
 * Match percentage = (totalScore + maxPossible) / (2 * maxPossible) * 100
 * 
 * This maps:
 *   - Perfect agreement (+4 per question) → 100%
 *   - No correlation (0 per question) → 50%
 *   - Perfect disagreement (-4 per question) → 0%
 */
export function calculatePartyMatch(
  answers: Answer[],
  party: Party
): PartyResult {
  // Filter out skipped answers
  const validAnswers = answers.filter(a => !a.skipped && a.value !== undefined);
  
  if (validAnswers.length === 0) {
    return {
      party,
      matchPercentage: 50, // Neutral if no answers
      agreementCount: 0,
      disagreementCount: 0,
    };
  }

  let totalScore = 0;
  let maxPossibleScore = 0;
  let agreementCount = 0;
  let disagreementCount = 0;

  for (const answer of validAnswers) {
    const partyPosition = party.positions[answer.questionId];
    
    // Skip if party has no position on this question
    if (partyPosition === undefined) continue;
    
    // Calculate agreement score for this question
    const agreementScore = answer.value * partyPosition;
    totalScore += agreementScore;
    
    // Max possible is if user gave +2 or -2 and party position is +2 or -2
    // We use the actual party position magnitude
    maxPossibleScore += Math.abs(partyPosition) * 2;
    
    // Count agreements and disagreements
    // Agreement: same sign and both non-zero
    // Disagreement: opposite signs and both non-zero
    if (answer.value !== 0 && partyPosition !== 0) {
      const sameSign = (answer.value > 0 && partyPosition > 0) || 
                       (answer.value < 0 && partyPosition < 0);
      if (sameSign) {
        agreementCount++;
      } else {
        disagreementCount++;
      }
    }
  }

  // Avoid division by zero
  if (maxPossibleScore === 0) {
    return {
      party,
      matchPercentage: 50,
      agreementCount: 0,
      disagreementCount: 0,
    };
  }

  // Normalize score to 0-100 percentage
  // totalScore ranges from -maxPossibleScore to +maxPossibleScore
  // We shift it to 0 to 2*maxPossibleScore, then divide by 2*maxPossibleScore
  const matchPercentage = ((totalScore + maxPossibleScore) / (2 * maxPossibleScore)) * 100;

  return {
    party,
    matchPercentage: Math.round(matchPercentage * 10) / 10, // Round to 1 decimal
    agreementCount,
    disagreementCount,
  };
}

/**
 * Calculate matches for all parties and sort by match percentage
 */
export function calculateAllPartyMatches(
  answers: Answer[],
  parties: Party[]
): PartyResult[] {
  const results = parties.map(party => calculatePartyMatch(answers, party));
  
  // Sort by match percentage descending
  results.sort((a, b) => b.matchPercentage - a.matchPercentage);
  
  return results;
}
