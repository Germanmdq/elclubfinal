import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Target, Sparkles, Users, BookOpen, Zap, Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterModal from "@/components/RegisterModal";

export default function EventPage() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden bg-black">
                <div className="absolute inset-0 w-full h-full">
                    <iframe
                        src="https://customer-ii0xa5crj23jlkm0.cloudflarestream.com/42a2ee853a079667aa2ad0e2952ff380/iframe?autoplay=true&muted=true&loop=true&controls=false"
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                        style={{ border: 'none' }}
                        allow="autoplay"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />
                <div className="wrapper relative h-full flex items-center justify-center z-20">
                    <div className="text-center max-w-5xl mx-auto px-4">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <p className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-light">Próximo Evento · Exclusivo · Transformador</p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Maestría en
                                <br />
                                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Manifestación</span>
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
                                Domina el arte de crear tu realidad desde la imaginación con el método exacto de Neville Goddard.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={() => setIsRegisterModalOpen(true)}
                                    className="group bg-white text-black font-bold px-10 py-5 rounded-full text-lg hover:bg-gray-100 transition-all flex items-center gap-3"
                                >
                                    RESERVAR MI LUGAR <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-white text-black py-24">
                <div className="wrapper">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Lo que aprenderás</h2>
                        <p className="text-gray-500 text-xl tracking-widest uppercase">Resultados Tangibles</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Brain, title: "Dominio Mental", text: "Controla tu diálogo interno de forma definitiva." },
                            { icon: Target, title: "Foco Total", text: "Materializa deseos con claridad y precisión." },
                            { icon: Sparkles, title: "Alquimia Espiritual", text: "Transforma tu conciencia y tu mundo." }
                        ].map((b, i) => (
                            <div key={i} className="bg-black text-white p-8 rounded-2xl hover:scale-105 transition-transform">
                                <b.icon className="w-12 h-12 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                                <p className="text-white/70">{b.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation */}
            <section className="bg-black py-24 border-y border-white/5">
                <div className="wrapper grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">De la teoría a la <span className="text-gray-400">realidad física</span></h2>
                        <div className="space-y-4">
                            {[
                                "Dominar el sentimiento del deseo cumplido",
                                "Sanar bloqueos mentales profundos",
                                "Atraer abundancia de forma sistemática",
                                "Vivir desde la convicción del logro"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center"><Check className="w-4 h-4 text-black" /></div>
                                    <p className="text-lg text-white/90">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white text-black p-8 rounded-2xl text-center"><p className="text-5xl font-bold mb-2">100%</p><p className="font-bold opacity-50">EFECTIVO</p></div>
                        <div className="bg-white text-black p-8 rounded-2xl text-center"><p className="text-5xl font-bold mb-2">EN VIVO</p><p className="font-bold opacity-50">SOPORTE</p></div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white text-black py-24">
                <div className="wrapper">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">Voces de éxito</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-black text-white p-8 rounded-2xl">
                                <div className="flex gap-1 mb-6"><Star className="fill-white" /><Star className="fill-white" /><Star className="fill-white" /></div>
                                <p className="text-lg italic mb-8">"Este evento cambió mi vida. Manifesté mi casa de ensueño en menos de un mes aplicando lo aprendido."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-500" />
                                    <div><p className="font-bold">Miembro {i}</p><p className="text-sm opacity-50">Graduado</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black py-24 text-center">
                <div className="wrapper">
                    <h2 className="text-4xl md:text-7xl font-bold mb-8">¿Ocuparás tu lugar?</h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">El momento de transformar tu realidad es hoy. Cupos limitados para garantizar la calidad de la experiencia.</p>
                    <button
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="bg-white text-black font-bold px-12 py-6 rounded-full text-xl hover:scale-105 transition-transform"
                    >
                        SÍ, QUIERO UNIRME AHORA
                    </button>
                </div>
            </section>

            <Footer />
            <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
        </div>
    );
}
