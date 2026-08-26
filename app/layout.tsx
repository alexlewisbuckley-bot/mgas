import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MGAS Plumbing & Heating — Trusted gas & heating across the North West",
    template: "%s · MGAS Plumbing & Heating",
  },
  description:
    "Professional plumbing, heating and renewable energy services for domestic and commercial customers across North West England. Gas Safe and WIAPS accredited.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
