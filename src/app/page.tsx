import Image from "next/image";
// Deployment trigger: Nik Portfolio

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] selection:bg-cyan-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-cyan-500 text-3xl">science</span>
            <span className="text-2xl font-black tracking-tighter text-[#000a1e]">Nik</span>
          </a>
          <div className="hidden md:flex gap-10 font-bold text-sm text-[#44474e]">
            <a href="#expertise" className="hover:text-cyan-600 transition-colors">Expertise</a>
            <a href="#wealth" className="hover:text-cyan-600 transition-colors">Wealth</a>
            <a href="#lab" className="hover:text-cyan-600 transition-colors">Lab</a>
            <a href="#creative" className="hover:text-cyan-600 transition-colors">Creative</a>
            <a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-[#000a1e] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95">
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-16 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-6 md:pt-20 pb-10 md:pb-32 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e2e2_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
          <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-4 md:mb-8">
              <span className="text-cyan-700 font-black tracking-[0.2em] text-sm md:text-xl uppercase">Personal Portfolio</span>
            </div>
            
            <div className="relative mb-4 md:mb-12 group">
              <div className="absolute inset-0 bg-cyan-400 blur-[30px] md:blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-2xl md:rounded-[32px] overflow-hidden border-2 md:border-4 border-white shadow-xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
                <Image 
                  src="/bear_nik.png" 
                  alt="Nik Mascot" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-[140px] font-black text-[#002147] tracking-tighter leading-none mb-1 md:mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">Nik</h1>
            <h2 className="text-xl md:text-5xl font-extrabold text-[#44474e] tracking-tight mb-6 md:mb-16 leading-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              40대 가장의<br/><span className="text-[#000a1e] bg-cyan-100 px-2">재미있는 일들</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-3 w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
              <a href="#lab" className="flex items-center gap-4 bg-[#002147] text-white py-4 px-6 rounded-2xl w-full shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">terminal</span>
                <div className="text-left">
                  <p className="font-bold text-lg leading-none">AI 코딩</p>
                  <p className="text-[10px] text-cyan-300/70 mt-1 uppercase tracking-wider">Lab & Innovation</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-sm opacity-30">arrow_forward_ios</span>
              </a>
              <a href="https://www.youtube.com/channel/UCkSLN2FO_OPPnaTAylapGTg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-red-100 text-red-600 py-4 px-6 rounded-2xl w-full shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">play_circle</span>
                <div className="text-left">
                  <p className="font-bold text-lg leading-none">유튜브</p>
                  <p className="text-[10px] text-red-400/70 mt-1 uppercase tracking-wider">Channel 닉아저씨</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-sm opacity-30">arrow_forward_ios</span>
              </a>
              <a href="https://blog.naver.com/u2i" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-cyan-100 text-cyan-700 py-4 px-6 rounded-2xl w-full shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">article</span>
                <div className="text-left">
                  <p className="font-bold text-lg leading-none">블로그</p>
                  <p className="text-[10px] text-cyan-600/70 mt-1 uppercase tracking-wider">Daily Insights</p>
                </div>
                <span className="material-symbols-outlined ml-auto text-sm opacity-30">arrow_forward_ios</span>
              </a>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-cyan-600 font-bold tracking-tighter text-sm uppercase">Trust & Experience</span>
              <h2 className="text-5xl font-black text-[#000a1e] mt-4 mb-6">21년의 교육행정 기록</h2>
              <p className="text-lg text-[#44474e] leading-relaxed">
                21년 동안 교육 현장의 중심에서 쌓아온 행정 전문성은 저의 가장 큰 자산입니다. 
                신뢰를 바탕으로 복잡한 시스템을 혁신하고 효율을 창조합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: 'verified_user', title: '행정 전문성', desc: '2005년부터 시작된 교육행정 실무를 바탕으로 시스템 최적화 및 효율적인 조직 관리를 수행합니다.' },
                { icon: 'terminal', title: 'Python & AI 활용', desc: '단순 반복 업무를 자동화하여 업무 생산성을 극대화하고, 동료들의 퇴근 시간을 앞당기는 솔루션을 개발합니다.' },
                { icon: 'trending_up', title: '혁신적 리더십', desc: '관습을 넘어 데이터와 AI 기반의 의사결정 체계를 구축하며 교육 현장의 디지털 전환을 선도합니다.' }
              ].map((item, i) => (
                <div key={i} className="p-12 rounded-[48px] bg-[#f9f9f9] border border-black/5 hover:border-cyan-400 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500 group">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <span className="material-symbols-outlined text-5xl text-cyan-600">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                  <p className="text-[#44474e] leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wealth Section - Expanded */}
        <section id="wealth" className="py-32 bg-[#000a1e] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-cyan-400 font-bold tracking-tighter text-sm uppercase">Wealth Management</span>
                <h2 className="text-5xl font-black mt-4 mb-8">가족의 미래를 위한<br/>단단한 투자 인사이트</h2>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                  경제적 자유는 단순한 꿈이 아닌 치밀한 전략의 결과입니다. 
                  실거주 부동산부터 글로벌 주식, 법인 투자까지 체계적인 포트폴리오를 연구합니다.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: 'apartment', title: '부동산 분석 & 경매', desc: '입지 분석과 경매를 통한 가치 투자' },
                    { icon: 'show_chart', title: '미국 주식', desc: '글로벌 배당 성장주 중심 포트폴리오' },
                    { icon: 'business', title: '법인 투자', desc: '효율적인 자산 관리를 위한 법인 활용' },
                    { icon: 'analytics', title: '데이터 기반 투자', desc: 'AI를 활용한 시장 트렌드 분석' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      <span className="material-symbols-outlined text-cyan-400 mb-4">{item.icon}</span>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-2xl relative">
                  <Image src="/investment_strategy_abstract.png" alt="Wealth Strategy" fill className="object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000a1e] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Section - Restructured Header & Balanced Grid */}
        <section id="lab" className="py-24 md:py-32 bg-[#f1f3f5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            {/* Centered Header like Creative Section */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-cyan-600 font-bold tracking-tighter text-sm uppercase">Lab / AI & Coding</span>
              <h2 className="text-5xl font-black text-[#000a1e] mt-4 mb-6 leading-tight">기술로 일상을 풍요롭게 만들다</h2>
              <p className="text-lg text-[#44474e] leading-relaxed">
                단순한 코딩이 아닙니다. 삶의 여유를 찾아주는 도구를 만듭니다.<br className="hidden md:block"/>
                21년의 행정 경험을 코드로 구현하여 복잡한 실무를 혁신합니다.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Left: Coding Screen */}
              <div className="w-full h-full">
                <a 
                  href="https://aisen.store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-[#010c1e] p-10 md:p-14 rounded-[40px] shadow-2xl border border-white/5 relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/10 h-full flex flex-col justify-center"
                >
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <pre className="font-mono text-sm md:text-lg leading-relaxed overflow-hidden text-cyan-300 relative z-10">
                    <code>{`# AiSen: AI 기반 행정 혁신
class AiSenStore:
    def __init__(self):
        self.vision = "디지털 혁신"
        self.tools = ["AI", "LLM", "Python"]

    def innovate(self, task):
        return f"{task} 완료!"

# 클릭하여 사이트 방문하기`}</code>
                  </pre>
                </a>
              </div>

              {/* Right: 3 Link Cards */}
              <div className="flex flex-col gap-4 h-full">
                <a href="https://aisen.store" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-5 p-6 bg-white rounded-[32px] border border-black/5 hover:border-cyan-400 transition-all group shadow-sm overflow-hidden">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                    <span className="material-symbols-outlined text-cyan-600 group-hover:text-white transition-colors text-3xl">science</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#000a1e] text-xl truncate">AiSen Lab</h4>
                    <p className="text-sm text-[#44474e] truncate">행정 효율화를 위한 연구 공간</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-cyan-500 transition-colors">arrow_forward</span>
                </a>
                
                <a href="https://bamnamoo-dev.github.io/gym/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-5 p-6 bg-white rounded-[32px] border border-black/5 hover:border-cyan-400 transition-all group shadow-sm overflow-hidden">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                    <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors text-3xl">calculate</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#000a1e] text-xl truncate">체육관사용료 계산기</h4>
                    <p className="text-sm text-[#44474e] truncate">복잡한 사용료 계산 자동화</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-cyan-500 transition-colors">arrow_forward</span>
                </a>
                
                <a href="https://bamnamoo-dev.github.io/classmap/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-5 p-6 bg-white rounded-[32px] border border-black/5 hover:border-cyan-400 transition-all group shadow-sm overflow-hidden">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                    <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors text-3xl">grid_view</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#000a1e] text-xl truncate">교실배치도 제작기</h4>
                    <p className="text-sm text-[#44474e] truncate">효율적인 교실 공간 구성 도구</p>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-cyan-500 transition-colors">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Section */}
        <section id="creative" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-600 font-bold tracking-tighter text-sm uppercase">Content Creator</span>
              <h2 className="text-5xl font-black text-[#000a1e] mt-4">기록하는 일상</h2>
              <p className="text-[#44474e] mt-4">유튜브 '닉아저씨' 채널과 블로그를 통해 삶의 가치를 공유합니다.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <a href="https://www.youtube.com/channel/UCkSLN2FO_OPPnaTAylapGTg" target="_blank" className="group text-center">
                <div className="relative aspect-video rounded-[40px] overflow-hidden mb-6 bg-slate-100">
                  <Image src="/tech_dad_vibe.png" alt="YouTube 닉아저씨" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-sm">play_arrow</span> YouTube
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-600 transition-colors">닉아저씨 - IT 해결사</h3>
                <p className="text-[#44474e] mt-3 leading-relaxed max-w-sm mx-auto">21년의 지혜와 IT 기술을 결합해<br/>복잡한 세상을 쉽게 풀어냅니다.</p>
              </a>
              <a href="https://blog.naver.com/u2i" target="_blank" className="group text-center">
                <div className="relative aspect-video rounded-[40px] overflow-hidden mb-6 bg-slate-100">
                  <Image src="/writing_reflection.png" alt="Blog Record" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-cyan-600 text-white rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-sm">edit_note</span> Blog
                  </div>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-cyan-600 transition-colors">기록의 힘: Nik의 생각 창고</h3>
                <p className="text-[#44474e] mt-3 leading-relaxed max-w-sm mx-auto">매일의 배움과 성찰을 기록하며<br/>더 나은 내일을 준비합니다.</p>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-start text-left">
              <div>
                <span className="text-cyan-600 font-bold tracking-tighter text-sm uppercase">Get In Touch</span>
                <h2 className="text-5xl font-black text-[#000a1e] mt-4 mb-8">함께 고민하고<br/>성장해나가요</h2>
                <p className="text-lg text-[#44474e] mb-12 leading-relaxed">
                  교육행정 효율화, AI 기술 활용에 대한 고민, 혹은 가벼운 지식 공유까지 모두 환영합니다. 
                  메시지를 남겨주시면 정성껏 답변해 드리겠습니다.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-cyan-600">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <span className="font-bold text-[#000a1e]">u2i@naver.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-cyan-600">
                      <span className="material-symbols-outlined">forum</span>
                    </div>
                    <span className="font-bold text-[#000a1e]">행정 효율화 및 지식 공유 환영</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-xl border border-black/5">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#000a1e] ml-1">성함</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="홍길동"
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 transition-all outline-none" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-[#000a1e] ml-1">연락처</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="010-0000-0000"
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 transition-all outline-none" 
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#000a1e] ml-1">이메일</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="example@email.com"
                      className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 transition-all outline-none" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-[#000a1e] ml-1">문의 내용</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      placeholder="문의하실 내용을 입력해주세요."
                      className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 transition-all outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3 py-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 w-4 h-4 text-cyan-600 bg-slate-50 border-none rounded focus:ring-cyan-500" 
                      required
                    />
                    <label htmlFor="privacy" className="text-xs text-[#44474e] leading-relaxed cursor-pointer">
                      개인정보 수집 및 이용에 동의합니다. (문의 응대 및 상담 목적)
                    </label>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-[#000a1e] text-white rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-600/20 active:scale-[0.98]"
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-20 bg-[#000a1e] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tighter mb-4">Nik</h2>
            <p className="text-slate-400 max-w-md mx-auto">21년의 기록, 기술로 여는 더 나은 미래.<br/>오늘도 한 걸음 더 성장합니다.</p>
          </div>
          <div className="border-t border-white/10 pt-10 flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a href="https://www.youtube.com/channel/UCkSLN2FO_OPPnaTAylapGTg" target="_blank" className="text-slate-400 hover:text-white transition-colors">YouTube</a>
              <a href="https://blog.naver.com/u2i" target="_blank" className="text-slate-400 hover:text-white transition-colors">Blog</a>
              <a href="https://aisen.store" target="_blank" className="text-slate-400 hover:text-white transition-colors">AiSen Lab</a>
            </div>
            <p className="text-slate-500 text-sm">© 2026 Nik. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
