import Topbar from "@/components/dashboard/Topbar";

const ITEMS = [
  { t: "Launch plan for a fintech app", d: "Strategy · Design · Coding",   when: "Today, 9:41 AM" },
  { t: "Refactor billing service",       d: "Coding · Summarizer",          when: "Yesterday" },
  { t: "Design system audit",            d: "Design · Strategy",            when: "2 days ago" },
  { t: "Q3 strategy review",             d: "Strategy · Research",          when: "Last week" },
];

export default function HistoryPage() {
  return (
    <>
      <Topbar title="History" />
      <div className="p-6 max-w-3xl">
        <p className="text-text-mid mb-6">Every conversation, indexed and searchable.</p>
        <ul className="flex flex-col gap-2">
          {ITEMS.map((i) => (
            <li key={i.t} className="flex items-center justify-between p-4 rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.7),rgba(8,10,24,.45))]">
              <div>
                <div className="font-medium">{i.t}</div>
                <div className="text-xs text-text-dim mt-0.5">{i.d}</div>
              </div>
              <div className="text-xs text-text-dim">{i.when}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
