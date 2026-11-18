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
  themeColor: "#ffffff",
};

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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
