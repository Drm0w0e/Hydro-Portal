import Topbar from "@/components/dashboard/Topbar";
import { Pin } from "lucide-react";

const MEM = [
  { k: "Brand voice",      v: "Friendly, confident, never salesy." },
  { k: "Tech stack",       v: "Next.js + Supabase + Tailwind." },
  { k: "Audience",         v: "India + SEA fintech early adopters." },
  { k: "Founder identity", v: "Roshan — Bangalore-based, building Hydro Portal." },
];

export default function MemoryPage() {
  return (
    <>
      <Topbar title="Memory" />
      <div className="p-6 max-w-3xl">
        <p className="text-text-mid mb-6">Pinned facts the agents will remember across every session.</p>
        <div className="flex flex-col gap-3">
          {MEM.map((m) => (
            <div key={m.k} className="flex items-start gap-3 p-4 rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.7),rgba(8,10,24,.45))]">
              <Pin size={16} className="text-neon-cyan mt-1" />
              <div>
                <div className="text-xs uppercase tracking-[.14em] text-text-dim">{m.k}</div>
                <div className="text-[15px] mt-1">{m.v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
