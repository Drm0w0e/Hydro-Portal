"use client";
import { useEffect, useState } from "react";
import { Send, Mic, Paperclip } from "lucide-react";
import Reveal from "@/components/Reveal";

const EXAMPLES = [
  "Plan a 3-day Tokyo trip with food and anime spots…",
  "Refactor my React billing component and write tests…",
  "Draft a launch plan for my fintech app and a hero image…",
  "Summarize my Slack #product channel from this week…",
];

function useTypingPlaceholder() {
  const [text, setText] = useState("");
  useEffect(() => {
    let idx = 0, pos = 0, dir: 1 | -1 = 1, t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = EXAMPLES[idx];
      if (dir === 1) {
        pos++;
        if (pos === cur.length) { dir = -1; t = setTimeout(tick, 1500); setText(cur); return; }
      } else {
        pos--;
        if (pos === 0) { dir = 1; idx = (idx + 1) % EXAMPLES.length; }
      }
      setText(cur.slice(0, pos) + "▍");
      t = setTimeout(tick, dir === 1 ? 42 : 22);
    };
    tick();
    return () => clearTimeout(t);
  }, []);
  return text;
}

export default function DemoPreview() {
  const ph = useTypingPlaceholder();
  return (
    <section id="demo" className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <Reveal><span className="eyebrow">Live demo</span></Reveal>
        <Reveal delay={0.05}><h2 className="section-h2 mt-3.5">See the orchestration in motion</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-mid max-w-[640px] mx-auto text-[17px] mb-14 mt-3.5">
            Watch one prompt fan out to six agents, run in parallel, and converge into one unified answer.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="rounded-3xl border border-line-strong bg-[linear-gradient(180deg,rgba(10,14,32,.85),rgba(6,8,20,.85))] overflow-hidden shadow-[0_50px_120px_-40px_rgba(0,0,0,.8)]">
          <div className="flex items-center gap-3.5 p-[14px_18px] border-b border-line">
            <div className="flex gap-[7px]">
              <i className="w-[11px] h-[11px] rounded-full bg-[#ff5f57] block" />
              <i className="w-[11px] h-[11px] rounded-full bg-[#febc2e] block" />
              <i className="w-[11px] h-[11px] rounded-full bg-[#28c840] block" />
            </div>
            <div className="flex-1 text-center text-text-dim font-mono text-[12px]">https://app.hydroportal.ai / workspace</div>
            <span className="font-mono text-[11px] text-text-dim">v1.0 · public preview</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_320px] min-h-[560px]">
            <aside className="hidden lg:block p-[18px] border-r border-line text-[13.5px]">
              <SideH>Workspace</SideH>
              <SideItem active dotColor="bg-neon-cyan">Orchestration</SideItem>
              <SideItem dotColor="bg-neon-violet">Agents</SideItem>
              <SideItem dotColor="bg-neon-magenta">Memory</SideItem>
              <SideItem dotColor="bg-[#5be1a6]">Integrations</SideItem>
              <SideH>Recent</SideH>
              <SideItem>Launch plan for a Mars colony…</SideItem>
              <SideItem>Refactor billing service…</SideItem>
              <SideItem>Design system audit…</SideItem>
              <SideH>Memory</SideH>
              <SideItem>Brand voice · pinned</SideItem>
              <SideItem>API keys · synced</SideItem>
            </aside>

            <div className="p-6 flex flex-col gap-3.5 bg-[radial-gradient(700px_400px_at_30%_0%,rgba(58,125,255,.10),transparent_60%)]">
              <Msg user ava="R">
                Build a launch plan for a fintech app: pricing, landing page copy, growth strategy, and the React signup component.
              </Msg>
              <Msg ava="H">
                On it. Routing to <b>Strategy</b>, <b>Design</b>, <b>Coding</b> and <b>Research</b> in parallel.
                <div className="mt-1.5 grid grid-cols-2 lg:grid-cols-3 gap-2">
                  {[
                    ["Research AI", "done"], ["Strategy AI", "done"], ["Design AI", "drafting"],
                    ["Coding AI", "building"], ["Summarizer", "queued"], ["Automation", "standby"],
                  ].map(([n, s]) => (
                    <span key={n} className="flex items-center gap-1.5 px-2.5 py-1.5 text-[12px] rounded-lg border border-line bg-[rgba(8,12,28,.6)] text-text-mid">
                      <span className={s === "done" ? "text-[#5be1a6]" : "text-neon-cyan animate-pulseSoft"}>●</span>
                      {n} · {s}
                    </span>
                  ))}
                </div>
              </Msg>
              <Msg ava="H">
                <b>Synthesized answer</b>
                <div className="text-text-mid text-[13.5px] mt-1">
                  → Pricing: 3 tiers (Free, Pro $19, Team $49)<br />
                  → Headline: "Banking that thinks for you"<br />
                  → Growth: Product Hunt launch + paid LinkedIn pilot<br />
                  → React signup component generated · <span className="font-mono text-neon-cyan">SignUp.tsx</span>
                </div>
                <span className="inline-flex gap-1 items-center mt-2">
                  <i className="w-1.5 h-1.5 rounded-full bg-neon-cyan" style={{ animation: "typingBlink 1.2s infinite" }} />
                  <i className="w-1.5 h-1.5 rounded-full bg-neon-cyan" style={{ animation: "typingBlink 1.2s infinite .15s" }} />
                  <i className="w-1.5 h-1.5 rounded-full bg-neon-cyan" style={{ animation: "typingBlink 1.2s infinite .3s" }} />
                </span>
              </Msg>

              <div className="mt-auto flex items-center gap-2 p-2.5 border border-line-strong rounded-2xl bg-[rgba(6,8,20,.75)]">
                <IconBtn><Paperclip size={16} /></IconBtn>
                <IconBtn><Mic size={16} /></IconBtn>
                <input className="flex-1 bg-transparent outline-none text-[14.5px] px-2.5 py-2" placeholder={ph} />
                <button className="w-9 h-9 rounded-[10px] grid place-items-center bg-neon text-[#04060d] shadow-[0_6px_20px_-6px_rgba(122,77,255,.7)]"><Send size={16} /></button>
              </div>
            </div>

            <aside className="hidden lg:flex p-[18px] border-l border-line flex-col gap-3.5 bg-[rgba(6,8,18,.4)]">
              <Panel title="Agent activity">
                {[
                  ["R", "Research AI", "312ms"],
                  ["S", "Strategy AI", "540ms"],
                  ["D", "Design AI", "724ms"],
                  ["C", "Coding AI", "810ms"],
                  ["∑", "Summarizer AI", "96ms"],
                  ["A", "Automation AI", "idle"],
                ].map(([g, n, l]) => (
                  <div key={n} className="flex items-center gap-2.5 text-[13px] text-[#d6dbf0] py-1.5 border-t border-dashed border-line first:border-0">
                    <div className="w-[22px] h-[22px] rounded-md bg-neon-soft grid place-items-center text-[10px] text-[#cfe1ff] border border-line-strong">{g}</div>
                    {n}<span className="ml-auto text-text-dim font-mono text-[11px]">{l}</span>
                  </div>
                ))}
              </Panel>
              <Panel title="Memory">
                <div className="text-[13px] text-text-mid leading-[1.55] space-y-1.5">
                  <p>📌 Brand voice: <i>friendly, confident, never salesy.</i></p>
                  <p>📌 Stack: Next.js + Supabase + Tailwind.</p>
                  <p>📌 Audience: India + SEA fintech early adopters.</p>
                </div>
              </Panel>
              <Panel title="Integrations">
                <div className="flex flex-wrap gap-1.5">
                  {["Slack","Notion","GitHub","Figma","Linear","Drive"].map((t) => (
                    <span key={t} className="font-mono text-[10.5px] tracking-[.08em] px-[9px] py-[5px] rounded-md border border-line-strong text-[#cfe1ff] bg-[rgba(15,30,80,.5)]">{t}</span>
                  ))}
                </div>
              </Panel>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SideH({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] tracking-[.18em] uppercase text-text-dim mt-3.5 mb-2.5 first:mt-0">{children}</div>;
}
function SideItem({ children, active, dotColor }: { children: React.ReactNode; active?: boolean; dotColor?: string }) {
  return (
    <div className={`flex items-center gap-2.5 p-[9px_10px] rounded-[10px] text-text-mid ${active ? "bg-[rgba(122,77,255,.12)] text-white" : "hover:bg-white/[0.03] hover:text-white"}`}>
      {dotColor && <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />}
      {children}
    </div>
  );
}
function Msg({ user, ava, children }: { user?: boolean; ava: string; children: React.ReactNode }) {
  return (
    <div className={`flex gap-3 items-start p-3.5 rounded-2xl max-w-[88%] text-[14.5px] ${user ? "self-end bg-[linear-gradient(135deg,rgba(58,125,255,.18),rgba(122,77,255,.16))] border border-[rgba(122,77,255,.25)] text-[#eaf0ff]" : "self-start bg-white/[0.02] border border-line text-[#dde3f5]"}`}>
      <div className="w-7 h-7 rounded-lg bg-neon grid place-items-center text-[11px] text-[#04060d] font-bold flex-shrink-0">{ava}</div>
      <div>{children}</div>
    </div>
  );
}
function IconBtn({ children }: { children: React.ReactNode }) {
  return <button className="w-9 h-9 rounded-[10px] grid place-items-center border border-line text-text-mid hover:text-white hover:border-line-strong">{children}</button>;
}
function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-3.5 rounded-2xl border border-line bg-[rgba(10,14,30,.6)]">
      <h4 className="text-[12px] tracking-[.18em] uppercase text-text-dim mb-2.5">{title}</h4>
      {children}
    </div>
  );
}
