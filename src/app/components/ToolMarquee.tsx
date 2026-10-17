import { ALL_TOOL_NAMES } from "@/data/solutions";

function Row({ dup = false }: { dup?: boolean }) {
  return (
    <ul className={`flex shrink-0 gap-3 pr-3 ${dup ? "marquee-dup" : ""}`} aria-hidden={dup || undefined}>
      {ALL_TOOL_NAMES.map((name) => (
        <li
          key={name}
          className="whitespace-nowrap rounded-full border border-black/[0.07] bg-white px-5 py-2.5 text-sm font-semibold text-[#16181d] shadow-sm"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

// AI-SEN 포털에서 운영 중인 16종 도구 이름이 가로로 흐르는 띠
export default function ToolMarquee() {
  return (
    <section aria-label="AI-SEN 포털에서 운영 중인 도구" className="bg-paper py-10 border-b border-black/5">
      <p className="text-center text-sm font-semibold text-body mb-5">
        AI-SEN 포털에서 운영 중인 도구 <span className="text-accent-strong">16종</span>
      </p>
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track anim-marquee flex w-max">
          <Row />
          <Row dup />
        </div>
      </div>
    </section>
  );
}
