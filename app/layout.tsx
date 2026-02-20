import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "MariKost — Platform Manajemen Kos-Kosan Terbaik di Indonesia",
  description:
    "MariKost menghubungkan pemilik kos dengan penghuni dalam satu platform terintegrasi. Kelola properti, verifikasi pembayaran, dan pantau laporan keuangan dengan mudah.",
  keywords: [
    "kos-kosan",
    "manajemen kos",
    "sewa kos",
    "pemilik kos",
    "penghuni kos",
    "aplikasi kos",
    "marikost",
  ],
  authors: [{ name: "MariKost" }],
  openGraph: {
    title: "MariKost — Platform Manajemen Kos-Kosan Terbaik di Indonesia",
    description:
      "Kelola kos-kosan lebih mudah dengan MariKost. Platform digital untuk pemilik kos dan penghuni di Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "MariKost — Platform Manajemen Kos-Kosan",
    description:
      "Kelola kos-kosan lebih mudah dengan MariKost. Gratis mendaftar!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
