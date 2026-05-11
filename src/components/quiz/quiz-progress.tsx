interface QuizProgressProps {
  current: number;
  total: number;
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  const pct = (current / total) * 100;

  return (
    <div className="px-6 pb-3 pt-5 sm:px-8">
      <div className="flex items-center justify-end text-[11px] font-semibold uppercase tracking-[0.22em] text-(--ink-soft)">
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[rgba(24,62,53,0.12)]">
        <div
          className="h-full rounded-full bg-(--forest)"
          style={{ width: `${pct}%`, transition: 'width 380ms cubic-bezier(.4,0,.2,1)' }}
        />
      </div>
    </div>
  );
}
