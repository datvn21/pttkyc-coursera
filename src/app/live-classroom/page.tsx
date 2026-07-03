"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  Hand,
  PhoneOff,
  Users,
  MessageSquare,
  HelpCircle,
  Send,
  Settings,
  ChevronLeft,
  Maximize2,
  Grid3x3,
  Pin,
  Bell,
  Globe,
  CircleDot,
  Captions,
  ChevronDown,
} from "lucide-react";

type ChatRole = "instructor" | "user" | "self";

type ChatMessage = {
  id: string;
  author: string;
  initials: string;
  role: ChatRole;
  avatarColor: string;
  time: string;
  body: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "system",
    author: "System",
    initials: "i",
    role: "user",
    avatarColor: "#9ca3af",
    time: "",
    body: "Welcome to the live session. Please be respectful in the chat.",
  },
  {
    id: "m1",
    author: "David Smith",
    initials: "DS",
    role: "user",
    avatarColor: "#7C3AED",
    time: "19:02",
    body: "Hello everyone!",
  },
  {
    id: "m2",
    author: "Sarah Lee",
    initials: "SL",
    role: "user",
    avatarColor: "#10B981",
    time: "19:05",
    body: "Professor, could you explain the gradient descent part again?",
  },
  {
    id: "m3",
    author: "Tran Anh",
    initials: "TA",
    role: "instructor",
    avatarColor: "#0056D2",
    time: "19:06",
    body: "Sure Sarah, I'll go over that in the next slide.",
  },
  {
    id: "m4",
    author: "You",
    initials: "Y",
    role: "self",
    avatarColor: "#0056D2",
    time: "19:08",
    body: "Thanks, that would be helpful!",
  },
];

type Participant = {
  id: string;
  name: string;
  initials: string;
  color: string;
  isHost?: boolean;
  isYou?: boolean;
  micOn: boolean;
  camOn: boolean;
  speaking?: boolean;
  handRaised?: boolean;
};

const participants: Participant[] = [
  {
    id: "host",
    name: "Tran Anh",
    initials: "TA",
    color: "#0056D2",
    isHost: true,
    micOn: true,
    camOn: true,
    speaking: true,
  },
  {
    id: "you",
    name: "You (Dat)",
    initials: "DA",
    color: "#0056D2",
    isYou: true,
    micOn: true,
    camOn: true,
  },
  {
    id: "sarah",
    name: "Sarah Lee",
    initials: "SL",
    color: "#10B981",
    micOn: true,
    camOn: false,
  },
  {
    id: "david",
    name: "David Smith",
    initials: "DS",
    color: "#7C3AED",
    micOn: false,
    camOn: true,
    handRaised: true,
  },
  {
    id: "mei",
    name: "Mei Tanaka",
    initials: "MT",
    color: "#F59E0B",
    micOn: true,
    camOn: true,
  },
  {
    id: "carlos",
    name: "Carlos R.",
    initials: "CR",
    color: "#EF4444",
    micOn: false,
    camOn: false,
  },
];

type Reaction = {
  id: string;
  emoji: string;
  x: number;
};

function Avatar({
  initials,
  color,
  size = 32,
}: {
  initials: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      className="rounded-full text-white flex items-center justify-center font-semibold shrink-0"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        fontSize: size * 0.4,
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function LocalVideo({
  stream,
  className,
}: {
  stream: MediaStream | null;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (stream) {
      if (el.srcObject !== stream) {
        el.srcObject = stream;
      }
      el.play().catch(() => {
        /* autoplay may need gesture; tile click handles fallback */
      });
    } else {
      el.srcObject = null;
    }
  }, [stream]);
  return <video ref={ref} autoPlay playsInline muted className={className} />;
}

function Reaction({ emoji, x }: { emoji: string; x: number }) {
  return (
    <div
      className="absolute bottom-12 text-2xl pointer-events-none animate-float-up"
      style={{ left: `${x}%` }}
      aria-hidden
    >
      {emoji}
    </div>
  );
}

function ChatBubble({ message }: { message: ChatMessage }) {
  if (message.author === "System") {
    return (
      <div className="text-center text-xs text-gray-500 font-medium bg-coursera-light py-2 px-3 rounded-md border border-gray-200">
        {message.body}
      </div>
    );
  }

  const isSelf = message.role === "self";
  const isInstructor = message.role === "instructor";

  return (
    <div
      className={`flex flex-col gap-1.5 ${isSelf ? "items-end" : "items-start"}`}
    >
      <div
        className={`flex items-center gap-2 ${isSelf ? "flex-row-reverse" : ""}`}
      >
        {!isSelf && (
          <Avatar
            initials={message.initials}
            color={message.avatarColor}
            size={28}
          />
        )}
        <div
          className={`flex items-baseline gap-2 ${isSelf ? "flex-row-reverse" : ""}`}
        >
          <span
            className={`text-sm font-semibold ${
              isInstructor ? "text-coursera-blue" : "text-gray-900"
            }`}
          >
            {message.author}
          </span>
          {isInstructor && (
            <span className="px-1.5 py-0.5 bg-coursera-blue text-white text-[10px] font-bold uppercase tracking-wider rounded">
              Host
            </span>
          )}
          {message.time && (
            <span className="text-xs text-gray-400 tabular-nums">
              {message.time}
            </span>
          )}
        </div>
      </div>
      <p
        className={`text-sm px-3 py-2 rounded-2xl max-w-[85%] leading-relaxed ${
          isSelf
            ? "bg-coursera-blue text-white rounded-tr-md"
            : isInstructor
              ? "bg-blue-50 text-coursera-blue border border-blue-100 rounded-tl-md font-medium"
              : "bg-coursera-light text-gray-800 rounded-tl-md"
        }`}
      >
        {message.body}
      </p>
    </div>
  );
}

function ControlButton({
  active,
  onClick,
  label,
  children,
  variant = "default",
  className = "",
}: {
  active?: boolean;
  onClick?: () => void;
  label: string;
  children: React.ReactNode;
  variant?: "default" | "destructive";
  className?: string;
}) {
  const base =
    "h-12 rounded-full flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue focus-visible:ring-offset-2";

  const styles = {
    default: active
      ? "bg-coursera-light text-coursera-blue border border-coursera-blue/30"
      : "bg-coursera-light text-gray-700 border border-gray-200 hover:bg-gray-200",
    destructive:
      "bg-red-600 text-white border border-red-700 hover:bg-red-700 shadow-sm",
  }[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`${base} ${styles} ${className} ${children ? "px-5" : "w-12"}`}
    >
      {children}
    </button>
  );
}

export default function LiveClassroomMockup() {
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(false);
  const [camError, setCamError] = useState<string | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const activeStreamRef = useRef<MediaStream | null>(null);
  const [handRaised, setHandRaised] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "qa" | "people">("chat");
  const [draft, setDraft] = useState("");
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [layout, setLayout] = useState<"speaker" | "grid">("speaker");
  const [elapsedSeconds, setElapsedSeconds] = useState(12 * 60 + 47);
  const [editingTime, setEditingTime] = useState(false);
  const [timeInput, setTimeInput] = useState("");

  React.useEffect(() => {
    const t = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const startEditingTime = () => {
    const h = Math.floor(elapsedSeconds / 3600);
    const m = Math.floor((elapsedSeconds % 3600) / 60);
    const s = elapsedSeconds % 60;
    setTimeInput(
      `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`,
    );
    setEditingTime(true);
  };

  const commitTimeEdit = () => {
    const match = timeInput.match(/^(\d{1,2}):(\d{2}):(\d{2})$/);
    if (match) {
      const h = parseInt(match[1], 10);
      const m = parseInt(match[2], 10);
      const s = parseInt(match[3], 10);
      if (m < 60 && s < 60) {
        setElapsedSeconds(h * 3600 + m * 60 + s);
      }
    }
    setEditingTime(false);
  };

  const adjustTime = (delta: number) => {
    setElapsedSeconds((prev) => Math.max(0, prev + delta));
  };

  React.useEffect(() => {
    let cancelled = false;
    if (camOn) {
      if (
        typeof navigator === "undefined" ||
        !navigator.mediaDevices?.getUserMedia
      ) {
        Promise.resolve().then(() =>
          setCamError("Camera not supported in this browser."),
        );
        return;
      }
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          if (cancelled) {
            stream.getTracks().forEach((t) => t.stop());
            return;
          }
          activeStreamRef.current = stream;
          setLocalStream(stream);
          setCamError(null);
        })
        .catch((err) => {
          if (cancelled) return;
          if (err?.name === "NotAllowedError") {
            setCamError("Camera access denied.");
          } else {
            setCamError("Could not start camera.");
          }
          setCamOn(false);
        });
    } else {
      activeStreamRef.current?.getTracks().forEach((t) => t.stop());
      activeStreamRef.current = null;
      Promise.resolve().then(() => {
        setLocalStream(null);
        setCamError(null);
      });
    }
    return () => {
      cancelled = true;
    };
  }, [camOn]);

  React.useEffect(() => {
    return () => {
      activeStreamRef.current?.getTracks().forEach((t) => t.stop());
      activeStreamRef.current = null;
    };
  }, []);

  const raiseCount = participants.filter((p) => p.handRaised).length;

  const sendReaction = (emoji: string) => {
    setReactions((prev) => {
      const id = `${prev.length}`;
      const x = 30 + ((prev.length * 13) % 40);
      return [...prev, { id, emoji, x }];
    });
    setTimeout(() => {
      setReactions((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 2500);
  };

  const handleSend = () => {
    if (!draft.trim()) return;
    setDraft("");
  };

  const host = participants.find((p) => p.isHost)!;

  return (
    <div className="min-h-dvh w-full bg-coursera-light text-gray-900 flex flex-col font-sans">
      {/* Top Header — Coursera-styled session bar */}
      <header className="h-16 px-3 sm:px-5 border-b border-gray-200 flex items-center justify-between gap-3 bg-white z-10 shrink-0">
        {/* Left cluster: back + brand + session info */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <Link
            href="/"
            aria-label="Back to home"
            className="p-2 text-gray-500 hover:text-coursera-blue hover:bg-blue-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
          >
            <ChevronLeft size={20} />
          </Link>

          <div className="hidden sm:flex items-center gap-2 pr-3 sm:border-r border-gray-200">
            <span className="text-coursera-blue text-xl font-bold tracking-tight">
              coursera
            </span>
            <span className="bg-coursera-blue text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">
              PLUS
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <h1 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight truncate">
                Week 3 · Assignment Review &amp; Q&amp;A
              </h1>
            </div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-500 min-w-0">
              <span className="truncate">Live session · Host Tran Anh</span>
              <span className="hidden sm:inline text-gray-300">·</span>
              <span className="hidden sm:inline-flex items-center gap-1 shrink-0">
                <CircleDot
                  size={10}
                  className="text-red-500 fill-red-500 animate-pulse"
                />
                <span className="text-red-600 font-semibold uppercase tracking-wider text-[10px]">
                  Rec
                </span>
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
                    className="w-16 bg-white/60 border border-gray-300 rounded px-1 text-gray-800 text-xs text-center font-medium focus:outline-none focus:ring-2 focus:ring-coursera-blue tabular-nums"
                    autoFocus
                    aria-label="Edit elapsed time"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={startEditingTime}
                    className="tabular-nums font-medium text-gray-700 hover:text-coursera-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue rounded px-0.5"
                    aria-label="Edit elapsed time"
                  >
                    {Math.floor(elapsedSeconds / 3600)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {Math.floor((elapsedSeconds % 3600) / 60)
                      .toString()
                      .padStart(2, "0")}
                    :{(elapsedSeconds % 60).toString().padStart(2, "0")}
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Right cluster: actions + user */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            aria-label="Toggle captions"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 h-9 text-xs font-semibold text-gray-700 bg-coursera-light border border-gray-200 rounded-full hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
          >
            <Captions size={15} />
            <span className="hidden xl:inline">CC</span>
          </button>

          <button
            type="button"
            aria-label="Session settings"
            className="p-2 text-gray-500 hover:text-coursera-blue hover:bg-blue-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
          >
            <Settings size={19} />
          </button>

          <span
            className="hidden md:block w-px h-6 bg-gray-200 mx-1"
            aria-hidden
          />

          <button
            type="button"
            aria-label="Language"
            className="hidden md:inline-flex p-2 text-gray-500 hover:text-coursera-blue hover:bg-blue-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
          >
            <Globe size={19} />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="relative hidden md:inline-flex p-2 text-gray-500 hover:text-coursera-blue hover:bg-blue-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
          >
            <Bell size={19} />
            <span className="absolute top-1 right-1 bg-[#c62828] text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full border border-white">
              3
            </span>
          </button>

          {/* User avatar matching Navbar */}
          <div className="relative group cursor-pointer ml-1">
            <div className="w-9 h-9 rounded-full border-2 border-coursera-blue flex items-center justify-center bg-[#001D6C] text-white font-bold text-base hover:ring-2 hover:ring-blue-200 transition">
              D
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-coursera-blue text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm border border-white shadow-sm">
              PLUS
            </div>
          </div>

          <button
            type="button"
            aria-label="Account menu"
            className="hidden md:inline-flex p-2 text-gray-500 hover:text-coursera-blue hover:bg-blue-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
        {/* Left Side: Video & Controls */}
        <div className="flex-1 flex flex-col p-4 gap-3 min-h-0">
          {/* Main stage */}
          <div className="flex-1 flex flex-col gap-3 min-h-0">
            {/* Main speaker tile */}
            <div className="flex-1 bg-linear-to-br from-gray-900 via-gray-800 to-gray-950 rounded-2xl overflow-hidden relative shadow-lg border border-gray-200 min-h-0">
              {/* Top-left live stats overlay */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-400">Live</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                  <Users size={11} />
                  <span className="tabular-nums">6 watching</span>
                </span>
                {raiseCount > 0 && (
                  <span className="inline-flex items-center gap-1.5 bg-amber-500/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-semibold text-white">
                    <Hand size={11} />
                    {raiseCount} raised
                  </span>
                )}
              </div>

              {/* Top-right controls */}
              <div className="absolute top-3 right-3 flex items-center gap-1 z-10">
                <div className="hidden sm:flex items-center gap-0.5 bg-black/60 backdrop-blur rounded-full p-0.5">
                  <button
                    type="button"
                    onClick={() => setLayout("speaker")}
                    aria-pressed={layout === "speaker"}
                    aria-label="Speaker view"
                    className={`p-1.5 rounded-full transition-colors ${
                      layout === "speaker"
                        ? "bg-white text-gray-900"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Pin size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLayout("grid")}
                    aria-pressed={layout === "grid"}
                    aria-label="Grid view"
                    className={`p-1.5 rounded-full transition-colors ${
                      layout === "grid"
                        ? "bg-white text-gray-900"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Grid3x3 size={13} />
                  </button>
                </div>
                <button
                  type="button"
                  aria-label="Fullscreen"
                  className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur rounded-full text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* PiP self-view — top-right corner of main stage */}
              <div className="absolute bottom-5 right-5 z-20 w-42 sm:w-64 aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-900">
                {localStream ? (
                  <LocalVideo
                    stream={localStream}
                    className="absolute inset-0 w-full h-full object-cover transform-[scaleX(-1)]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Avatar initials="DA" color="#0056D2" size={40} />
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 flex items-center justify-between gap-1 px-1.5 py-1 bg-linear-to-t from-black/80 to-transparent text-white text-[10px] font-medium">
                  <span className="truncate">You</span>
                  <span className="shrink-0 inline-flex items-center justify-center rounded-full p-2 bg-black/50">
                    {localStream ? (
                      <Video size={16} className="text-gray-400" />
                    ) : (
                      <VideoOff size={16} className="text-red-400" />
                    )}
                  </span>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUydDRybXRtZjFvMTZ1Y29nMDc0MTRrb3pnZGRrdGpjczAxcjZkOTJqZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KHQYFRaRbyWx8r2W2G/giphy.gif"
                alt="Live lecture broadcast"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />

              {camError && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/80 text-white text-xs px-3 py-2 rounded-lg">
                  {camError}
                </div>
              )}

              {/* Floating reactions */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {reactions.map((r) => (
                  <Reaction key={r.id} emoji={r.emoji} x={r.x} />
                ))}
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-white">
                  <Avatar
                    initials={host.initials}
                    color={host.color}
                    size={24}
                  />
                  <div className="text-sm leading-tight">
                    <p className="font-medium">
                      {host.name}
                      <span className="ml-1.5 px-1 py-0.5 bg-coursera-blue text-white text-[9px] font-bold uppercase tracking-wider rounded align-middle">
                        Host
                      </span>
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 bg-black/70 backdrop-blur px-2.5 py-1.5 rounded-lg border border-white/10 text-white text-xs">
                  <Pin size={12} />
                  Pinned
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="h-20 bg-white rounded-2xl border border-gray-200 flex items-center justify-between gap-2 px-3 sm:px-5 shrink-0 shadow-sm">
            <div className="flex items-center gap-2">
              <ControlButton
                active={micOn}
                onClick={() => setMicOn((p) => !p)}
                label={micOn ? "Mute microphone" : "Unmute microphone"}
              >
                {micOn ? <Mic size={20} /> : <MicOff size={20} />}
              </ControlButton>

              <ControlButton
                active={camOn}
                onClick={() => setCamOn((p) => !p)}
                label={camOn ? "Turn off camera" : "Turn on camera"}
              >
                {camOn ? <Video size={20} /> : <VideoOff size={20} />}
              </ControlButton>

              <div
                className="w-px h-8 bg-gray-200 mx-1 hidden sm:block"
                aria-hidden
              />

              <ControlButton label="Share screen" className="hidden sm:flex">
                <MonitorUp size={20} />
              </ControlButton>

              <ControlButton
                active={handRaised}
                onClick={() => setHandRaised((p) => !p)}
                label={handRaised ? "Lower hand" : "Raise hand"}
              >
                <Hand size={20} />
                <span className="hidden md:inline">Raise hand</span>
              </ControlButton>
            </div>

            {/* Reactions + leave */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 bg-coursera-light rounded-full px-1.5 py-1 border border-gray-200">
                {[
                  { emoji: "👍", label: "Thumbs up" },
                  { emoji: "❤️", label: "Heart" },
                  { emoji: "👏", label: "Clap" },
                  { emoji: "🎉", label: "Celebrate" },
                ].map((r) => (
                  <button
                    key={r.emoji}
                    type="button"
                    aria-label={r.label}
                    onClick={() => sendReaction(r.emoji)}
                    className="w-9 h-9 rounded-full hover:bg-white text-lg flex items-center justify-center transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue"
                  >
                    {r.emoji}
                  </button>
                ))}
              </div>

              <ControlButton variant="destructive" label="Leave session">
                <PhoneOff size={20} />
                <span>Leave</span>
              </ControlButton>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Chat & Q&A */}
        <aside className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col shrink-0 min-h-0">
          {/* Tabs */}
          <div
            className="flex shrink-0 bg-white border-b border-gray-200"
            role="tablist"
            aria-label="Session sidebar"
          >
            {[
              { id: "chat" as const, icon: MessageSquare, label: "Chat" },
              { id: "qa" as const, icon: HelpCircle, label: "Q&A" },
              {
                id: "people" as const,
                icon: Users,
                label: `People`,
              },
            ].map(({ id, icon: Icon, label }) => {
              const selected = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(id)}
                  className={`flex-1 py-4 flex items-center justify-center gap-2 font-semibold transition-colors text-sm relative ${
                    selected
                      ? "text-coursera-blue"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-px h-0.5 rounded-full transition-colors ${
                      selected ? "bg-coursera-blue" : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === "chat" && (
            <>
              <div
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0"
                aria-live="polite"
              >
                {initialMessages.map((m) => (
                  <ChatBubble key={m.id} message={m} />
                ))}
              </div>

              {/* Chat Input Area */}
              <div className="p-4 border-t border-gray-200 bg-white shrink-0">
                <form
                  className="relative flex items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                >
                  <label htmlFor="chat-input" className="sr-only">
                    Type your message
                  </label>
                  <input
                    id="chat-input"
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Type your message…"
                    className="w-full bg-coursera-light border border-gray-300 rounded-full py-3 pl-4 pr-12 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-coursera-blue focus:ring-2 focus:ring-coursera-blue/20 transition"
                  />
                  <button
                    type="submit"
                    aria-label="Send message"
                    disabled={!draft.trim()}
                    className="absolute right-2 p-2 bg-coursera-blue hover:bg-blue-800 rounded-full text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coursera-blue focus-visible:ring-offset-2"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </>
          )}

          {activeTab === "qa" && <QAPanel />}

          {activeTab === "people" && <PeoplePanel />}
        </aside>
      </main>
    </div>
  );
}

function PeoplePanel() {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 min-h-0">
      <div className="relative mb-2">
        <input
          type="search"
          placeholder="Search participants…"
          aria-label="Search participants"
          className="w-full bg-coursera-light border border-gray-200 rounded-lg py-2 pl-3 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-coursera-blue focus:ring-2 focus:ring-coursera-blue/20"
        />
      </div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-1">
        In session · {participants.length}
      </p>
      {participants.map((p) => (
        <div
          key={p.id}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-coursera-light transition-colors"
        >
          <div className="relative">
            <Avatar initials={p.initials} color={p.color} size={36} />
            {!p.camOn && (
              <span className="absolute -bottom-0.5 -right-0.5 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                <VideoOff size={8} />
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate flex items-center gap-1.5">
              {p.name}
              {p.isYou && (
                <span className="text-xs font-normal text-gray-500">(You)</span>
              )}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {p.isHost ? "Senior Instructor" : "Learner"}
            </p>
          </div>
          {p.isHost && (
            <span className="px-1.5 py-0.5 bg-coursera-blue text-white text-[10px] font-bold uppercase tracking-wider rounded">
              Host
            </span>
          )}
          {!p.micOn && (
            <MicOff
              size={14}
              className="text-red-600 shrink-0"
              aria-label="Mic off"
            />
          )}
          {p.handRaised && (
            <span className="text-amber-500" aria-label="Hand raised">
              <Hand size={14} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function QAPanel() {
  const questions = [
    {
      id: "q1",
      votes: 12,
      author: "Sarah Lee",
      initials: "SL",
      color: "#10B981",
      body: "Could you walk through the bias-variance tradeoff again?",
      answered: true,
    },
    {
      id: "q2",
      votes: 8,
      author: "David Smith",
      initials: "DS",
      color: "#7C3AED",
      body: "What's the recommended learning rate for gradient descent?",
      answered: false,
    },
    {
      id: "q3",
      votes: 5,
      author: "Mei Tanaka",
      initials: "MT",
      color: "#F59E0B",
      body: "When should we prefer L1 over L2 regularization?",
      answered: false,
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
      {questions.map((q) => (
        <div
          key={q.id}
          className="flex gap-3 p-3 rounded-lg border border-gray-200 hover:border-coursera-blue/40 hover:shadow-sm transition-all"
        >
          <div className="flex flex-col items-center justify-center w-10 shrink-0 rounded-md bg-coursera-light border border-gray-200 py-1">
            <span className="text-sm font-bold text-gray-900 tabular-nums">
              {q.votes}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500">
              votes
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Avatar initials={q.initials} color={q.color} size={20} />
              <span className="text-xs font-semibold text-gray-700">
                {q.author}
              </span>
              {q.answered && (
                <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded border border-emerald-200">
                  Answered
                </span>
              )}
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">{q.body}</p>
          </div>
        </div>
      ))}

      <div className="mt-2 p-3 rounded-lg bg-blue-50 border border-blue-100 text-xs text-gray-700">
        <span className="font-semibold text-coursera-blue">Tip:</span> vote
        questions to help the host prioritize them.
      </div>
    </div>
  );
}
