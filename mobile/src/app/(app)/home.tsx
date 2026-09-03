import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { role } = useLocalSearchParams<{ role: string }>();

  return (
    <SafeAreaView>
      {role === "student" && <Redirect href={"/student"} />}
      {/* {role === "faculty" && <Redirect href={"/faculty"} />} */}
    </SafeAreaView>
  );
}
