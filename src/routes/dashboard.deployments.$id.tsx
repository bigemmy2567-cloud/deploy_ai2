import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { BuildTerminal } from "@/components/terminal/BuildTerminal";
import { deployments, ngn } from "@/lib/mock-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dashboard/deployments/$id")({
  head: ({ params }) => seo(`Deployment ${params.id} — DeployAI`, "Live logs, runtime metadata and webhook for this agent deployment."),
  component: DeploymentDetail,
});

function useTimer() {
  const [s, setS] = useState(0);
  useEffect(() => { const t = setInterval(() => setS((x) => x + 1), 1000); return () => clearInterval(t); }, []);
  return `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor(s / 60) % 60).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function DeploymentDetail() {
  const { id } = Route.useParams();
  const d = deployments.find((x) => x.id === id) ?? deployments[0];
  const timer = useTimer();
  const [copied, setCopied] = useState(false);
  const webhook = `https://hooks.deployai.ng/v1/${id}/${d.name}`;

  const rows = [["Deployment ID", id], ["Runtime branch", d.branch], ["Framework", d.framework], ["Budget cap", ngn(5000)], ["Spent this run", ngn(d.cost)]];

  return (
    <>
      <PageHeader title={d.name} subtitle="Deployment detail" action={<StatusBadge status={d.status} />} />
      <div className="grid gap-3.5 lg:grid-cols-[340px_1fr]">
        <div className="space-y-3.5">
          <div className="bento bg-bento-blue p-6">
            <p className="bento-cap">Active execution</p>
            <p className="mt-1 font-mono text-5xl font-extralight tracking-tighter">{timer}</p>
            <dl className="mt-6 space-y-3 text-sm">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4"><dt className="opacity-60">{k}</dt><dd className="font-mono">{v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="bento-glass p-6">
            <p className="text-sm font-medium">Webhook URL</p>
            <p className="mt-1 text-xs text-muted-foreground">POST events here to trigger the agent.</p>
            <div className="mt-3 flex gap-2">
              <code className="min-w-0 flex-1 truncate rounded-[14px] border bg-terminal px-3 py-2 font-mono text-xs text-terminal-foreground">{webhook}</code>
              <Button size="icon" variant="outline" aria-label="Copy to clipboard" onClick={() => { navigator.clipboard.writeText(webhook); setCopied(true); toast.success("Webhook URL copied"); setTimeout(() => setCopied(false), 1500); }}>
                {copied ? <Check /> : <Copy />}
              </Button>
            </div>
          </div>
        </div>
        <BuildTerminal title={`logs — ${id}`} className="h-fit" />
      </div>
    </>
  );
}
