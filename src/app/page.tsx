import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-ink">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60" />
      <div className="pointer-events-none fixed -left-40 top-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-neon-violet/20 blur-[140px] animate-glow" />
      <div className="pointer-events-none fixed -right-40 bottom-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-neon-pink/20 blur-[140px] animate-glow" />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <ContactMe />
    </main>
  );
}
