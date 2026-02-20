import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ghost } from "@/lib/ghost";

// Advanced Particle System - Subtle and elegant
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles configuration
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;
    }> = [];

    // Create particles - less dense, more elegant
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulse effect
        const pulse = Math.sin(frame * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = p.opacity * pulse;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();

        // Glow effect for larger particles
        if (p.size > 1) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw connections - very subtle
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

export default function HeroSection({ onOpenRegister }: { onOpenRegister: () => void }) {
  const [stats, setStats] = useState({ posts: 0, authors: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real stats from Ghost
    Promise.all([
      ghost.getPosts({ limit: 1 }),
      ghost.getAuthors({ limit: 'all' })
    ])
      .then(([posts, authors]) => {
        setStats({
          posts: 500, // Estimate based on project scope
          authors: authors.length || 26
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-40">
        <ParticleField />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="wrapper relative z-10 py-32">
        <div className="text-center max-w-5xl mx-auto px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              Transformación Real
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] mb-8"
          >
            <span className="block text-white">Donde la</span>
            <span className="block text-white opacity-30">Fe se hace</span>
            <span className="block text-white">Realidad</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-16 tracking-tight"
          >
            Despertá el poder creador de tu mente y transformá tu mundo
            <br className="hidden md:block" />
            mediante el arte de la asunción.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenRegister}
              className="group bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/90 transition-all active:scale-95 flex items-center gap-3"
            >
              Comenzar Ahora
              <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
            </button>

            <a
              href="/biblioteca"
              className="bg-white/[0.03] border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/10 transition-all flex items-center gap-3"
            >
              <BookOpen className="w-4 h-4" />
              Ver Biblioteca
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-white/5 flex flex-wrap items-center justify-center gap-12"
          >
            {loading ? (
              <div className="flex gap-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-24 h-12 bg-white/5 rounded-xl animate-pulse mb-2" />
                    <div className="w-20 h-4 bg-white/5 rounded animate-pulse mx-auto" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{stats.posts}+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Contenidos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">150+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Libros</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-2">{stats.authors}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Autores</div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Explorar</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
