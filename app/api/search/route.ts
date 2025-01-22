import { NextResponse } from "next/server"
import { getAllSongs } from "@/lib/songs"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  const songs = getAllSongs()
  const results = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.content.toLowerCase().includes(query.toLowerCase()),
  )

  return NextResponse.json({ results })
}

