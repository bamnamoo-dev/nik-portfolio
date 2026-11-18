import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QrCode from "../components/QrCode";
import VCardButton from "../components/VCardButton";
import { Chevron } from "../components/ui";
import { SITE } from "@/data/site";
import { FEATURED_SOLUTIONS } from "@/data/solutions";

export const metadata: Metadata = {
  title: "디지털 명함 | Nik · 교육행정 AI 업무혁신",
  description: "교육행정 AI 업무혁신 · AI-SEN 운영. 연락처 저장과 포털 바로가기.",
};

const btn = "flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-medium text-[15px] transition-colors";

export default function CardPage() {
  const name = SITE.displayName || "Nik";
  return (
    <main className="min-h-screen bg-paper flex justify-center px-4 py-8">
      <div className="w-full max-w-sm rounded-3xl bg-white flex flex-col">
        <header className="text-center px-6 pt-10 pb-6">
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden bg-paper">
            <Image src="/images/brand-profile.png" alt="닉아저씨 마스코트" fill sizes="80px" className="object-cover" priority />
          </div>
          <p className="text-sm text-body mt-5">{SITE.affiliation} · {SITE.role}</p>
          <h1 className="text-4xl font-semibold tracking-tight mt-1">{name}</h1>
          <p className="text-[15px] font-medium mt-1">{SITE.tagline}</p>
          <p className="text-sm text-body leading-relaxed mt-4">
            교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유합니다. 도움이나 소통이 필요하시면 연락 주세요.
          </p>
        </header>

        <div className="px-6 pb-8 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-2">
            {SITE.phone && (
              <a href={`tel:${SITE.phone}`} className={`${btn} bg-paper text-ink hover:bg-[#e8e8ed]`}>
                <span className="material-symbols-outlined !text-[20px]" aria-hidden="true">call</span>전화
              </a>
            )}
            <a href={`mailto:${SITE.email}`} className={`${btn} bg-paper text-ink hover:bg-[#e8e8ed]`}>
              <span className="material-symbols-outlined !text-[20px]" aria-hidden="true">mail</span>이메일
            </a>
            <VCardButton className={`${btn} bg-accent text-white hover:bg-[#0077ed] ${SITE.phone ? "col-span-2" : ""}`} />
          </div>

          <ul className="rounded-2xl bg-paper divide-y divide-line/70">
            {FEATURED_SOLUTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3.5 text-[15px]"
                >
                  <span>{s.name}</span>
                  <Chevron className="text-body shrink-0" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 text-sm">
            <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="text-accent-strong hover:underline">포털</a>
            <a href={SITE.chatbotUrl} target="_blank" rel="noopener noreferrer" className="text-accent-strong hover:underline">챗봇</a>
            <Link href="/#contact" className="text-accent-strong hover:underline">문의</Link>
          </div>

          <div className="flex flex-col items-center gap-1 pt-6 border-t border-line/70">
            <QrCode value={`${SITE.url}/card`} size={120} label="디지털 명함 QR" downloadable fileName="nik-card-qr.svg" />
            <Link href="/card/print" className="text-xs text-body hover:underline mt-1">인쇄용 명함 시안</Link>
          </div>

          <p className="text-[11px] text-body leading-relaxed text-center">{SITE.disclaimerSite}</p>
        </div>
      </div>
    </main>
  );
}
