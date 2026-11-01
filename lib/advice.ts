// Advice Hub articles. Titles/summaries are real topics; the articles themselves are not written yet.
// TODO: every `href` is "#" until article pages exist — do not invent routes.

export type Article = {
  category: string;
  title: string;
  summary: string;
  read: string;
  href: string;
};

export const featuredArticle: Article & { photo: string } = {
  category: "Featured · Boilers",
  title: "Boiler losing pressure? Here’s what it means.",
  summary:
    "The most common call we get — and often something you can sort yourself in five minutes by topping the system up.",
  read: "5 min read",
  href: "#", // TODO: link once the article exists
  photo: "Portrait close-up of a boiler pressure gauge with the needle in the green zone, engineer’s hand in frame.",
};

export const articles: Article[] = [
  {
    category: "Heating",
    title: "Radiators cold at the bottom? Sludge, explained.",
    summary: "Why it happens, what a power flush does, and when a filter is enough.",
    read: "4 min read",
    href: "#", // TODO
  },
  {
    category: "Gas safety",
    title: "What actually happens in a CP12 check.",
    summary: "What the engineer looks at, how long it takes and what the record covers.",
    read: "3 min read",
    href: "#", // TODO
  },
  {
    category: "Renewables",
    title: "Heat pumps in older houses — honest answers.",
    summary: "Insulation, radiator sizing and whether it’s worth it for your property.",
    read: "6 min read",
    href: "#", // TODO
  },
  {
    category: "Plumbing",
    title: "Find your stopcock before you need it.",
    summary: "Where it usually is, how to check it turns, and what to do if it’s seized.",
    read: "2 min read",
    href: "#", // TODO
  },
];
