import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import { ChevronRight, Search, BookOpen } from "lucide-react-native";
import { useRouter } from "expo-router";
import {
  mockSubjects,
  MockSubject,
  getTopicCount,
  getNoteCount,
} from "@/data/mockNotes";

export default function NotesScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubjects = mockSubjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="pt-4 pb-4">
          <Text className="text-3xl font-bold text-slate-900">Notes</Text>
          <Text className="mt-1 text-base text-slate-500">
            Browse your course materials
          </Text>
        </View>

        {/* Search */}
        <View className="mb-5 flex-row items-center rounded-xl border border-slate-200 bg-white px-4 py-3">
          <Search size={20} className="text-slate-400" />
          <TextInput
            className="ml-3 flex-1 text-base text-slate-900"
            placeholder="Search subjects..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Subject List */}
        {filteredSubjects.length > 0 ? (
          <View className="gap-3">
            {filteredSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onPress={() =>
                  router.push(`/student/notes/${subject.id}`)
                }
              />
            ))}
          </View>
        ) : (
          <View className="items-center py-12">
            <BookOpen size={48} className="text-slate-300" />
            <Text className="mt-4 text-lg font-medium text-slate-500">
              No subjects found
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function SubjectCard({
  subject,
  onPress,
}: {
  subject: MockSubject;
  onPress: () => void;
}) {
  const Icon = subject.icon;
  const topicCount = getTopicCount(subject);
  const noteCount = getNoteCount(subject);

  return (
    <Pressable
      className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
      onPress={onPress}
    >
      <View className="mr-4 h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
        <Icon size={24} className="text-cyan-600" />
      </View>

      <View className="flex-1">
        <Text className="text-lg font-bold text-slate-900">{subject.name}</Text>
        <Text className="mt-1 text-sm text-slate-500">
          {topicCount} topics · {noteCount} notes
        </Text>
      </View>

      <ChevronRight size={20} className="text-slate-400" />
    </Pressable>
  );
}
