import Image from "next/image";
import { SITE, TRUST_CHIPS } from "@/data/site";
import Stats from "./Stats";
import { ChevronLink, btnPrimary } from "./ui";

export default function Hero() {
  return (
    <section className="bg-white pt-32 md:pt-44 pb-20 md:pb-28">
      <div className="hero-in max-w-5xl mx-auto px-6 text-center">
        <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-6 bg-paper">
          <Image
            src="/images/brand-profile.png"
            alt="안경을 쓰고 목걸이 명찰을 한 곰 캐릭터, 닉아저씨"
            fill
            sizes="80px"
            className="object-cover"
            priority
          />
        </div>

        <p className="text-base md:text-xl font-semibold text-body mb-3">교육행정직 · AI-SEN 운영</p>

        <h1 className="text-[2.6rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight">
          교육행정, AI로 다시 만들다.
        </h1>

        <p className="text-lg md:text-2xl text-body leading-snug mt-5 md:mt-6 max-w-2xl mx-auto">
          현직 실무자가 직접 만들고 나누는 업무 도구.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 mt-9">
          <a href={SITE.portalUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
            AI-SEN 둘러보기
            <span className="sr-only">(새 창)</span>
          </a>
          <ChevronLink href="#contact" className="text-[17px]">연락하기</ChevronLink>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-10 text-sm text-body">
          {TRUST_CHIPS.map((c, i) => (
            <li key={c} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-line">·</span>}
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-20 md:mt-28">
        <Stats />
      </div>
    </section>
  );
}
