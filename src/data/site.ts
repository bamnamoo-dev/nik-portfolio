// 사이트 공통 정보. 연락처·링크는 여기서만 수정합니다.
export const SITE = {
  url: "https://ssanta.net",
  email: "u2i@naver.com",
  // TODO: 표시 이름(명함·프로필에 노출)을 직접 입력하세요. 비어 있으면 "Nik"만 표시됩니다.
  displayName: "",
  // TODO: 전화번호 노출 여부와 번호를 직접 입력하세요. 비어 있으면 전화 버튼을 숨깁니다.
  phone: "",
  // TODO: 인쇄 명함 앞면의 소속/직함. 기본은 학교명 제외. 실명·학교명 노출 여부는 직접 정하세요.
  affiliation: "서울특별시교육청 교육행정직",
  tagline: "교육행정 AI 업무혁신 / AI-SEN 운영",
  portalUrl:"https://aisen.store",
  chatbotUrl: "https://chatbot.aisen.store",
  youtubeUrl: "https://www.youtube.com/channel/UCkSLN2FO_OPPnaTAylapGTg",
  blogUrl: "https://blog.naver.com/u2i",
  disclaimerSite:
    "본 사이트와 도구는 개인이 개발·운영하는 비공식 프로젝트이며 서울특별시교육청 등 기관의 공식 사이트가 아닙니다.",
  disclaimerAi:
    "AI 답변과 계산 결과는 업무 참고용이며, 공식 지침과 법령 원문을 반드시 확인하세요.",
} as const;

// 신뢰 바: aisen.store에 이미 게시된 값만 사용합니다.
export const TRUST_ITEMS = [
  { label: "다년간의 교육행정 실무" },
  { label: "직접 운영 중인 업무 도구 16종" },
  { label: "공식 지침서 102권 기반 챗봇" },
  { label: "폐쇄망 PC 단독 실행(exe) 지원" },
] as const;
