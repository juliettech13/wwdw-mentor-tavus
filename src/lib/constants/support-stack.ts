import { locale } from '@/lib/i18n';

type SupportItem = {
  title: string;
  copy: string;
  href?: string;
  label?: string;
  modal?: 'tutorials';
};

export const supportStack: ReadonlyArray<SupportItem> = locale.supportStack;
