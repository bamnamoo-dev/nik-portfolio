import Image from "next/image";
import { FEATURED_SOLUTIONS, OTHER_TOOLS, type Solution } from "@/data/solutions";
import { SITE } from "@/data/site";
import { Chevron, ChevronLink, SectionHeading } from "./ui";

// 애플 제품 타일처럼: 가운데 정렬 제목 + 설명 + 파란 링크, 아래에 큰 화면 캡처
function Tile({ s, large = false }: { s: Solution; large?: boolean }) {
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal group flex flex-col rounded-3xl bg-paper overflow-hidden text-center ${large ? "md:col-span-2" : ""}`}
    >
      <div className={`px-6 ${large ? "pt-12 md:pt-16" : "pt-10 md:pt-12"}`}>
        <h3 className={`font-semibold tracking-tight ${large ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{s.name}</h3>
        <p className={`text-body mt-3 mx-auto max-w-xl ${large ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>{s.summary}</p>
        <span className="inline-flex items-center gap-1.5 mt-4 text-accent-strong text-[17px] group-hover:underline underline-offset-4">
          열어 보기 <Chevron />
          <span className="sr-only">(새 창)</span>
        </span>
      </div>
      <div
        className={`relative mt-10 mx-auto w-[88%] rounded-t-xl overflow-hidden ring-1 ring-black/[0.06] shadow-[0_20px_50px_-20px_rgb(0_0_0/0.25)] ${
          large ? "aspect-[935/460] max-w-4xl" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          sizes={large ? "(min-width: 1024px) 900px, 90vw" : "(min-width: 768px) 440px, 90vw"}
          className="tile-img object-cover object-top"
        />
      </div>
    </a>
  );
}

export default function Solutions() {
  const [main, ...rest] = FEATURED_SOLUTIONS;

  return (
    <section id="solutions" className="bg-white py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow="AI-SEN 운영" title="대표 솔루션." sub="동료 실무자들이 실제로 쓰는 도구입니다." center />

        <div className="grid md:grid-cols-2 gap-4">
          <Tile s={main} large />
          {rest.map((s) => (
            <Tile key={s.id} s={s} />
          ))}
        </div>

        {/* 그 밖의 도구 */}
        <div className="reveal mt-4 rounded-3xl bg-paper px-6 py-12 md:px-14 md:py-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">그 밖의 업무 도구</h3>
            <ChevronLink href={SITE.portalUrl} external className="mt-3 text-[17px]">
              전체 16종 보기
            </ChevronLink>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-4xl mx-auto">
            {OTHER_TOOLS.map((t) => (
              <li key={t.name} className="border-t border-line pt-4">
                <span className="block font-semibold">{t.name}</span>
                <span className="block text-sm text-body mt-1">{t.summary}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-body text-center mt-8">{SITE.disclaimerAi}</p>
      </div>
    </section>
  );
}
