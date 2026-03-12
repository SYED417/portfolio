import { createContext } from "react";
import type { Session, User, AuthError } from "@supabase/supabase-js";

/* ───────── Types ───────── */

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<{ error: AuthError | null }>;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ error: AuthError | null }>;
  signInWithGoogle: () => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
  updateProfile: (
    data: Record<string, string>,
  ) => Promise<{ error: AuthError | null }>;
}

/* ───────── Context ───────── */

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
