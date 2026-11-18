"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  pages: { href: string; label: string }[];
}

// 768px 미만에서만 보이는 메뉴. 링크를 누르거나 Esc를 누르면 닫힙니다.
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

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="grid place-items-center w-11 h-11 text-ink"
      >
        <span className="material-symbols-outlined !text-[22px]" aria-hidden="true">{open ? "close" : "menu"}</span>
      </button>

      {open && (
        <div id={panelId} className="absolute top-full inset-x-0 h-[calc(100dvh-3rem)] bg-white">
          <nav aria-label="모바일 메뉴" className="px-8 pt-6">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-semibold tracking-tight text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 pt-6 border-t border-black/10">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} onClick={() => setOpen(false)} className="block py-2.5 text-base text-body">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
