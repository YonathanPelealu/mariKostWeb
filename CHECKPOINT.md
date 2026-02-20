# Checkpoint — 2026-02-20

## Fitur: Login & Register Form (Independent Auth)

### Ringkasan
Implementasi halaman `/login` dan `/register` yang sepenuhnya independent dari RN App (port 3000).
Terhubung langsung ke backend Express (port 5000) dengan Google Sign-In via Google Identity Services.

---

### File Baru

| File | Keterangan |
|------|-----------|
| `lib/api.ts` | Fetch wrapper ke `http://localhost:5000/api/v1`; auto-unwrap `{ data }` dari response backend |
| `lib/auth.ts` | Auth helpers: `saveAuth`, `getUser`, `clearAuth`, `isLoggedIn`; token disimpan di localStorage + cookie |
| `context/AuthContext.tsx` | React context global: `user`, `hydrated`, `login()`, `logout()` |
| `components/AuthLayout.tsx` | Shared layout card untuk halaman auth (logo, back link) |
| `app/login/page.tsx` | Form login: email/password + Google Sign-In (GIS) |
| `app/register/page.tsx` | Form register: role toggle (penghuni/pemilik) + 5 field + Google Sign-In |
| `.env.local` | `NEXT_PUBLIC_GOOGLE_CLIENT_ID` (diambil dari `mariKost/src/config/google.ts`) |

### File Diupdate

| File | Perubahan |
|------|-----------|
| `app/layout.tsx` | Wrap `<AuthProvider>` |
| `components/Navbar.tsx` | Link → `/login` & `/register`; tampilkan "Selamat Datang, [nama]" + dropdown logout saat logged in; hydration-safe |
| `components/Hero.tsx` | Link CTA → `/register` |
| `components/CTABanner.tsx` | Link → `/register` dan `/login` |
| `components/HowItWorks.tsx` | Link CTA → `/register` |

---

### Keputusan Teknis

- **Token storage**: localStorage + cookie (non-httpOnly) — cookie untuk SSR-readiness di masa depan
- **Hydration flash fix**: `hydrated` flag di AuthContext; Navbar render `null` sampai client hydrated
- **API response unwrap**: Backend membungkus payload di `{ success, message, data: <payload> }` → `lib/api.ts` auto-unwrap
- **Role mapping**: UI `"penghuni"` → API `"tenant"`, UI `"pemilik"` → API `"owner"`
- **Token key**: `marikost_token` (bukan `token`) agar tidak bentrok dengan AsyncStorage RN app
- **Google Client ID**: diambil dari `mariKost/src/config/google.ts` → `webClientId`

---

### Cara Run

```bash
npm run dev -- --port 3001
# http://localhost:3001/login
# http://localhost:3001/register
```
