// Content for /commercial, /emergency and /about — copy taken from the approved Figma frames.
// Placeholder values are in square brackets; grep for "[" before launch.

export const commercial = {
  eyebrow: "Commercial & landlords",
  title: ["Heating & plumbing,", "managed for you."],
  intro:
    "Portfolios, plant rooms and letting agents — planned maintenance, compliance and breakdown response from one accountable team.",
  benefits: [
    { title: "CP12 portfolios", body: "Certificates scheduled, chased and documented across every property." },
    { title: "Planned maintenance", body: "Fixed schedules for plant rooms and commercial heating systems." },
    { title: "Priority response", body: "Breakdowns triaged and attended ahead of the general queue." },
  ],
  steps: [
    { title: "Share your portfolio", body: "Send addresses and current certificate dates — spreadsheet or portal, whatever you have." },
    { title: "We build the schedule", body: "CP12s, services and maintenance mapped out a year ahead, with reminders handled by us." },
    { title: "You get the paperwork", body: "Certificates and reports land in your inbox the day the job is done." },
  ],
  review: {
    title: "Brilliant from start to finish.",
    body: "New kitchen installed and used MGAS for all the plumbing work. Everything complete on time and very professional.",
    name: "Ben Sherrington · Google review",
  },
  accreditation: {
    title: "Gas Safe & WIAPS accredited",
    body: "Compliant, documented workmanship on every visit — the audit trail your properties need.",
  },
};

export const emergency = {
  chip: "Emergency call-out",
  title: ["No heating? Leak? Smell of gas?", "Call us now."],
  gasNotice: {
    title: "Smell gas right now?",
    body: "Turn the supply off at the meter, open windows, avoid switches — and call the National Gas Emergency line free on",
    line: "0800 111 999",
    lineHref: "tel:0800111999",
    after: "before calling us.",
  },
  situations: [
    "No heating or hot water",
    "Burst pipe or major leak",
    "Boiler leaking water",
    "Water through a ceiling",
    "No water supply",
    "Frozen or burst condensate",
  ],
  whileYouWait: [
    { title: "Stop the water", body: "Turn off the stopcock — usually under the kitchen sink — to slow any leak." },
    { title: "Kill the power to the boiler", body: "If the boiler is leaking, switch it off at the fused spur — don’t touch wet electrics." },
    { title: "Catch and move", body: "Buckets under drips, towels down, and anything precious out of the way." },
  ],
};

export const about = {
  title: ["The team your boiler", "hopes you’ll call."],
  intro:
    "MGAS Plumbing & Heating is a Wigan-based team of engineers working across the North West — domestic, landlord and commercial. Gas Safe and WIAPS accredited, we do safe, compliant work and we’re straight with people about what things cost.",
  heroPhoto: "The crew with the vans — same shot style as the homepage hero, graded to brand navy",
  expect: [
    { title: "ID first", body: "Every engineer shows Gas Safe ID at the door before any work starts." },
    { title: "Clean work", body: "Shoe covers on, carpets sheeted, and the place left as we found it." },
    { title: "Plain English", body: "What’s wrong, what it costs and your options — explained before we touch anything." },
    { title: "Paper trail", body: "Certificates and job reports emailed the same day, every time." },
  ],
  // TODO: client to supply names, roles, Gas Safe numbers and portrait photos.
  team: Array.from({ length: 4 }, () => ({
    name: "[Name]",
    role: "[Role — e.g. Gas Engineer]",
    reg: "Gas Safe No. [000000]",
  })),
  accreditations: [
    { name: "Gas Safe Register", sub: "Registered for all gas work" },
    { name: "WIAPS", sub: "Water Industry Approved Plumber" },
  ],
};
