"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import { INQUIRY_TYPES } from "@/data/inquiry";
import { clientKey, isRateLimited, looksLikeBot } from "@/lib/formGuard";

// 폼 값을 문자열로 읽고 길이를 제한합니다. 제목 줄 주입을 막기 위해 줄바꿈은 제거할 수 있습니다.
function field(formData: FormData, key: string, max: number, singleLine = true) {
  const raw = formData.get(key);
  let value = typeof raw === "string" ? raw.trim() : "";
  if (singleLine) value = value.replace(/[\r\n]+/g, " ");
  return value.slice(0, max);
}

export async function sendEmail(formData: FormData) {
  // 스팸 방지: 봇에게는 성공처럼 응답하되 메일은 보내지 않습니다.
  if (looksLikeBot({ honeypot: field(formData, "website", 200), startedAt: field(formData, "startedAt", 20) })) {
    return { success: true };
  }
  const h = await headers();
  if (isRateLimited(clientKey(h.get("x-forwarded-for"), h.get("x-real-ip")))) {
    return { success: false, error: "짧은 시간에 너무 많이 보냈습니다. 잠시 후 다시 시도해주세요." };
  }

  const name = field(formData, "name", 50);
  const phone = field(formData, "phone", 30);
  const email = field(formData, "email", 100);
  const message = field(formData, "message", 3000, false);
  const organization = field(formData, "organization", 100);
  const lectureTopic = field(formData, "lectureTopic", 200);
  const desiredDate = field(formData, "desiredDate", 100);
  const headcount = field(formData, "headcount", 30);
  const inquiryType = field(formData, "inquiryType", 30);

  if (!name || !phone || !email || !message) {
    return { success: false, error: "필수 항목을 모두 입력해주세요." };
  }
  if (formData.get("privacy") !== "on") {
    return { success: false, error: "개인정보 수집 및 이용에 동의해주세요." };
  }
  if (!(INQUIRY_TYPES as readonly string[]).includes(inquiryType)) {
    return { success: false, error: "문의 유형을 선택해주세요." };
  }

  if (!process.env.NAVER_USER || !process.env.NAVER_PASS) {
    console.error("메일 설정 누락: NAVER_USER 또는 NAVER_PASS 환경변수가 비어 있습니다.");
    return { success: false, error: "메시지 발송에 실패했습니다. 잠시 후 다시 시도해주세요." };
  }

  // Naver SMTP: smtp.naver.com 465(SSL). `service: "naver"`는 쓰지 않습니다 —
  // nodemailer 사전 설정(587)이 아래 port/secure 값을 덮어써서 TLS 연결이 실패합니다.
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NAVER_USER, // Your Naver ID
      pass: process.env.NAVER_PASS, // Your Naver App Password
    },
  });

  const lines = [
    `문의 유형: ${inquiryType}`,
    `성함: ${name}`,
    `연락처: ${phone}`,
    `이메일: ${email}`,
  ];
  if (organization) lines.push(`소속 기관: ${organization}`);
  if (lectureTopic) lines.push(`희망 강의: ${lectureTopic}`);
  if (desiredDate) lines.push(`희망 일정: ${desiredDate}`);
  if (headcount) lines.push(`예상 인원: ${headcount}`);
  lines.push("", "내용:", message);

  const mailOptions = {
    from: process.env.NAVER_USER,
    to: process.env.RECIPIENT_EMAIL || "u2i@naver.com",
    replyTo: email,
    subject: `[Portfolio Contact][${inquiryType}] ${name}님의 문의`,
    text: lines.join("\n"),
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "메시지 발송에 실패했습니다. 잠시 후 다시 시도해주세요." };
  }
}
