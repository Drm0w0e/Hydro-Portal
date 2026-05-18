"use client";
import { Mic, MessageSquare, Search, MoreVertical, Cpu, User } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function MobileMockup() {
  return (
    <section className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <Reveal>
          <div className="text-center lg:text-left">
            <span className="eyebrow">Mobile app</span>
            <h2 className="section-h2 mt-3.5">Carry your agent swarm in your pocket.</h2>
            <p className="text-text-mid max-w-[560px] text-[17px] my-3.5">
              A native iOS &amp; Android experience built for one-handed orchestration — voice, chat,
              and live agent activity in a single fluid interface.
            </p>
            <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
              <a className="btn btn-outline btn-lg"> App Store</a>
              <a className="btn btn-outline btn-lg">▶ Google Play</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex justify-center [perspective:1200px]">
            <div className="absolute -inset-10 rounded-[60px] blur-2xl -z-10"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(122,77,255,.25), transparent 60%)" }} />
            <div className="w-[330px] h-[670px] rounded-[46px] p-3.5 relative
                            bg-[linear-gradient(180deg,#13182e,#06080f)]
                            border border-[rgba(140,180,255,.25)]
                            shadow-[0_50px_100px_-30px_rgba(0,0,0,.8),0_0_60px_-10px_rgba(122,77,255,.4)]
                            [transform:rotateY(-8deg)_rotateX(4deg)] [transform-style:preserve-3d]">
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[120px] h-7 rounded-2xl bg-black border border-[#1a1f33] z-10" />
              <div className="w-full h-full rounded-[34px] overflow-hidden bg-bg-0 relative flex flex-col">
                <div className="h-11" />
                <div className="p-[18px_16px_8px] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-[34px] h-[34px] rounded-[10px] bg-neon shadow-[0_0_20px_rgba(122,77,255,.6)]" />
                    <div>
                      <div className="font-semibold text-sm">Hydro Portal</div>
                      <div className="text-[11px] text-neon-cyan">● Orchestrating · 6 agents</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <PhoneIcon><Search size={14} /></PhoneIcon>
                    <PhoneIcon><MoreVertical size={14} /></PhoneIcon>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden px-3.5 flex flex-col gap-2.5">
                  <Bubble u>Plan a 3-day Tokyo trip with food, anime spots and a dawn walk.<br /><span className="block text-[10px] text-text-dim mt-0.5">9:41 AM</span></Bubble>
                  <Bubble>Routing to Research + Strategy AI…</Bubble>
                  <div className="self-start flex gap-1.5 flex-wrap mt-0.5">
                    {["Research", "Strategy", "Summarizer"].map((t) => (
                      <span key={t} className="text-[9.5px] tracking-[.06em] px-1.5 py-1 rounded-md bg-[rgba(58,125,255,.16)] border border-[rgba(122,77,255,.3)] text-[#cfe1ff]">{t}</span>
                    ))}
                  </div>
                  <Bubble>
                    <b>Day 1 · Shibuya immersion</b><br />
                    7am Yoyogi Park · 11am Nakano Broadway · 8pm omakase at Sushi Sho.
                    <span className="block text-[10px] text-text-dim mt-0.5">via Strategy + Research AI</span>
                  </Bubble>
                </div>

                <div className="mx-3 my-3.5 p-2 pl-3.5 bg-white/[0.04] border border-line rounded-3xl flex items-center gap-2">
                  <input className="flex-1 bg-transparent outline-none text-[13px]" placeholder="Ask anything…" />
                  <button className="w-[34px] h-[34px] rounded-full grid place-items-center bg-neon text-[#04060d]"
                    style={{ animation: "micPulse 2.4s ease-in-out infinite" }}>
                    <Mic size={14} />
                  </button>
                </div>

                <div className="flex justify-around py-2.5 px-2 border-t border-line bg-[rgba(6,8,16,.6)]">
                  <Nv active label="Chat"><MessageSquare size={18} /></Nv>
                  <Nv label="Agents"><Cpu size={18} /></Nv>
                  <Nv label="Voice"><Mic size={18} /></Nv>
                  <Nv label="Me"><User size={18} /></Nv>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhoneIcon({ children }: { children: React.ReactNode }) {
  return <button className="w-8 h-8 rounded-[10px] bg-white/[0.04] border border-line grid place-items-center text-text-mid">{children}</button>;
}
function Bubble({ u, children }: { u?: boolean; children: React.ReactNode }) {
  return (
    <div className={`text-[12px] px-3 py-2 max-w-[80%] leading-[1.4] ${u ? "self-end bg-[linear-gradient(135deg,#3a7dff,#7a4dff)] text-white rounded-[14px_14px_4px_14px]" : "self-start bg-white/[0.05] border border-line text-[#dde3f5] rounded-[14px_14px_14px_4px]"}`}>
      {children}
    </div>
  );
}
function Nv({ children, label, active }: { children: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 text-[10px] px-2 py-1 rounded-lg ${active ? "text-white bg-[rgba(122,77,255,.16)]" : "text-text-dim"}`}>
      {children}{label}
    </div>
  );
}
