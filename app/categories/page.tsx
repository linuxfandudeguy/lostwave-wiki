import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"

interface Song {
  slug: string
  title: string
  genre?: string[]
  status: string
}

interface Category {
  name: string
  songs: Song[]
}

const pageSize = 10 // Set the number of items per page

// Function to read and process songs from the filesystem
function getSongsAndCategories(): Category[] {
  const songsDirectory = path.join(process.cwd(), "songs")
  const fileNames = fs.readdirSync(songsDirectory)
  const songs = fileNames.map((fileName): Song => {
    const fullPath = path.join(songsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)
    return {
      slug: fileName.replace(/\.md$/, ""),
      title: data.title,
      genre: data.genre,
      status: data.status,
    }
  })

  const categories: { [key: string]: Song[] } = {}
  songs.forEach((song) => {
    if (song.genre) {
      song.genre.forEach((genre) => {
        if (!categories[genre]) {
          categories[genre] = []
        }
        categories[genre].push(song)
      })
    }
  })

  return Object.entries(categories).map(([name, songs]) => ({ name, songs }))
}

// The component that will display categories and songs
export default async function CategoriesPage({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = parseInt(searchParams.page || "1", 10) // Get the page from query params
  const categories = getSongsAndCategories() // Get the categories from the filesystem

  // Function to paginate the songs based on the current page
  const getPaginatedSongs = (songs: Song[]) => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return songs.slice(start, end)
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-300">Song Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-[#251D3A] rounded-lg p-6 border border-purple-800">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">{category.name}</h2>
            <ul className="space-y-2">
              {getPaginatedSongs(category.songs).map((song) => (
                <li key={song.slug}>
                  <Link href={`/wiki/${song.slug}`} className="text-gray-300 hover:text-purple-300 transition-colors">
                    {song.title}
                  </Link>
                  <span
                    className={`ml-2 inline-block px-2 py-1 rounded-full text-xs ${
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
                </li>
              ))}
            </ul>

            {/* Only render pagination buttons if there are more than 3 songs in the category */}
            {category.songs.length > 3 && (
              <div className="flex justify-between mt-4">
                <Link
                  href={`/?page=${currentPage - 1}`}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                  disabled={currentPage === 1}
                >
                  Previous
                </Link>
                <Link
                  href={`/?page=${currentPage + 1}`}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                  disabled={category.songs.length <= currentPage * pageSize}
                >
                  Next
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
