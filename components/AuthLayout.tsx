import { Home, ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Back link */}
      <a
        href="/"
        className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors mb-8 self-start max-w-md w-full mx-auto"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke beranda
      </a>

      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group mb-8 justify-center">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:bg-primary-dark transition-colors">
            <Home className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-neutral-900">MariKost</span>
        </a>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-1">{title}</h1>
          {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
        </div>

        {children}
      </div>
    </main>
  );
}
