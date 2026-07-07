import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaylistCreateForm from "@/components/playlists/PlaylistCreateForm";
import {
  getPlaylistSteps,
  getRemixSource,
} from "@/lib/playlists";

export default async function RemixPlaylistPage({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}) {
  const { playlistId } = await params;
  const remixSource = getRemixSource(playlistId);
  if (!remixSource) notFound();

  const initialCourses = getPlaylistSteps(playlistId).map((step) => step.course);

  return (
    <div className="min-h-screen bg-coursera-light font-sans text-gray-900">
      <TopBanner />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href={`/learn-lists/${playlistId}`}
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-coursera-blue"
        >
          <ChevronLeft size={16} />
          Back to Learn List
        </Link>
        <PlaylistCreateForm
          mode="remix"
          initialPlaylist={remixSource}
          initialCourses={initialCourses}
        />
      </main>
      <Footer />
    </div>
  );
}
