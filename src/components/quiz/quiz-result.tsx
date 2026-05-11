import { type RiskProfile } from '@/lib/quiz-data';
import { QuizDonutChart } from './quiz-donut-chart';

interface QuizResultProps {
  profile: RiskProfile;
  score: number;
  onRetake: () => void;
}

function ChipList({ items, tone }: { items: string[]; tone: 'good' | 'avoid' }) {
  const styles =
    tone === 'avoid'
      ? 'border-(--chip-avoid-border) bg-(--chip-avoid-bg) text-(--chip-avoid-text)'
      : 'border-(--chip-good-border) bg-(--chip-good-bg) text-(--chip-good-text)';
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${styles}`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function InvestorInitials({ name, badgeBg, badgeColor }: { name: string; badgeBg: string; badgeColor: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <span
      aria-hidden="true"
      className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-(--forest) font-display text-xl leading-none"
      style={{ background: badgeBg, color: badgeColor }}
    >
      {initials}
    </span>
  );
}

export function QuizResult({ profile, score, onRetake }: QuizResultProps) {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="relative overflow-hidden border-b border-(--border) bg-(--paper)">
        <div className="relative mx-auto max-w-3xl px-6 py-10 sm:px-10">
          <div className="flex items-center justify-between gap-3">
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ background: profile.badgeBg, color: profile.badgeColor }}
            >
              Your profile
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
              Score {score} / 50
            </span>
          </div>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-[-0.03em] text-(--forest) sm:text-6xl">
            {profile.name}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--ink) sm:text-lg">
            {profile.tagline}
          </p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-3xl px-6 pt-10 sm:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--rose-deep)">
          Your starting portfolio
        </p>
        <h3 className="mt-2 font-display text-4xl leading-[1.02] tracking-[-0.02em] text-(--forest) sm:text-5xl">
          {profile.name}
        </h3>

        <div className="mt-6 grid items-start gap-8 sm:grid-cols-[220px_1fr]">
          <div className="relative mx-auto sm:mx-0">
            <QuizDonutChart allocations={profile.allocations} colors={profile.chartColors} />
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-3xl leading-none text-(--forest)">
                  {profile.allocations.length}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
                  Asset Types
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {profile.allocations.map((a, i) => (
              <li
                key={a.label}
                className="rounded-2xl border border-(--border) bg-white/70 p-3"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-3 w-3 rounded-sm"
                      style={{ background: profile.chartColors[i % profile.chartColors.length] }}
                    />
                    <span className="text-sm font-semibold text-(--forest)">{a.label}</span>
                  </div>
                  <span className="font-display text-xl leading-none text-(--forest)">
                    {a.percentage}%
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-(--forest-ghost)">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${a.percentage}%`,
                      background: profile.chartColors[i % profile.chartColors.length],
                    }}
                  />
                </div>
                <p className="mt-2 text-xs leading-5 text-(--ink-soft)">{a.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pt-10 sm:px-10">
        <div className="rounded-3xl border border-(--forest) bg-(--card-mid) p-5 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
            Whose playbook
          </p>
          <div className="mt-3 flex items-center gap-4">
            <InvestorInitials
              name={profile.investor.name}
              badgeBg={profile.badgeBg}
              badgeColor={profile.badgeColor}
            />
            <div className="min-w-0">
              <h4 className="font-display text-2xl leading-tight text-(--forest) sm:text-3xl">
                {profile.investor.name}
              </h4>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-(--rose-deep)">
                {profile.investor.title}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-(--ink) sm:text-base">
            {profile.investor.philosophy}
          </p>
          <p className="mt-4 border-t border-(--border) pt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-(--ink-soft)">
            Source · {profile.investor.source}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pt-10 sm:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--rose-deep)">
          What this means for you
        </p>
        <h3 className="mt-2 font-display text-3xl leading-tight text-(--forest) sm:text-4xl">
          Built for how you think
        </h3>
        <p className="mt-4 text-base leading-7 text-(--ink)">{profile.likeYou}</p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pt-8 sm:px-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-(--border) bg-white/65 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--chip-good-text)">
              Good fits
            </p>
            <h4 className="mt-2 font-display text-2xl leading-tight text-(--forest)">
              Start here
            </h4>
            <div className="mt-4">
              <ChipList items={profile.what} tone="good" />
            </div>
          </div>
          <div className="rounded-2xl border border-(--border) bg-white/65 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--chip-avoid-text)">
              Be careful with
            </p>
            <h4 className="mt-2 font-display text-2xl leading-tight text-(--forest)">
              Not for you yet
            </h4>
            <div className="mt-4">
              <ChipList items={profile.avoid} tone="avoid" />
            </div>
          </div>
        </div>
      </section>

      {profile.watchOut ? (
        <section className="mx-auto w-full max-w-3xl px-6 pb-2 pt-8 sm:px-10">
          <div className="rounded-3xl border border-(--mustard-faint-border) bg-(--mustard-faint-bg) p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-(--forest) bg-(--mustard) text-(--forest)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l10 18H2L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 10v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="12" cy="17.5" r="0.9" fill="currentColor" />
                </svg>
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--forest)">
                Watch out for
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-(--ink) sm:text-base">{profile.watchOut}</p>
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-3xl px-6 py-10 sm:px-10">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onRetake}
            className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:bg-(--forest-ghost) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--forest)"
          >
            Retake quiz
          </button>
        </div>
        <p className="mt-6 text-center text-[11px] leading-5 text-(--ink-soft) sm:text-xs">
          <span className="font-semibold uppercase tracking-[0.18em]">Disclaimer ·</span>{' '}
          This quiz is for educational purposes only and does not constitute financial,
          investment, tax, or legal advice. Your results reflect a behavioral risk profile,
          not a personalized recommendation. Always do your own research or speak with a
          qualified financial professional before making investment decisions.
        </p>
      </section>
    </div>
  );
}
