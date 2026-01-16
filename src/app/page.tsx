import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import WhyBooking from "@/components/sections/WhyBooking";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TechStack />
      <WhyBooking />
      <Projects />
      <Pricing />
      <Process />
      <FAQ />
      <About />
      <Contact />
    </div>
  );
}
