import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useGhostPosts } from "@/lib/ghost";
import PostCard from "@/components/PostCard";

export default function BibliotecaPreviewSection() {
    const { posts, loading, error } = useGhostPosts({
        filter: 'featured:true',
        limit: 4,
        include: 'tags,authors'
    });

    return (
        <section className="bg-black py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/[0.01] blur-[150px] pointer-events-none" />

            <div className="wrapper">
                <div className="content-focused">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center gap-2 mb-8"
                        >
                            <BookOpen className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Archivo Sagrado
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8"
                        >
                            Biblioteca de la
                            <br />
                            <span className="text-white opacity-30">Imaginación</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-tight mb-6"
                        >
                            Conferencias, libros y material de múltiples autores.
                            Todo organizado y listo para transformar tu comprensión.
                        </motion.p>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="w-10 h-10 text-white/20 animate-spin mb-6" />
                            <p className="text-gray-600 font-bold tracking-[0.3em] uppercase text-[10px]">Cargando biblioteca...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <p className="text-gray-500 font-light">Error al cargar la biblioteca</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                            <BookOpen className="w-12 h-12 text-white/20 mx-auto mb-4" />
                            <p className="text-gray-500 font-light">Próximamente...</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {posts[0] && (
                                    <div className="md:col-span-2">
                                        <PostCard post={posts[0]} index={0} featured={true} />
                                    </div>
                                )}

                                {posts.slice(1).map((post, idx) => (
                                    <PostCard key={post.id} post={post} index={idx + 1} />
                                ))}
                            </div>

                            <div className="text-center">
                                <Link href="/biblioteca">
                                    <button className="group bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-white/90 transition-all active:scale-95 inline-flex items-center gap-3">
                                        Explorar Biblioteca Completa
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
