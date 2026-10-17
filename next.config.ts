import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 인증 배지(공식 임베드 이미지)
    remotePatterns: [{ protocol: "https", hostname: "api.accredible.com" }],
  },
};

export default nextConfig;
