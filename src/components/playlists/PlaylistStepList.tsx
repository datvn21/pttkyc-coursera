"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Clock, PlayCircle, Plus, Route } from "lucide-react";
import type { PlaylistCourse, PlaylistStep } from "@/lib/playlists";

type StepWithCourse = PlaylistStep & {
  course: PlaylistCourse;
};

type PlaylistStepListProps = {
  steps: StepWithCourse[];
  currentStepIndex: number;
};

export default function PlaylistStepList({
  steps,
  currentStepIndex,
}: PlaylistStepListProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => {
        const status =
          index < currentStepIndex
            ? "completed"
            : index === currentStepIndex
              ? "current"
              : "upcoming";
        const isFuture = status === "upcoming";
        const badge =
          status === "completed"
            ? "Completed"
            : status === "current"
              ? "Learning now"
              : "Not started";
        const badgeClass =
          status === "completed"
            ? "bg-emerald-50 text-emerald-700"
            : status === "current"
              ? "bg-blue-50 text-coursera-blue"
              : "bg-gray-100 text-gray-500";

        return (
          <li key={step.id} className={isFuture ? "opacity-65" : ""}>
            <Link
              href={step.course.href}
              className={`group flex h-full flex-col overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-lg ${
                status === "current"
                  ? "border-coursera-blue shadow-sm ring-2 ring-coursera-blue/10"
                  : "border-gray-200 hover:border-coursera-blue/40"
              }`}
            >
              <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.course.imageUrl}
                  alt={step.course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm ${badgeClass}`}
                  >
                    {badge}
                  </span>
                  {status === "current" && (
                    <span className="inline-flex items-center gap-1 rounded bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-coursera-blue shadow-sm">
                      <PlayCircle size={13} />
                      Continue
                    </span>
                  )}
                  {status === "completed" && (
                    <span className="inline-flex items-center gap-1 rounded bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
                      <CheckCircle2 size={13} />
                      Done
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-2 text-xs text-gray-600">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-coursera-blue text-[9px] font-bold text-white">
                    {step.course.partner.charAt(0)}
                  </div>
                  <span className="truncate">{step.course.partner}</span>
                </div>
                <h3 className="line-clamp-2 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-coursera-blue">
                  {step.course.title}
                </h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-600">
                  <Clock size={14} />
                  {step.course.duration}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {step.course.skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <span className="text-xs font-semibold text-coursera-blue">
                    Open course
                  </span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function FollowPlaylistButton({
  initiallyFollowing,
}: {
  initiallyFollowing: boolean;
}) {
  const [following, setFollowing] = useState(initiallyFollowing);

  return (
    <button
      type="button"
      onClick={() => setFollowing((value) => !value)}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition sm:w-auto ${
        following
          ? "border border-coursera-blue bg-white text-coursera-blue hover:bg-blue-50"
          : "bg-coursera-blue text-white hover:bg-blue-800"
      }`}
    >
      {following ? <Route size={16} /> : <Plus size={16} />}
      {following ? "Following this Learn List" : "Follow this Learn List"}
    </button>
  );
}
