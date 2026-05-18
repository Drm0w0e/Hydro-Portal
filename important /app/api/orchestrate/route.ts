import { NextRequest, NextResponse } from "next/server";

/**
 * Fake orchestration endpoint.
 *
 * Wire-up later:
 *   1. Replace the body with calls to your LLM provider(s) (OpenAI, Anthropic, Google).
 *   2. Use a planner prompt to decide which agents to invoke.
 *   3. Run agent calls in Promise.all and synthesize results with a final model.
 */
export async function POST(req: NextRequest) {
  const { prompt } = (await req.json()) as { prompt?: string };
  if (!prompt) return NextResponse.json({ error: "Missing prompt" }, { status: 400 });

  // simulated thinking time
  await new Promise((r) => setTimeout(r, 900));

  const lower = prompt.toLowerCase();
  const agents: string[] = [];
  if (/(plan|launch|strategy|market)/.test(lower)) agents.push("Strategy AI");
  if (/(design|brand|logo|ui|landing)/.test(lower)) agents.push("Design AI");
  if (/(code|react|component|api|refactor|bug)/.test(lower)) agents.push("Coding AI");
  if (/(research|find|data|stat|trend)/.test(lower)) agents.push("Research AI");
  if (/(summari[sz]e|recap|brief)/.test(lower)) agents.push("Summarizer AI");
  if (/(automate|workflow|integrat|connect)/.test(lower)) agents.push("Automation AI");
  if (agents.length === 0) agents.push("Research AI", "Summarizer AI");

  const answer =
    `Routed to ${agents.join(", ")}. ` +
    `Here is the synthesized response for: "${prompt.slice(0, 120)}". ` +
    `Connect a real LLM in app/api/orchestrate/route.ts to make this live.`;

  return NextResponse.json({ answer, agents });
}
