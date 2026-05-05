"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // This is a placeholder. The user will need to provide their SMTP credentials.
  // For Naver, it's typically:
  // host: "smtp.naver.com"
  // port: 465 (SSL) or 587 (TLS)
  
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.NAVER_USER, // Your Naver ID
      pass: process.env.NAVER_PASS, // Your Naver App Password
    },
  });

  const mailOptions = {
    from: process.env.NAVER_USER,
    to: process.env.RECIPIENT_EMAIL || "u2i@naver.com",
    subject: `[Portfolio Contact] ${name}님의 문의`,
    text: `
      성함: ${name}
      연락처: ${phone}
      이메일: ${email}
      내용: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: (error as Error).message };
  }
}
