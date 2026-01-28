import { Play } from "lucide-react";

/* ECDLI Coaching Section - Estilo exacto del original
   - Fondo oscuro/negro
   - Badge naranja #ff9700
   - Estadísticas grandes
   - Video a la derecha
*/

export default function CoachingSection() {
  return (
    <section className="theme--dark py-16 md:py-24">
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo Badge + Title */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              {/* Orange Badge */}
              <div className="inline-flex flex-col px-5 py-3 rounded-lg" style={{ backgroundColor: '#ff9700' }}>
                <span className="text-black text-xs font-mono uppercase tracking-wider">
                  ECDLI
                </span>
                <span className="text-black text-2xl font-medium italic tracking-tight">
                  COACHING
                </span>
              </div>
              
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter">
                Expert guidance for your path
              </h2>
            </div>

            {/* Statistics */}
            <div className="flex gap-10 md:gap-16">
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter" style={{ color: '#ff9700' }}>
                  81%
                </span>
                <p className="text-white/60 text-sm mt-2 font-medium">
                  improved time
                  <br />
                  management
                </p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter" style={{ color: '#ff9700' }}>
                  70%
                </span>
                <p className="text-white/60 text-sm mt-2 font-medium">
                  increased work
                  <br />
                  performance
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg max-w-lg font-medium leading-relaxed">
              Achieve lasting transformation in all areas of your life. Discover
              the support you need to do more, be more and serve more with
              one-on-one strategy sessions with our expert results coaches.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#coaching"
                className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border-2 hover:bg-[#ff9700] hover:text-black text-sm py-3 px-6"
                style={{ borderColor: '#ff9700', color: '#ff9700' }}
              >
                Results coaching
              </a>
              <a
                href="#business-coaching"
                className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border-2 hover:bg-[#ff9700] hover:text-black text-sm py-3 px-6"
                style={{ borderColor: '#ff9700', color: '#ff9700' }}
              >
                Business coaching
              </a>
            </div>
          </div>

          {/* Right - Video */}
          <div className="relative">
            <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/images/coaching-mountain.jpg"
                alt="Coaching video"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-black/70 transition-colors duration-300">
                  <Play className="w-5 h-5 text-white fill-white" />
                  <span className="text-white text-sm font-medium">Watch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
