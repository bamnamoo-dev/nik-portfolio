// 이력·자격 데이터. 이 파일만 수정하면 메인 페이지와 /profile에 함께 반영됩니다.
// 확인되지 않은 자격·수상·직함은 추가하지 마세요. 인증서 원본 이미지는 사용하지 않습니다.
export type CredentialStatus = "취득" | "진행 중" | "예정";

export interface Credential {
  status: CredentialStatus;
  title: string;
  issuer?: string;
  date?: string; // 화면에 표시되는 날짜 문구
  verifyUrl?: string; // 공식 인증 확인 링크 (직접 제공한 경우에만)
  badgeImage?: string; // 공식 임베드 배지 이미지 주소 (이름이 없는 배지만 사용)
  show?: boolean; // false면 화면에서 숨김
}

export const CREDENTIALS: Credential[] = [
  {
    status: "취득",
    title: "Gemini 공인 교육 전문가 (Gemini Certified Educator)",
    issuer: "Google for Education",
    // 인증서 기준: 발급 2026-04-10, 만료 2029-04-10
    date: "2026.04.10 취득 · 2029.04.10까지 유효",
    // 인증 페이지는 실명이 보이므로 링크하지 않습니다. 걸려면 verifyUrl에 주소를 넣으세요.
    verifyUrl: "",
    // Google for Education 공식 임베드 배지 (Accredible)
    badgeImage: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/196230179",
  },
  {
    status: "예정",
    title: "행정안전부 AI 챔피언 블루 인증",
    date: "2026.10.28 시험",
  },
  {
    status: "진행 중",
    title: "서울동부교육지원청·노조 통합 AI 혁신가 과정 (30시간)",
    date: "~2026.12.11",
  },
  {
    // TODO: 노출 여부는 직접 정하세요. 기본은 숨김입니다.
    status: "취득",
    title: "과거 C/C++·Windows API·웹 개발 경험, 현재는 AI 바이브 코딩으로 업무 도구 제작",
    show: false,
  },
];

export const VISIBLE_CREDENTIALS = CREDENTIALS.filter((c) => c.show !== false);
