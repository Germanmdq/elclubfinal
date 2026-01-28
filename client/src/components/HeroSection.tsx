import { Play } from "lucide-react";
import { motion } from "framer-motion";

/* ECDLI Hero Section
   - Video Background
   - Title: "El Club de la Imaginación" with Particle Assembly Effect
   - Subtitle & Button with staggered entry
*/

interface HeroSectionProps {
  onOpenRegister: () => void;
}

// "Particle" animation: letters fly in from "chaos" to "order"
const letterAnimation = {
  hidden: {
    opacity: 0,
    x: -50, // simulated randomness handled by variants in children if needed, or simple chaos here
    y: 100,
    rotate: -45,
    scale: 3,
    filter: "blur(20px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: i * 0.5 + 4, // Wait for video loop ~4s
    },
  }),
};

// Specialized component to render text as individual "particles" (characters)
const AnimatedText = ({
  text,
  className,
  delayMultiplier = 0,
}: {
  text: string;
  className?: string;
  delayMultiplier?: number;
}) => {
  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 ${className}`}
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      custom={delayMultiplier}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {word.split("").map((char, j) => {
            // Pseudo-randomize start positions based on index for "chaos" feel
            const randomX = (j % 2 === 0 ? 1 : -1) * (Math.random() * 50 + 20);
            const randomY = Math.random() * 100 - 50;
            const randomRotate = (Math.random() * 90) - 45;

            return (
              <motion.span
                key={j}
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: randomX,
                    y: randomY,
                    rotate: randomRotate,
                    scale: 2 + Math.random(),
                    filter: "blur(15px)"
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      type: "spring",
                      damping: 12, // slightly bouncy
                      stiffness: 100
                    }
                  }
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.div>
  );
};

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  return (
    <section className="bg-black pt-[72px] px-2 sm:px-4 pb-4 theme--dark">
      <div className="relative min-h-[calc(100vh-6rem)] overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* 
            On mobile, we make the iframe huge (h-full and w-[177vh]) to emulate 'object-cover' for a 16:9 video.
            177vh is roughly 16/9 * 100vh. 
            On desktop (md+), we can usually rely on w-full h-full if the screen is wide enough, 
            but keeping the 'min' dimensions ensures it never letterboxes.
          */}
          <div className="absolute top-1/2 left-1/2 w-[177vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <iframe
              src="https://customer-ii0xa5crj23jlkm0.cloudflarestream.com/ad1effbcd5f2d0ae9f40c55143584c69/iframe?autoplay=true&muted=true&loop=true&controls=false&background=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Legibility Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-1" />
        </div>

        {/* Content - Positioned at bottom (Overlay) for ALL screens */}
        <div className="absolute inset-0 z-10 wrapper pb-8 md:pb-12 flex flex-col justify-end items-center pointer-events-none">
          <div className="max-w-5xl w-full text-center space-y-6 md:space-y-8 pointer-events-auto">
            {/* Main Headline */}
            <div className="overflow-visible px-4">
              <AnimatedText
                text="El Club de la Imaginación"
                className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[1.1]"
                delayMultiplier={6}
              />
            </div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 11, duration: 1, ease: "easeOut" }}
            >
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-white bg-white hover:bg-white/90 text-black text-xs md:text-sm py-3 px-8 md:py-4 md:px-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Explora el Club
              </button>
            </motion.div>

            {/* Subtext */}
            <div className="overflow-visible px-4 w-full">
              <AnimatedText
                text="Un espacio en donde creemos que la imaginación crea la realidad"
                className="text-white/80 text-base sm:text-lg md:text-3xl lg:text-4xl w-full mx-auto leading-relaxed font-medium"
                delayMultiplier={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
