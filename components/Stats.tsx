import { Building2, Users, BedDouble, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Pemilik Kos Terdaftar",
    description: "Properti dari berbagai kota di Indonesia",
    color: "bg-blue-50 text-primary",
  },
  {
    icon: Users,
    value: "2.000+",
    label: "Penghuni Aktif",
    description: "Penghuni yang mengelola sewa via MariKost",
    color: "bg-orange-50 text-secondary",
  },
  {
    icon: BedDouble,
    value: "5.000+",
    label: "Kamar Terkelola",
    description: "Kamar kos yang terdaftar dan aktif",
    color: "bg-green-50 text-success",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Kepuasan Pengguna",
    description: "Rating positif dari pemilik & penghuni",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Stats() {
  return (
    <section id="statistik" className="py-20 bg-hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dipercaya oleh Ribuan Pengguna
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            MariKost terus berkembang bersama komunitas pemilik kos dan penghuni di seluruh Indonesia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-white/70 text-xs">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
