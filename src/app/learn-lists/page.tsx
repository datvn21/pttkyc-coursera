import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedPlaylist from "@/components/playlists/FeaturedPlaylist";
import PlaylistFilters from "@/components/playlists/PlaylistFilters";
import {
  getFeaturedPlaylist,
  getPlaylistStats,
} from "@/lib/playlists";

export default function PlaylistsPage() {
  const featured = getFeaturedPlaylist();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBanner />
      <Navbar />
      <main className="bg-white">
        <section className="border-b border-gray-200 bg-coursera-light">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coursera-blue">
                  <BookOpen size={16} />
                  Community-curated Learn Lists
                </div>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                  Follow proven learning paths from other learners
                </h1>
                <p className="mt-3 text-base leading-relaxed text-gray-600">
                  Browse Learn Lists built around real goals, grouped so you
                  can focus on the right courses instead of
                  searching through thousands.
                </p>
              </div>
              <Link
                href="/learn-lists/create"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-coursera-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <Plus size={17} />
                Create Learn List
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-10">
          {featured && (
            <FeaturedPlaylist
              playlist={featured}
              stats={getPlaylistStats(featured.id)}
            />
          )}
          <PlaylistFilters />
        </div>
      </main>
      <Footer />
    </div>
  );
}
