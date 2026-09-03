import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

type Role = "student" | "faculty" | "admin";

export default function LoginScreen() {
  const handleLogin = (role: Role) => {
    router.replace({
      pathname: "/home",
      params: { role },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50 px-6 justify-center">
      <View className="mb-10">
        <Text className="text-4xl font-bold text-blue-900">Campus Connect</Text>

        <Text className="mt-2 text-base text-slate-500">
          Your academic campus, connected.
        </Text>
      </View>

      <View className="gap-3">
        <RoleButton
          label="Continue as Student"
          onPress={() => handleLogin("student")}
        />

        <RoleButton
          label="Continue as Faculty"
          onPress={() => handleLogin("faculty")}
        />

        <RoleButton
          label="Continue as Admin"
          onPress={() => handleLogin("admin")}
        />
      </View>
    </SafeAreaView>
  );
}

function RoleButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-2xl bg-blue-900 px-5 py-4 active:opacity-80"
    >
      <Text className="text-center text-base font-semibold text-white">
        {label}
      </Text>
    </Pressable>
  );
}
