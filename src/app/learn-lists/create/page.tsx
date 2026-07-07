import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaylistCreateForm from "@/components/playlists/PlaylistCreateForm";

export default function CreatePlaylistPage() {
  return (
    <div className="min-h-screen bg-coursera-light font-sans text-gray-900">
      <TopBanner />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href="/learn-lists"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-coursera-blue"
        >
          <ChevronLeft size={16} />
          Back to Learn Lists
        </Link>
        <PlaylistCreateForm mode="create" />
      </main>
      <Footer />
    </div>
  );
}
