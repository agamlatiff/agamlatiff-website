
import { MessageSquare, FileSignature, FolderInput, Palette, Code2, ClipboardCheck, Key, Rocket, ShieldCheck } from 'lucide-react';

export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Konsultasi Awal (Gratis)',
    description: 'Memahami masalah dan kebutuhan bisnis. Saya menganalisa problem, memberikan solusi, dan menentukan paket yang cocok (Basic/Premium/Pro).',
    icon: MessageSquare,
    deliverables: [
      'Analisa Masalah & Solusi',
      'Penentuan Paket',
      'Gambaran Project'
    ]
  },
  {
    id: 2,
    title: 'Penentuan Fitur & Kesepakatan',
    description: 'Menetapkan fitur lengkap, batasan pengerjaan, estimasi durasi, dan biaya. Client membayar DP (Uang Muka) untuk memulai produksi.',
    icon: FileSignature,
    deliverables: [
      'Dokumen List Fitur',
      'Timeline & Biaya',
      'Invoice DP'
    ]
  },
  {
    id: 3,
    title: 'Pengumpulan Data',
    description: 'Mengumpulkan aset seperti Logo, Foto Produk, Menu, dan Info Usaha. Jika belum ada konten, saya bantu rapikan agar siap pakai.',
    icon: FolderInput,
    deliverables: [
      'Aset Logo & Foto',
      'Data Menu/Produk',
      'Konten Website Lengkap'
    ]
  },
  {
    id: 4,
    title: 'Desain Awal (Mockup)',
    description: 'Saya membuat rancangan layout, warna, dan alur pengguna (User Flow) agar Anda tahu bentuk tampilan sistem sebelum coding dimulai.',
    icon: Palette,
    deliverables: [
      'Draft Layout/Tampilan',
      'Validasi Alur Sistem',
      'Revisi Desain'
    ]
  },
  {
    id: 5,
    title: 'Pembuatan Sistem',
    description: 'Tahap inti coding. Saya membangun Frontend (Tampilan), Backend (Sistem), Integrasi Database, dan Dashboard Admin.',
    icon: Code2,
    deliverables: [
      'Coding Sistem & API',
      'Integrasi Database',
      'Dashboard Owner'
    ]
  },
  {
    id: 6,
    title: 'Testing Bersama Client',
    description: 'Uji coba sistem. Anda mencoba fitur satu per satu untuk memastikan alur mudah dipakai dan tidak ada error (bug).',
    icon: ClipboardCheck,
    deliverables: [
      'Uji Coba Fitur',
      'Perbaikan Bug (QC)',
      'Penyesuaian Minor'
    ]
  },
  {
    id: 7,
    title: 'Pelunasan & Serah Terima',
    description: 'Setelah sistem OK, dilakukan pelunasan. Saya serahkan Full Source Code, Akses Dashboard, dan Aset Project kepada Anda.',
    icon: Key,
    deliverables: [
      'Pelunasan Project',
      'Serah Terima Source Code',
      'Akses Admin Penuh'
    ]
  },
  {
    id: 8,
    title: 'Launching / Go-Live',
    description: 'Sistem di-online-kan ke domain bisnis Anda. Setup server, email bisnis, dan monitoring awal agar siap digunakan pelanggan.',
    icon: Rocket,
    deliverables: [
      'Deploy ke Server',
      'Domain Aktif',
      'Sistem 100% Online'
    ]
  }
];
