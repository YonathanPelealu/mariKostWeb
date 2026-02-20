"use client";

import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/AuthLayout";
import { api, ApiError } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (element: HTMLElement, options: object) => void;
        };
      };
    };
  }
}

interface RegisterResponse {
  token: string;
  user: { id: string; name: string; email: string; role: string };
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^08[0-9]{8,12}$/;

type Role = "penghuni" | "pemilik";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const [role, setRole] = useState<Role>("penghuni");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google && googleButtonRef.current) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleGoogleCallback,
        });
        window.google.accounts.id.renderButton(googleButtonRef.current, {
          type: "standard",
          theme: "outline",
          size: "large",
          width: "100%",
          text: "signup_with",
          locale: "id",
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleGoogleCallback(response: { credential: string }) {
    setGoogleLoading(true);
    setApiError("");
    try {
      const data = await api.post<RegisterResponse>("/auth/google", {
        idToken: response.credential,
        role,
      });
      login(data.token, data.user);
      router.push("/");
    } catch (err) {
      setApiError(err instanceof ApiError ? err.message : "Daftar dengan Google gagal");
    } finally {
      setGoogleLoading(false);
    }
  }

  function validate() {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Nama wajib diisi";
    if (!email) errs.email = "Email wajib diisi";
    else if (!emailRegex.test(email)) errs.email = "Format email tidak valid";
    if (!phone) errs.phone = "Nomor HP wajib diisi";
    else if (!phoneRegex.test(phone))
      errs.phone = "Format nomor HP tidak valid (cth: 08123456789)";
    if (!password) errs.password = "Password wajib diisi";
    else if (password.length < 6) errs.password = "Password minimal 6 karakter";
    if (!confirmPassword) errs.confirmPassword = "Konfirmasi password wajib diisi";
    else if (confirmPassword !== password) errs.confirmPassword = "Password tidak sama";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;
    setLoading(true);
    try {
      const data = await api.post<RegisterResponse>("/auth/register", {
        name: name.trim(),
        email,
        phone,
        password,
        role: role === "pemilik" ? "owner" : "tenant",
      });
      login(data.token, data.user);
      router.push("/");
    } catch (err) {
      setApiError(err instanceof ApiError ? err.message : "Pendaftaran gagal, coba lagi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Daftar di MariKost"
      subtitle="Buat akun gratis dan mulai kelola kos Anda"
    >
      {apiError && (
        <div className="mb-6 bg-danger/10 border border-danger/30 text-danger rounded-xl px-4 py-3 text-sm">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Role toggle */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Saya adalah
          </label>
          <div className="flex gap-2 bg-neutral-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setRole("penghuni")}
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                role === "penghuni"
                  ? "bg-primary text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Penghuni
            </button>
            <button
              type="button"
              onClick={() => setRole("pemilik")}
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                role === "pemilik"
                  ? "bg-primary text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Pemilik Kos
            </button>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nama Lengkap
          </label>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Budi Santoso"
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              errors.name ? "border-danger" : "border-neutral-200 hover:border-neutral-300"
            }`}
          />
          {errors.name && (
            <p className="text-danger text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@email.com"
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              errors.email ? "border-danger" : "border-neutral-200 hover:border-neutral-300"
            }`}
          />
          {errors.email && (
            <p className="text-danger text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nomor HP / WhatsApp
          </label>
          <input
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08123456789"
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
              errors.phone ? "border-danger" : "border-neutral-200 hover:border-neutral-300"
            }`}
          />
          {errors.phone && (
            <p className="text-danger text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 6 karakter"
              className={`w-full border rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.password ? "border-danger" : "border-neutral-200 hover:border-neutral-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-danger text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            Konfirmasi Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi password"
              className={`w-full border rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.confirmPassword ? "border-danger" : "border-neutral-200 hover:border-neutral-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-danger text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          Daftar Sekarang
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-xs text-neutral-400 font-medium">atau</span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      {/* Google Sign-In */}
      <div className="relative">
        {googleLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl z-10">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          </div>
        )}
        <div ref={googleButtonRef} className="w-full flex justify-center" />
        {!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && (
          <div className="w-full flex items-center justify-center gap-3 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-500 bg-neutral-50">
            <GoogleIcon />
            Daftar dengan Google
          </div>
        )}
      </div>

      {/* Footer link */}
      <p className="text-center text-sm text-neutral-500 mt-8">
        Sudah punya akun?{" "}
        <a href="/login" className="text-primary font-semibold hover:underline">
          Masuk
        </a>
      </p>
    </AuthLayout>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z" fill="#4285F4" />
      <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853" />
      <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5932 3.68182 9C3.68182 8.4068 3.78409 7.83 3.96409 7.29V4.9582H0.957275C0.347727 6.1731 0 7.5477 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05" />
      <path d="M9 3.5795C10.3214 3.5795 11.5077 4.0336 12.4405 4.9254L15.0218 2.344C13.4632 0.8918 11.4259 0 9 0C5.48182 0 2.43818 2.0168 0.957275 4.9582L3.96409 7.29C4.67182 5.1627 6.65591 3.5795 9 3.5795Z" fill="#EA4335" />
    </svg>
  );
}
