
import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Globe, Mail, FileText, ChevronRight, Search, ArrowRight, BookOpen, Mic } from "lucide-react";
import { authors } from "@/data/authors";
import NotFound from "./NotFound";

export default function AuthorProfile() {
    const [match, params] = useRoute("/biblioteca/:id");
    const [filter, setFilter] = useState<'all' | 'LIBRO' | 'CONFERENCIA'>('all'); // Default to all, but buttons will toggle
    const authorId = parseInt(params?.id || "0");
    const author = authors.find(a => a.id === authorId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [authorId]);

    if (!match || !author) {
        return <NotFound />;
    }

    // Since we removed 'all' button, how do we show 'all'? 
    // The request said "deja solo el badget de libros y conferencias".
    // I will interpret this as: clickable badges. If I click "Libros", I see books. If I click again, maybe toggle off?
    // Or maybe just buttons for "Books" and "Conferences" and if neither is active, show all?
    // Let's make them behave like toggles or just simple filters.
    // If I click 'Libros', filter = 'LIBRO'.

    // Actually, usually "All" is implied if buttons act as toggles, or if there is an "All" button.
    // Since "saca todas las obras", maybe they want to force a choice? Or just declutter.
    // I'll keep 'all' as state, and if filter matches button, it's active. If I click active button, it goes back to 'all'.

    const toggleFilter = (type: 'LIBRO' | 'CONFERENCIA') => {
        if (filter === type) {
            setFilter('all');
        } else {
            setFilter(type);
        }
    };

    const filteredWorks = author.latestWorks.filter(work => {
        if (filter === 'all') return true;
        if (filter === 'LIBRO') return work.type === 'LIBRO';
        if (filter === 'CONFERENCIA') return work.type === 'CONFERENCIA';
        return true;
    });

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#3ceba0] selection:text-black">
            <Header />

            {/* Breadcrumb / Back Navigation */}
            <div className="pt-24 pb-8 border-b border-white/5">
                <div className="wrapper">
                    <Link href="/biblioteca" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Volver a la Biblioteca
                    </Link>
                    <div className="flex items-center gap-2 mt-4 text-xs text-gray-600">
                        <Link href="/" className="hover:text-gray-400">Inicio</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/biblioteca" className="hover:text-gray-400">Autores</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white">{author.name}</span>
                    </div>
                </div>
            </div>

            <main className="wrapper py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT SIDEBAR - PROFILE INFO */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Profile Card */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <div className="w-full max-w-[240px] lg:max-w-none mx-auto aspect-[3/4] rounded-lg overflow-hidden mb-6 shadow-xl">
                                <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="text-center lg:text-left">
                                <h1 className="text-2xl lg:text-3xl font-serif font-medium mb-1">{author.name}</h1>
                                <p className="text-[#3ceba0] text-sm font-medium mb-4">{author.title}</p>

                                {/* Contact Actions - Centered on mobile */}
                                <div className="flex justify-center lg:justify-start gap-3 mb-8">
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <Globe className="w-4 h-4 text-gray-400" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                        <FileText className="w-4 h-4 text-gray-400" />
                                    </button>
                                </div>
                            </div>

                            {/* About */}
                            <div className="mb-8">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Sobre el Autor</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {author.about}
                                </p>
                            </div>

                            {/* Bibliography */}
                            {author.bibliography.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-3">Bibliografía</h3>
                                    <ul className="space-y-3">
                                        {author.bibliography.map((book: any, i: number) => (
                                            <li key={i} className="flex flex-col">
                                                <span className="text-white text-sm font-medium">{book.title}</span>
                                                <span className="text-gray-500 text-xs">({book.year})</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <button className="w-full btn-contrast rounded-lg">
                                Seguir Autor
                            </button>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT - WORKS */}
                    <section className="lg:col-span-8">
                        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-3xl font-serif mb-2">{author.name}</h2>
                                <p className="text-gray-400 text-sm">Explora {author.articles} obras publicadas por {author.name}</p>
                            </div>

                            {/* Search in Archive */}
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Buscar en este archivo..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-[#3ceba0]"
                                />
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-white/10">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => toggleFilter('LIBRO')}
                                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${filter === 'LIBRO' ? 'bg-[#2764ff] text-white' : 'bg-white/5 hover:bg-white/10 text-gray-300'}`}
                                >
                                    <BookOpen className="w-3 h-3" /> Libros
                                </button>
                                <button
                                    onClick={() => toggleFilter('CONFERENCIA')}
                                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${filter === 'CONFERENCIA' ? 'bg-[#2764ff] text-white' : 'bg-white/5 hover:bg-white/10 text-gray-300'}`}
                                >
                                    <Mic className="w-3 h-3" /> Conferencias
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="uppercase tracking-wide">Ordenar:</span>
                                <span className="text-white font-medium">Más Recientes</span>
                            </div>
                        </div>

                        {/* Articles Grid - 3 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredWorks.length > 0 ? (
                                filteredWorks.map((work: any, idx: number) => (
                                    <article key={idx} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-[#2764ff]/50 transition-all duration-300 group hover:shadow-xl hover:translate-y-[-2px]">
                                        {/* Card Header/Type */}
                                        <div className="p-4 pb-0 flex justify-between items-start mb-2">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-white/5 ${work.type === 'LIBRO' ? 'bg-emerald-500/10 text-emerald-400' : work.type === 'CONFERENCIA' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                                {work.type}
                                            </span>
                                            <span className="text-gray-500 text-[10px]">{work.date}</span>
                                        </div>

                                        <div className="p-4 pt-2">
                                            <h3 className="text-lg font-serif font-medium text-white mb-2 leading-tight group-hover:text-[#2764ff] transition-colors line-clamp-2 min-h-[3rem]">
                                                {work.title}
                                            </h3>

                                            <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">
                                                {work.snippet}
                                            </p>

                                            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                                                <button className="text-[#2764ff] text-xs font-bold uppercase tracking-wide hover:underline">
                                                    Leer Ahora
                                                </button>
                                                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#2764ff] transition-colors">
                                                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 text-gray-500">No hay obras registradas en esta categoría.</div>
                            )}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-8 h-8 rounded bg-[#2764ff] text-white flex items-center justify-center text-sm">1</button>
                            <button className="w-8 h-8 rounded bg-white/5 text-gray-400 flex items-center justify-center text-sm hover:bg-white/10">2</button>
                            <button className="w-8 h-8 rounded bg-white/5 text-gray-400 flex items-center justify-center text-sm hover:bg-white/10">3</button>
                        </div>

                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
