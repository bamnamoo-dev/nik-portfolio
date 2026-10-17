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

// 스크롤하면 높이가 줄고 배경이 짙어집니다 (CSS 스크롤 연동, 미지원 브라우저는 기본 반투명).
export default function Nav() {
  return (
    <nav
      aria-label="주요 메뉴"
      className="nav-scroll fixed top-0 inset-x-0 z-50 py-4 bg-ink/90 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-white">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-sky-500 text-ink font-black text-sm">N</span>
          <span className="text-xl font-extrabold tracking-tight">Nik</span>
        </a>
        <div className="hidden md:flex gap-4 text-sm font-semibold text-slate-300">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="px-2 py-3 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/card" className="px-2 py-3 hover:text-white transition-colors">명함</Link>
        </div>
        <div className="flex items-center gap-1.5">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1 rounded-full bg-white text-ink px-5 py-2.5 text-sm font-bold hover:bg-accent transition-colors"
          >
            연락하기
            <span className="material-symbols-outlined !text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
          </a>
          <MobileMenu links={LINKS} pages={PAGES} />
        </div>
      </div>
    </nav>
  );
}
