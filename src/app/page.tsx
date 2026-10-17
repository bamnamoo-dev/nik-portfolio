import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ToolMarquee from "./components/ToolMarquee";
import WhatIDo from "./components/WhatIDo";
import Solutions from "./components/Solutions";
import Timeline from "./components/Timeline";
import Lectures from "./components/Lectures";
import Creative from "./components/Creative";
import { SITE } from "@/data/site";

// 실시간 지표를 10분마다 다시 받아옵니다.
export const revalidate = 600;

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Nav />

      <main className="overflow-x-clip">
        <Hero />
        <ToolMarquee />
        <WhatIDo />
        <Solutions />
        <Timeline />
        <Lectures />
        <Creative />

        <section id="contact" className="relative overflow-hidden bg-ink text-white py-24 md:py-32">
          <div className="absolute inset-0 grid-bg" aria-hidden="true"></div>
          <div className="anim-glow absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-accent/15 blur-[120px]" aria-hidden="true"></div>

          <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="reveal">
              <p className="text-sm font-bold text-accent mb-3">연락하기</p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                도움이나 소통이 필요하시면 편하게 연락 주세요
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                도구 사용 중 불편한 점, 건의, 협업 제안, 강의·연수 요청 모두 환영합니다. 남겨 주시면 확인 후 답변드리겠습니다.
              </p>
              {/* TODO: 응답 시간 안내 문구가 정해지면 여기에 한 줄 추가하세요. (예: "보통 ○일 안에 답변드립니다") */}
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/15 text-accent">
                  <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                </span>
                <span className="font-bold">{SITE.email}</span>
                <span className="material-symbols-outlined !text-[18px] text-slate-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
              </a>
              <div className="hidden lg:block relative mt-12 w-44 aspect-square rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl anim-float">
                <Image src="/images/nik-portrait.webp" alt="Nik 마스코트" fill sizes="176px" className="object-cover" />
              </div>
            </div>

            <div className="reveal text-[#16181d]">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#060e1b] text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <p className="flex items-center gap-2.5 mb-3">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-sky-500 text-ink font-black text-sm" aria-hidden="true">N</span>
              <span className="text-xl font-extrabold tracking-tight">Nik</span>
            </p>
            <p className="text-slate-300">교육행정 AI 업무혁신, 현직 실무자가 직접 만들고 운영합니다.</p>
          </div>
          <nav aria-label="바로가기" className="flex gap-x-6 gap-y-2 flex-wrap text-sm text-slate-300">
            <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
            <a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a>
            <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">AI-SEN</a>
            <Link href="/card" className="hover:text-white">디지털 명함</Link>
            <Link href="/profile" className="hover:text-white">프로필</Link>
          </nav>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-slate-400">
            <p>{SITE.disclaimerSite}</p>
            <p>© 2026 Nik</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
