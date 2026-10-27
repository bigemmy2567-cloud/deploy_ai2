import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { projects } from "@/lib/mock-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dashboard/")({
  head: () => seo("Projects — DeployAI", "Manage your deployed AI agent projects."),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle={`${projects.length} agents across your account`}
        action={<Button asChild variant="hero"><Link to="/dashboard/new"><Plus />New Project</Link></Button>}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <div key={p.id} className="rounded-xl border bg-card p-5 transition hover:border-primary/40">
            <div className="flex items-start justify-between gap-2">
              <h3 className="truncate font-mono text-sm font-medium">{p.name}</h3>
              <StatusBadge status={p.status} />
            </div>
            <span className="mt-3 inline-block rounded-md border px-2 py-0.5 text-xs text-muted-foreground">{p.framework}</span>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>Deployed {p.lastDeployed}</span>
              <Link to="/dashboard/deployments/$id" params={{ id: p.id }} className="text-primary hover:underline">View Logs →</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
