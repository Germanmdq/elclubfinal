import { useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    title: "MAESTRÍA EN ASUNCIÓN",
    subtitle: "Taller teórico-práctico sobre la Ley de Asunción.",
    date: "12 MARZO",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    title: "EL ARTE DE LA ORACIÓN",
    subtitle: "Cómo hablar con tu propio ser interior.",
    date: "15 ABRIL",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    title: "IMAGINACIÓN DESPIERTA",
    subtitle: "Sesión intensiva de visualización creativa.",
    date: "02 MAYO",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1475721027187-402473392430?auto=format&fit=crop&q=80&w=800",
    title: "CONGRESO ANUAL ECDLI",
    subtitle: "El encuentro más esperado del año.",
    date: "20 JUNIO",
  },
];

export default function EventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left"
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="wrapper">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                Experiencias en Vivo
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
              Eventos que <br />
              <span className="text-white opacity-40">liberan tu mente</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:border-white/20 hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:border-white/20 hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-8 px-8 pb-12"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[calc(100vw-80px)] md:w-[450px] snap-start cursor-pointer group"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/5 shadow-2xl">
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-white opacity-40" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white opacity-40">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4 leading-none">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-[280px]">
                    {event.subtitle}
                  </p>

                  <button className="w-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.3em] py-5 rounded-full hover:bg-white hover:text-black transition-all">
                    Asegurar Entrada
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Hint */}
        <div className="md:hidden flex justify-center mt-4">
          <div className="flex gap-1.5">
            {events.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
