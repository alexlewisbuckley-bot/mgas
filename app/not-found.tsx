import Link from "next/link";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export const metadata = { title: "Page not found" };

const secondaryBtn =
  "flex h-12 w-full items-center justify-center rounded-xl border border-[#dce5ef] bg-white px-6 text-[13.5px] font-bold text-ink transition hover:border-brand hover:text-brand sm:w-[170px]";

export default function NotFound() {
  return (
    <>
      <Chrome />
      <main className="mx-auto max-w-[1440px] px-6 pb-[88px] pt-[90px] text-center lg:px-12">
        <p className="font-display text-[88px] font-semibold leading-none tracking-[-0.025em] text-ice-chip sm:text-[120px]">
          404
        </p>
        <h1 className="mt-5 font-display text-[28px] font-semibold tracking-[-0.6px] text-ink sm:text-[34px]">
          This page has sprung a leak.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15.5px] text-body">
          The page you’re after has moved, or never existed. These will get you back on track:
        </p>
        <div className="mx-auto mt-10 flex max-w-xs flex-col items-center gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-brand px-6 text-[13.5px] font-bold text-white transition hover:brightness-110 sm:w-[170px]"
          >
            Homepage
          </Link>
          <Link href="/services" className={secondaryBtn}>
            Our services
          </Link>
          <Link href="/contact" className={secondaryBtn}>
            Contact us
          </Link>
        </div>
        <p className="mt-10 text-[13.5px] text-body">
          Or if it’s urgent — call{" "}
          <a href={site.phoneHref} className="font-medium text-ink transition hover:text-brand">
            {site.phone}
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
