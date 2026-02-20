import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Sparkles, Zap, Brain, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function EventPage() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full" />

                <div className="wrapper relative z-10 pt-32 pb-20">
                    <div className="text-center max-w-5xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                    Experiencia Exclusiva
                                </span>
                            </div>

                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                                Maestría en
                                <br />
                                <span className="text-white opacity-30">Manifestación</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
                                Domina el arte de crear tu realidad desde la imaginación con el método exacto de Neville Goddard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={() => setIsAuthModalOpen(true)}
                                    className="group bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] px-12 py-6 rounded-full hover:bg-white/90 transition-all flex items-center gap-3 active:scale-95"
                                >
                                    RESERVAR MI LUGAR
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-white text-black py-24 md:py-32">
                <div className="wrapper">
                    <div className="text-center mb-24">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-6 block">
                            Curriculum del Despertar
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">Lo que aprenderás</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Brain, title: "Dominio Mental", text: "Controla tu diálogo interno de forma definitiva." },
                            { icon: Target, title: "Foco Total", text: "Materializa deseos con claridad y precisión." },
                            { icon: Sparkles, title: "Alquimia Espiritual", text: "Transforma tu conciencia y tu mundo." }
                        ].map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black text-white p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all duration-500 group"
                            >
                                <b.icon className="w-12 h-12 mb-8 text-white/20 group-hover:text-white transition-colors" />
                                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter">{b.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{b.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Details */}
            <section className="bg-black py-24 md:py-32">
                <div className="wrapper grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.95]">
                            De la teoría a la
                            <br />
                            <span className="text-white opacity-30">realidad física</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                "Dominar el sentimiento del deseo cumplido",
                                "Sanar bloqueos mentales profundos",
                                "Atraer abundancia de forma sistemática",
                                "Vivir desde la convicción del logro"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <p className="text-lg md:text-xl text-gray-400 font-light">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="bg-white/[0.03] border border-white/5 p-12 rounded-[2.5rem] text-center">
                            <p className="text-6xl font-black text-white mb-2">100%</p>
                            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">EFECTIVO</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 p-12 rounded-[2.5rem] text-center">
                            <p className="text-6xl font-black text-white mb-2">LIVE</p>
                            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">SOPORTE</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-white text-black py-24 md:py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />
                <div className="wrapper relative z-10">
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tighter leading-[0.95]">¿Ocuparás tu lugar?</h2>
                    <p className="text-xl md:text-2xl text-gray-500 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        El momento de transformar tu realidad es hoy. Cupos limitados para garantizar la calidad de la experiencia.
                    </p>
                    <button
                        onClick={() => setIsAuthModalOpen(true)}
                        className="bg-black text-white font-black text-[11px] uppercase tracking-[0.3em] px-14 py-7 rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95"
                    >
                        SÍ, QUIERO UNIRME AHORA
                    </button>
                </div>
            </section>

            <Footer />
            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </div>
    );
}
