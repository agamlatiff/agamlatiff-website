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
    // Add repo link if available or leave undefined
  },
  {
    id: '3',
    title: 'Custom Brand E-Commerce & Membership Platform',
    slug: 'ecommerce-fashion',
    shortDescription: 'Platform toko online eksklusif dengan identitas brand kuat. Fitur membership berjenjang, manajemen varian produk kompleks, dan integrasi logistik otomatis.',
    fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Klien ingin lepas dari ketergantungan marketplace dan perang harga. Website ini dibangun untuk membangun <strong>Direct-to-Consumer (DTC) brand</strong> dengan pengalaman belanja yang premium dan personal.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Fitur Bisnis:</h4>
        <ul class="space-y-3">
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Manajemen Varian Kompleks:</strong> Mendukung produk fashion dengan banyak variasi (Warna, Ukuran, Bahan) dan stok terpisah untuk tiap SKU.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Membership & Loyalty Point:</strong> Pelanggan mendapatkan poin setiap transaksi yang bisa ditukar diskon, meningkatkan repeat order.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Automated Logistics:</strong> Integrasi API RajaOngkir Pro untuk hitung ongkir otomatis JNE, J&T, SiCepat, dan print label pengiriman resi otomatis.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Payment Gateway Full:</strong> Menerima pembayaran via Virtual Account, E-Wallet (OVO/Gopay), dan Kartu Kredit secara otomatis (Instant Verification).</span>
            </li>
        </ul>
      </div>
      
      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
        "Website ini membantu brand membangun database pelanggan sendiri (First Party Data) yang sangat berharga untuk marketing jangka panjang."
      </p>
    `,
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
  },
  {
    id: '2',
    title: 'Saturday - Warehouse Management System (WMS)',
    slug: 'warehouse-management',
    shortDescription: 'Sistem manajemen gudang terpusat untuk distributor. Kontrol stok masuk/keluar, transfer antar cabang, dan stock opname digital real-time.',
    fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Dikembangkan untuk perusahaan distributor yang memiliki masalah klasik: <strong>stok selisih (shrinkage) dan barang hilang</strong>. Sistem ini mendigitalkan seluruh alur barang dari penerimaan (Inbound) hingga pengiriman (Outbound).
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Solusi Operasional:</h4>
        <ul class="space-y-3">
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Multi-Gudang Realtime:</strong> Owner bisa memantau stok di Gudang Pusat dan 5 Cabang lainnya dalam satu dashboard tanpa perlu menelpon admin.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Digital Stock Opname:</strong> Staff gudang melakukan opname menggunakan scanner barcode/HP. Hasil langsung terekam dan selisih stok terhitung otomatis.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Transfer Stok Antar Cabang:</strong> Fitur pengajuan mutasi barang antar gudang dengan approval system (Surat Jalan Digital).</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Alert Minimum Stok:</strong> Notifikasi otomatis jika stok barang fast-moving menipis, mencegah lost sales.</span>
            </li>
        </ul>
      </div>
    `,
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
    youtubeId: 'Sba29tQRzyE', // Video Demo tersedia (Ganti ID jika ada yang baru)
  },
  {
    id: '1',
    title: 'Upskills - Learning Management System (LMS)',
    slug: 'lms-platform',
    shortDescription: 'Solusi E-Learning terpadu untuk orang yang ingin belajar skill baru. Mengelola materi pembelajaran dan multi role admin, mentor dan student.',
    fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Project ini dikembangkan untuk siapapun yang ingin mengembangkan skill diluar pendidikan. Tantangan utamanya adalah menangani <strong>user yang ingin belajar skill baru</strong> untuk masa depan yang dia inginkan.
      </p>
      
      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Fitur Unggulan:</h4>
        <ul class="space-y-3">
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>User bisa baca materi pembelajaran:</strong> materi pembelajaran harus mudah dipahami agar user bisa belajar sendiri.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>User bisa berlangganan: </strong> untuk belajar skill baru dengan harga yang terjangkau.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Manajemen Kelas & Materi:</strong> Guru dapat upload materi (PDF/Video), memberikan tugas, dan memantau progress belajar siswa secara real-time.</span>
            </li>
            <li class="flex gap-3">
                <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
                <span><strong>Raport & Analitik Nilai:</strong> Nilai ujian keluar instan. Guru mendapatkan grafik analisis pemahaman siswa per mata pelajaran.</span>
            </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
        "Sistem ini berhasil memangkas waktu koreksi ujian guru hingga 90% dan menghemat biaya cetak kertas ujian sepenuhnya."
      </p>
    `,
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
    youtubeId: '-qq7Lu6KJ0o', // Video Demo tersedia
  }
];

