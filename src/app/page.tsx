import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] selection:bg-cyan-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-cyan-500 text-3xl group-hover:rotate-12 transition-transform">science</span>
            <span className="text-2xl font-black tracking-tighter text-[#000a1e]">Nik</span>
          </a>
          <div className="hidden md:flex gap-8 items-center font-medium text-sm text-[#44474e]">
            <a href="#expertise" className="hover:text-[#000a1e] transition-colors">Expertise</a>
            <a href="#wealth" className="hover:text-[#000a1e] transition-colors">Wealth</a>
            <a href="#lab" className="hover:text-[#000a1e] transition-colors">Lab & Projects</a>
            <a href="#creative" className="hover:text-[#000a1e] transition-colors">Creative</a>
            <a href="#contact" className="hover:text-[#000a1e] transition-colors">Contact</a>
          </div>
          <a 
            href="#contact" 
            className="bg-[#000a1e] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            <span>Contact</span>
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e2e2_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
          <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-cyan-800 font-bold tracking-widest text-[11px] uppercase">Educational Tech & Wealth Builder</span>
            </div>
            
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"></div>
              <div className="relative w-40 h-40 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                <Image 
                  src="/bear_nik.png" 
                  alt="Nik Mascot" 
                  fill 
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-8xl md:text-[120px] font-black text-[#002147] tracking-tighter leading-none mb-6">Nik</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#44474e] tracking-tight mb-12">
              40대 가장의<br/><span className="text-[#000a1e]">재미있는 일들</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#lab" 
                className="flex flex-col items-center gap-2 bg-[#002147] text-white p-6 rounded-2xl min-w-[170px] shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all group cursor-pointer"
              >
                <span className="material-symbols-outlined text-4xl text-cyan-400 group-hover:scale-110 transition-transform">terminal</span>
                <span className="font-bold">AI 솔루션 & Lab</span>
                <span className="text-[11px] text-cyan-200/80 font-medium">실무 개발 프로젝트 ↓</span>
              </a>
              <a 
                href="https://www.youtube.com/@onri" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-2 bg-white border-2 border-red-500 text-red-500 p-6 rounded-2xl min-w-[170px] shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <span className="material-symbols-outlined text-4xl text-red-600 group-hover:scale-110 transition-transform">play_circle</span>
                <span className="font-bold">유튜브 On:ri</span>
                <span className="text-[11px] text-red-400 font-medium">기술 쓰는 아빠 이야기</span>
              </a>
              <a 
                href="https://blog.naver.com/u2i" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-2 bg-white border-2 border-cyan-500 text-cyan-600 p-6 rounded-2xl min-w-[170px] shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <span className="material-symbols-outlined text-4xl text-cyan-600 group-hover:scale-110 transition-transform">article</span>
                <span className="font-bold">생각 창고</span>
                <span className="text-[11px] text-cyan-700 font-medium">네이버 블로그 기록</span>
              </a>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase">Trust & Experience</span>
              <h2 className="text-5xl font-black text-[#000a1e] mt-4 mb-6">21년의 교육행정 기록</h2>
              <p className="text-lg text-[#44474e] leading-relaxed">
                2005년부터 교육 현장의 중심에서 쌓아온 행정 전문성은 저의 가장 견고한 뿌리입니다. 
                법령과 원칙에 대한 깊은 이해를 바탕으로, 동료와 공공을 위한 혁신적인 도구를 창조합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-[36px] bg-[#f9f9f9] border border-black/5 hover:border-cyan-400 hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-5xl text-cyan-600 mb-6 group-hover:scale-110 transition-transform block">verified_user</span>
                  <h3 className="text-xl font-bold mb-3 text-[#000a1e]">행정의 전문성</h3>
                  <p className="text-[#44474e] text-sm leading-relaxed">2005년부터 시작된 교육행정 실무를 통해 복잡한 예산·계약 시스템과 조직 운영을 정밀하게 최적화합니다.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 text-xs font-semibold text-slate-400">2005 ~ Present (21 Years)</div>
              </div>

              <div className="p-8 rounded-[36px] bg-[#f9f9f9] border border-black/5 hover:border-cyan-400 hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-5xl text-cyan-600 mb-6 group-hover:scale-110 transition-transform block">terminal</span>
                  <h3 className="text-xl font-bold mb-3 text-[#000a1e]">AI & 바이브 코딩</h3>
                  <p className="text-[#44474e] text-sm leading-relaxed">단순 반복 업무를 없애기 위해 Python과 AI를 공부합니다. 동료들의 퇴근을 앞당기는 실무 맞춤 툴을 직접 개발합니다.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 text-xs font-semibold text-cyan-600">Work Automation Engine</div>
              </div>

              <div className="p-8 rounded-[36px] bg-[#f9f9f9] border border-black/5 hover:border-cyan-400 hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-5xl text-cyan-600 mb-6 group-hover:scale-110 transition-transform block">trending_up</span>
                  <h3 className="text-xl font-bold mb-3 text-[#000a1e]">원칙 기반의 혁신</h3>
                  <p className="text-[#44474e] text-sm leading-relaxed">조달청 고시 요율 역산 감사와 규정에 충실한 자동 검증 시스템을 통해 행정의 신뢰도와 무결성을 지켜냅니다.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 text-xs font-semibold text-slate-400">Audit & Compliance</div>
              </div>

              <div className="p-8 rounded-[36px] bg-gradient-to-br from-cyan-500/10 via-[#f9f9f9] to-[#f9f9f9] border-2 border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-5xl text-cyan-600 group-hover:scale-110 transition-transform">language</span>
                    <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[10px] font-black uppercase">Live Portal</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#000a1e]">AI-SEN STORE</h3>
                  <p className="text-[#44474e] text-sm leading-relaxed">102권 공식 지침서 스트리밍 서고와 16대 원스톱 실무 도구를 아우르는 교육행정 통합 관제 포털입니다.</p>
                </div>
                <a 
                  href="https://www.aisen.store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-6 inline-flex items-center gap-1.5 font-bold text-sm text-cyan-700 hover:text-cyan-900 group-hover:translate-x-1 transition-all"
                >
                  포털 둘러보기 <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Wealth Section */}
        <section id="wealth" className="py-32 bg-[#000a1e] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-cyan-400 font-bold tracking-wider text-sm uppercase">Wealth Management</span>
                <h2 className="text-5xl font-black mt-4 mb-8">가족의 미래를 위한<br/>단단한 경제적 토대</h2>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                  경제적 자유는 단순한 수익률이 아닌 치밀한 원칙과 전략의 결과입니다. 
                  실거주 부동산부터 글로벌 배당 성장주, 법인 자산 관리까지 흔들림 없는 10년 로드맵을 구축합니다.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: 'apartment', title: '부동산 가치분석 & 경매', desc: '입지 분석과 권리 분석 기반의 안전한 실물 자산 포트폴리오' },
                    { icon: 'show_chart', title: '미국 배당성장주', desc: '자본 수익과 현금 흐름을 동시에 창출하는 글로벌 우량주 투자' },
                    { icon: 'business', title: '법인 자산관리', desc: '세무 최적화와 장기적 자산 승계를 위한 체계적인 법인 운영' },
                    { icon: 'analytics', title: '데이터 기반 투자', desc: '감정에 휘둘리지 않는 퀀트 데이터 및 거시경제 지표 트래킹' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-all group">
                      <span className="material-symbols-outlined text-cyan-400 mb-4 group-hover:scale-110 transition-transform block">{item.icon}</span>
                      <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-2xl relative">
                  <Image src="/family_wealth_concept.png" alt="Wealth Management" fill className="object-cover opacity-85 hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-8 -left-8 p-8 bg-cyan-400 text-[#000a1e] rounded-3xl shadow-2xl hidden md:block max-w-[260px]">
                  <p className="font-black text-xl leading-tight">투자는 공부하고 준비한 만큼 정직하게 보답한다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lab & Featured Projects Section */}
        <section id="lab" className="py-32 bg-[#f1f3f5]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Lab Intro */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="bg-[#010c1e] p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs font-mono text-slate-500 ml-2">aisen_rag_pipeline.py</span>
                  </div>
                  <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-cyan-300">
                    <code>{`# Nik의 AI-SEN 3-Tier RAG & 실무 자동화
from aisen_core import GuidelineArchive, ContractAudit

def optimize_school_admin(task):
    # 102권 공식 지침서 쪽수 1:1 앵커링 검색
    ref = GuidelineArchive.search_with_law(task.query)
    # 조달청 간접공사비 100% 역산 감사
    audit = ContractAudit.verify_cost(task.sheet)
    
    print("✓ 감사 지적 0건 & 정시 퇴근 달성!")
    return ref, audit

# 21년의 교육행정 노하우를 코드로 구현합니다.`}</code>
                  </pre>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase mb-4">
                  <span>Lab / AI & Vibe Coding</span>
                </div>
                <h2 className="text-5xl font-black text-[#000a1e] tracking-tight mb-8">기술로 일상을<br/>풍요롭게 만들다</h2>
                <p className="text-lg text-[#44474e] mb-8 leading-relaxed">
                  단순한 코딩이 아닙니다. 가족과 함께하는 저녁이 있는 삶을 위해 실무의 비효율을 걷어냅니다. 
                  엄격한 공공기관의 보안과 규정을 완벽히 지키면서도 업무 속도를 수십 배 단축하는 현실적인 소프트웨어를 만듭니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-black/5 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-cyan-600">auto_awesome</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000a1e]">AI & 3-Tier RAG 행정 혁신</h4>
                      <p className="text-sm text-[#44474e]">102권 공식 지침서와 국가법령정보센터 실시간 연동 검색</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-black/5 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-cyan-600">terminal</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000a1e]">오프라인 폐쇄망 완비 자동화</h4>
                      <p className="text-sm text-[#44474e]">인터넷이 없는 행정망 PC에서도 단독 실행(`exe`)되는 강력한 툴킷</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Projects Grid Header */}
            <div className="border-t border-black/10 pt-20 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase">Featured Solutions</span>
                <h3 className="text-4xl font-black text-[#000a1e] mt-2">직접 개발·운영 중인 메인 프로그램</h3>
              </div>
              <p className="text-sm text-[#44474e] max-w-md">
                실제 서울 교육 현장과 동료 행정실무자들이 매일 활용하고 검증한 실전 프로젝트 라인업입니다.
              </p>
            </div>

            {/* 4 Main Solutions Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Solution 1 */}
              <div className="bg-white p-8 md:p-10 rounded-[36px] border border-black/5 hover:border-cyan-400 hover:shadow-2xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">smart_toy</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold">RAG 챗봇 & 정산</span>
                  </div>
                  <h4 className="text-2xl font-black text-[#000a1e] mb-3 group-hover:text-cyan-600 transition-colors">
                    AI-SEN 행정챗봇 & 출장여비 (v2)
                  </h4>
                  <p className="text-[#44474e] text-sm leading-relaxed mb-6">
                    102권 공식 지침서의 쪽수를 1:1로 앵커링하는 3-Tier RAG 아키텍처와 국가법령 실시간 연동을 구현했습니다. 국내·국외(USD 4대 등급) 무오차 출장여비 정산기와 FastMCP(`aisen-mcp`)를 탑재했습니다.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['FastAPI', 'RAG 3-Tier', '102권 지침서', '출장비 100% 무오차', 'FastMCP'].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#f1f3f5] text-slate-700 text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href="https://chatbot.aisen.store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-[#000a1e] text-white font-bold text-sm group-hover:bg-cyan-600 transition-colors"
                >
                  <span>서비스 바로가기 (chatbot.aisen.store)</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-8 md:p-10 rounded-[36px] border border-black/5 hover:border-cyan-400 hover:shadow-2xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">explore</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">계약 의사결정</span>
                  </div>
                  <h4 className="text-2xl font-black text-[#000a1e] mb-3 group-hover:text-cyan-600 transition-colors">
                    서울교육 계약나침반 (계약길잡이)
                  </h4>
                  <p className="text-[#44474e] text-sm leading-relaxed mb-6">
                    2026 서울시교육청 계약지침 및 지방계약법을 100% 반영한 4-Step 아코디언 시스템입니다. 계약방법 자동 비교, 맞춤 구비서류 필터링과 K-에듀파인 기안문 사유서를 10초 만에 자동 작성합니다.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['2026 계약지침', '4-Step Accordion', '기안문 자동생성', '서류 체크리스트'].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#f1f3f5] text-slate-700 text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href="https://aisen.store/tools/contract" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-[#000a1e] text-white font-bold text-sm group-hover:bg-cyan-600 transition-colors"
                >
                  <span>도구 바로가기 (aisen.store/tools/contract)</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-8 md:p-10 rounded-[36px] border border-black/5 hover:border-cyan-400 hover:shadow-2xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">fact_check</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">감사 검수기</span>
                  </div>
                  <h4 className="text-2xl font-black text-[#000a1e] mb-3 group-hover:text-cyan-600 transition-colors">
                    공사원가계산서 스마트 검수 시스템
                  </h4>
                  <p className="text-[#44474e] text-sm leading-relaxed mb-6">
                    시공업체 제출 엑셀 내역서를 업로드하면 조달청 6대 공종 법정 제비율을 실시간 100% 역산 감사하고, 인위적인 수식 조작이나 하드코딩을 즉시 적발하여 100점 만점 검수 보고서로 출력합니다.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['조달청 고시 역산', '수식 조작 적발', '하드코딩 검출', '100점 리포트'].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#f1f3f5] text-slate-700 text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm">
                  <span>감사 예방 검수 엔진 탑재</span>
                  <span className="material-symbols-outlined text-lg text-emerald-600">verified</span>
                </div>
              </div>

              {/* Solution 4 */}
              <div className="bg-white p-8 md:p-10 rounded-[36px] border border-black/5 hover:border-cyan-400 hover:shadow-2xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">calendar_month</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">폐쇄망 단독 실행</span>
                  </div>
                  <h4 className="text-2xl font-black text-[#000a1e] mb-3 group-hover:text-cyan-600 transition-colors">
                    교육행정 스케줄러 (EduScheduler)
                  </h4>
                  <p className="text-[#44474e] text-sm leading-relaxed mb-6">
                    국세기본법 제5조를 반영하여 세무/회계 마감은 다음 영업일(+1일), 급여 지급은 직전 영업일(-1일)로 공휴일을 자동 보정합니다. 인터넷이 끊긴 교육행정 폐쇄망 PC에서도 단독 실행(`app.exe`)을 완벽 보장합니다.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['국세기본법 보정', '2030년 공휴일 탑재', '오프라인 단독 EXE', '폐쇄망 완비'].map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#f1f3f5] text-slate-700 text-xs font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm">
                  <span>행정망 단독 패키징 솔루션</span>
                  <span className="material-symbols-outlined text-lg text-cyan-600">offline_pin</span>
                </div>
              </div>
            </div>

            {/* Quick Utility Tools Chips */}
            <div className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">Daily Efficiency Suite</span>
                  <h5 className="text-xl font-bold text-[#000a1e] mt-1">칼퇴를 돕는 실무 고속화 툴킷</h5>
                </div>
                <span className="text-xs text-slate-500">클릭 시 AI-SEN 통합 포털에서 즉시 사용 가능</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: '다중시트 엑셀수합기 (수식/서식 무오차)', url: 'https://aisen.store/tools/excel-merge' },
                  { name: '엑셀 시트 분리 웹 (ZIP 다운로드)', url: 'https://aisen.store/tools/sheet-splitter' },
                  { name: '나이스 급여식대 0.1초 추출기', url: 'https://aisen.store/tools/sikdae' },
                  { name: '지출증빙서 바인더 측면라벨러 (A4 실측)', url: 'https://aisen.store/tools/label-maker' },
                  { name: '학교 교실배치도 시각화 (ClassMap)', url: 'https://aisen.store/tools/classmap' },
                  { name: '학교 시설대관료 자동 산출기', url: 'https://aisen.store/tools/gym-calc' },
                  { name: '교육청 통합 인사관리 & 결원예측기', url: '#' },
                  { name: '교직원 힐링 수박게임 (보스키 탑재)', url: 'https://aisen.store/tools/watermelon' }
                ].map((tool, idx) => (
                  <a
                    key={idx}
                    href={tool.url}
                    target={tool.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f9f9f9] border border-black/5 text-xs font-bold text-[#1a1c1c] hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    <span>{tool.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Creative Section */}
        <section id="creative" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase">Content Creator</span>
                <h2 className="text-5xl font-black text-[#000a1e] mt-4">기록하는 일상</h2>
                <p className="text-[#44474e] mt-4 text-lg">유튜브 'On:ri' 채널과 블로그를 통해 기술과 삶의 인사이트를 진솔하게 나눕니다.</p>
              </div>
              <a 
                href="https://www.youtube.com/@onri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-bold text-cyan-600 hover:text-[#000a1e] transition-colors"
              >
                유튜브 채널 바로가기 <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <a href="https://www.youtube.com/@onri" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-video rounded-[36px] overflow-hidden mb-6 bg-slate-100 shadow-md">
                  <Image src="/tech_dad_vibe.png" alt="YouTube On:ri" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-sm">play_arrow</span> YouTube
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-600 transition-colors text-[#000a1e]">On:ri - 기술을 쓰는 아빠의 이야기</h3>
                <p className="text-[#44474e] mt-2 leading-relaxed">
                  20년 행정 실무자가 직접 들려주는 AI 코딩부터 효율적인 교육행정 팁까지, 일상을 기술로 풍성하게 만드는 이야기를 영상으로 담아냅니다.
                </p>
              </a>
              <a href="https://blog.naver.com/u2i" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-video rounded-[36px] overflow-hidden mb-6 bg-slate-100 shadow-md">
                  <Image src="/writing_reflection.png" alt="Blog Record" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-cyan-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-sm">edit_note</span> Blog
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-600 transition-colors text-[#000a1e]">기록의 힘: Nik의 생각 창고</h3>
                <p className="text-[#44474e] mt-2 leading-relaxed">
                  치열한 일상 속에서 건져 올린 정제된 사유를 글로 정리합니다. 네이버 블로그를 통해 삶의 인사이트와 배움을 나눕니다.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[#f8f9fa] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-start text-left">
              <div>
                <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase">Get In Touch</span>
                <h2 className="text-5xl font-black text-[#000a1e] mt-4 mb-8">함께 고민하고<br />성장해나가요</h2>
                <p className="text-lg text-[#44474e] mb-12 leading-relaxed">
                  교육행정 효율화, AI 기술 활용에 대한 고민, 혹은 가벼운 지식 공유까지 모두 환영합니다.
                  메시지를 남겨주시면 정성껏 답변해 드리겠습니다.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cyan-600 border border-black/5">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold">Email</div>
                      <span className="font-bold text-[#000a1e]">u2i@naver.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cyan-600 border border-black/5">
                      <span className="material-symbols-outlined">forum</span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold">Community</div>
                      <span className="font-bold text-[#000a1e]">행정 효율화 & Vibe Coding 지식 나눔</span>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 bg-[#000a1e] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-cyan-400 text-3xl">science</span>
              <h3 className="text-3xl font-black tracking-tight text-white">Nik</h3>
            </div>
            <p className="max-w-md text-slate-400 leading-relaxed text-sm">
              21년의 기록, 기술로 여는 더 나은 미래 — 우리 아이들이 살아갈 내일과 동료들의 행복한 정시 퇴근을 위해 신뢰할 수 있는 도구를 만듭니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-black text-xs uppercase tracking-widest text-slate-500">Navigation</span>
              <a href="#expertise" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">Expertise</a>
              <a href="#wealth" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">Wealth</a>
              <a href="#lab" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">Lab & Solutions</a>
              <a href="#creative" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">Creative</a>
              <a href="#contact" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-black text-xs uppercase tracking-widest text-slate-500">Platforms</span>
              <a href="https://www.aisen.store" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">AI-SEN STORE</a>
              <a href="https://chatbot.aisen.store" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">AI-SEN Chatbot</a>
              <a href="https://www.youtube.com/@onri" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">YouTube 'On:ri'</a>
              <a href="https://blog.naver.com/u2i" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">Naver Blog</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-bold tracking-wider gap-4">
          <span>© 2026 NIK. ALL RIGHTS RESERVED. EFFICIENCY THROUGH INNOVATION.</span>
          <span>EDUCATIONAL ADMINISTRATION & VIBE CODING</span>
        </div>
      </footer>
      
      {/* External Scripts for Icons */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
    </div>
  );
}
