import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useGhostPosts } from "@/lib/ghost";
import PostCard from "@/components/PostCard";

export default function DosisMentalesSection() {
    const { posts, loading, error } = useGhostPosts({
        filter: 'tag:dosis-mentales',
        limit: 4,
        include: 'tags,authors'
    });

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            <div className="wrapper">
                <div className="content-focused">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Enseñanza Diaria
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8"
                        >
                            Dosis
                            <br />
                            <span className="text-white opacity-30">Mentales</span>
                        </motion.h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-tight">
                            Pequeñas cápsulas de sabiduría para mantener tu estado de asunción durante el día.
                        </p>
                    </div>

                    {/* Content */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-10 h-10 text-white/20 animate-spin mb-6" />
                            <p className="text-gray-600 font-bold tracking-[0.3em] uppercase text-[10px]">Cargando dosis...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <p className="text-gray-500 font-light">Error al cargar el archivo</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <Sparkles className="w-12 h-12 text-white/20 mx-auto mb-4" />
                            <p className="text-gray-500 font-light">Próximamente más dosis mentales...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {posts.map((post, idx) => (
                                <PostCard key={post.id} post={post} index={idx} />
                            ))}
                        </div>
                    )}

                    {/* Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 text-center"
                    >
                        <h3 className="text-2xl font-black mb-4 tracking-tighter text-white">Recibí tu dosis por email</h3>
                        <p className="text-gray-500 font-light mb-8 max-w-md mx-auto leading-relaxed">Suscribite para recibir una enseñanza diaria seleccionada directamente en tu inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/30 transition-all"
                            />
                            <button className="bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-white/90 transition-all">
                                Suscribirme
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
