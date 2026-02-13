import { Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data/personal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {personalInfo.socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.platform}
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
