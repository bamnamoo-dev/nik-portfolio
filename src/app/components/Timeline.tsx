import { VISIBLE_CREDENTIALS } from "@/data/credentials";
import StatusBadge from "./StatusBadge";

export default function Timeline() {
  return (
    <section id="credentials" className="py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-700 font-bold text-sm">학습과 인증</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#000a1e] mt-3">이력·자격</h2>
        </div>

        <div className="bg-[#f9f9f9] rounded-3xl border border-black/5 p-7 md:p-10">
        <ol className="relative border-l-2 border-cyan-200 ml-3 space-y-8">
          {VISIBLE_CREDENTIALS.map((c) => (
            <li key={c.title} className="pl-6 relative">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-cyan-600" aria-hidden="true"></span>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <StatusBadge status={c.status} />
                {c.date && <span className="text-sm text-[#44474e]">{c.date}</span>}
              </div>
              <h3 className="text-lg font-bold text-[#000a1e] leading-snug">{c.title}</h3>
              {c.issuer && <p className="text-sm text-[#44474e]">{c.issuer}</p>}
              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cyan-800 underline underline-offset-2"
                >
                  공식 인증 확인
                </a>
              )}
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
