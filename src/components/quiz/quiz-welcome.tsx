import { profiles } from '@/lib/quiz-data';

interface QuizWelcomeProps {
  onStart: () => void;
}

const PROFILE_KEYS = ['01', '02', '03', '04', '05'];

export function QuizWelcome({ onStart }: QuizWelcomeProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden bg-(--paper)">
        <div className="relative flex h-full flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-(--forest) bg-(--paper) px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-(--forest)">
            <span className="h-2 w-2 rounded-full bg-(--lilac-bar)" />
            10 Questions · About 4 minutes
          </span>

          <h2 className="mt-6 max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.03em] text-(--forest) sm:text-6xl">
            What kind of investor are you?
          </h2>

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-(--rose-deep)">
            One of these will be you
          </p>

          <div className="mt-3 grid w-full max-w-2xl grid-cols-2 gap-2 text-left sm:grid-cols-5">
            {profiles.map((p, i) => (
              <div
                key={p.name}
                className="rounded-2xl border border-(--border) bg-white/70 p-3"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-(--rose-deep)">
                  {PROFILE_KEYS[i]}
                </div>
                <div className="mt-2 font-display text-lg leading-tight text-(--forest)">
                  {p.name.replace('The ', '')}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onStart}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-(--forest) bg-(--mustard) px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-(--mustard-deep) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)"
          >
            Begin the quiz
            <span aria-hidden="true">→</span>
          </button>

          <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-(--ink-soft)">
            Your answers are only yours, not saved
          </p>
        </div>
      </div>
    </div>
  );
}
