"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { sendEmail } from "../actions";
import { INQUIRY_TYPES, type InquiryType } from "@/data/inquiry";

const inputCls =
  "w-full px-4 py-3.5 bg-white border border-line rounded-xl text-[17px] placeholder:text-[#aeaeb2] focus:border-accent focus:ring-4 focus:ring-accent/15 transition-shadow outline-none";
const labelCls = "text-sm font-medium text-ink ml-1";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // 강의 목록의 [문의하기]에서 넘어오면 유형과 강의명을 미리 채웁니다. (/?type=lecture&topic=...)
  const params = useSearchParams();
  const fromLecture = params.get("type") === "lecture";
  const [type, setType] = useState<InquiryType>(fromLecture ? "강의·특강 요청" : INQUIRY_TYPES[0]);
  const [lectureTopic, setLectureTopic] = useState(fromLecture ? (params.get("topic") ?? "").slice(0, 200) : "");

  // 스팸 방지: 폼이 열린 시각을 기록합니다. (사람은 3초 안에 작성하기 어렵습니다)
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("startedAt", String(startedAt.current));
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      form.reset();
      startedAt.current = Date.now();
      setType(INQUIRY_TYPES[0]);
      setLectureTopic("");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "메시지 발송에 실패했습니다. 나중에 다시 시도해주세요.");
    }
  }

  return (
    <div className="bg-paper p-6 sm:p-10 md:p-12 rounded-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 허니팟: 사람에게는 보이지 않고, 봇이 채우면 차단됩니다. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">웹사이트</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="space-y-2">
          <label htmlFor="inquiryType" className={labelCls}>문의 유형</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={type}
            onChange={(e) => setType(e.target.value as InquiryType)}
            className={inputCls}
            required
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {type === "강의·특강 요청" && (
          <div className="space-y-2">
            <label htmlFor="lectureTopic" className={labelCls}>희망 강의 <span className="font-normal text-body">(선택)</span></label>
            <input
              type="text"
              id="lectureTopic"
              name="lectureTopic"
              value={lectureTopic}
              onChange={(e) => setLectureTopic(e.target.value)}
              maxLength={200}
              placeholder="예: 입문 - AI 실무 활용법"
              className={inputCls}
            />
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className={labelCls}>성함</label>
            <input type="text" id="name" name="name" placeholder="홍길동" maxLength={50} className={inputCls} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className={labelCls}>연락처</label>
            <input type="tel" id="phone" name="phone" placeholder="010-0000-0000" maxLength={30} className={inputCls} required />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className={labelCls}>이메일</label>
          <input type="email" id="email" name="email" placeholder="example@email.com" maxLength={100} className={inputCls} required />
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className={labelCls}>소속 기관 <span className="font-normal text-body">(선택)</span></label>
          <input type="text" id="organization" name="organization" placeholder="예: ○○교육지원청" maxLength={100} className={inputCls} />
        </div>

        {type === "강의·특강 요청" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="desiredDate" className={labelCls}>희망 일정 <span className="font-normal text-body">(선택)</span></label>
              <input type="text" id="desiredDate" name="desiredDate" placeholder="예: 11월 중순 오후" maxLength={100} className={inputCls} />
            </div>
            <div className="space-y-2">
              <label htmlFor="headcount" className={labelCls}>예상 인원 <span className="font-normal text-body">(선택)</span></label>
              <input type="text" id="headcount" name="headcount" inputMode="numeric" placeholder="예: 30명" maxLength={30} className={inputCls} />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="message" className={labelCls}>문의 내용</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={3000}
            placeholder="문의하실 내용을 입력해주세요."
            className={`${inputCls} resize-none`}
            required
          ></textarea>
        </div>

        <div className="flex items-start gap-3 py-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            className="mt-1 w-4 h-4 accent-accent"
            required
          />
          <label htmlFor="privacy" className="text-xs text-body leading-relaxed cursor-pointer">
            개인정보 수집 및 이용에 동의합니다. (수집 항목: 성함, 연락처, 이메일, 소속 기관·희망 일정·예상 인원(입력한 경우), 문의 내용 / 문의 응대 및 상담 목적)
          </label>
        </div>

        {status === "success" && (
          <div role="status" className="p-4 bg-[#e8f8ec] text-[#1b7f3b] rounded-xl text-sm font-medium">
            메시지가 성공적으로 전송되었습니다! 영업일 기준 1일 이내에 답변드리겠습니다.
          </div>
        )}

        {status === "error" && (
          <div role="alert" className="p-4 bg-[#fdecec] text-[#c4291c] rounded-xl text-sm font-medium">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-accent text-white rounded-full font-medium text-[17px] hover:bg-[#0077ed] transition-colors active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "발송 중..." : "메시지 보내기"}
        </button>
      </form>
    </div>
  );
}
