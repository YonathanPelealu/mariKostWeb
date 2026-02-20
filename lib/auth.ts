const TOKEN_KEY = "marikost_token";
const USER_KEY = "marikost_user";
const COOKIE_TOKEN_KEY = "marikost_token";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

// --- Cookie helpers (readable server-side by Next.js) ---

function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// --- Public API ---

export function saveAuth(token: string, user: AuthUser) {
  // Token disimpan di cookie (SSR-readable) + localStorage
  setCookie(COOKIE_TOKEN_KEY, token);
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function clearAuth() {
  deleteCookie(COOKIE_TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isLoggedIn(): boolean {
  return !!getToken();
}
