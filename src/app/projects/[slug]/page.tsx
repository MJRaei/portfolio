import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, ChevronRight, ExternalLink, Github, Trophy } from "lucide-react";

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}
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
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {formatDate(project.date)}
          </span>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {project.awards && project.awards.length > 0 && (
          <div className="mb-6 space-y-2">
            {project.awards.map((award, i) =>
              award.url ? (
                <a
                  key={i}
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 transition-colors hover:bg-amber-500/20"
                >
                  <Trophy className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm font-medium text-amber-400">{award.label}</span>
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-amber-500/60" />
                </a>
              ) : (
                <div key={i} className="flex items-center gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
                  <Trophy className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm font-medium text-amber-400">{award.label}</span>
                </div>
              )
            )}
          </div>
        )}
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
          {project.liveUrl && !/youtube\.com\/watch\?v=/.test(project.liveUrl) && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </Button>
          )}
          {project.sourceUrl && (
            <Button variant="secondary" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> Source Code
            </Button>
          )}
        </div>
      </FadeIn>

      {project.sections && (() => {
        const isYouTube = project.liveUrl && /youtube\.com\/watch\?v=/.test(project.liveUrl);
        const overviewIdx = project.sections.findIndex((s) => s.title === "Overview");
        const insertAfter = overviewIdx !== -1 ? overviewIdx : 0;

        return (
          <div className="border-t border-border pt-10">
            {project.sections.map((section, i) => (
              <React.Fragment key={section.title}>
                <Section section={section} index={i} />
                {isYouTube && i === insertAfter && (
                  <FadeIn delay={0.1 * (i + 1)}>
                    <div className="mb-12">
                      <h2 className="mb-4 text-xl font-semibold tracking-tight">Demo Video</h2>
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
                        <iframe
                          src={`https://www.youtube.com/embed/${new URL(project.liveUrl!).searchParams.get("v")}`}
                          title={`${project.title} Demo`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 h-full w-full"
                        />
                      </div>
                    </div>
                  </FadeIn>
                )}
              </React.Fragment>
            ))}
          </div>
        );
      })()}
    </div>
  );
}
