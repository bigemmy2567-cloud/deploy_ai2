import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Github, Rocket, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { repositories } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dashboard/new")({
  head: () => seo("New Project — DeployAI", "Deploy a new AI agent from GitHub."),
  component: NewProject,
});

const field = "w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary";

function StepCard({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border bg-card p-6">
      <h2 className="mb-4 flex items-center gap-3 font-medium">
        <span className="grid size-6 place-items-center rounded-full bg-primary/15 font-mono text-xs text-primary">{n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function NewProject() {
  const [q, setQ] = useState("");
  const [repo, setRepo] = useState(repositories[0].name);
  const [entry, setEntry] = useState("agent.py");
  const navigate = useNavigate();
  const list = repositories.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="max-w-3xl space-y-6">
      <PageHeader title="New Project" subtitle="Three steps to a live agent." />
      <StepCard n="A" title="Select a repository">
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground"><Github className="size-4" /> Connected as <span className="text-foreground">@leats</span></div>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search repositories..." className={cn(field, "pl-9")} />
        </div>
        <div className="divide-y rounded-md border">
          {list.map((r) => (
            <button
              key={r.name}
              onClick={() => { setRepo(r.name); setEntry(r.lang === "Python" ? "agent.py" : "index.ts"); }}
              className={cn("flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-accent", repo === r.name && "bg-primary/10")}
            >
              <span className="font-mono">{r.name}</span>
              <span className="flex items-center gap-3 text-xs text-muted-foreground">{r.lang} · {r.updated}{repo === r.name && <Check className="size-4 text-primary" />}</span>
            </button>
          ))}
        </div>
      </StepCard>
      <StepCard n="B" title="Environment variables">
        <div className="grid gap-4">
          <label className="grid gap-1.5 text-xs font-mono text-muted-foreground">LLM_PROVIDER
            <select className={field}><option>OpenAI</option><option>Anthropic</option><option>DeepSeek</option><option>OpenRouter</option></select>
          </label>
          <label className="grid gap-1.5 text-xs font-mono text-muted-foreground">LLM_API_KEY
            <input type="password" placeholder="sk-••••••••••••" className={field} />
          </label>
          <label className="grid gap-1.5 text-xs font-mono text-muted-foreground">AGENT_ENTRYPOINT
            <input value={entry} onChange={(e) => setEntry(e.target.value)} className={field} />
          </label>
        </div>
      </StepCard>
      <StepCard n="C" title="Deploy">
        <Button variant="hero" size="xl" className="w-full" onClick={() => navigate({ to: "/dashboard/deployments/$id", params: { id: "dep_7f3a91" } })}>
          <Rocket /> Click to Deploy Agent
        </Button>
      </StepCard>
    </div>
  );
}
