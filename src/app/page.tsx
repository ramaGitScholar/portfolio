import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import About2 from "@/components/About2";

export default function Home() {
  return (
    <main className="bg-[#13001E] flex flex-col">
      <Hero></Hero>
      <About></About>
      <About2></About2>
      <Projects></Projects>
      <Certifications></Certifications>
      <ContactMe></ContactMe>
    </main>
  );
}
