import { useState, useEffect } from 'react';
import { Link, useLocation } from "wouter";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getFavorites, type Favorite } from '@/lib/supabase';
import {
    Bookmark,
    Sparkles,
    Loader2,
    Settings,
    Star,
    ArrowRight
} from "lucide-react";
import { navigateWithTransition } from "@/lib/transitions";
import { motion } from "framer-motion";

const Dashboard = () => {
    const [favorites, setFavorites] = useState<Favorite[]>([]);
    const [loading, setLoading] = useState(true);
    const mockUserId = "user_123";
    const [, setLocation] = useLocation();

    useEffect(() => {
        let isMounted = true;

        const fetchFavorites = async () => {
            try {
                const data = await getFavorites(mockUserId);
                if (isMounted) {
                    setFavorites(data || []);
                }
            } catch (error) {
                console.error("Error fetching favorites:", error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchFavorites();
        return () => { isMounted = false; };
    }, []);

    const handleNavigate = (contentId: string) => {
        navigateWithTransition(() => {
            setLocation(`/biblioteca/texto/${contentId}`);
        });
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <Header />

            <main className="pt-40 pb-32">
                <div className="wrapper">
                    <div className="content-focused">

                        {/* Apple-style Header */}
                        <header className="mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 mb-6"
                            >
                                <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                    Portal Personal
                                </span>
                            </motion.div>

                            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                                <div>
                                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                                        Hola, <br />
                                        <span className="text-white/30">Explorador</span>
                                    </h1>
                                    <p className="text-gray-500 text-lg font-light tracking-tight max-w-md">
                                        Tu progreso y tus enseñanzas guardadas en un solo lugar.
                                    </p>
                                </div>
                                <button className="btn-secondary px-6 !py-3 text-[10px]">
                                    <Settings className="w-4 h-4 mr-2 inline-block" />
                                    Ajustes
                                </button>
                            </div>
                        </header>

                        {/* Quick Stats Grid - Apple Style */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.04] transition-all group">
                                <Star className="w-6 h-6 text-white/20 mb-8 group-hover:text-white transition-colors" />
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-6xl font-black tracking-tighter leading-none">{favorites.length}</span>
                                    <span className="text-gray-600 font-bold text-[10px] uppercase tracking-[0.2em]">Favoritos</span>
                                </div>
                                <p className="text-gray-500 text-sm font-light">Enseñanzas guardadas para estudio profundo.</p>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.04] transition-all group overflow-hidden relative">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[80px] pointer-events-none" />
                                <Sparkles className="w-6 h-6 text-white/20 mb-8 group-hover:text-white transition-colors" />
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-6xl font-black tracking-tighter leading-none">VIP</span>
                                    <span className="text-gray-600 font-bold text-[10px] uppercase tracking-[0.2em]">Acceso</span>
                                </div>
                                <p className="text-gray-500 text-sm font-light">Acceso total a la Videoteca y Foros exclusivos.</p>
                            </div>
                        </div>

                        {/* Favorites Section - Unified List */}
                        <section>
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-3xl font-black tracking-tighter">Guardados</h2>
                                <Link href="/biblioteca">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all cursor-pointer">
                                        Explorar Todo
                                    </span>
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {loading ? (
                                    <div className="flex flex-col items-center justify-center py-32 bg-white/[0.01] border border-white/5 rounded-[2.5rem]">
                                        <Loader2 className="w-8 h-8 text-white/10 animate-spin mb-4" />
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Sincronizando archivo...</p>
                                    </div>
                                ) : favorites.length > 0 ? (
                                    favorites.map((fav, idx) => (
                                        <motion.div
                                            key={fav.content_id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => handleNavigate(fav.content_id)}
                                            className="group bg-white/[0.02] border border-white/5 p-6 rounded-3xl flex items-center gap-6 cursor-pointer hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                                        >
                                            <div className="h-16 w-16 rounded-2xl bg-black overflow-hidden flex-shrink-0 border border-white/10 relative">
                                                {fav.image ? (
                                                    <img
                                                        src={fav.image}
                                                        alt={fav.title}
                                                        className="h-full w-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                                                    />
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center">
                                                        <Bookmark className="w-5 h-5 text-white/10" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1.5">
                                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Enseñanza</span>
                                                    <div className="w-1 h-1 rounded-full bg-white/10" />
                                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">Maestro Interior</span>
                                                </div>
                                                <h4 className="text-white font-bold text-lg tracking-tight group-hover:text-white transition-colors truncate">
                                                    {fav.title}
                                                </h4>
                                            </div>

                                            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:border-white/20 group-hover:text-white group-hover:bg-white/5 transition-all">
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="py-24 text-center bg-white/[0.01] border border-white/5 rounded-[3rem] group">
                                        <Bookmark className="w-10 h-10 text-white/5 mx-auto mb-8 group-hover:scale-110 group-hover:text-white/10 transition-all duration-700" />
                                        <h3 className="text-xl font-bold mb-3 tracking-tight">Cofre de la Imaginación vacío</h3>
                                        <p className="text-gray-600 text-sm font-light mb-10 max-w-xs mx-auto">Guardá las enseñanzas que resuenen con tu propósito para acceder a ellas rápidamente.</p>
                                        <Link href="/biblioteca">
                                            <button className="btn-primary !px-10 !py-4 text-xs tracking-widest uppercase">
                                                Comenzar búsqueda
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dashboard;
