// Legal page content — privacy, terms and cookies. Rendered by app/(legal)/layout.tsx.
// TODO before launch: client to confirm registered company name, company number, registered
// office address and ICO registration (if applicable). Everything marked [confirm] below
// must be checked by the client / their adviser — this is a sensible starting draft, not legal advice.
import { site } from "./site";

export type LegalSection = {
  id: string;
  title: string;
  /** Paragraphs. Each string is one paragraph; a string starting with "- " becomes a bullet list item. */
  body: string[];
};

export type LegalPage = {
  slug: "privacy" | "terms" | "cookies";
  title: string;
  /** Short label used in breadcrumb and footer. */
  label: string;
  updated: string; // TODO: set the real date when the client signs the copy off
  sections: LegalSection[];
  note?: string;
};

const companyLine = `${site.name} [confirm legal entity name and company number]`; // TODO: client to confirm

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy policy",
    label: "Privacy policy",
    updated: "[date]",
    sections: [
      {
        id: "who-we-are",
        title: "Who we are",
        body: [
          `This website is run by ${companyLine}, a plumbing and heating business based in Wigan and working across North West England. In this policy, "we", "us" and "our" mean ${site.name}.`,
          `We are the data controller for the personal information collected through this website. If you have any questions about how we handle your information, contact us at ${site.email} or on ${site.phone}.`,
          "We follow the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Where we need to register with the Information Commissioner's Office (ICO), our registration details will be shown here. [confirm ICO registration number]",
        ],
      },
      {
        id: "what-we-collect",
        title: "What we collect",
        body: [
          "We only collect what we need to deal with your enquiry and carry out work for you. Depending on how you get in touch, this can include:",
          "- Your name, phone number and email address",
          "- Your postcode or property address, so we can confirm we cover your area and plan a visit",
          "- The service you are asking about and anything you tell us about the job in your message",
          "- Details of calls, WhatsApp messages and emails between us",
          "- Information needed to carry out and record the work, such as appliance details and gas safety records (CP12s) for landlords",
          "We do not ask for, and do not want, any special category information (such as health details) through the website. If you tell us something like this because it affects a visit — for example access needs — we will only use it for that purpose.",
          "We also collect some technical information automatically when you use the website, such as your IP address, browser type and the pages you visit. See the Cookies section below.",
        ],
      },
      {
        id: "how-we-use-it",
        title: "How we use it",
        body: [
          "We use your information to:",
          "- Reply to your enquiry and call you back about the job",
          "- Give you a quote, book appointments and carry out the work",
          "- Issue invoices, gas safety records, warranty registrations and other paperwork connected to the work",
          "- Keep records we are required to keep by law or by our accreditation bodies (Gas Safe Register, WIAPS and REFCOM)",
          "- Deal with any complaints or warranty claims",
          "- Keep the website secure and understand how it is used",
          "Our legal basis for this is usually that it is necessary to take steps at your request before entering a contract, or to perform the contract with you. For record keeping and safety obligations the basis is legal obligation. For website security and improving the site the basis is our legitimate interests, which we balance against your rights.",
          "We will not add you to a marketing list or send you marketing messages unless you have asked us to. Anything you send us through the contact form is used only to reply to that enquiry.",
        ],
      },
      {
        id: "who-we-share-it-with",
        title: "Who we share it with",
        body: [
          "We do not sell your information. We only share it where we need to in order to do the work or run the business, including with:",
          "- Service providers who help us run the website and handle enquiries — for example our hosting provider and the email service that delivers contact form submissions to us",
          "- Boiler and equipment manufacturers, when registering a warranty in your name",
          "- Gas Safe Register, where a notification of installation is required",
          "- Our accountants, insurers and professional advisers, where necessary",
          "- Letting agents or landlords, where you have asked us to carry out work on their behalf and they need the records",
          "- Regulators, the police or courts, where we are required to by law",
          "If you leave us a review on Google, that review is public and is handled under Google's own privacy policy. We may display Google reviews on this website.",
          "Some of our service providers may process information outside the UK. Where they do, we make sure appropriate safeguards are in place, such as the UK International Data Transfer Agreement or an adequacy decision.",
        ],
      },
      {
        id: "how-long-we-keep-it",
        title: "How long we keep it",
        body: [
          "We keep your information for as long as we need it for the purposes above, and then delete it or anonymise it.",
          "- Enquiries that do not lead to work: up to 12 months, so we can pick up the conversation if you come back to us [confirm]",
          "- Customer and job records: 6 years from the end of the work, in line with HMRC and limitation periods",
          "- Gas safety records and installation records: at least as long as required by the Gas Safety (Installation and Use) Regulations and our accreditation bodies",
          "- Website logs: typically no longer than 12 months",
        ],
      },
      {
        id: "your-rights",
        title: "Your rights",
        body: [
          "Under UK GDPR you have the right to:",
          "- Ask for a copy of the information we hold about you",
          "- Ask us to correct anything that is inaccurate",
          "- Ask us to delete your information, where there is no good reason for us to keep it",
          "- Ask us to restrict how we use your information",
          "- Object to us using your information, including for any direct marketing",
          "- Ask for your information in a portable format, where it was provided by you and processed by automated means",
          `To exercise any of these rights, contact us at ${site.email}. We will respond within one month. We may need to confirm your identity first.`,
          "If you are unhappy with how we have handled your information, you can complain to the Information Commissioner's Office at ico.org.uk or on 0303 123 1113. We would appreciate the chance to resolve the issue with you first.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies",
        body: [
          "This website uses a small number of cookies and similar technologies to work properly and to help us understand how it is used. You can read the full details, including how to control them, in our Cookies policy.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        body: [
          `Questions about this policy or your information: email ${site.email} or call ${site.phone}.`,
          `Post: ${site.name}, [registered office address — client to confirm].`,
          "We may update this policy from time to time. The date at the top shows when it was last changed.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    label: "Terms",
    updated: "[date]",
    sections: [
      {
        id: "about-these-terms",
        title: "About these terms",
        body: [
          `These terms cover your use of this website and set out the basis on which ${site.name} ("we", "us") provides plumbing, heating, gas and related services. By using the website or booking work with us, you agree to them.`,
          "If anything here conflicts with a written quote or contract we give you for a specific job, the quote or contract applies.",
          "Nothing in these terms affects your statutory rights as a consumer.",
        ],
      },
      {
        id: "quotes-and-bookings",
        title: "Quotes and bookings",
        body: [
          "Sending an enquiry through the website does not create a booking. We will contact you to discuss the job, and where needed arrange a visit or survey before confirming a price.",
          "Quotes are based on the information available at the time. If we find something during the work that changes the scope — for example hidden pipework damage — we will stop and talk to you before doing anything extra, and agree any change in price in writing.",
          "Quotes are valid for 30 days unless we say otherwise. [confirm]",
          "Appointment times are given in good faith. Emergency and breakdown work can affect our schedule; if we are running late we will let you know as soon as we can.",
        ],
      },
      {
        id: "cancellations",
        title: "Cancellations and missed appointments",
        body: [
          "If you need to cancel or move an appointment, please give us as much notice as possible. [confirm any cancellation charge — e.g. a call-out fee for cancellations with less than 24 hours' notice or where nobody is home]",
          "If you are a consumer and agree to work with us away from our premises (for example at your home) or at a distance (by phone, email or online), you usually have a 14-day right to cancel under the Consumer Contracts Regulations 2013. If you ask us to start work within that period, you may be asked to pay for work done up to the point you cancel.",
        ],
      },
      {
        id: "payment",
        title: "Payment",
        body: [
          "Prices are quoted in pounds sterling. We will tell you whether VAT applies. [confirm VAT registration]",
          "For larger jobs, such as boiler installations, we may ask for a deposit before ordering materials. The balance is due on completion unless we have agreed otherwise in writing.",
          "Invoices are payable within [confirm — e.g. 7 days]. We may charge statutory interest on late payments.",
          "Materials remain our property until paid for in full.",
        ],
      },
      {
        id: "our-work",
        title: "Our work and guarantees",
        body: [
          "All gas work is carried out by Gas Safe registered engineers. Water supply work is carried out under the WIAPS approved contractor scheme, and refrigerant work under REFCOM, as applicable.",
          "We carry out work with reasonable skill and care and in line with current regulations and manufacturer instructions.",
          "Our workmanship is guaranteed for [confirm — e.g. 12 months] from completion. Parts and appliances are covered by the manufacturer's warranty, which we will register for you where applicable. Warranty terms usually require the appliance to be serviced annually.",
          "The guarantee does not cover faults caused by misuse, lack of servicing, work by others, existing system issues we have pointed out, or wear and tear.",
        ],
      },
      {
        id: "your-responsibilities",
        title: "Your responsibilities",
        body: [
          "- Give us safe access to the property and the areas we need to work in",
          "- Tell us about anything we should know before we arrive, such as asbestos, access restrictions or pets",
          "- Make sure anyone we need to speak to (such as a landlord or letting agent) has authorised the work",
          "- Not use a gas appliance we have told you is unsafe or have disconnected",
        ],
      },
      {
        id: "liability",
        title: "Liability",
        body: [
          "We hold public liability insurance. [confirm cover amount]",
          "We are responsible for loss or damage caused by our negligence or breach of these terms. We are not responsible for loss that was not foreseeable, loss caused by something outside our reasonable control, or for business losses where you are a consumer.",
          "Nothing in these terms limits our liability for death or personal injury caused by negligence, fraud, or anything else that cannot be limited by law.",
        ],
      },
      {
        id: "website",
        title: "Use of this website",
        body: [
          "The content on this website is for general information only and is not a substitute for advice about your particular property or system.",
          "Reviews shown on the website are genuine customer reviews, including reviews from Google. Where we show an excerpt, the full review is available on the original platform.",
          `All content, logos and images on this website belong to ${site.name} or our licensors and may not be reused without permission.`,
          "We try to keep the website accurate and available but do not promise that it will be error-free or always online.",
        ],
      },
      {
        id: "complaints",
        title: "Complaints",
        body: [
          `If something has gone wrong, tell us. Email ${site.email} or call ${site.phone} and we will try to put it right.`,
          "If you are not satisfied with how we have dealt with a gas safety concern, you can also contact Gas Safe Register at gassaferegister.co.uk.",
        ],
      },
      {
        id: "general",
        title: "General",
        body: [
          "These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction over any dispute.",
          "If any part of these terms is found to be unenforceable, the rest still applies.",
          `Company details: ${companyLine}. Registered office: [client to confirm].`,
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookies policy",
    label: "Cookies",
    updated: "[date]",
    sections: [
      {
        id: "what-cookies-are",
        title: "What cookies are",
        body: [
          "Cookies are small text files stored on your device when you visit a website. They help the site work, remember your preferences and tell the site owner how it is being used. Similar technologies, such as local storage and tracking pixels, work in much the same way and are covered by this policy too.",
        ],
      },
      {
        id: "cookies-we-use",
        title: "Cookies we use",
        body: [
          "We keep this to a minimum. The cookies on this website fall into these groups:",
          "- Strictly necessary: needed for the website to work, such as remembering a form you have started or protecting the site against abuse. These do not need your consent.",
          "- Analytics: help us understand which pages are visited and how people find the site, so we can improve it. These are only set if you accept them. [confirm analytics tool — e.g. Google Analytics 4 or a privacy-friendly alternative]",
          "- Third-party content: some pages may embed content from other services, such as a Google map or Google reviews. Those services may set their own cookies, which are controlled by their privacy policies.",
          "We do not use advertising or cross-site tracking cookies. [confirm]",
          "A full list of the cookies in use, with names and expiry times, will be added here once the site's analytics setup is confirmed. [TODO]",
        ],
      },
      {
        id: "managing-cookies",
        title: "Managing cookies",
        body: [
          "You can accept or decline non-essential cookies when you first visit the site, and change your choice at any time using the cookie settings link in the footer. [confirm banner / consent tool]",
          "You can also block or delete cookies through your browser settings. If you block strictly necessary cookies, some parts of the site may not work properly.",
          "For more about cookies and how to control them, see the ICO's guidance at ico.org.uk or allaboutcookies.org.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        body: [
          `If you have any questions about our use of cookies, email ${site.email}. Our Privacy policy explains how we handle personal information more generally.`,
        ],
      },
    ],
  },
];

export function getLegalPage(slug: LegalPage["slug"]) {
  const page = legalPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown legal page: ${slug}`);
  return page;
}
