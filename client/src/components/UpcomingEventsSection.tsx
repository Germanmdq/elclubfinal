import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* ECDLI Upcoming Events Section
   - "Become unshakeable" heading
   - "Upcoming events" with carousel
   - Event cards with date, location, and description
*/

const upcomingEvents = [
  {
    id: 1,
    tag: "IN-PERSON & VIRTUAL",
    title: "Create life according to your terms",
    description:
      "Dive deep into the patterns that are holding you back, ignite your motivation, and build momentum toward the life of your dreams.",
    date: "Dec 4 - 9, 2026",
    place: "Virtual",
    image: "/images/couple-sunset.jpg",
    eventName: "DATE WITH DESTINY",
  },
  {
    id: 2,
    tag: "VIRTUAL",
    title: "Become a great leader",
    description:
      "Learn the tools, strategies and secrets ECDLI uses to create immediate impact and inspire positive, lasting change in others.",
    date: "Jul 25 - 28, 2026",
    place: "Virtual",
    image: "/images/hero-speaker.jpg",
    eventName: "LEADERSHIP ACADEMY",
  },
  {
    id: 3,
    tag: "IN-PERSON & VIRTUAL",
    title: "Grow your business exponentially",
    description:
      "Get the concrete strategies and tools that have transformed thousands of businesses at every stage.",
    date: "Aug 12 - 16, 2026",
    place: "Palm Beach, Florida",
    image: "/images/business-meeting.jpg",
    eventName: "BUSINESS MASTERY",
  },
  {
    id: 4,
    tag: "VIRTUAL",
    title: "Build your money machine",
    description:
      "Shift your money mindset and learn wealth creation and growth strategies from Tony's own team of trusted financial partners.",
    date: "May 1 - 3, 2026",
    place: "Virtual",
    image: "/images/coaching-mountain.jpg",
    eventName: "WEALTH MASTERY",
  },
];

export default function UpcomingEventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(upcomingEvents.length - 1, prev + 1));
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Become unshakeable
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            With events, one-on-one coaching, and programs designed to power
            your growth, Tony's foundational strategies are informed by over
            four and a half decades of extraordinary results.
          </p>
        </div>

        {/* Upcoming Events Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-black text-2xl font-bold">Upcoming events</h3>
          <div className="flex items-center gap-4">
            <a
              href="#events"
              className="text-black text-sm font-medium hover:underline hidden md:block"
            >
              Explore all events →
            </a>
          </div>
        </div>

        {/* Events Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 400}px)`,
            }}
          >
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-[350px] md:w-[400px] group"
              >
                <div className="relative h-[500px] rounded-sm overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${event.image}')` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-white/80 text-xs tracking-wider uppercase">
                        {event.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-white text-2xl md:text-3xl font-black mb-3">
                      {event.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/80 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Date & Place */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-xs">Date</span>
                        <span className="text-white text-sm font-medium">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/60 text-xs">Place</span>
                        <span className="text-white text-sm font-medium">
                          {event.place}
                        </span>
                      </div>
                    </div>

                    {/* Event Name Card */}
                    <div className="bg-black/60 backdrop-blur-sm p-3 rounded-sm">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                        ECDLI
                      </p>
                      <p className="text-white text-lg font-black">
                        {event.eventName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learn More Link */}
                <a
                  href="#event"
                  className="inline-flex items-center gap-1 text-black text-sm font-medium mt-4 hover:underline"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
