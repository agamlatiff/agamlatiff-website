import React from 'react';
import About from '../components/sections/About';
import TrustFactors from '../components/sections/TrustFactors';
import Comparison from '../components/sections/Comparison';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
        <About />
        <Comparison />
        <TrustFactors />
    </div>
  );
};

export default AboutPage;