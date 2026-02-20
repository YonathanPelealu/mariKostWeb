"use client";

import { useState } from "react";
import {
  UserPlus,
  Building2,
  Users,
  CheckCircle,
  LogIn,
  BedDouble,
  Upload,
  Bell,
} from "lucide-react";

const ownerSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Daftar sebagai Pemilik Kos",
    description:
      "Buat akun gratis dengan email atau Google. Pilih peran sebagai pemilik kos dan lengkapi profil Anda.",
  },
  {
    icon: Building2,
    step: "02",
    title: "Tambah Properti & Kamar",
    description:
      "Daftarkan properti Anda, tambahkan kamar-kamar dengan harga, fasilitas, dan tanggal jatuh tempo pembayaran.",
  },
  {
    icon: Users,
    step: "03",
    title: "Assign Penghuni ke Kamar",
    description:
      "Cari penghuni yang terdaftar di MariKost dan assign ke kamar yang tersedia. Kamar langsung tercatat sebagai terisi.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Verifikasi & Pantau Laporan",
    description:
      "Terima notifikasi WhatsApp setiap ada bukti bayar masuk. Verifikasi atau tolak, lalu pantau laporan keuangan bulanan.",
  },
];

const tenantSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Daftar sebagai Penghuni",
    description:
      "Buat akun gratis dengan email atau Google. Pilih peran sebagai penghuni kos dan lengkapi informasi diri Anda.",
  },
  {
    icon: LogIn,
    step: "02",
    title: "Masuk & Lihat Info Kamar",
    description:
      "Setelah pemilik mengassign kamar, Anda bisa langsung melihat detail kamar, fasilitas, dan tagihan bulanan.",
  },
  {
    icon: Upload,
    step: "03",
    title: "Upload Bukti Pembayaran",
    description:
      "Bayar sewa ke rekening pemilik, lalu upload foto/PDF bukti transfer langsung dari aplikasi MariKost.",
  },
  {
    icon: Bell,
    step: "04",
    title: "Tunggu Konfirmasi Pemilik",
    description:
      "Pemilik akan memverifikasi pembayaran Anda. Anda mendapat notifikasi WhatsApp saat pembayaran terverifikasi.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"owner" | "tenant">("owner");
  const steps = activeTab === "owner" ? ownerSteps : tenantSteps;

  return (
    <section id="cara-kerja" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Cara Kerja
          </span>
          <h2 className="section-title">Mulai dalam 4 Langkah Mudah</h2>
          <p className="section-subtitle">
            MariKost dirancang agar mudah digunakan, baik untuk pemilik kos maupun penghuni.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-neutral-100 p-1 rounded-2xl flex gap-1">
            <button
              onClick={() => setActiveTab("owner")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "owner"
                  ? "bg-primary text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Pemilik Kos
            </button>
            <button
              onClick={() => setActiveTab("tenant")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "tenant"
                  ? "bg-secondary text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Penghuni Kos
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-neutral-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const accent = activeTab === "owner" ? "primary" : "secondary";
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-transform group-hover:-translate-y-1 ${
                      activeTab === "owner" ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number */}
                  <span
                    className={`text-xs font-bold mb-2 ${
                      activeTab === "owner" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    LANGKAH {step.step}
                  </span>

                  <h3 className="text-base font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA under steps */}
        <div className="text-center mt-14">
          <a
            href="/register"
            className={`inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 ${
              activeTab === "owner" ? "bg-primary hover:bg-primary-dark" : "bg-secondary hover:bg-secondary-dark"
            }`}
          >
            Daftar Sekarang — Gratis!
          </a>
        </div>
      </div>
    </section>
  );
}
