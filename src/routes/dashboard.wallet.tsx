import { createFileRoute } from "@tanstack/react-router";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/dashboard/DashboardShell";
import { FinanceBento } from "@/components/ui/finance-bento";
import { financeData } from "@/components/wallet/finance-data";
import { ngn, usage } from "@/lib/mock-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dashboard/wallet")({
  head: () => seo("Wallet & Billing — DeployAI", "Naira wallet balance, Paystack funding and metered agent usage."),
  component: Wallet,
});

function Wallet() {
  return (
    <>
      <PageHeader title="Wallet & Billing" subtitle="Billed per second in ₦" />
      <div className="grid gap-3.5 lg:grid-cols-[1fr_1.4fr]">
        <div className="bento-solid p-8">
          
          <div className="relative">
            <p className="bento-cap">Active Wallet Balance</p>
            <p className="mt-2 text-6xl font-extralight tracking-tighter tabular-nums">{ngn(48250)}</p>
            <p className="mt-3 text-xs opacity-60">≈ 18.6 hours of agent compute at ₦0.72/s</p>
            <Button size="lg" className="mt-8 rounded-[14px] bg-background text-foreground hover:bg-background/85" onClick={() => toast("Paystack checkout coming soon")}>
              <CreditCard /> Fund Wallet with Paystack
            </Button>
          </div>
        </div>
        <div className="bento-glass overflow-x-auto">
          <p className="border-b px-5 py-4 font-medium">Metered usage</p>
          <table className="w-full text-sm">
            <thead className="text-left text-xs text-muted-foreground"><tr className="border-b">{["Agent", "Duration", "Cost", "Date"].map((h) => <th key={h} className="px-5 py-3 font-medium">{h}</th>)}</tr></thead>
            <tbody>
              {usage.map((u, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="px-5 py-3 font-mono">{u.agent}</td>
                  <td className="px-5 py-3 font-mono">{u.duration}</td>
                  <td className="px-5 py-3 font-mono">{ngn(u.cost)}</td>
                  <td className="px-5 py-3 text-muted-foreground">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-10">
        <FinanceBento data={financeData} title="Overview" subtitle="Updated today, 09:41" credit={false} />
      </div>
    </>
  );
}
