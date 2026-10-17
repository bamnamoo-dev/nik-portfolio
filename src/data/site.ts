// 사이트 공통 정보. 연락처·링크는 여기서만 수정합니다.
export const SITE = {
  url: "https://ssanta.net",
  email: "u2i@naver.com",
  // 실명은 노출하지 않습니다. 화면에는 "Nik"로 표시됩니다.
  displayName: "",
  // TODO: 전화번호 노출 여부와 번호를 직접 입력하세요. 비어 있으면 전화 버튼을 숨깁니다.
  phone: "",
  // 소속은 기관명까지만 표기합니다 (학교명 제외).
  affiliation: "서울특별시교육청",
  role: "교육행정직",
  tagline: "교육행정 AI 업무혁신 / AI-SEN 운영",
  portalUrl: "https://aisen.store",
  chatbotUrl: "https://chatbot.aisen.store",
  youtubeUrl: "https://www.youtube.com/@nikuncle",
  blogUrl: "https://bamnamoo.com/",
  disclaimerSite:
    "본 사이트와 도구는 개인이 개발·운영하는 비공식 프로젝트이며 서울특별시교육청 등 기관의 공식 사이트가 아닙니다.",
  disclaimerAi:
    "AI 답변과 계산 결과는 업무 참고용이며, 공식 지침과 법령 원문을 반드시 확인하세요.",
} as const;

// 고정 지표: aisen.store에 이미 게시된 값만 사용합니다.
export const STATIC_STATS = [
  { value: "16", unit: "종", label: "직접 운영 중인 업무 도구" },
  { value: "102", unit: "권", label: "공식 지침서 기반 챗봇" },
] as const;

export const TRUST_CHIPS = ["다년간의 교육행정 실무", "폐쇄망 PC 단독 실행(exe) 지원", "파일은 내 PC 브라우저에서만 처리"] as const;
