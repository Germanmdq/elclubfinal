import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

/* ECDLI Events Carousel - Con animaciones de scroll
   - Título con tracking-tighter
   - Cards con aspect-portrait (3:4)
   - rounded-2xl
   - Gradiente from-black/80
   - Botones de navegación circulares verdes
   - Animaciones fade-up al scroll
*/

const events = [
  {
    id: 1,
    image: "/images/business-meeting.jpg",
    title: "BUSINESS MASTERY",
    subtitle: "Grow your business exponentially",
    tag: "ECDLI",
  },
  {
    id: 2,
    image: "/images/hero-speaker.jpg",
    title: "LEADERSHIP ACADEMY",
    subtitle: "Become a great leader",
    tag: "ECDLI",
  },
  {
    id: 3,
    image: "/images/coaching-mountain.jpg",
    title: "DATE WITH DESTINY",
    subtitle: "Create life according to your terms",
    tag: "ECDLI",
  },
  {
    id: 4,
    image: "/images/event-crowd.jpg",
    title: "UNLEASH THE POWER WITHIN",
    subtitle: "Experience explosive growth",
    tag: "ECDLI",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => Math.min(events.length - 1, prev + 1));
  };

  return (
    <section className="bg-black py-10 md:py-20 relative overflow-hidden theme--dark">
      <div className="wrapper space-y-5 lg:space-y-10 overflow-visible">
        {/* Header */}
        <AnimatedSection animation="fade-up" delay={0}>
          <div className="flex items-center justify-between">
            <div className="relative flex max-w-md flex-col gap-2.5 md:flex-row md:items-center md:gap-5">
              <h2 className="text-nowrap text-3xl font-medium tracking-tighter text-white">
                Events that liberate
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Discover Link */}
              <a
                href="#events"
                className="group flex gap-2 items-center font-medium opacity-60 hover:opacity-100 duration-500 text-white text-sm hidden md:flex"
              >
                Discover events
                <svg
                  className="h-5 w-5 fill-current duration-500 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </a>

              {/* Navigation Buttons */}
              <div className="hidden md:flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="flex aspect-square w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-black duration-500 hover:bg-gray-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  onClick={scrollRight}
                  className="flex aspect-square w-10 items-center justify-center rounded-full bg-white border border-gray-200 text-black duration-500 hover:bg-gray-100"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="overflow-hidden -mx-5 px-5">
            <div
              className="flex gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 316}px)`,
              }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 w-[300px] cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Card - aspect-portrait rounded-2xl */}
                  <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-2xl bg-white/10 text-white group">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 h-full w-full bg-black bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${event.image}')` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Content */}
                    <div className="relative flex w-full flex-col items-center px-10 py-6 text-center">
                      {/* Event Logo */}
                      <div className="flex w-full max-w-[160px] items-end overflow-hidden py-5">
                        <div className="w-full">
                          <p className="text-white/70 text-xs font-mono uppercase tracking-wide mb-2">
                            {event.tag}
                          </p>
                          <h3 className="text-white text-lg font-medium tracking-tight leading-tight">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mb-5 opacity-70 text-sm">{event.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mobile Link */}
        <a
          href="#events"
          className="flex md:hidden items-center justify-center gap-2 text-white text-sm font-medium opacity-60 hover:opacity-100 duration-500"
        >
          Discover events
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
