import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";

export function About() {
  return (
    <SectionWrapper id="about">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight">About Me</h2>
      </FadeIn>
      <div className="grid gap-12 md:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          {personalInfo.aboutParagraphs.map((paragraph, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2} className="flex justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
