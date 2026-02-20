import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Search, Loader2, Lightbulb } from "lucide-react";
import { useGhostPosts } from "@/lib/ghost";
import { motion } from "framer-motion";

export default function DosisMentales() {
    const [searchQuery, setSearchQuery] = useState("");

    const { posts, loading, error } = useGhostPosts({
        filter: 'tag:dosis-mentales',
        limit: 'all',
        include: 'tags,authors'
    });

    const filteredPosts = posts?.filter(post => {
        if (!searchQuery) return true;
        const search = searchQuery.toLowerCase();
        return post.title.toLowerCase().includes(search) ||
            post.excerpt?.toLowerCase().includes(search);
    }) || [];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <Header />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-6"
                        >
                            <Lightbulb className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                Dosis Diaria
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
                            Dosis <br />
                            <span className="text-white/30">Mentales</span>
                        </h1>

                        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
                            Enseñanzas breves y poderosas para integrar en tu día a día.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-white transition-colors" />
                            <input
                                type="text"
                                placeholder="Buscar dosis..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/5 rounded-full py-5 pl-16 pr-6 text-base focus:outline-none focus:border-white/10 transition-all font-light tracking-tight"
                            />
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-32">
                            <Loader2 className="w-10 h-10 text-white/20 animate-spin mb-6" />
                            <p className="text-gray-600 text-sm uppercase tracking-wider">Cargando...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-24 bg-white/[0.02] border border-white/5 rounded-3xl">
                            <p className="text-gray-500">Error al cargar las dosis mentales</p>
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-24 bg-white/[0.02] border border-white/5 rounded-3xl">
                            <Lightbulb className="w-12 h-12 text-white/20 mx-auto mb-4" />
                            <p className="text-gray-500">
                                No hay dosis mentales disponibles aún.
                                <br />
                                <span className="text-sm">Asegurate de crear posts en Ghost con el tag "dosis-mentales"</span>
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {filteredPosts.map((post, idx) => (
                                <PostCard key={post.id} post={post} index={idx} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
