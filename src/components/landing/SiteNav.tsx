import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-6">
        <Link to="/"><Logo /></Link>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/features" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>Features</Link>
          <Link to="/pricing" className="hover:text-foreground" activeProps={{ className: "text-foreground" }}>Pricing</Link>
        </nav>
        <Button asChild variant="hero" className="ml-auto">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </header>
  );
}
