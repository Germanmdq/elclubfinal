import { motion } from "framer-motion";
import { Book, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useGhostPosts } from "@/lib/ghost";
import PostCard from "@/components/PostCard";

export default function ExplicacionesBiblicasSection() {
    const { posts, loading, error } = useGhostPosts({
        filter: 'tag:explicaciones-biblicas',
        limit: 3,
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
                            <Book className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Interpretación Sagrada
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8"
                        >
                            Explicaciones
                            <br />
                            <span className="text-white opacity-30">Bíblicas</span>
                        </motion.h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-tight">
                            La Biblia como un drama psicológico que ocurre en la mente del individuo.
                        </p>
                    </div>

                    {/* Content */}
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-10 h-10 text-white/20 animate-spin mb-6" />
                            <p className="text-gray-600 font-bold tracking-[0.3em] uppercase text-[10px]">Cargando explicaciones...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <p className="text-gray-500 font-light">Error al cargar el contenido</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <Book className="w-12 h-12 text-white/20 mx-auto mb-4" />
                            <p className="text-gray-500 font-light">Próximamente interpretaciones bíblicas...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {posts.map((post, idx) => (
                                <PostCard key={post.id} post={post} index={idx} />
                            ))}
                        </div>
                    )}

                    <div className="text-center">
                        <Link href="/explicaciones-biblicas">
                            <button className="group bg-white/5 border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/10 transition-all flex items-center gap-3 mx-auto">
                                Ver Todas las Explicaciones
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
