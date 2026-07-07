import {
  CURRENT_USER_ID,
  mockCourses,
  type DurationBucket,
  type EntryLevel,
  type Playlist,
  type PlaylistCourse,
  type PlaylistGoalTag,
  type PlaylistStep,
} from "@/lib/playlists";

const STORAGE_KEY = "coursera-clone.learn-lists";

export type StoredLearnList = {
  playlist: Playlist;
  steps: PlaylistStep[];
};

export type SaveLearnListInput = {
  id?: string;
  title: string;
  description: string;
  goal: PlaylistGoalTag;
  level: EntryLevel;
  duration: DurationBucket;
  courses: PlaylistCourse[];
  isRemixOf?: string | null;
};

export function getStoredLearnLists(): StoredLearnList[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getStoredLearnListById(id: string) {
  return getStoredLearnLists().find((item) => item.playlist.id === id);
}

export function saveStoredLearnList(input: SaveLearnListInput) {
  const id = input.id ?? createLearnListId(input.title);
  const existing = getStoredLearnListById(id);
  const createdAt = existing?.playlist.created_at ?? new Date().toISOString().slice(0, 10);
  const playlist: Playlist = {
    id,
    title: input.title.trim(),
    description: input.description.trim(),
    creator_id: CURRENT_USER_ID,
    creator_name: "Dat",
    tags: [input.goal],
    entry_level: input.level,
    duration_bucket: input.duration,
    estimated_duration: getEstimatedDurationLabel(input.duration),
    created_at: createdAt,
    is_remix_of: input.isRemixOf ?? existing?.playlist.is_remix_of ?? null,
  };
  const steps = input.courses.map((course, index) => ({
    id: `${id}-step-${course.id}`,
    playlist_id: id,
    course_id: course.id,
    order_index: index,
  }));

  const nextItem: StoredLearnList = { playlist, steps };
  const nextItems = [
    nextItem,
    ...getStoredLearnLists().filter((item) => item.playlist.id !== id),
  ];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));

  return nextItem;
}

export function getStoredLearnListSteps(item: StoredLearnList) {
  return item.steps
    .sort((a, b) => a.order_index - b.order_index)
    .flatMap((step) => {
      const course = mockCourses.find((candidate) => candidate.id === step.course_id);
      return course ? [{ ...step, course }] : [];
    });
}

export function getStoredLearnListStats(item: StoredLearnList) {
  return {
    completedCount: 0,
    completionRate: 0,
    courseCount: item.steps.length,
    followerCount: 1,
  };
}

export function encodeStoredLearnListForShare(item: StoredLearnList) {
  const json = JSON.stringify(item);
  return btoa(encodeURIComponent(json));
}

export function decodeStoredLearnListFromShare(value: string) {
  try {
    const json = decodeURIComponent(atob(value));
    const parsed = JSON.parse(json) as StoredLearnList;
    if (!parsed?.playlist?.id || !Array.isArray(parsed.steps)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function importSharedLearnList(item: StoredLearnList) {
  const nextItems = [
    item,
    ...getStoredLearnLists().filter(
      (stored) => stored.playlist.id !== item.playlist.id,
    ),
  ];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
}

function createLearnListId(title: string) {
  const slug =
    title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "learn-list";
  return `my-${slug}-${Date.now().toString(36)}`;
}

function getEstimatedDurationLabel(duration: DurationBucket) {
  if (duration === "short") return "Under 2 months";
  if (duration === "medium") return "2-4 months";
  return "4+ months";
}
