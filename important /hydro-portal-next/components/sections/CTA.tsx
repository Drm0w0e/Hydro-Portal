import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 my-20 mb-10">
      <Reveal>
        <div className="relative py-14 px-10 rounded-[28px] text-center border border-line-strong overflow-hidden
                        [background:linear-gradient(135deg,rgba(122,77,255,.18),rgba(58,125,255,.14)_60%,rgba(51,225,255,.12))]">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 0%, rgba(122,77,255,.3), transparent 60%)" }} />
          <h2 className="section-h2 mb-3.5">Step into the portal.</h2>
          <p className="text-text-mid max-w-[520px] mx-auto mb-6">Six agents. One mind. The fastest way to turn an idea into a shipped result.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/signup" className="btn btn-primary btn-lg">Launch Hydro Portal →</Link>
            <Link href="/donate" className="btn btn-outline btn-lg">Support development</Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
