"use client";

import { useMemo } from "react";
import qrcode from "qrcode-generator";

interface QrCodeProps {
  value: string;
  size?: number; // CSS px (화면 표시용)
  label?: string;
  downloadable?: boolean;
  fileName?: string;
}

function buildSvg(value: string) {
  const qr = qrcode(0, "M");
  qr.addData(value);
  qr.make();
  // cellSize 8, margin 4칸(권장 quiet zone)
  return qr.createSvgTag({ cellSize: 8, margin: 32, scalable: true });
}

export default function QrCode({
  value,
  size = 192,
  label = "QR 코드",
  downloadable = false,
  fileName = "qr.svg",
}: QrCodeProps) {
  const svg = useMemo(() => buildSvg(value), [value]);

  function download() {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <div
        role="img"
        aria-label={`${label}: ${value}`}
        className="bg-white [&>svg]:w-full [&>svg]:h-full"
        style={{ width: size, height: size }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {downloadable && (
        <button
          type="button"
          onClick={download}
          className="text-sm font-bold text-cyan-800 underline underline-offset-2 print:hidden focus-visible:outline-2 focus-visible:outline-cyan-600"
        >
          QR 코드 SVG 다운로드
        </button>
      )}
    </div>
  );
}
