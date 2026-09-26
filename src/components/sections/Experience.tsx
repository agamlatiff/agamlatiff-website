'use client';

import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Experience: React.FC = () => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const STEPS = [
    {
      step: '01',
      period: '2021 – 2024',
      type: isId ? 'Edukasi & Kepemimpinan' : 'Education & Leadership',
      typeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      title: 'SMAN 2 Gunung Putri & MPK Komisi C',
      role: isId ? 'Pendidikan Menengah Atas & Komisi C' : 'High School & Student Council Commission C',
      location: 'Kabupaten Bogor, Indonesia',
      description: isId
        ? 'Menyelesaikan pendidikan menengah atas sekaligus aktif di Majelis Permusyawaratan Kelas (MPK) Komisi C, mengumpulkan dan memproses 20+ aspirasi kebijakan siswa dengan rasio resolusi 70%+ melalui proposal terstruktur ke manajemen sekolah.'
        : 'Completed secondary education while actively serving in the Student Council (MPK) Commission C, gathering and processing 20+ policy feedback entries with a 70%+ resolution rate.',
      highlights: isId
        ? ['Pendidikan Menengah Atas SMAN 2 Gunung Putri', 'Kepemimpinan dan advokasi kebijakan siswa di MPK Komisi C']
        : ['Secondary education at SMAN 2 Gunung Putri', 'Student leadership and policy advocacy in MPK Commission C'],
    },
    {
      step: '02',
      period: 'Mei 2024 – Des 2025',
      type: isId ? 'Pengalaman Kerja' : 'Work Experience',
      typeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Ya Kun Kaya Toast',
      role: 'Kitchen Staff & Inventory Tracking',
      location: 'Bogor, Indonesia',
      description: isId
        ? 'Mendapat promosi dari Food Server menjadi Kitchen Staff dalam 1 bulan berkat kinerja operasional yang konsisten. Bertanggung jawab penuh atas manajemen level inventaris 20+ bahan baku harian, mencapai akurasi stok 98%+ dan zero stockout.'
        : 'Promoted from Food Server to Kitchen Staff within 1 month. Took full ownership of daily inventory tracking for 20+ ingredients, achieving 98%+ accuracy with zero stockouts.',
      highlights: isId
        ? ['Promosi kilat dalam 1 bulan atas performa kerja tinggi', 'Pengendalian inventaris dan akurasi stok harian 98%+']
        : ['Fast-track promotion within 1 month', 'Daily inventory control with 98%+ stock accuracy'],
    },
    {
      step: '03',
      period: isId ? 'Feb 2026 – Sekarang' : 'Feb 2026 – Present',
      type: isId ? 'Pengalaman Kerja' : 'Work Experience',
      typeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'PT Solusi Prima Packaging (SOPRA)',
      role: 'Picker — Warehouse Management System (WMS)',
      location: 'Bekasi (Domisili: Kabupaten Bogor)',
      description: isId
        ? 'Memproses dan menyiapkan 1.000+ item setiap hari menggunakan sistem WMS dan barcode scanner dengan tingkat akurasi 99%+. Pengalaman langsung pada alur fisik pergudangan ini menjadi inspirasi utama saya saat merancang sistem Saturday WMS.'
        : 'Processing 1,000+ items daily using WMS and barcode scanners with 99%+ accuracy. First-hand operational warehouse experience directly inspired the architecture of Saturday WMS.',
      highlights: isId
        ? ['Akurasi picking 99%+ untuk 1.000+ item/hari', 'Fondasi pengalaman nyata di balik proyek Saturday WMS']
        : ['99%+ picking accuracy for 1,000+ items daily', 'Real-world operational foundation behind Saturday WMS'],
    },
    {
      step: '04',
      period: isId ? 'Juli 2026 – Sekarang' : 'July 2026 – Present',
      type: isId ? 'Pendidikan Tinggi' : 'Higher Education',
      typeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Universitas Terbuka',
      role: isId ? 'S1 Sistem Informasi (Bachelor of Information Systems)' : 'Bachelor of Information Systems',
      location: 'Bogor, Indonesia',
      description: isId
        ? 'Menempuh studi sarjana Sistem Informasi dengan fokus mendalam pada rekayasa perangkat lunak, perancangan database relasional, analisis sistem TI, serta arsitektur backend modern.'
        : 'Pursuing a Bachelor of Information Systems with in-depth focus on software engineering, relational database design, IT systems analysis, and modern backend architectures.',
      highlights: isId
        ? ['Fokus: Rekayasa Perangkat Lunak & Arsitektur Basis Data', 'Penerapan langsung teori akademis pada proyek coding riil']
        : ['Focus: Software Engineering & Database Architecture', 'Direct practical application of coursework to real-world software'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#09090b] border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 dark:text-white tracking-[-0.035em] mb-3">
            {isId ? 'Perjalanan Karier & Edukasi' : 'Career & Education Journey'}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
            {isId
              ? 'Tahapan terstruktur bagaimana pengalaman operasional lapangan dan studi akademis membentuk keahlian rekayasa software saya.'
              : 'The sequential journey of how operational field experience and academic studies shape my software engineering craft.'}
          </p>
        </div>

        {/* Step-by-Step Structured Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 sm:space-y-10 border-l border-zinc-200 dark:border-zinc-800">
          {STEPS.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Step Circle Marker on line */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-950 dark:bg-white text-zinc-100 dark:text-zinc-950 flex items-center justify-center text-xs font-mono font-bold ring-4 ring-white dark:ring-[#09090b] shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
                {item.step}
              </div>

              {/* Linear Step Card */}
              <div className="linear-card rounded-2xl p-6 sm:p-8">
                
                {/* Meta row */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/90 dark:border-zinc-700">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <Calendar size={13} className="text-zinc-400 dark:text-zinc-500" />
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <MapPin size={13} className="text-zinc-400 dark:text-zinc-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-3.5">
                  {item.role}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={14} className="text-zinc-900 dark:text-zinc-100 mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
