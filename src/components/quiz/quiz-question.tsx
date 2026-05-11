import { locale } from '@/lib/i18n';
import { type QuizQuestion } from '@/lib/quiz-data';
import { QuizProgress } from './quiz-progress';

const OPT_LETTERS = ['A', 'B', 'C', 'D', 'E'];
const t = locale.ui.quiz.question;

interface QuizQuestionProps {
  question: QuizQuestion;
  index: number;
  total: number;
  answer: number | undefined;
  onAnswer: (optIndex: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export function QuizQuestionView({
  question,
  index,
  total,
  answer,
  onAnswer,
  onNext,
  onBack,
}: QuizQuestionProps) {
  const isLast = index === total - 1;

  return (
    <div className="flex h-full flex-col">
      <QuizProgress current={index + 1} total={total} />

      <div className="flex-1 overflow-y-auto px-6 pb-6 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--rose-deep)">
            {t.label.replace('{x}', String(index + 1))}
          </p>
          <h3 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-(--forest) sm:text-4xl">
            {question.text}
          </h3>
          <p className="mt-3 text-sm leading-6 text-(--ink-soft) sm:text-base">
            {question.sub}
          </p>

          <ul className="mt-7 flex flex-col gap-3" aria-live="polite" role="radiogroup" aria-label={question.text}>
            {question.opts.map((opt, i) => {
              const isSelected = answer === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => onAnswer(i)}
                    className={[
                      'group flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition',
                      isSelected
                        ? 'border-(--forest) bg-(--mustard-ghost) shadow-[0_8px_24px_rgba(23,53,45,0.10)]'
                        : 'border-(--border) bg-white/65 hover:border-(--forest) hover:bg-white/95',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition',
                        isSelected
                          ? 'border-(--forest) bg-(--forest) text-(--paper)'
                          : 'border-(--forest)/40 bg-white/80 text-(--forest)',
                      ].join(' ')}
                    >
                      {OPT_LETTERS[i]}
                    </span>
                    <span className="flex-1 text-[15px] leading-6 text-(--ink) sm:text-base">
                      {opt.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-(--border) bg-(--card-frosted) px-6 py-4 sm:px-10">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            disabled={index === 0}
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:bg-(--forest-ghost) disabled:opacity-30 disabled:hover:bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)"
          >
            {t.back}
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={answer === undefined}
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)"
          >
            {isLast ? t.seeProfile : t.next}
          </button>
        </div>
      </div>
    </div>
  );
}
