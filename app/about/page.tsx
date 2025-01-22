export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-300">About Lostwave Wiki</h1>
      <div className="bg-[#251D3A] rounded-lg p-6 border border-purple-800">
        <p className="text-gray-300 mb-4">
          Lostwave Wiki is a community-driven project dedicated to documenting and preserving information about
          mysterious, lost, or partially recovered songs. Our focus is on tracks that have captured the imagination of
          music enthusiasts but remain elusive or incomplete.
        </p>
        <p className="text-gray-300 mb-4">The term "Lostwave" encompasses a variety of scenarios:</p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Songs with unknown creators</li>
          <li>Tracks that are not complete or only exist in fragments</li>
          <li>Music that was once available but has since disappeared from public access</li>
          <li>Compositions that have gained mythical status in online communities</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Our wiki uses a classification system to categorize the status of each song:
        </p>
        <ul className="mb-4">
          <li className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 rounded-full bg-green-600 mr-2"></span>
            <span className="text-gray-300">Found: The song has been fully recovered and identified</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 rounded-full bg-yellow-600 mr-2"></span>
            <span className="text-gray-300">
              Partially Found: Parts of the song have been recovered, but not the entire track
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 rounded-full bg-blue-600 mr-2"></span>
            <span className="text-gray-300">
              Nearly Found: The song is close to being fully recovered, with strong leads
            </span>
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-4 h-4 rounded-full bg-red-600 mr-2"></span>
            <span className="text-gray-300">
              Lost: The song remains unrecovered and little information is available
            </span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-4 h-4 rounded-full bg-purple-600 mr-2"></span>
            <span className="text-gray-300">Hoax: The song was fabricated or intentionally misrepresented</span>
          </li>
        </ul>
        <p className="text-gray-300">
          We encourage community participation in the ongoing search for these lost pieces of music. If you have
          information about any of the songs listed here or would like to contribute to the wiki, please join our
          community forums or contact our administrators.
        </p>
      </div>
    </div>
  )
}

