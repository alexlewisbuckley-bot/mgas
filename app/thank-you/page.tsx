import Link from "next/link";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { IconTick } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata = { title: "Request received" };

const steps = [
  ["1", "We read your message", "A person, not a bot."],
  ["2", "We call you back", `From ${site.phone} — save the number.`],
  ["3", "We book the visit", "A time that works for you."],
];

export default function ThankYou() {
  return (
    <>
      <Chrome />
      <main className="mx-auto max-w-[1440px] px-6 py-20 text-center lg:px-12">
        <span className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-ok text-white shadow-[0_16px_36px_rgba(46,176,106,0.3)]">
          <IconTick className="h-10 w-10" strokeWidth={2.5} />
        </span>
        <h1 className="mt-8 font-display text-[38px] font-semibold tracking-[-0.02em] text-ink">Request received.</h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-body">
          One of our engineers will call you back within one working day — usually a lot sooner.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-line bg-ground p-6 text-left">
              <span className="font-display text-[22px] font-semibold text-brand">{n}</span>
              <h2 className="mt-3 text-[14.5px] font-bold text-ink">{t}</h2>
              <p className="mt-1 text-[12.5px] text-body">{d}</p>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="mt-12 inline-flex h-12 items-center rounded-xl bg-ink px-7 text-sm font-bold text-white transition hover:bg-ink-deep"
        >
          Back to homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
