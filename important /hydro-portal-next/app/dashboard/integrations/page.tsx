import Topbar from "@/components/dashboard/Topbar";

const APPS = [
  { n: "Slack",   d: "Send orchestrations to channels and capture replies.", on: true },
  { n: "GitHub",  d: "Read repos, open PRs, ground Coding AI in your code.",  on: true },
  { n: "Notion",  d: "Pull pages as context, write summaries back.",          on: false },
  { n: "Figma",   d: "Hand off Design AI specs as ready-to-edit frames.",     on: false },
  { n: "Linear",  d: "Convert agent outputs into tickets automatically.",     on: true },
  { n: "Drive",   d: "Index your docs as searchable agent memory.",           on: false },
];

export default function IntegrationsPage() {
  return (
    <>
      <Topbar title="Integrations" />
      <div className="p-6">
        <p className="text-text-mid mb-6">Connect your tools so agents can read context and take action.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS.map((a) => (
            <div key={a.n} className="p-6 rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.7),rgba(8,10,24,.45))]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-lg">{a.n}</h3>
                <span className={`text-[10.5px] uppercase tracking-[.16em] px-2 py-1 rounded-md ${a.on ? "bg-[rgba(91,225,166,.16)] text-[#5be1a6]" : "bg-white/[0.04] text-text-dim border border-line"}`}>
                  {a.on ? "Connected" : "Connect"}
                </span>
              </div>
              <p className="text-sm text-text-mid">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
