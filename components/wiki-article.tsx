import ReactMarkdown from "react-markdown"
import { SongMetadata } from "./song-metadata"

interface WikiArticleProps {
  content: string
  metadata: any
}

export function WikiArticle({ content, metadata }: WikiArticleProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <article className="lg:col-span-3 prose prose-invert max-w-none bg-[#251D3A] rounded-lg p-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
      <aside className="lg:col-span-1">
        <SongMetadata metadata={metadata} />
      </aside>
    </div>
  )
}

