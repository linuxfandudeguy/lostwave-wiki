import Link from "next/link"
import { getAllSongs } from "../lib/songs"
import { SongCard } from "@/components/song-card"

export default function Home() {
  const songs = getAllSongs()

  return (
    <div>
      <div className="bg-black text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to The Lostwave Wiki</h1>
          <p className="text-xl">
           This is an unofficial wiki dedicated to Lostwave, a category of lost media about music.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-purple-300">Recently Updated</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.slice(0, 6).map((song) => (
            <SongCard key={song.slug} song={song} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/songs"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            View All Songs
          </Link>
        </div>
      </div>
    </div>
  )
}

