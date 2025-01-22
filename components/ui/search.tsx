"use client"

import { useState } from "react"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SearchResult {
  slug: string
  title: string
  excerpt: string
  status: string
  knownCreator?: string
  genre?: string[]
}

export function Search() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value.length > 2) {
      const response = await fetch(`/api/search?q=${encodeURIComponent(value)}`)
      const data = await response.json()
      setResults(data.results)
    } else {
      setResults([])
    }
  }

  return (
    <div className="relative w-full max-w-2xl">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        className="pl-10 bg-[#251D3A] border-purple-800 text-gray-100 placeholder:text-gray-400"
        placeholder="Search Lostwave Wiki..."
        type="search"
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-[#251D3A] border border-purple-800 rounded-lg shadow-lg">
          <ul className="divide-y divide-purple-800">
            {results.map((result) => (
              <li key={result.slug} className="p-4 hover:bg-[#2A2245]">
                <Link href={`/wiki/${result.slug}`} className="block">
                  <h3 className="text-purple-300 font-semibold">{result.title}</h3>
                  {result.knownCreator && <p className="text-gray-400 text-sm">Artist: {result.knownCreator}</p>}
                  <p className="text-gray-400 text-sm">{result.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        result.status === "found"
                          ? "bg-green-600"
                          : result.status === "partially found"
                            ? "bg-yellow-600"
                            : result.status === "nearly found"
                              ? "bg-blue-600"
                              : result.status === "lost"
                                ? "bg-red-600"
                                : result.status === "hoax"
                                  ? "bg-purple-600"
                                  : "bg-gray-600"
                      }`}
                    >
                      {result.status}
                    </span>
                    {result.genre &&
                      result.genre.map((g) => (
                        <span key={g} className="bg-purple-900 px-2 py-1 rounded-full text-xs text-purple-100">
                          {g}
                        </span>
                      ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

