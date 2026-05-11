export interface HomeworkAssignment {
  date: string;
  session: string;
  task: string;
  href: string;
}

export const homework: HomeworkAssignment[] = [
  {
    date: 'Monday, May 11th, 2026',
    session: 'Investing 101: how money actually grows',
    task: 'Do the Retirement Calculator to determine your investment amount.',
    href: '#',
  },
];
