import { STATIC_STATS } from "@/data/site";
import { getLiveStats } from "@/lib/liveStats";

const fmt = (n: number) => n.toLocaleString("ko-KR");

export default async function Stats() {
  const live = await getLiveStats();
  const liveItems = [
    live?.chatbotTotal != null && { value: fmt(live.chatbotTotal), unit: "건", label: "행정챗봇 누적 질의응답" },
    live?.travelTotal != null && { value: fmt(live.travelTotal), unit: "건", label: "출장여비 누적 계산" },
  ].filter(Boolean) as { value: string; unit: string; label: string }[];

  const items = [...STATIC_STATS, ...liveItems];

  return (
    <div>
      <dl className={`grid grid-cols-2 ${items.length > 2 ? "lg:grid-cols-4" : ""} gap-px rounded-3xl overflow-hidden border border-white/10 bg-white/10`}>
        {items.map((s, i) => (
          <div key={s.label} className="bg-ink/90 backdrop-blur px-5 py-6 md:px-7 md:py-7">
            <dt className="text-xs md:text-sm text-slate-400 mb-2 flex items-center gap-1.5">
              {i >= STATIC_STATS.length && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 text-emerald-300 px-2 py-0.5 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-pulse" aria-hidden="true"></span>
                  실시간
                </span>
              )}
              {s.label}
            </dt>
            <dd className="text-3xl md:text-4xl font-extrabold tracking-tight tabular-nums">
              {s.value}
              <span className="text-lg md:text-xl font-bold text-slate-400 ml-0.5">{s.unit}</span>
            </dd>
          </div>
        ))}
      </dl>
      {liveItems.length > 0 && (
        <p className="text-[11px] text-slate-500 mt-3 text-right">실시간 지표: AI-SEN 집계 기준, 10분 간격 갱신</p>
      )}
    </div>
  );
}
