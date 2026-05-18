import Reveal from "@/components/Reveal";
import { AGENTS } from "@/lib/agents";

export default function AgentNetwork() {
  return (
    <section id="agents" className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <Reveal><span className="eyebrow">The network</span></Reveal>
        <Reveal delay={0.05}><h2 className="section-h2 mt-3.5">Six Specialized Agents</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-mid max-w-[640px] mx-auto text-[17px] mb-14 mt-3.5">
            Each agent uses the best model for its job — routed automatically by the Hydro Core.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AGENTS.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.04}>
            <div className="relative p-[26px] rounded-[22px] border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.78),rgba(8,10,24,.6))] overflow-hidden hover:-translate-y-1 hover:border-line-strong transition">
              <div className="flex items-center justify-between mb-[18px]">
                <div className="w-12 h-12 rounded-2xl grid place-items-center bg-neon-soft border border-line-strong text-[#dff1ff] font-mono text-lg">{a.glyph}</div>
                <span className="font-mono text-[10.5px] tracking-[.08em] px-[9px] py-[5px] rounded-md border border-line-strong text-[#cfe1ff] bg-[rgba(15,30,80,.5)]">{a.model}</span>
              </div>
              <h3 className="font-display text-[20px] font-semibold mb-1.5">{a.name}</h3>
              <p className="text-text-mid text-[14.5px]">{a.blurb}</p>
              <div className="h-[4px] bg-white/[0.05] rounded-[10px] mt-[18px] overflow-hidden">
                <i className="block h-full bg-neon shadow-[0_0_12px_rgba(122,77,255,.7)] animate-flow" style={{ animationDelay: `${-i * 0.4}s` }} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
