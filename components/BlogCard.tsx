import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  readingTime?: string;
}

export function BlogCard({ title, date, excerpt, slug, readingTime }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-xl border border-white/[0.08] bg-zinc-950/50 p-5 transition-all duration-500 hover:border-white/[0.15] hover:bg-zinc-900/50"
    >
      <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
        <span>{date}</span>
        {readingTime && (
          <>
            <span>·</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
      <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-blue-400">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-2">{excerpt}</p>
      <span className="inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">
        Read more
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
