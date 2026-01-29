import { Upload, Search, Eye, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Episode",
    description: "Drop your podcast file or paste a link - we handle the rest",
  },
  {
    number: "02",
    icon: Search,
    title: "AI Analyzes Content",
    description:
      "Our FIRE-tuned AI extracts key insights and checks for compliance",
  },
  {
    number: "03",
    icon: Eye,
    title: "Preview & Tweak",
    description: "Review generated content and make adjustments as needed",
  },
  {
    number: "04",
    icon: Download,
    title: "Export or Schedule",
    description: "Download your clips or schedule them directly to your platforms",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Episode to Post-Ready Content in Minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A streamlined workflow designed for busy creators
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative border-0 bg-transparent shadow-none"
            >
              <CardContent className="pt-6">
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-5xl font-bold text-primary/10">
                    {step.number}
                  </span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 rounded-2xl bg-secondary/50 p-8 md:p-12">
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Demo video placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
