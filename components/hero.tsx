import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-accent-50 dark:from-primary-950/20 dark:via-background dark:to-accent-950/20" />
      <div className="container relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium text-accent uppercase tracking-wider">
            Built for FIRE Creators
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Turn Your FIRE Podcast Episodes into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Compliant, Viral Clips
            </span>{" "}
            Automatically
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            Built for personal finance creators. Get authoritative shorts, X
            threads, LinkedIn carousels, and quote graphics with built-in
            compliance guardrails - no hype, no manual editing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <Button variant="accent" size="lg" className="text-base px-8">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="text-base px-8">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Join FIRE creators saving 10-20 hours/week
          </p>
        </div>
      </div>
    </section>
  );
}
