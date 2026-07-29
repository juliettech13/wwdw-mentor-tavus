import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { locale } from "@/lib/i18n";

const t = locale.ui;

export const metadata: Metadata = {
  title: `${t.notFound.eyebrow} · ${t.nav.title}`,
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-(--card)">
      <div className="absolute inset-x-0 top-0 -z-10 h-152 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <section className="flex flex-1 items-center justify-center px-5 py-20 sm:px-8">
        <div className="flex w-full max-w-xl flex-col items-center gap-5 text-center">
          <Image
            src="/images/logo-small.webp"
            alt={t.nav.title}
            width={56}
            height={56}
            priority
            className="h-14 w-auto"
          />

          <p className="font-display text-7xl leading-none tracking-[-0.04em] text-(--rose-deep) sm:text-8xl">
            {t.notFound.code}
          </p>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
              {t.notFound.eyebrow}
            </p>
            <h1 className="font-display text-5xl leading-none tracking-[-0.04em] text-(--forest) sm:text-6xl">
              {t.notFound.title}
            </h1>
            <p className="text-base leading-7 text-(--ink-soft)">
              {t.notFound.description}
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              style={{ color: "white" }}
              className="inline-flex items-center justify-center rounded-full border border-(--forest) bg-(--lilac-bar) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 hover:brightness-90"
            >
              {t.notFound.cta}
            </Link>
            <Link
              href="/hub"
              className="inline-flex items-center justify-center rounded-full border border-(--forest) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--forest) transition hover:-translate-y-0.5 hover:bg-(--forest-ghost)"
            >
              {t.notFound.hubCta}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
