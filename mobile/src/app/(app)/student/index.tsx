import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 gap-2">
      {/* Greeting */}
      <SafeAreaView className="border-cyan-300 bg-cyan-200">
        <Text className="text-2xl text-center text-white">
          Good Morning, Raj
        </Text>
      </SafeAreaView>

      {/* Classes */}
      <SafeAreaView className="border-cyan-300 bg-cyan-200">
        <Text className="text-2xl text-center text-white">Today's Classes</Text>
      </SafeAreaView>

      {/* Quick Actions */}
      <SafeAreaView className="border-cyan-300 bg-cyan-200">
        <Text className="text-2xl text-center text-white">Quick Actions</Text>
      </SafeAreaView>

      {/* Recent Notes */}
      <SafeAreaView className="border-cyan-300 bg-cyan-200">
        <Text className="text-2xl text-center text-white">Recent Notes</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
