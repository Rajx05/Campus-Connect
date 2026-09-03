import { Tabs } from "expo-router";
import { House, Megaphone, NotebookPen, User } from "lucide-react-native";

export default function StudentLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="notes"
        options={{
          title: "notes",
          tabBarIcon: ({ color }) => <NotebookPen color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="notices"
        options={{
          title: "notices",
          tabBarIcon: ({ color }) => <Megaphone color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
