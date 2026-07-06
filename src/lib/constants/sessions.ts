import { locale } from '@/lib/i18n';

export type Session = {
  date: string;
  title: string;
  note: string;
  link: string;
};

export const sessions: ReadonlyArray<Session> = locale.sessions;
