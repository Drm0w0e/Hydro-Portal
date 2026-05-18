export type Agent = {
  id: string;
  name: string;
  short: string;
  model: string;
  blurb: string;
  glyph: string; // single character glyph used in chips
};

export const AGENTS: Agent[] = [
  { id: "research",   name: "Research AI",   short: "R", model: "Gemini 2.5",   glyph: "R",
    blurb: "Gathers facts, data & insights from across the web and your knowledge base." },
  { id: "coding",     name: "Coding AI",     short: "C", model: "Sonnet 4.5",   glyph: "C",
    blurb: "Writes, reviews, and refactors production code across any language." },
  { id: "design",     name: "Design AI",     short: "D", model: "GPT-4o",       glyph: "D",
    blurb: "UX, visual systems & brand identity. Generates Figma-ready specs." },
  { id: "strategy",   name: "Strategy AI",   short: "S", model: "Sonnet 4.5",   glyph: "S",
    blurb: "Business planning, market analysis, and roadmap synthesis." },
  { id: "summarizer", name: "Summarizer AI", short: "∑", model: "Gemini 2.5",   glyph: "∑",
    blurb: "Distills documents, threads, and meetings into crisp briefs." },
  { id: "automation", name: "Automation AI", short: "A", model: "GPT-4o",       glyph: "A",
    blurb: "Workflows & integrations — connects your stack and runs jobs." },
];
