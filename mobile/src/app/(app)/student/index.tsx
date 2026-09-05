import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Pressable } from "react-native";
import {
  ClipboardCheck,
  NotebookPen,
  CalendarDays,
  Megaphone,
  BookOpen,
  ChevronRight,
  ScanQrCode,
} from "lucide-react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="pt-4 pb-6">
          <Text className="text-sm font-medium text-slate-500">
            Thursday, September 3
          </Text>

          <View className="mt-1 flex-row items-center justify-between">
            <View>
              <Text className="text-3xl font-bold text-slate-900">
                Good Evening 👋
              </Text>
              <Text className="mt-1 text-base text-slate-500">
                Ready for another productive day?
              </Text>
            </View>

            <View className="h-12 w-12 items-center justify-center rounded-full bg-cyan-500">
              <Text className="text-lg font-bold text-white">R</Text>
            </View>
          </View>
        </View>

        {/* Today's Classes */}
        <View className="mb-6">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-slate-900">
              Today's Classes
            </Text>

            <Text className="font-semibold text-cyan-600">See all</Text>
          </View>

          {/* Current class */}
          <View className="mb-3 rounded-2xl bg-cyan-500 p-5 shadow-sm">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-sm font-medium text-cyan-100">
                  NOW • 2:00 PM - 3:00 PM
                </Text>

                <Text className="mt-1 text-xl font-bold text-white">
                  Data Structures
                </Text>

                <Text className="mt-1 text-sm text-cyan-100">
                  Room 204 • Dr. Sharma
                </Text>
              </View>

              <View className="h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <BookOpen size={20}></BookOpen>
              </View>
            </View>

            <View className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
              <View className="h-full w-[65%] rounded-full bg-white" />
            </View>
          </View>

          {/* Next class */}
          <View className="rounded-2xl border border-slate-200 bg-white p-4">
            <View className="flex-row items-center">
              <View className="mr-4 h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <Text className="text-lg">💻</Text>
              </View>

              <View className="flex-1">
                <Text className="font-bold text-slate-900">
                  Operating Systems
                </Text>
                <Text className="mt-1 text-sm text-slate-500">
                  3:15 PM • Room 108
                </Text>
              </View>

              <Text className="text-sm font-semibold text-slate-400">Next</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-6">
          <Text className="mb-3 text-xl font-bold text-slate-900">
            Quick Actions
          </Text>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            <Pressable className="w-[48%] rounded-2xl border border-slate-200 bg-white p-4">
              <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">
                <ClipboardCheck size={20}></ClipboardCheck>
              </View>

              <Text className="font-bold text-slate-900">Attendance</Text>

              <Text className="mt-1 text-xs text-slate-500">
                Check your attendance
              </Text>
            </Pressable>

            <Pressable className="w-[48%] rounded-2xl border border-slate-200 bg-white p-4">
              <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                <ScanQrCode size={20} />
              </View>

              <Text className="font-bold text-slate-900">Scan Attendence</Text>

              <Text className="mt-1 text-xs text-slate-500">
                Mark today's attendence
              </Text>
            </Pressable>

            <Pressable className="w-[48%] rounded-2xl border border-slate-200 bg-white p-4">
              <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                <CalendarDays size={20}></CalendarDays>
              </View>

              <Text className="font-bold text-slate-900">Schedule</Text>

              <Text className="mt-1 text-xs text-slate-500">
                View your timetable
              </Text>
            </Pressable>

            <Pressable className="w-[48%] rounded-2xl border border-slate-200 bg-white p-4">
              <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                <Megaphone size={20}></Megaphone>
              </View>

              <Text className="font-bold text-slate-900">Announcements</Text>

              <Text className="mt-1 text-xs text-slate-500">
                Latest updates
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Recent Notes */}
        <View>
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-xl font-bold text-slate-900">
              Recent Notes
            </Text>

            <Text className="font-semibold text-cyan-600">See all</Text>
          </View>

          <View className="rounded-2xl border border-slate-200 bg-white">
            <Pressable className="flex-row items-center border-b border-slate-100 p-4">
              <View className="mr-4 h-11 w-11 items-center justify-center rounded-xl bg-cyan-100">
                <Text>📄</Text>
              </View>

              <View className="flex-1">
                <Text className="font-semibold text-slate-900">
                  Linked Lists
                </Text>
                <Text className="mt-1 text-xs text-slate-400">
                  Data Structures • Yesterday
                </Text>
              </View>

              <ChevronRight size={20}></ChevronRight>
            </Pressable>

            <Pressable className="flex-row items-center p-4">
              <View className="mr-4 h-11 w-11 items-center justify-center rounded-xl bg-violet-100">
                <Text>📄</Text>
              </View>

              <View className="flex-1">
                <Text className="font-semibold text-slate-900">
                  Process Scheduling
                </Text>
                <Text className="mt-1 text-xs text-slate-400">
                  Operating Systems • 2 days ago
                </Text>
              </View>

              <ChevronRight size={20} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
