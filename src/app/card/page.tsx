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

const btn =
  "flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-bold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

export default function CardPage() {
  const name = SITE.displayName || "Nik";
  return (
    <main className="min-h-screen bg-[#f1f3f5] flex justify-center px-4 py-6">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-black/5 p-6 flex flex-col gap-5">
        <header className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-black/5 shrink-0">
            <Image src="/bear_nik.png" alt="Nik 마스코트" fill sizes="64px" className="object-cover" priority />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#000a1e] leading-tight">{name}</h1>
            <p className="text-sm text-[#44474e] leading-snug">{SITE.tagline}</p>
          </div>
        </header>

        <p className="text-sm text-[#44474e] leading-relaxed">
          교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유합니다. 도움이나 소통이 필요하시면 연락 주세요.
        </p>

        <ul className="space-y-2">
          {FEATURED_SOLUTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#f9f9f9] hover:bg-cyan-50 text-sm font-bold text-[#000a1e] focus-visible:outline-2 focus-visible:outline-cyan-600"
              >
                <span className="material-symbols-outlined text-cyan-700" aria-hidden="true">{s.icon}</span>
                {s.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-2">
          {SITE.phone && (
            <a href={`tel:${SITE.phone}`} className={`${btn} bg-[#002147] text-white`}>
              <span className="material-symbols-outlined" aria-hidden="true">call</span>전화
            </a>
          )}
          <a href={`mailto:${SITE.email}`} className={`${btn} bg-[#002147] text-white`}>
            <span className="material-symbols-outlined" aria-hidden="true">mail</span>이메일
          </a>
          <VCardButton className={`${btn} border-2 border-[#002147] text-[#002147] ${SITE.phone ? "col-span-2" : ""}`} />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
          <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="py-2.5 rounded-xl bg-cyan-50 text-cyan-900">포털</a>
          <a href={SITE.chatbotUrl} target="_blank" rel="noopener noreferrer" className="py-2.5 rounded-xl bg-cyan-50 text-cyan-900">챗봇</a>
          <Link href="/#contact" className="py-2.5 rounded-xl bg-cyan-50 text-cyan-900">문의</Link>
        </div>

        <div className="flex flex-col items-center gap-1 pt-2 border-t border-black/5">
          <QrCode value={`${SITE.url}/card`} size={120} label="디지털 명함 QR" downloadable fileName="nik-card-qr.svg" />
          <Link href="/card/print" className="text-xs text-[#44474e] underline underline-offset-2 mt-1">인쇄용 명함 시안</Link>
        </div>

        <p className="text-[11px] text-[#44474e] leading-relaxed">{SITE.disclaimerSite}</p>
      </div>
    </main>
  );
}
