import { experiences } from "@/data/experience";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";

function formatDate(date: string | null) {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>
      </FadeIn>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={0.1 * i}>
            <div className="relative border-l-2 border-border pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-muted-foreground">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </span>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                {formatDate(exp.startDate)} &ndash; {formatDate(exp.endDate)} &middot; {exp.location}
              </p>
              <ul className="mb-4 space-y-2">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                    &bull; {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
