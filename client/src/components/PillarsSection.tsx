import { ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

/* ECDLI Pillars Section - Con animaciones de scroll
   - Fondo claro/blanco
   - Lista de pilares con hover effects
   - Imagen a la derecha
   - Tipografía con tracking-tighter
   - Animaciones fade-up al scroll
*/

const pillars = [
  { name: "Mindset", href: "#mindset" },
  { name: "Wealth", href: "#wealth" },
  { name: "Health", href: "#health" },
  { name: "Relationships", href: "#relationships" },
  { name: "Business", href: "#business" },
  { name: "Leadership", href: "#leadership" },
  { name: "Happiness", href: "#happiness" },
];

export default function PillarsSection() {
  return (
    <section className="theme--light py-16 md:py-24">
      <div className="wrapper">
        {/* Header */}
        <AnimatedSection animation="fade-up" delay={0}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter mb-4">
              Master every area of your life
            </h2>
            <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto font-medium">
              Close the gap between where you are and where you want to be with
              ECDLI' scientifically proven system.
            </p>
          </div>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Pillars List */}
          <div>
            {/* Label */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-black rounded-full" />
                <span className="font-mono text-xs uppercase text-black/50 tracking-wide">
                  PILLARS FOR AN EXTRAORDINARY LIFE
                </span>
              </div>
            </AnimatedSection>

            {/* Pillars */}
            <div className="space-y-0">
              {pillars.map((pillar, index) => (
                <AnimatedSection
                  key={pillar.name}
                  animation="fade-up"
                  delay={200 + index * 50}
                >
                  <a
                    href={pillar.href}
                    className="group flex items-center justify-between py-4 border-b border-black/10 hover:border-[#a855f7] transition-colors duration-300"
                  >
                    <span className="text-black text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter group-hover:text-black/60 transition-colors duration-300">
                      {pillar.name}
                    </span>
                    <span className="flex items-center gap-1 text-black/40 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Button */}
            <AnimatedSection animation="fade-up" delay={600}>
              <a
                href="#start"
                className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 bg-black hover:bg-black/80 text-white text-sm py-4 px-8 mt-8"
              >
                Start now
              </a>
            </AnimatedSection>
          </div>

          {/* Right - Image */}
          <AnimatedSection animation="slide-left" delay={300}>
            <div className="relative">
              <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden">
                <img
                  src="/images/event-crowd.jpg"
                  alt="ECDLI on stage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
