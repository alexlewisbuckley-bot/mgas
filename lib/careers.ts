// Careers — roles shown on /careers.
// TODO: client to confirm which vacancies are live, the wording of each, and where applications should go.
// Applications currently go to the main site email (lib/site.ts) — the design shows a dedicated careers@ address.

export type Role = {
  title: string;
  terms: string;
  requirements: string;
};

export const roles: Role[] = [
  {
    title: "Gas Engineer",
    terms: "Full time · Wigan base · domestic & commercial",
    requirements: "Gas Safe registered, full UK driving licence.",
  },
  {
    title: "Apprentice Plumber",
    terms: "Full time · earn while you learn",
    requirements: "No experience needed — attitude is the job spec.",
  },
];

export const perks = [
  "Van & kit provided",
  "Paid training & tickets",
  "No weekend rota surprises",
  "Straight-talking management",
];
