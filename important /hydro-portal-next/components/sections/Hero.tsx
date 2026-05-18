"use client";
import Link from "next/link";
import OrbitRing from "@/components/OrbitRing";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative pt-[160px] pb-20 text-center max-w-[1200px] mx-auto px-6">
      <Reveal>
        <span className="inline-flex items-center gap-[10px] px-[14px] py-[7px] text-[12px] tracking-[.06em] uppercase text-text-mid border border-line rounded-full glass">
          <span className="w-[6px] h-[6px] rounded-full bg-neon-cyan shadow-[0_0_12px_#33e1ff] animate-pulseSoft" />
          Live multi-agent orchestration · 6 specialized AIs
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="font-display font-bold tracking-[-.02em] leading-[1.05] text-[clamp(40px,7vw,86px)] my-6 mx-auto max-w-[1000px]">
          <span className="grad-text">Where Human Intelligence</span><br />
          Meets Infinite AI
        </h1>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="text-text-mid max-w-[680px] mx-auto text-[clamp(16px,1.6vw,19px)] mb-9">
          One prompt. Six specialized agents. Infinite possibility. Hydro Portal decomposes your request,
          orchestrates a network of frontier models, and merges everything into one perfect answer.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/dashboard/chat" className="btn btn-primary btn-lg">Try Live Demo →</Link>
          <Link href="/#how" className="btn btn-outline btn-lg">Watch the demo</Link>
        </div>
      </Reveal>

      <OrbitRing />
    </section>
  );
}
