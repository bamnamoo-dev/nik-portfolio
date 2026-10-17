import { SITE } from "./site";

export interface Solution {
  id: string;
  name: string;
  summary: string;
  url: string;
  icon: string; // Material Symbols 이름
  image: string; // public/images 안의 화면 캡처
  imageAlt: string;
}

// 대표 솔루션 3개. 문구는 aisen.store에 게시된 설명 기준입니다.
export const FEATURED_SOLUTIONS: Solution[] = [
  {
    id: "chatbot",
    name: "AI-SEN 행정챗봇 & 출장여비",
    summary: "지침서·법령 근거로 답하는 3-Tier 챗봇과 관내·관외·해외 출장여비 산출",
    url: SITE.chatbotUrl,
    icon: "smart_toy",
    image: "/images/shot-chatbot.webp",
    imageAlt: "AI-SEN 행정챗봇 화면",
  },
  {
    id: "contract",
    name: "서울교육 계약나침반",
    summary: "2026 지침 기준 계약방법 판단과 구비서류 안내",
    url: `${SITE.portalUrl}/tools/contract`,
    icon: "explore",
    image: "/images/shot-contract.webp",
    imageAlt: "서울교육 계약나침반 화면",
  },
  {
    id: "cost-audit",
    name: "공사원가 스마트 검수",
    summary: "조달청 고시 제비율 기준 역산 검증 및 검수 보고서 출력",
    url: `${SITE.portalUrl}/tools/cost-audit`,
    icon: "calculate",
    image: "/images/shot-cost-audit.webp",
    imageAlt: "공사원가 스마트 검수 화면",
  },
];

// AI-SEN 포털에 게시된 16종 도구 이름 (aisen.store 홈 목록 기준). 흐르는 띠에 사용합니다.
export const ALL_TOOL_NAMES = [
  "행정챗봇", "행정서고", "출장여비", "에듀파인 따라하기",
  "계약", "공사원가", "학교회계", "예산정산",
  "엑셀수합", "엑셀분리", "급여식대", "학생진급",
  "기안문", "지출바인더", "교실배치도", "시설대관",
] as const;

// 전체 도구 카드 영역. aisen.store 홈 목록 기준.
export const OTHER_TOOLS: { name: string; summary: string }[] = [
  { name: "행정서고", summary: "공식 지침서 102권 열람" },
  { name: "학교회계", summary: "세부사업·추경 집행 대시보드 (베타)" },
  { name: "예산정산", summary: "세입세출 정산과 잔액 분석" },
  { name: "엑셀수합", summary: "학교 엑셀을 한 장으로 수합" },
  { name: "엑셀분리", summary: "시트를 개별 파일로 분리" },
  { name: "급여식대", summary: "임금대장 식대 공제 추출" },
  { name: "학생진급", summary: "나이스 → K-에듀파인 진급 매칭" },
  { name: "기안문", summary: "기안문 237종, 서식 71종" },
  { name: "지출바인더", summary: "증빙서 측면 라벨 인쇄" },
  { name: "교실배치도", summary: "층별 평면도·교실 배치도" },
  { name: "시설대관", summary: "조례 기준 대관료·냉난방비 산출" },
  { name: "에듀파인 따라하기", summary: "화면 실습 가이드" },
];
