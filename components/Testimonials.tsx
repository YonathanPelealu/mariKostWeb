import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Kos",
    city: "Yogyakarta",
    avatar: "BS",
    avatarBg: "bg-primary",
    rating: 5,
    text: "MariKost benar-benar mengubah cara saya mengelola kos. Dulu saya harus WA satu-satu untuk tagih sewa, sekarang semua otomatis. Verifikasi pembayaran juga jadi lebih cepat dan rapi.",
  },
  {
    name: "Siti Rahayu",
    role: "Penghuni Kos",
    city: "Bandung",
    avatar: "SR",
    avatarBg: "bg-secondary",
    rating: 5,
    text: "Sebagai anak kost, MariKost sangat membantu. Saya bisa upload bukti bayar kapan saja tanpa harus ketemu pak kost dulu. Notifikasi WA-nya juga selalu tepat waktu!",
  },
  {
    name: "Hendra Kusuma",
    role: "Pemilik Kos",
    city: "Surabaya",
    avatar: "HK",
    avatarBg: "bg-purple-500",
    rating: 5,
    text: "Saya punya 3 properti dengan total 45 kamar. Dulu kewalahan cek pembayaran, sekarang dengan MariKost semua tertata rapi. Dashboard laporan keuangannya sangat membantu!",
  },
  {
    name: "Dewi Anggraini",
    role: "Penghuni Kos",
    city: "Jakarta",
    avatar: "DA",
    avatarBg: "bg-success",
    rating: 5,
    text: "Paling suka fitur reminder jatuh tempo-nya. Jadi tidak pernah telat bayar lagi. Aplikasinya juga mudah dipakai, tampilan bersih dan intuitif.",
  },
  {
    name: "Ahmad Fauzi",
    role: "Pemilik Kos",
    city: "Semarang",
    avatar: "AF",
    avatarBg: "bg-danger",
    rating: 5,
    text: "Integrasi WhatsApp-nya luar biasa! Begitu penghuni upload bukti bayar, saya langsung dapat notif WA. Tidak perlu cek aplikasi terus-menerus. Sangat menghemat waktu.",
  },
  {
    name: "Rizky Pratama",
    role: "Penghuni Kos",
    city: "Malang",
    avatar: "RP",
    avatarBg: "bg-yellow-500",
    rating: 4,
    text: "MariKost bikin hubungan dengan pemilik kos jadi lebih profesional. Semua tercatat dengan jelas, tidak ada lagi miskomunikasi soal pembayaran. Rekomen banget!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-300"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-success/10 text-success text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="section-title">Apa Kata Mereka?</h2>
          <p className="section-subtitle">
            Ribuan pemilik kos dan penghuni sudah merasakan manfaat MariKost. Ini pengalaman mereka.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-neutral-600 text-sm leading-relaxed mt-3 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-neutral-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
