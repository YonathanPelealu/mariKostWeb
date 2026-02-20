import {
  Building2,
  CheckSquare,
  BarChart3,
  MessageSquare,
  BedDouble,
  Upload,
  History,
  Bell,
} from "lucide-react";

const ownerFeatures = [
  {
    icon: Building2,
    title: "Manajemen Properti & Kamar",
    description:
      "Kelola banyak properti dan kamar sekaligus. Atur harga, fasilitas, dan status kamar dengan mudah.",
    color: "bg-blue-50 text-primary",
  },
  {
    icon: CheckSquare,
    title: "Verifikasi Bukti Pembayaran",
    description:
      "Terima dan verifikasi bukti pembayaran dari penghuni langsung di aplikasi. Tolak dengan catatan jika diperlukan.",
    color: "bg-green-50 text-success",
  },
  {
    icon: BarChart3,
    title: "Laporan & Statistik Pendapatan",
    description:
      "Pantau tingkat hunian, pendapatan bulanan, dan pembayaran tertunggak melalui dashboard yang informatif.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Notifikasi WhatsApp Otomatis",
    description:
      "Sistem mengirim notifikasi WhatsApp otomatis: reminder jatuh tempo, konfirmasi verifikasi, dan peringatan keterlambatan.",
    color: "bg-orange-50 text-secondary",
  },
];

const tenantFeatures = [
  {
    icon: BedDouble,
    title: "Info Kamar & Fasilitas Lengkap",
    description:
      "Lihat detail kamar, fasilitas tersedia, dan informasi tagihan bulanan kapan saja dan di mana saja.",
    color: "bg-blue-50 text-primary",
  },
  {
    icon: Upload,
    title: "Upload Bukti Pembayaran",
    description:
      "Bayar sewa dan unggah bukti transfer langsung dari aplikasi. Mendukung format gambar dan PDF.",
    color: "bg-green-50 text-success",
  },
  {
    icon: History,
    title: "Riwayat Pembayaran Lengkap",
    description:
      "Akses riwayat pembayaran bulan lalu dengan status lengkap: pending, diverifikasi, atau ditolak.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Bell,
    title: "Reminder Jatuh Tempo Otomatis",
    description:
      "Dapatkan notifikasi WhatsApp 3 hari sebelum jatuh tempo agar tidak pernah telat bayar sewa.",
    color: "bg-orange-50 text-secondary",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="feature-card">
      <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Fitur Unggulan
          </span>
          <h2 className="section-title">
            Solusi Lengkap untuk Semua Pihak
          </h2>
          <p className="section-subtitle">
            MariKost dirancang khusus untuk memenuhi kebutuhan pemilik kos dan penghuni dalam satu platform terpadu.
          </p>
        </div>

        {/* Owner Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-neutral-200" />
            <div className="flex items-center gap-2 bg-primary text-white text-sm font-bold px-5 py-2 rounded-full shadow-md">
              <Building2 className="w-4 h-4" />
              Untuk Pemilik Kos
            </div>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ownerFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>

        {/* Tenant Features */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-neutral-200" />
            <div className="flex items-center gap-2 bg-secondary text-white text-sm font-bold px-5 py-2 rounded-full shadow-md">
              <BedDouble className="w-4 h-4" />
              Untuk Penghuni Kos
            </div>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tenantFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
