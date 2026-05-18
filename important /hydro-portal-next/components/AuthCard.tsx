"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AuthCard({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setErr(null); setLoading(true);
    const fn = mode === "login" ? supabase.auth.signInWithPassword : supabase.auth.signUp;
    const { error } = await fn({ email, password });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    router.push("/dashboard/chat");
  }

  const isLogin = mode === "login";
  return (
    <div className="min-h-screen grid place-items-center px-6 pt-[120px] pb-16">
      <div className="w-full max-w-[440px] p-8 rounded-3xl border border-line-strong glass-strong">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-7 h-7 rounded-lg bg-neon" />
          <span className="font-display font-bold text-lg">Hydro Portal</span>
        </div>
        <h1 className="font-display text-[28px] font-bold leading-tight">
          {isLogin ? "Welcome back." : "Create your portal."}
        </h1>
        <p className="text-text-mid text-sm mt-2 mb-6">
          {isLogin ? "Sign in to orchestrate your agent swarm." : "Spin up your AI orchestration workspace in 30 seconds."}
        </p>

        <form onSubmit={submit} className="flex flex-col gap-3">
          <Field label="Email">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-transparent outline-none text-sm" placeholder="you@company.com" />
          </Field>
          <Field label="Password">
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
                   className="w-full bg-transparent outline-none text-sm" placeholder="••••••••" />
          </Field>
          {err && <div className="text-sm text-neon-pink">{err}</div>}
          <button disabled={loading} className="btn btn-primary btn-lg justify-center mt-2">
            {loading ? "…" : isLogin ? "Sign in" : "Create account"}
          </button>
        </form>

        <div className="text-center text-sm text-text-mid mt-5">
          {isLogin ? (
            <>New here? <Link href="/signup" className="text-white underline">Create an account</Link></>
          ) : (
            <>Already have one? <Link href="/login" className="text-white underline">Sign in</Link></>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-[11px] uppercase tracking-[.16em] text-text-dim mb-1.5">{label}</div>
      <div className="px-3.5 py-3 rounded-xl border border-line bg-white/[0.03] focus-within:border-line-strong transition">
        {children}
      </div>
    </label>
  );
}
