import { locale } from '@/lib/i18n';

export type TutorialSwatch = 'rose' | 'mustard' | 'mint' | 'periwinkle' | 'lilac';

export interface Tutorial {
  id: string;
  title: string;
  summary: string;
  platform: string | null;
  category: string;
  minutes: number;
  swatch: TutorialSwatch;
  glyph: string;
  href: string;
  isExternal?: boolean;
}

export const tutorials: Tutorial[] = locale.tutorials;
