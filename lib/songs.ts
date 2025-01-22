import fs from "fs"
import path from "path"
import matter from "gray-matter"

const songsDirectory = path.join(process.cwd(), "songs")

export interface Song {
  slug: string
  title: string
  excerpt: string
  content: string
  discoveryDate?: string
  originalPlatform?: string
  knownCreator?: string
  status: "found" | "partially found" | "nearly found" | "lost" | "hoax"
  lastUpdated: string
  genre?: string[]
  language?: string
}

export function getAllSongs(): Song[] {
  const fileNames = fs.readdirSync(songsDirectory)
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(songsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      excerpt: content.slice(0, 150) + "...",
      ...data,
    } as Song
  })
}

export function getSongBySlug(slug: string): Song | null {
  try {
    const fullPath = path.join(songsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      excerpt: content.slice(0, 150) + "...",
      ...data,
    } as Song
  } catch {
    return null
  }
}

