type Session = {
  date: string;
  title: string;
  note: string;
};

export const sessions: ReadonlyArray<Session> = [
  {
    date: "Monday, May 11",
    title: "Investing 101: how money actually grows",
    note: "Foundations first, panic later. Students map their money, understand compounding, and get clear on what investing is actually doing.",
  },
  {
    date: "Wednesday, May 13",
    title: "Stocks, funds, and public markets",
    note: "What are we buying, why are we buying it, and how do we stop pretending every ticker is a personality trait?",
  },
  {
    date: "Friday, May 15",
    title: "Play time: open your account + make your first trade",
    note: "Hands-on brokerage setup, funding, and first-trade confidence instead of endless tab collecting.",
  },
  {
    date: "Monday, May 18",
    title: "DYOR & reviewing investments",
    note: "Students learn how to research ideas, compare options, and make decisions with receipts, not vibes.",
  },
  {
    date: "Wednesday, May 20",
    title: "Investor Lifestyle w/ Valerie Canavaggio",
    note: "A sane walkthrough of digital assets, where they fit, and what deserves your curiosity versus your side-eye.",
  },
  {
    date: "Friday, May 22",
    title: "Play time: Digital finance & crypto",
    note: "Practical execution, not crypto fan fiction.",
  },
  {
    date: "Monday, May 25",
    title: "Angel investing and private markets",
    note: "Pre-IPO investing, access paths, and how to evaluate opportunities without getting seduced by shiny decks.",
  },
  {
    date: "Tuesday, May 26",
    title: "Bonus: real estate markets",
    note: "A guest conversation on real estate markets and how they sit beside the rest of your portfolio.",
  },
  {
    date: "Wednesday, May 27",
    title: "Investing strategies & principles",
    note: "The rules, rhythms, and filters that keep your money life coherent.",
  },
  {
    date: "Friday, May 29",
    title: "Play time: design your portfolio",
    note: "Students finish by shaping a portfolio they can actually maintain.",
  },
] as const;
