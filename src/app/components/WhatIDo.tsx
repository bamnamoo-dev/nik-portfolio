import Image from "next/image";

const ITEMS = [
  {
    icon: "work",
    title: "사용합니다",
    desc: "규정 검색, 여비 산출, 엑셀 취합 같은 행정 업무를 AI와 도구로 직접 처리하며 불편한 지점을 찾습니다.",
  },
  {
    icon: "build",
    title: "만듭니다",
    desc: "예전에 프로그래밍을 했던 경험에 AI 바이브 코딩을 더해, 현장에서 필요한 도구를 직접 만듭니다.",
  },
  {
    icon: "share",
    title: "나눕니다",
    desc: "AI-SEN 포털로 동료들에게 공개하고, 건의와 오류 제보를 받아 계속 고쳐 갑니다.",
  },
];

export default function WhatIDo() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-cyan-700 font-bold text-sm">하고 있는 일</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#000a1e] mt-3">쓰고, 만들고, 나눕니다</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {ITEMS.map((it) => (
            <div key={it.title} className="p-7 rounded-3xl bg-[#f9f9f9] border border-black/5">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-cyan-700 text-2xl" aria-hidden="true">{it.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#000a1e] mb-2">{it.title}</h3>
              <p className="text-[#44474e] leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        <figure className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-white">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 border-b border-black/5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span className="ml-3 text-xs text-slate-500">aisen.store</span>
            </div>
            <Image
              src="/images/shot-portal.webp"
              alt="AI-SEN 포털의 도구 목록 화면"
              width={1280}
              height={530}
              sizes="(min-width: 896px) 896px, 100vw"
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-center text-sm text-[#44474e] mt-3">AI-SEN 포털 — 직접 운영 중인 업무 도구 모음</figcaption>
        </figure>
      </div>
    </section>
  );
}
