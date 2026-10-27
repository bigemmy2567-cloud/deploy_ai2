import { Link } from "@tanstack/react-router";
import { Check, GitBranch, KeyRound, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuildTerminal } from "@/components/terminal/BuildTerminal";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 text-center">
        <span className="rounded-full border px-3 py-1 font-mono text-xs text-primary">Scale-to-zero · Billed in ₦</span>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-tighter md:text-7xl">
          The Vercel for AI Agents.
          <span className="block text-muted-foreground">Connect your GitHub, inject your keys, click deploy.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Scale-to-zero compute means you never pay for idle agents. Per-second billing in Naira — built for African developers, payable with Paystack.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button asChild variant="hero" size="xl"><Link to="/dashboard/new">Deploy an agent</Link></Button>
          <Button asChild variant="outline" size="xl"><Link to="/pricing">See pricing</Link></Button>
        </div>
        {/* Slot: Instant Agent Build Streamer Terminal */}
        <BuildTerminal className="mx-auto mt-16 max-w-3xl text-left" />
      </div>
    </section>
  );
}

const steps = [
  { icon: GitBranch, title: "Pull Git Repo", body: "Pick any repository from your connected GitHub account." },
  { icon: KeyRound, title: "Add LLM API Keys", body: "OpenAI, Anthropic, DeepSeek or OpenRouter — encrypted at rest." },
  { icon: Rocket, title: "Click Deploy", body: "Your agent is live with a webhook URL in seconds." },
];

export function StepsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight">Three steps. Zero DevOps.</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="group rounded-xl border bg-card p-6 transition hover:border-primary/50 hover:shadow-glow">
            <div className="flex items-center justify-between">
              <s.icon className="size-6 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">STEP 0{i + 1}</span>
            </div>
            <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const tiers = [
  { name: "Hobby", price: "₦0", unit: "/month", desc: "For tinkering", features: ["2 agents", "10k execution-seconds", "Community support"] },
  { name: "Pay-as-you-go", price: "₦0.72", unit: "/second", desc: "Billed per second of agent execution", features: ["Unlimited agents", "Scale-to-zero", "Capped run budgets", "Fund with Paystack"], highlight: true },
  { name: "Team", price: "₦45,000", unit: "/month", desc: "For growing teams", features: ["Includes 80k seconds", "Shared API vault", "Priority support"] },
];

export function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight">Pay for compute, not idle time.</h2>
      <p className="mt-2 text-muted-foreground">All prices in Nigerian Naira (NGN).</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={cn("flex flex-col rounded-xl border bg-card p-6", t.highlight && "border-primary shadow-glow")}>
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{t.name}</h3>
              {t.highlight && <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">Popular</span>}
            </div>
            <p className="mt-4"><span className="font-mono text-4xl font-semibold">{t.price}</span><span className="text-muted-foreground">{t.unit}</span></p>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {t.features.map((f) => <li key={f} className="flex gap-2"><Check className="size-4 text-primary" />{f}</li>)}
            </ul>
            <Button asChild variant={t.highlight ? "hero" : "outline"} className="mt-6"><Link to="/dashboard">Get started</Link></Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return <footer className="border-t py-10 text-center text-sm text-muted-foreground">© 2026 AgentForge · Made in Lagos</footer>;
}
