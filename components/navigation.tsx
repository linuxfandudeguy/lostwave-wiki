import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-[#1A1528] border-b border-purple-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-purple-300">
            Lostwave Wiki
          </Link>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
              <Link href="/songs">Songs</Link>
            </Button>
            <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
              <Link href="/categories">Categories</Link>
            </Button>
            <Button variant="ghost" className="text-purple-300 hover:text-purple-100">
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

