"use client";

import { useState, useEffect, useRef } from "react";
import { Home, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, hydrated, logout } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { label: "Fitur", href: "#fitur" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Statistik", href: "#statistik" },
    { label: "Testimoni", href: "#testimoni" },
  ];

  function handleLogout() {
    logout();
    setDropdownOpen(false);
    setMenuOpen(false);
    router.refresh();
  }

  function getInitials(name: string) {
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:bg-primary-dark transition-colors">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${scrolled ? "text-neutral-900" : "text-white"}`}>
              MariKost
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-neutral-600" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons / User state */}
          <div className="hidden md:flex items-center gap-3">
            {!hydrated ? null : user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className={`flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl transition-all duration-200 ${
                    scrolled
                      ? "text-neutral-700 hover:bg-neutral-100"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  <span className="max-w-[200px] truncate">
                    Selamat Datang, {user.name.split(" ")[0]}
                  </span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-neutral-100 py-1 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-danger transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a
                  href="/login"
                  className={`text-sm font-semibold px-4 py-2 rounded-xl border-2 transition-all duration-200 ${
                    scrolled
                      ? "border-primary text-primary hover:bg-primary hover:text-white"
                      : "border-white text-white hover:bg-white hover:text-primary"
                  }`}
                >
                  Masuk
                </a>
                <a
                  href="/register"
                  className="text-sm font-semibold px-4 py-2 rounded-xl bg-secondary hover:bg-secondary-dark text-white transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Daftar Gratis
                </a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-neutral-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg rounded-b-2xl pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary hover:bg-primary-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-3 border-t border-neutral-100 mt-2">
              {!hydrated ? null : user ? (
                <>
                  <div className="flex items-center gap-3 px-1 py-2">
                    <span className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {getInitials(user.name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 truncate max-w-[160px]">{user.name}</p>
                      <p className="text-xs text-neutral-500 capitalize">{user.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border-2 border-danger text-danger hover:bg-danger hover:text-white transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Keluar
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="text-center text-sm font-semibold px-4 py-2.5 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    Masuk
                  </a>
                  <a
                    href="/register"
                    className="text-center text-sm font-semibold px-4 py-2.5 rounded-xl bg-secondary text-white hover:bg-secondary-dark transition-all"
                  >
                    Daftar Gratis
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
