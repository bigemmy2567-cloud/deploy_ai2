import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { HeroSection, PricingSection, SiteFooter, StepsSection } from "@/components/landing/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("AgentForge — The Vercel for AI Agents", "Deploy AI agents from GitHub in one click. Scale-to-zero compute, per-second billing in Naira."),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <HeroSection />
      <StepsSection />
      <PricingSection />
      <SiteFooter />
    </>
  );
}
