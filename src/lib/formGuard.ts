// 문의 폼 스팸 방지. 서버리스 특성상 속도 제한은 인스턴스별 '최선 노력' 방식이므로
// 허니팟·작성 시간 검사와 함께 쓰는 보조 장치입니다.

const WINDOW_MS = 10 * 60 * 1000; // 10분
const MAX_PER_WINDOW = 5;
const MAX_TRACKED_KEYS = 2000;
const MIN_FILL_MS = 3000; // 페이지를 연 뒤 3초 안에 제출되면 봇으로 간주
const MAX_FILL_MS = 24 * 60 * 60 * 1000;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now: number = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > MAX_TRACKED_KEYS) {
    for (const [k, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

export function looksLikeBot(
  input: { honeypot: string; startedAt: string },
  now: number = Date.now(),
): boolean {
  if (input.honeypot.trim() !== "") return true; // 사람에게는 보이지 않는 칸이 채워짐
  const started = Number(input.startedAt);
  if (!Number.isFinite(started) || started <= 0) return true;
  const elapsed = now - started;
  return elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS;
}

export function clientKey(forwardedFor: string | null, realIp: string | null): string {
  const first = (forwardedFor ?? "").split(",")[0]?.trim();
  return first || realIp || "unknown";
}
