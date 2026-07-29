import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { CohortHub } from "@/components/cohort-hub";
import { COHORT_SLUGS, getCohort } from "@/lib/constants/cohorts";
import { locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ cohort: string }>;
}

export function generateStaticParams() {
  return COHORT_SLUGS.map((cohort) => ({ cohort }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { cohort: slug } = await params;
  const cohort = getCohort(slug);

  if (!cohort) {
    return {};
  }

  return { title: `${cohort.label} · ${locale.ui.nav.title}` };
}

export default async function Page({ params }: PageProps) {
  const { cohort: slug } = await params;
  const cohort = getCohort(slug);

  if (!cohort) {
    notFound();
  }

  return <CohortHub cohort={cohort} />;
}
