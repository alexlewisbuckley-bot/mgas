// Drawn 2px round-cap stroke icon set — matches the Figma icon language.
import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function IconFlame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 4 6 7.5 6 11.2a6 6 0 0 1-12 0C6 10.5 9 7 12 3Z" />
      <path d="M9.5 14.5c0 1.5 1 2.5 2.5 2.7" />
    </svg>
  );
}
export function IconWrench(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a2 2 0 1 0 2.8 2.8l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.5-.7-.7-2.5 3.3-2Z" />
    </svg>
  );
}
export function IconBuilding(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M6 21V8.2L12 4.8V21" />
      <path d="M12 21V10.2l6 2.4V21" />
      <path d="M8.6 11.6h.8M8.6 14.6h.8M14.6 15.2h.8" />
    </svg>
  );
}
export function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c2 1.6 4.4 2.5 7 2.9V12c0 4-2.8 7-7 9-4.2-2-7-5-7-9V5.9C7.6 5.5 10 4.6 12 3Z" />
      <path d="m9 11.5 2 2 4-4.5" />
    </svg>
  );
}
export function IconDroplet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 4 6 7.5 6 11.2a6 6 0 0 1-12 0C6 10.5 9 7 12 3Z" />
    </svg>
  );
}
export function IconLeak(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
      <path d="M10.5 7.5c1.1 1.4 2 2.6 2 3.9a2 2 0 1 1-4 0c0-1.3.9-2.5 2-3.9Z" strokeWidth={1.6} />
    </svg>
  );
}
export function IconAir(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10a3 3 0 1 0-3-3" />
      <path d="M3 13h15a3 3 0 1 1-3 6" />
      <path d="M3 18h7a3 3 0 0 1 3 3" />
    </svg>
  );
}
export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h3.6l1.8 4.8L8 9.6a12.5 12.5 0 0 0 6 6l1.8-2.4L21 15v3.6A2.4 2.4 0 0 1 18.6 21C10 20.4 3.6 14 3 5.4A2.4 2.4 0 0 1 5 3Z" />
    </svg>
  );
}
export function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 0 0-7.6 13.8L3.5 20.5l3.8-.9A9 9 0 1 0 12 3Z" />
      <path d="M8.5 9c.6 2.8 2.8 5 5.7 5.7l1.3-1.6 2 1.1" strokeWidth={1.8} />
    </svg>
  );
}
export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2.5" />
    </svg>
  );
}
export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="9.5" r="2.6" />
    </svg>
  );
}
export function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}
export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16m-5-5 5 5-5 5" />
    </svg>
  );
}
export function IconChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}
export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}
export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
export function IconTick(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
export function TpStar({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[3px] bg-tp"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="#fff" style={{ width: size * 0.7, height: size * 0.7 }}>
        <path d="M12 2.5 14.7 9h6.8l-5.4 4.2 2 6.8-6.1-4-6.1 4 2-6.8L2.5 9h6.8L12 2.5Z" />
      </svg>
    </span>
  );
}
export function Stars({ n = 5, size = 16, gap = 4 }: { n?: number; size?: number; gap?: number }) {
  return (
    <span className="inline-flex" style={{ gap }} role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <TpStar key={i} size={size} />
      ))}
    </span>
  );
}

export const serviceIcons = {
  flame: IconFlame,
  wrench: IconWrench,
  building: IconBuilding,
  shield: IconShield,
  droplet: IconDroplet,
  leak: IconLeak,
  air: IconAir,
} as const;
