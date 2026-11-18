import type { ReactNode } from "react";

// 공통 부품: 섹션 제목, 꺾쇠 링크. 디자인을 바꿀 때 여기부터 손보면 전체에 반영됩니다.

// 사이트에서 쓰는 아이콘 (선 굵기 1.8의 단순한 SVG). 외부 아이콘 폰트를 받지 않습니다.
const ICON_PATHS = {
  menu: "M4 8h16M4 16h16",
  close: "M6 6l12 12M18 6L6 18",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  call: "M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2z",
  personAdd: "M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6",
} as const;

export function Icon({ name, className = "w-5 h-5" }: { name: keyof typeof ICON_PATHS; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d={ICON_PATHS[name]} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 14" aria-hidden="true" className={`inline-block w-[0.42em] h-[0.75em] ${className}`}>
      <path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// "더 알아보기 ›" 형태의 파란 글자 링크
export function ChevronLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/link inline-flex items-center gap-1.5 text-accent-strong hover:underline underline-offset-4 ${className}`}
    >
      {children}
      <Chevron className="transition-transform group-hover/link:translate-x-0.5" />
      {external && <span className="sr-only">(새 창)</span>}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`reveal mb-12 md:mb-16 ${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      {eyebrow && <p className="text-base md:text-lg font-semibold text-body mb-2">{eyebrow}</p>}
      <h2 className="text-[2.25rem] leading-[1.15] md:text-6xl font-semibold tracking-tight">{title}</h2>
      {sub && <p className="text-lg md:text-xl text-body leading-relaxed mt-4">{sub}</p>}
    </div>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-accent text-white font-medium px-6 py-3 text-[15px] hover:bg-[#0077ed] transition-colors";
