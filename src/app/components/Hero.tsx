import Image from "next/image";
import Link from "next/link";
import { SITE, TRUST_CHIPS } from "@/data/site";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white pt-28 md:pt-36 pb-16 md:pb-20">
      {/* 배경: 격자 + 번지는 빛 */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true"></div>
      <div className="anim-glow absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[120px]" aria-hidden="true"></div>
      <div className="anim-glow absolute top-40 -right-40 w-[480px] h-[480px] rounded-full bg-sky-600/20 blur-[120px] [animation-delay:-7s]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center">
        <div className="hero-in text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-semibold text-slate-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent anim-pulse" aria-hidden="true"></span>
            교육행정직 · AI 업무 도구 개발·공유
          </div>

          <h1 className="text-[1.8rem] leading-[1.2] min-[400px]:text-[2rem] sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight mb-6">
            교육행정 실무자가<br />
            AI로 직접 만들고 나누는<br />
            <span className="bg-gradient-to-r from-accent via-sky-300 to-white bg-clip-text text-transparent">업무 도구</span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            교육행정직으로 일하며 AI 관련 행정업무 도구를 사용하고, 개발하고, 공유하고 있습니다.
            관련 도움이나 소통이 필요하시면 편하게 연락 주세요. 강의도 가능합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
            <a
              href={SITE.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-accent text-ink font-bold py-4 px-7 shadow-[0_10px_40px_-10px_rgb(34_211_238/0.7)] hover:bg-white transition-colors"
            >
              AI-SEN 포털 둘러보기
              <span className="material-symbols-outlined !text-[20px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">arrow_outward</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 font-bold py-4 px-7 hover:bg-white/10 transition-colors"
            >
              연락하기
              <span className="material-symbols-outlined !text-[20px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-slate-400">
            {TRUST_CHIPS.map((c) => (
              <li key={c} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined !text-[16px] text-accent" aria-hidden="true">verified</span>
                {c}
              </li>
            ))}
          </ul>

          <div className="flex gap-6 text-sm font-semibold text-slate-300 justify-center lg:justify-start mt-6">
            <Link href="/card" className="underline underline-offset-4 decoration-white/30 hover:text-white">디지털 명함</Link>
            <Link href="/profile" className="underline underline-offset-4 decoration-white/30 hover:text-white">1페이지 프로필</Link>
          </div>
        </div>

        <div className="relative mx-auto w-64 sm:w-80 lg:w-full max-w-[420px]">
          <div className="anim-float relative">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-accent/40 to-sky-600/10 blur-2xl" aria-hidden="true"></div>
            <div className="relative aspect-square rounded-[36px] overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <Image
                src="/images/brand-profile.png"
                alt="안경을 쓰고 목걸이 명찰을 한 곰 캐릭터, 닉아저씨"
                fill
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 mt-16 md:mt-20">
        <Stats />
      </div>
    </section>
  );
}
