import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import {
  ArrowLeft,
  ChevronRight,
  Search,
  FolderOpen,
} from "lucide-react-native";
import { router, useLocalSearchParams } from "expo-router";
import {
  getSubjectById,
  getTopicCount,
  getNoteCount,
  getTopicNoteCount,
  MockTopic,
} from "@/data/mockNotes";

export default function TopicListScreen() {
  const { subjectId } = useLocalSearchParams<{ subjectId: string }>();
  const subject = getSubjectById(subjectId);

  const [searchQuery, setSearchQuery] = useState("");

  if (!subject) {
    return (
      <SafeAreaView className="flex-1 bg-slate-50">
        <View className="items-center py-12">
          <Text className="text-lg font-medium text-slate-500">
            Subject not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const filteredTopics = subject.topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const topicCount = getTopicCount(subject);
  const noteCount = getNoteCount(subject);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center pt-4 pb-4">
          <Pressable
            className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-slate-100"
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} className="text-slate-600" />
          </Pressable>

          <View className="flex-1">
            <Text className="text-2xl font-bold text-slate-900">
              {subject.name}
            </Text>
            <Text className="mt-1 text-sm text-slate-500">
              {topicCount} topics · {noteCount} notes
            </Text>
          </View>
        </View>

        {/* Search */}
        <View className="mb-5 flex-row items-center rounded-xl border border-slate-200 bg-white px-4 py-3">
          <Search size={20} className="text-slate-400" />
          <TextInput
            className="ml-3 flex-1 text-base text-slate-900"
            placeholder="Search topics..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Topics Label */}
        <Text className="mb-3 text-xl font-bold text-slate-900">Topics</Text>

        {/* Topic List */}
        {filteredTopics.length > 0 ? (
          <View className="gap-3">
            {filteredTopics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={index + 1}
                subjectId={subject.id}
              />
            ))}
          </View>
        ) : (
          <View className="items-center py-12">
            <FolderOpen size={48} className="text-slate-300" />
            <Text className="mt-4 text-lg font-medium text-slate-500">
              No topics found
            </Text>
            <Text className="mt-1 text-sm text-slate-400">
              Try a different search term
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function TopicCard({
  topic,
  index,
  subjectId,
}: {
  topic: MockTopic;
  index: number;
  subjectId: string;
}) {
  const noteCount = getTopicNoteCount(topic);

  const handlePress = () => {
    router.push(`/student/notes/${subjectId}/${topic.id}`);
  };

  return (
    <Pressable
      className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
      onPress={handlePress}
    >
      <View className="mr-4 h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
        <FolderOpen size={24} className="text-cyan-600" />
      </View>

      <View className="flex-1">
        <Text className="text-lg font-bold text-slate-900">{topic.name}</Text>
        <Text className="mt-1 text-sm text-slate-500">{noteCount} notes</Text>
      </View>

      <ChevronRight size={20} className="text-slate-400" />
    </Pressable>
  );
}
