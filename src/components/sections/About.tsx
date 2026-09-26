'use client';

import React from 'react';
import { MapPin, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const PRINCIPLES = [
    {
      title: isId ? 'Arsitektur Microservices & Clean Architecture' : 'Microservices & Clean Architecture',
      desc: isId
        ? 'Menerapkan Clean Architecture, pemisahan service yang scalable, dan komunikasi event-driven menggunakan Go, Docker, dan Kafka.'
        : 'Applying Clean Architecture, modular services, and event-driven patterns using Go, Docker, and Kafka for high throughput.',
    },
    {
      title: isId ? 'Penyimpanan & Caching Berperforma Tinggi' : 'High-Throughput Storage & Caching',
      desc: isId
        ? 'Optimasi query PostgreSQL, perancangan skema relasional yang tangguh, serta caching in-memory Redis untuk beban konkurensi tinggi.'
        : 'Optimizing PostgreSQL schemas, query indexing, and in-memory Redis caching to handle high-concurrency workloads.',
    },
    {
      title: isId ? 'Adaptabilitas Kuat & Solusi Masalah Nyata' : 'Strong Adaptability & Practical Problem Solving',
      desc: isId
        ? 'Pengalaman kerja non-IT di pergudangan (WMS) dan inventaris melatih komunikasi efektif, adaptabilitas tinggi, dan fokus pada keandalan sistem.'
        : 'Previous non-IT operational experience in warehousing and inventory builds strong adaptability, clear communication, and pragmatic reliability.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#f4f5f7] dark:bg-[#09090b] bg-grid-pattern border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Photo & Linear Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="linear-card rounded-2xl p-5 overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 mb-4 border border-zinc-200/80 dark:border-zinc-800">
                <img
                  src="/agam-photo.jpg"
                  alt="Agam Latifullah - Backend Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-white tracking-tight">Agam Latifullah</h3>
                  <span className="font-mono text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded border border-zinc-200 dark:border-zinc-700">
                    Full-Stack · TS & Go
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <MapPin size={12} className="text-zinc-400 dark:text-zinc-500" />
                  <span>Kabupaten Bogor, Indonesia</span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 pt-2 border-t border-zinc-100 dark:border-zinc-800 leading-relaxed">
                  {isId
                    ? 'Mahasiswa Sistem Informasi Universitas Terbuka & Full-Stack Developer (TypeScript & Golang).'
                    : 'Information Systems Student at Universitas Terbuka & Full-Stack Developer (TypeScript & Golang).'}
                </p>

                {/* Social Quick Links */}
                <div className="flex items-center gap-2 pt-3">
                  <a
                    href="https://github.com/agamlatiff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/agam-latifullah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                  <a
                    href="mailto:agam.latiff@gmail.com"
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 dark:text-white tracking-[-0.035em] leading-snug mb-4">
                {isId
                  ? 'Menghubungkan Kebutuhan Operasional Nyata dengan Rekayasa Perangkat Lunak Modern'
                  : 'Bridging Real-World Operations with Modern Software Engineering'}
              </h2>
            </div>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                {isId ? (
                  <>
                    Saya adalah <strong className="text-zinc-900 dark:text-white">Full-Stack Developer yang berfokus pada ekosistem TypeScript & Golang</strong> dengan pengalaman langsung membangun aplikasi web modern dan sistem backend/microservices terukur menggunakan PostgreSQL, MySQL, Redis, Kafka, dan Docker, didukung keahlian di Node.js, Express, dan Postman.
                  </>
                ) : (
                  <>
                    I am a <strong className="text-zinc-900 dark:text-white">Full-Stack Developer specializing in TypeScript & Golang</strong> with hands-on personal project experience building modern web applications and scalable microservices using PostgreSQL, MySQL, Redis, Kafka, and Docker, alongside skills in Node.js, Express, and Postman.
                  </>
                )}
              </p>
              <p>
                {isId ? (
                  <>
                    Memanfaatkan adaptabilitas tinggi, komunikasi yang efektif, serta kemampuan pemecahan masalah yang kuat dari pengalaman kerja non-IT sebelumnya (seperti operasional WMS dan barcode scanner di PT Solusi Prima Packaging serta manajemen inventaris di Ya Kun Kaya Toast).
                  </>
                ) : (
                  <>
                    Leveraging strong adaptability, effective communication, and problem-solving skills built from previous non-IT work experience (including warehouse WMS operations at PT Solusi Prima Packaging and inventory management at Ya Kun Kaya Toast).
                  </>
                )}
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                {isId ? 'PRINSIP REKAYASA PERANGKAT LUNAK' : 'CORE ENGINEERING PRINCIPLES'}
              </span>
              <div className="space-y-2.5">
                {PRINCIPLES.map((pr, idx) => (
                  <div key={idx} className="linear-card p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-zinc-900 dark:text-zinc-100 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-zinc-950 dark:text-white tracking-tight">{pr.title}</h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">{pr.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)] active:scale-[0.98]"
              >
                <span>{isId ? 'Diskusikan Peluang Proyek' : "Let's Connect"}</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
