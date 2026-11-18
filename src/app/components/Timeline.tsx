import Image from "next/image";
import { VISIBLE_CREDENTIALS } from "@/data/credentials";
import StatusBadge from "./StatusBadge";
import { ChevronLink, SectionHeading } from "./ui";

export default function Timeline() {
  return (
    <section id="credentials" className="bg-paper py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="학습과 인증" title="이력·자격." />

        <ol className="reveal rounded-3xl bg-white px-6 md:px-10">
          {VISIBLE_CREDENTIALS.map((c) => (
            <li
              key={c.title}
              className="flex items-center gap-5 md:gap-8 py-7 md:py-8 border-b border-line/70 last:border-b-0"
            >
              <div className="flex-1 min-w-0">
                <StatusBadge status={c.status} />
                <h3 className="text-lg md:text-xl font-semibold tracking-tight leading-snug mt-1.5">{c.title}</h3>
                <p className="text-sm text-body mt-1">
                  {[c.issuer, c.date].filter(Boolean).join(" · ")}
                </p>
                {c.verifyUrl && (
                  <ChevronLink href={c.verifyUrl} external className="text-sm mt-2">
                    공식 인증 확인
                  </ChevronLink>
                )}
              </div>
              {c.badgeImage && (
                // 원본은 바깥 여백이 넓어서, 확대 후 가장자리를 잘라 배지 그림만 크게 보이게 합니다.
                <div className="shrink-0 w-28 h-28 md:w-40 md:h-40 -my-4 md:-my-6 overflow-hidden">
                  <Image
                    src={c.badgeImage}
                    alt="Gemini Certified Educator 배지"
                    width={400}
                    height={400}
                    sizes="(min-width: 768px) 232px, 162px"
                    className="w-full h-full scale-[1.45]"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
