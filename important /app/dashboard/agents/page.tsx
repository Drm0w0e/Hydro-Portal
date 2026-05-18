import Topbar from "@/components/dashboard/Topbar";
import { AGENTS } from "@/lib/agents";

export default function AgentsPage() {
  return (
    <>
      <Topbar title="Agents" />
      <div className="p-6">
        <p className="text-text-mid mb-6">Six specialized agents are active in your workspace. Toggle them off or pin them per project.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AGENTS.map((a, i) => (
            <div key={a.id} className="p-6 rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.78),rgba(8,10,24,.6))]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl grid place-items-center bg-neon-soft border border-line-strong text-lg">{a.glyph}</div>
                <span className="font-mono text-[10.5px] tracking-[.08em] px-2 py-1 rounded-md border border-line-strong text-[#cfe1ff] bg-[rgba(15,30,80,.5)]">{a.model}</span>
              </div>
              <h3 className="font-display text-lg font-semibold">{a.name}</h3>
              <p className="text-sm text-text-mid mt-1">{a.blurb}</p>
              <div className="flex items-center justify-between mt-4 text-xs text-text-dim">
                <span>● Active</span>
                <span>{(120 + i * 60)}ms avg</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
