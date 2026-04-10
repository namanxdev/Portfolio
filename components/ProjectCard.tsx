import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProjectLink {
  label: string;
  href?: string;
}

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
  metricValue: string;
  metricLabel: string;
  status?: string;
  image: string;
  alt: string;
  highlights: string[];
  previewTags: string[];
  links: ProjectLink[];
  featured?: boolean;
  accentClass?: string;
}

function StatusBadge({ status }: { status: string }) {
  const tone = status.toLowerCase();

  const classes = tone.includes("coming")
    ? "border-amber-500/20 bg-amber-500/10 text-amber-200"
    : tone.includes("development")
      ? "border-blue-500/20 bg-blue-500/10 text-blue-200"
      : "border-emerald-500/20 bg-emerald-500/10 text-emerald-200";

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em]",
        classes,
      )}
    >
      {status}
    </Badge>
  );
}

function ProjectLinkChip({ label, href }: ProjectLink) {
  if (!href) {
    return (
      <span className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-4 text-sm text-white/30">
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export function ProjectCard({
  title,
  category,
  description,
  tech,
  metricValue,
  metricLabel,
  status,
  image,
  alt,
  highlights,
  previewTags,
  links,
  featured = false,
  accentClass = "from-blue-500/16 via-blue-500/8 to-transparent",
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-[0_24px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 hover:border-white/18",
        featured && "h-full",
      )}
    >
      <BorderBeam
        size={featured ? 260 : 210}
        duration={14}
        colorFrom="#60a5fa"
        colorTo="#93c5fd"
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          `bg-gradient-to-br ${accentClass}`,
        )}
      />

      <div
        className={cn(
          "relative flex h-full flex-col",
          featured && "lg:grid lg:grid-cols-[minmax(0,1fr)_290px]",
        )}
      >
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">
                {category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                {title}
              </h3>
            </div>
            {status ? <StatusBadge status={status} /> : null}
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/58 sm:text-[15px]">
            {description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
            <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                Impact
              </p>
              <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                {metricValue}
              </div>
              <p className="mt-2 text-sm leading-6 text-white/50">
                {metricLabel}
              </p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                What shipped
              </p>
              <div className="mt-4 space-y-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-300" />
                    <p className="text-sm leading-6 text-white/65">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {tech.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="rounded-full border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/60"
              >
                {item}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <ProjectLinkChip key={`${title}-${link.label}`} {...link} />
            ))}
          </div>
        </div>

        <div
          className={cn(
            "relative border-t border-white/8 p-4 sm:p-5",
            featured && "lg:border-l lg:border-t-0",
          )}
        >
          <div className="relative h-full min-h-[260px] overflow-hidden rounded-[24px] border border-white/8 bg-[#09090b]">
            <Image
              src={image}
              alt={alt}
              fill
              priority={featured}
              sizes={featured ? "(min-width: 1024px) 320px, 100vw" : "(min-width: 1024px) 420px, 100vw"}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.06),rgba(5,5,5,0.76))]" />

            <div className="absolute left-4 top-4 flex max-w-[85%] flex-wrap gap-2">
              {previewTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-[20px] border border-white/8 bg-black/45 p-4 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                  Preview
                </p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Shipping product surfaces instead of decorative mockups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
