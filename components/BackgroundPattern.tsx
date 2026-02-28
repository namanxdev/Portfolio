import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(100vw_circle_at_center,white,transparent)]",
          "inset-0 opacity-[0.03] fill-white"
        )}
      />
    </div>
  );
}
