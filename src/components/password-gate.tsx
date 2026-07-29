'use client';

import Image from 'next/image';
import { type ReactNode, useEffect, useState } from 'react';

import { locale } from '@/lib/i18n';

const DEFAULT_SESSION_KEY = 'wwdw_auth';

interface PasswordGateProps {
  children: ReactNode;
  sessionKey?: string;
  expectedPassword?: string;
  copy?: typeof locale.ui.passwordGate;
  logoAlt?: string;
}

export function PasswordGate({
  children,
  sessionKey = DEFAULT_SESSION_KEY,
  expectedPassword = process.env.NEXT_PUBLIC_WWDW_PASSWORD ?? '',
  copy = locale.ui.passwordGate,
  logoAlt = "Wealthy Women Don't Wait",
}: PasswordGateProps) {
  const t = copy;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const stored = sessionStorage.getItem(sessionKey);
      if (stored === 'true') {
        setIsAuthenticated(true);
      }
      setHasMounted(true);
    });
  }, [sessionKey]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // An unset env var would otherwise make an empty submission match and open the gate.
    if (!expectedPassword) {
      setHasError(true);
      setInputValue('');
      return;
    }

    if (inputValue.trim().toLowerCase() === expectedPassword.toLowerCase()) {
      sessionStorage.setItem(sessionKey, 'true');
      setIsAuthenticated(true);
    } else {
      setHasError(true);
      setInputValue('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (hasError) {
      setHasError(false);
    }
  };

  if (!hasMounted) {
    return null;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(239,200,65,0.44),transparent_48%)]" />

      <div className="w-full max-w-sm">
        <div className="rounded-[2rem] border border-(--forest) bg-(--card-strong) p-8 shadow-[0_30px_80px_rgba(23,53,45,0.12)]">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-small.webp"
              alt={logoAlt}
              width={56}
              height={56}
              className="h-14 w-auto"
            />
          </div>

          <div className="mb-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-(--ink-soft)">
              {t.eyebrow}
            </p>
            <h1 className="font-display text-4xl leading-none tracking-[-0.03em] text-(--forest)">
              {t.title}
            </h1>
            <p className="mt-3 text-sm leading-6 text-(--ink-soft)">
              {t.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              value={inputValue}
              onChange={handleChange}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              aria-invalid={hasError}
              aria-describedby={hasError ? 'password-error' : undefined}
              autoComplete="current-password"
              required
              className="w-full rounded-2xl border border-(--forest) bg-(--paper) px-5 py-3.5 text-sm text-(--forest) placeholder:text-(--ink-soft) focus:outline-none focus:ring-2 focus:ring-(--forest)/30"
            />

            {hasError ? (
              <p
                id="password-error"
                role="alert"
                className="px-1 text-xs font-medium text-(--rose-deep)"
              >
                {t.error}
              </p>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-full border border-(--forest) bg-(--lilac-bar) px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:brightness-90"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
