"use client";
import { Bell, Search } from "lucide-react";

export default function Topbar({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-line bg-[rgba(6,8,18,.4)] backdrop-blur-xl sticky top-0 z-30">
      <h1 className="font-display text-xl font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl border border-line bg-white/[0.03]">
          <Search size={14} className="text-text-dim" />
          <input className="bg-transparent outline-none text-sm w-56" placeholder="Search workspace…" />
        </div>
        <button className="w-9 h-9 grid place-items-center rounded-xl border border-line text-text-mid">
          <Bell size={16} />
        </button>
        <div className="w-9 h-9 rounded-xl bg-neon" />
      </div>
    </header>
  );
}
