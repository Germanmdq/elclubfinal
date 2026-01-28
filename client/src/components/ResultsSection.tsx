import { Play } from "lucide-react";

/* ECDLI Results Section
   - "Robbins equals results" heading
   - Statistics (300%, 139%)
   - Video testimonials grid
*/

const videoTestimonials = [
  {
    id: 1,
    quote: "My favorite thing of this event has been connecting with people...",
    name: "Amir",
    title: "Fitness Trainer",
    image: "/images/hero-speaker.jpg",
  },
  {
    id: 2,
    quote: "Having one dream is no longer in my life. I now have millions of dreams.",
    name: "Jordan",
    title: "Cancer Survivor",
    image: "/images/coaching-mountain.jpg",
  },
  {
    id: 3,
    quote: "This is an opportunity to remove yourself from the weeds of your business...",
    name: "Sarah",
    title: "Business Owner",
    image: "/images/business-meeting.jpg",
  },
  {
    id: 4,
    quote: "The coach in between events is instrumental for me...",
    name: "Michael",
    title: "Entrepreneur",
    image: "/images/couple-sunset.jpg",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Robbins equals results
            </h2>
            <p className="text-gray-600 text-lg">
              Join over 100 million people around the world who are achieving
              the extraordinary with Tony's tools. Their stories paint the
              picture of what's possible for you, too.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-sm mb-6">
              A study from Stanford University's Snyder Lab of Genetics revealed
              lasting benefits for event attendees including:
            </p>

            {/* Statistics */}
            <div className="flex gap-12">
              <div>
                <span className="text-black text-5xl md:text-6xl font-black">
                  300%
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  increase in cognitive
                  <br />
                  performance
                </p>
              </div>
              <div>
                <span className="text-black text-5xl md:text-6xl font-black">
                  139%
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  increase in performance
                  <br />
                  biochemistry
                </p>
              </div>
            </div>

            <a
              href="#results"
              className="inline-flex items-center justify-center bg-black text-white text-sm font-semibold px-6 py-3 rounded-sm mt-8 hover:bg-gray-800 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-sm overflow-hidden cursor-pointer"
            >
              <div
                className="h-[300px] md:h-[400px] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${testimonial.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </button>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm italic mb-2 line-clamp-2">
                  "{testimonial.quote}"
                </p>
                <p className="text-white/80 text-xs">
                  {testimonial.name}, {testimonial.title}
                </p>
              </div>

              {/* Watch Label */}
              <div className="absolute top-4 left-4">
                <span className="flex items-center gap-1 text-white text-xs font-medium">
                  <Play className="w-3 h-3 fill-current" />
                  Watch
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
