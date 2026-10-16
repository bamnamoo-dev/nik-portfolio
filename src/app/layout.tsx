import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&family=Space+Grotesk:wght@500;700&family=Work+Sans:wght@400;500;600;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
