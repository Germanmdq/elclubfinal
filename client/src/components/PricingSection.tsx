import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function PricingSection({ onOpenRegister }: { onOpenRegister: () => void }) {
    return (
        <section className="bg-black py-24 md:py-32 relative">
            <div className="wrapper text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Comienza tu viaje hoy</h2>
                <div className="max-w-md mx-auto bg-white p-12 rounded-[2rem]">
                    <h3 className="text-2xl font-bold text-black mb-4">Membresía Elite</h3>
                    <p className="text-5xl font-bold text-black mb-8">$297<span className="text-lg text-black/40">/año</span></p>
                    <ul className="text-black/70 text-left mb-10 space-y-4">
                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-black" fill="black" /> Acceso total a la biblioteca</li>
                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-black" fill="black" /> Sesiones semanales en vivo</li>
                        <li className="flex items-center gap-2"><Star className="w-4 h-4 text-black" fill="black" /> Soporte IA personalizado</li>
                    </ul>
                    <button
                        onClick={onOpenRegister}
                        className="w-full bg-black text-white font-bold py-4 rounded-full hover:scale-105 transition-all text-lg"
                    >
                        ÚNETE AHORA
                    </button>
                </div>
            </div>
        </section>
    );
}
