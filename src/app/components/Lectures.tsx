import { LECTURES } from "@/data/lectures";

export default function Lectures() {
  return (
    <section id="lectures" className="bg-paper py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="reveal">
          <p className="text-sm font-bold text-accent-strong mb-3">강의·연수</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">강의도 가능합니다</h2>
          <p className="text-body leading-relaxed">
            도구 사용법과 활용 방법을 나누는 강의·연수 요청이 있으면 협의해서 진행할 수 있습니다.
          </p>
        </div>

        <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
          {LECTURES.map((lec) => (
            <li key={lec.id} className={`reveal group py-6 flex flex-col sm:flex-row sm:items-center gap-4 ${lec.weak ? "opacity-75" : ""}`}>
              <div className="flex items-center gap-2 sm:w-32 shrink-0">
                <span className="rounded-full bg-navy text-white px-3 py-1 text-xs font-bold">{lec.level}</span>
                <span className="text-sm font-semibold text-body">{lec.duration}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold leading-snug">{lec.title}</p>
                <p className="text-sm text-body mt-1">
                  {lec.badge && <span className="font-bold">{lec.badge} · </span>}
                  실습 도구:{" "}
                  {lec.tools.map((t, i) => (
                    <span key={t.name}>
                      {i > 0 && ", "}
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-accent-strong underline underline-offset-2">
                        {t.name}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
              <a
                href={`/?type=lecture&topic=${encodeURIComponent(`${lec.level} - ${lec.title}`)}#contact`}
                className="inline-flex items-center gap-1 shrink-0 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold hover:border-accent-strong hover:text-accent-strong transition-colors"
              >
                문의하기
                <span className="material-symbols-outlined !text-[16px]" aria-hidden="true">arrow_forward</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
