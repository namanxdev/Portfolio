import Link from "next/link";

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
      className="group block rounded-xl border border-white/[0.06] bg-[#0f0f12] p-5 transition-all duration-300 hover:border-white/[0.1] hover:bg-[#111115]"
    >
      <div className="mb-3 flex items-center gap-2 text-[12px] text-[#52525b]">
        <time>{date}</time>
        {readingTime && (
          <>
            <span className="text-white/10">·</span>
            <span>{readingTime}</span>
          </>
        )}
      </div>
      <h3 className="mb-2 text-[15px] font-semibold tracking-tight text-white transition-colors group-hover:text-[#3b82f6]">
        {title}
      </h3>
      <p className="mb-4 text-[13px] leading-[1.6] text-[#71717a] line-clamp-2">{excerpt}</p>
      <span className="inline-flex items-center gap-1 text-[12px] text-[#52525b] transition-colors group-hover:text-[#a1a1aa]">
        Read more
        <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
