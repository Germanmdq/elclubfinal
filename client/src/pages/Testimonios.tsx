import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

const nevilleTestimonials = [
    {
        name: "Abdullah",
        role: "Mentor de Neville",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        text: "\"Neville, ya estás en Barbados. No puedes preguntar cómo ir a donde ya estás. Camina como si ya hubieras llegado.\"",
        category: "Histórico"
    },
    {
        name: "Louise B.",
        role: "Estudiante de 1948",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
        text: "\"Aplicar la técnica de la escalera cambió mi percepción completa de la realidad. Lo que imaginé en silencio se manifestó en mi mundo físico de forma natural.\"",
        category: "Alumno"
    },
    {
        name: "Frank C.",
        role: "Autor y Conferencista",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
        text: "\"Las enseñanzas de Neville sobre el 'Sentimiento es el Secreto' son la base de todo mi éxito profesional. No es solo pensar, es asumir el estado.\"",
        category: "Alumno"
    }
];

const clubTestimonials = [
    {
        name: "Julian K.",
        role: "Emprendedor Tech",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
        text: "\"Entrar al Club de la Imaginación fue el puente que necesitaba. No solo por el networking, sino por la mentalidad compartida de crear desde el final.\"",
        category: "Club"
    },
    {
        name: "Elena R.",
        role: "Directora Creativa",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ygTtJVaO7lwFdIIf5j6p0l5T2f4d8uV9ujuCqhmWoT17gDurl22xCJoxuRecobijv_POemBEW99lB-hnmTm59Heni67Vn6V6VICLx_Y5u33Td6yzZ11z4J39dMA7xWE-6piAOatHtAbC0EvWnSIGOc-F9JGWSNC3emYHKgu2OQFT_HPQUNc4BNwuBKbC23PXXcvZuwO6yvIpxoM224Sb1A4nixzv0F1UGp4RWfV2PcbaYq2xpFv_SRXPRcG4W3lvejn1X8l14Sc",
        text: "\"Finalmente encontré una comunidad que realmente entiende que la imaginación precede a la realidad. Los resultados en mi empresa han sido exponenciales.\"",
        category: "Club"
    },
    {
        name: "Sarah J.",
        role: "Arquitecta",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8w-87FJzlBT4ani50bJj6GmE6opyI-bQZ7ByEKvXsgi1hTj9X6MQemw7roPEqdVvULP8RhzSx1eFSNIzDHxi0-gXJ4jbLT6ZE1jBY8oycfnMEZL93UGk1wszMbRXCIMHrpVyuu10jZnluPdkRR8FUsbluEW6OpAYTHe25NeWL7znqujNCeBSNP1b3MUsB-xv-vrCgjDTKZGXIKBKbr1ZLAsk9GVRxV7FUvPMp_W_yTonCSZcdXehP-uBD6ZLhnoaPxiY-v2_soD0",
        text: "\"El Club no es solo un grupo de estudio, es una comunidad de práctica. La sinergia que se genera en los encuentros presenciales es de otro nivel.\"",
        category: "Club"
    }
];

export default function Testimonios() {
    const [activeTab, setActiveTab] = useState<'neville' | 'club'>('neville');

    const currentTestimonials = activeTab === 'neville' ? nevilleTestimonials : clubTestimonials;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
            <Header />

            <main>
                {/* Simplified Hero */}
                <section className="pt-32 pb-12 px-6">
                    <div className="wrapper">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-6"
                            >
                                Testimonios
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto"
                            >
                                Historias reales de transformación y éxito a través de la Ley de Asunción.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Tab Selector - Premium Design */}
                <section className="sticky top-[72px] z-40 bg-[#0a0a0a]/80 backdrop-blur-xl border-y border-white/5 py-4 px-6 mb-12">
                    <div className="wrapper flex justify-center">
                        <div className="bg-white/5 p-1 rounded-full flex gap-1 border border-white/10">
                            <button
                                onClick={() => setActiveTab('neville')}
                                className={`px-8 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all ${activeTab === 'neville' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
                                    }`}
                            >
                                Neville & Alumnos
                            </button>
                            <button
                                onClick={() => setActiveTab('club')}
                                className={`px-8 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all ${activeTab === 'club' ? 'bg-white text-black' : 'text-white/40 hover:text-white'
                                    }`}
                            >
                                Club de la Imaginación
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-12 px-6">
                    <div className="wrapper">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <AnimatePresence mode="wait">
                                {currentTestimonials.map((t, i) => (
                                    <motion.div
                                        key={`${activeTab}-${t.name}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                            <span className="material-symbols-outlined text-[100px]">format_quote</span>
                                        </div>

                                        <div className="flex items-center gap-4 mb-8">
                                            <div
                                                className="w-16 h-16 rounded-2xl bg-cover bg-center border-2 border-white/10 shadow-2xl"
                                                style={{ backgroundImage: `url('${t.image}')` }}
                                            />
                                            <div>
                                                <p className="font-bold text-lg leading-tight">{t.name}</p>
                                                <p className="text-[10px] text-white/30 font-black tracking-[0.2em] uppercase mt-1">{t.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-slate-200 text-lg leading-relaxed mb-10 italic">
                                            {t.text}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                            <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">
                                                {activeTab === 'neville' ? 'Archivo Histórico' : 'Miembro Invitado'}
                                            </span>
                                            <div className="flex gap-0.5 text-white/60">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className="material-symbols-outlined text-sm font-bold">star</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6">
                    <div className="wrapper">
                        <div className="max-w-4xl mx-auto py-24 px-10 rounded-[3.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden text-center">
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                                <span className="material-symbols-outlined text-[200px]">auto_awesome</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Tu historia comienza aquí</h2>
                            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                                Únete a la comunidad que está rediseñando su realidad a través de la conciencia.
                            </p>

                            <button className="bg-white text-black h-16 px-16 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-white/20">
                                Solicitar Acceso
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/5 py-16 px-6">
                <div className="wrapper flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-4">
                        <span className="text-white font-medium tracking-[0.2em] uppercase opacity-50">ECDLI</span>
                        <span className="text-sm font-bold text-white/30">© 2024 Neville & Club Hub.</span>
                    </div>
                    <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-white/40">
                        <a className="hover:text-white transition-colors" href="#">Privacidad</a>
                        <a className="hover:text-white transition-colors" href="#">Términos</a>
                    </div>
                </div>
            </footer>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
        </div>
    );
}
