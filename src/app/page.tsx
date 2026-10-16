import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import TrustBar from "./components/TrustBar";
import Lectures from "./components/Lectures";
import Solutions from "./components/Solutions";
import Timeline from "./components/Timeline";
import Creative from "./components/Creative";
import { SITE } from "@/data/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] selection:bg-cyan-200">
      {/* Navigation */}
      <nav aria-label="주요 메뉴" className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-cyan-600 text-3xl" aria-hidden="true">science</span>
            <span className="text-2xl font-black tracking-tighter text-[#000a1e]">Nik</span>
          </a>
          <div className="hidden md:flex gap-8 font-bold text-sm text-[#44474e]">
            <a href="#about" className="hover:text-cyan-700 transition-colors">하는 일</a>
            <a href="#solutions" className="hover:text-cyan-700 transition-colors">솔루션</a>
            <a href="#credentials" className="hover:text-cyan-700 transition-colors">이력</a>
            <a href="#lectures" className="hover:text-cyan-700 transition-colors">강의</a>
            <a href="#creative" className="hover:text-cyan-700 transition-colors">기록</a>
            <Link href="/card" className="hover:text-cyan-700 transition-colors">명함</Link>
          </div>
          <a href="#contact" className="bg-[#000a1e] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all">
            문의
          </a>
        </div>
      </nav>

      <main className="pt-16 overflow-x-hidden">
        <Hero />
        <TrustBar />
        <WhatIDo />
        <Solutions />
        <Timeline />
        <Lectures />
        <Creative />

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start text-left">
              <div>
                <span className="text-cyan-700 font-bold text-sm">문의</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#000a1e] mt-3 mb-6">도움이나 소통이 필요하시면 편하게 연락 주세요</h2>
                <p className="text-lg text-[#44474e] mb-10 leading-relaxed">
                  도구 사용 중 불편한 점, 건의, 협업 제안, 강의·연수 요청 모두 환영합니다. 남겨 주시면 확인 후 답변드리겠습니다.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-cyan-700">
                    <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                  </div>
                  <a href={`mailto:${SITE.email}`} className="font-bold text-[#000a1e] hover:underline">{SITE.email}</a>
                </div>
                <div className="hidden lg:block relative mt-10 w-56 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                  <Image src="/images/nik-portrait.webp" alt="Nik 마스코트" fill sizes="224px" className="object-cover" />
                </div>
              </div>

              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-[#000a1e] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tighter mb-3">Nik</h2>
            <p className="text-slate-300 max-w-md mx-auto">교육행정 AI 업무혁신, 현직 실무자가 직접 만들고 운영합니다.</p>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-5">
            <div className="flex gap-6 flex-wrap justify-center">
              <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">YouTube</a>
              <a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Blog</a>
              <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">AI-SEN</a>
              <Link href="/card" className="text-slate-300 hover:text-white transition-colors">디지털 명함</Link>
              <Link href="/profile" className="text-slate-300 hover:text-white transition-colors">프로필</Link>
            </div>
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">{SITE.disclaimerSite}</p>
            <p className="text-slate-400 text-sm">© 2026 Nik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
