import { useEffect, useState } from "react";
import { bootLogs } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

/** Slot: swap with a 21st.dev terminal component later. */
export function BuildTerminal({
  title = "deployai — build stream",
  lines = bootLogs,
  speed = 550,
  className,
}: {
  title?: string;
  lines?: string[];
  speed?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= lines.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, lines.length, speed]);

  return (
    <div className={cn("overflow-hidden rounded-[28px] border bg-terminal font-mono text-[13px] shadow-glow", className)}>
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-3 rounded-full bg-destructive/80" />
        <span className="size-3 rounded-full bg-warning/80" />
        <span className="size-3 rounded-full bg-success/80" />
        <span className="ml-3 text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="min-h-72 space-y-1.5 p-5 text-terminal-foreground">
        {lines.slice(0, count).map((l, i) => (
          <div key={i} className={cn(l.startsWith("✓") && "text-success", l.startsWith("  ") && "text-muted-foreground")}>
            <span className="mr-3 text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
            {l}
          </div>
        ))}
        <span className="inline-block h-4 w-2 animate-blink bg-primary align-middle" />
      </div>
    </div>
  );
}
