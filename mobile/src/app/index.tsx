import { Redirect } from "expo-router";
import { useSession } from "@/ctx";

export default function App() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    // Still covered by the splash screen while the session restores.
    return null;
  }

  if (session) {
    return <Redirect href="/(app)/student" />;
  }

  return <Redirect href="/(auth)/login" />;
}
