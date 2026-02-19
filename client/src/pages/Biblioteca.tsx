import { useState } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Loader2, ArrowRight, Sparkles } from "lucide-react";
import { useGhostPosts } from "@/lib/ghost";
import { navigateWithTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

const categories = [
    { name: "Todas", tag: null },
    { name: "Conferencias", tag: "conferencias-de-neville-goddard" },
    { name: "Libros", tag: "libros-de-neville-goddard" },
    { name: "Aggiornato", tag: "aggiornado-conferencias" },
    { name: "Radio", tag: "conferencias-de-radio" },
    { name: "Workshop", tag: "workshop" },
    { name: "Dosis Mentales", tag: "dosis-mentales" }
];

export default function Biblioteca() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [searchQuery, setSearchQuery] = useState("");
    const [, setLocation] = useLocation();

    const { posts, loading, error } = useGhostPosts({
        filter: activeCategory.tag ? `tag:${activeCategory.tag}` : undefined,
        limit: 'all',
        include: 'tags,authors'
    });

    const filteredAndSearchedPosts = posts?.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    }) || [];

    const handleNavigate = (slug: string) => {
        navigateWithTransition(() => {
            setLocation(`/biblioteca/texto/${slug}`);
        });
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <Header />

            <main className="pt-40 pb-32">
                <div className="wrapper">
                    {/* Apple Style Header - Fixed Centered Layout */}
                    <div className="content-focused text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-8"
                        >
                            <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Archivo del Conocimiento
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
                            Biblioteca de la <br />
                            <span className="text-white opacity-40">Imaginación</span>
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto tracking-tight">
                            Explorá las conferencias, escritos y enseñanzas de Neville Goddard y otros maestros de la consciencia.
                        </p>
                    </div>

                    {/* Integrated Controls Area */}
                    <div className="content-focused mb-20 space-y-12">
                        {/* Search Bar - Focused */}
                        <div className="relative group max-w-2xl mx-auto">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Buscar en el archivo..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/5 rounded-full py-6 pl-16 pr-6 text-lg focus:outline-none focus:border-white/10 focus:bg-white/[0.05] transition-all tracking-tight"
                            />
                        </div>

                        {/* Category Pills - Clean Center */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300
                                        ${activeCategory.name === cat.name ? 'bg-white text-black' : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Articles Grid - Strictly 2 cards per row above 768px (md) */}
                    <div className="content-focused">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-40">
                                <Loader2 className="w-10 h-10 text-white/20 animate-spin mb-6" />
                                <p className="text-gray-600 font-bold tracking-[0.3em] uppercase text-[10px]">Accediendo al Archivo...</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-24 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl">
                                <p className="text-gray-500 font-light italic">Se perdió la conexión con el archivo. Intentá de nuevo.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {filteredAndSearchedPosts.map((post, idx) => {
                                    const isPremium = post.visibility !== 'public';

                                    return (
                                        <motion.div
                                            key={post.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => handleNavigate(post.slug)}
                                            className="cursor-pointer group"
                                        >
                                            <article className="relative bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:bg-white/[0.02] hover:border-white/10 flex flex-col h-full hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                                                {/* Card Image */}
                                                {post.feature_image && (
                                                    <div className="relative aspect-video overflow-hidden border-b border-white/5">
                                                        <img
                                                            src={post.feature_image}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                                        />
                                                        {isPremium && (
                                                            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-3xl border border-white/10 p-3 rounded-2xl">
                                                                <Sparkles className="w-4 h-4 text-white opacity-40" />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                <div className="p-10 flex flex-col flex-1">
                                                    <div className="flex items-center gap-3 mb-8">
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                                                            {post.primary_tag?.name || 'Texto'}
                                                        </span>
                                                        <div className="w-1 h-1 rounded-full bg-white/10" />
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                                                            {Math.ceil((post.html?.length || 0) / 1000)} min
                                                        </span>
                                                    </div>

                                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight tracking-tighter group-hover:text-white transition-colors">
                                                        {post.title}
                                                    </h3>

                                                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 line-clamp-2">
                                                        {post.excerpt || post.meta_description || "Explorá esta profunda enseñanza sobre la consciencia e imaginación."}
                                                    </p>

                                                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-all">
                                                            Ingresar al texto
                                                        </span>
                                                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:border-white/20 group-hover:text-white transition-all/500">
                                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Empty State */}
                    {!loading && filteredAndSearchedPosts.length === 0 && (
                        <div className="content-focused py-32 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-[3rem]">
                            <p className="text-gray-600 font-light text-lg">No se encontraron tesoros para esta búsqueda.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
