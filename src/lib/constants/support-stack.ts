import { locale } from '@/lib/i18n';

export type SupportItemId = 'slides' | 'calendar' | 'recordings' | 'resources';

export type SupportItem = {
  id: SupportItemId;
  title: string;
  copy: string;
  href?: string;
  label?: string;
  modal?: 'tutorials';
};

export const supportStack: ReadonlyArray<SupportItem> = locale.supportStack;
