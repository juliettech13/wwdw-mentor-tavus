import Image from 'next/image';

import { locale } from '@/lib/i18n';
import { footerLinks } from '@/lib/constants/footer-links';

const t = locale.ui.footer;

export function SiteFooter() {
  return (
    <footer className="bg-(--forest) py-16 text-(--paper)">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="space-y-6">
          <Image
            src="/images/logo-small.webp"
            alt="Logo"
            width={72}
            height={72}
            className="h-14 w-auto"
          />
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
              {t.credit}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.label}
              title={item.label}
              className="footer-social-link transition"
            >
              <span>{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
