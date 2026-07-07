"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  CheckCircle2,
  GripVertical,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import {
  durationBucketLabels,
  entryLevelLabels,
  goalTagLabels,
  mockCourses,
  type DurationBucket,
  type EntryLevel,
  type Playlist,
  type PlaylistCourse,
  type PlaylistGoalTag,
} from "@/lib/playlists";
import { saveStoredLearnList } from "@/lib/learn-list-storage";

type PlaylistCreateFormProps = {
  initialPlaylist?: Playlist;
  initialCourses?: PlaylistCourse[];
  mode: "create" | "remix" | "edit";
};

export default function PlaylistCreateForm({
  initialPlaylist,
  initialCourses,
  mode,
}: PlaylistCreateFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialPlaylist?.title ?? "");
  const [description, setDescription] = useState(
    initialPlaylist?.description ?? "",
  );
  const [goal, setGoal] = useState<PlaylistGoalTag>(
    initialPlaylist?.tags[0] ?? "career-switch",
  );
  const [level, setLevel] = useState<EntryLevel>(
    initialPlaylist?.entry_level ?? "beginner",
  );
  const [duration, setDuration] = useState<DurationBucket>(
    initialPlaylist?.duration_bucket ?? "medium",
  );
  const [selectedCourseId, setSelectedCourseId] = useState(mockCourses[0]?.id);
  const [courses, setCourses] = useState<PlaylistCourse[]>(
    initialCourses?.length ? initialCourses : mockCourses.slice(0, 3),
  );
  const [submitted, setSubmitted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const availableCourses = useMemo(
    () =>
      mockCourses.filter(
        (course) => !courses.some((item) => item.id === course.id),
      ),
    [courses],
  );

  const addCourse = () => {
    const course = mockCourses.find((item) => item.id === selectedCourseId);
    if (!course || courses.some((item) => item.id === course.id)) return;
    setCourses((items) => [...items, course]);
    setSelectedCourseId(
      availableCourses.find((item) => item.id !== course.id)?.id ?? "",
    );
  };

  const removeCourse = (courseId: string) => {
    setCourses((items) => items.filter((item) => item.id !== courseId));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setCourses((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const canSubmit = title.trim() && description.trim() && courses.length > 0;

  return (
    <form
      className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]"
      onSubmit={(event) => {
        event.preventDefault();
        if (!canSubmit) return;
        const saved = saveStoredLearnList({
          id: mode === "edit" ? initialPlaylist?.id : undefined,
          title,
          description,
          goal,
          level,
          duration,
          courses,
          isRemixOf: initialPlaylist?.is_remix_of,
        });
        setSubmitted(true);
        router.push(`/learn-lists/${saved.playlist.id}`);
      }}
    >
      <div className="flex flex-col gap-5">
        <section className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-wider text-coursera-blue">
              {mode === "edit"
                ? "Edit Learn List"
                : mode === "remix"
                  ? "Remix Learn List"
                  : "Create Learn List"}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              Build a learning path
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Learn List title
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="From Accounting to Data Analyst"
                className="h-11 rounded-lg border border-gray-300 px-3 text-sm font-normal text-gray-900 focus:border-coursera-blue focus:outline-none focus:ring-2 focus:ring-coursera-blue/20"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
              Short description
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Explain who this path is for and what outcome it helps them reach."
                rows={4}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-normal text-gray-900 focus:border-coursera-blue focus:outline-none focus:ring-2 focus:ring-coursera-blue/20"
              />
            </label>
          </div>
        </section>

        <section className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-lg font-bold text-gray-900">Courses</h2>
          <p className="mt-1 text-sm text-gray-600">
            Drag course cards to reorder them. Click the empty card to add the
            selected course directly.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <select
              value={selectedCourseId}
              onChange={(event) => setSelectedCourseId(event.target.value)}
              className="h-11 flex-1 rounded-lg border border-gray-300 px-3 text-sm text-gray-900 focus:border-coursera-blue focus:outline-none focus:ring-2 focus:ring-coursera-blue/20"
            >
              {availableCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={addCourse}
              disabled={!selectedCourseId || availableCourses.length === 0}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-coursera-blue px-4 py-2.5 text-sm font-semibold text-coursera-blue transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus size={16} />
              Add course
            </button>
          </div>

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={courses.map((course) => course.id)}
              strategy={verticalListSortingStrategy}
            >
              <ol className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {courses.map((course, index) => (
                  <SortableCourseItem
                    key={course.id}
                    course={course}
                    index={index}
                    onRemove={removeCourse}
                  />
                ))}
              </ol>
            </SortableContext>
          </DndContext>
        </section>
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <section className="rounded-lg border border-gray-200 bg-white p-5">
          <h2 className="text-lg font-bold text-gray-900">Settings</h2>
          <div className="mt-4 flex flex-col gap-3">
            <SelectField
              label="Goal tag"
              value={goal}
              onChange={(value) => setGoal(value as PlaylistGoalTag)}
              options={goalTagLabels}
            />
            <SelectField
              label="Entry level"
              value={level}
              onChange={(value) => setLevel(value as EntryLevel)}
              options={entryLevelLabels}
            />
            <SelectField
              label="Study time"
              value={duration}
              onChange={(value) => setDuration(value as DurationBucket)}
              options={durationBucketLabels}
            />
          </div>

          {initialPlaylist?.is_remix_of && (
            <p className="mt-4 rounded bg-blue-50 px-3 py-2 text-xs font-medium text-coursera-blue">
              Remix source: {initialPlaylist.is_remix_of}
            </p>
          )}

          <div className="mt-5 rounded-lg bg-coursera-light p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Preview
            </p>
            <h3 className="mt-2 font-bold text-gray-900">
              {title || "Untitled Learn List"}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {courses.length} courses - {durationBucketLabels[duration]}
            </p>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-coursera-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <CheckCircle2 size={16} />
            {mode === "edit"
              ? "Save changes"
              : mode === "remix"
                ? "Save remix"
                : "Create Learn List"}
          </button>

          {submitted && (
            <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm font-medium text-emerald-800">
              Saved locally. Opening your Learn List...
            </div>
          )}
        </section>
      </aside>
    </form>
  );
}

function SortableCourseItem({
  course,
  index,
  onRemove,
}: {
  course: PlaylistCourse;
  index: number;
  onRemove: (courseId: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: course.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg ${
        isDragging ? "shadow-lg" : ""
      }`}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-coursera-blue shadow-sm">
          {index + 1}
        </div>
        <button
          type="button"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-gray-500 shadow-sm hover:bg-gray-100 hover:text-gray-900"
          aria-label={`Reorder ${course.title}`}
          {...attributes}
          {...listeners}
        >
          <GripVertical size={16} />
        </button>
      </div>

      <div className="flex flex-col p-4">
        <div className="mb-2 flex items-center gap-2 text-xs text-gray-600">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-coursera-blue text-[9px] font-bold text-white">
            {course.partner.charAt(0)}
          </div>
          <span className="truncate">{course.partner}</span>
        </div>
        <p className="line-clamp-2 text-sm font-bold leading-snug text-gray-900">
          {course.title}
        </p>
        <p className="mt-2 text-xs text-gray-500">{course.duration}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-coursera-blue">
            <Search size={13} />
            Course card
          </span>
          <button
            type="button"
            onClick={() => onRemove(course.id)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-600"
            aria-label={`Remove ${course.title}`}
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </li>
  );
}

function SelectField({
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
    <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm font-normal text-gray-900 focus:border-coursera-blue focus:outline-none focus:ring-2 focus:ring-coursera-blue/20"
      >
        {Object.entries(options).map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
