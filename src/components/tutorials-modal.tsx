import { locale } from '@/lib/i18n';
import { tutorials, type Tutorial } from '@/lib/constants/tutorials';

const SWATCH_STYLES: Record<string, { bg: string; ink: string }> = {
  rose:      { bg: 'var(--rose)',      ink: 'var(--forest)' },
  mustard:   { bg: 'var(--mustard)',   ink: 'var(--forest)' },
  mint:      { bg: 'var(--mint)',      ink: 'var(--forest)' },
  lilac:     { bg: 'var(--lilac-bar)', ink: '#fff'          },
  periwinkle:{ bg: 'var(--light-blue)', ink: 'var(--forest)' },
};

const t = locale.ui.tutorials;

interface TutorialCardProps {
  tutorial: Tutorial;
  index: number;
}

function TutorialCard({ tutorial, index }: TutorialCardProps) {
  const sw = SWATCH_STYLES[tutorial.swatch] ?? SWATCH_STYLES.rose;

  return (
    <a
      href={tutorial.href}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col overflow-hidden border border-(--forest) bg-(--paper) transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(23,53,45,0.18)]"
    >
      <div
        className="flex items-center justify-between border-b border-(--forest) px-4 py-3"
        style={{ background: sw.bg, color: sw.ink }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
          {String(index + 1).padStart(2, '0')} {t.tutorialLabel}
        </span>
        {tutorial.isExternal && (
          <span className="rounded-full border border-current px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] opacity-80">
            {t.externalLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-(--forest)">
          {tutorial.title}
        </h3>
        <p className="text-sm leading-6 text-(--ink-soft)">{tutorial.summary}</p>
      </div>
    </a>
  );
}

interface TutorialsModalProps {
  onClose: () => void;
}

export function TutorialsModal({ onClose }: TutorialsModalProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative border-b border-(--forest) bg-(--paper-strong) px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-(--forest)">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-(--forest) bg-(--mustard) text-[10px] font-bold">
                ▶
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="mt-2 font-display text-5xl leading-[0.95] tracking-[-0.03em] text-(--forest) sm:text-6xl">
              {t.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-(--ink-soft)">
              {t.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="grid h-10 w-10 place-items-center rounded-full border border-(--forest) bg-(--paper) text-(--forest) transition hover:bg-(--mustard)"
          >
            <span className="text-base leading-none">✕</span>
          </button>
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto px-6 py-7 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial, i) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
