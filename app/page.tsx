import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Home() {
  return (
    <>
      {/* Main Content - Navbar is in layout.tsx */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative w-full">
          <Hero />
        </section>
        
        {/* Projects Section */}
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        
        {/* Experience Section */}
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        
        {/* Skills Section */}
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        
        {/* Achievements Section */}
        <SectionWrapper id="achievements">
          <Achievements />
        </SectionWrapper>
        
        {/* Contact Section */}
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
    </>
  );
}
