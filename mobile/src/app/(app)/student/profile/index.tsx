import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Pressable } from "react-native";
import {
  ChevronRight,
  User,
  Bell,
  KeyRound,
  LogOut,
} from "lucide-react-native";
import { mockStudent } from "@/data/mockStudentData";

const academicFields: { label: string; value: string }[] = [
  { label: "Student ID", value: mockStudent.studentId },
  { label: "Department", value: mockStudent.department },
  { label: "Course", value: mockStudent.course },
  { label: "Semester", value: mockStudent.semester },
  { label: "Section", value: mockStudent.section },
  { label: "Academic Year", value: mockStudent.academicYear },
];

const accountActions = [
  { id: "edit-profile", label: "Edit Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "change-password", label: "Change Password", icon: KeyRound },
];

export default function ProfileScreen() {
  const initials = mockStudent.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="pt-4 pb-4">
          <Text className="text-3xl font-bold text-slate-900">Profile</Text>
        </View>

        {/* Profile card */}
        <View className="mb-6 rounded-2xl border border-slate-200 bg-white p-6">
          <View className="items-center">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-cyan-500">
              <Text className="text-2xl font-bold text-white">{initials}</Text>
            </View>

            <Text className="mt-3 text-xl font-bold text-slate-900">
              {mockStudent.name}
            </Text>
            <Text className="mt-1 text-sm text-slate-500">
              Student ID: {mockStudent.studentId}
            </Text>

            <Text className="mt-3 text-base font-medium text-slate-700">
              CSE · Semester {mockStudent.semester}
            </Text>
            <Text className="mt-0.5 text-sm text-slate-500">
              Section {mockStudent.section}
            </Text>
          </View>
        </View>

        {/* Academic Information */}
        <Text className="mb-3 text-xl font-bold text-slate-900">
          Academic Information
        </Text>
        <View className="mb-6 rounded-2xl border border-slate-200 bg-white">
          {academicFields.map((field, index) => (
            <View
              key={field.label}
              className={`flex-row items-center justify-between px-4 py-3 ${
                index < academicFields.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <Text className="text-sm text-slate-500">{field.label}</Text>
              <Text className="text-sm font-semibold text-slate-900">
                {field.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Account */}
        <Text className="mb-3 text-xl font-bold text-slate-900">Account</Text>
        <View className="mb-6 rounded-2xl border border-slate-200 bg-white">
          {accountActions.map((action, index) => {
            const Icon = action.icon;

            return (
              <Pressable
                key={action.id}
                className={`flex-row items-center border-b border-slate-100 px-4 py-3 ${
                  index < accountActions.length - 1 ? "" : "border-b-0"
                }`}
                onPress={() => {
                  // TODO: Implement action screens when available
                }}
              >
                <View className="mr-4 h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <Icon size={20} className="text-slate-600" />
                </View>

                <Text className="flex-1 text-base text-slate-900">
                  {action.label}
                </Text>

                <ChevronRight size={20} className="text-slate-400" />
              </Pressable>
            );
          })}
        </View>

        {/* Logout */}
        <Pressable
          className="flex-row items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-4"
          onPress={() => {
            // TODO: Implement actual logout when auth is available
          }}
        >
          <LogOut size={20} className="text-red-600" />
          <Text className="ml-2 text-base font-semibold text-red-600">
            Logout
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}