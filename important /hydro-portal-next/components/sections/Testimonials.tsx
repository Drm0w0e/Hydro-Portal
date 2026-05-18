import Reveal from "@/components/Reveal";

const QUOTES = [
  { q: "Hydro Portal collapses what used to take my team a week into a single conversation.",
    n: "Mira Chen", r: "CTO, Neuralis", grad: "bg-neon" },
  { q: "The multi-agent orchestration feels like having a senior engineer, designer, and strategist on call 24/7.",
    n: "Daniel Kohl", r: "Founder, Vexa", grad: "bg-[linear-gradient(135deg,#33e1ff,#3a7dff)]" },
  { q: "First time I've felt the AI actually understood the full context of my request — not just the keywords.",
    n: "Aisha Verma", r: "Head of AI, Lumin Labs", grad: "bg-[linear-gradient(135deg,#c84bff,#ff4dd0)]" },
];

export default function Testimonials() {
  return (
    <section className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <Reveal><span className="eyebrow">Testimonials</span></Reveal>
        <Reveal delay={0.05}><h2 className="section-h2 mt-3.5">Loved by builders</h2></Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {QUOTES.map((t, i) => (
          <Reveal key={t.n} delay={i * 0.05}>
            <div className="p-6 rounded-[22px] border border-line bg-[linear-gradient(180deg,rgba(15,20,42,.7),rgba(10,14,30,.4))]">
              <p className="text-[16px] text-text leading-[1.55]">"{t.q}"</p>
              <div className="mt-[18px] flex items-center gap-3">
                <span className={`w-[38px] h-[38px] rounded-[10px] ${t.grad}`} />
                <div className="text-[13px]">
                  <b className="block font-semibold text-white">{t.n}</b>
                  <span className="text-text-dim text-[12px]">{t.r}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
