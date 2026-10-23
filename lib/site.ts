// Central site data — placeholder values are flagged; grep for TODO before launch.
export const site = {
  name: "MGAS Plumbing & Heating",
  phone: "0161 000 0000", // TODO: real number
  phoneHref: "tel:+441610000000", // TODO: real number
  email: "hello@mgas-plumbing.co.uk", // TODO: real email
  whatsappHref: "https://wa.me/441610000000", // TODO: real number
  hours: "Mon–Fri 8am–6pm · Sat 9am–1pm",
  areasBlurb: "Based in Wigan, covering North West England",
};

export const services = [
  {
    slug: "boiler-installations",
    nav: "Boiler Installation",
    title: "Boiler Installations",
    short: "New combi and system boilers — surveyed, supplied and fitted.",
    blurb:
      "We provide professional domestic and commercial boiler installation services, helping customers choose and install reliable, efficient heating systems suited to their property and requirements. From replacement boilers to new heating installations, we ensure every system is installed safely, professionally and in accordance with current regulations.",
    icon: "flame",
  },
  {
    slug: "boiler-servicing-repairs",
    nav: "Servicing & Repairs",
    title: "Boiler Servicing & Repairs",
    short: "Annual services, fault-finding and repairs.",
    blurb:
      "Regular boiler servicing helps maintain safety, reliability and efficiency. We service and repair a wide range of domestic heating systems, diagnosing faults and carrying out repairs to get your heating and hot water back up and running.",
    icon: "wrench",
  },
  {
    slug: "commercial-boiler-servicing",
    nav: "Commercial",
    title: "Commercial Boiler Servicing & Repairs",
    short: "Plant rooms and commercial heating, maintained year-round.",
    blurb:
      "We provide commercial boiler servicing, fault finding and repairs for businesses and commercial properties. Whether it's routine maintenance or an unexpected breakdown, we help keep commercial heating systems operating safely, efficiently and reliably.",
    icon: "building",
  },
  {
    slug: "landlord-gas-safety",
    nav: "Gas Safety",
    title: "Landlord Gas Safety Checks",
    short: "CP12 certificates for rental properties and portfolios.",
    blurb:
      "We provide professional landlord gas safety checks and CP12 certificates for rental properties. Our thorough inspections help landlords meet their legal responsibilities and ensure gas appliances and installations are operating safely.",
    icon: "shield",
  },
  {
    slug: "plumbing-repairs",
    nav: "Plumbing",
    title: "General Plumbing Repairs",
    short: "Taps, toilets, pipework and valves — reliable repairs.",
    blurb:
      "From leaking taps and toilets to pipework, valves and general plumbing faults, we provide a reliable repair service for a wide range of domestic and commercial plumbing issues.",
    icon: "droplet",
  },
  {
    slug: "leak-detection",
    nav: "Leak Detection",
    title: "Gas & Water Leak Detection",
    short: "Professional equipment to trace leaks fast.",
    blurb:
      "Gas and water leaks can cause serious damage if left undetected. We use professional equipment and proven methods to locate leaks efficiently, helping to identify the source of the problem and minimise disruption.",
    icon: "leak",
  },
  {
    slug: "heat-pumps-air-conditioning",
    nav: "Heat Pumps & AC",
    title: "Heat Pump & Air Conditioning",
    short: "Modern, efficient heating and cooling solutions.",
    blurb:
      "As part of our renewable and energy-efficient services, we offer heat pump and air conditioning installation and repairs. We can help with modern heating and cooling solutions designed to improve comfort and energy efficiency in both domestic and commercial properties.",
    icon: "air",
  },
] as const;

export type Service = (typeof services)[number];

export const reviews = [
  // Real Google reviews (5.0, 11 reviews) — titles are excerpts from the review text.
  {
    title: "Brilliant from start to finish.",
    body: "New kitchen installed and used MGAS for all the plumbing work. Everything complete on time and very professional.",
    name: "Ben Sherrington",
    when: "Google review",
  },
  {
    title: "Excellent from start to finish.",
    body: "MGAS Plumbing & Heating have just replaced a boiler for me. The service was excellent from start to finish. Would definitely recommend.",
    name: "Simon Litherland",
    when: "Google review",
  },
  {
    title: "Trustworthy and fair-priced.",
    body: "He knew straight away what the issue was. Supplied and fitted the part, drained the system and added inhibitor — for less than half the original quote.",
    name: "Thomas",
    when: "Google review",
  },
  {
    title: "The work is amazing.",
    body: "Matt and Kyle are great guys and so polite. Can't believe the transformation of the bathroom. They explain everything really well.",
    name: "Kerry Howlett",
    when: "Google review",
  },
];

export const towns = [
  "Wigan",
  "Leigh",
  "Bolton",
  "St Helens",
  "Skelmersdale",
  "Chorley",
  "Warrington",
  "Salford",
  "Manchester",
  "Preston",
];
