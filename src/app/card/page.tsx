import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QrCode from "../components/QrCode";
import VCardButton from "../components/VCardButton";
import { SITE } from "@/data/site";
import { FEATURED_SOLUTIONS } from "@/data/solutions";

export const metadata: Metadata = {
  title: "디지털 명함 | Nik · 교육행정 AI 업무혁신",
  description: "교육행정 AI 업무혁신 · AI-SEN 운영. 연락처 저장과 포털 바로가기.",
};

const btn = "flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-sm transition-colors";

export default function CardPage() {
  const name = SITE.displayName || "Nik";
  return (
    <main className="relative min-h-screen bg-ink flex justify-center px-4 py-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden="true"></div>
      <div className="anim-glow absolute -top-32 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-[100px]" aria-hidden="true"></div>

      <div className="relative w-full max-w-sm rounded-[28px] overflow-hidden bg-white shadow-2xl flex flex-col">
        <header className="relative bg-gradient-to-br from-ink-2 to-ink text-white p-6 pb-7">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-white/20 shrink-0">
              <Image src="/images/nik-desk.webp" alt="Nik 마스코트" fill sizes="64px" className="object-cover" priority />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400">{SITE.affiliation} · {SITE.role}</p>
              <h1 className="text-2xl font-extrabold tracking-tight leading-tight">{name}</h1>
              <p className="text-sm text-accent font-semibold">{SITE.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mt-5">
            교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유합니다. 도움이나 소통이 필요하시면 연락 주세요.
          </p>
        </header>

        <div className="p-6 flex flex-col gap-5">
          <ul className="space-y-2">
            {FEATURED_SOLUTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-paper hover:bg-cyan-50 text-sm font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-accent-strong" aria-hidden="true">{s.icon}</span>
                  <span className="flex-1">{s.name}</span>
                  <span className="material-symbols-outlined !text-[18px] text-slate-400 group-hover:text-accent-strong" aria-hidden="true">arrow_outward</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-2">
            {SITE.phone && (
              <a href={`tel:${SITE.phone}`} className={`${btn} bg-ink text-white hover:bg-navy`}>
                <span className="material-symbols-outlined" aria-hidden="true">call</span>전화
              </a>
            )}
            <a href={`mailto:${SITE.email}`} className={`${btn} bg-ink text-white hover:bg-navy`}>
              <span className="material-symbols-outlined" aria-hidden="true">mail</span>이메일
            </a>
            <VCardButton className={`${btn} bg-accent text-ink hover:bg-cyan-300 ${SITE.phone ? "col-span-2" : ""}`} />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="py-2.5 rounded-xl border border-black/10 hover:border-accent-strong">포털</a>
            <a href={SITE.chatbotUrl} target="_blank" rel="noopener noreferrer" className="py-2.5 rounded-xl border border-black/10 hover:border-accent-strong">챗봇</a>
            <Link href="/#contact" className="py-2.5 rounded-xl border border-black/10 hover:border-accent-strong">문의</Link>
          </div>

          <div className="flex flex-col items-center gap-1 pt-4 border-t border-black/5">
            <QrCode value={`${SITE.url}/card`} size={120} label="디지털 명함 QR" downloadable fileName="nik-card-qr.svg" />
            <Link href="/card/print" className="text-xs text-body underline underline-offset-2 mt-1">인쇄용 명함 시안</Link>
          </div>

          <p className="text-[11px] text-body leading-relaxed">{SITE.disclaimerSite}</p>
        </div>
      </div>
    </main>
  );
}
