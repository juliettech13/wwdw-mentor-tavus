'use client';

import { useState } from 'react';

import { locale } from '@/lib/i18n';
import { questions, type RiskProfile } from '@/lib/quiz-data';
import { getProfile } from '@/lib/quiz-utils';
import { QuizQuestionView } from './quiz-question';
import { QuizResult } from './quiz-result';
import { QuizWelcome } from './quiz-welcome';

type View = 'welcome' | 'quiz' | 'result';

interface QuizShellProps {
  onClose: () => void;
}

const t = locale.ui.quiz.shell;

function computeScore(answers: Record<number, number>): number {
  return Object.entries(answers).reduce((acc, [qi, oi]) => {
    const q = questions[Number(qi)];
    return acc + (q?.opts[oi]?.score ?? 0);
  }, 0);
}

function getHeaderTitle(view: View, profile: RiskProfile | null, current: number, total: number): string {
  if (view === 'welcome') return t.welcome;
  if (view === 'result' && profile) return t.resultTitle.replace('{name}', profile.name);
  return t.questionOf.replace('{x}', String(current + 1)).replace('{y}', String(total));
}

export function QuizShell({ onClose }: QuizShellProps) {
  const [view, setView] = useState<View>('welcome');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const total = questions.length;
  const score = computeScore(answers);
  const profile: RiskProfile | null = view === 'result' ? getProfile(score) : null;
  const headerTitle = getHeaderTitle(view, profile, current, total);

  const handleAnswer = (optIndex: number) => {
    setAnswers((prev) => ({ ...prev, [current]: optIndex }));
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setView('result');
    }
  };

  const handleBack = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleRetake = () => {
    setView('welcome');
    setCurrent(0);
    setAnswers({});
  };

  return (
    <div className="flex h-full w-full min-w-0 flex-1 flex-col">
      <div className="relative flex items-center justify-between border border-(--border) bg-(--card-frosted) px-5 py-4 text-(--forest) sm:px-8">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
            {t.eyebrow}
          </p>
          <p className="mt-0.5 truncate font-display text-2xl text-(--forest) sm:text-3xl">
            {headerTitle}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="ml-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-(--forest) bg-(--mustard) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--mustard-deep) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)"
        >
          {t.close}
        </button>
      </div>

      <div className="relative min-h-0 flex-1" aria-live="polite">
        {view === 'welcome' ? (
          <QuizWelcome onStart={() => setView('quiz')} />
        ) : null}

        {view === 'quiz' ? (
          <QuizQuestionView
            question={questions[current]}
            index={current}
            total={total}
            answer={answers[current]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onBack={handleBack}
          />
        ) : null}

        {view === 'result' && profile !== null ? (
          <QuizResult profile={profile} score={score} onRetake={handleRetake} />
        ) : null}
      </div>
    </div>
  );
}
