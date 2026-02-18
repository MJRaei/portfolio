import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ExternalLink, Github, Trophy } from "lucide-react";
import { projects } from "@/data/projects";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've built.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <FadeIn>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">All Projects</h1>
        <p className="mb-12 text-muted-foreground">
          A collection of things I&apos;ve built and worked on.
        </p>
      </FadeIn>
      <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project) => (
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
                  {project.award && (
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                      <Trophy className="h-3 w-3" />
                      Award Winner
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <h2 className="font-semibold">{project.title}</h2>
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
    </div>
  );
}
