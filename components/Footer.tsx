export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <span className="text-xs text-zinc-600">
          &copy; 2026 Naman Gupta
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/namanxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/naman411"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:namanguptabhopal@gmail.com"
            className="text-xs text-zinc-600 transition-colors hover:text-zinc-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
