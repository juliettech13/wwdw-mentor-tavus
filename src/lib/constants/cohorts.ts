import { type Session } from '@/lib/constants/sessions';
import {
  type SupportItem,
  type SupportItemId,
  supportStack,
} from '@/lib/constants/support-stack';
import { locale } from '@/lib/i18n';

export type CohortSlug = '1' | '2' | '3';

export const COHORT_SLUGS: ReadonlyArray<CohortSlug> = ['1', '2', '3'];

const DEFAULT_STRIPE_URL =
  'https://book.stripe.com/8x228r9uhc3G7HN5AYaIM04?prefilled_promo_code=wwdw';

/**
 * Next.js only inlines statically-analysable `process.env.X` references into the
 * client bundle, so this map has to be literal — `process.env[slug]` resolves to
 * undefined in the browser.
 */
const COHORT_PASSWORDS: Record<CohortSlug, string | undefined> = {
  '1': process.env.NEXT_PUBLIC_WWDW_COHORT_1_PASSWORD ?? process.env.NEXT_PUBLIC_WWDW_PASSWORD,
  '2': process.env.NEXT_PUBLIC_WWDW_COHORT_2_PASSWORD,
  '3': process.env.NEXT_PUBLIC_WWDW_COHORT_3_PASSWORD,
};

const COHORT_STRIPE_URLS: Record<CohortSlug, string> = {
  '1': DEFAULT_STRIPE_URL,
  '2': DEFAULT_STRIPE_URL,
  '3': DEFAULT_STRIPE_URL,
};

/**
 * Set to false to hide every Investors Club promo on a cohort's hub: the nav-bar
 * button, the hero CTA and the upsell banner.
 */
const COHORT_INVESTORS_CLUB_PROMO: Record<CohortSlug, boolean> = {
  '1': true,
  '2': true,
  '3': false,
};

export interface HomeworkAssignment {
  date: string;
  session: string;
  task: string;
  href?: string;
}

export interface CohortHeroCopy {
  headline: string;
  descriptionPrefix: string;
  courseName: string;
  descriptionSuffix: string;
}

/** Optional per-cohort overrides for the shared section copy in `locale.ui`. */
export interface CohortSectionCopy {
  curriculum?: Partial<typeof locale.ui.curriculum>;
  homework?: Partial<typeof locale.ui.homework>;
  resources?: Partial<typeof locale.ui.resources>;
}

export interface Cohort {
  slug: CohortSlug;
  label: string;
  tagline: string;
  hero: CohortHeroCopy;
  copy?: CohortSectionCopy;
  sessions: ReadonlyArray<Session>;
  homework: ReadonlyArray<HomeworkAssignment>;
  supportStack: ReadonlyArray<SupportItem>;
  sessionKey: string;
  password: string;
  stripeUrl: string;
  hasInvestorsClubPromo: boolean;
}

function buildSupportStack(
  resourceLinks: Partial<Record<SupportItemId, string>>
): ReadonlyArray<SupportItem> {
  return supportStack.map(function overrideHref(item) {
    const href = resourceLinks[item.id];

    if (!href) {
      return item;
    }

    return { ...item, href };
  });
}

function buildCohort(slug: CohortSlug): Cohort {
  const content = locale.cohorts[slug];

  return {
    slug,
    label: content.label,
    tagline: content.tagline,
    hero: content.hero,
    sessions: content.sessions,
    homework: content.homework,
    supportStack: buildSupportStack(content.resourceLinks),
    sessionKey: `wwdw_auth_${slug}`,
    password: COHORT_PASSWORDS[slug] ?? '',
    stripeUrl: COHORT_STRIPE_URLS[slug],
    hasInvestorsClubPromo: COHORT_INVESTORS_CLUB_PROMO[slug],
  };
}

function isCohortSlug(slug: string): slug is CohortSlug {
  return COHORT_SLUGS.includes(slug as CohortSlug);
}

export function getCohort(slug: string): Cohort | undefined {
  if (!isCohortSlug(slug)) {
    return undefined;
  }

  return buildCohort(slug);
}

export function getCohorts(): ReadonlyArray<Cohort> {
  return COHORT_SLUGS.map(buildCohort);
}
