"use client";
import { useState, FormEvent } from "react";
import Topbar from "@/components/dashboard/Topbar";
import { Send, Mic, Paperclip } from "lucide-react";
import { AGENTS } from "@/lib/agents";

type Msg = { role: "user" | "assistant"; content: string; agents?: string[] };

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Welcome to Hydro Portal. Drop a prompt and I'll orchestrate the right agents." },
  ]);
  const [busy, setBusy] = useState(false);

  async function send(e: FormEvent) {
    e.preventDefault();
    const q = input.trim(); if (!q) return;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput(""); setBusy(true);
    try {
      const res = await fetch("/api/orchestrate", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: q }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.answer, agents: data.agents }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "The portal is busy — try again in a moment." }]);
    } finally { setBusy(false); }
  }

  return (
    <>
      <Topbar title="Orchestration" />
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] h-[calc(100vh-69px)]">
        {/* Chat column */}
        <div className="flex flex-col p-6 overflow-hidden">
          <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-2">
            {messages.map((m, i) => (
              <div key={i}
                className={`flex gap-3 items-start p-3.5 rounded-2xl max-w-[88%] text-[14.5px]
                            ${m.role === "user"
                              ? "self-end bg-[linear-gradient(135deg,rgba(58,125,255,.18),rgba(122,77,255,.16))] border border-[rgba(122,77,255,.25)]"
                              : "self-start bg-white/[0.02] border border-line"}`}>
                <div className={`w-7 h-7 rounded-lg grid place-items-center text-[11px] font-bold flex-shrink-0
                                 ${m.role === "user" ? "bg-neon text-[#04060d]" : "bg-neon-soft text-[#cfe1ff]"}`}>
                  {m.role === "user" ? "U" : "H"}
                </div>
                <div>
                  <div>{m.content}</div>
                  {m.agents && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.agents.map((a) => (
                        <span key={a} className="font-mono text-[10.5px] tracking-[.08em] px-2 py-1 rounded-md border border-line-strong text-[#cfe1ff] bg-[rgba(15,30,80,.5)]">{a}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {busy && (
              <div className="self-start text-sm text-text-mid px-2">Orchestrating agents…</div>
            )}
          </div>

          <form onSubmit={send} className="mt-4 flex items-center gap-2 p-2.5 border border-line-strong rounded-2xl bg-[rgba(6,8,20,.75)]">
            <button type="button" className="w-9 h-9 rounded-[10px] grid place-items-center border border-line text-text-mid"><Paperclip size={16} /></button>
            <button type="button" className="w-9 h-9 rounded-[10px] grid place-items-center border border-line text-text-mid"><Mic size={16} /></button>
            <input value={input} onChange={(e) => setInput(e.target.value)}
                   className="flex-1 bg-transparent outline-none text-[14.5px] px-2.5 py-2"
                   placeholder="Ask Hydro Portal anything…" />
            <button className="w-9 h-9 rounded-[10px] grid place-items-center bg-neon text-[#04060d] shadow-[0_6px_20px_-6px_rgba(122,77,255,.7)]"><Send size={16} /></button>
          </form>
        </div>

        {/* Activity column */}
        <aside className="hidden xl:flex flex-col gap-4 p-6 border-l border-line bg-[rgba(6,8,18,.35)] overflow-y-auto">
          <div className="p-4 rounded-2xl border border-line bg-[rgba(10,14,30,.6)]">
            <h4 className="text-[12px] tracking-[.18em] uppercase text-text-dim mb-3">Agent activity</h4>
            {AGENTS.map((a, i) => (
              <div key={a.id} className="flex items-center gap-2.5 text-[13px] py-1.5 border-t border-dashed border-line first:border-0">
                <div className="w-[22px] h-[22px] rounded-md bg-neon-soft grid place-items-center text-[10px] text-[#cfe1ff] border border-line-strong">{a.glyph}</div>
                {a.name}
                <span className="ml-auto text-text-dim font-mono text-[11px]">{busy ? "…" : `${120 + i * 70}ms`}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-2xl border border-line bg-[rgba(10,14,30,.6)] text-sm text-text-mid">
            <h4 className="text-[12px] tracking-[.18em] uppercase text-text-dim mb-3">Memory</h4>
            <p>📌 Brand voice pinned</p>
            <p>📌 Stack: Next.js + Supabase</p>
            <p>📌 Audience: India + SEA fintech</p>
          </div>
        </aside>
      </div>
    </>
  );
}
