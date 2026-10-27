import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { projects, type ProjectStatus } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dashboard/")({
  head: () => seo("Projects — DeployAI", "Manage your deployed AI agent projects."),
  component: Projects,
});

const tone: Record<ProjectStatus, string> = {
  Live: "bg-bento-green",
  Building: "bg-bento-copper",
  Failed: "bg-bento-pink",
  Idle: "bg-bento-graph",
};

function Projects() {
  const live = projects.filter((p) => p.status === "Live").length;
  return (
    <>
      <PageHeader title="Projects" subtitle="Updated just now" />
      <div className="grid grid-cols-12 gap-3.5">
        <div className="bento bg-bento-blue col-span-12 h-64 p-6 lg:col-span-8">
          <div className="flex justify-between"><p className="text-lg font-semibold tracking-tight">Agent fleet</p><span className="bento-chip">{live} live</span></div>
          <p className="bento-big mt-8 !text-7xl">{projects.length}<span className="ml-3 text-base font-medium opacity-60">agents deployed</span></p>
          <div className="absolute inset-x-6 bottom-6 flex h-16 items-end gap-1.5">
            {[4, 6, 5, 8, 7, 9, 6, 10, 12, 9, 11, 14, 13, 15, 12, 16, 18, 15, 19, 21].map((h, i) => (
              <span key={i} className="flex-1 rounded-full bg-foreground/80" style={{ height: `${h * 4.5}%` }} />
            ))}
          </div>
        </div>
        <Link to="/dashboard/new" className="bento-solid col-span-12 flex h-64 flex-col justify-between p-6 transition hover:brightness-105 sm:col-span-6 lg:col-span-4">
          <div className="flex justify-between"><span className="bento-cap">New project</span><ArrowUpRight /></div>
          <div>
            <Plus className="size-10" />
            <p className="mt-3 text-3xl font-light tracking-tight">Deploy an agent</p>
            <p className="mt-1 text-sm opacity-60">Repo → keys → deploy</p>
          </div>
        </Link>
        {projects.map((p) => (
          <div key={p.id} className={cn("bento col-span-12 flex h-52 flex-col p-6 sm:col-span-6 lg:col-span-4", tone[p.status])}>
            <div className="flex items-start justify-between gap-2">
              <span className="bento-cap">{p.framework}</span>
              <span className="bento-chip">{p.status}</span>
            </div>
            <p className="mt-auto truncate font-mono text-xl font-medium tracking-tight">{p.name}</p>
            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="opacity-70">Deployed {p.lastDeployed}</span>
              <Link to="/dashboard/deployments/$id" params={{ id: p.id }} className="bento-chip hover:opacity-80">View Logs →</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
