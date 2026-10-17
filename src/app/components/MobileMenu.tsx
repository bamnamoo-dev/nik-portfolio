"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  pages: { href: string; label: string }[];
}

// 768px 미만에서만 보이는 햄버거 메뉴. 링크를 누르거나 Esc를 누르면 닫힙니다.
export default function MobileMenu({ links, pages }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const itemCls = "flex items-center justify-between min-h-12 px-3 rounded-xl text-base font-semibold text-slate-100 hover:bg-white/10 active:bg-white/10";

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="grid place-items-center w-11 h-11 rounded-full text-white hover:bg-white/10"
      >
        <span className="material-symbols-outlined" aria-hidden="true">{open ? "close" : "menu"}</span>
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute top-full inset-x-0 border-t border-white/10 bg-ink shadow-2xl"
        >
          <nav aria-label="모바일 메뉴" className="max-w-6xl mx-auto px-4 py-3">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className={itemCls}>
                    {l.label}
                    <span className="material-symbols-outlined !text-[18px] text-slate-500" aria-hidden="true">arrow_forward</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 pt-2 border-t border-white/10 grid grid-cols-2 gap-2">
              {pages.map((p) => (
                <Link key={p.href} href={p.href} onClick={() => setOpen(false)} className="grid place-items-center min-h-12 rounded-xl border border-white/15 text-sm font-semibold text-slate-100 hover:bg-white/10">
                  {p.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
