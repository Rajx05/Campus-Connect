import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import { ArrowLeft, ChevronRight, Search, FileText } from "lucide-react-native";
import { router, useLocalSearchParams } from "expo-router";
import {
  getSubjectById,
  getTopicById,
  getTopicNoteCount,
  MockNote,
} from "@/data/mockNotes";

export default function NoteListScreen() {
  const { subjectId, topicId } = useLocalSearchParams<{
    subjectId: string;
    topicId: string;
  }>();

  const subject = getSubjectById(subjectId);
  const topic = subject ? getTopicById(subject, topicId) : undefined;

  const [searchQuery, setSearchQuery] = useState("");

  if (!subject || !topic) {
    return (
      <SafeAreaView className="flex-1 bg-slate-50">
        <View className="items-center py-12">
          <Text className="text-lg font-medium text-slate-500">
            Topic not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const filteredNotes = topic.notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const noteCount = getTopicNoteCount(topic);

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
              {topic.name}
            </Text>
            <Text className="mt-1 text-sm text-slate-500">
              {noteCount} notes
            </Text>
          </View>
        </View>

        {/* Search */}
        <View className="mb-5 flex-row items-center rounded-xl border border-slate-200 bg-white px-4 py-3">
          <Search size={20} className="text-slate-400" />
          <TextInput
            className="ml-3 flex-1 text-base text-slate-900"
            placeholder="Search notes..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Notes Label */}
        <Text className="mb-3 text-xl font-bold text-slate-900">Notes</Text>

        {/* Note List */}
        {filteredNotes.length > 0 ? (
          <View className="gap-3">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </View>
        ) : (
          <View className="items-center py-12">
            <FileText size={48} className="text-slate-300" />
            <Text className="mt-4 text-lg font-medium text-slate-500">
              No notes found
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

function NoteCard({ note }: { note: MockNote }) {
  // TODO: Add navigation to note detail screen when implemented
  const handlePress = () => {
    // router.push(`./${note.id}`);
  };

  return (
    <Pressable
      className="flex-row items-center rounded-2xl border border-slate-200 bg-white p-4"
      onPress={handlePress}
    >
      <View className="mr-4 h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
        <FileText size={24} className="text-cyan-600" />
      </View>

      <View className="flex-1">
        <Text className="text-lg font-bold text-slate-900">{note.title}</Text>
        <Text className="mt-1 text-sm text-slate-500">{note.description}</Text>
        <Text className="mt-1 text-xs text-slate-400">{note.date}</Text>
      </View>

      <ChevronRight size={20} className="text-slate-400" />
    </Pressable>
  );
}
