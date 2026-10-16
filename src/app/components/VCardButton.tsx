"use client";

import { SITE } from "@/data/site";

function esc(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

function buildVCard() {
  const name = SITE.displayName || "Nik";
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${esc(name)}`,
    `N:${esc(name)};;;;`,
    `TITLE:${esc("교육행정 AI 업무혁신")}`,
    `EMAIL;TYPE=INTERNET:${SITE.email}`,
    `URL:${SITE.url}/card`,
    `URL:${SITE.portalUrl}`,
  ];
  if (SITE.phone) lines.splice(5, 0, `TEL;TYPE=CELL:${SITE.phone}`);
  lines.push("END:VCARD");
  return lines.join("\r\n") + "\r\n";
}

export default function VCardButton({ className = "" }: { className?: string }) {
  function download() {
    const blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nik.vcf";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button type="button" onClick={download} className={className}>
      <span className="material-symbols-outlined" aria-hidden="true">person_add</span>
      연락처 저장
    </button>
  );
}
