"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, Cpu, Brain, Plug, History, Settings, Heart, LogOut } from "lucide-react";

const ITEMS = [
  { href: "/dashboard/chat",         label: "Chat",         icon: MessageSquare },
  { href: "/dashboard/agents",       label: "Agents",       icon: Cpu },
  { href: "/dashboard/memory",       label: "Memory",       icon: Brain },
  { href: "/dashboard/integrations", label: "Integrations", icon: Plug },
  { href: "/dashboard/history",      label: "History",      icon: History },
  { href: "/dashboard/settings",     label: "Settings",     icon: Settings },
];

export default function Sidebar() {
  const p = usePathname();
  return (
    <aside className="hidden lg:flex w-[260px] flex-col gap-2 p-5 border-r border-line h-screen sticky top-0 bg-[rgba(6,8,18,.55)] backdrop-blur-xl">
      <Link href="/" className="flex items-center gap-2.5 mb-6">
        <span className="w-8 h-8 rounded-[10px] bg-neon shadow-[0_0_20px_rgba(122,77,255,.6)]" />
        <span className="font-display font-bold">Hydro Portal</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {ITEMS.map(({ href, label, icon: I }) => {
          const active = p === href || p.startsWith(href + "/");
          return (
            <Link key={href} href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition
                          ${active ? "bg-[rgba(122,77,255,.16)] text-white border border-line-strong"
                                   : "text-text-mid hover:text-white hover:bg-white/[0.04]"}`}>
              <I size={16} /> {label}
            </Link>
          );
        })}
      </nav>

      <Link href="/donate" className="mt-auto flex items-center gap-2 p-3 rounded-xl border border-line-strong bg-neon-soft text-sm">
        <Heart size={14} /> Support development
      </Link>
      <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-text-mid hover:text-white">
        <LogOut size={16} /> Sign out
      </Link>
    </aside>
  );
}
