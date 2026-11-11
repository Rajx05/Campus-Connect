import { Stack } from "expo-router";

export const unstable_settings = {
  // When (app) mounts fresh (e.g. the auth guard flips at sign-in), start at
  // student instead of the alphabetically-first child (faculty).
  anchor: "student",
};

export default function AppLayout() {
  // Navigation stack for all authenticated routes (student, faculty, ...).
  return <Stack screenOptions={{ headerShown: false }} />;
}
