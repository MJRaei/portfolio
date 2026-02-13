import { ArrowDown, FileText } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] items-center">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <FadeIn>
          <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground">
            Hi, my name is
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {personalInfo.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="mb-6 text-2xl font-medium text-muted-foreground sm:text-3xl md:text-4xl">
            {personalInfo.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground">
            {personalInfo.bio}
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects">
              <ArrowDown className="h-4 w-4" />
              View Projects
            </Button>
            <Button variant="outline" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
