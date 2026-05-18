"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-[18px] left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-32px))]
                    flex items-center justify-between p-[12px_14px] rounded-full
                    border border-line backdrop-blur-xl
                    bg-[linear-gradient(180deg,rgba(10,14,30,.65),rgba(10,14,30,.35))]
                    shadow-[0_10px_40px_-10px_rgba(0,0,0,.6),inset_0_1px_0_rgba(255,255,255,.05)]">
      <Link href="/" className="flex items-center gap-[10px] pl-2">
        <span className="block w-[30px] h-[30px] rounded-[9px] bg-neon relative shadow-[0_0_30px_rgba(122,77,255,.55)]
                         before:content-[''] before:absolute before:inset-[5px] before:rounded-[6px] before:bg-[#04060d]
                         before:[background-image:radial-gradient(circle_at_30%_30%,rgba(51,225,255,.9),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(200,75,255,.9),transparent_60%)]" />
        <span className="font-display font-bold tracking-[-.01em] text-[17px]">Hydro Portal</span>
      </Link>

      <div className="hidden md:flex gap-[6px] items-center">
        {[
          ["How it works", "/#how"],
          ["Agents", "/#agents"],
          ["Features", "/#features"],
          ["Pricing", "/pricing"],
          ["Donate", "/donate"],
        ].map(([label, href]) => (
          <Link key={label} href={href}
            className="px-[14px] py-[8px] rounded-full text-[13.5px] text-text-mid hover:text-white hover:bg-white/[0.04] transition">
            {label}
          </Link>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <Link href="/login" className="btn btn-ghost hidden sm:inline-flex">Sign in</Link>
        <Link href="/signup" className="btn btn-primary">Launch Portal <span aria-hidden>›</span></Link>
      </div>
    </nav>
  );
}
