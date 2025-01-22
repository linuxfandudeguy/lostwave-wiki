import Link from "next/link"
import type { Song } from "@/lib/songs"

export function SongCard({ song }: { song: Song }) {
  return (
    <Link
      href={`/wiki/${song.slug}`}
      className="block p-6 bg-[#251D3A] rounded-lg border border-purple-800 hover:border-purple-600 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-2 text-purple-300">{song.title}</h3>
      {song.knownCreator && <p className="text-gray-400 mb-2">Artist: {song.knownCreator}</p>}
      <p className="text-gray-400 mb-2">{song.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {song.genre &&
          song.genre.map((g) => (
            <span key={g} className="bg-purple-900 px-2 py-1 rounded-full text-xs text-purple-100">
              {g}
            </span>
          ))}
      </div>
      <div className="flex justify-between items-center">
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs ${
            song.status === "found"
              ? "bg-green-600"
              : song.status === "partially found"
                ? "bg-yellow-600"
                : song.status === "nearly found"
                  ? "bg-blue-600"
                  : song.status === "lost"
                    ? "bg-red-600"
                    : song.status === "hoax"
                      ? "bg-purple-600"
                      : "bg-gray-600"
          }`}
        >
          {song.status}
        </span>
        {song.discoveryDate && <span className="text-xs text-gray-400">Searched since: {song.discoveryDate}</span>}
      </div>
    </Link>
  )
}

