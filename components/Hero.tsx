import { ArrowRight, Play, CheckCircle } from "lucide-react";

export default function Hero() {
  const highlights = [
    "Manajemen kos terintegrasi",
    "Notifikasi WhatsApp otomatis",
    "Verifikasi pembayaran digital",
  ];

  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent to-black/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Platform Kos-Kosan #1 di Indonesia
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Kelola Kos-Kosan{" "}
            <span className="text-secondary">Lebih Mudah</span>{" "}
            dengan MariKost
          </h1>

          <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-xl">
            Platform digital yang menghubungkan pemilik kos dengan penghuni dalam
            satu ekosistem terintegrasi. Kelola properti, verifikasi pembayaran,
            dan pantau laporan keuangan — semua dalam satu aplikasi.
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-2 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/register"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              Mulai Gratis Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#cara-kerja"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              Lihat Cara Kerja
            </a>
          </div>
        </div>

        {/* Right: App mockup illustration */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            {/* Phone mockup */}
            <div className="w-72 h-[560px] bg-neutral-900 rounded-[3rem] shadow-2xl border-4 border-neutral-800 overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-neutral-900 rounded-b-2xl z-10" />

              {/* Screen content */}
              <div className="absolute inset-0 bg-neutral-50">
                {/* Header */}
                <div className="bg-primary px-5 pt-12 pb-6">
                  <p className="text-white/80 text-xs">Selamat datang,</p>
                  <p className="text-white font-bold text-lg">Budi Santoso</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      { label: "Properti", value: "3" },
                      { label: "Kamar", value: "24" },
                      { label: "Hunian", value: "87%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/20 rounded-xl p-2 text-center">
                        <p className="text-white font-bold text-base">{stat.value}</p>
                        <p className="text-white/75 text-[10px]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-4 space-y-3">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Pembayaran Pending</p>
                  {[
                    { name: "Andi Wijaya", room: "A-01", amount: "Rp 1.200.000" },
                    { name: "Siti Rahayu", room: "B-03", amount: "Rp 900.000" },
                    { name: "Bowo Prayogo", room: "A-05", amount: "Rp 1.500.000" },
                  ].map((item) => (
                    <div key={item.name} className="bg-white rounded-xl p-3 shadow-sm border border-neutral-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-neutral-900">{item.name}</p>
                        <p className="text-[10px] text-neutral-500">Kamar {item.room}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-primary">{item.amount}</p>
                        <span className="text-[9px] bg-warning/20 text-yellow-700 px-1.5 py-0.5 rounded-full">Menunggu</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card: Verified */}
            <div className="absolute -left-16 top-1/3 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-neutral-100">
              <div className="w-9 h-9 bg-success/15 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Pembayaran Terverifikasi</p>
                <p className="text-[10px] text-neutral-500">Kamar B-02 · Rp 1.200.000</p>
              </div>
            </div>

            {/* Floating card: Notification */}
            <div className="absolute -right-12 bottom-1/3 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-neutral-100">
              <div className="w-9 h-9 bg-secondary/15 rounded-xl flex items-center justify-center">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">WhatsApp Terkirim</p>
                <p className="text-[10px] text-neutral-500">Reminder jatuh tempo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80H1440V30C1200 70 960 10 720 30C480 50 240 10 0 30V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
