import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="bg-[#13001E]">
      <Hero></Hero>
      <About></About>
      <Certifications></Certifications>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </main>
  );
}
