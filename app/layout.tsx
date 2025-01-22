import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Search } from "@/components/ui/search"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lostwave Wiki",
  description: "The wiki for mysterious and incomplete songs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#0F0A1F] text-gray-100`}>
        <Navigation />
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center mb-8">
            <Search />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}

