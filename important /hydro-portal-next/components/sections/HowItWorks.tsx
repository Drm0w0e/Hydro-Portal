import Reveal from "@/components/Reveal";

const STEPS = [
  { n: "01 / INPUT",       h: "You prompt",          p: "Type or speak a single request in plain language. Drop files for context." },
  { n: "02 / PLAN",        h: "Planner decomposes",  p: "A planner AI breaks your task into specialized subtasks across agents." },
  { n: "03 / EXECUTE",     h: "Agents execute",      p: "Frontier models run in parallel — each doing what they do best." },
  { n: "04 / SYNTHESIZE",  h: "Synthesizer merges",  p: "A final AI merges every output into one beautifully unified answer." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <Reveal><span className="eyebrow">How it works</span></Reveal>
        <Reveal delay={0.05}><h2 className="section-h2 mt-3.5">The Orchestration Engine</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-mid max-w-[640px] mx-auto text-[17px] mb-14 mt-3.5">
            A neural pipeline that turns one prompt into the combined intelligence of multiple frontier models.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <div className="relative p-6 rounded-[22px] border border-line bg-[linear-gradient(180deg,rgba(15,20,42,.7),rgba(10,14,30,.5))] backdrop-blur-md overflow-hidden hover:-translate-y-1 transition group">
              <div className="font-mono text-[12px] text-neon-cyan mb-6 tracking-[.18em]">{s.n}</div>
              <h3 className="font-display text-[20px] font-semibold mb-2">{s.h}</h3>
              <p className="text-text-mid text-[14.5px]">{s.p}</p>
              <span className="absolute -right-8 -bottom-8 w-[140px] h-[140px] rounded-full blur-2xl opacity-60"
                style={{ background: i % 2 ? "radial-gradient(circle,rgba(51,225,255,.32),transparent 70%)" : "radial-gradient(circle,rgba(122,77,255,.35),transparent 70%)" }} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
