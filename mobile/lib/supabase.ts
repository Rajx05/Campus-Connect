import { Platform } from "react-native";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

// Expo's web export statically renders routes in Node, where there is no
// `window` — and AsyncStorage's web implementation reads `window.localStorage`.
// Fall back to an in-memory store there; the browser restores the real session
// from AsyncStorage on hydration. Native is unaffected.
const isStaticWebRendering = Platform.OS === "web" && typeof window === "undefined";

function memoryStorage(): {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
} {
  const store = new Map<string, string>();
  return {
    getItem: async (key) => store.get(key) ?? null,
    setItem: async (key, value) => {
      store.set(key, value);
    },
    removeItem: async (key) => {
      store.delete(key);
    },
  };
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: isStaticWebRendering
      ? memoryStorage()
      : (AsyncStorage as any),
    autoRefreshToken: !isStaticWebRendering,
    persistSession: true,
    detectSessionInUrl: false,
    skipAutoInitialize: isStaticWebRendering,
  },
});
