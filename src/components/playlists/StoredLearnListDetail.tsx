"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Calendar,
  ChevronLeft,
  Clock,
  Edit3,
  ListOrdered,
  TrendingUp,
  Users,
} from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaylistStepList, {
  FollowPlaylistButton,
} from "@/components/playlists/PlaylistStepList";
import ShareLearnListButton from "@/components/playlists/LearnListActions";
import {
  entryLevelLabels,
  goalTagLabels,
} from "@/lib/playlists";
import {
  decodeStoredLearnListFromShare,
  getStoredLearnListById,
  getStoredLearnListStats,
  getStoredLearnListSteps,
  importSharedLearnList,
  type StoredLearnList,
} from "@/lib/learn-list-storage";

type StoredLearnListDetailProps = {
  playlistId: string;
};

export default function StoredLearnListDetail({
  playlistId,
}: StoredLearnListDetailProps) {
  const [item, setItem] = useState<StoredLearnList | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = getStoredLearnListById(playlistId);
      if (stored) {
        setItem(stored);
        setLoaded(true);
        return;
      }

      const shared = new URLSearchParams(window.location.search).get("shared");
      if (shared) {
        const decoded = decodeStoredLearnListFromShare(shared);
        if (decoded && decoded.playlist.id === playlistId) {
          importSharedLearnList(decoded);
          setItem(decoded);
        }
      }
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, [playlistId]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-coursera-light font-sans text-gray-900">
        <TopBanner />
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-12">
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
            Loading Learn List...
          </div>
        </main>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-coursera-light font-sans text-gray-900">
        <TopBanner />
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-12">
          <Link
            href="/learn-lists"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-coursera-blue"
          >
            <ChevronLeft size={16} />
            Back to Learn Lists
          </Link>
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
            <p className="text-lg font-bold text-gray-900">
              Learn List not found
            </p>
            <p className="mt-2 text-sm text-gray-600">
              If this is a shared Learn List, ask the creator for the full share
              link.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { playlist } = item;
  const steps = getStoredLearnListSteps(item);
  const stats = getStoredLearnListStats(item);

  return (
    <div className="min-h-screen bg-coursera-light font-sans text-gray-900">
      <TopBanner />
      <Navbar />
      <main>
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <Link
              href="/learn-lists"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-coursera-blue"
            >
              <ChevronLeft size={16} />
              Back to Learn Lists
            </Link>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {playlist.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-blue-50 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-coursera-blue"
                    >
                      {goalTagLabels[tag]}
                    </span>
                  ))}
                  <span className="rounded bg-gray-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-600">
                    {entryLevelLabels[playlist.entry_level]}
                  </span>
                  <span className="rounded bg-emerald-50 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Created by you
                  </span>
                </div>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                  {playlist.title}
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
                  {playlist.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span>
                    Curated by{" "}
                    <strong className="text-gray-900">
                      {playlist.creator_name}
                    </strong>
                  </span>
                  <span className="hidden text-gray-300 sm:inline">|</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={15} />
                    {playlist.created_at}
                  </span>
                </div>
              </div>

              <aside className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Metric
                    icon={<TrendingUp size={16} />}
                    label="Completion"
                    value={`${stats.completionRate}%`}
                  />
                  <Metric
                    icon={<Users size={16} />}
                    label="Following"
                    value={stats.followerCount.toLocaleString()}
                  />
                  <Metric
                    icon={<ListOrdered size={16} />}
                    label="Courses"
                    value={stats.courseCount.toString()}
                  />
                  <Metric
                    icon={<Clock size={16} />}
                    label="Duration"
                    value={playlist.estimated_duration}
                  />
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <FollowPlaylistButton initiallyFollowing />
                  <Link
                    href={`/learn-lists/${playlist.id}/edit`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-coursera-blue px-4 py-2.5 text-sm font-semibold text-coursera-blue transition hover:bg-blue-50"
                  >
                    <Edit3 size={16} />
                    Edit courses
                  </Link>
                  <ShareLearnListButton storedLearnList={item} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Courses in this Learn List
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Add, remove, or reorder courses anytime from edit mode.
            </p>
          </div>
          <PlaylistStepList steps={steps} currentStepIndex={0} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-coursera-light p-3">
      <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-gray-500">
        {icon}
        {label}
      </div>
      <div className="font-bold text-gray-900 tabular-nums">{value}</div>
    </div>
  );
}
