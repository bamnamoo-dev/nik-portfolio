import Image from "next/image";
import { VISIBLE_CREDENTIALS } from "@/data/credentials";
import StatusBadge from "./StatusBadge";

export default function Timeline() {
  return (
    <section id="credentials" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <p className="text-sm font-bold text-accent-strong mb-3">학습과 인증</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">이력·자격</h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-5">
          {VISIBLE_CREDENTIALS.map((c, i) => (
            <li
              key={c.title}
              className="reveal lift relative flex flex-col rounded-[28px] border border-black/[0.06] bg-paper p-7"
            >
              <div className="flex items-center justify-between mb-6 h-16">
                <StatusBadge status={c.status} />
                {c.badgeImage ? (
                  <Image
                    src={c.badgeImage}
                    alt="Gemini Certified Educator"
                    width={80}
                    height={80}
                    unoptimized
                    className="-mt-3 -mr-2 rounded-2xl bg-white ring-1 ring-black/5 shadow-sm"
                  />
                ) : (
                  <span className="text-5xl font-extrabold text-black/[0.06] leading-none tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-extrabold tracking-tight leading-snug mb-2">{c.title}</h3>
              {c.issuer && <p className="text-sm text-body">{c.issuer}</p>}
              {c.date && <p className="text-sm text-body mt-auto pt-4">{c.date}</p>}
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-accent-strong underline underline-offset-2 mt-2"
                >
                  공식 인증 확인
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
