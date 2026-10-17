import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ssanta.net"),
  title: "Nik | 교육행정 AI 업무혁신 · AI-SEN 운영",
  description:
    "교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유합니다. 도움이나 소통이 필요하시면 연락 주세요.",
  openGraph: {
    title: "Nik | 교육행정 AI 업무혁신 · AI-SEN 운영",
    description:
      "교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유합니다.",
    url: "https://ssanta.net",
    siteName: "Nik",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

// 사이트에서 쓰는 아이콘만 받아옵니다 (알파벳순 필수). 새 아이콘을 쓰면 여기에 추가하세요.
const ICONS = [
  "apps", "arrow_forward", "arrow_outward", "build", "calculate", "call", "close", "edit_note", "explore",
  "mail", "menu", "person_add", "play_arrow", "sensors", "share", "smart_toy", "verified", "work",
].join(",");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className="h-full antialiased">
      <head>
        {/* App Router의 루트 layout이라 모든 페이지에 적용됩니다. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${ICONS}&display=block`}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
