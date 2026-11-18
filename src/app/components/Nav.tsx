import Link from "next/link";
import MobileMenu from "./MobileMenu";

const LINKS = [
  { href: "#about", label: "하는 일" },
  { href: "#solutions", label: "솔루션" },
  { href: "#credentials", label: "이력" },
  { href: "#lectures", label: "강의" },
  { href: "#creative", label: "기록" },
];

const PAGES = [
  { href: "/card", label: "디지털 명함" },
  { href: "/profile", label: "1페이지 프로필" },
];

// 흰색 반투명 블러 메뉴 바
export default function Nav() {
  return (
    <nav
      aria-label="주요 메뉴"
      className="fixed top-0 inset-x-0 z-50 h-12 bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.08]"
    >
      <div className="max-w-5xl h-full mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">Nik</a>
        <div className="hidden md:flex items-center gap-7 text-[13px] text-ink/80">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="py-3 hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/card" className="py-3 hover:text-ink transition-colors">명함</Link>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="#contact"
            className="rounded-full bg-accent text-white px-3.5 py-1 text-[13px] font-medium hover:bg-[#0077ed] transition-colors"
          >
            연락하기
          </a>
          <MobileMenu links={LINKS} pages={PAGES} />
        </div>
      </div>
    </nav>
  );
}
