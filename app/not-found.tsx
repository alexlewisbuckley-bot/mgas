import Link from "next/link";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Chrome />
      <main className="mx-auto max-w-[1440px] px-6 py-24 text-center lg:px-12">
        <p className="font-display text-[110px] font-semibold leading-none tracking-[-0.03em] text-ice-chip">404</p>
        <h1 className="mt-6 font-display text-[32px] font-semibold tracking-[-0.02em] text-ink">
          This page has sprung a leak.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15.5px] text-body">
          The page you’re after has moved, or never existed. These will get you back on track:
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="flex h-12 items-center rounded-xl bg-brand px-7 text-sm font-bold text-white transition hover:brightness-110">
            Homepage
          </Link>
          <Link href="/services" className="flex h-12 items-center rounded-xl border border-[#dce5ef] px-7 text-sm font-bold text-ink transition hover:border-brand hover:text-brand">
            Our services
          </Link>
          <Link href="/contact" className="flex h-12 items-center rounded-xl border border-[#dce5ef] px-7 text-sm font-bold text-ink transition hover:border-brand hover:text-brand">
            Contact us
          </Link>
        </div>
        <p className="mt-8 text-[13.5px] text-body">
          Or if it’s urgent — call <a href={site.phoneHref} className="font-bold text-brand">{site.phone}</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}
