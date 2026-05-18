import Topbar from "@/components/dashboard/Topbar";

export default function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" />
      <div className="p-6 max-w-2xl flex flex-col gap-6">
        <Section title="Profile">
          <Row label="Name" placeholder="Your name" />
          <Row label="Email" placeholder="you@company.com" />
        </Section>
        <Section title="Workspace">
          <Row label="Workspace name" placeholder="My orchestrations" />
          <Row label="Timezone" placeholder="Asia/Kolkata" />
        </Section>
        <Section title="API keys">
          <Row label="OpenAI key" placeholder="sk-…" />
          <Row label="Anthropic key" placeholder="sk-ant-…" />
        </Section>
        <button className="btn btn-primary self-start">Save changes</button>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl border border-line bg-[linear-gradient(180deg,rgba(14,18,38,.7),rgba(8,10,24,.45))]">
      <h3 className="font-display text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
function Row({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[.16em] text-text-dim mb-1.5">{label}</div>
      <input className="w-full bg-white/[0.03] border border-line rounded-xl px-3.5 py-3 outline-none focus:border-line-strong text-sm" placeholder={placeholder} />
    </label>
  );
}
