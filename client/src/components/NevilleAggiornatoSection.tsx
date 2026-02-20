import { motion } from "framer-motion";
import { Star, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useGhostPosts } from "@/lib/ghost";
import PostCard from "@/components/PostCard";

export default function NevilleAggiornatoSection() {
    const { posts, loading, error } = useGhostPosts({
        filter: 'tag:aggiornato-conferencias',
        limit: 3,
        include: 'tags,authors'
    });

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/[0.01] blur-[150px] pointer-events-none" />

            <div className="wrapper">
                <div className="content-focused">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="flex items-center justify-center gap-2 mb-8">
                            <Star className="w-4 h-4 text-white fill-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Contenido Actualizado
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
                            Neville
                            <br />
                            <span className="text-white opacity-30">Aggiornato</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-tight mb-12">
                            Enseñanzas actualizadas, explicadas y aplicadas al contexto moderno.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-10 h-10 text-white/20 animate-spin mb-6" />
                            <p className="text-gray-600 font-bold tracking-[0.3em] uppercase text-[10px]">Cargando contenido...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <p className="text-gray-500 font-light">Error al cargar el contenido</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <Star className="w-12 h-12 text-white/20 mx-auto mb-4 fill-white/20" />
                            <p className="text-gray-500 font-light">Próximamente...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                            {posts.map((post, idx) => (
                                <PostCard key={post.id} post={post} index={idx} />
                            ))}
                        </div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[3rem] p-12 md:p-16 text-center overflow-hidden group hover:border-white/20 transition-all">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <Star className="w-12 h-12 text-white/20 mx-auto mb-8 fill-white/20" />
                                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6">
                                    Acceso completo a
                                    <br />
                                    <span className="text-white opacity-30">Neville Aggiornato</span>
                                </h3>
                                <p className="text-gray-400 font-light text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Desbloquea todo el contenido actualizado y material exclusivo.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/pricing">
                                        <button className="bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/90 transition-all active:scale-95 group-hover:scale-105">
                                            Ver Planes
                                        </button>
                                    </Link>

                                    <Link href="/aggiornato">
                                        <button className="bg-white/5 border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
                                            Explorar Contenido
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
