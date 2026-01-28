import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ onOpenRegister }: { onOpenRegister: () => void }) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <iframe
          src="https://customer-ii0xa5crj23jlkm0.cloudflarestream.com/ad1effbcd5f2d0ae9f40c55143584c69/iframe?autoplay=true&muted=true&loop=true&controls=false"
          style={{
            border: 'none',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="wrapper relative h-full flex items-center justify-center pt-20">
        <div className="text-center max-w-4xl mx-auto px-4 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            El Club de la Imaginación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium"
          >
            Transforma tu realidad a través del poder de tu imaginación
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={onOpenRegister}
            className="bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Comenzar Ahora
          </motion.button>
        </div>
      </div>
    </section>
  );
}
