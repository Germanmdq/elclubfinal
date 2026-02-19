import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { useGhostPost } from "@/lib/ghost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, ChevronRight, Plus, ArrowLeft, Clock, Calendar, Share2, List, Star } from "lucide-react";
import FavoriteButton from "@/components/FavoriteButton";
import { TableOfContents } from "@/components/TableOfContents";
import { PaywallCard } from "@/components/PaywallCard";
import { toast } from "sonner";

const Article = () => {
    const { slug } = useParams();
    const { post, loading, error } = useGhostPost(slug!);
    const [processedHtml, setProcessedHtml] = useState("");
    const [isFavorite, setIsFavorite] = useState(false); // Added for new favorite button

    // In a real app, get from Auth Context
    const mockUserTier = 'free';

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post?.html) {
            const temp = document.createElement('div');
            temp.innerHTML = post.html;
            const headers = temp.querySelectorAll('h2, h3');
            headers.forEach((header, index) => {
                header.id = `heading-${index}`;
                header.className = "scroll-mt-32";
            });
            setProcessedHtml(temp.innerHTML);
        }
        // Simulate checking if post is favorite
        if (post?.slug) {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            setIsFavorite(favorites.some((fav: any) => fav.contentId === post.slug));
        }
    }, [post]);

    const toggleFavorite = () => {
        if (!post) return;
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const newFavorite = {
            contentId: post.slug,
            title: post.title,
            image: post.feature_image || undefined,
        };

        if (isFavorite) {
            const updatedFavorites = favorites.filter((fav: any) => fav.contentId !== post.slug);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            toast.info("Enseñanza eliminada de favoritos.");
        } else {
            favorites.push(newFavorite);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            toast.success("Enseñanza guardada en favoritos.");
        }
        setIsFavorite(!isFavorite);
    };

    if (loading) return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
        </div>
    );

    if (error || !post) return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-4xl font-serif mb-4">Conferencia no encontrada</h1>
                <Link href="/biblioteca" className="text-purple-400 hover:underline">Volver a la biblioteca</Link>
            </div>
        </div>
    );

    const checkAccess = (p: any, userTier: string) => {
        if (userTier === 'club') return true;
        if (p.visibility === 'public') return true;

        if (userTier === 'aggiornato') {
            const isClubOnly = p.tags?.some((t: any) => t.slug === 'solo-club' || t.slug === 'premium');
            return !isClubOnly;
        }

        return false;
    };

    const hasAccess = checkAccess(post, mockUserTier);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
            <Header />

            <main className="relative pt-32">
                {/* Immersive Hero Section */}
                <div className="pb-24 relative overflow-hidden bg-black">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                    <div className="wrapper relative z-10 text-center">
                        <div className="content-focused">
                            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                                    {post.primary_tag?.name || 'Enseñanza'}
                                </span>
                            </div>

                            <h1
                                className="text-4xl md:text-7xl font-extrabold leading-[1.05] mb-12 tracking-tighter"
                                style={{ viewTransitionName: `title-${post.id}` } as React.CSSProperties}
                            >
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-[10px]">
                                        NG
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white">Neville Goddard</p>
                                        <p className="opacity-50">Autor</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-white/10 hidden md:block" />
                                <div className="text-left">
                                    <p className="text-white">Lectura</p>
                                    <p className="opacity-50">{post.reading_time || Math.ceil((post.html?.length || 0) / 1000)} min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area - Centered and Clean */}
                <div className="wrapper pb-32">
                    <div className="content-focused">
                        {hasAccess ? (
                            <article
                                id="content"
                                className="prose prose-invert prose-xl md:prose-2xl max-w-none 
                                    prose-p:font-light prose-p:leading-[1.8] prose-p:mb-10 text-gray-300
                                    prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
                                    prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:bg-white/[0.02] prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:text-white prose-blockquote:not-italic
                                    prose-strong:text-white prose-strong:font-bold"
                                dangerouslySetInnerHTML={{ __html: processedHtml || post.html! }}
                            />
                        ) : (
                            <PaywallCard requiredTier={post.visibility!} />
                        )}

                        {/* Actions Area */}
                        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={toggleFavorite}
                                    className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all
                                        ${isFavorite ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                >
                                    <Star className={`w-4 h-4 ${isFavorite ? 'fill-black' : ''}`} />
                                    {isFavorite ? 'En favoritos' : 'Guardar enseñanza'}
                                </button>
                                <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                                    <Share2 className="w-4 h-4" />
                                    Compartir
                                </button>
                            </div>

                            <Link href="/biblioteca">
                                <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all flex items-center gap-3 group">
                                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    Volver al Archivo
                                </button>
                            </Link>
                        </div>

                        {/* Final Discovery Card */}
                        <div className="mt-32 p-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center backdrop-blur-3xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />
                            <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">¿Listo para profundizar?</h3>
                            <p className="text-gray-400 font-light mb-10 max-w-md mx-auto leading-relaxed">
                                Uníte a nuestras sesiones de estudio en vivo y transformá tu teoría en experiencia directa.
                            </p>
                            <button className="btn-primary">
                                Ver Próximos Eventos
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Article;
