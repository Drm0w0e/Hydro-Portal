import Reveal from "@/components/Reveal";
import { Brain, Mic, Upload, MessageSquare, Globe2, Lock } from "lucide-react";

const FEATS = [
  { I: Brain,         h: "AI Memory",        p: "Persistent context across sessions. Pin facts, projects, and personas." },
  { I: Mic,           h: "Voice Input",      p: "Speak naturally — Whisper transcription, near-zero latency." },
  { I: Upload,        h: "File Upload",      p: "PDF, image, code or CSV — agents read everything for context." },
  { I: MessageSquare, h: "Chat History",     p: "Every conversation indexed, searchable, and exportable." },
  { I: Globe2,        h: "API Integrations", p: "Slack, GitHub, Notion, Figma, Linear, Drive. Add your own." },
  { I: Lock,          h: "Private & Secure", p: "End-to-end encrypted, SOC2-ready. Your data stays yours." },
];

export default function Features() {
  return (
    <section id="features" className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <Reveal><span className="eyebrow">Capabilities</span></Reveal>
        <Reveal delay={0.05}><h2 className="section-h2 mt-3.5">Built for the future</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-mid max-w-[640px] mx-auto text-[17px] mb-14 mt-3.5">
            Every layer engineered for speed, privacy, and the long arc of agentic intelligence.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATS.map(({ I, h, p }, i) => (
          <Reveal key={h} delay={i * 0.04}>
            <div className="p-6 rounded-[22px] border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.7),rgba(8,10,24,.45))] hover:-translate-y-0.5 hover:border-line-strong transition">
              <div className="w-[42px] h-[42px] rounded-xl grid place-items-center bg-neon-soft border border-line-strong text-[#cfe1ff] mb-4"><I size={22} /></div>
              <h3 className="font-display text-[18px] font-semibold mb-1.5">{h}</h3>
              <p className="text-text-mid text-[14px]">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
