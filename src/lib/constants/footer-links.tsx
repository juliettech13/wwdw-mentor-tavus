import type { ReactNode } from 'react';

type FooterLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const footerLinks: ReadonlyArray<FooterLink> = [
  {
    label: "Twitter",
    href: "https://x.com/_juliettech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.639 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.291 19.492h2.039L6.486 3.24H4.298L17.61 20.645Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_juliettech/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.2"
          cy="6.8"
          r="0.9"
          className="fill-current stroke-none"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/juliettech13",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M12 .5C5.649.5.5 5.8.5 12.34c0 5.233 3.438 9.672 8.205 11.238.6.113.82-.268.82-.596 0-.294-.01-1.072-.016-2.104-3.338.748-4.043-1.674-4.043-1.674-.546-1.42-1.333-1.797-1.333-1.797-1.09-.767.082-.752.082-.752 1.205.087 1.839 1.27 1.839 1.27 1.07 1.883 2.809 1.339 3.495 1.024.108-.797.418-1.34.762-1.648-2.665-.313-5.467-1.367-5.467-6.084 0-1.344.465-2.442 1.235-3.303-.124-.314-.535-1.578.117-3.29 0 0 1.008-.333 3.3 1.261a11.17 11.17 0 0 1 3.005-.417c1.02.005 2.048.144 3.006.417 2.29-1.594 3.296-1.26 3.296-1.26.654 1.711.243 2.975.12 3.289.77.861 1.233 1.959 1.233 3.303 0 4.729-2.807 5.768-5.48 6.075.43.382.814 1.135.814 2.287 0 1.652-.015 2.985-.015 3.39 0 .331.216.715.825.594 4.765-1.568 8.2-6.006 8.2-11.237C23.5 5.8 18.351.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juliettech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1h.02C3.87 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.19h.06c.53-1.01 1.84-2.08 3.79-2.08 4.06 0 4.81 2.67 4.81 6.15V24h-4v-7.76c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24h-4V8Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@_juliettech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.521 3.56 12 3.56 12 3.56s-7.521 0-9.387.506a2.997 2.997 0 0 0-2.11 2.12A31.224 31.224 0 0 0 0 12a31.22 31.22 0 0 0 .503 5.814 2.997 2.997 0 0 0 2.11 2.12c1.866.506 9.387.506 9.387.506s7.521 0 9.388-.506a2.997 2.997 0 0 0 2.11-2.12A31.223 31.223 0 0 0 24 12a31.226 31.226 0 0 0-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
  {
    label: "Podcast",
    href: "https://open.spotify.com/show/4HIsjQCSm3eqSqE12XQNvf?si=b1151634957a4bd6",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 18.5a3.5 3.5 0 0 0 3.5-3.5v-4a3.5 3.5 0 1 0-7 0v4A3.5 3.5 0 0 0 12 18.5Z" />
        <path d="M6 11v3a6 6 0 0 0 12 0v-3" />
        <path d="M12 20.5v3" />
      </svg>
    ),
  },
  {
    label: "Newsletter",
    href: "https://newsletter.juliet.tech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6.5h18v11H3z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "Website",
    href: "https://juliet.tech",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.7 5.22" />
        <path d="M14 11a5 5 0 0 0-7.07 0L4.8 13.12a5 5 0 1 0 7.07 7.07l1.41-1.41" />
      </svg>
    ),
  },
];
