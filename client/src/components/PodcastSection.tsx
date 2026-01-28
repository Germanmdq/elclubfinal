import { Play, ChevronRight } from "lucide-react";

/* ECDLI Podcast Section
   - "The ECDLI Podcast" heading
   - List of podcast episodes
   - Audio player preview
*/

const episodes = [
  {
    id: 1,
    category: "Business, Wealth",
    date: "Feb 06, 2024",
    title: "ECDLI Exclusive: Holy Grail of Investing – Chapter 1",
    isPlaying: true,
  },
  {
    id: 2,
    category: "Relationships, Mindset",
    date: "Jan 14, 2024",
    title: "Watch Your Language!",
    isPlaying: false,
  },
  {
    id: 3,
    category: "Mindset",
    date: "Nov 08, 2023",
    title: "Get Unstuck!",
    isPlaying: false,
  },
  {
    id: 4,
    category: "Relationships, Leadership",
    date: "Jun 30, 2023",
    title: "Tim Ballard and Jordan Harmon Expose the Dark Truths of Human Trafficking",
    isPlaying: false,
  },
  {
    id: 5,
    category: "Business",
    date: "Jun 13, 2023",
    title: "Secret Recipe for Success",
    isPlaying: false,
  },
];

export default function PodcastSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-black text-2xl md:text-3xl font-black">
            The ECDLI Podcast
          </h2>
          <a
            href="#podcast"
            className="flex items-center gap-1 text-black text-sm font-medium hover:underline"
          >
            Explore episodes
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Episodes List */}
        <div className="space-y-4">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className={`flex items-center gap-4 p-4 rounded-sm transition-colors ${
                episode.isPlaying ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              {/* Play Button */}
              <button className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </button>

              {/* Episode Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                  <span>{episode.category}</span>
                  <span>•</span>
                  <span>{episode.date}</span>
                </div>
                <h3 className="text-black text-base font-semibold truncate">
                  {episode.title}
                </h3>
              </div>

              {/* Listen Button */}
              <button className="flex-shrink-0 flex items-center gap-1 text-black text-sm font-medium hover:underline">
                <Play className="w-4 h-4" />
                Listen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
