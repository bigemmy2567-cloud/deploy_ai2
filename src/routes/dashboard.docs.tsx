import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { seo } from "@/lib/seo";

const tones = ["bg-bento-blue", "bg-bento-green", "bg-bento-copper", "bg-bento-pink", "bg-bento-graph", "bg-bento-lime"];
const docs = ["Quickstart", "Agent entrypoints", "Environment variables", "Webhooks & triggers", "Billing & budget caps", "CLI reference"];

export const Route = createFileRoute("/dashboard/docs")({
  head: () => seo("Documentation — DeployAI", "Guides for deploying and operating AI agents on DeployAI."),
  component: () => (
    <>
      <PageHeader title="Documentation" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d, i) => <div key={d} className={`bento h-40 p-6 ${tones[i % tones.length]}`}><p className="text-lg font-semibold tracking-tight">{d}</p><p className="mt-1 text-sm opacity-60">Coming soon</p></div>)}
      </div>
    </>
  ),
});
