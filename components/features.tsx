import {
  Brain,
  Shield,
  Zap,
  Workflow,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "FIRE-Tuned AI",
    description:
      "Detects jargon like Roth IRA, 4% rule, index funds; delivers educational, authoritative tone",
  },
  {
    icon: Shield,
    title: "Compliance Guardrails",
    description:
      "Auto-flags risky phrases and suggests safe rephrasings to keep you compliant",
  },
  {
    icon: Zap,
    title: "Instant Outputs",
    description:
      "Reels/TikTok clips, X threads, LinkedIn carousels, quote graphics - ready to post",
  },
  {
    icon: Workflow,
    title: "Seamless Workflow",
    description:
      "Upload, Generate, Preview, Export in minutes - not hours",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Repurpose Like a Pro
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Purpose-built for personal finance and FIRE creators who value
            accuracy and authority.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
