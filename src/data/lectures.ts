import { SITE } from "./site";

export interface Lecture {
  id: "intro" | "mid" | "advanced";
  level: string;
  duration: string;
  title: string;
  audience: string; // TODO: 대상 문구는 직접 확인·수정하세요.
  tools: { name: string; url: string }[];
  badge?: string; // 있으면 카드에 약하게 표시
  weak?: boolean;
}

export const LECTURES: Lecture[] = [
  {
    id: "intro",
    level: "입문",
    duration: "1~2시간",
    title: "엑셀 함수 몰라도 끝내는 교육행정 데이터 취합·분할 및 단순 반복 업무 자동화",
    audience: "엑셀 취합·분할 업무가 잦은 담당자",
    tools: [
      { name: "엑셀수합", url: `${SITE.portalUrl}/tools/excel-merge` },
      { name: "엑셀분리", url: `${SITE.portalUrl}/tools/sheet-splitter` },
    ],
  },
  {
    id: "mid",
    level: "중급",
    duration: "3시간",
    title: "코딩 몰라도 바이브 코딩으로 우리 학교만의 업무 계산기 직접 만들어 보기",
    audience: "직접 도구를 만들어 보고 싶은 담당자",
    tools: [{ name: "시설대관 계산기 사례", url: `${SITE.portalUrl}/tools/gym-calc` }],
  },
  {
    id: "advanced",
    level: "심화",
    duration: "3~6시간",
    title: "학교 행정실 칼퇴를 부르는 AI 실무 활용법 (규정 검색부터 공문·보고서 작성까지)",
    audience: "AI를 처음 써 보는 교육행정 실무자",
    tools: [{ name: "AI-SEN 행정챗봇", url: SITE.chatbotUrl }],
    badge: "준비 중 · 협의 후 진행",
    weak: true,
  },
];
