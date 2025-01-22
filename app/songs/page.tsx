import { getAllSongs } from "@/lib/songs"
import { SongCard } from "@/components/song-card"

export default function SongsPage() {
  const songs = getAllSongs()

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-300">Lostwave Songs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <SongCard key={song.slug} song={song} />
        ))}
      </div>
    </div>
  )
}

