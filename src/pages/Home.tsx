import React from 'react';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';
import SeoObserver from '@/components/utils/SeoObserver';

interface HomeProps {
  onOpenChat: () => void;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <SeoObserver />
      <div className="w-full">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Process />
        <Contact />
      </div>
    </>
  );
};

export default Home;
