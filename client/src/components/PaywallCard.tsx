import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface PaywallCardProps {
    requiredTier: string;
}

export default function PaywallCard({ requiredTier }: PaywallCardProps) {
    const [, setLocation] = useLocation();

    const tierNames: Record<string, string> = {
        'members': 'Membresía',
        'paid': 'Premium',
        'tiers': 'Premium'
    };

    const tierName = tierNames[requiredTier] || 'Premium';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto my-16"
        >
            <div className="relative bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

                <div className="relative p-12 lg:p-16 text-center">

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <Lock className="w-7 h-7 text-white/40" />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/5 rounded-full">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                            Contenido {tierName}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-tight">
                        Este espacio requiere
                        <br />
                        <span className="text-white/30">Acceso {tierName}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto font-light leading-relaxed">
                        Unite a la comunidad exclusiva de El Club de la Imaginación para desbloquear este contenido y todo nuestro archivo sagrado.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setLocation('/pricing')}
                            className="group bg-white text-black font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
                        >
                            Comenzar Ahora
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => setLocation('/biblioteca')}
                            className="bg-white/5 text-white border border-white/5 font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white/10 transition-all"
                        >
                            Explorar Catálogo
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
                        Seguridad de acceso garantizada
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
