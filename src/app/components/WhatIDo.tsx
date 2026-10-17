"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Step = {
  key: string;
  icon: string;
  kicker: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    key: "use",
    icon: "work",
    kicker: "01 · 사용",
    title: "업무에 직접 씁니다",
    desc: "규정 검색, 여비 산출, 엑셀 취합 같은 행정 업무를 AI와 도구로 직접 처리하며 불편한 지점을 찾습니다.",
  },
  {
    key: "build",
    icon: "build",
    kicker: "02 · 개발",
    title: "AI와 함께 만듭니다",
    desc: "예전에 프로그래밍을 했던 경험에 AI 바이브 코딩을 더해, 현장에서 필요한 도구를 직접 만듭니다.",
  },
  {
    key: "share",
    icon: "share",
    kicker: "03 · 공유",
    title: "동료와 나눕니다",
    desc: "AI-SEN 포털로 동료들에게 공개하고, 건의와 오류 제보를 받아 계속 고쳐 갑니다.",
  },
];

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgb(0_33_71/0.45)]">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 border-b border-black/5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
        <span className="ml-3 flex-1 rounded-md bg-white px-3 py-0.5 text-xs text-slate-500">{url}</span>
      </div>
      {children}
    </div>
  );
}

// '개발' 단계 그림: AI에게 요청하고 도구가 만들어지는 과정을 표현한 일러스트
function BuildIllustration() {
  return (
    <div className="rounded-2xl overflow-hidden bg-ink text-[11px] sm:text-[13px] font-mono shadow-[0_30px_80px_-30px_rgb(0_33_71/0.6)] ring-1 ring-white/10">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span className="ml-3 text-xs text-slate-400 font-sans">AI와 함께 만들기</span>
      </div>
      <div className="p-5 md:p-6 space-y-4 lg:aspect-[935/600] lg:overflow-hidden">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent/15 text-cyan-100 px-4 py-3 font-sans text-sm leading-relaxed">
          학교별로 받은 엑셀 파일을 서식 그대로 한 장으로 합쳐 주는 도구를 만들어 줘
        </div>
        <pre className="text-slate-300 leading-relaxed whitespace-pre-wrap">
<span className="text-sky-400">function</span> <span className="text-amber-300">mergeSheets</span>(files) {"{"}
{"\n"}  <span className="text-slate-500">{"// 공통 헤더를 찾아 학교별 행을 이어 붙임"}</span>
{"\n"}  <span className="text-sky-400">const</span> header = <span className="text-amber-300">detectHeader</span>(files[0]);
{"\n"}  <span className="text-sky-400">return</span> files.<span className="text-amber-300">flatMap</span>(f =&gt; <span className="text-amber-300">rows</span>(f, header));
{"\n"}{"}"}
        </pre>
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 text-emerald-300 px-3 py-1.5 font-sans text-xs font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
          직접 써 보고, 고치고, 다시 만들기
        </div>
      </div>
    </div>
  );
}

function Visual({ stepKey }: { stepKey: string }) {
  if (stepKey === "use")
    return (
      <BrowserFrame url="chatbot.aisen.store">
        <div className="relative aspect-[935/600]"><Image src="/images/shot-chatbot.webp" alt="AI-SEN 행정챗봇 화면" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" /></div>
      </BrowserFrame>
    );
  if (stepKey === "build") return <BuildIllustration />;
  return (
    <BrowserFrame url="aisen.store">
      <div className="relative aspect-[935/600] bg-[#f4f6fb]"><Image src="/images/shot-portal.webp" alt="AI-SEN 포털의 도구 목록 화면" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-top" /></div>
    </BrowserFrame>
  );
}

// 데스크톱: 왼쪽 설명을 스크롤하면 오른쪽 화면이 바뀜 / 모바일: 단계마다 그림을 바로 아래에 표시
export default function WhatIDo() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal max-w-2xl mb-14 md:mb-6">
          <p className="text-sm font-bold text-accent-strong mb-3">하고 있는 일</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">쓰고, 만들고, 나눕니다</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            {STEPS.map((s, i) => (
              <div
                key={s.key}
                data-index={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="lg:min-h-[48vh] flex flex-col justify-center py-8 lg:py-0"
              >
                <div className={`transition-opacity duration-500 ${active === i ? "lg:opacity-100" : "lg:opacity-35"}`}>
                  <p className="flex items-center gap-2 text-sm font-bold text-accent-strong mb-3">
                    <span className="material-symbols-outlined !text-[20px]" aria-hidden="true">{s.icon}</span>
                    {s.kicker}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">{s.title}</h3>
                  <p className="text-lg text-body leading-relaxed max-w-md">{s.desc}</p>
                </div>
                <div className="lg:hidden mt-8">
                  <Visual stepKey={s.key} />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-190px)]">
              <div className="relative">
                {STEPS.map((s, i) => (
                  <div
                    key={s.key}
                    aria-hidden={active !== i}
                    className={`transition-all duration-700 ease-out ${i === 0 ? "relative" : "absolute inset-x-0 top-0"} ${
                      active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                  >
                    <Visual stepKey={s.key} />
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-6" aria-hidden="true">
                {STEPS.map((s, i) => (
                  <span key={s.key} className={`h-1 rounded-full transition-all duration-500 ${active === i ? "w-10 bg-accent-strong" : "w-4 bg-slate-200"}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
