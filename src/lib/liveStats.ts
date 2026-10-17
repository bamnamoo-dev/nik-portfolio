// AI-SEN 공개 집계 API에서 실사용 수치를 서버에서 받아옵니다.
// 값은 코드에 넣지 않으며, 받아오지 못하면 null을 돌려주고 화면에서는 해당 지표를 숨깁니다.
// record=0: 조회만 하고 방문자 수를 올리지 않습니다.
const ENDPOINT = "https://chatbot.aisen.store/api/visitors?record=0";

export interface LiveStats {
  chatbotTotal: number | null; // 챗봇 누적 질의응답 수
  travelTotal: number | null; // 출장여비 누적 계산 수
  visitorsTotal: number | null; // 포털 누적 방문자 수
}

function num(v: unknown): number | null {
  return typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : null;
}

export async function getLiveStats(): Promise<LiveStats | null> {
  try {
    const res = await fetch(ENDPOINT, {
      headers: { Accept: "application/json" },
      next: { revalidate: 600 }, // 10분마다 갱신
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.success) return null;
    const stats: LiveStats = {
      chatbotTotal: num(data.tools?.chatbot?.total),
      travelTotal: num(data.tools?.travel?.total),
      visitorsTotal: num(data.total),
    };
    return stats.chatbotTotal === null && stats.travelTotal === null && stats.visitorsTotal === null ? null : stats;
  } catch {
    return null;
  }
}
