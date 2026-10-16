import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e2e2_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-5">
            <span className="text-cyan-800 font-bold text-xs md:text-sm">교육행정직 · AI 업무 도구 개발·공유</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#002147] tracking-tight leading-tight mb-5">
            교육행정 실무자가<br />
            AI로 직접 만들고 나누는<br />
            <span className="bg-cyan-100 px-2">업무 도구</span>
          </h1>
          <p className="text-base md:text-lg text-[#44474e] leading-relaxed mb-8">
            교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유하고 있습니다.
            관련 도움이나 소통이 필요하시면 편하게 연락 주세요. 강의도 가능합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-5">
            <a
              href={SITE.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#002147] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              AI-SEN 포털 둘러보기
            </a>
            <a
              href="#contact"
              className="text-center bg-white border-2 border-[#002147] text-[#002147] font-bold py-3.5 px-6 rounded-2xl hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              연락하기
            </a>
          </div>

          <div className="flex gap-6 text-sm font-bold text-[#44474e] justify-center md:justify-start">
            <Link href="/card" className="underline underline-offset-4 hover:text-cyan-700">디지털 명함</Link>
            <Link href="/profile" className="underline underline-offset-4 hover:text-cyan-700">1페이지 프로필</Link>
          </div>
        </div>

        <div className="order-1 md:order-2 relative mx-auto w-56 sm:w-72 md:w-full max-w-md group">
          <div className="absolute inset-0 bg-cyan-400 blur-[50px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>
          <div className="relative aspect-square rounded-[32px] overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/images/nik-desk.webp"
              alt="노트북과 태블릿을 들고 있는 Nik 마스코트"
              fill
              sizes="(min-width: 768px) 448px, 288px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
