import { education } from "@/data/education";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";

function formatDate(date: string | null) {
  if (!date) return "Present";
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Education() {
  return (
    <SectionWrapper id="education">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Education</h2>
      </FadeIn>
      <div className="space-y-12">
        {education.map((edu, i) => (
          <FadeIn key={i} delay={0.1 * i}>
            <div className="relative border-l-2 border-border pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="mb-3 text-sm text-muted-foreground">
                {formatDate(edu.startDate)} &ndash; {formatDate(edu.endDate)} &middot; {edu.location}
                {edu.gpa && <> &middot; GPA: {edu.gpa}</>}
              </p>
              {edu.description && (
                <ul className="space-y-2">
                  {edu.description.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
