import Image from "next/image";
import { SITE } from "@/data/site";

export default function Creative() {
  return (
    <section id="creative" className="py-16 md:py-20 bg-[#f9f9f9]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#000a1e]">기록하는 일상</h2>
          <p className="text-[#44474e] mt-3">유튜브 &lsquo;닉아저씨&rsquo; 채널과 블로그에 일상과 배움을 기록합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a href={SITE.youtubeUrl} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-100 mb-4">
              <Image src="/tech_dad_vibe.png" alt="유튜브 닉아저씨 채널" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="text-lg font-bold group-hover:text-cyan-700 transition-colors">닉아저씨 YouTube</h3>
          </a>
          <a href={SITE.blogUrl} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-100 mb-4">
              <Image src="/writing_reflection.png" alt="Nik의 네이버 블로그" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <h3 className="text-lg font-bold group-hover:text-cyan-700 transition-colors">Nik의 생각 창고 (네이버 블로그)</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
