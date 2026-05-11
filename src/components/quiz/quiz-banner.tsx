import { profiles } from '@/lib/quiz-data';

interface QuizBannerProps {
  onOpen: () => void;
}

const PREVIEW_PROFILE = profiles[1];
const PREVIEW_SCORE = 24;

export function QuizBanner({ onOpen }: QuizBannerProps) {
  const { name, investor, allocations, chartColors } = PREVIEW_PROFILE;

  const size = 120;
  const strokeWidth = 20;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  let cumulative = 0;
  const segments = allocations.map((a, i) => {
    const start = cumulative;
    cumulative += a.percentage;
    return {
      color: chartColors[i] ?? chartColors[0],
      dasharray: `${(a.percentage / 100) * circumference} ${circumference}`,
      offset: -((start / 100) * circumference),
    };
  });

  return (
    <section className="relative overflow-hidden border-y border-(--forest) bg-(--paper-soft)">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:px-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <div className="flex items-center gap-3 text-(--forest)">
            <span className="grid h-6 w-6 place-items-center rounded-full border border-(--forest) bg-(--paper) text-[10px] font-bold">
              ★
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em]">
              New for this cohort
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-(--forest) sm:text-6xl lg:text-[5.5rem]">
            What kind of investor are you?
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-(--forest)/85 sm:text-lg">
            Take this{' '}
            <span className="font-semibold">10-question investor profile quiz</span> to
            discover which of the five greatest investors of all time
            you are.
          </p>

          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onOpen}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-(--forest) bg-(--lilac-bar) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(23,53,45,0.18)] transition hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)"
            >
              <span>Take the quiz</span>
              <span aria-hidden="true">→</span>
            </button>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--forest)">
              <span>~4 min · 10 questions</span>
            </div>
          </div>

        </div>

        <div className="relative">
          <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-(--forest) bg-(--paper) p-3 shadow-[0_30px_80px_rgba(23,53,45,0.20)]">
            <div className="mb-3 flex items-center gap-3 border border-(--forest) bg-white/70 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-(--forest)">
              <span className="h-3.5 w-3.5 bg-(--mustard)" />
              <span>Risk Profile · Quiz</span>
              <span className="flex-1 border-t border-(--forest)" />
              <span className="grid h-5 w-5 place-items-center border border-(--forest) text-[10px]">
                +
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-(--forest) bg-(--paper) p-6">
              <div className="flex items-center gap-5">
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke="rgba(23,53,45,0.08)"
                    strokeWidth={strokeWidth}
                  />
                  <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
                    {segments.map((seg, i) => (
                      <circle
                        key={i}
                        cx={size / 2}
                        cy={size / 2}
                        r={r}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={seg.dasharray}
                        strokeDashoffset={seg.offset}
                      />
                    ))}
                  </g>
                </svg>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-(--rose-deep)">
                    Your profile
                  </p>
                  <p className="mt-1 font-display text-2xl leading-tight text-(--forest)">
                    {name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-(--ink-soft)">
                    Score {PREVIEW_SCORE} / 50
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                {allocations.slice(0, 3).map((a, i) => (
                  <div key={a.label} className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-sm"
                      style={{ background: chartColors[i] ?? chartColors[0] }}
                    />
                    <span className="flex-1 truncate text-xs text-(--ink)">{a.label}</span>
                    <span className="font-display text-base leading-none text-(--forest)">
                      {a.percentage}%
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-(--ink-soft)">
                Inspired by {investor.name} · {investor.title.split('·')[0].trim()}
              </p>
            </div>

            <div className="absolute -right-3 -top-3 grid h-12 w-12 place-items-center rounded-full border border-(--forest) bg-(--lilac-bar) text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_18px_rgba(23,53,45,0.18)]">
              Quiz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
