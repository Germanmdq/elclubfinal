import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Users, Zap } from "lucide-react";
import { Link } from "wouter";

const latestTopics = [
    { id: 1, title: "Técnica de la Tijera de Podar", author: "Marcos G.", replies: 12, category: "Técnicas" },
    { id: 2, title: "¿Cómo mantener el estado durante el día?", author: "Elena R.", replies: 28, category: "Preguntas" },
    { id: 3, title: "Éxito manifestando mi casa ideal", author: "Julián M.", replies: 45, category: "Éxitos" }
];

export default function ForoPreviewSection() {
    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            <div className="wrapper">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <MessageSquare className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Comunidad Consciente
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
                            El Foro del
                            <br />
                            <span className="text-white opacity-30">Club</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12 tracking-tight">
                            Compartí tus experiencias, despejá dudas y conectá con otros investigadores de la consciencia.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <div className="text-3xl font-black text-white mb-1">1.2k+</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Investigadores</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-white mb-1">5k+</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Discusiones</div>
                            </div>
                        </div>

                        <Link href="/foro">
                            <button className="group bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/90 transition-all active:scale-95 flex items-center gap-3">
                                Unirme al Foro
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* Right: Topic List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {latestTopics.map((topic, idx) => (
                            <div
                                key={topic.id}
                                className="group bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer"
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-3 block">
                                            {topic.category}
                                        </span>
                                        <h3 className="text-xl font-black text-white group-hover:text-white transition-colors tracking-tight mb-2">
                                            {topic.title}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-black text-white">
                                                {topic.author.charAt(0)}
                                            </div>
                                            <span className="text-xs font-light text-gray-500">por {topic.author}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <MessageSquare className="w-3 h-3" />
                                            <span className="text-[10px] font-bold">{topic.replies}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* View all link */}
                        <Link href="/foro">
                            <div className="flex items-center justify-center gap-2 p-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors cursor-pointer group">
                                Ver todos los temas
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
