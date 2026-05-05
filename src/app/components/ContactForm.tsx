"use client";

import { useState } from "react";
import { sendEmail } from "../actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "메시지 발송에 실패했습니다. 나중에 다시 시도해주세요.");
    }
  }

  return (
    <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-xl border border-black/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-[#000a1e] ml-1">성함</label>
            <input
              type="text"
              id="name"
              name="name"
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
              name="phone"
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
            name="email"
            placeholder="example@email.com"
            className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-cyan-500 transition-all outline-none"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-[#000a1e] ml-1">문의 내용</label>
          <textarea
            id="message"
            name="message"
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
            name="privacy"
            className="mt-1 w-4 h-4 text-cyan-600 bg-slate-50 border-none rounded focus:ring-cyan-500"
            required
          />
          <label htmlFor="privacy" className="text-xs text-[#44474e] leading-relaxed cursor-pointer">
            개인정보 수집 및 이용에 동의합니다. (문의 응대 및 상담 목적)
          </label>
        </div>
        
        {status === "success" && (
          <div className="p-4 bg-green-50 text-green-700 rounded-2xl text-sm font-medium">
            메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
          </div>
        )}
        
        {status === "error" && (
          <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-sm font-medium">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-5 bg-[#000a1e] text-white rounded-2xl font-bold text-lg hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "발송 중..." : "메시지 보내기"}
        </button>
      </form>
    </div>
  );
}
