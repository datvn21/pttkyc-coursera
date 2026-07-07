"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PlaylistCreateForm from "@/components/playlists/PlaylistCreateForm";
import {
  getStoredLearnListById,
  getStoredLearnListSteps,
  type StoredLearnList,
} from "@/lib/learn-list-storage";

type StoredLearnListEditorProps = {
  playlistId: string;
};

export default function StoredLearnListEditor({
  playlistId,
}: StoredLearnListEditorProps) {
  const [item, setItem] = useState<StoredLearnList | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setItem(getStoredLearnListById(playlistId) ?? null);
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, [playlistId]);

  if (!loaded) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
        Loading Learn List...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
        <p className="font-bold text-gray-900">Learn List not found</p>
        <Link
          href="/learn-lists"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-coursera-blue hover:underline"
        >
          <ChevronLeft size={16} />
          Back to Learn Lists
        </Link>
      </div>
    );
  }

  return (
    <PlaylistCreateForm
      mode="edit"
      initialPlaylist={item.playlist}
      initialCourses={getStoredLearnListSteps(item).map((step) => step.course)}
    />
  );
}
