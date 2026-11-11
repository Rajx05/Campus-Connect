import { Tabs } from "expo-router";

export default function FacultyLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen name="index" options={{ title: "Home" }}></Tabs.Screen>
    </Tabs>
  );
}
