import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ExternalLink, Github } from "lucide-react";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}
import { projects } from "@/data/projects";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <SectionWrapper id="projects">
      <FadeIn>
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <StaggerItem key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <Card className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {formatDate(project.date)}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.sourceUrl && (
                      <span className="text-muted-foreground">
                        <Github className="h-4 w-4" />
                      </span>
                    )}
                    {project.liveUrl && (
                      <span className="text-muted-foreground">
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <FadeIn delay={0.3}>
        <Link
          href="/projects"
          className="mt-8 flex items-center justify-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:hidden"
        >
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </FadeIn>
    </SectionWrapper>
  );
}
