export type MockNotice = {
  id: string;
  title: string;
  target: string;
  published: string;
  isRead: boolean;
};

export type MockStudent = {
  name: string;
  studentId: string;
  department: string;
  course: string;
  semester: string;
  section: string;
  academicYear: string;
};

export const mockNotices: MockNotice[] = [
  {
    id: "exam-schedule",
    title: "Internal Examination Schedule Released",
    target: "Data Structures",
    published: "Today · 10:30 AM",
    isRead: false,
  },
  {
    id: "assignment-deadline",
    title: "Assignment Submission Deadline",
    target: "Database Systems",
    published: "Yesterday · 2:15 PM",
    isRead: false,
  },
  {
    id: "library-timing",
    title: "Library Timing Updated",
    target: "All Students",
    published: "2 days ago",
    isRead: true,
  },
  {
    id: "os-lab-schedule",
    title: "Operating Systems Lab Schedule",
    target: "Operating Systems",
    published: "3 days ago",
    isRead: true,
  },
];

export const mockStudent: MockStudent = {
  name: "Rajeev Negi",
  studentId: "2400301790027",
  department: "Bacherlor's Of Computer Applications",
  course: "BCA",
  semester: "5",
  section: "A",
  academicYear: "2026–27",
};
