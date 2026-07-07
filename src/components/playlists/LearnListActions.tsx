"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import {
  encodeStoredLearnListForShare,
  type StoredLearnList,
} from "@/lib/learn-list-storage";

type ShareLearnListButtonProps = {
  storedLearnList?: StoredLearnList;
};

export default function ShareLearnListButton({
  storedLearnList,
}: ShareLearnListButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.search = "";
    if (storedLearnList) {
      currentUrl.searchParams.set(
        "shared",
        encodeStoredLearnListForShare(storedLearnList),
      );
    }

    await navigator.clipboard.writeText(currentUrl.toString());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
    >
      <Share2 size={16} />
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
