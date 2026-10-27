import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { SiteFooter, StepsSection } from "@/components/landing/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/features")({
  head: () => seo("Features — AgentForge", "Git-based agent deploys, encrypted key vault, streaming build logs and webhooks."),
  component: () => (
    <>
      <SiteNav />
      <StepsSection />
      <SiteFooter />
    </>
  ),
});
