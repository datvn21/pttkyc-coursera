"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, SlidersHorizontal } from "lucide-react";
import PlaylistCard from "./PlaylistCard";
import {
  durationBucketLabels,
  entryLevelLabels,
  filterPlaylists,
  getPlaylistStats,
  goalTagLabels,
  type DurationBucket,
  type EntryLevel,
  type Playlist,
  type PlaylistGoalTag,
} from "@/lib/playlists";
import {
  getStoredLearnLists,
  getStoredLearnListStats,
  type StoredLearnList,
} from "@/lib/learn-list-storage";

export default function PlaylistFilters() {
  const [goal, setGoal] = useState<PlaylistGoalTag | "all">("all");
  const [level, setLevel] = useState<EntryLevel | "all">("all");
  const [duration, setDuration] = useState<DurationBucket | "all">("all");
  const [storedLists, setStoredLists] = useState<StoredLearnList[]>([]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setStoredLists(getStoredLearnLists());
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const playlists = useMemo(
    () => {
      const storedMatches = storedLists
        .map((item) => item.playlist)
        .filter((playlist) => matchesFilters(playlist, goal, level, duration));
      return [
        ...storedMatches,
        ...filterPlaylists({ goal, level, duration }),
      ];
    },
    [goal, level, duration, storedLists],
  );

  return (
    <section className="mt-8">
      <div className="mb-5 flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <SlidersHorizontal size={14} />
            Filters
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <FilterSelect
              label="Goal"
              value={goal}
              onChange={(value) => setGoal(value as PlaylistGoalTag | "all")}
              options={goalTagLabels}
            />
            <FilterSelect
              label="Entry level"
              value={level}
              onChange={(value) => setLevel(value as EntryLevel | "all")}
              options={entryLevelLabels}
            />
            <FilterSelect
              label="Study time"
              value={duration}
              onChange={(value) =>
                setDuration(value as DurationBucket | "all")
              }
              options={durationBucketLabels}
            />
          </div>
        </div>

        <Link
          href="/learn-lists/create"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-coursera-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          <Plus size={16} />
          Create Learn List
        </Link>
      </div>

      {playlists.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <PlaylistCard
                playlist={playlist}
                stats={
                  getStatsForPlaylist(playlist.id, storedLists) ??
                  getPlaylistStats(playlist.id)
                }
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
          <p className="font-semibold text-gray-900">No Learn Lists found</p>
          <p className="mt-1 text-sm text-gray-600">
            Try another goal, level, or study-time filter.
          </p>
        </div>
      )}
    </section>
  );
}

function matchesFilters(
  playlist: Playlist,
  goal: PlaylistGoalTag | "all",
  level: EntryLevel | "all",
  duration: DurationBucket | "all",
) {
  const goalMatches = goal === "all" || playlist.tags.includes(goal);
  const levelMatches = level === "all" || playlist.entry_level === level;
  const durationMatches =
    duration === "all" || playlist.duration_bucket === duration;
  return goalMatches && levelMatches && durationMatches;
}

function getStatsForPlaylist(id: string, storedLists: StoredLearnList[]) {
  const stored = storedLists.find((item) => item.playlist.id === id);
  return stored ? getStoredLearnListStats(stored) : null;
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Record<string, string>;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-xs font-semibold text-gray-600">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-900 focus:border-coursera-blue focus:outline-none focus:ring-2 focus:ring-coursera-blue/20"
      >
        <option value="all">All</option>
        {Object.entries(options).map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
