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

// Service content — source of truth is the client-completed "MGAS Service Page Template" (Oct 2026).
export const services = [
  {
    slug: "boiler-installations",
    nav: "Boiler Installation",
    title: "Boiler Installations",
    short: "Domestic and commercial boilers supplied and fitted.",
    blurb:
      "We install domestic and commercial boilers, helping you choose a reliable, efficient system suited to your property and heating needs. From replacing an existing boiler to installing a new heating system, we focus on quality workmanship, safe installation and compliance with current regulations. We can also fit wireless and smart thermostats for convenient heating control.",
    included: ["Boiler survey & heat-loss check", "Boiler supply & installation", "Removal of existing boiler", "System cleaning & inhibitor", "Manufacturer warranty registration", "Smart thermostat installation"],
    photo:
      "Landscape photograph of an engineer installing a boiler, with neatly finished pipework and the work area protected.",
    icon: "flame",
  },
  {
    slug: "boiler-servicing-repairs",
    nav: "Servicing & Repairs",
    title: "Boiler Servicing & Repairs",
    short: "Routine boiler servicing, fault diagnosis and reliable repairs.",
    blurb:
      "Regular boiler servicing helps maintain the safety, reliability and efficiency of your heating system. We service and repair a wide range of domestic boilers, diagnose faults and carry out repairs to help keep your heating and hot water working as they should. We can also install wireless and smart thermostats to improve control.",
    included: ["Boiler service & flue analysis", "Gas rate & safety checks", "Fault diagnosis & testing", "Boiler repairs & replacement parts", "Controls checks & smart upgrades", "Service records & advice"],
    photo:
      "Landscape close-up of an engineer using a flue gas analyser while servicing a boiler.",
    icon: "wrench",
  },
  {
    slug: "commercial-boiler-servicing",
    nav: "Commercial",
    title: "Commercial Boiler Services",
    short: "Commercial boiler installation, servicing and repairs for businesses.",
    blurb:
      "We provide commercial boiler installation, servicing and repairs for businesses and commercial properties. From planned maintenance to fault diagnosis and breakdown repairs, we help keep commercial heating systems operating safely and reliably, with work tailored to your premises and requirements.",
    included: ["Commercial boiler installations", "Planned servicing & maintenance", "Fault diagnosis & repairs", "Plant room inspections", "Gas safety & compliance checks", "Maintenance records & reporting"],
    photo:
      "Landscape photograph of a commercial plant room with professionally installed boilers and neatly routed pipework.",
    icon: "building",
  },
  {
    slug: "landlord-gas-safety",
    nav: "Gas Safety",
    title: "Landlord Gas Safety Checks",
    short: "Gas safety inspections and CP12 records for rental properties.",
    blurb:
      "We carry out landlord gas safety checks for rental properties, helping landlords and letting agents meet their legal responsibilities. Our inspections cover applicable gas appliances, flues and installation safety, with a gas safety record issued following the check and advice provided if any issues need attention.",
    included: ["Gas safety record (CP12)", "Appliance & flue checks", "Gas installation safety checks", "Advice on remedial work", "Landlord & agent appointments", "Digital records & renewal reminders"],
    photo:
      "Landscape photograph of an engineer completing a gas safety inspection in a rental property, with inspection equipment visible.",
    icon: "shield",
  },
  {
    slug: "plumbing-repairs",
    nav: "Plumbing",
    title: "General Plumbing Repairs",
    short: "Reliable repairs for taps, toilets, pipework, valves and leaks.",
    blurb:
      "We carry out domestic and commercial plumbing repairs, from dripping taps and leaking toilets to faulty valves, damaged pipework and hot water cylinder issues. We identify the cause of the problem, explain the options available and complete repairs professionally, leaving the work area clean and tidy.",
    included: ["Taps, toilets & showers", "Leaks & burst pipe repairs", "Pipework & valve replacements", "Hot water cylinders & tanks", "Waste pipework & drainage faults", "Professional, tidy workmanship"],
    photo:
      "Landscape photograph of an engineer repairing pipework beneath a sink, with tools arranged neatly.",
    icon: "droplet",
  },
  {
    slug: "leak-detection",
    nav: "Leak Detection",
    title: "Gas & Water Leak Detection",
    short: "Specialist equipment to help locate hidden gas and water leaks.",
    blurb:
      "We investigate gas and water leaks in domestic and commercial properties, using specialist equipment and proven techniques to help identify the source. From suspected pipework leaks to hidden water leaks, we aim to pinpoint the problem and explain the next steps, with care taken to minimise unnecessary disruption.",
    included: ["Acoustic & tracer gas detection", "Thermal imaging surveys", "Pressure testing", "Hidden pipework investigations", "Repair options & recommendations", "Findings for insurance enquiries"],
    photo:
      "Landscape photograph of an engineer using specialist leak detection equipment to investigate a suspected hidden pipework leak.",
    icon: "leak",
  },
  {
    slug: "heat-pumps-air-conditioning",
    nav: "Heat Pumps & AC",
    title: "Heat Pumps & Air Conditioning",
    short: "Heating and cooling solutions for domestic and commercial properties.",
    blurb:
      "We install, service and repair heat pumps and air conditioning systems for domestic and commercial properties. Whether you are looking to improve your heating system or add cooling to your space, we can help identify a suitable solution based on your property, comfort requirements and intended use.",
    included: ["Site surveys & system sizing", "Air source heat pump installation", "Air conditioning installation", "Servicing & fault diagnosis", "Controls & commissioning", "System efficiency advice"],
    photo:
      "Landscape photograph of a neatly installed air source heat pump outside a home, with finished pipework visible.",
    icon: "air",
  },
  {
    slug: "power-flushing",
    nav: "Power Flushing",
    title: "Central Heating Power Flushing",
    short: "Remove sludge and debris to help restore heating system performance.",
    blurb:
      "Sludge and debris can build up inside central heating systems, contributing to cold radiators, poor circulation and uneven heating. We provide central heating power flushing to clean system pipework and radiators, helping improve circulation and support the efficient operation of your heating system.",
    included: ["Heating system assessment", "Radiator & pipework cleaning", "Power flushing equipment", "System water treatment", "Inhibitor added where suitable", "Heating performance checks"],
    photo:
      "Landscape photograph of an engineer connecting power-flushing equipment to a central heating system in a tidy domestic property.",
    icon: "flush",
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
