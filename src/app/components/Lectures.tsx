import { LECTURES } from "@/data/lectures";

export default function Lectures() {
  return (
    <section id="lectures" className="py-16 md:py-20 bg-[#f1f3f5]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#000a1e]">강의도 가능합니다</h2>
          <p className="text-[#44474e] mt-3">
            도구 사용법과 활용 방법을 나누는 강의·연수 요청이 있으면 협의해서 진행할 수 있습니다.
          </p>
        </div>

        <ul className="space-y-3">
          {LECTURES.map((lec) => (
            <li
              key={lec.id}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 ${
                lec.weak ? "opacity-80" : ""
              }`}
            >
              <div className="flex items-center gap-2 sm:w-40 shrink-0">
                <span className="px-3 py-1 rounded-full bg-[#002147] text-white text-xs font-bold">{lec.level}</span>
                <span className="text-sm font-bold text-[#44474e]">{lec.duration}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[#000a1e] leading-snug">{lec.title}</p>
                <p className="text-sm text-[#44474e] mt-1">
                  {lec.badge && <span className="font-bold">{lec.badge} · </span>}
                  실습 도구:{" "}
                  {lec.tools.map((t, i) => (
                    <span key={t.name}>
                      {i > 0 && ", "}
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-cyan-800 underline underline-offset-2">
                        {t.name}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
              <a
                href={`/?type=lecture&topic=${encodeURIComponent(`${lec.level} - ${lec.title}`)}#contact`}
                className="text-sm font-bold text-cyan-800 underline underline-offset-2 shrink-0 focus-visible:outline-2 focus-visible:outline-cyan-600"
              >
                문의하기
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
