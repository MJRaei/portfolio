import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionWrapper({ id, className, children, ...props }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)} {...props}>
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}
