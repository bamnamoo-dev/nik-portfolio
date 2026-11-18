import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Solutions from "./components/Solutions";
import Timeline from "./components/Timeline";
import Lectures from "./components/Lectures";
import Creative from "./components/Creative";
import { SectionHeading } from "./components/ui";
import { SITE } from "@/data/site";

// 실시간 지표를 10분마다 다시 받아옵니다.
export const revalidate = 600;

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent/20">
      <Nav />

      <main className="overflow-x-clip">
        <Hero />
        <WhatIDo />
        <Solutions />
        <Timeline />
        <Lectures />
        <Creative />

        <section id="contact" className="bg-white py-24 md:py-36">
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeading
              eyebrow="연락하기"
              title="편하게 연락 주세요."
              sub="도구 사용 중 불편한 점, 건의, 협업 제안, 강의·연수 요청 모두 환영합니다."
              center
            />
            <p className="reveal -mt-6 md:-mt-10 mb-12 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1 text-sm text-body">
              <span>영업일 기준 1일 이내에 답변드립니다</span>
              <span aria-hidden="true" className="hidden sm:inline text-line">|</span>
              <a href={`mailto:${SITE.email}`} className="text-accent-strong hover:underline underline-offset-4">{SITE.email}</a>
            </p>

            <div className="reveal">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-paper text-xs text-body">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-5 border-b border-line">
            <p>
              <span className="text-ink font-semibold">Nik</span>
              <span className="mx-2 text-line" aria-hidden="true">|</span>
              교육행정 AI 업무혁신, 현직 실무자가 직접 만들고 운영합니다.
            </p>
            <nav aria-label="바로가기" className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">YouTube</a>
              <a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">Blog</a>
              <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">AI-SEN</a>
              <Link href="/card" className="hover:text-ink hover:underline">디지털 명함</Link>
              <Link href="/profile" className="hover:text-ink hover:underline">프로필</Link>
            </nav>
          </div>
          <div className="pt-5 flex flex-col md:flex-row md:justify-between gap-2">
            <p>{SITE.disclaimerSite}</p>
            <p>© 2026 Nik</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
