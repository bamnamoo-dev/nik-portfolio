// 문의 유형. 폼(select)과 서버 검증이 같은 목록을 씁니다.
export const INQUIRY_TYPES = ["강의·특강 요청", "도구 사용·건의", "협업 제안", "기타"] as const;
export type InquiryType = (typeof INQUIRY_TYPES)[number];
