import { profiles, type RiskProfile } from './quiz-data';

export function getProfile(score: number): RiskProfile {
  return (
    profiles.find((p) => score >= p.range[0] && score <= p.range[1]) ??
    profiles[2]
  );
}
