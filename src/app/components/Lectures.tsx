import { LECTURES } from "@/data/lectures";
import { ChevronLink, SectionHeading } from "./ui";

export default function Lectures() {
  return (
    <section id="lectures" className="bg-white py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="강의·연수"
          title="강의도 가능합니다."
          sub="도구 사용법과 활용 방법을 나누는 강의·연수는 협의해서 진행합니다."
        />

        <ul className="grid md:grid-cols-3 gap-4">
          {LECTURES.map((lec) => (
            <li key={lec.id} className={`reveal flex flex-col rounded-3xl bg-paper p-7 md:p-8 ${lec.weak ? "opacity-70" : ""}`}>
              <p className="text-sm font-semibold text-body">
                {lec.level} <span className="text-line mx-1">|</span> {lec.duration}
              </p>
              <h3 className="text-xl font-semibold tracking-tight leading-snug mt-3">{lec.title}</h3>
              {lec.badge && <p className="text-sm text-body mt-2">{lec.badge}</p>}
              <p className="text-sm text-body mt-4 mb-6">
                실습 도구{" "}
                {lec.tools.map((t, i) => (
                  <span key={t.name}>
                    {i > 0 && ", "}
                    <a href={t.url} target="_blank" rel="noopener noreferrer" className="text-accent-strong hover:underline underline-offset-2">
                      {t.name}
                    </a>
                  </span>
                ))}
              </p>
              <ChevronLink
                href={`/?type=lecture&topic=${encodeURIComponent(`${lec.level} - ${lec.title}`)}#contact`}
                className="mt-auto text-[15px]"
              >
                문의하기
              </ChevronLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
