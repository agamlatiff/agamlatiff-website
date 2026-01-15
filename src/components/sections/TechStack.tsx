"use client";

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const TECH_STACK = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkCoords: true },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', darkCoords: true },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', darkCoords: true },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', darkCoords: true },
];

const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-slate-950 border-y border-slate-800/50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          {t('techStack.title') || 'Technology Stack'}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group bg-slate-950">
        <div className="flex animate-marquee whitespace-nowrap gap-16 sm:gap-24 opacity-70 group-hover:opacity-100 transition-opacity duration-300 items-center py-4 flex-shrink-0 min-w-full pr-16 sm:pr-24">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-3 flex-shrink-0">
              <img
                src={tech.logo}
                alt={tech.name}
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className={`h-12 w-12 sm:h-14 sm:w-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 ${tech.darkCoords ? 'invert' : ''}`}
              />
              <span className="text-sm sm:text-base font-bold text-slate-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee whitespace-nowrap gap-16 sm:gap-24 opacity-70 group-hover:opacity-100 transition-opacity duration-300 items-center py-4 flex-shrink-0 min-w-full pr-16 sm:pr-24" aria-hidden="true">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div key={`d-${index}`} className="flex flex-col items-center gap-3 flex-shrink-0">
              <img
                src={tech.logo}
                alt={tech.name}
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className={`h-12 w-12 sm:h-14 sm:w-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 ${tech.darkCoords ? 'invert' : ''}`}
              />
              <span className="text-sm sm:text-base font-bold text-slate-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
