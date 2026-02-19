import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, ArrowRight, Loader2, Sparkles, Share2 } from "lucide-react";
import { useGhostTag, useGhostPosts } from "@/lib/ghost";
import { navigateWithTransition } from "@/lib/transitions";
import { motion } from "framer-motion";
import NotFound from "./NotFound";

export default function AuthorProfile() {
    const [match, params] = useRoute("/biblioteca/autor/:slug");
    const slug = params?.slug || "";
    const [filter, setFilter] = useState<'all' | 'LIBRO' | 'CONFERENCIA'>('all');

    const { tag: author, loading: authorLoading, error: authorError } = useGhostTag(slug);
    const { posts: allWorks, loading: postsLoading } = useGhostPosts({
        filter: `tag:${slug}`,
        limit: 'all',
        include: 'tags,authors'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!match) return <NotFound />;

    if (authorLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-white/20 animate-spin" />
            </div>
        );
    }

    if (authorError || !author) return <NotFound />;

    const toggleFilter = (type: 'LIBRO' | 'CONFERENCIA') => {
        setFilter(filter === type ? 'all' : type);
    };

    const filteredWorks = allWorks.filter(work => {
        if (filter === 'all') return true;
        const hasTypeTag = work.tags?.some(t => t.slug.toLowerCase() === filter.toLowerCase());
        return hasTypeTag;
    });

    const handleNavigate = (workSlug: string) => {
        navigateWithTransition(() => {
            window.location.href = `/biblioteca/texto/${workSlug}`;
        });
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Header />

            <main className="pt-40 pb-32">
                <div className="wrapper">
                    <div className="content-focused">

                        {/* Author Header - Centered & Clean */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-32"
                        >
                            <Link href="/biblioteca" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all mb-16 group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Volver al Archivo
                            </Link>

                            <div className="relative inline-block mb-12">
                                <div className="w-48 h-64 md:w-64 md:h-80 mx-auto rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl relative z-10">
                                    {author.feature_image ? (
                                        <img src={author.feature_image} alt={author.name} className="w-full h-full object-cover grayscale" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <FileText className="w-12 h-12 text-white/5" />
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-purple-500/20 blur-[80px] -z-10" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center justify-center gap-2 mb-6"
                            >
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                    Maestros de la Consciencia
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                                {author.name}
                            </h1>

                            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 tracking-tight">
                                {author.description || "Un maestro de la consciencia cuya obra ha transformado miles de vidas a través del poder de la imaginación."}
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <button className="btn-primary px-10">Seguir Autor</button>
                                <button className="btn-secondary w-14 h-14 p-0 flex items-center justify-center">
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>

                        <div className="h-px w-full bg-white/5 mb-24" />

                        {/* Works Selection */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                            <h2 className="text-3xl font-black tracking-tighter">Archivo de Enseñanzas</h2>

                            <div className="flex items-center gap-3">
                                {['all', 'LIBRO', 'CONFERENCIA'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type as any)}
                                        className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all
                                            ${filter === type ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                                    >
                                        {type === 'all' ? 'Todo' : type + 'S'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {postsLoading ? (
                            <div className="flex flex-col items-center justify-center py-40">
                                <Loader2 className="w-10 h-10 text-white/10 animate-spin mb-6" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Recuperando Obras...</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {filteredWorks.map((work, idx) => (
                                    <motion.div
                                        key={work.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={() => handleNavigate(work.slug)}
                                        className="group cursor-pointer"
                                    >
                                        <article className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] flex items-center gap-10 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400/60">
                                                        {work.primary_tag?.name || 'Obra'}
                                                    </span>
                                                    <div className="w-1 h-1 rounded-full bg-white/10" />
                                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                                                        {new Date(work.published_at).getFullYear()}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter group-hover:text-white transition-colors">
                                                    {work.title}
                                                </h3>

                                                <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2 max-w-2xl">
                                                    {work.excerpt || "Una enseñanza profunda que expande los límites de tu realidad."}
                                                </p>
                                            </div>

                                            <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:border-white/20 group-hover:text-white transition-all shrink-0">
                                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </article>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
