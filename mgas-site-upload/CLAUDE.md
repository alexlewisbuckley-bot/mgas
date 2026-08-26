# MGAS Plumbing & Heating — Website Build

Implementation of the approved Figma designs as a Next.js prototype, deployed on Vercel.

**Figma file:** `qNUfP6AueImg1oXVsOte38` — all approved pages live on the page **"★★ Website — Full Build"**.
Open any frame with: `https://www.figma.com/design/qNUfP6AueImg1oXVsOte38/?node-id=<NODE-ID with : replaced by ->`
Use the Figma MCP (`get_design_context`, `get_screenshot`) against these node IDs for exact geometry — do not eyeball.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy: Vercel via GitHub integration (preview per PR)
- Fonts via `next/font/google`: **Bricolage Grotesque** (SemiBold — display/headings), **Instrument Sans** (400/500/600/700 — everything else)
- Logo is an image asset (PNG/SVG supplied in `/public/brand/`), NOT text. White-on-navy version only; it sits on navy surfaces everywhere.

## Design tokens

Colors (Tailwind theme names suggested):

| token | hex | use |
|---|---|---|
| ink | #0A1729 | primary navy — nav, footer text surfaces, headings |
| ink-deep | #071322 | footer bg, gradient ends |
| panel-1 / panel-2 | #13294A / #0B1D36 | navy gradient panels (hero, CTA cards) |
| brand | #1D6ED0 | THE accent. links, active states, primary buttons |
| brand-bright | #2F82E4 → #1560BE | primary button vertical gradient (top→bottom) |
| sky | #43A0F0 | map dots, secondary accents |
| ice | #EAF1FA / #E4EEFB | icon chip fills, active category pill |
| ground | #F7FAFC | alternating section background (vs white) |
| line | #E4EAF2 | card borders, hairlines (#ECF1F7 for inner rules) |
| body | #5B7089 | body text on light |
| faint | #8CA0B8 | captions, placeholders |
| mut | #AFC2D8 | body text on navy |
| ok | #2EB06A | ticks / success |
| tp | #00B67A | Trustpilot green ONLY |
| warn | #F5A623 | emergency accent + "NOT TESTED" chips (#FDEAD7 bg / #9A5B1F text) |
| wa | #25D366 | WhatsApp only |

Type scale (desktop): H1 40–47/Bricolage SemiBold, ls −0.8; H2 30–34 ls −0.5; card titles 15.5–17.5 Instrument Bold; body 13–15.5 Instrument Regular, line-height 1.5; eyebrows 13 Instrument Bold, uppercase, letter-spacing 18%, color brand; captions 11–12.5.

Radii: section cards 16–20; small cards 14; buttons 11–12; pills/chips fully rounded. Borders 1px `line` on every white card. Card shadow: `0 14px 30px rgba(16,42,77,0.07)`. Button shadow: `0 10px 24px rgba(29,110,208,0.35)` (blue glow on primary).

Register rules (why it looks like it does): one blue accent only; navy chrome; alternating white / `ground` section bands; hairline keylines between chrome bands; every white card gets border + soft shadow; drawn 2px round-cap stroke icons (no icon fonts, no emoji); image placeholders are dashed-border blocks with shot-spec captions — keep them until real photos exist; dummy data (phone, reviews, prices `£[—]`, company numbers `00000000`) is placeholder — grep for `0161 000 0000`, `[—]`, `00000000` before launch.

## Page inventory → Figma node IDs

| route | frame | node id |
|---|---|---|
| / (desktop) | MGAS · Homepage — Full build | 163:21 |
| / (mobile ref) | MGAS · Homepage Mobile | 164:21 |
| /services | PAGE · All Services | 199:21 |
| /services/boiler-installations | Service template (canonical) | 200:21 |
| /services/boiler-servicing-repairs | Service clone | 211:21 |
| /services/commercial-boiler-servicing | Service clone | 211:261 |
| /services/landlord-gas-safety | Service clone | 211:501 |
| /services/plumbing-repairs | Service clone | 212:741 |
| /services/leak-detection | Service clone | 212:981 |
| /services/heat-pumps-air-conditioning | Service clone | 212:1221 |
| /contact | PAGE · Contact | 202:21 |
| /commercial | PAGE · Commercial & Landlords | 203:21 |
| /emergency | PAGE · Emergency Call-Out | 204:21 |
| /about | PAGE · About | 205:21 |
| /areas | PAGE · Areas We Cover | 206:21 |
| /areas/wigan (template for all towns) | PAGE · Area — Wigan | 206:216 |
| /reviews | PAGE · Reviews | 207:21 |
| /new-boiler-cost | PAGE · New Boiler Cost | 208:21 |
| /our-work | PAGE · Recent Work | 209:21 |
| /advice | PAGE · Advice Hub | 209:153 |
| /careers | PAGE · Careers | 209:264 |
| /privacy (layout serves /terms, /cookies) | PAGE · Privacy Policy | 210:21 |
| /thank-you | PAGE · Thank You | 210:143 |
| /404 | PAGE · 404 | 210:244 |
| CTA slider slide-2 state (homepage) | CTA slider · slide 2 | 177:63 |

## Shared components (build these first, in this order)

1. **Tokens + Tailwind config** from the table above.
2. **TopBar** (announcement strip) · **NavBar** (menu button, search pill, centered logo image, links, phone, WhatsApp chip, Book Now gradient pill with arrow chip) · **CategoryBar** (active pill + links + angled commercial segment) — all three on every page; source: 163:21 y0–190.
3. **Footer** — 188:21 inside 163:21 (4 columns + accreditation slots + legal bar).
4. **Primitives**: SectionHeader (eyebrow + H2 + optional right link), Card, ServiceCard, TilePill, Button (primary gradient / white / ghost), TickRow, ImagePlaceholder (dashed + camera + spec caption), TrustpilotStars, ReviewCard, ContactBand (navy split with form), FAQAccordion, StepRow, WarrantyShield, MapCard (render as inline SVG traced from Figma).
5. Then pages: homepage → all-services → service template (one component, 7 data objects) → the rest. Area pages and legal pages are data-driven templates.

## Behaviour notes (interactions the static design implies)

- Hero + CTA slider: auto-advancing carousels with pause, dots, arrows.
- FAQ accordions expand/collapse (first item open by default).
- Category bar and services dropdown navigate; active category reflects current page.
- Forms post to an API route; success redirects to /thank-you. Validate name+phone minimum.
- Mobile: hamburger opens full nav; logo simplified (image scales fine); category bar horizontally scrollable; quick-action call/WhatsApp chips before the form.
- Emergency page phone number is `tel:` linked everywhere; gas-safety notice must keep the 0800 111 999 National Gas Emergency line.

## Verification loop

After each section: screenshot local build (Playwright, 1440px) and the matching Figma node (`get_screenshot`), compare side by side, fix, repeat. Match spacing to ±2px; typography and color exactly.
