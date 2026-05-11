import { locale } from '@/lib/i18n';

export interface HomeworkAssignment {
  date: string;
  session: string;
  task: string;
  href: string;
}

export const homework: HomeworkAssignment[] = locale.homework;
