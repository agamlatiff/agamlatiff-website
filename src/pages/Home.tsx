import React from 'react';
import Hero from '@/components/sections/Hero';
import BookingShowcase from '@/components/sections/BookingShowcase';
import TechStack from '@/components/sections/TechStack';
import About from '@/components/sections/About';
import WhyBooking from '@/components/sections/WhyBooking';
import Projects from '@/components/sections/Projects';
import Pricing from '@/components/sections/Pricing';
import Process from '@/components/sections/Process';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import SeoObserver from '@/components/utils/SeoObserver';

const Home: React.FC = () => {
  return (
    <>
      <SeoObserver />
      <div className="w-full">
        <Hero />
        <About />
        <WhyBooking />
        <BookingShowcase />
        <Projects />
        <TechStack />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </div>
    </>
  );
};

export default Home;
