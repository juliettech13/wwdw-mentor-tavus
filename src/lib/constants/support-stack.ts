type SupportItem = {
  title: string;
  copy: string;
  href?: string;
  label?: string;
};

export const supportStack: ReadonlyArray<SupportItem> = [
  {
    title: "Slides",
    copy: "Review every slide from the course so you can catch up on what we've covered.",
    href: "https://docs.google.com/presentation/d/1Dhecipg0ze3xiARoru4hasqQc8VmDcx-aGbp82QbNY8/edit?usp=sharing",
    label: "Open slides",
  },
  {
    title: "Calendar",
    copy: "The class schedule lives on Luma, make sure to subscribe so you never miss class.",
    href: "https://luma.com/wealthy-women-v2",
    label: "Open calendar",
  },
  {
    title: "Recordings",
    copy: "Session recordings for catching up on what we've covered.",
    href: "https://drive.google.com/drive/u/1/folders/1N3VZuwx0LFKM49XiFl9UdXYr5Odo9l5U",
    label: "Open recordings",
  },
  {
    title: "Tutorials",
    copy: "Walkthroughs for brockerage accounts, crypto, automating trades, and more.",
    href: "https://www.notion.so/juliettech/wealthy-women-don-t-wait-314347687f4d8074be1bd333c8dece6b?source=copy_link#317347687f4d806c9204fd1697d9f457",
    label: "Open tutorials",
  },
];
