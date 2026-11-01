// Recent work gallery — generic job captions only. No customer names or addresses.
// TODO: client to supply real project photos and confirm captions before launch.

export const workCategories = ["All", "Domestic", "Commercial", "Landlord"] as const;
export type WorkCategory = (typeof workCategories)[number];

export const workProjects: {
  category: Exclude<WorkCategory, "All">;
  title: string;
  caption: string;
  photo: string;
}[] = [
  {
    category: "Domestic",
    title: "Combi boiler replacement",
    caption: "Wigan · like-for-like swap",
    photo: "Landscape photo of the finished combi boiler on the wall, pipework boxed in neatly, kitchen tidy.",
  },
  {
    category: "Commercial",
    title: "Plant room boiler service",
    caption: "Warrington · planned maintenance",
    photo: "Landscape photo of a commercial plant room with the boilers and pipework clearly labelled.",
  },
  {
    category: "Landlord",
    title: "Gas safety checks across a portfolio",
    caption: "Bolton · annual CP12 schedule",
    photo: "Landscape photo of an engineer with a flue gas analyser at a boiler in a rental property.",
  },
  {
    category: "Domestic",
    title: "Back boiler to combi conversion",
    caption: "Leigh · full system flush included",
    photo: "Before-and-after pair: old back boiler fireplace, then the new combi and cleared chimney breast.",
  },
  {
    category: "Domestic",
    title: "Hidden water leak traced",
    caption: "Wigan · leak detection",
    photo: "Landscape photo of thermal imaging or acoustic equipment in use on a kitchen floor.",
  },
  {
    category: "Commercial",
    title: "Air source heat pump install",
    caption: "Chorley · small retail premises",
    photo: "Landscape photo of the heat pump unit outside the building with finished pipework.",
  },
];
