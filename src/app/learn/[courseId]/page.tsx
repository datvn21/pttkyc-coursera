"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Bookmark,
  Bell,
  CheckCircle2,
  ChevronDown,
  Circle,
  Download,
  FileText,
  Globe,
  GraduationCap,
  LayoutGrid,
  ListChecks,
  Loader2,
  Lock,
  Maximize2,
  Menu,
  MessageSquare,
  NotebookPen,
  Paperclip,
  Pause,
  Play,
  Search,
  Settings,
  Share2,
  Sparkles,
  Subtitles,
  ThumbsUp,
  Volume2,
  VolumeX,
  Wifi,
  X,
  LinkIcon,
} from "lucide-react";

type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  poster?: string;
  resourceCount?: number;
  isLocked?: boolean;
  preview?: boolean;
};

type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

const SAMPLE_VIDEO = "/videos/demo.webm";

const DEFAULT_COURSES: Record<
  string,
  {
    title: string;
    provider: string;
    instructor: string;
    rating: number;
    learners: string;
    modules: Module[];
    overview: string;
    whatYouWillLearn: string[];
    hours: number;
    level: string;
  }
> = {
  "machine-learning": {
    title: "Machine Learning Specialization",
    provider: "Stanford University · DeepLearning.AI",
    instructor: "Andrew Ng",
    rating: 4.9,
    learners: "1.2M",
    hours: 91,
    level: "Beginner",
    overview:
      "Build foundational ML skills through hands-on projects. Master supervised learning, neural networks, and best practices used by industry leaders.",
    whatYouWillLearn: [
      "Build and train supervised and unsupervised machine learning models",
      "Use best practices for ML development and apply them to real problems",
      "Diagnose bias and variance, then apply regularization and learning curves",
      "Build deep neural networks and tune architecture for performance",
    ],
    modules: [
      {
        id: "m1",
        title: "Week 1 · Introduction to Machine Learning",
        lessons: [
          {
            id: "l1",
            title: "Welcome to the Specialization",
            duration: "3:42",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 2,
          },
          {
            id: "l2",
            title: "Applications of Machine Learning",
            duration: "8:15",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 1,
          },
          {
            id: "l3",
            title: "What is ML? A Friendly Intro",
            duration: "12:48",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 4,
          },
          {
            id: "l4",
            title: "Supervised vs Unsupervised Learning",
            duration: "10:21",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 2,
            preview: true,
          },
          {
            id: "l5",
            title: "Module 1 Lab · Optional Python Refresher",
            duration: "—",
            videoUrl: SAMPLE_VIDEO,
            isLocked: true,
            resourceCount: 0,
          },
        ],
      },
      {
        id: "m2",
        title: "Week 2 · Regression with Multiple Variables",
        lessons: [
          {
            id: "l6",
            title: "Multiple Features",
            duration: "9:04",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 3,
          },
          {
            id: "l7",
            title: "Vectorization",
            duration: "7:33",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 1,
          },
          {
            id: "l8",
            title: "Gradient Descent in Practice",
            duration: "11:08",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 4,
          },
          {
            id: "l9",
            title: "Practice Quiz · Multiple Linear Regression",
            duration: "10 questions",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 2,
          },
        ],
      },
      {
        id: "m3",
        title: "Week 3 · Classification",
        lessons: [
          {
            id: "l10",
            title: "Logistic Regression Intuition",
            duration: "9:45",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 2,
          },
          {
            id: "l11",
            title: "Decision Boundary",
            duration: "6:12",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 1,
          },
          {
            id: "l12",
            title: "Cost Function for Logistic Regression",
            duration: "10:55",
            videoUrl: SAMPLE_VIDEO,
            resourceCount: 3,
          },
        ],
      },
    ],
  },
};

export default function CourseLearningPage() {
  const params = useParams<{ courseId: string }>();
  const router = useRouter();
  const courseId =
    typeof params?.courseId === "string" ? params.courseId : "machine-learning";

  const course = useMemo(
    () =>
      DEFAULT_COURSES[courseId] ?? {
        title: prettyTitle(courseId),
        provider: "Coursera",
        instructor: "Coursera Instructor",
        rating: 4.7,
        learners: "—",
        hours: 20,
        level: "Mixed",
        overview:
          "Welcome to the course. This course covers core topics with hands-on projects designed by industry experts.",
        whatYouWillLearn: [
          "Understand the core concepts covered in this course",
          "Apply techniques to a real-world capstone project",
          "Earn a shareable certificate on completion",
        ],
        modules: [
          {
            id: "m1",
            title: "Module 1 · Getting Started",
            lessons: [
              {
                id: "l1",
                title: "Course Welcome",
                duration: "4:00",
                videoUrl: SAMPLE_VIDEO,
                resourceCount: 1,
              },
              {
                id: "l2",
                title: "Setting Up Your Environment",
                duration: "8:30",
                videoUrl: SAMPLE_VIDEO,
                resourceCount: 2,
              },
            ],
          },
          {
            id: "m2",
            title: "Module 2 · Core Concepts",
            lessons: [
              {
                id: "l3",
                title: "Concept Walkthrough",
                duration: "12:00",
                videoUrl: SAMPLE_VIDEO,
                resourceCount: 3,
              },
              {
                id: "l4",
                title: "Hands-on Activity",
                duration: "10:30",
                videoUrl: SAMPLE_VIDEO,
                resourceCount: 1,
              },
            ],
          },
        ],
      },
    [courseId],
  );

  const flatLessons = useMemo(
    () => course.modules.flatMap((m) => m.lessons),
    [course],
  );

  const [activeLessonId, setActiveLessonId] = useState<string>(
    flatLessons[0]?.id ?? "",
  );
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");
  const [qnaText, setQnaText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "overview" | "notes" | "qna" | "resources"
  >("overview");
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >(() => Object.fromEntries(course.modules.map((m, i) => [m.id, i === 0])));

  const activeLesson = useMemo(
    () => flatLessons.find((l) => l.id === activeLessonId) ?? flatLessons[0],
    [flatLessons, activeLessonId],
  );

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPct = Math.round(
    (completedCount / Math.max(flatLessons.length, 1)) * 100,
  );

  const handleSelectLesson = (id: string) => {
    setActiveLessonId(id);
    setActiveTab("overview");
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  const handleMarkComplete = () => {
    if (!activeLesson) return;
    setCompleted((c) => ({ ...c, [activeLesson.id]: !c[activeLesson.id] }));
  };

  const goToNext = () => {
    const idx = flatLessons.findIndex((l) => l.id === activeLessonId);
    const next = flatLessons[idx + 1];
    if (next && !next.isLocked) handleSelectLesson(next.id);
  };

  return (
    <div className="min-h-dvh bg-white text-gray-900 font-sans flex flex-col">
      <StickyTopBar
        courseTitle={course.title}
        progressPct={progressPct}
        onBack={() => router.push("/learn")}
      />

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-3 sm:px-5 lg:px-8 pt-8 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8">
        <div className="flex flex-col gap-6 min-w-0">
          <VideoPlayer
            key={activeLesson?.id}
            src={activeLesson?.videoUrl ?? SAMPLE_VIDEO}
            title={activeLesson?.title ?? course.title}
            onEnded={goToNext}
          />

          <div className="flex flex-col gap-2">
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
              {course.provider}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {activeLesson?.title ?? course.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                {course.instructor}
              </span>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Sparkles size={14} className="text-amber-500" />
                {course.rating} ({course.learners} learners)
              </span>
              <span aria-hidden>·</span>
              <span>
                {course.hours} hours · {course.level}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <ActionPill
                icon={<CheckCircle2 size={16} />}
                label={
                  completed[activeLesson?.id ?? ""]
                    ? "Completed"
                    : "Mark as complete"
                }
                onClick={handleMarkComplete}
                active={!!completed[activeLesson?.id ?? ""]}
              />
              <ActionPill icon={<Bookmark size={16} />} label="Save" />
              <ActionPill icon={<Share2 size={16} />} label="Share" />
              <ActionPill icon={<ThumbsUp size={16} />} label="Helpful" />
              <ActionPill
                icon={<FileText size={16} />}
                label="Transcript"
                onClick={() => setActiveTab("overview")}
              />
            </div>
          </div>

          <CourseTabs
            course={course}
            tab={activeTab}
            onChange={setActiveTab}
            notes={notes}
            setNotes={setNotes}
            qnaText={qnaText}
            setQnaText={setQnaText}
            activeLessonTitle={activeLesson?.title}
          />

          <NextUpCard
            lessons={flatLessons}
            activeId={activeLesson?.id ?? ""}
            completed={completed}
            onSelect={handleSelectLesson}
          />
        </div>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <Syllabus
            course={course}
            activeLessonId={activeLesson?.id ?? ""}
            completed={completed}
            expandedModules={expandedModules}
            onToggleModule={(id) =>
              setExpandedModules((s) => ({ ...s, [id]: !s[id] }))
            }
            onSelectLesson={handleSelectLesson}
          />
        </aside>
      </main>
    </div>
  );
}

function prettyTitle(slug: string) {
  return slug
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function StickyTopBar({
  courseTitle,
  progressPct,
  onBack,
}: {
  courseTitle: string;
  progressPct: number;
  onBack: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200/80 backdrop-blur-[2px]">
      {/* Row 1 — Coursera global nav */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8 h-16 flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl text-coursera-blue shrink-0 tracking-tight transition-opacity hover:opacity-80"
            aria-label="Coursera home"
          >
            coursera
          </Link>

          <NavLink icon={<LayoutGrid size={16} strokeWidth={2} />}>
            Explore
          </NavLink>

          <div className="relative hidden md:flex flex-1 max-w-[420px]">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              aria-hidden
            />
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full pl-10 pr-12 py-2 text-sm rounded-full border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-coursera-blue/30 focus:border-coursera-blue transition"
              aria-label="Search courses"
            />
            <button
              className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-coursera-blue text-white text-xs font-semibold hover:bg-blue-700 active:scale-[0.98] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coursera-blue"
              aria-label="Search"
            >
              Search
            </button>
          </div>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <NavLink variant="icon" label="Language">
              <Globe size={18} strokeWidth={2} />
              <ChevronDown
                size={12}
                strokeWidth={2.5}
                className="hidden lg:block opacity-70"
              />
              <span className="hidden xl:inline ml-0.5 text-sm font-medium">
                EN
              </span>
            </NavLink>

            <NavLink variant="icon" label="Notifications">
              <Bell size={18} strokeWidth={2} />
              <span className="absolute top-1 right-1.5 bg-[#c62828] text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full ring-2 ring-white tabular-nums">
                6
              </span>
            </NavLink>

            <button
              type="button"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 active:scale-[0.99] rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue/40"
              aria-label="Online Degrees"
            >
              <GraduationCap size={16} strokeWidth={2} />
              Degrees
            </button>

            <Link
              href="/"
              className="relative w-9 h-9 shrink-0 rounded-full bg-[#001D6C] text-white font-bold text-sm flex items-center justify-center ring-2 ring-coursera-blue hover:ring-blue-300 hover:scale-[1.03] transition group"
              aria-label="Account menu"
            >
              D
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-coursera-blue text-white text-[8px] font-bold leading-none px-1.5 py-0.5 rounded-[3px] border-2 border-white shadow-sm group-hover:bg-blue-700 transition-colors">
                PLUS
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Row 2 — Course context (breadcrumb + progress) */}
      <div className="border-t border-gray-100 bg-gray-50/60">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8 h-12 flex items-center gap-2 sm:gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center h-9 w-9 rounded-full text-gray-600 hover:bg-white hover:text-gray-900 active:scale-[0.96] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue/40"
            aria-label="Back to home"
          >
            <ArrowLeft size={18} strokeWidth={2.25} />
          </button>

          <div className="h-5 w-px bg-gray-200" aria-hidden />

          <nav
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-500"
            aria-label="Breadcrumb"
          >
            <Link href="/learn" className="hover:text-coursera-blue transition">
              Home
            </Link>
            <span aria-hidden className="text-gray-300">
              /
            </span>
            <span className="text-gray-700">Courses</span>
            <span aria-hidden className="text-gray-300">
              /
            </span>
            <span
              className="text-gray-900 truncate max-w-[40ch]"
              title={courseTitle}
            >
              {courseTitle}
            </span>
          </nav>

          <span
            className="sm:hidden flex-1 min-w-0 text-sm font-semibold text-gray-900 truncate"
            title={courseTitle}
          >
            {courseTitle}
          </span>

          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex flex-col items-end min-w-0 w-44">
              <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                Course progress
              </span>
              <div
                className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mt-1"
                role="progressbar"
                aria-valuenow={progressPct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Course progress"
              >
                <div
                  className="h-full bg-coursera-blue transition-[width] duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-700 tabular-nums hidden sm:inline">
              {progressPct}%
            </span>

            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-full bg-coursera-blue text-white text-sm font-semibold hover:bg-blue-700 active:scale-[0.97] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-coursera-blue shadow-sm"
            >
              Upgrade
            </button>
          </div>
        </div>

        {/* Mobile: compact progress bar below row 2 */}
        <div className="sm:hidden px-3 pb-2 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold shrink-0">
            Progress
          </span>
          <div
            className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-coursera-blue transition-[width] duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-[11px] font-semibold text-gray-700 tabular-nums">
            {progressPct}%
          </span>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  children,
  icon,
  variant = "text",
  label,
}: {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "text" | "icon";
  label?: string;
}) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        aria-label={label}
        className="relative inline-flex items-center justify-center h-9 w-9 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:scale-[0.95] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue/40"
      >
        {icon}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 active:scale-[0.99] rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue/40"
    >
      {icon}
      {children}
      <ChevronDown size={14} strokeWidth={2.25} className="opacity-70" />
    </button>
  );
}

function VideoPlayer({
  src,
  title,
  onEnded,
}: {
  src: string;
  title: string;
  onEnded?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffering, setBuffering] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [captionsMenuOpen, setCaptionsMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editingTime, setEditingTime] = useState(false);
  const [timeInput, setTimeInput] = useState("");

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  }, []);

  const seek = useCallback(
    (pct: number) => {
      const v = videoRef.current;
      if (!v || !duration) return;
      v.currentTime = pct * duration;
      setCurrentTime(v.currentTime);
    },
    [duration],
  );

  const setPlaybackSpeed = useCallback((speed: number) => {
    const v = videoRef.current;
    if (v) v.playbackRate = speed;
    setSettingsOpen(false);
  }, []);

  const setCaptionLang = useCallback((lang: string) => {
    const v = videoRef.current;
    if (!v) return;
    if (!lang) {
      setCaptionsOn(false);
    } else {
      setCaptionsOn(true);
      Array.from(v.textTracks).forEach((t) => {
        t.mode = t.language === lang ? "showing" : "hidden";
      });
    }
    setCaptionsMenuOpen(false);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const v = videoRef.current;
    if (v?.requestFullscreen) v.requestFullscreen();
  }, []);

  const fmt = (s: number) => {
    if (!Number.isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${sec}`;
  };

  const startEditingTime = useCallback(() => {
    if (!duration) return;
    const m = Math.floor(currentTime / 60);
    const s = Math.floor(currentTime % 60);
    setTimeInput(`${m}:${s.toString().padStart(2, "0")}`);
    setEditingTime(true);
  }, [currentTime, duration]);

  const commitTimeEdit = useCallback(() => {
    const match = timeInput.match(/^(\d+):(\d{1,2})$/);
    if (match && duration) {
      const m = parseInt(match[1], 10);
      const s = parseInt(match[2], 10);
      if (s < 60) {
        const newTime = m * 60 + s;
        const v = videoRef.current;
        if (v) v.currentTime = Math.min(newTime, duration);
        setCurrentTime(v?.currentTime ?? newTime);
      }
    }
    setEditingTime(false);
  }, [timeInput, duration]);

  const adjustTime = useCallback(
    (delta: number) => {
      const v = videoRef.current;
      if (!v || !duration) return;
      const newTime = Math.max(0, Math.min(v.currentTime + delta, duration));
      v.currentTime = newTime;
      setCurrentTime(newTime);
    },
    [duration],
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = volume;
    v.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    Array.from(v.textTracks).forEach((t) => {
      t.mode = captionsOn ? "showing" : "hidden";
    });
  }, [captionsOn]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || duration) return;
    const tick = () => {
      if (v.duration && Number.isFinite(v.duration)) {
        setDuration(v.duration);
      }
    };
    v.addEventListener("durationchange", tick);
    tick();
    return () => v.removeEventListener("durationchange", tick);
  }, [duration]);

  return (
    <div
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-gray-200 shadow-md group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-contain bg-black"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) =>
          setCurrentTime((e.target as HTMLVideoElement).currentTime)
        }
        onLoadedMetadata={(e) =>
          setDuration((e.target as HTMLVideoElement).duration)
        }
        onWaiting={() => setBuffering(true)}
        onPlaying={() => setBuffering(false)}
        onEnded={onEnded}
        playsInline
      >
        <track
          kind="subtitles"
          label="English"
          srcLang="en"
          src="/videos/subtitles/English.vtt"
        />
        <track
          kind="subtitles"
          label="Tiếng Việt"
          srcLang="vi"
          src="/videos/subtitles/Vietnamese.vtt"
        />
      </video>

      {buffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
          <Loader2 className="text-white animate-spin" size={40} />
        </div>
      )}

      {!playing && !buffering && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-xl text-coursera-blue transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        >
          <Play size={36} fill="currentColor" />
        </button>
      )}

      <div
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity ${
          hovered || !playing ? "opacity-100" : "opacity-0"
        } pointer-events-none`}
      >
        <div className="pointer-events-auto">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={duration ? currentTime / duration : 0}
            onChange={(e) => {
              if (!duration) return;
              seek(Number(e.target.value));
            }}
            className="w-full h-1.5 accent-coursera-blue cursor-pointer"
            aria-label="Seek"
          />

          <div className="mt-2 flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="p-2 hover:bg-white/10 rounded-full transition"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" />
              )}
            </button>

            <div className="flex items-center gap-1 group/vol">
              <button
                onClick={() => setMuted((m) => !m)}
                className="p-2 hover:bg-white/10 bg-transparent rounded-full transition"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted || volume === 0 ? (
                  <VolumeX size={18} />
                ) : (
                  <Volume2 size={18} />
                )}
              </button>
              <div className="relative h-6 flex items-center w-0 group-hover/vol:w-20 transition-[width] duration-200 ease-out overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-white/25" />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full bg-white"
                  style={{ width: `${(muted ? 0 : volume) * 100}%` }}
                />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={muted ? 0 : volume}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setVolume(v);
                    if (v > 0) setMuted(false);
                  }}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                  aria-label="Volume"
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow pointer-events-none"
                  style={{
                    left: `${(muted ? 0 : volume) * 100}%`,
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.4)",
                  }}
                  aria-hidden
                />
              </div>
            </div>

            {editingTime ? (
              <input
                type="text"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
                onBlur={commitTimeEdit}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitTimeEdit();
                  if (e.key === "Escape") setEditingTime(false);
                }}
                className="w-16 bg-white/20 border border-white/40 rounded px-2 py-0.5 text-white text-xs font-mono text-center focus:outline-none focus:ring-1 focus:ring-white/60 tabular-nums"
                autoFocus
                aria-label="Edit current time"
              />
            ) : (
              <button
                type="button"
                onClick={startEditingTime}
                className="text-xs font-mono tabular-nums hover:text-yellow-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 rounded px-0.5"
                aria-label="Click to edit current time"
              >
                {fmt(currentTime)}
              </button>
            )}
            <span className="text-xs font-mono text-white/60 tabular-nums">
              / {fmt(duration)}
            </span>
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                onClick={() => adjustTime(-10)}
                className="w-6 h-6 rounded bg-white/10 hover:bg-white/30 flex items-center justify-center text-[10px] font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Rewind 10 seconds"
              >
                −10
              </button>
              <button
                type="button"
                onClick={() => adjustTime(10)}
                className="w-6 h-6 rounded bg-white/10 hover:bg-white/30 flex items-center justify-center text-[10px] font-bold text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Forward 10 seconds"
              >
                +10
              </button>
            </div>

            <div className="ml-auto flex items-center gap-1">
              <div className="relative">
                <button
                  onClick={() => {
                    if (captionsOn) setCaptionsMenuOpen((o) => !o);
                    else setCaptionsOn(true);
                  }}
                  className={`p-2 rounded-full transition ${
                    captionsOn
                      ? "bg-coursera-blue text-white"
                      : "hover:bg-white/10"
                  }`}
                  aria-label="Captions"
                  title="Captions"
                >
                  <Subtitles size={18} />
                </button>
                {captionsMenuOpen && (
                  <div className="absolute bottom-12 right-0 bg-gray-900/95 border border-white/10 backdrop-blur rounded-lg p-2 min-w-36 text-sm">
                    <div className="px-2 py-1 text-xs text-gray-400 uppercase">
                      Subtitles
                    </div>
                    {[
                      { label: "Off", lang: "" },
                      { label: "English", lang: "en" },
                      { label: "Tiếng Việt", lang: "vi" },
                    ].map((opt) => {
                      const isActive =
                        (!captionsOn && opt.lang === "") ||
                        (opt.lang === "en" && captionsOn);
                      return (
                        <button
                          key={opt.label}
                          onClick={() => setCaptionLang(opt.lang)}
                          className={`block w-full text-left px-3 py-1 rounded hover:bg-white/10 ${
                            isActive ? "text-coursera-blue font-medium" : ""
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setSettingsOpen((s) => !s)}
                  className="p-2 hover:bg-white/10 rounded-full transition"
                  aria-label="Settings"
                >
                  <Settings size={18} />
                </button>
                {settingsOpen && (
                  <div className="absolute bottom-12 right-0 bg-gray-900/95 border border-white/10 backdrop-blur rounded-lg p-2 min-w-44 text-sm">
                    <div className="px-2 py-1 text-xs text-gray-400 uppercase">
                      Speed
                    </div>
                    {[0.5, 1, 1.25, 1.5, 2].map((s) => (
                      <button
                        key={s}
                        onClick={() => setPlaybackSpeed(s)}
                        className="block w-full text-left px-3 py-1 rounded hover:bg-white/10"
                      >
                        {s === 1 ? "Normal" : `${s}x`}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-white/10 rounded-full transition"
                aria-label="Fullscreen"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">Playing: {title}</span>
    </div>
  );
}

function ActionPill({
  icon,
  label,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition ${
        active
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function CourseTabs({
  course,
  tab,
  onChange,
  notes,
  setNotes,
  qnaText,
  setQnaText,
  activeLessonTitle,
}: {
  course: {
    overview: string;
    whatYouWillLearn: string[];
    modules: Module[];
  };
  tab: "overview" | "notes" | "qna" | "resources";
  onChange: (t: typeof tab) => void;
  notes: string;
  setNotes: (v: string) => void;
  qnaText: string;
  setQnaText: (v: string) => void;
  activeLessonTitle?: string;
}) {
  const tabs: { id: typeof tab; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "About", icon: <FileText size={16} /> },
    { id: "notes", label: "My notes", icon: <NotebookPen size={16} /> },
    { id: "qna", label: "Q&A", icon: <MessageSquare size={16} /> },
    { id: "resources", label: "Resources", icon: <Paperclip size={16} /> },
  ];

  return (
    <section className="bg-white">
      <div className="border-b border-gray-200 flex gap-1 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition flex items-center gap-2 ${
              tab === t.id
                ? "border-coursera-blue text-coursera-blue"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      <div className="pt-5">
        {tab === "overview" && (
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                <ListChecks size={18} className="text-coursera-blue" />
                What you'll learn
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                {course.whatYouWillLearn.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500 mt-0.5 shrink-0"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">About this lesson</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {activeLessonTitle
                  ? `In "${activeLessonTitle}", you'll explore the core ideas step-by-step, with worked examples and a guided walkthrough. Pause anytime, take notes, and replay sections that need more attention.`
                  : course.overview}
              </p>
            </div>
          </div>
        )}

        {tab === "notes" && (
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">
              Notes are saved automatically to your account.
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write a note for this lesson..."
              rows={6}
              className="w-full rounded-lg border border-gray-300 focus:border-coursera-blue focus:ring-2 focus:ring-coursera-blue/30 outline-none p-3 text-sm resize-y"
            />
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-full bg-coursera-blue text-white text-sm font-semibold hover:bg-coursera-blue-dark transition">
                Save note
              </button>
              <button
                onClick={() => setNotes("")}
                className="px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {tab === "qna" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-bold mb-2">Ask a question</h3>
              <textarea
                value={qnaText}
                onChange={(e) => setQnaText(e.target.value)}
                placeholder={`What do you need help with in "${activeLessonTitle ?? "this lesson"}"?`}
                rows={3}
                className="w-full rounded-lg border border-gray-300 focus:border-coursera-blue focus:ring-2 focus:ring-coursera-blue/30 outline-none p-3 text-sm resize-y"
              />
              <div className="mt-2 flex items-center gap-2">
                <button className="px-4 py-2 rounded-full bg-coursera-blue text-white text-sm font-semibold hover:bg-coursera-blue-dark transition">
                  Post
                </button>
                <span className="text-xs text-gray-500">
                  Be specific and on-topic.
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Most questions get a response within 24 hours from course staff
              and learners.
            </div>
          </div>
        )}

        {tab === "resources" && (
          <ul className="flex flex-col gap-2">
            <ResourceItem
              icon={<FileText size={16} />}
              title={`${activeLessonTitle ?? "Lesson"} · Slides (PDF)`}
              meta="2.4 MB · PDF"
            />
            <ResourceItem
              icon={<Download size={16} />}
              title="Practice exercises (zip)"
              meta="780 KB · ZIP"
            />
            <ResourceItem
              icon={<LinkIcon size={16} />}
              title="Reading list & further references"
              meta="External links"
            />
          </ul>
        )}
      </div>
    </section>
  );
}

function ResourceItem({
  icon,
  title,
  meta,
}: {
  icon: React.ReactNode;
  title: string;
  meta: string;
}) {
  return (
    <li className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition">
      <span className="h-9 w-9 rounded-full bg-coursera-light flex items-center justify-center text-coursera-blue shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">{title}</p>
        <p className="text-xs text-gray-500">{meta}</p>
      </div>
      <button
        className="text-coursera-blue text-sm font-semibold hover:underline"
        aria-label={`Download ${title}`}
      >
        Download
      </button>
    </li>
  );
}

function NextUpCard({
  lessons,
  activeId,
  completed,
  onSelect,
}: {
  lessons: Lesson[];
  activeId: string;
  completed: Record<string, boolean>;
  onSelect: (id: string) => void;
}) {
  const idx = lessons.findIndex((l) => l.id === activeId);
  const next = lessons[idx + 1];
  const prev = lessons[idx - 1];
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
        Up next
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev && (
          <button
            onClick={() => onSelect(prev.id)}
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-left"
          >
            <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
              <Circle size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500">Previous</p>
              <p className="text-sm font-semibold truncate">{prev.title}</p>
              <p className="text-xs text-gray-500">{prev.duration}</p>
            </div>
          </button>
        )}
        {next ? (
          <button
            onClick={() => !next.isLocked && onSelect(next.id)}
            disabled={!!next.isLocked}
            className="flex items-center gap-3 p-3 rounded-xl border border-coursera-blue/30 bg-coursera-light hover:bg-blue-50 transition text-left disabled:opacity-50 disabled:hover:bg-coursera-light"
          >
            <div className="h-10 w-10 rounded-lg bg-coursera-blue text-white flex items-center justify-center">
              {next.isLocked ? (
                <Lock size={18} />
              ) : (
                <Play size={18} fill="currentColor" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-coursera-blue font-semibold">
                Next up
              </p>
              <p className="text-sm font-semibold truncate">{next.title}</p>
              <p className="text-xs text-gray-600">{next.duration}</p>
              {completed[next.id] && (
                <p className="text-xs text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  Completed
                </p>
              )}
            </div>
          </button>
        ) : (
          <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 text-sm font-semibold">
            You're at the end — great job!
          </div>
        )}
      </div>
    </section>
  );
}

function Syllabus({
  course,
  activeLessonId,
  completed,
  expandedModules,
  onToggleModule,
  onSelectLesson,
}: {
  course: { modules: Module[] };
  activeLessonId: string;
  completed: Record<string, boolean>;
  expandedModules: Record<string, boolean>;
  onToggleModule: (id: string) => void;
  onSelectLesson: (id: string) => void;
}) {
  const [search, setSearch] = useState("");
  const filteredModules = useMemo(() => {
    if (!search.trim()) return course.modules;
    const q = search.toLowerCase();
    return course.modules
      .map((m) => ({
        ...m,
        lessons: m.lessons.filter((l) => l.title.toLowerCase().includes(q)),
      }))
      .filter((m) => m.lessons.length > 0);
  }, [course.modules, search]);

  return (
    <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between gap-2">
        <h2 className="text-base font-bold text-gray-900">Course content</h2>
        <span className="text-xs font-semibold text-gray-500">
          {course.modules.reduce((sum, m) => sum + m.lessons.length, 0)} items
        </span>
      </div>
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search lessons"
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-coursera-blue focus:ring-2 focus:ring-coursera-blue/30 outline-none"
          />
        </div>
      </div>

      <div className="max-h-[60vh] overflow-y-auto">
        {filteredModules.map((m) => {
          const allDone = m.lessons.every((l) => completed[l.id]);
          const open = expandedModules[m.id];
          return (
            <div
              key={m.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => onToggleModule(m.id)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-gray-500 transition-transform ${
                      open ? "" : "-rotate-90"
                    }`}
                  />
                  <span className="text-sm font-semibold text-gray-900 truncate">
                    {m.title}
                  </span>
                </div>
                <span className="text-xs text-gray-500 shrink-0">
                  {m.lessons.length}
                </span>
              </button>
              {open && (
                <ul className="pb-2">
                  {m.lessons.map((l) => {
                    const isActive = l.id === activeLessonId;
                    const isDone = !!completed[l.id];
                    return (
                      <li key={l.id}>
                        <button
                          onClick={() => !l.isLocked && onSelectLesson(l.id)}
                          disabled={!!l.isLocked}
                          className={`w-full flex items-start gap-3 px-4 py-2.5 text-left text-sm transition disabled:opacity-50 ${
                            isActive
                              ? "bg-coursera-light text-coursera-blue"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <span className="shrink-0 mt-0.5">
                            {l.isLocked ? (
                              <Lock size={16} className="text-gray-400" />
                            ) : isDone ? (
                              <CheckCircle2
                                size={16}
                                className="text-emerald-500"
                              />
                            ) : isActive ? (
                              <Play
                                size={16}
                                fill="currentColor"
                                className="text-coursera-blue"
                              />
                            ) : (
                              <Circle size={16} className="text-gray-400" />
                            )}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{l.title}</p>
                            <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                              <span>{l.duration}</span>
                              {l.preview && (
                                <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">
                                  Preview
                                </span>
                              )}
                              {l.resourceCount ? (
                                <span className="inline-flex items-center gap-0.5">
                                  <Paperclip size={10} />
                                  {l.resourceCount}
                                </span>
                              ) : null}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                  <div className="px-4 pt-1 pb-2">
                    <div
                      className={`h-1 rounded-full ${
                        allDone ? "bg-emerald-500" : "bg-gray-200"
                      }`}
                      style={{
                        width: `${
                          (m.lessons.filter((l) => completed[l.id]).length /
                            Math.max(m.lessons.length, 1)) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-200 text-xs text-gray-600 flex items-center gap-2">
        <Wifi size={14} />
        <span>Offline lesson downloads available with Coursera Plus</span>
      </div>
    </section>
  );
}
