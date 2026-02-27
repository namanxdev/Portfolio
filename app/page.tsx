import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

function Separator() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="gradient-line" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <Projects />
      <Separator />
      <Experience />
      <Separator />
      <Skills />
      <Separator />
      <Achievements />
      <Separator />
      <Blog />
      <Separator />
      <Contact />
    </>
  );
}
