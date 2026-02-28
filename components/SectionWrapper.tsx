import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative w-full overflow-hidden", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        {children}
      </div>
    </section>
  );
}
