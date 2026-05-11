import { locale } from '@/lib/i18n';

export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizQuestion {
  text: string;
  sub: string;
  opts: QuizOption[];
}

export interface Allocation {
  percentage: number;
  label: string;
  description: string;
  color: string;
}

export interface Investor {
  name: string;
  title: string;
  philosophy: string;
  source: string;
}

export interface RiskProfile {
  range: [number, number];
  name: string;
  shortName: string;
  investor: Investor;
  badgeBg: string;
  badgeColor: string;
  chartColors: string[];
  tagline: string;
  likeYou: string;
  watchOut: string;
  allocations: Allocation[];
  what: string[];
  avoid: string[];
}

export const questions: QuizQuestion[] = locale.quiz.questions;

export const profiles: RiskProfile[] = locale.quiz.profiles;
