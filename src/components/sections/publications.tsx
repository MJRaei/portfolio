import { BookOpen, GraduationCap, ScrollText } from "lucide-react";
import { publications } from "@/data/publications";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const d = new Date(Number(year), Number(month) - 1);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Publications() {
  return (
    <SectionWrapper id="publications">
      <FadeIn>
        <h2 className="mb-12 text-3xl font-bold tracking-tight">
          Publications &amp; Patents
        </h2>
      </FadeIn>
      <div className="space-y-12">
        {publications.map((pub, i) => (
          <FadeIn key={i} delay={0.1 * i}>
            <div className="relative border-l-2 border-border pl-8">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-border bg-background" />
              <div className="flex items-start gap-3">
                {pub.type === "patent" ? (
                  <ScrollText className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                ) : pub.type === "thesis" ? (
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-purple-500" />
                ) : (
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                )}
                <div className="flex-1">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg font-semibold hover:underline">
                        {pub.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold">{pub.title}</h3>
                  )}
                  <p className="text-muted-foreground">{pub.authors}</p>
                  <p className="text-sm text-muted-foreground">{pub.venue}</p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {formatDate(pub.date)}
                  </p>
                  {pub.doi && (
                    <div className="mt-3 text-sm">
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        DOI
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
