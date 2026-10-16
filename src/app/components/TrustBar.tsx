import { TRUST_ITEMS } from "@/data/site";

export default function TrustBar() {
  return (
    <section aria-label="신뢰 지표" className="bg-[#002147] text-white">
      <ul className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-center text-sm md:text-base font-bold">
        {TRUST_ITEMS.map((item) => (
          <li key={item.label} className="flex items-center justify-center">
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
