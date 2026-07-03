"use client";

import React, { useState } from "react";
import Link from "next/link";

type ContinueLearningProps = {
  userName?: string;
  certificateTitle?: string;
  certificateHref?: string;
  currentCourseTitle?: string;
  currentCourseHref?: string;
  progressPercent?: number;
  upNextTitle?: string;
  upNextHref?: string;
  upNextType?: string;
  upNextDuration?: string;
  resumeHref?: string;
  streakCount?: number;
};

export default function ContinueLearning({
  userName = "Dat",
  certificateTitle = "IBM IT Project Manager Professional Certificate",
  certificateHref = "/learn/ibm-it-project-manager",
  currentCourseTitle = "Machine Learning Specialization",
  currentCourseHref = "/learn/machine-learning",
  progressPercent = 33,
  upNextTitle = "Video: Applications of Machine Learning",
  upNextHref = "/learn/machine-learning",
  upNextType = "Video lecture",
  upNextDuration = "8 min",
  resumeHref = currentCourseHref,
  streakCount = 1,
}: ContinueLearningProps) {
  const [goalsExpanded, setGoalsExpanded] = useState(true);

  return (
    <section
      className="bg-[#ffeac9] border-b border-[#3a1703]/20"
      aria-label="Continue Learning"
    >
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Welcome + Current Course + Progress */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm text-[#3a1703]">
              {userName}, welcome back to the{" "}
              <Link
                href={certificateHref}
                className="text-coursera-blue hover:underline font-medium"
              >
                {certificateTitle}
              </Link>
            </p>

            <Link
              href={currentCourseHref}
              className="block text-lg font-semibold text-[#3a1703] hover:text-coursera-blue transition-colors"
            >
              Course 5/11: {currentCourseTitle}
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#3a1703]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-coursera-blue rounded-full transition-all"
                  style={{ width: `${Math.min(progressPercent, 100)}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#3a1703] whitespace-nowrap">
                {progressPercent}% complete
              </span>
            </div>
          </div>

          {/* Right: Up Next + Actions */}
          <div className="lg:col-span-1 space-y-4">
            <div className="border border-[#3a1703]/20 rounded-lg p-4 bg-white">
              <p className="text-xs font-semibold text-[#3a1703] uppercase tracking-wider mb-1">
                Up next
              </p>
              <Link
                href={upNextHref}
                className="block text-sm font-semibold text-[#3a1703] hover:text-coursera-blue transition-colors mb-1"
              >
                {upNextTitle}
              </Link>
              <p className="text-xs text-[#3a1703]/80">
                {upNextType} · {upNextDuration}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={resumeHref}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-coursera-blue text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Resume Learning
                </Link>
                <img
                  src="https://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png"
                  alt="IBM"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Daily Goals / Streak */}
        <div className="mt-6 border border-[#3a1703]/20 rounded-lg bg-white">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition"
            onClick={() => setGoalsExpanded((prev) => !prev)}
            aria-expanded={goalsExpanded}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#3a1703]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 6.121A3 3 0 1012 9a3 3 0 00-2.121-5.879z"
                />
              </svg>
              <span className="text-sm font-semibold text-[#3a1703]">
                {streakCount} week streak
              </span>
            </div>
            <svg
              className={`w-4 h-4 text-[#3a1703] transition-transform ${
                goalsExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {goalsExpanded && (
            <div className="px-4 pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    label: "Complete any 3 learning items",
                    progress: "0/3",
                    active: true,
                  },
                  { label: "Watch 2 videos", progress: "0/2", active: false },
                  {
                    label: "Set up a weekly learning target",
                    progress: "",
                    active: false,
                  },
                ].map((goal) => (
                  <button
                    key={goal.label}
                    type="button"
                    className={`flex items-center gap-3 rounded-lg border p-3 text-left transition ${
                      goal.active
                        ? "border-coursera-blue bg-coursera-blue/10"
                        : "border-[#3a1703]/20 hover:border-[#3a1703]/40"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3a1703]/20 bg-white">
                      <svg
                        className="w-5 h-5 text-[#3a1703]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#3a1703]">
                        {goal.label}
                      </p>
                      {goal.progress && (
                        <p className="text-xs text-[#3a1703]/80">
                          · {goal.progress}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
