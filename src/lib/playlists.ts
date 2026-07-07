export type PlaylistGoalTag = "career-switch" | "certificate" | "hobby";

export type EntryLevel = "beginner" | "intermediate" | "advanced";

export type DurationBucket = "short" | "medium" | "long";

export type PlaylistCourse = {
  id: string;
  title: string;
  partner: string;
  level: EntryLevel;
  duration: string;
  skillTags: string[];
  href: string;
  imageUrl: string;
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  creator_id: string;
  creator_name: string;
  tags: PlaylistGoalTag[];
  entry_level: EntryLevel;
  duration_bucket: DurationBucket;
  estimated_duration: string;
  created_at: string;
  is_remix_of: string | null;
};

export type PlaylistStep = {
  id: string;
  playlist_id: string;
  course_id: string;
  order_index: number;
};

export type PlaylistFollow = {
  id: string;
  playlist_id: string;
  user_id: string;
  current_step_index: number;
  completed_at: string | null;
};

export type PlaylistFilters = {
  goal?: PlaylistGoalTag | "all";
  level?: EntryLevel | "all";
  duration?: DurationBucket | "all";
};

export const CURRENT_USER_ID = "user-dat";

export const goalTagLabels: Record<PlaylistGoalTag, string> = {
  "career-switch": "Career switch",
  certificate: "Certificate",
  hobby: "Hobby",
};

export const entryLevelLabels: Record<EntryLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const durationBucketLabels: Record<DurationBucket, string> = {
  short: "Under 2 months",
  medium: "2-4 months",
  long: "4+ months",
};

export const mockCourses: PlaylistCourse[] = [
  {
    id: "excel-basics",
    title: "Getting Started with Microsoft Excel",
    partner: "Coursera",
    level: "beginner",
    duration: "2 weeks",
    skillTags: ["Spreadsheets", "Data cleaning"],
    href: "/learn/introduction-microsoft-excel",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/cb/6c52dc75e84cc582692c273678dea9/c1_Coursera-Originals_-Data-Science-Essentials-Toolkit_CertCard.png?auto=format%2C%20compress%2C%20enhance&dpr=1&w=640&h=400&fit=crop&q=50",
  },
  {
    id: "python-everybody",
    title: "Python for Everybody",
    partner: "University of Michigan",
    level: "beginner",
    duration: "6 weeks",
    skillTags: ["Python", "Programming"],
    href: "/learn/python-for-everybody",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3mm1ijwFrkELTmsmOgfb3uGDb02LaM4lVWLy-x3iSQ&s=10",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Certificate",
    partner: "Google",
    level: "beginner",
    duration: "8 weeks",
    skillTags: ["Analytics", "Dashboards"],
    href: "/learn/google-data-analytics",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=640&h=400&auto=format&fit=crop",
  },
  {
    id: "machine-learning",
    title: "Machine Learning Specialization",
    partner: "Stanford University",
    level: "intermediate",
    duration: "10 weeks",
    skillTags: ["Machine learning", "Modeling"],
    href: "/learn/machine-learning",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=640&h=400&auto=format&fit=crop",
  },
  {
    id: "business-analysis",
    title: "Business Analysis & Process Management",
    partner: "Coursera",
    level: "beginner",
    duration: "3 weeks",
    skillTags: ["Process mapping", "Business analysis"],
    href: "/learn/business-analysis-process-management",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/630408b17e41429a019ada61f22bc8/Courses-Project-images-06.png?auto=format%2C%20compress%2C%20enhance&dpr=1&w=640&h=400&fit=crop&q=50",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Specialization",
    partner: "Vanderbilt University",
    level: "intermediate",
    duration: "4 weeks",
    skillTags: ["AI", "Prompting"],
    href: "/learn/prompt-engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=640&h=400&auto=format&fit=crop",
  },
  {
    id: "ux-design",
    title: "Google UX Design",
    partner: "Google",
    level: "beginner",
    duration: "9 weeks",
    skillTags: ["UX research", "Prototyping"],
    href: "/learn/google-ux-design",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/46/ef33d858af408d86e966298a1f480b/Teaching_AI_Fluency_promo.png?auto=format%2C%20compress%2C%20enhance&dpr=2&w=320&h=204&fit=crop&q=50",
  },
  {
    id: "project-management",
    title: "Google Project Management",
    partner: "Google",
    level: "beginner",
    duration: "7 weeks",
    skillTags: ["Planning", "Agile"],
    href: "/learn/project-management",
    imageUrl:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f6/29a18ac78c48dc9b4d3ad46c20c6f4/GCC-Coursera-thumbnail-PM-agile-PM-sue.png?auto=format%2C%20compress%2C%20enhance&dpr=2&w=320&h=180&fit=crop&q=50&crop=faces",
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: "accounting-to-data-analyst",
    title: "From Accounting to Data Analyst",
    description:
      "A practical path for spreadsheet-heavy professionals moving into analytics roles.",
    creator_id: "creator-linh",
    creator_name: "Linh Tran",
    tags: ["career-switch"],
    entry_level: "beginner",
    duration_bucket: "medium",
    estimated_duration: "14 weeks",
    created_at: "2026-06-12",
    is_remix_of: null,
  },
  {
    id: "ai-productivity-stack",
    title: "AI Productivity Stack for Office Workers",
    description:
      "Learn prompting, automation, and lightweight analysis without becoming a full-time engineer.",
    creator_id: "creator-minh",
    creator_name: "Minh Pham",
    tags: ["hobby"],
    entry_level: "beginner",
    duration_bucket: "short",
    estimated_duration: "7 weeks",
    created_at: "2026-06-18",
    is_remix_of: null,
  },
  {
    id: "first-google-certificate",
    title: "First Google Certificate Learn List",
    description:
      "A focused learn list for learners who want a recognized credential and portfolio pieces.",
    creator_id: "creator-anna",
    creator_name: "Anna Nguyen",
    tags: ["certificate"],
    entry_level: "beginner",
    duration_bucket: "long",
    estimated_duration: "20 weeks",
    created_at: "2026-05-29",
    is_remix_of: null,
  },
  {
    id: "analyst-to-ml-starter",
    title: "Analyst to Machine Learning Starter",
    description:
      "For data analysts ready to move from dashboards into model-building foundations.",
    creator_id: "creator-khoa",
    creator_name: "Khoa Le",
    tags: ["career-switch", "certificate"],
    entry_level: "intermediate",
    duration_bucket: "long",
    estimated_duration: "24 weeks",
    created_at: "2026-06-21",
    is_remix_of: "accounting-to-data-analyst",
  },
];

export const mockPlaylistSteps: PlaylistStep[] = [
  { id: "step-a1", playlist_id: "accounting-to-data-analyst", course_id: "excel-basics", order_index: 0 },
  { id: "step-a2", playlist_id: "accounting-to-data-analyst", course_id: "business-analysis", order_index: 1 },
  { id: "step-a3", playlist_id: "accounting-to-data-analyst", course_id: "python-everybody", order_index: 2 },
  { id: "step-a4", playlist_id: "accounting-to-data-analyst", course_id: "google-data-analytics", order_index: 3 },
  { id: "step-p1", playlist_id: "ai-productivity-stack", course_id: "prompt-engineering", order_index: 0 },
  { id: "step-p2", playlist_id: "ai-productivity-stack", course_id: "excel-basics", order_index: 1 },
  { id: "step-p3", playlist_id: "ai-productivity-stack", course_id: "business-analysis", order_index: 2 },
  { id: "step-g1", playlist_id: "first-google-certificate", course_id: "project-management", order_index: 0 },
  { id: "step-g2", playlist_id: "first-google-certificate", course_id: "ux-design", order_index: 1 },
  { id: "step-g3", playlist_id: "first-google-certificate", course_id: "google-data-analytics", order_index: 2 },
  { id: "step-m1", playlist_id: "analyst-to-ml-starter", course_id: "google-data-analytics", order_index: 0 },
  { id: "step-m2", playlist_id: "analyst-to-ml-starter", course_id: "python-everybody", order_index: 1 },
  { id: "step-m3", playlist_id: "analyst-to-ml-starter", course_id: "machine-learning", order_index: 2 },
];

export const mockPlaylistFollows: PlaylistFollow[] = [
  { id: "follow-1", playlist_id: "accounting-to-data-analyst", user_id: CURRENT_USER_ID, current_step_index: 2, completed_at: null },
  { id: "follow-2", playlist_id: "accounting-to-data-analyst", user_id: "user-mai", current_step_index: 4, completed_at: "2026-06-30" },
  { id: "follow-3", playlist_id: "accounting-to-data-analyst", user_id: "user-long", current_step_index: 4, completed_at: "2026-07-01" },
  { id: "follow-4", playlist_id: "accounting-to-data-analyst", user_id: "user-nam", current_step_index: 1, completed_at: null },
  { id: "follow-5", playlist_id: "ai-productivity-stack", user_id: "user-hanh", current_step_index: 3, completed_at: "2026-06-25" },
  { id: "follow-6", playlist_id: "ai-productivity-stack", user_id: "user-vy", current_step_index: 2, completed_at: null },
  { id: "follow-7", playlist_id: "ai-productivity-stack", user_id: "user-tuan", current_step_index: 3, completed_at: "2026-07-02" },
  { id: "follow-8", playlist_id: "first-google-certificate", user_id: "user-hoa", current_step_index: 1, completed_at: null },
  { id: "follow-9", playlist_id: "first-google-certificate", user_id: "user-bao", current_step_index: 3, completed_at: "2026-06-22" },
  { id: "follow-10", playlist_id: "analyst-to-ml-starter", user_id: "user-kim", current_step_index: 2, completed_at: null },
  { id: "follow-11", playlist_id: "analyst-to-ml-starter", user_id: "user-phuc", current_step_index: 3, completed_at: "2026-06-28" },
];

export function getPlaylistById(id: string) {
  return mockPlaylists.find((playlist) => playlist.id === id);
}

export function getPlaylistSteps(playlistId: string) {
  return mockPlaylistSteps
    .filter((step) => step.playlist_id === playlistId)
    .sort((a, b) => a.order_index - b.order_index)
    .flatMap((step) => {
      const course = mockCourses.find((item) => item.id === step.course_id);
      return course ? [{ ...step, course }] : [];
    });
}

export function getPlaylistStats(playlistId: string) {
  const follows = mockPlaylistFollows.filter(
    (follow) => follow.playlist_id === playlistId,
  );
  const completedCount = follows.filter((follow) => follow.completed_at).length;
  const followerCount = follows.length;
  const completionRate =
    followerCount === 0 ? 0 : Math.round((completedCount / followerCount) * 100);
  const courseCount = mockPlaylistSteps.filter(
    (step) => step.playlist_id === playlistId,
  ).length;

  return {
    completedCount,
    completionRate,
    courseCount,
    followerCount,
  };
}

export function getCurrentUserFollow(playlistId: string) {
  return mockPlaylistFollows.find(
    (follow) =>
      follow.playlist_id === playlistId && follow.user_id === CURRENT_USER_ID,
  );
}

export function getFeaturedPlaylist() {
  return [...mockPlaylists].sort(
    (a, b) =>
      getPlaylistStats(b.id).completionRate -
      getPlaylistStats(a.id).completionRate,
  )[0];
}

export function filterPlaylists(filters: PlaylistFilters) {
  return mockPlaylists.filter((playlist) => {
    const goalMatches =
      !filters.goal || filters.goal === "all" || playlist.tags.includes(filters.goal);
    const levelMatches =
      !filters.level || filters.level === "all" || playlist.entry_level === filters.level;
    const durationMatches =
      !filters.duration ||
      filters.duration === "all" ||
      playlist.duration_bucket === filters.duration;

    return goalMatches && levelMatches && durationMatches;
  });
}

export function getRemixSource(playlistId: string) {
  const source = getPlaylistById(playlistId);
  if (!source) return null;

  return {
    ...source,
    id: `${source.id}-remix`,
    title: `${source.title} Remix`,
    creator_id: CURRENT_USER_ID,
    creator_name: "Dat",
    is_remix_of: source.id,
  };
}
