"use client";

import { BackgroundBeams } from "@/components/aceternity/background-beams";
import { HoverBorderGradient } from "@/components/aceternity/hover-border-gradient";
import { BlurFade } from "@/components/ui/blur-fade";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:namanguptabhopal@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[60vh] w-full overflow-hidden bg-[#0a0a0a] py-24 md:py-32"
    >
      {/* Background beam effect */}
      <BackgroundBeams className="opacity-40" />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col items-center justify-center text-center">
            {/* Section title */}
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[#ededed] md:text-5xl lg:text-6xl">
              Let&apos;s build something.
            </h2>

            {/* Subtitle */}
            <p className="mb-10 max-w-lg text-lg text-[#888888]">
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>

            {/* CTA Button */}
            <a
              href="mailto:namanguptabhopal@gmail.com"
              className="mb-12"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center gap-2 bg-[#0a0a0a] px-8 py-3 text-[#ededed] transition-colors hover:bg-[#111111]"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </HoverBorderGradient>
            </a>

            {/* Email display */}
            <a
              href="mailto:namanguptabhopal@gmail.com"
              className="mb-12 text-lg text-[#888888] transition-colors hover:text-[#ededed]"
            >
              namanguptabhopal@gmail.com
            </a>

            {/* Social links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#1e1e1e] bg-[#111111] transition-all duration-300 hover:border-[#3b82f6]/30 hover:bg-[#1a1a1a] hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 text-[#888888] transition-colors group-hover:text-[#ededed]" />
                </a>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
