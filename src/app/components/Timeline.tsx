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
                <Image
                  src={c.badgeImage}
                  alt="Gemini Certified Educator 배지"
                  width={140}
                  height={140}
                  unoptimized
                  className="shrink-0 w-24 h-24 md:w-[140px] md:h-[140px] -my-4 md:-my-6"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
