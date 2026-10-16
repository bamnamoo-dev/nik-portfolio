import Image from "next/image";
import { FEATURED_SOLUTIONS, OTHER_TOOLS } from "@/data/solutions";
import { SITE } from "@/data/site";

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#f1f3f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-700 font-bold text-sm">AI-SEN 운영</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#000a1e] mt-3 mb-3">대표 솔루션</h2>
          <p className="text-[#44474e] text-lg">동료 실무자들이 실제로 쓰는 도구입니다.</p>
          <p className="text-sm text-[#44474e] mt-3">{SITE.disclaimerAi}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_SOLUTIONS.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden hover:border-cyan-500 hover:shadow-xl transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-black/5">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-cyan-700 text-2xl" aria-hidden="true">{s.icon}</span>
                  <h3 className="text-lg font-bold text-[#000a1e] leading-snug">{s.name}</h3>
                </div>
                <p className="text-[#44474e] leading-relaxed mb-5">{s.summary}</p>
                <span className="mt-auto text-sm font-bold text-cyan-800 group-hover:underline">바로 가기 →</span>
              </div>
            </a>
          ))}
        </div>

        <details className="mt-10 max-w-4xl mx-auto bg-white rounded-2xl border border-black/5 p-6">
          <summary className="cursor-pointer font-bold text-[#000a1e] focus-visible:outline-2 focus-visible:outline-cyan-600">
            그 밖의 업무 도구 보기
          </summary>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-5 text-sm">
            {OTHER_TOOLS.map((t) => (
              <li key={t.name}>
                <span className="font-bold text-[#000a1e]">{t.name}</span>
                <span className="text-[#44474e]"> · {t.summary}</span>
              </li>
            ))}
          </ul>
          <a
            href={SITE.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-bold text-cyan-800 hover:underline"
          >
            전체 도구 보기 (aisen.store) →
          </a>
        </details>
      </div>
    </section>
  );
}
