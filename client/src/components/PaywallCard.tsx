import { motion } from 'framer-motion';
import { Lock, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useLocation } from 'wouter';

interface PaywallCardProps {
    requiredTier: string;
}

export function PaywallCard({ requiredTier }: PaywallCardProps) {
    const [, setLocation] = useLocation();
    const tierName = requiredTier === 'members' ? 'Miembro' : (requiredTier === 'paid' ? 'VIP' : requiredTier);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl mx-auto my-24 relative group"
        >
            {/* Ambient Background Glow - Monochromatic */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />

            <div className="relative bg-black border border-white/5 rounded-[3rem] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

                <div className="p-12 md:p-20 text-center flex flex-col items-center">
                    {/* Iconic Identity Lock */}
                    <div className="relative mb-12">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-24 h-24 bg-white/[0.03] border border-white/10 rounded-[2rem] flex items-center justify-center relative z-10"
                        >
                            <Lock className="w-8 h-8 text-white opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                        <div className="absolute inset-0 bg-white/5 blur-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>

                    {/* Minimalist Badge */}
                    <div className="flex items-center gap-2 mb-8 animate-fade-in">
                        <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                            Contenido Reservado
                        </span>
                    </div>

                    {/* Elevated Typography */}
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-white">
                        Este espacio requiere <br />
                        <span className="text-white opacity-30">Acceso {tierName}</span>
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-16 tracking-tight">
                        Uníte a la comunidad exclusiva de <span className="text-white font-medium">El Club de la Imaginación</span> para desbloquear este texto y todo nuestro archivo sagrado.
                    </p>

                    {/* Premium Action Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                        <button
                            onClick={() => setLocation('/pricing')}
                            className="group relative bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] py-5 px-8 rounded-full transition-all hover:bg-white/90 active:scale-95 flex items-center justify-center gap-3"
                        >
                            <Sparkles className="w-4 h-4" />
                            Comenzar ahora
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => setLocation('/biblioteca')}
                            className="bg-white/[0.03] border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.2em] py-5 px-8 rounded-full transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center gap-3"
                        >
                            <ShieldCheck className="w-4 h-4 text-gray-500" />
                            Explorar catálogo
                        </button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 w-full">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-black">
                            Seguridad de acceso garantizada
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
