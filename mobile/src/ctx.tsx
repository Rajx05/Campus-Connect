import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

const AuthContext = createContext<{
  /** The current Supabase session, or null when signed out. */
  session: Session | null;
  /** True until the initial session has been restored from storage. */
  isLoading: boolean;
} | null>(null);

// Use this hook to access the user's session.
export function useSession() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useSession must be used within a <SessionProvider />");
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Every subscriber receives an INITIAL_SESSION event (with the session
    // restored from storage) as soon as the client has initialized, so this
    // single listener covers both cold starts and sign-in/sign-out.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
