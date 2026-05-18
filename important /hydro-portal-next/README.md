# Hydro Portal

> Where Human Intelligence Meets Infinite AI.

A futuristic AI orchestration platform: one prompt fans out to six specialized agents (Research, Coding, Design, Strategy, Summarizer, Automation), which run in parallel and merge into a single unified answer.

## Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS + Framer Motion
- Supabase (stubbed client — wire up when ready)
- Deploys cleanly to Vercel

## Quick start
```bash
cp .env.local.example .env.local
npm install
npm run dev
```
Then open http://localhost:3000

## Project layout
```
app/
  page.tsx                  Landing
  (auth)/login, signup      Auth pages (stub)
  pricing, donate           Marketing
  dashboard/                Authenticated app shell
    chat, agents, memory, integrations, history, settings
  api/orchestrate/route.ts  Fake orchestration endpoint
components/                 Shared UI + dashboard widgets
lib/                        Supabase client, agents config, utils
```

## Wiring real backends later
- Add your Supabase keys to `.env.local`
- Replace the stub in `lib/supabase.ts` with real auth flows
- Replace `app/api/orchestrate/route.ts` with calls to OpenAI / Anthropic / Google

## Deploy
```bash
vercel
```
Set the same env vars in Vercel project settings. Done.
