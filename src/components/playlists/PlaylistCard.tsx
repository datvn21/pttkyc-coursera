import Link from "next/link";
import {
  Clock,
  ListOrdered,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  entryLevelLabels,
  goalTagLabels,
  type Playlist,
} from "@/lib/playlists";

type PlaylistCardProps = {
  playlist: Playlist;
  stats: {
    completionRate: number;
    courseCount: number;
    followerCount: number;
  };
};

export default function PlaylistCard({ playlist, stats }: PlaylistCardProps) {
  return (
    <Link
      href={`/learn-lists/${playlist.id}`}
      className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-coursera-blue/40 hover:shadow-lg"
    >
      <div className="mb-4 flex flex-wrap gap-2">
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
      </div>

      <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-coursera-blue">
        {playlist.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
        {playlist.description}
      </p>

      <div className="mt-4 text-sm text-gray-600">
        Curated by{" "}
        <span className="font-semibold text-gray-900">
          {playlist.creator_name}
        </span>
      </div>

      <div className="mt-5 rounded-lg bg-coursera-light p-3">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <TrendingUp size={14} className="text-coursera-blue" />
            Completion rate
          </span>
          <span className="tabular-nums text-gray-900">
            {stats.completionRate}%
          </span>
        </div>
        <div
          className="h-1.5 overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuenow={stats.completionRate}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${playlist.title} completion rate`}
        >
          <div
            className="h-full rounded-full bg-coursera-blue"
            style={{ width: `${stats.completionRate}%` }}
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
        <span className="inline-flex items-center gap-1.5">
          <ListOrdered size={14} />
          {stats.courseCount} courses
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} />
          {playlist.estimated_duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users size={14} />
          {stats.followerCount}
        </span>
      </div>
    </Link>
  );
}
