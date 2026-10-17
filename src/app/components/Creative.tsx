import Image from "next/image";
import { SITE } from "@/data/site";

// 유튜브 카드: 채널 배너 이미지
function YoutubeArt() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#1f4a6e]">
      <Image
        src="/images/brand-banner.png"
        alt="닉아저씨 유튜브 채널 배너: 교육행정 × AI 실무 이야기"
        fill
        sizes="(min-width: 768px) 560px, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}

// 블로그 카드 그림: 원고지 노트 + 펜 (벡터 일러스트)
function BlogArt() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#e9fbf3] via-[#f2fbff] to-[#e6f6fb]">
      <svg viewBox="0 0 320 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <g transform="rotate(-4 160 100)">
          <rect x="54" y="30" width="180" height="140" rx="12" fill="#fff" stroke="#0a1628" strokeOpacity=".08" />
          <rect x="54" y="30" width="180" height="26" rx="12" fill="#0e7490" />
          <rect x="54" y="44" width="180" height="12" fill="#0e7490" />
          <text x="70" y="48" fontSize="12" fontWeight="800" fill="#fff" fontFamily="sans-serif">blog</text>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="70" y={72 + i * 18} width={i === 4 ? 80 : 148 - (i % 2) * 24} height="6" rx="3" fill="#0a1628" fillOpacity={i === 0 ? 0.55 : 0.12} />
          ))}
        </g>
        <g transform="rotate(38 250 120)">
          <rect x="236" y="54" width="14" height="110" rx="7" fill="#0a1628" />
          <rect x="236" y="70" width="14" height="10" fill="#22d3ee" />
          <path d="M236 164 L243 184 L250 164 Z" fill="#c7a250" />
        </g>
        <circle cx="270" cy="40" r="16" fill="#22d3ee" fillOpacity=".25" />
        <circle cx="40" cy="168" r="10" fill="#0e7490" fillOpacity=".25" />
      </svg>
    </div>
  );
}

export default function Creative() {
  const cards = [
    { href: SITE.youtubeUrl, art: <YoutubeArt />, icon: "play_arrow", tag: "YouTube", title: "닉아저씨", desc: "기술을 쓰는 아빠의 이야기를 영상으로 담습니다." },
    { href: SITE.blogUrl, art: <BlogArt />, icon: "edit_note", tag: "블로그", title: "Nik의 생각 창고", desc: "배움과 업무 이야기를 글로 남깁니다." },
  ];

  return (
    <section id="creative" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-10">
          <p className="text-sm font-bold text-accent-strong mb-3">기록하는 일상</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">영상과 글로도 나눕니다</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((c) => (
            <a
              key={c.tag}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal lift group block rounded-[28px] overflow-hidden border border-black/[0.06] bg-paper"
            >
              {c.art}
              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-accent-strong flex items-center gap-1 mb-1">
                    <span className="material-symbols-outlined !text-[16px]" aria-hidden="true">{c.icon}</span>
                    {c.tag}
                  </p>
                  <h3 className="text-lg font-extrabold tracking-tight">{c.title}</h3>
                  <p className="text-sm text-body mt-1">{c.desc}</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-strong" aria-hidden="true">arrow_outward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
