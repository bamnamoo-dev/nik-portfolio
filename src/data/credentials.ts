// 이력·자격 데이터. 이 파일만 수정하면 메인 페이지와 /profile에 함께 반영됩니다.
// 확인되지 않은 자격·수상·직함은 추가하지 마세요. 인증서 원본 이미지는 사용하지 않습니다.
export type CredentialStatus = "취득" | "진행 중" | "예정";

export interface Credential {
  status: CredentialStatus;
  title: string;
  issuer?: string;
  date?: string; // 화면에 표시되는 날짜 문구
  verifyUrl?: string; // 공식 인증 확인 링크 (직접 제공한 경우에만)
  show?: boolean; // false면 화면에서 숨김
}

export const CREDENTIALS: Credential[] = [
  {
    status: "취득",
    title: "Gemini 공인 교육 전문가 (Gemini Certified Educator)",
    issuer: "Google for Education",
    // TODO: 발급일/만료일 확정 후 date에 입력하세요. 비어 있으면 날짜는 표시되지 않습니다.
    date: "",
    // TODO: 공식 인증 확인 링크가 있으면 verifyUrl에 입력하세요.
    verifyUrl: "",
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
