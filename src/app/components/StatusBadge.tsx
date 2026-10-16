import type { CredentialStatus } from "@/data/credentials";

const STYLES: Record<CredentialStatus, string> = {
  취득: "bg-emerald-100 text-emerald-900",
  "진행 중": "bg-amber-100 text-amber-900",
  예정: "bg-slate-200 text-slate-800",
};

export default function StatusBadge({ status }: { status: CredentialStatus }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${STYLES[status]}`}>{status}</span>
  );
}
