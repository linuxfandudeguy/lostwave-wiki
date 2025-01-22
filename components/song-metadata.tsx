interface SongMetadata {
  title: string
  discoveryDate?: string
  originalPlatform?: string
  knownCreator?: string
  status: "found" | "partially found" | "nearly found" | "lost" | "hoax"
  lastUpdated: string
  genre?: string[]
  language?: string
  op?: string
}

export function SongMetadata({ metadata }: { metadata: SongMetadata }) {
  return (
    <div className="bg-[#251D3A] border border-purple-800 rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-purple-300">Song Information</h2>
      <dl className="grid grid-cols-1 gap-3">
        <div>
          <dt className="text-gray-400">Title</dt>
          <dd className="text-gray-100">{metadata.title}</dd>
        </div>
        <div>
          <dt className="text-gray-400">Status</dt>
          <dd className="text-gray-100">
            <span
              className={`inline-block px-2 py-1 rounded-full text-sm ${
                metadata.status === "found"
                  ? "bg-green-600"
                  : metadata.status === "partially found"
                    ? "bg-yellow-600"
                    : metadata.status === "nearly found"
                      ? "bg-blue-600"
                      : metadata.status === "lost"
                        ? "bg-red-600"
                        : metadata.status === "hoax"
                          ? "bg-purple-600"
                          : "bg-gray-600"
              }`}
            >
              {metadata.status}
            </span>
          </dd>
        </div>
        {metadata.knownCreator && (
          <div>
            <dt className="text-gray-400">Known Creator</dt>
            <dd className="text-gray-100">{metadata.knownCreator}</dd>
          </div>
        )}
        {metadata.discoveryDate && (
          <div>
            <dt className="text-gray-400">Discovery Date</dt>
            <dd className="text-gray-100">{metadata.discoveryDate}</dd>
          </div>
        )}
        {metadata.originalPlatform && (
          <div>
            <dt className="text-gray-400">Original Platform</dt>
            <dd className="text-gray-100">{metadata.originalPlatform}</dd>
          </div>
        )}
        {metadata.op && (
          <div>
            <dt className="text-gray-400">Originally Posted By</dt>
            <dd className="text-gray-100">{metadata.op}</dd>
          </div>
        )}
        {metadata.genre && (
          <div>
            <dt className="text-gray-400">Genre</dt>
            <dd className="flex gap-2 flex-wrap">
              {metadata.genre.map((g) => (
                <span key={g} className="bg-purple-900 px-2 py-1 rounded-full text-sm">
                  {g}
                </span>
              ))}
            </dd>
          </div>
        )}
        {metadata.language && (
          <div>
            <dt className="text-gray-400">Language</dt>
            <dd className="text-gray-100">{metadata.language}</dd>
          </div>
        )}
        <div>
          <dt className="text-gray-400">Last Updated</dt>
          <dd className="text-gray-100">{metadata.lastUpdated}</dd>
        </div>
      </dl>
    </div>
  )
}

