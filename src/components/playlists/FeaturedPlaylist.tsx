import Link from "next/link";
import { Award, ChevronRight, ListChecks, Users } from "lucide-react";
import {
  goalTagLabels,
  type Playlist,
} from "@/lib/playlists";

type FeaturedPlaylistProps = {
  playlist: Playlist;
  stats: {
    completionRate: number;
    courseCount: number;
    followerCount: number;
  };
};

export default function FeaturedPlaylist({
  playlist,
  stats,
}: FeaturedPlaylistProps) {
  return (
    <section className="rounded-lg border border-coursera-blue/30 bg-blue-50 p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px] lg:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-coursera-blue shadow-sm">
            <Award size={14} />
            Highest completion rate
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {playlist.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-700">
            {playlist.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
            {playlist.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-white px-2 py-1 font-bold uppercase tracking-wider text-coursera-blue"
              >
                {goalTagLabels[tag]}
              </span>
            ))}
            <span>Curated by {playlist.creator_name}</span>
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Completion rate
              </p>
              <p className="mt-1 text-4xl font-bold text-coursera-blue tabular-nums">
                {stats.completionRate}%
              </p>
            </div>
            <ListChecks className="text-coursera-blue" size={34} />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-sm text-gray-600">
            <span>{stats.courseCount} courses</span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={15} />
              {stats.followerCount} following
            </span>
          </div>
          <Link
            href={`/learn-lists/${playlist.id}`}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-coursera-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            View Learn List
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
