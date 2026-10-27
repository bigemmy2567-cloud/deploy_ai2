import { createFileRoute } from "@tanstack/react-router";
import { KeyRound } from "lucide-react";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { seo } from "@/lib/seo";

const keys = [
  { name: "OPENAI_API_KEY", provider: "OpenAI", used: 4 },
  { name: "ANTHROPIC_API_KEY", provider: "Anthropic", used: 2 },
  { name: "DEEPSEEK_API_KEY", provider: "DeepSeek", used: 1 },
];

export const Route = createFileRoute("/dashboard/vault")({
  head: () => seo("Global API Vault — DeployAI", "Encrypted LLM keys shared across your agents."),
  component: () => (
    <>
      <PageHeader title="Global API Vault" subtitle="Keys are encrypted and injected at runtime." />
      <div className="grid gap-3">
        {keys.map((k) => (
          <div key={k.name} className="flex items-center gap-4 rounded-xl border bg-card p-4">
            <KeyRound className="size-5 text-primary" />
            <div className="flex-1"><p className="font-mono text-sm">{k.name}</p><p className="text-xs text-muted-foreground">{k.provider} · used by {k.used} agents</p></div>
            <span className="font-mono text-xs text-muted-foreground">••••••••••••</span>
          </div>
        ))}
      </div>
    </>
  ),
});
