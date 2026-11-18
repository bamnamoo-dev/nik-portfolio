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
    <div className="reveal">
      <dl className={`grid grid-cols-2 ${items.length > 2 ? "lg:grid-cols-4" : ""} gap-y-10 gap-x-6 border-t border-line pt-10`}>
        {items.map((s, i) => (
          // 숫자를 위에 보이도록 화면에서만 순서를 뒤집습니다 (dl 규칙상 dt가 먼저).
          <div key={s.label} className="flex flex-col-reverse text-center">
            <dt className="text-sm text-body mt-2 flex items-center justify-center gap-1.5">
              {i >= STATIC_STATS.length && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] anim-pulse" aria-hidden="true"></span>
              )}
              {s.label}
            </dt>
            <dd className="text-4xl md:text-5xl font-semibold tracking-tight tabular-nums">
              {s.value}
              <span className="text-xl md:text-2xl font-medium text-body ml-0.5">{s.unit}</span>
            </dd>
          </div>
        ))}
      </dl>
      {liveItems.length > 0 && (
        <p className="text-xs text-body/80 mt-8 text-center">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#30d158] mr-1.5 align-middle" aria-hidden="true"></span>
          실시간 지표 · AI-SEN 집계 기준, 10분 간격 갱신
        </p>
      )}
    </div>
  );
}
