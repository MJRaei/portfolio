import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ProjectSection } from "@/types";

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

function Section({ section, index }: { section: ProjectSection; index: number }) {
  return (
    <FadeIn delay={0.1 * index}>
      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">{section.title}</h2>

        {section.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}

        {section.bullets && (
          <ul className="mb-4 space-y-2 pl-1">
            {section.bullets.map((bullet, i) => {
              const dashIdx = bullet.indexOf(" — ");
              return (
                <li key={i} className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    {dashIdx !== -1 ? (
                      <>
                        <span className="font-medium text-foreground">
                          {bullet.slice(0, dashIdx)}
                        </span>
                        {" — "}
                        {bullet.slice(dashIdx + 3)}
                      </>
                    ) : (
                      bullet
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {section.image && (
          <figure className="mt-6">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover"
                sizes="768px"
                unoptimized={section.image.src.endsWith(".gif")}
              />
            </div>
            {section.image.caption && (
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                {section.image.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </FadeIn>
  );
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
            src={project.heroUrl ?? project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="768px"
            priority
            unoptimized={(project.heroUrl ?? project.thumbnailUrl).endsWith(".gif")}
          />
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mb-8 text-muted-foreground leading-relaxed">{project.description}</p>

        <div className="mb-12 flex flex-wrap gap-3">
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

      {project.sections && (
        <div className="border-t border-border pt-10">
          {project.sections.map((section, i) => (
            <Section key={section.title} section={section} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
