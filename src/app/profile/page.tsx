import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "../components/PrintButton";
import StatusBadge from "../components/StatusBadge";
import { SITE } from "@/data/site";
import { LECTURES } from "@/data/lectures";
import { FEATURED_SOLUTIONS } from "@/data/solutions";
import { VISIBLE_CREDENTIALS } from "@/data/credentials";

export const metadata: Metadata = {
  title: "프로필 | Nik · 교육행정 AI 업무혁신",
  description: "교육행정 AI 업무혁신 강의 주제, 대표 솔루션, 이력, 연락처 1페이지 프로필.",
};

const printCss = `
@page { size: A4; margin: 12mm; }
@media print {
  html, body { background: #fff !important; }
  .no-print { display: none !important; }
  .sheet { box-shadow: none !important; margin: 0 !important; width: auto !important; min-height: 0 !important; padding: 0 !important; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
`;

const h2 = "text-[12.5pt] font-extrabold tracking-tight text-[#0a1628] border-b-2 border-[#22d3ee] pb-1 mb-3";

export default function ProfilePage() {
  const name = SITE.displayName || "Nik";
  return (
    <main className="min-h-screen bg-[#e5e7eb] py-6 px-4">
      <style>{printCss}</style>

      <div className="no-print max-w-[210mm] mx-auto mb-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold text-[#44474e] underline underline-offset-2">← 메인으로</Link>
        <PrintButton className="bg-[#002147] text-white font-bold py-2.5 px-5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600" />
      </div>

      <article className="sheet bg-white mx-auto shadow-lg w-full max-w-[210mm] min-h-[297mm] p-[12mm] text-[#1a1c1c] text-[10.5pt] leading-relaxed">
        <header className="flex items-center gap-5 mb-7">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-black/10 shrink-0">
            <Image src="/images/nik-desk.webp" alt="Nik 마스코트" fill sizes="80px" className="object-cover" />
          </div>
          <div>
            <p className="text-[9.5pt] font-semibold text-[#44474e] mb-1">{SITE.affiliation} · {SITE.role}</p>
            <h1 className="text-[24pt] font-extrabold tracking-tight text-[#0a1628] leading-none">{name}</h1>
            <p className="text-[11.5pt] font-bold text-[#0e7490] mt-1">{SITE.tagline}</p>
            <p className="mt-1">교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유하고 있습니다. 관련 도움이나 소통이 필요하시면 연락 주세요. 강의도 가능합니다.</p>
          </div>
        </header>

        <section className="mb-6">
          <h2 className={h2}>대표 솔루션</h2>
          <ul className="space-y-2.5">
            {FEATURED_SOLUTIONS.map((s) => (
              <li key={s.id}>
                <p>
                  <span className="font-bold">{s.name}</span> — {s.summary}
                </p>
                <p className="text-[#44474e] break-all">{s.url.replace(/^https:\/\//, "")}</p>
              </li>
            ))}
            <li>
              <p>
                <span className="font-bold">AI-SEN 포털</span> — 직접 운영 중인 업무 도구 16종
              </p>
              <p className="text-[#44474e]">{SITE.portalUrl.replace(/^https:\/\//, "")}</p>
            </li>
          </ul>
          <p className="mt-2 text-[#44474e]">{SITE.disclaimerAi}</p>
        </section>

        <section className="mb-6">
          <h2 className={h2}>이력·자격</h2>
          <ul className="space-y-2.5">
            {VISIBLE_CREDENTIALS.map((c) => (
              <li key={c.title} className="flex items-start gap-2">
                <StatusBadge status={c.status} />
                <span>
                  <span className="font-bold">{c.title}</span>
                  {c.issuer && <span className="text-[#44474e]"> · {c.issuer}</span>}
                  {c.date && <span className="text-[#44474e]"> · {c.date}</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className={h2}>강의 가능 주제</h2>
          <ul className="space-y-3">
            {LECTURES.map((l) => (
              <li key={l.id} className={l.weak ? "opacity-80" : ""}>
                <p className="font-bold">
                  [{l.level} · {l.duration}] {l.title}
                  {l.badge && <span className="font-normal text-[#44474e]"> ({l.badge})</span>}
                </p>
                <p className="text-[#44474e]">
                  대상: {l.audience} · 실습 도구: {l.tools.map((t) => t.name).join(", ")}
                </p>
              </li>
            ))}
          </ul>
                  </section>

        <section className="mb-6">
          <h2 className={h2}>연락처</h2>
          <p>이메일: {SITE.email}</p>
          {SITE.phone && <p>전화: {SITE.phone}</p>}
          <p>웹: {SITE.url.replace(/^https:\/\//, "")} · 디지털 명함: {SITE.url.replace(/^https:\/\//, "")}/card</p>
        </section>

        <footer className="mt-6 pt-2 border-t border-black/10 text-[9pt] text-[#44474e]">{SITE.disclaimerSite}</footer>
      </article>
    </main>
  );
}
