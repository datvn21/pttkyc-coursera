import React from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, Users, ChevronRight, Bell } from "lucide-react";

type LiveEventStatus = "live" | "upcoming" | "tomorrow";

type LiveEvent = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  host: string;
  hostRole: string;
  hostInitials: string;
  status: LiveEventStatus;
  dateLabel: string;
  timeLabel?: string;
  attendees?: number;
  href: string;
  imageUrl: string;
  courseId?: string;
  courseName?: string;
};

const events: LiveEvent[] = [
  {
    id: "ml-week-3-qa",
    category: "Data Science",
    categoryColor: "#0056D2",
    title: "Machine Learning Week 3: Assignment Review & Q&A",
    host: "Tran Anh",
    hostRole: "Senior Instructor",
    hostInitials: "TA",
    status: "live",
    dateLabel: "Streaming now",
    attendees: 1204,
    href: "/live-classroom",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    courseId: "machine-learning",
    courseName: "Machine Learning Specialization",
  },
  {
    id: "ux-workshop",
    category: "UX/UI Design",
    categoryColor: "#FF6B00",
    title: "Workshop: Analyzing UI of Top 10 App Store Applications",
    host: "Le Quynh",
    hostRole: "Product Designer",
    hostInitials: "LQ",
    status: "upcoming",
    dateLabel: "Tonight, June 27",
    timeLabel: "8:00 PM – 9:30 PM",
    href: "/live-classroom",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    courseId: "google-ux-design",
    courseName: "Google UX Design",
  },
  {
    id: "risk-mitigation",
    category: "Project Management",
    categoryColor: "#1F70C1",
    title: "Case Study: Risk Mitigation when Projects Exceed Budget",
    host: "Hoang Long",
    hostRole: "PMP Certified Coach",
    hostInitials: "HL",
    status: "tomorrow",
    dateLabel: "Sunday, June 28",
    timeLabel: "9:00 AM – 11:00 AM",
    href: "/live-classroom",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    courseId: "project-management",
    courseName: "Google Project Management",
  },
];

const statusMeta: Record<
  LiveEventStatus,
  { label: string; dot?: boolean; tone: "live" | "neutral" }
> = {
  live: { label: "Live now", dot: true, tone: "live" },
  upcoming: { label: "Upcoming", tone: "neutral" },
  tomorrow: { label: "Tomorrow", tone: "neutral" },
};

function StatusBadge({ status }: { status: LiveEventStatus }) {
  const meta = statusMeta[status];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/95 backdrop-blur text-gray-900 text-[11px] font-bold uppercase tracking-wider rounded shadow-sm">
      {meta.dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
      )}
      {meta.label}
    </span>
  );
}

function HostAvatar({
  initials,
  color,
}: {
  initials: string;
  color: string;
}) {
  return (
    <div
      className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-xs shrink-0"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function EventCard({ event }: { event: LiveEvent }) {
  const router = useRouter();
  const isLive = event.status === "live";

  const cardContent = (
    <>
      <div className="relative aspect-16/10 bg-gray-100 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={event.status} />
        </div>
        {isLive && event.attendees != null && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-xs text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm font-medium">
            <Users size={14} />
            {event.attendees.toLocaleString()} watching
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div
          className="text-xs font-bold uppercase tracking-wider mb-2"
          style={{ color: event.categoryColor }}
        >
          {event.category}
        </div>

        <h3 className="font-bold text-base text-gray-900 leading-snug mb-4 line-clamp-2">
          {event.title}
        </h3>

        <div className="flex items-center gap-3 mb-4">
          <HostAvatar initials={event.hostInitials} color={event.categoryColor} />
          <div className="text-sm min-w-0">
            <p className="text-gray-900 font-semibold leading-tight truncate">
              {event.host}
            </p>
            <p className="text-gray-500 text-xs truncate">{event.hostRole}</p>
          </div>
        </div>

        <div className="mt-auto bg-coursera-light rounded-md p-3 flex flex-col gap-1.5 mb-4 text-sm text-gray-700">
          <div className="flex items-center gap-2 font-semibold">
            <Calendar size={15} className="text-gray-500 shrink-0" />
            <span>{event.dateLabel}</span>
          </div>
          {event.timeLabel && (
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={15} className="text-gray-500 shrink-0" />
              <span>{event.timeLabel}</span>
            </div>
          )}
        </div>

        {isLive ? (
          <a
            href={event.href}
            className="w-full bg-coursera-blue text-white hover:bg-blue-800 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center"
          >
            Join classroom
          </a>
        ) : (
          <button
            type="button"
            className="w-full bg-white text-coursera-blue border border-coursera-blue hover:bg-blue-50 py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Bell size={16} />
            {event.status === "tomorrow" ? "Register to join" : "Remind me"}
          </button>
        )}

        {event.courseName && (
          <button
            type="button"
            onClick={() => router.push(`/learn/${event.courseId}`)}
            className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 hover:text-coursera-blue transition-colors flex items-center gap-1 w-full"
          >
            <span className="truncate">From: {event.courseName}</span>
            <ChevronRight size={12} />
          </button>
        )}
      </div>
    </>
  );

  return (
    <article className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
      {event.courseId ? (
        <div onClick={() => router.push(`/learn/${event.courseId}`)} className="flex flex-col h-full">
          {cardContent}
        </div>
      ) : (
        cardContent
      )}
    </article>
  );
}

export default function LivestreamEvents() {
  return (
    <section
      className="bg-white py-12 border-t border-gray-200"
      aria-label="Live Events"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2 text-red-600 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Live events
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Interactive live sessions
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl text-sm">
              Join live instructor-led sessions, Q&amp;As, and workshops. Learn
              directly from experts in real time.
            </p>
          </div>
          <button
            type="button"
            className="text-coursera-blue text-sm font-semibold hover:underline flex items-center shrink-0 gap-1 self-start sm:self-auto"
          >
            View full schedule
            <ChevronRight size={16} />
          </button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <li key={event.id}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}