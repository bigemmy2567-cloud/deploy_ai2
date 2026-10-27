export type ProjectStatus = "Live" | "Idle" | "Building" | "Failed";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  lastDeployed: string;
  framework: string;
  branch: string;
}

export const projects: Project[] = [
  { id: "dep_7f3a91", name: "lagos-support-bot", status: "Live", lastDeployed: "2 min ago", framework: "CrewAI", branch: "main" },
  { id: "dep_2b8c04", name: "invoice-extractor", status: "Building", lastDeployed: "just now", framework: "LangChain", branch: "feat/ocr" },
  { id: "dep_9d1e55", name: "naija-news-digest", status: "Idle", lastDeployed: "3 hours ago", framework: "Vercel AI SDK", branch: "main" },
  { id: "dep_4c6f22", name: "fx-rate-watcher", status: "Live", lastDeployed: "yesterday", framework: "LangChain", branch: "main" },
  { id: "dep_0a7b13", name: "lead-qualifier", status: "Failed", lastDeployed: "2 days ago", framework: "CrewAI", branch: "dev" },
  { id: "dep_5e2d88", name: "whatsapp-concierge", status: "Idle", lastDeployed: "5 days ago", framework: "Vercel AI SDK", branch: "main" },
];

export const repositories = [
  { name: "leats/lagos-support-bot", lang: "Python", updated: "2h ago" },
  { name: "leats/invoice-extractor", lang: "Python", updated: "1d ago" },
  { name: "leats/whatsapp-concierge", lang: "TypeScript", updated: "3d ago" },
  { name: "leats/research-crew", lang: "Python", updated: "1w ago" },
  { name: "leats/sales-copilot", lang: "TypeScript", updated: "2w ago" },
  { name: "leats/pdf-summarizer", lang: "Python", updated: "1mo ago" },
];

export const deployments = projects.map((p, i) => ({
  ...p,
  duration: ["4m 12s", "1m 03s", "12m 40s", "2m 55s", "0m 18s", "6m 21s"][i],
  cost: [182.4, 46.2, 548.0, 126.1, 13.0, 274.5][i],
}));

export const usage = [
  { agent: "lagos-support-bot", duration: "42m 18s", cost: 1827.0, date: "Oct 27, 2026" },
  { agent: "fx-rate-watcher", duration: "18m 05s", cost: 781.5, date: "Oct 26, 2026" },
  { agent: "invoice-extractor", duration: "7m 52s", cost: 340.0, date: "Oct 26, 2026" },
  { agent: "naija-news-digest", duration: "1h 04m", cost: 2764.8, date: "Oct 25, 2026" },
  { agent: "whatsapp-concierge", duration: "23m 40s", cost: 1022.4, date: "Oct 24, 2026" },
  { agent: "lead-qualifier", duration: "0m 18s", cost: 13.0, date: "Oct 23, 2026" },
];

export const bootLogs = [
  "→ Cloning repository leats/lagos-support-bot@main...",
  "✓ Repository cloned (1.2 MB, 84 files)",
  "→ Analyzing dependencies...",
  "  found requirements.txt · crewai==0.80 · openai==1.54",
  "✓ Python environment verified (3.12.4)",
  "→ Installing packages from cache...",
  "✓ Injected OpenAI Credentials (LLM_API_KEY •••• 9f2c)",
  "→ Booting container on edge region lagos-1...",
  "✓ Health check passed in 312ms",
  "✓ Agent initialized successfully and listening for triggers...",
];

export const ngn = (n: number) =>
  "₦" + n.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
