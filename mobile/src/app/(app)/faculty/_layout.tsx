import { Tabs } from "expo-router";

export default function FacultyLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen name="index" options={{ title: "Home" }}></Tabs.Screen>
      <Tabs.Screen name="notes" options={{ title: "notes" }}></Tabs.Screen>
      <Tabs.Screen name="notices" options={{ title: "notices" }}></Tabs.Screen>
      <Tabs.Screen name="profile" options={{ title: "profile" }}></Tabs.Screen>
    </Tabs>
  );
}
