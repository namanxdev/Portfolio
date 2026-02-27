"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function Contact() {
  return (
    <section id="contact" className="relative py-36">
      {/* Gradient behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-[#3b82f6]/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <BlurFade delay={0.1} inView>
          <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.2em] text-[#3b82f6]">
            Contact
          </p>
          <h2 className="mx-auto max-w-md text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-[15px] leading-relaxed text-white/30">
            Open to AI engineering roles, agent infrastructure collaborations, and interesting problems.
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <a
            href="mailto:namanguptabhopal@gmail.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-medium text-[#09090b] transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          >
            Get in touch
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-8 flex items-center justify-center gap-1">
            {[
              { href: "https://github.com/namanxdev", label: "GitHub", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
              { href: "https://linkedin.com/in/naman411", label: "LinkedIn", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "https://namangupta.live", label: "Web", icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2.5 text-white/15 transition-all hover:bg-white/[0.04] hover:text-white/50"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
