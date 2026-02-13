import { Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-lg text-center">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Get In Touch</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-8 text-muted-foreground">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out if you&apos;d like to connect.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Button href={`mailto:${personalInfo.email}`}>
            <Mail className="h-4 w-4" />
            Say Hello
          </Button>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
