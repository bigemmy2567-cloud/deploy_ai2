import type { ProjectStatus } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  Live: "text-success bg-success/10",
  Idle: "text-muted-foreground bg-muted",
  Building: "text-warning bg-warning/10",
  Failed: "text-destructive bg-destructive/10",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", styles[status])}>
      <span className={cn("size-1.5 rounded-full bg-current", (status === "Live" || status === "Building") && "animate-pulse")} />
      {status}
    </span>
  );
}
