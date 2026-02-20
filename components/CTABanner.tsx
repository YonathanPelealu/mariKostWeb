import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-secondary" />
          Mulai sekarang, gratis selamanya untuk fitur dasar
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Siap Mengelola Kos-Kosan{" "}
          <span className="text-secondary">Lebih Efisien?</span>
        </h2>

        <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Bergabunglah dengan ribuan pemilik kos dan penghuni yang sudah merasakan kemudahan MariKost.
          Daftar gratis sekarang dan kelola kos Anda secara profesional.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 text-base"
          >
            Daftar Sekarang — Gratis!
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/login"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-200 text-base"
          >
            Sudah punya akun? Masuk
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            "✓ Gratis mendaftar",
            "✓ Tidak perlu kartu kredit",
            "✓ Notifikasi WhatsApp otomatis",
          ].map((item) => (
            <span key={item} className="text-white/80 text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
