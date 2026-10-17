import Image from "next/image";
import { FEATURED_SOLUTIONS, OTHER_TOOLS } from "@/data/solutions";
import { SITE } from "@/data/site";

export default function Solutions() {
  const [main, ...rest] = FEATURED_SOLUTIONS;

  return (
    <section id="solutions" className="bg-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-bold text-accent-strong mb-3">AI-SEN 운영</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">대표 솔루션</h2>
            <p className="text-lg text-body mt-3">동료 실무자들이 실제로 쓰는 도구입니다.</p>
          </div>
          <p className="text-sm text-body md:max-w-xs md:text-right">{SITE.disclaimerAi}</p>
        </div>

        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
          {/* 큰 카드 */}
          <a
            href={main.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal lift group lg:col-span-2 lg:row-span-2 flex flex-col rounded-[28px] bg-ink text-white overflow-hidden ring-1 ring-black/5"
          >
            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/15 text-accent">
                  <span className="material-symbols-outlined" aria-hidden="true">{main.icon}</span>
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{main.name}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-lg">{main.summary}</p>
            </div>
            <div className="relative mt-auto mx-7 md:mx-9 rounded-t-2xl overflow-hidden ring-1 ring-white/10 aspect-[935/520]">
              <Image
                src={main.image}
                alt={main.imageAlt}
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <span className="sr-only">새 창에서 열기</span>
          </a>

          {rest.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal lift group flex flex-col rounded-[28px] bg-white border border-black/[0.06] overflow-hidden hover:border-accent-strong/40"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-accent-strong" aria-hidden="true">{s.icon}</span>
                    <h3 className="text-lg font-extrabold tracking-tight">{s.name}</h3>
                  </div>
                  <span className="material-symbols-outlined !text-[20px] text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-strong" aria-hidden="true">arrow_outward</span>
                </div>
                <p className="text-sm text-body leading-relaxed">{s.summary}</p>
              </div>
              <div className="relative mt-auto mx-6 rounded-t-xl overflow-hidden border border-b-0 border-black/[0.06] aspect-[16/7]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </a>
          ))}
        </div>

        {/* 전체 도구 */}
        <div className="reveal mt-5 rounded-[28px] bg-white border border-black/[0.06] p-7 md:p-9 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
          <div className="lg:w-64 shrink-0">
            <p className="flex items-center gap-2 font-extrabold text-lg">
              <span className="material-symbols-outlined text-accent-strong" aria-hidden="true">apps</span>
              그 밖의 업무 도구
            </p>
            <a
              href={SITE.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 mt-2 text-sm font-bold text-accent-strong"
            >
              전체 16종 보기 (aisen.store)
              <span className="material-symbols-outlined !text-[18px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_outward</span>
            </a>
          </div>
          <ul className="grid flex-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
            {OTHER_TOOLS.map((t) => (
              <li key={t.name} className="rounded-xl bg-paper px-4 py-3 text-sm leading-snug">
                <span className="block font-bold">{t.name}</span>
                <span className="block text-body mt-0.5">{t.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
