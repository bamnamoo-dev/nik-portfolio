import type { CredentialStatus } from "@/data/credentials";

// 색 점 + 글자로 상태를 표시합니다.
const DOT: Record<CredentialStatus, string> = {
  취득: "bg-[#30d158]",
  "진행 중": "bg-[#ff9f0a]",
  예정: "bg-[#aeaeb2]",
};

export default function StatusBadge({ status }: { status: CredentialStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-body whitespace-nowrap">
      <span className={`w-1.5 h-1.5 rounded-full ${DOT[status]}`} aria-hidden="true"></span>
      {status}
    </span>
  );
}
