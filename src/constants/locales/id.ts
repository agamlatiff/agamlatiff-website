export const id = {
  hero: {
    badge: "Full-Stack Web Developer",
    headline: {
      part1: "Membangun Produk Digital",
      part2: "untuk Pertumbuhan Bisnis"
    },
    subheadline: "Saya membantu bisnis mengubah masalah kompleks menjadi aplikasi web yang <strong>untung dan efisien</strong>. Fokus saya bukan sekadar kode, tapi <strong>hasil nyata</strong> untuk bisnis Anda.",
    cta: {
      consult: "Hire Me",
      processing: "Memproses...",
      roi: "Konsultasi Gratis"
    }
  },
  nav: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak"
  },
  techStack: {
    title: "Technology Stack yang Saya Gunakan"
  },
  projects: {
    section: {
      title: "Featured Projects",
      subtitle: "Beberapa hasil karya terbaik yang telah saya kerjakan untuk klien berbagai industri.",
      loading: {
        text1: 'Memuat proyek',
        text2: 'Mengambil portofolio',
        text3: 'Menyiapkan showcase',
        text4: 'Hampir siap',
        subtitle: 'Menyusun karya terbaik untuk Anda'
      },
      learnMore: 'Pelajari Project Ini',
      featured: 'Unggulan',
      watchDemo: 'Tonton Demo',
      viewDetail: 'Lihat Detail'
    },
    '5': {
      title: 'Fly Higher - Modern Flight Booking Platform',
      shortDescription: 'Platform pemesanan tiket pesawat end-to-end yang dirancang untuk memberikan pengalaman reservasi penerbangan yang mulus dan efisien.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Platform pemesanan tiket pesawat end-to-end yang dirancang untuk memberikan pengalaman reservasi penerbangan yang mulus dan efisien. Sistem ini menangani seluruh alur perjalanan pengguna, mulai dari pencarian penerbangan, pemilihan kursi interaktif, hingga pembayaran aman dan penerbitan tiket elektronik.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Next.js 14 (App Router) & React 18</li>
              <li>TypeScript & Tailwind CSS 3</li>
              <li>Radix UI & Shadcn UI</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend & Tools:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Lucia Auth v3</li>
              <li>Prisma ORM & PostgreSQL</li>
              <li>Midtrans Payment Gateway</li>
              <li>TanStack Query & Server Actions</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Fitur Utama:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Sistem Reservasi Cerdas:</strong> Pencarian penerbangan real-time dengan filter rute, tanggal, dan kelas kursi.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Interactive Seat Selection:</strong> Visualisasi denah kursi pesawat yang interaktif untuk memilih kursi (Economy, Business, First Class).</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>E-Ticket Management:</strong> Pembuatan tiket digital otomatis dengan QR Code dan detail penerbangan lengkap.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Role-Based Dashboard:</strong> Riwayat pemesanan/wishlist User dan manajemen data/rute/user untuk Admin.</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Dampak Bisnis:</h4>
        <ul class="space-y-2">
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Skallabilitas Tinggi:</strong> Arsitektur serverless-ready (Vercel) yang mampu menangani lonjakan trafik saat musim liburan.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Keamanan Transaksi:</strong> Integrasi payment gateway terpercaya dan password hashing standar industri (bcryptjs).</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Efisiensi Operasional:</strong> Automasi proses ticketing mengurangi beban kerja manual dan meminimalisir human error.</span>
           </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
         "Solusi pemesanan tiket penerbangan yang cepat, aman, dan intuitif untuk era perjalanan modern."
      </p>
      `,
      industry: 'Travel & Tourism',
      date: 'Full-Stack Developer'
    },
    '4': {
      title: 'Suka Baca - Intelligent Library Management System',
      shortDescription: 'Platform operasional perpustakaan komprehensif yang dirancang untuk memodernisasi pengalaman peminjaman. Sistem ini menyederhanakan seluruh siklus peminjaman buku.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Platform operasional perpustakaan komprehensif yang dirancang untuk memodernisasi pengalaman peminjaman. Sistem ini menyederhanakan seluruh siklus peminjaman buku, mulai dari penelusuran katalog dan permintaan peminjaman multi-langkah hingga perhitungan denda otomatis dan pengawasan admin.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Laravel Blade & Livewire</li>
              <li>Tailwind CSS 3</li>
              <li>Alpine.js untuk Interaktivitas</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend & Tools:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Laravel 11 Framework</li>
              <li>FilamentPHP Admin Panel</li>
              <li>MySQL / SQLite Database</li>
              <li>OpenLibrary API Integration</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Fitur Utama:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Alur Peminjaman Cerdas:</strong> Wizard multi-langkah yang dipandu untuk meminjam buku dan mengajukan perpanjangan pinjaman.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Pusat Komando Admin:</strong> Dashboard berbasis Filament yang canggih untuk mengelola katalog, keanggotaan, dan sirkulasi.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Katalogisasi Otomatis:</strong> Integrasi dengan OpenLibrary API untuk mengambil sampul buku dan metadata otomatis via ISBN.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Manajemen Denda:</strong> Sistem khusus untuk melacak item yang terlambat dan memproses pembayaran denda.</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Dampak Bisnis:</h4>
        <ul class="space-y-2">
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Efisiensi Operasional:</strong> Mengotomatiskan tugas manual seperti pelacakan jatuh tempo dan hitung denda.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Akurasi Data:</strong> Manajemen terpusat memastikan inventaris dan data peminjam tetap konsisten.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Keterlibatan Pengguna:</strong> Pengalaman digital mandiri yang mulus bagi anggota untuk akses sumber daya.</span>
           </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
         "Memodernisasi operasional perpustakaan dengan pengalaman yang mulus, otomatis, dan ramah pengguna."
      </p>
      `,
      industry: 'Education & Public Sector',
      date: 'Full-Stack Developer'
    },
    '1': {
      title: 'UpSkills - E-Learning Management System',
      shortDescription: 'Platform e-learning berbasis web yang komprehensif untuk membantu pengguna meningkatkan kemampuan melalui pembelajaran online terstruktur.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        UpSkills adalah platform e-learning berbasis web yang komprehensif yang dirancang untuk membantu pengguna meningkatkan kemampuan mereka melalui pembelajaran online yang terstruktur. Platform ini menyediakan lingkungan modern untuk menelusuri kursus, melacak kemajuan, pengembangan skill, dan akses berbasis langganan ke konten premium.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>React 19 dengan TypeScript</li>
              <li>Vite & React Router DOM</li>
              <li>Zustand untuk State Management</li>
              <li>Axios & @google/genai</li>
              <li>Zod untuk Validasi Schema</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Laravel (PHP Framework)</li>
              <li>MySQL/PostgreSQL/SQLite</li>
              <li>Laravel Sanctum untuk Autentikasi</li>
              <li>Eloquent ORM</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Dampak:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
            <span><strong>Demokratisasi Pendidikan:</strong> Menyediakan lingkungan belajar terstruktur yang dapat diakses oleh semua kalangan.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Engagement User:</strong> Fitur pelacakan progres, wishlist, dan chatbot AI meningkatkan keterlibatan pengguna.</span>
          </li>
           <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Efisiensi Pengajar:</strong> Dashboard mentor memudahkan pembuatan dan pengelolaan konten kursus.</span>
          </li>
        </ul>
      </div>
      `,
      industry: 'Education & EdTech',
      date: 'Full-Stack Developer'
    },
    '2': {
      title: 'Saturday - Warehouse & Merchant Management System',
      shortDescription: 'Sistem manajemen inventaris dan transaksi full-stack yang dirancang untuk mengelola gudang dan merchant.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Sistem manajemen inventaris dan transaksi full-stack yang <strong>dirancang untuk mengelola gudang dan merchant</strong>. Memungkinkan pelacakan produk, manajemen stok, dan transaksi penjualan dengan perhitungan pajak otomatis PPN 12%.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>React 19 dengan TypeScript</li>
              <li>Vite & Tailwind CSS 4</li>
              <li>React Router DOM & TanStack Query</li>
              <li>React Hook Form + Zod</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Laravel 12 (PHP 8.2+)</li>
              <li>Laravel Sanctum & Spatie Permission</li>
              <li>MySQL / PostgreSQL</li>
              <li>Repository - Service Pattern</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Fitur Utama:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
            <span><strong>Role-based Access Control:</strong> Peran Manager (Admin) & Keeper (Staf Merchant).</span>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
            <span><strong>Manajemen Stok:</strong> Pelacakan di tingkat gudang dan merchant dengan validasi real-time.</span>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
            <span><strong>Transaksi:</strong> Pemrosesan multi-langkah dengan fitur keranjang dan otomatis PPN 12%.</span>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
            <span><strong>Desain Responsif:</strong> Dioptimalkan untuk penggunaan desktop, tablet, dan ponsel.</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Dampak Bisnis:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Efisiensi Operasional:</strong> Pelacakan stok terpusat menghilangkan pekerjaan manual.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Akurasi & Transparansi:</strong> Validasi otomatis mencegah overselling dan menjamin kepatuhan pajak.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Keputusan Lebih Baik:</strong> Dashboard menyediakan wawasan pendapatan dan penjualan.</span>
          </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
        "Status: **Production-ready**. Operasi CRUD berfungsi penuh, alur transaksi lengkap, dan manajemen stok operasional."
      </p>
      `,
      industry: 'Logistik & Supply Chain',
      date: 'Full-Stack Developer'
    },
    '3': {
      title: 'Alizon Store - Full-Stack E-Commerce',
      shortDescription: 'Aplikasi web e-commerce full-stack yang dirancang untuk memberikan pengalaman belanja online yang lengkap.',
      fullDescription: `
      <p class="mb-6 text-lg leading-relaxed">
        Aplikasi web e-commerce full-stack yang dirancang untuk memberikan pengalaman belanja online yang lengkap. Platform ini memungkinkan pengguna menelusuri produk, mengelola keranjang belanja, wishlist, dan menyelesaikan pembelian melalui integrasi pembayaran Stripe yang aman.
      </p>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Tech Stack:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Frontend:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Next.js 15 (App Router) & React 19</li>
              <li>TypeScript & Tailwind CSS 4</li>
              <li>Zustand untuk State Management</li>
              <li>Radix UI & Lucide React</li>
            </ul>
          </div>
          <div>
            <strong className="block mb-1 text-slate-700 dark:text-slate-300">Backend & Tools:</strong>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>NextAuth v5 (Auth.js)</li>
              <li>Prisma ORM & PostgreSQL</li>
              <li>Integrasi Pembayaran Stripe</li>
              <li>TanStack Query & Zod</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Fitur Utama:</h4>
        <ul class="space-y-2">
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Alur E-Commerce Lengkap:</strong> Penelusuran produk, keranjang, wishlist, dan checkout aman.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Seller Dashboard:</strong> Antarmuka khusus untuk mengelola produk dan melacak pesanan.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Pembayaran Aman:</strong> Integrasi Stripe Checkout dengan webhook untuk update pesanan real-time.</span>
          </li>
          <li class="flex gap-3">
             <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
             <span><strong>Autentikasi:</strong> Login dan registrasi aman dengan manajemen sesi NextAuth v5.</span>
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-bold mb-3 text-slate-900 dark:text-white">Dampak Bisnis:</h4>
        <ul class="space-y-2">
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Template Siap Produksi:</strong> Fondasi yang skalabel untuk meluncurkan bisnis e-commerce nyata.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Transaksi Aman:</strong> Pemrosesan pembayaran sesuai standar PCI melalui Stripe.</span>
           </li>
           <li class="flex gap-3">
              <span class="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary"></span>
              <span><strong>Optimasi SEO:</strong> Server-side rendering meningkatkan visibilitas mesin pencari.</span>
           </li>
        </ul>
      </div>

      <p class="italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-slate-50 dark:bg-slate-800 dark:border-slate-600 rounded-r">
         "Solusi e-commerce modern, aman, dan skalabel yang dibangun dengan teknologi web terkini."
      </p>
      `,
      industry: 'E-Commerce & Retail',
      date: 'Full-Stack Developer'
    }
  },
  process: {
    title: "Project Workflow",
    description: "Bagaimana saya bekerja mengubah ide Anda menjadi produk digital yang **berkualitas tinggi**.",
    steps: [
      {
        title: "Discovery & Planning",
        description: "Kita diskusikan ide, target user, dan fitur kunci. Saya akan buatkan technical plan yang jelas agar kita satu visi.",
        deliverables: ["Requirement Doc", "Technical Plan", "Timeline"]
      },
      {
        title: "Design & Prototyping",
        description: "Membuat wireframe dan UI design. Anda bisa melihat visual aplikasi sebelum saya mulai menulis kode.",
        deliverables: ["UI Design (Figma)", "User Flow"]
      },
      {
        title: "Development",
        description: "Fase coding dimulai. Saya membangun sistem Frontend dan Backend secara paralel dengan update rutin setiap minggu.",
        deliverables: ["Weekly Update", "Staging Link"]
      },
      {
        title: "Testing & Launch",
        description: "Uji coba menyeluruh untuk memastikan tidak ada bug. Deploy ke server produksi dan aplikasi siap digunakan user.",
        deliverables: ["Bug Free App", "Deployment", "Documentation"]
      },
      {
        title: "Pembuatan Sistem",
        description: "Tahap inti coding. Saya membangun Frontend (Tampilan), Backend (Sistem), Integrasi Database, dan Dashboard Admin.",
        deliverables: ["Coding Sistem & API", "Integrasi Database", "Dashboard Owner"]
      },
      {
        title: "Testing Bersama Client",
        description: "Uji coba sistem. Anda mencoba fitur satu per satu untuk memastikan alur mudah dipakai dan tidak ada error (bug).",
        deliverables: ["Uji Coba Fitur", "Perbaikan Bug (QC)", "Penyesuaian Minor"]
      },
      {
        title: "Pelunasan & Serah Terima",
        description: "Setelah sistem OK, dilakukan pelunasan. Saya serahkan Full Source Code, Akses Dashboard, dan Aset Project kepada Anda.",
        deliverables: ["Pelunasan Project", "Serah Terima Source Code", "Akses Admin Penuh"]
      },
      {
        title: "Launching / Go-Live",
        description: "Sistem di-online-kan ke domain bisnis Anda. Setup server, email bisnis, dan monitoring awal agar siap digunakan pelanggan.",
        deliverables: ["Deploy ke Server", "Domain Aktif", "Sistem 100% Online"]
      },
      {
        title: "Maintenance & Support",
        description: "Layanan purna jual. Garansi perbaikan bug gratis, backup data aman, dan bantuan jika ada kendala penggunaan.",
        deliverables: ["Perbaikan Bug Gratis", "Backup Data Berkala", "Support WhatsApp"]
      }
    ],
    cta: {
      ready: "Sudah paham workflow-nya?",
      time: "Sekarang saatnya",
      condition: "eksekusi ide Anda.",
      button: "Mulai Project"
    }
  },
  cta: {
    title: "Butuh Developer untuk Tim Anda?",
    subtitle: "Saya terbuka untuk kesempatan freelance project atau kontrak kerjasama jangka panjang.",
    button: "Hubungi Saya"
  },
  about: {
    title: "Who Am I?",
    subtitle: "Agam Latifullah — Full-Stack Web Developer",
    quote: "Saya tidak hanya menulis kode, saya memberikan solusi bisnis.",
    whyChooseMe: "Mengapa Memilih Saya?",
    description1: "Banyak developer bisa membuat kode yang 'jalan', tapi tidak sedikit yang meninggalkan 'utang teknis' yang mahal di kemudian hari. Saya memposisikan diri sebagai <strong>Technical Partner</strong> Anda.",
    description2: "Saya membangun sistem yang tidak hanya canggih secara teknologi (React, Node.js, Laravel), tapi juga <strong>mudah dirawat, aman, dan siap untuk skala besar</strong>. Investasi teknologi Anda harus menghasilkan ROI, bukan sakit kepala.",
    values: [
      { title: "Business First", desc: "Setiap baris kode harus memiliki dampak positif terhadap tujuan bisnis Anda." },
      { title: "Long-term Asset", desc: "Membangun software sebagai aset jangka panjang, bukan beban biaya." },
      { title: "Transparent", desc: "Komunikasi yang jujur tentang risiko, estimasi, dan progres." },
      { title: "Reliable", desc: "Pengiriman tepat waktu dengan kualitas yang sudah teruji." }
    ]
  },
  footer: {
    cta: {
      title: "Punya Project Menarik?",
      description: "Mari diskusikan ide Anda. Saya siap membantu merealisasikannya menjadi produk digital yang berkualitas.",
      button: "Hubungi Saya"
    },
    brandDescription: "Full-Stack Developer. Membantu bisnis bertransformasi digital dengan solusi teknologi yang tepat guna.",
    menus: {
      main: "Navigasi",
      services: "Layanan",
      contact: "Kontak",
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      process: "Workflow"
    },
    location: "Bogor, Indonesia.<br/>(Remote Available Worldwide)",
    rights: "All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  },
  modal: {
    popular: "Unggulan",
    featureBreakdown: "Detail Teknis:",
    problem: "Tantangan:",
    solution: "Solusi:",
    benefit: "Impact:",
    detailsPreparing: "Detail sedang disiapkan.",
    getPromo: "Lihat Live Demo",
    bugWarranty: "Garansi Bug & Support",
    sourceCode: "Include Source Code"
  },
  whatsappMessages: {
    consultation: "Hi Agam, I would like a free consultation regarding website/app development for my business.",
    general: "Hi Agam, I'm interested in your services and would like to discuss a potential project."
  },
  contact: {
    title: "Let's Connect",
    subtitle: "Start Project",
    headline: "Siap Memulai Project Digital Anda?",
    subheadline: "Konsultasikan ide Anda secara gratis.",
    info: {
      title: "Kontak Info",
      description: "Tersedia untuk Freelance & Remote Work.",
      email: "Email",
      status: "Status",
      open: "Open for Projects",
      ai: "AI Assistant",
      chat: "Chat WhatsApp",
      findMe: "Social Media:"
    },
    form: {
      name: { label: "Nama", placeholder: "Nama Anda", error: { required: "Wajib diisi", min: "Minimal 2 karakter" } },
      phone: { label: "WhatsApp", placeholder: "0812...", error: { required: "Wajib diisi", format: "Format nomor salah" } },
      email: { label: "Email", placeholder: "email@contoh.com", error: { required: "Wajib diisi", format: "Format email salah" } },
      message: { label: "Pesan", placeholder: "Ceritakan project Anda...", error: { required: "Wajib diisi", min: "Minimal 10 karakter" } },
      submit: {
        idle: "Kirim Pesan",
        sending: "Mengirim...",
        success: "Terkirim!",
        error: "Gagal Kirim"
      },
      toast: {
        success: { title: "Terkirim", message: "Pesan Anda sudah saya terima." },
        error: { title: "Error", message: "Gagal mengirim pesan." }
      }
    }
  }
};
