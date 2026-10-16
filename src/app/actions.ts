"use server";

import nodemailer from "nodemailer";
import { INQUIRY_TYPES } from "@/data/inquiry";

// 폼 값을 문자열로 읽고 길이를 제한합니다. 제목 줄 주입을 막기 위해 줄바꿈은 제거할 수 있습니다.
function field(formData: FormData, key: string, max: number, singleLine = true) {
  const raw = formData.get(key);
  let value = typeof raw === "string" ? raw.trim() : "";
  if (singleLine) value = value.replace(/[\r\n]+/g, " ");
  return value.slice(0, max);
}

export async function sendEmail(formData: FormData) {
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

  // Naver SMTP: host smtp.naver.com, port 465 (SSL) or 587 (TLS)
  const transporter = nodemailer.createTransport({
    service: "naver",
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
