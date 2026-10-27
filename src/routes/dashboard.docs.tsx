import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { seo } from "@/lib/seo";

const docs = ["Quickstart", "Agent entrypoints", "Environment variables", "Webhooks & triggers", "Billing & budget caps", "CLI reference"];

export const Route = createFileRoute("/dashboard/docs")({
  head: () => seo("Documentation — AgentForge", "Guides for deploying and operating AI agents on AgentForge."),
  component: () => (
    <>
      <PageHeader title="Documentation" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => <div key={d} className="rounded-xl border bg-card p-5 hover:border-primary/40"><p className="font-medium">{d}</p><p className="mt-1 text-sm text-muted-foreground">Coming soon</p></div>)}
      </div>
    </>
  ),
});
