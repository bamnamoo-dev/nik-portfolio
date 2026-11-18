import Image from "next/image";
import { SITE } from "@/data/site";
import { Chevron, SectionHeading } from "./ui";

// 유튜브 카드: 채널 배너 이미지
function YoutubeArt() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#1f4a6e]">
      <Image
        src="/images/brand-banner.png"
        alt="닉아저씨 유튜브 채널 배너: 교육행정 × AI 실무 이야기"
        fill
        sizes="(min-width: 768px) 520px, 100vw"
        className="tile-img object-cover"
      />
    </div>
  );
}

// 블로그 카드 그림: 노트 + 펜 (벡터 일러스트)
function BlogArt() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8f1fc]">
      <svg viewBox="0 0 320 200" className="tile-img absolute inset-0 w-full h-full" aria-hidden="true">
        <g transform="rotate(-4 160 100)">
          <rect x="54" y="30" width="180" height="140" rx="14" fill="#fff" />
          <text x="72" y="58" fontSize="13" fontWeight="600" fill="#1d1d1f" fontFamily="sans-serif">blog</text>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="72" y={76 + i * 17} width={i === 4 ? 80 : 144 - (i % 2) * 24} height="6" rx="3" fill="#1d1d1f" fillOpacity={i === 0 ? 0.5 : 0.1} />
          ))}
        </g>
        <g transform="rotate(38 250 120)">
          <rect x="236" y="54" width="14" height="110" rx="7" fill="#1d1d1f" />
          <rect x="236" y="70" width="14" height="10" fill="#0071e3" />
          <path d="M236 164 L243 184 L250 164 Z" fill="#d2d2d7" />
        </g>
      </svg>
    </div>
  );
}

export default function Creative() {
  const cards = [
    { href: SITE.youtubeUrl, art: <YoutubeArt />, tag: "YouTube", title: "닉아저씨", desc: "기술을 쓰는 아빠의 이야기를 영상으로 담습니다.", cta: "채널 보기" },
    { href: SITE.blogUrl, art: <BlogArt />, tag: "블로그", title: "Nik의 생각 창고", desc: "배움과 업무 이야기를 글로 남깁니다.", cta: "글 읽기" },
  ];

  return (
    <section id="creative" className="bg-paper py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="기록하는 일상" title="영상과 글로도 나눕니다." />

        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((c) => (
            <a
              key={c.tag}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group block rounded-3xl overflow-hidden bg-white"
            >
              {c.art}
              <div className="p-7 md:p-8">
                <p className="text-sm font-semibold text-body">{c.tag}</p>
                <h3 className="text-2xl font-semibold tracking-tight mt-1">{c.title}</h3>
                <p className="text-body mt-2">{c.desc}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-accent-strong group-hover:underline underline-offset-4">
                  {c.cta} <Chevron />
                  <span className="sr-only">(새 창)</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
