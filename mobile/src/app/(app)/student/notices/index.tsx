import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import {
  ChevronRight,
  Search,
  Megaphone,
  FileText,
} from "lucide-react-native";
import { MockNotice, mockNotices } from "@/data/mockStudentData";

type Filter = "all" | "unread";

export default function NoticesScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filteredNotices = mockNotices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.target.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filter === "all" || !notice.isRead;

    return matchesSearch && matchesFilter;
  });

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="pt-4 pb-4">
          <Text className="text-3xl font-bold text-slate-900">Notices</Text>
          <Text className="mt-1 text-base text-slate-500">
            Stay updated with your campus
          </Text>
        </View>

        {/* Search */}
        <View className="mb-3 flex-row items-center rounded-xl border border-slate-200 bg-white px-4 py-3">
          <Search size={20} className="text-slate-400" />
          <TextInput
            className="ml-3 flex-1 text-base text-slate-900"
            placeholder="Search notices..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter chips */}
        <View className="mb-5 flex-row gap-2">
          {(["all", "unread"] as Filter[]).map((option) => (
            <Pressable
              key={option}
              className={`rounded-full px-4 py-2 ${
                filter === option
                  ? "bg-cyan-600"
                  : "border border-slate-200 bg-white"
              }`}
              onPress={() => setFilter(option)}
            >
              <Text
                className={`text-sm font-semibold ${
                  filter === option ? "text-white" : "text-slate-600"
                }`}
              >
                {option === "all" ? "All" : "Unread"}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Notice List */}
        {filteredNotices.length > 0 ? (
          <View className="gap-3">
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </View>
        ) : (
          <View className="items-center py-12">
            <Megaphone size={48} className="text-slate-300" />
            <Text className="mt-4 text-lg font-medium text-slate-500">
              No notices found
            </Text>
            <Text className="mt-1 text-sm text-slate-400">
              Try a different search or filter
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function NoticeCard({ notice }: { notice: MockNotice }) {
  const Icon = notice.target === "All Students" ? Megaphone : FileText;

  // TODO: Add navigation to notice detail screen when implemented
  const handlePress = () => {
    // router.push(`./${notice.id}`);
  };

  return (
    <Pressable
      className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
      onPress={handlePress}
    >
      <View
        className={`mr-4 h-12 w-12 items-center justify-center rounded-xl ${
          notice.isRead ? "bg-slate-100" : "bg-cyan-100"
        }`}
      >
        <Icon
          size={24}
          className={notice.isRead ? "text-slate-500" : "text-cyan-600"}
        />
      </View>

      <View className="flex-1">
        <View className="flex-row items-center">
          {!notice.isRead && (
            <View className="mr-2 h-2.5 w-2.5 rounded-full bg-cyan-500" />
          )}
          <Text
            className={`flex-1 ${
              notice.isRead
                ? "font-semibold text-slate-600"
                : "font-bold text-slate-900"
            }`}
            numberOfLines={1}
          >
            {notice.title}
          </Text>
        </View>
        <Text className="mt-1 text-sm text-slate-500">{notice.target}</Text>
        <Text className="mt-0.5 text-xs text-slate-400">{notice.published}</Text>
      </View>

      <ChevronRight size={20} className="text-slate-400" />
    </Pressable>
  );
}