import { BookOpen, Cpu, Database, FileText } from "lucide-react-native";

export type MockNote = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type MockTopic = {
  id: string;
  name: string;
  notes: MockNote[];
};

export type MockSubject = {
  id: string;
  name: string;
  icon: typeof BookOpen;
  topics: MockTopic[];
};

export const mockSubjects: MockSubject[] = [
  {
    id: "data-structures",
    name: "Data Structures",
    icon: BookOpen,
    topics: [
      {
        id: "intro",
        name: "Introduction",
        notes: [
          { id: "ds-intro-1", title: "What is a Data Structure?", description: "Overview of data structures and their importance", date: "2024-01-15" },
          { id: "ds-intro-2", title: "Types of Data Structures", description: "Linear vs non-linear data structures", date: "2024-01-16" },
          { id: "ds-intro-3", title: "Complexity Analysis", description: "Time and space complexity basics", date: "2024-01-17" },
          { id: "ds-intro-4", title: "Abstract Data Types", description: "Understanding ADTs and their implementations", date: "2024-01-18" },
          { id: "ds-intro-5", title: "Introduction Summary", description: "Key concepts review and practice problems", date: "2024-01-19" },
        ],
      },
      {
        id: "linked-lists",
        name: "Linked Lists",
        notes: [
          { id: "ds-ll-1", title: "Singly Linked Lists", description: "Introduction to singly linked lists", date: "2024-01-20" },
          { id: "ds-ll-2", title: "Doubly Linked Lists", description: "Implementation and traversal of doubly linked lists", date: "2024-01-21" },
          { id: "ds-ll-3", title: "Circular Linked Lists", description: "Circular linked list variations", date: "2024-01-22" },
          { id: "ds-ll-4", title: "Linked List Operations", description: "Insert, delete, and search operations", date: "2024-01-23" },
          { id: "ds-ll-5", title: "Advanced Linked List Techniques", description: "Fast/slow pointers and cycle detection", date: "2024-01-24" },
          { id: "ds-ll-6", title: "Linked List Problems", description: "Practice problems and solutions", date: "2024-01-25" },
          { id: "ds-ll-7", title: "Linked List Summary", description: "Review and key takeaways", date: "2024-01-26" },
        ],
      },
      {
        id: "trees",
        name: "Trees",
        notes: [
          { id: "ds-tree-1", title: "Binary Trees", description: "Introduction to binary trees", date: "2024-02-01" },
          { id: "ds-tree-2", title: "Binary Search Trees", description: "BST properties and operations", date: "2024-02-02" },
          { id: "ds-tree-3", title: "Tree Traversals", description: "In-order, pre-order, post-order traversals", date: "2024-02-03" },
          { id: "ds-tree-4", title: "Balanced Trees", description: "AVL trees and rotations", date: "2024-02-04" },
          { id: "ds-tree-5", title: "Red-Black Trees", description: "Red-black tree properties and operations", date: "2024-02-05" },
          { id: "ds-tree-6", title: "Heap Data Structure", description: "Min-heap and max-heap implementations", date: "2024-02-06" },
          { id: "ds-tree-7", title: "Trie Data Structure", description: "Trie implementation and applications", date: "2024-02-07" },
          { id: "ds-tree-8", title: "Tree Problems", description: "Practice problems and solutions", date: "2024-02-08" },
        ],
      },
      {
        id: "graphs",
        name: "Graphs",
        notes: [
          { id: "ds-graph-1", title: "Graph Fundamentals", description: "Introduction to graphs and terminology", date: "2024-02-10" },
          { id: "ds-graph-2", title: "Graph Representations", description: "Adjacency matrix and list", date: "2024-02-11" },
          { id: "ds-graph-3", title: "BFS and DFS", description: "Breadth-first and depth-first search", date: "2024-02-12" },
          { id: "ds-graph-4", title: "Shortest Path Algorithms", description: "Dijkstra's and Bellman-Ford algorithms", date: "2024-02-13" },
        ],
      },
    ],
  },
  {
    id: "operating-systems",
    name: "Operating Systems",
    icon: Cpu,
    topics: [
      {
        id: "processes",
        name: "Processes",
        notes: [
          { id: "os-proc-1", title: "Process Concept", description: "What is a process and its states", date: "2024-01-20" },
          { id: "os-proc-2", title: "Process Scheduling", description: "Process scheduling queues and algorithms", date: "2024-01-21" },
          { id: "os-proc-3", title: "Inter-Process Communication", description: "IPC mechanisms and shared memory", date: "2024-01-22" },
          { id: "os-proc-4", title: "Threads", description: "Introduction to threads and multithreading", date: "2024-01-23" },
          { id: "os-proc-5", title: "Process Synchronization", description: "Critical section and synchronization problems", date: "2024-01-24" },
        ],
      },
      {
        id: "cpu-scheduling",
        name: "CPU Scheduling",
        notes: [
          { id: "os-cpu-1", title: "Scheduling Criteria", description: "CPU utilization and throughput", date: "2024-01-25" },
          { id: "os-cpu-2", title: "FCFS Scheduling", description: "First-come, first-served scheduling", date: "2024-01-26" },
          { id: "os-cpu-3", title: "SJF Scheduling", description: "Shortest job first scheduling", date: "2024-01-27" },
          { id: "os-cpu-4", title: "Priority Scheduling", description: "Priority-based scheduling algorithms", date: "2024-01-28" },
          { id: "os-cpu-5", title: "Round Robin", description: "Round robin scheduling algorithm", date: "2024-01-29" },
          { id: "os-cpu-6", title: "Multilevel Queue", description: "Multilevel queue scheduling", date: "2024-01-30" },
        ],
      },
      {
        id: "memory-management",
        name: "Memory Management",
        notes: [
          { id: "os-mem-1", title: "Memory Hierarchy", description: "Introduction to memory management", date: "2024-02-01" },
          { id: "os-mem-2", title: "Paging", description: "Paging implementation and page tables", date: "2024-02-02" },
          { id: "os-mem-3", title: "Segmentation", description: "Segmentation and segment tables", date: "2024-02-03" },
          { id: "os-mem-4", title: "Virtual Memory", description: "Virtual memory concepts and demand paging", date: "2024-02-04" },
        ],
      },
      {
        id: "file-systems",
        name: "File Systems",
        notes: [
          { id: "os-file-1", title: "File Concept", description: "File attributes and operations", date: "2024-02-05" },
          { id: "os-file-2", title: "Directory Structure", description: "Directory organization and naming", date: "2024-02-06" },
          { id: "os-file-3", title: "File System Implementation", description: "File system structure and mounting", date: "2024-02-07" },
        ],
      },
    ],
  },
  {
    id: "database-systems",
    name: "Database Systems",
    icon: Database,
    topics: [
      {
        id: "intro-db",
        name: "Introduction",
        notes: [
          { id: "db-intro-1", title: "Database Systems", description: "Introduction to database management systems", date: "2024-01-20" },
          { id: "db-intro-2", title: "Database Models", description: "Hierarchical, network, and relational models", date: "2024-01-21" },
          { id: "db-intro-3", title: "Relational Model", description: "Relational model concepts and terminology", date: "2024-01-22" },
          { id: "db-intro-4", title: "Database Design", description: "Database design process and methodology", date: "2024-01-23" },
          { id: "db-intro-5", title: "Introduction Summary", description: "Key concepts review and practice", date: "2024-01-24" },
        ],
      },
      {
        id: "er-model",
        name: "ER Model",
        notes: [
          { id: "db-er-1", title: "ER Diagrams", description: "Entity-Relationship diagram basics", date: "2024-01-25" },
          { id: "db-er-2", title: "Entity Sets", description: "Strong and weak entity sets", date: "2024-01-26" },
          { id: "db-er-3", title: "Relationship Sets", description: "Types of relationships and cardinality", date: "2024-01-27" },
          { id: "db-er-4", title: "ER to Relational", description: "Converting ER diagrams to relational schema", date: "2024-01-28" },
          { id: "db-er-5", title: "ER Model Problems", description: "Practice problems and solutions", date: "2024-01-29" },
        ],
      },
      {
        id: "normalization",
        name: "Normalization",
        notes: [
          { id: "db-norm-1", title: "Functional Dependencies", description: "Introduction to functional dependencies", date: "2024-02-01" },
          { id: "db-norm-2", title: "Normalization Process", description: "Normalization steps and goals", date: "2024-02-02" },
          { id: "db-norm-3", title: "BCNF", description: "Boyce-Codd Normal Form", date: "2024-02-03" },
          { id: "db-norm-4", title: "3NF and 4NF", description: "Third and Fourth Normal Forms", date: "2024-02-04" },
          { id: "db-norm-5", title: "Normalization Problems", description: "Practice problems and solutions", date: "2024-02-05" },
          { id: "db-norm-6", title: "Normalization Summary", description: "Review and key takeaways", date: "2024-02-06" },
        ],
      },
      {
        id: "sql",
        name: "SQL",
        notes: [
          { id: "db-sql-1", title: "SQL Basics", description: "Introduction to SQL syntax", date: "2024-02-07" },
          { id: "db-sql-2", title: "SELECT Queries", description: "Writing SELECT statements", date: "2024-02-08" },
          { id: "db-sql-3", title: "JOIN Operations", description: "Types of JOINs in SQL", date: "2024-02-09" },
          { id: "db-sql-4", title: "Aggregation", description: "GROUP BY and HAVING clauses", date: "2024-02-10" },
          { id: "db-sql-5", title: "SQL Practice", description: "Practice problems and solutions", date: "2024-02-11" },
        ],
      },
    ],
  },
];

export function getSubjectById(id: string): MockSubject | undefined {
  return mockSubjects.find((subject) => subject.id === id);
}

export function getTopicById(
  subject: MockSubject,
  topicId: string
): MockTopic | undefined {
  return subject.topics.find((topic) => topic.id === topicId);
}

export function getTopicCount(subject: MockSubject): number {
  return subject.topics.length;
}

export function getNoteCount(subject: MockSubject): number {
  return subject.topics.reduce((sum, topic) => sum + topic.notes.length, 0);
}

export function getTopicNoteCount(topic: MockTopic): number {
  return topic.notes.length;
}
