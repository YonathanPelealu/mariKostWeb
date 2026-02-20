import { Home, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  Produk: [
    { label: "Fitur Pemilik Kos", href: "#fitur" },
    { label: "Fitur Penghuni Kos", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Testimoni", href: "#testimoni" },
  ],
  Perusahaan: [
    { label: "Tentang MariKost", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Dukungan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Hubungi Kami", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">MariKost</span>
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              Platform digital yang menghubungkan pemilik kos dengan penghuni dalam satu ekosistem terintegrasi di Indonesia.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2 mb-6">
              <a
                href="mailto:hello@marikost.id"
                className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@marikost.id
              </a>
              <a
                href="tel:+62812345678"
                className="flex items-center gap-2 text-neutral-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +62 812-3456-789
              </a>
            </div>

            {/* Social media */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-neutral-800 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} MariKost. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-neutral-600 text-xs">
            Dibuat dengan ❤️ untuk pengelola kos Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
