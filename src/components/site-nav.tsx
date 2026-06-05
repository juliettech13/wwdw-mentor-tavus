import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { locale } from '@/lib/i18n';

const t = locale.ui.nav;

interface NavItem {
  href: string;
  label: string;
  external: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: t.course, external: false },
  { href: '/investors-club', label: t.investorsClub, external: false },
  { href: '/hub', label: t.hub, external: false },
  { href: 'https://newsletter.juliet.tech', label: t.newsletter, external: true },
  { href: 'https://www.juliet.tech/', label: t.aboutJules, external: true },
];

const linkClass =
  'block font-semibold text-(--ink) transition-transform duration-[350ms] ease hover:-translate-y-px';

const linkStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: '16px',
  letterSpacing: '-0.96px',
  padding: 0,
  margin: 0,
  verticalAlign: 'top',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateRows: '16px 16px',
  gridAutoFlow: 'column',
  gridAutoColumns: 'auto',
  columnGap: '96px',
  rowGap: '4px',
  alignItems: 'center',
  justifyItems: 'start',
};

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--forest) bg-(--lilac-bar)">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label={t.title} className="flex shrink-0 items-center">
          <Image
            src="/images/logo-long.webp"
            alt="juliettech"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Primary navigation">
          <div style={gridStyle}>
            {NAV_ITEMS.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={linkClass}
                  style={linkStyle}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  style={linkStyle}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
