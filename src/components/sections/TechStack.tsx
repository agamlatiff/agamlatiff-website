'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LayerSpec {
  id: string;
  number: string;
  ringIndex: number;
  radius: number;
  nodeAngle: number; // degrees
  side: 'left' | 'right';
  badge: string;
  ringLabel: string;
  title: string;
  description: { id: string; en: string };
  focus: { id: string; en: string };
  skills: string[];
  accentColor: string;
  linePath: {
    startX: number;
    startY: number;
    elbowX: number;
    elbowY: number;
  };
  desktopPos: string;
  accentClasses: {
    text: string;
    border: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    glowLine: string;
    glowBg: string;
    dotGlow: string;
  };
}

const LAYERS: LayerSpec[] = [
  {
    id: 'frontend',
    number: '01',
    ringIndex: 1,
    radius: 290, // Outermost Ring 1
    nodeAngle: 155, // ~10:00 o'clock
    side: 'left',
    badge: '01 // FRONT END TIER',
    ringLabel: 'LAPISAN 1: FRONT END',
    title: 'TypeScript & Next.js Ecosystem',
    skills: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
    description: {
      id: 'Antarmuka web modern dengan Next.js App Router, strict TypeScript contract DTO, dan Tailwind CSS untuk responsivitas fluid.',
      en: 'Modern web UI built with Next.js App Router, strict TypeScript DTO contracts, and Tailwind CSS for fluid responsiveness.',
    },
    focus: {
      id: 'Jaminan: 100% Strict Type-Safety',
      en: 'Guarantee: 100% Strict Type-Safety',
    },
    accentColor: '#00e5ff',
    linePath: {
      startX: 0,
      startY: 230,
      elbowX: 85,
      elbowY: 230,
    },
    desktopPos: 'lg:top-[4%] lg:left-[0%] xl:left-[1%] lg:w-[320px] xl:w-[350px]',
    accentClasses: {
      text: 'text-cyan-400',
      border: 'border-cyan-500',
      badgeBg: 'bg-cyan-950',
      badgeBorder: 'border-cyan-600',
      badgeText: 'text-cyan-300',
      glowLine: 'from-cyan-500 via-cyan-400 to-transparent',
      glowBg: 'from-cyan-500/10 to-transparent',
      dotGlow: 'bg-cyan-400 shadow-[0_0_10px_#00e5ff]',
    },
  },
  {
    id: 'backend',
    number: '02',
    ringIndex: 2,
    radius: 220, // Ring 2
    nodeAngle: 25, // ~1:30 o'clock
    side: 'right',
    badge: '02 // BACK END SERVICES',
    ringLabel: 'LAPISAN 2: BACK END',
    title: 'Golang, Gin & Microservices',
    skills: ['Golang (Go)', 'Gin Framework', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'Redis', 'Postman', 'REST APIs'],
    description: {
      id: 'Layanan backend & microservices performa tinggi dengan Go Gin dan Node.js (Express). Transaksi relasional ACID PostgreSQL/MySQL serta caching Redis sub-5ms.',
      en: 'High-performance backend & microservices engineered with Go Gin and Node.js (Express). Relational ACID PostgreSQL/MySQL integrity and sub-5ms Redis caching.',
    },
    focus: {
      id: 'Performa: Sub-Millisecond & ACID',
      en: 'Performance: Sub-Millisecond & ACID',
    },
    accentColor: '#10b981',
    linePath: {
      startX: 800,
      startY: 240,
      elbowX: 715,
      elbowY: 240,
    },
    desktopPos: 'lg:top-[2%] lg:right-[0%] xl:right-[1%] lg:w-[320px] xl:w-[350px]',
    accentClasses: {
      text: 'text-emerald-400',
      border: 'border-emerald-500',
      badgeBg: 'bg-emerald-950',
      badgeBorder: 'border-emerald-600',
      badgeText: 'text-emerald-300',
      glowLine: 'from-emerald-500 via-emerald-400 to-transparent',
      glowBg: 'from-emerald-500/10 to-transparent',
      dotGlow: 'bg-emerald-400 shadow-[0_0_10px_#10b981]',
    },
  },
  {
    id: 'devops',
    number: '03',
    ringIndex: 3,
    radius: 150, // Ring 3
    nodeAngle: 330, // ~4:30 o'clock
    side: 'right',
    badge: '03 // DEVOPS & INFRASTRUCTURE',
    ringLabel: 'LAPISAN 3: DEVOPS',
    title: 'Docker & Event Streaming',
    skills: ['Docker', 'Apache Kafka', 'CI/CD Pipelines', 'Git', 'GitHub'],
    description: {
      id: 'Kontainerisasi Docker untuk konsistensi deployment, broker streaming antrean Kafka untuk alur asynchronous, dan alur CI/CD otomatis.',
      en: 'Docker containerization for environment parity, Kafka distributed event streaming for async workflows, and automated CI/CD pipelines.',
    },
    focus: {
      id: 'Infrastruktur: Zero Synchronous Bottlenecks',
      en: 'Infrastructure: Zero Synchronous Bottlenecks',
    },
    accentColor: '#38bdf8',
    linePath: {
      startX: 800,
      startY: 560,
      elbowX: 675,
      elbowY: 560,
    },
    desktopPos: 'lg:bottom-[5%] lg:right-[0%] xl:right-[1%] lg:w-[320px] xl:w-[350px]',
    accentClasses: {
      text: 'text-sky-400',
      border: 'border-sky-500',
      badgeBg: 'bg-sky-950',
      badgeBorder: 'border-sky-600',
      badgeText: 'text-sky-300',
      glowLine: 'from-sky-500 via-sky-400 to-transparent',
      glowBg: 'from-sky-500/10 to-transparent',
      dotGlow: 'bg-sky-400 shadow-[0_0_10px_#38bdf8]',
    },
  },
  {
    id: 'architecture',
    number: '04',
    ringIndex: 4,
    radius: 85, // Ring 4 / Core
    nodeAngle: 215, // ~7:30 o'clock
    side: 'left',
    badge: '04 // SYSTEM ARCHITECTURE',
    ringLabel: 'LAPISAN 4: ARCHITECTURE',
    title: 'Clean, Microservices & Layered Patterns',
    skills: ['Clean Architecture', 'Microservices', 'Layered Architecture', 'MVC Pattern'],
    description: {
      id: 'Penerapan batas domain terisolasi dengan Clean Architecture, pemisahan service terdistribusi (Microservices), arsitektur Layered, serta MVC.',
      en: 'Enforcing isolated domain boundaries with Clean Architecture, distributed Microservices, Layered Architecture, and structured MVC patterns.',
    },
    focus: {
      id: 'Prinsip: Decoupled Domain & Testability',
      en: 'Principle: Decoupled Domain & Testability',
    },
    accentColor: '#c084fc',
    linePath: {
      startX: 0,
      startY: 560,
      elbowX: 160,
      elbowY: 560,
    },
    desktopPos: 'lg:bottom-[3%] lg:left-[0%] xl:left-[1%] lg:w-[320px] xl:w-[350px]',
    accentClasses: {
      text: 'text-purple-400',
      border: 'border-purple-500',
      badgeBg: 'bg-purple-950',
      badgeBorder: 'border-purple-600',
      badgeText: 'text-purple-300',
      glowLine: 'from-purple-500 via-purple-400 to-transparent',
      glowBg: 'from-purple-500/10 to-transparent',
      dotGlow: 'bg-purple-400 shadow-[0_0_10px_#c084fc]',
    },
  },
];

const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const isId = language === 'id';
  const [activeLayerId, setActiveLayerId] = useState<string>('frontend');

  // Center coordinate of SVG viewBox 0 0 800 800
  const CX = 400;
  const CY = 400;

  // Calculate circle coordinate
  const getPoint = (radius: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: CX + radius * Math.cos(rad),
      y: CY - radius * Math.sin(rad),
    };
  };

  // Generate 48 precision dial tick marks around the grand perimeter
  const dialTicks = Array.from({ length: 48 }, (_, i) => {
    const deg = i * (360 / 48);
    const rad = (deg * Math.PI) / 180;
    const isMajor = i % 4 === 0;
    const innerR = isMajor ? 318 : 324;
    const outerR = 332;
    return {
      x1: CX + innerR * Math.cos(rad),
      y1: CY - innerR * Math.sin(rad),
      x2: CX + outerR * Math.cos(rad),
      y2: CY - outerR * Math.sin(rad),
      isMajor,
    };
  });

  return (
    <section
      id="tech-stack"
      className="py-20 sm:py-28 bg-[#070709] text-white border-b border-zinc-800/80 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-b from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Minimalist & Direct) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.035em] mb-4">
            Tech Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {isId
              ? 'Alat, bahasa pemrograman, dan arsitektur yang menjadi fondasi dalam setiap proyek yang saya kerjakan.'
              : 'Tools, languages, and architectural patterns that form the foundation of systems I build.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* OPSI 4: HORIZONTAL TELEMETRY BEAM / LINEAR DATA RAILS STAGE               */}
        {/* ========================================================================= */}
        <div className="relative w-full lg:min-h-[780px] flex items-center justify-center">
          
          {/* ======================================================================= */}
          {/* CENTER DOMINANT SVG RADAR (Hovering any ring activates that layer)     */}
          {/* ======================================================================= */}
          <div className="relative w-full max-w-[540px] sm:max-w-[660px] lg:max-w-[800px] aspect-square flex items-center justify-center select-none z-10">
            <svg viewBox="0 0 800 800" className="w-full h-full overflow-visible">
              <defs>
                {/* Neon Cyan Glow Filter */}
                <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Core Hub Gradient */}
                <radialGradient id="hub-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.98" />
                </radialGradient>
              </defs>

              {/* 1. Compass / Bezel Dial Tick Marks around Perimeter */}
              <g className="opacity-40">
                {dialTicks.map((tick, i) => (
                  <line
                    key={i}
                    x1={tick.x1}
                    y1={tick.y1}
                    x2={tick.x2}
                    y2={tick.y2}
                    stroke={tick.isMajor ? '#94a3b8' : '#475569'}
                    strokeWidth={tick.isMajor ? 1.6 : 1}
                  />
                ))}
                {/* Compass Degree Coordinates */}
                <text x={CX} y="55" textAnchor="middle" className="text-[9px] font-mono fill-zinc-500">000°</text>
                <text x="745" y={CY + 3} textAnchor="middle" className="text-[9px] font-mono fill-zinc-500">090°</text>
                <text x={CX} y="750" textAnchor="middle" className="text-[9px] font-mono fill-zinc-500">180°</text>
                <text x="55" y={CY + 3} textAnchor="middle" className="text-[9px] font-mono fill-zinc-500">270°</text>
              </g>

              {/* 2. Concentric Architecture Rings with Generous Hover Zones */}
              {LAYERS.map((layer) => {
                const isActive = activeLayerId === layer.id;
                return (
                  <g
                    key={`ring-group-${layer.id}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    onClick={() => setActiveLayerId(layer.id)}
                  >
                    {/* Invisible Wide Hover Hitbox Zone */}
                    <circle
                      cx={CX}
                      cy={CY}
                      r={layer.radius}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="34"
                    />

                    {/* Visible Concentric Ring Guide */}
                    <circle
                      cx={CX}
                      cy={CY}
                      r={layer.radius}
                      fill="none"
                      stroke={isActive ? '#00e5ff' : '#1e293b'}
                      strokeWidth={isActive ? '2.5' : '1.2'}
                      strokeDasharray={isActive ? 'none' : '3 3'}
                      filter={isActive ? 'url(#neon-glow)' : undefined}
                      className="transition-all duration-300 pointer-events-none"
                    />

                    {/* Arc Layer Title Label */}
                    <text
                      x={CX}
                      y={CY - layer.radius + 15}
                      textAnchor="middle"
                      className={`text-[9px] font-mono tracking-widest uppercase select-none transition-colors duration-300 ${
                        isActive ? 'fill-cyan-300 font-bold' : 'fill-zinc-500'
                      }`}
                    >
                      {layer.ringLabel}
                    </text>
                  </g>
                );
              })}

              {/* 3. Static Precision Reticles & Nodes on Rings */}
              {LAYERS.map((layer) => {
                const pt = getPoint(layer.radius, layer.nodeAngle);
                const isActive = activeLayerId === layer.id;

                return (
                  <g
                    key={`node-group-${layer.id}`}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    onClick={() => setActiveLayerId(layer.id)}
                  >
                    {isActive ? (
                      <>
                        {/* Top 12 o'clock ring illuminated node */}
                        <circle
                          cx={CX}
                          cy={CY - layer.radius}
                          r="4.5"
                          fill="#00e5ff"
                          filter="url(#neon-glow)"
                          className="pointer-events-none"
                        />
                        {/* Target Reticle at line contact point */}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="7"
                          fill="none"
                          stroke="#00e5ff"
                          strokeWidth="1.5"
                          filter="url(#neon-glow)"
                          className="pointer-events-none"
                        />
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="2.5"
                          fill="#00e5ff"
                          className="pointer-events-none"
                        />
                      </>
                    ) : (
                      /* Inactive subtle colored node */
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="3.5"
                        fill={layer.accentColor}
                        opacity="0.65"
                      />
                    )}
                  </g>
                );
              })}

              {/* 4. POINTER LEADER LINES (Connecting Ring to Telemetry Rails) */}
              {LAYERS.map((layer) => {
                const pt = getPoint(layer.radius, layer.nodeAngle);
                const isActive = activeLayerId === layer.id;

                if (isActive) {
                  // Active Glowing Dog-Leg Line
                  const isLeft = layer.side === 'left';
                  const p = layer.linePath;

                  return (
                    <path
                      key={`active-line-${layer.id}`}
                      d={`M ${p.startX} ${p.startY} L ${p.elbowX} ${p.elbowY} L ${pt.x + (isLeft ? -10 : 10)} ${pt.y} L ${pt.x} ${pt.y}`}
                      fill="none"
                      stroke="#00e5ff"
                      strokeWidth="2.2"
                      filter="url(#neon-glow)"
                      className="transition-all duration-300 pointer-events-none"
                    />
                  );
                }

                // Inactive subtle dotted line
                const isLeft = layer.side === 'left';
                const p = layer.linePath;

                return (
                  <path
                    key={`inactive-line-${layer.id}`}
                    d={`M ${p.startX} ${p.startY} L ${p.elbowX} ${p.elbowY} L ${pt.x + (isLeft ? -15 : 15)} ${pt.y} L ${pt.x} ${pt.y}`}
                    fill="none"
                    stroke="#27272a"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    className="transition-all duration-300 pointer-events-none"
                  />
                );
              })}

              {/* 5. Center Core Hub */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveLayerId('architecture')}
                onClick={() => setActiveLayerId('architecture')}
              >
                <circle
                  cx={CX}
                  cy={CY}
                  r="42"
                  fill="url(#hub-gradient)"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  filter="url(#neon-glow)"
                />
                <circle cx={CX} cy={CY} r="35" fill="#090d16" stroke="#334155" strokeWidth="1" />
                
                {/* Architectural Core Pillars */}
                <g transform={`translate(${CX - 15}, ${CY - 15}) scale(0.7)`}>
                  <path d="M 6 36 L 6 18 L 12 18 L 12 36 Z" fill="#38bdf8" />
                  <path d="M 17 36 L 17 8 L 25 8 L 25 36 Z" fill="#ffffff" />
                  <path d="M 30 36 L 30 18 L 36 18 L 36 36 Z" fill="#38bdf8" />
                </g>
              </g>
            </svg>
          </div>

          {/* ======================================================================= */}
          {/* HORIZONTAL TELEMETRY BEAMS / LINEAR DATA RAILS                         */}
          {/* ======================================================================= */}
          <div className="w-full mt-10 lg:mt-0 lg:absolute lg:inset-0 pointer-events-none z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:block gap-8">
              {LAYERS.map((layer) => {
                const isActive = activeLayerId === layer.id;
                const isLeft = layer.side === 'left';

                return (
                  <div
                    key={`telemetry-rail-${layer.id}`}
                    onMouseEnter={() => setActiveLayerId(layer.id)}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`pointer-events-auto cursor-pointer transition-all duration-300 relative ${
                      layer.desktopPos
                    } ${
                      isActive ? 'opacity-100' : 'opacity-60 hover:opacity-95'
                    } lg:absolute`}
                  >
                    {/* Background Subtle Ambient Glow on Active */}
                    {isActive && (
                      <div
                        className={`absolute -inset-x-4 -inset-y-3 bg-gradient-to-r ${layer.accentClasses.glowBg} rounded-xl blur-lg pointer-events-none opacity-50`}
                      />
                    )}

                    <div className="relative z-10 text-left">
                      
                      {/* 1. HORIZONTAL TELEMETRY RAIL (THE BEAM) */}
                      <div className="flex items-center gap-2 mb-2">
                        {/* Rail Anchor Tag */}
                        <div
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-colors flex items-center gap-1.5 ${
                            isActive
                              ? `${layer.accentClasses.badgeBg} ${layer.accentClasses.badgeBorder} ${layer.accentClasses.badgeText}`
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          <span>{layer.number}</span>
                          <span className="text-zinc-500">|</span>
                          <span className="tracking-wider uppercase">{layer.badge.replace(/^\d+\s*\/\/\s*/, '')}</span>
                        </div>

                        {/* Terminal Micro-Pulse Node */}
                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive ? layer.accentClasses.dotGlow : 'bg-zinc-700'
                          }`}
                        />

                        {/* Linear Scale Ruler / Horizontal Beam Line */}
                        <div className="flex-1 h-[2px] relative flex items-center">
                          {/* Laser Beam Base */}
                          <div
                            className={`w-full h-[1.5px] transition-all duration-300 ${
                              isActive
                                ? `bg-gradient-to-r ${isLeft ? layer.accentClasses.glowLine : 'from-transparent via-cyan-400 to-cyan-500'}`
                                : 'bg-zinc-800'
                            }`}
                          />
                          {/* Frequency Scale Ticks along the rail */}
                          <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none opacity-40">
                            <span className="w-[1px] h-[4px] bg-zinc-400" />
                            <span className="w-[1px] h-[3px] bg-zinc-500" />
                            <span className="w-[1px] h-[4px] bg-zinc-400" />
                            <span className="w-[1px] h-[3px] bg-zinc-500" />
                            <span className="w-[1px] h-[4px] bg-zinc-400" />
                          </div>
                        </div>
                      </div>

                      {/* 2. TITLE BAR */}
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight mb-1.5 transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-200'
                        }`}
                      >
                        {layer.title}
                      </h3>

                      {/* 3. DESCRIPTION */}
                      <p className="text-xs text-zinc-400 leading-relaxed mb-2.5 font-normal">
                        {isId ? layer.description.id : layer.description.en}
                      </p>

                      {/* 4. LINEAR TECH CHIPS */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {layer.skills.map((s) => (
                          <span
                            key={s}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                              isActive
                                ? 'bg-zinc-900/90 text-zinc-200 border border-zinc-700/80'
                                : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800/60'
                            }`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* 5. FOCUS / GUARANTEE TELEMETRY HIGHLIGHT */}
                      <div
                        className={`text-[11px] font-mono font-semibold tracking-wide flex items-center gap-1.5 ${layer.accentClasses.text}`}
                      >
                        <span>⚡</span>
                        <span>{isId ? layer.focus.id : layer.focus.en}</span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;
