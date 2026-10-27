import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { deployments, ngn } from "@/lib/mock-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dashboard/deployments/")({
  head: () => seo("Deployment History — DeployAI", "Every agent deployment, its status, duration and cost."),
  component: () => (
    <>
      <PageHeader title="Deployment History" />
      <div className="overflow-x-auto rounded-xl border bg-card">
        <table className="w-full text-sm">
          <thead className="text-left text-xs text-muted-foreground"><tr className="border-b">{["ID", "Agent", "Status", "Branch", "Duration", "Cost", ""].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr></thead>
          <tbody>
            {deployments.map((d) => (
              <tr key={d.id} className="border-b last:border-0 hover:bg-accent/50">
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{d.id}</td>
                <td className="px-4 py-3 font-mono">{d.name}</td>
                <td className="px-4 py-3"><StatusBadge status={d.status} /></td>
                <td className="px-4 py-3 font-mono text-xs">{d.branch}</td>
                <td className="px-4 py-3 font-mono">{d.duration}</td>
                <td className="px-4 py-3 font-mono">{ngn(d.cost)}</td>
                <td className="px-4 py-3 text-right"><Link to="/dashboard/deployments/$id" params={{ id: d.id }} className="text-primary hover:underline">Open</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ),
});
