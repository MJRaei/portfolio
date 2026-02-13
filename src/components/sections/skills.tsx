import { skillCategories } from "@/data/skills";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Skills</h2>
      </FadeIn>
      <StaggerChildren className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <StaggerItem key={cat.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
