import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-x-clip">
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
