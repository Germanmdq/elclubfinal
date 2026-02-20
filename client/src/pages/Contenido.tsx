import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Users, Quote, ArrowRight } from "lucide-react";

const sections = [
    {
        title: "Explicaciones Bíblicas",
        description: "Interpretación mística y psicológica de las escrituras sagradas",
        href: "/biblioteca?filter=explicaciones-biblicas",
        icon: Quote
    },
    {
        title: "Testimonios",
        description: "Experiencias reales de transformación mediante la Ley",
        href: "/testimonios",
        icon: Users
    },
    {
        title: "Diccionario Unity",
        description: "Términos y conceptos espirituales explicados",
        href: "/biblioteca?filter=diccionario",
        icon: BookOpen
    }
];

export default function Contenido() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <Header />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-6"
                        >
                            <span className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Material Complementario
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                            Contenido <br />
                            <span className="text-white/30">Adicional</span>
                        </h1>

                        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
                            Material complementario para profundizar tu comprensión y práctica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link href={section.href}>
                                    <div className="group relative bg-black border border-white/5 rounded-[2.5rem] p-10 hover:border-white/10 transition-all duration-700 cursor-pointer overflow-hidden h-full flex flex-col">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative z-10 flex-1 flex flex-col">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all">
                                                <section.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                            </div>

                                            <h3 className="text-2xl font-black tracking-tighter text-white mb-4 leading-tight">
                                                {section.title}
                                            </h3>

                                            <p className="text-gray-400 text-base font-light leading-relaxed mb-8 flex-1">
                                                {section.description}
                                            </p>

                                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-all">
                                                    Explorar
                                                </span>
                                                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
