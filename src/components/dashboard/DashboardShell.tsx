import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BookOpen, FolderKanban, History, KeyRound, Wallet } from "lucide-react";
import { Logo } from "@/components/landing/Logo";

const nav = [
  { to: "/dashboard", label: "Projects", icon: FolderKanban, exact: true },
  { to: "/dashboard/deployments", label: "Deployment History", icon: History },
  { to: "/dashboard/vault", label: "Global API Vault", icon: KeyRound },
  { to: "/dashboard/wallet", label: "Wallet & Billing", icon: Wallet },
  { to: "/dashboard/docs", label: "Documentation", icon: BookOpen },
] as const;

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r bg-sidebar p-4 md:flex">
        <Link to="/" className="px-2 py-3"><Logo /></Link>
        <nav className="mt-6 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: "exact" in n }}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              activeProps={{ className: "bg-sidebar-accent !text-sidebar-foreground" }}
            >
              <n.icon className="size-4" />{n.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto rounded-lg border p-3 text-xs text-muted-foreground">
          Wallet <span className="block font-mono text-base text-foreground">₦48,250.00</span>
        </div>
      </aside>
      <main className="min-w-0 flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
