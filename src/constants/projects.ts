import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: '5',
    title: 'Fly Higher - Modern Flight Booking Platform',
    slug: 'fly-higher',
    shortDescription: 'Platform pemesanan tiket pesawat end-to-end yang dirancang untuk memberikan pengalaman reservasi penerbangan yang mulus dan efisien.', // Fallback
    fullDescription: '', // Will be handled by locale files
    heroImage: '/flyhigher/1.png',
    gallery: [
      '/flyhigher/1.png',
      '/flyhigher/2.png',
      '/flyhigher/3.png',
      '/flyhigher/4.png',
      '/flyhigher/5.png',
      '/flyhigher/6.png',
      '/flyhigher/7.png',
      '/flyhigher/8.png',
      '/flyhigher/9.png',
      '/flyhigher/10.png',
      '/flyhigher/11.png',
      '/flyhigher/12.png',
      '/flyhigher/13.png',
      '/flyhigher/14.png',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Midtrans'],
    industry: 'Travel & Tourism',
    date: 'Full-Stack Developer',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Suka Baca - Intelligent Library Management System',
    slug: 'suka-baca',
    shortDescription: 'Platform operasional perpustakaan komprehensif yang dirancang untuk memodernisasi pengalaman peminjaman. Sistem ini menyederhanakan seluruh siklus peminjaman buku.', // Fallback/Basic description
    fullDescription: '', // Will be handled by locale files
    heroImage: '/sukabaca/1.png',
    gallery: [
      '/sukabaca/1.png',
      '/sukabaca/2.png',
      '/sukabaca/3.png',
      '/sukabaca/4.png',
      '/sukabaca/5.png',
      '/sukabaca/6.png',
      '/sukabaca/7.png',
      '/sukabaca/8.png',
      '/sukabaca/9.png',
      '/sukabaca/10.png',
      '/sukabaca/11.png',
      '/sukabaca/12.png',
      '/sukabaca/13.png',
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
    heroImage: '/alizonstore/thumbnail-3.png',
    gallery: [
      '/alizonstore/1.png',
      '/alizonstore/2.png',
      '/alizonstore/3.png',
      '/alizonstore/4.png',
      '/alizonstore/5.png',
      '/alizonstore/6.png',
      '/alizonstore/7.png',
      '/alizonstore/8.png',
      '/alizonstore/9.png',
      '/alizonstore/10.png',
      '/alizonstore/11.png',
      '/alizonstore/12.png',
      '/alizonstore/13.png',
      '/alizonstore/14.png',
    ],
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Midtrans Gateway'],
    industry: 'Retail & Fashion',
    date: 'Oktober 2023',
    isFeatured: true,
    liveLink: 'https://alizonstore.vercel.app',
    repoLink: 'https://github.com/agamlatiff/alizon-store'
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
    heroImage: '/saturday/thumbnail-2.png',
    gallery: [
      '/saturday/1.png',
      '/saturday/2.png',
      '/saturday/3.png',
      '/saturday/4.png',
      '/saturday/5.png',
      '/saturday/6.png',
      '/saturday/7.png',
      '/saturday/8.png',
    ],
    techStack: ['Laravel', 'React', 'PostgreSQL', 'Barcode Scanner'],
    industry: 'Logistik & Supply Chain',
    date: 'Desember 2023',
    isFeatured: true,
    youtubeId: 'Sba29tQRzyE', // Video Demo tersedia (Ganti ID jika ada yang baru)
    repoLink: 'https://github.com/agamlatiff/saturday'
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
    heroImage: '/upskills/thumbnail-1.png',
    gallery: [
      '/upskills/1.png',
      '/upskills/2.png',
      '/upskills/3.png',
      '/upskills/4.png',
      '/upskills/5.png',
      '/upskills/6.png',
      '/upskills/7.png',
      '/upskills/8.png',
      '/upskills/9.png',
      '/upskills/10.png',
      '/upskills/11.png',
      '/upskills/12.png',
    ],
    techStack: ['Laravel', 'React.js', 'Redis', 'MySQL'],
    industry: 'Education & EdTech',
    date: 'Januari 2024',
    isFeatured: true,
    youtubeId: '-qq7Lu6KJ0o', // Video Demo tersedia
    repoLink: 'https://github.com/agamlatiff/upskills'
  }
];

