import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'Hired.io - Modern Job Portal Platform',
    slug: 'hired-io',
    shortDescription: 'An end-to-end recruitment platform designed to bridge the gap between talented professionals and innovative companies.',
    fullDescription: '', // Will be handled by locale files
    heroImage: '/hiredio/1.webp',
    gallery: [
      '/hiredio/1.webp',
      '/hiredio/2.webp',
      '/hiredio/3.webp',
      '/hiredio/4.webp',
      '/hiredio/5.webp',
      '/hiredio/6.webp',
      '/hiredio/7.webp',
      '/hiredio/8.webp',
      '/hiredio/9.webp',
      '/hiredio/10.webp',
      '/hiredio/11.webp',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Supabase'],
    industry: 'Recruitment & HR Tech',
    date: 'Full-Stack Developer',
    isFeatured: true,
    liveLink: 'https://hired-io.vercel.app',
    tags: ['SaaS', 'Recruitment', 'B2B'],
    desc: {
      id: 'Platform rekrutmen end-to-end yang menjembatani profesional berbakat dengan perusahaan inovatif.',
      en: 'An end-to-end recruitment platform designed to bridge the gap between talented professionals and innovative companies.'
    }
  },
  {
    id: '5',
    title: 'Fly Higher - Modern Flight Booking Platform',
    slug: 'fly-higher',
    shortDescription: 'Platform pemesanan tiket pesawat end-to-end yang dirancang untuk memberikan pengalaman reservasi penerbangan yang mulus dan efisien.', // Fallback
    fullDescription: '', // Will be handled by locale files
    heroImage: '/flyhigher/1.webp',
    gallery: [
      '/flyhigher/1.webp',
      '/flyhigher/2.webp',
      '/flyhigher/3.webp',
      '/flyhigher/4.webp',
      '/flyhigher/5.webp',
      '/flyhigher/6.webp',
      '/flyhigher/7.webp',
      '/flyhigher/8.webp',
      '/flyhigher/9.webp',
      '/flyhigher/10.webp',
      '/flyhigher/11.webp',
      '/flyhigher/12.webp',
      '/flyhigher/13.webp',
      '/flyhigher/14.webp',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Midtrans'],
    industry: 'Travel & Tourism',
    date: 'Full-Stack Developer',
    isFeatured: true,
    liveLink: 'https://fly-higher.vercel.app',
    tags: ['Booking System', 'Travel', 'Architecture'],
    desc: {
      id: 'Platform pemesanan tiket pesawat end-to-end yang dirancang untuk memberikan pengalaman reservasi penerbangan yang mulus dan efisien.',
      en: 'End-to-end flight booking platform designed to provide a seamless and efficient flight reservation experience.'
    }
  },
  {
    id: '4',
    title: 'Suka Baca - Intelligent Library Management System',
    slug: 'suka-baca',
    shortDescription: 'Platform operasional perpustakaan komprehensif yang dirancang untuk memodernisasi pengalaman peminjaman. Sistem ini menyederhanakan seluruh siklus peminjaman buku.', // Fallback/Basic description
    fullDescription: '', // Will be handled by locale files
    heroImage: '/sukabaca/1.webp',
    gallery: [
      '/sukabaca/1.webp',
      '/sukabaca/2.webp',
      '/sukabaca/3.webp',
      '/sukabaca/4.webp',
      '/sukabaca/5.webp',
      '/sukabaca/6.webp',
      '/sukabaca/7.webp',
      '/sukabaca/8.webp',
      '/sukabaca/9.webp',
      '/sukabaca/10.webp',
      '/sukabaca/11.webp',
      '/sukabaca/12.webp',
      '/sukabaca/13.webp',
    ],
    techStack: ['Laravel 11', 'Filament', 'Livewire', 'Alpine.js', 'MySQL'],
    industry: 'Education & Public Sector',
    date: 'December 2024',
    isFeatured: true,
    tags: ['Management System', 'Education', 'Public Sector'],
    desc: {
      id: 'Platform operasional perpustakaan komprehensif yang memodernisasi pengalaman peminjaman buku.',
      en: 'Comprehensive library operational platform designed to modernize the book lending experience.'
    }
    // Add repo link if available or leave undefined
  },
  {
    id: '3',
    title: 'Custom Brand E-Commerce & Membership Platform',
    slug: 'ecommerce-fashion',
    shortDescription: 'An online store platform that allows businesses to sell products on the internet, accept payments, and manage orders from one place.',
    fullDescription: '', // Handled by locale files
    heroImage: '/alizonstore/1.webp',
    gallery: [
      '/alizonstore/1.webp',
      '/alizonstore/2.webp',
      '/alizonstore/3.webp',
      '/alizonstore/4.webp',
      '/alizonstore/5.webp',
      '/alizonstore/6.webp',
      '/alizonstore/7.webp',
      '/alizonstore/8.webp',
      '/alizonstore/9.webp',
      '/alizonstore/10.webp',
      '/alizonstore/11.webp',
      '/alizonstore/12.webp',
      '/alizonstore/13.webp',
      '/alizonstore/14.webp',
    ],
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Midtrans Gateway'],
    industry: 'Retail & Fashion',
    date: 'Oktober 2023',
    isFeatured: true,
    liveLink: 'https://alizonstore.vercel.app',
    tags: ['E-Commerce', 'Retail', 'Payment Gateway'],
    desc: {
      id: 'Platform toko online yang memungkinkan bisnis menjual produk, menerima pembayaran, dan mengelola pesanan dalam satu tempat.',
      en: 'An online store platform that allows businesses to sell products, accept payments, and manage orders from one place.'
    }
  },
  {
    id: '2',
    title: 'Saturday - Warehouse Management System (WMS)',
    slug: 'warehouse-management',
    shortDescription: 'Warehouse management system that helps distributors track inventory, manage multi-location stock, and prevent stock discrepancies.',
    fullDescription: '', // Handled by locale files
    heroImage: '/saturday/1.webp',
    gallery: [
      '/saturday/1.webp',
      '/saturday/2.webp',
      '/saturday/3.webp',
      '/saturday/4.webp',
      '/saturday/5.webp',
      '/saturday/6.webp',
      '/saturday/7.webp',
      '/saturday/8.webp',
    ],
    techStack: ['Laravel', 'React', 'PostgreSQL', 'Barcode Scanner'],
    industry: 'Logistik & Supply Chain',
    date: 'Desember 2023',
    isFeatured: true,
    youtubeId: 'Sba29tQRzyE',
    tags: ['WMS', 'Logistics', 'Inventory'],
    desc: {
      id: 'Sistem manajemen gudang untuk melacak inventaris, mengelola stok multi-lokasi, dan mencegah selisih stok.',
      en: 'Warehouse management system that helps distributors track inventory, manage multi-location stock, and prevent stock discrepancies.'
    }
  },
  {
    id: '1',
    title: 'Upskills - Learning Management System (LMS)',
    slug: 'lms-platform',
    shortDescription: 'E-Learning platform that helps people learn new skills online with structured courses, progress tracking, and subscription-based access.',
    fullDescription: '', // Handled by locale files
    heroImage: '/upskills/1.webp',
    gallery: [
      '/upskills/1.webp',
      '/upskills/2.webp',
      '/upskills/3.webp',
      '/upskills/4.webp',
      '/upskills/5.webp',
      '/upskills/6.webp',
      '/upskills/7.webp',
      '/upskills/8.webp',
      '/upskills/9.webp',
      '/upskills/10.webp',
      '/upskills/11.webp',
      '/upskills/12.webp',
    ],
    techStack: ['Laravel', 'React.js', 'Redis', 'MySQL'],
    industry: 'Education & EdTech',
    date: 'Januari 2024',
    isFeatured: true,
    youtubeId: '-qq7Lu6KJ0o',
    tags: ['LMS', 'Education', 'Calculus'],
    desc: {
      id: 'Platform E-Learning yang membantu orang belajar skill baru dengan kursus terstruktur dan tracking progress.',
      en: 'E-Learning platform that helps people learn new skills online with structured courses, progress tracking, and subscription-based access.'
    }
  }
];

