import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/landing/Logo";

const nav = [
  { to: "/dashboard", label: "Projects", exact: true },
  { to: "/dashboard/deployments", label: "Deployments" },
  { to: "/dashboard/vault", label: "API Vault" },
  { to: "/dashboard/wallet", label: "Wallet" },
  { to: "/dashboard/docs", label: "Docs" },
] as const;

/** Bento-style shell: matches the FinanceBento top bar (title row + segmented control). */
export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
          <Link to="/"><Logo /></Link>
          <nav className="bento-seg order-3 w-full overflow-x-auto sm:order-none sm:ml-auto sm:w-auto">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: "exact" in n }}
                className="flex h-7 items-center whitespace-nowrap rounded-[11px] px-3 text-[12.5px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "bg-foreground !text-background" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <span className="bento-seg ml-auto px-3 py-1 font-mono text-xs sm:ml-0">₦48,250.00</span>
        </div>
      </header>
      <main className="mx-auto max-w-[1320px] px-4 pb-16 pt-4 sm:px-6">{children}</main>
    </div>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <h1 className="flex-1 text-[28px] font-bold tracking-[-0.03em]">
        {title}
        {subtitle && <span className="ml-3 text-[15px] font-medium tracking-tight text-muted-foreground">{subtitle}</span>}
      </h1>
      {action}
    </div>
  );
}
