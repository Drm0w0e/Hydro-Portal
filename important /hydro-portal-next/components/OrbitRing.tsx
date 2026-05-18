"use client";
import { AGENTS } from "@/lib/agents";

const positions = [
  "top-[6%] left-[12%]",
  "top-0 left-[55%]",
  "top-[30%] right-0",
  "bottom-[14%] right-[8%]",
  "bottom-0 left-[42%]",
  "top-[38%] left-[-2%]",
];

export default function OrbitRing() {
  return (
    <div className="relative mx-auto mt-16 w-[min(720px,92vw)] aspect-square max-h-[720px]" aria-hidden>
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="orbitLG" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#33e1ff" />
            <stop offset="50%" stopColor="#7a4dff" />
            <stop offset="100%" stopColor="#c84bff" />
          </linearGradient>
        </defs>
        {[
          "M300,300 C220,180 140,150 100,90",
          "M300,300 C310,180 350,80 360,30",
          "M300,300 C420,260 520,210 580,200",
          "M300,300 C460,360 520,460 540,510",
          "M300,300 C280,420 310,520 320,580",
          "M300,300 C160,330 60,310 10,310",
        ].map((d, i) => (
          <path key={i} d={d}
            stroke="url(#orbitLG)" strokeWidth={1.2} fill="none"
            strokeDasharray="4 6"
            style={{ animation: "dash 6s linear infinite", opacity: 0.7 }} />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-line/40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] h-[86%] rounded-full border border-dashed border-line-strong/40"
        style={{ animation: "spinSlow 50s linear reverse infinite" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[62%] h-[62%] rounded-full border border-dashed border-line-strong/40"
        style={{ animation: "spinSlow 30s linear infinite" }} />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full
        bg-[radial-gradient(circle_at_30%_30%,#fff,#7a4dff_35%,#1a0d4a_80%)]
        shadow-[0_0_60px_rgba(122,77,255,.55),0_0_120px_rgba(58,125,255,.35),inset_0_0_30px_rgba(255,255,255,.25)]
        grid place-items-center font-display font-bold text-[14px] uppercase tracking-[.18em]">
        Hydro<br/>Core
      </div>

      {AGENTS.map((a, i) => (
        <div key={a.id}
          className={`absolute ${positions[i]} flex items-center gap-[9px] px-[14px] py-[10px] rounded-full
                      bg-[rgba(10,14,32,.6)] border border-line-strong backdrop-blur-md
                      shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)] text-[13px] text-white whitespace-nowrap animate-floaty`}
          style={{ animationDelay: `${-i * 0.6}s` }}>
          <span className="w-[22px] h-[22px] rounded-[6px] grid place-items-center bg-neon-soft text-[12px] text-[#cdeaff]">{a.glyph}</span>
          {a.name}
          <span className="text-[11px] text-text-dim ml-1">{a.model}</span>
        </div>
      ))}
    </div>
  );
}
