/**
 * Supabase stub.
 *
 * When you're ready to wire real auth/data:
 *   1. Fill NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 *   2. Uncomment the real client below
 *   3. Replace the stub methods used in (auth) pages and dashboard with real calls
 */
// import { createClient } from "@supabase/supabase-js";
//
// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

export const supabase = {
  auth: {
    async signInWithPassword(_: { email: string; password: string }) {
      return { data: { user: { id: "stub-user" } }, error: null };
    },
    async signUp(_: { email: string; password: string }) {
      return { data: { user: { id: "stub-user" } }, error: null };
    },
    async signOut() { return { error: null }; },
  },
};
