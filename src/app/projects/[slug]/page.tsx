import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <FadeIn>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{project.title}</h1>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-xl border border-border bg-muted">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="768px"
            priority
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mb-8 text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </Button>
          )}
          {project.sourceUrl && (
            <Button variant="outline" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> Source Code
            </Button>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
