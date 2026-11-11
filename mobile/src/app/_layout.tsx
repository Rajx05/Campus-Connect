import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { SessionProvider, useSession } from "@/ctx";

SplashScreen.preventAutoHideAsync();

// Keep the splash screen visible until the initial session has loaded,
// so the first navigation isn't decided before we know the auth state.
function SplashScreenController() {
  const { isLoading } = useSession();

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return null;
}

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Authenticated routes: student, faculty, ... */}
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      {/* Unauthenticated routes: login */}
      <Stack.Protected guard={!session}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      {/* The index screen stays available and routes to the right group. */}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}
