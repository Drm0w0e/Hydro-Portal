import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const PLANS = [
  { name: "Explorer", desc: "For tinkerers", price: "$0", per: "/mo",
    feats: ["50 prompts / month", "3 active agents", "Basic memory", "Community support"],
    cta: { label: "Get started", href: "/signup", primary: false } },
  { name: "Pro", desc: "For builders", price: "$29", per: "/mo", popular: true,
    feats: ["Unlimited prompts", "All 6 agents", "Long-term memory", "Voice input & file uploads", "API integrations"],
    cta: { label: "Get started", href: "/signup", primary: true } },
  { name: "Enterprise", desc: "For teams", price: "Custom", per: "",
    feats: ["Everything in Pro", "SSO & audit logs", "Private deployment", "Custom agents", "Priority support"],
    cta: { label: "Contact sales", href: "mailto:sales@hydroportal.ai", primary: false } },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-[120px] max-w-[1200px] mx-auto px-6">
      <div className="text-center">
        <Reveal><span className="eyebrow">Pricing</span></Reveal>
        <Reveal delay={0.05}><h2 className="section-h2 mt-3.5">Simple. Powerful.</h2></Reveal>
        <Reveal delay={0.1}>
          <p className="text-text-mid max-w-[640px] mx-auto text-[17px] mb-14 mt-3.5">
            Start free. Upgrade when the agents start replacing whole teams.
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div className={`relative p-7 rounded-[22px] flex flex-col gap-[18px] overflow-hidden h-full
                            ${p.popular
                              ? "border border-transparent shadow-[0_30px_80px_-30px_rgba(122,77,255,.45)] [background:linear-gradient(180deg,rgba(20,15,55,.95),rgba(10,12,30,.7))_padding-box,linear-gradient(135deg,#33e1ff,#7a4dff,#c84bff)_border-box]"
                              : "border border-line bg-[linear-gradient(180deg,rgba(15,20,42,.85),rgba(10,14,30,.55))]"}`}>
              {p.popular && (
                <span className="absolute top-3.5 right-3.5 text-[10.5px] tracking-[.16em] uppercase text-[#04060d] bg-neon px-2 py-1 rounded-md font-bold">Most popular</span>
              )}
              <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
              <p className="text-text-dim text-[13px] -mt-3">{p.desc}</p>
              <div className="font-display font-bold leading-none" style={{ fontSize: p.price === "Custom" ? 36 : 48 }}>
                {p.price}<span className="text-sm text-text-dim font-normal ml-1.5">{p.per}</span>
              </div>
              <ul className="flex-1 flex flex-col gap-2.5 text-sm text-text-mid">
                {p.feats.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start">
                    <Check size={14} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={p.cta.href} className={`btn ${p.cta.primary ? "btn-primary" : "btn-outline"} btn-lg justify-center`}>{p.cta.label}</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
