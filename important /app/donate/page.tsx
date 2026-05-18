import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Heart } from "lucide-react";

export const metadata = { title: "Support · Hydro Portal" };

const AMOUNTS = [5, 15, 50, 100];

export default function DonatePage() {
  return (
    <>
      <Nav />
      <main className="pt-[160px] pb-24 max-w-[900px] mx-auto px-6 text-center">
        <Reveal>
          <span className="eyebrow">Support the build</span>
          <h1 className="font-display font-bold text-[clamp(36px,5vw,64px)] mt-3.5 grad-text">Fuel the portal.</h1>
          <p className="text-text-mid text-[17px] max-w-[600px] mx-auto mt-3.5">
            Hydro Portal is built by a small team chasing a big idea. Every contribution goes directly to
            inference costs, agent R&amp;D, and keeping the free tier alive.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {AMOUNTS.map((a) => (
              <button key={a} className="p-6 rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(15,20,42,.7),rgba(10,14,30,.4))]
                                         hover:border-line-strong hover:-translate-y-0.5 transition">
                <div className="font-display text-3xl font-bold">${a}</div>
                <div className="text-text-dim text-xs mt-2">{a < 50 ? "Buy us coffee" : "Power a launch"}</div>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a className="btn btn-primary btn-lg"><Heart size={16} /> Sponsor monthly</a>
            <a className="btn btn-outline btn-lg">One-time gift</a>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
