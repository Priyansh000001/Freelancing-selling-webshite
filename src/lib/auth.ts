// Lightweight client-side mock auth (no backend yet).
// Swap to Lovable Cloud later for real authentication.

const KEY = "lx_auth_user";

export type AuthUser = { phone: string };

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function login(phone: string, password: string): AuthUser {
  if (!/^\+?\d{7,15}$/.test(phone.replace(/\s/g, ""))) {
    throw new Error("Enter a valid phone number");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
  const user = { phone };
  localStorage.setItem(KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("lx-auth-change"));
  return user;
}

export function logout() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("lx-auth-change"));
}
