import { DotPattern } from "@/components/ui/dot-pattern";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Dot Pattern Background */}
      <DotPattern 
        className="fixed inset-0 z-0 opacity-[0.03]"
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
      />
      
      {/* Main Content - Navbar is in layout.tsx */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Achievements Section */}
        <section id="achievements">
          <Achievements />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
