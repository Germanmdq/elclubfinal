import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

/* ECDLI Testimonials Section - Con animaciones de scroll
   - Fondo azul #2764ff
   - Imagen grande a la izquierda
   - Quote grande a la derecha
   - Avatares circulares para seleccionar testimonios
   - Transiciones suaves
   - Animaciones fade-up al scroll
*/

const testimonials = [
  {
    id: 1,
    name: "Serena Williams",
    title: "Most Singles Grand Slam titles in history, 4-time Olympic gold medalist",
    quote:
      "ECDLI helped me discover what I am really made of. With Tony's help, I've set new standards for myself, and I've taken my tennis game—and my life—to a whole new level!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bgColor: "#2764ff",
  },
  {
    id: 2,
    name: "Klay Thompson",
    title: "4-time NBA champion, 5-time All-Star",
    quote:
      "I was able to talk to ECDLI right after I got hurt and Mr. Robbins inspired me a lot to never lose my soul and always be myself.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "#074169",
  },
  {
    id: 3,
    name: "Maria Menounos",
    title: "Actress & TV Host, Cancer survivor",
    quote:
      "I feel on top of the world. I feel incredible, I feel motivated, I feel empowered. I am the master of my own destiny.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bgColor: "#8840ff",
  },
  {
    id: 4,
    name: "Marc Benioff",
    title: "Salesforce Founder & CEO",
    quote:
      "ECDLI has been one of the critical keys to Salesforce.com's leadership in cloud computing and its growth into an over $37 billion dollar company.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bgColor: "#05775c",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: activeTestimonial.bgColor }}
    >
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <AnimatedSection animation="slide-right" delay={0} className="order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
              <iframe
                src="https://customer-ii0xa5crj23jlkm0.cloudflarestream.com/95acd5d8ee4e54e9a884945e37adc3fe/iframe?autoplay=true&muted=true&loop=true&controls=false"
                className="absolute inset-0 w-full h-full border-none scale-[1.05]"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-2 mb-6">
                <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tight">
                  Neville Goddard
                </h2>
                <p className="text-white/70 text-lg font-medium tracking-wide uppercase">
                  Nuestro autor favorito
                </p>
              </div>

              <blockquote className="text-white text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight mb-4">
                “Nos convertimos en la encarnación de aquello de lo que nos alimentamos mentalmente”.
              </blockquote>

              <p className="text-white/60 text-sm md:text-base font-serif italic">
                —Imaginación despierta, 1954
              </p>
            </AnimatedSection>

            {/* Buttons */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 bg-white hover:bg-white/90 text-black text-sm py-3 px-8">
                  Su obra
                </button>
                <button className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-white/30 hover:bg-white/10 text-white text-sm py-3 px-8">
                  Su historia
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
