import Link from "next/link";
import { Trophy } from "lucide-react";
import { awards } from "@/data/awards";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Awards() {
  return (
    <SectionWrapper id="awards">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight">
          Awards &amp; Recognition
        </h2>
      </FadeIn>
      <div className="space-y-12">
        {awards.map((award, i) => (
          <FadeIn key={i} delay={0.1 * i}>
            <div className="relative border-l-2 border-border pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
              <div className="flex items-start gap-3">
                <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{award.title}</h3>
                  <p className="text-muted-foreground">{award.organization}</p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {formatDate(award.date)}
                  </p>
                  {award.description && (
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {award.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {award.url && (
                      <a
                        href={award.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        View Award
                      </a>
                    )}
                    {award.projectSlug && (
                      <Link
                        href={`/projects/${award.projectSlug}`}
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        View Project
                      </Link>
                    )}
                    {award.sourceUrl && (
                      <a
                        href={award.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
