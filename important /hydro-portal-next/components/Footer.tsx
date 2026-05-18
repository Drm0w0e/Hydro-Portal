export default function Footer() {
  return (
    <footer className="border-t border-line py-9 text-text-dim text-[13.5px] mt-12">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-[10px]">
          <span className="block w-6 h-6 rounded-[7px] bg-neon" />
          <span>Hydro Portal © 2026 · Where Human Intelligence Meets Infinite AI</span>
        </div>
        <div className="flex gap-[18px]">
          {["Docs", "API", "Support", "Donate", "Privacy"].map((l) => (
            <a key={l} href="#" className="hover:text-white transition">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
