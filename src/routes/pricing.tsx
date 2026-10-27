import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { PricingSection, SiteFooter } from "@/components/landing/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => seo("Pricing in Naira — AgentForge", "Pay-as-you-go agent compute billed per second in NGN."),
  component: () => (
    <>
      <SiteNav />
      <PricingSection />
      <SiteFooter />
    </>
  ),
});
