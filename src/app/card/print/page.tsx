"use client";

import QrCode from "../../components/QrCode";
import { SITE } from "@/data/site";
import { FEATURED_SOLUTIONS } from "@/data/solutions";

// 명함 90x50mm, 도련(bleed) 3mm 포함 재단 전 크기 96x56mm
const printCss = `
@page { size: 96mm 56mm; margin: 0; }
.biz { width: 96mm; height: 56mm; position: relative; overflow: hidden; background: #fff; }
.biz .safe { position: absolute; inset: 6mm; } /* 도련 3mm + 안전 여백 3mm */
.biz .trim { position: absolute; inset: 3mm; border: 0.2mm dashed #94a3b8; pointer-events: none; }
.biz-sheet { break-after: page; }
@media print {
  body { background: #fff !important; }
  .no-print { display: none !important; }
  .biz .trim { display: none; }
  .biz-sheet { margin: 0 !important; box-shadow: none !important; }
}
`;

export default function PrintCardPage() {
  const name = SITE.displayName || "Nik";
  return (
    <main className="min-h-screen bg-[#e5e7eb] py-8 px-4 flex flex-col items-center gap-8">
      <style>{printCss}</style>

      <div className="no-print max-w-xl text-sm text-[#1a1c1c] bg-white rounded-2xl p-5 leading-relaxed">
        <h1 className="text-lg font-black mb-2">인쇄용 명함 시안 (90×50mm)</h1>
        <ul className="list-disc pl-5 space-y-1">
          <li>점선은 재단선(90×50mm)입니다. 바깥 3mm는 도련(bleed)이며, 배경·색은 이 영역까지 채워서 인쇄소에 전달하세요.</li>
          <li>글자와 QR은 재단선 안쪽 3mm 이상 안전 여백에 두었습니다.</li>
          <li>인쇄 시 용지 크기 96×56mm, 여백 없음, 배율 100%로 설정하세요. 인쇄소 제출은 PDF로 저장하는 방식을 권장합니다.</li>
          <li>앞면 소속은 학교명을 제외했습니다. 실명·학교명 노출 여부는 직접 정한 뒤 site.ts에서 수정하세요.</li>
        </ul>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-4 bg-[#002147] text-white font-bold py-2.5 px-5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          인쇄 / PDF로 저장
        </button>
      </div>

      {/* 앞면 */}
      <section className="biz-sheet" aria-label="명함 앞면">
        <p className="no-print text-xs text-[#44474e] mb-1">앞면</p>
        <div className="biz shadow-lg" style={{ background: "#002147", color: "#fff" }}>
          <div className="trim" />
          <div className="safe flex flex-col justify-between">
            <p style={{ fontSize: "7pt", opacity: 0.85 }}>{SITE.affiliation}</p>
            <div>
              <p style={{ fontSize: "16pt", fontWeight: 900, lineHeight: 1.1 }}>{name}</p>
              <p style={{ fontSize: "8pt", marginTop: "1mm", color: "#67e8f9" }}>교육행정 AI 업무혁신</p>
            </div>
            <div style={{ fontSize: "7pt", lineHeight: 1.5 }}>
              <p>{SITE.email}</p>
              {SITE.phone && <p>{SITE.phone}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* 뒷면 */}
      <section className="biz-sheet" aria-label="명함 뒷면">
        <p className="no-print text-xs text-[#44474e] mb-1">뒷면</p>
        <div className="biz shadow-lg" style={{ color: "#000a1e" }}>
          <div className="trim" />
          <div className="safe flex gap-[3mm]">
            <div className="flex flex-col justify-between" style={{ flex: 1, minWidth: 0 }}>
              <div>
                <p style={{ fontSize: "8.5pt", fontWeight: 900 }}>교육행정 AI 업무혁신<br />AI-SEN 운영</p>
                <ul style={{ fontSize: "7pt", lineHeight: 1.6, marginTop: "2mm" }}>
                  {FEATURED_SOLUTIONS.map((s) => (
                    <li key={s.id}>· {s.name}</li>
                  ))}
                </ul>
              </div>
              <p style={{ fontSize: "7pt", lineHeight: 1.5, fontWeight: 700 }}>
                ssanta.net<br />aisen.store
              </p>
            </div>
            <div className="flex items-center">
              <QrCode value={`${SITE.url}/card`} size={136} label="디지털 명함 QR" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
