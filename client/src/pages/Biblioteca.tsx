import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText } from "lucide-react";
import { authors } from "@/data/authors";

const categories = [
    "Todas las Especialidades", "Nuevo Pensamiento", "Metafísica", "Espiritualidad", "Filosofía", "Éxito", "Misticismo Cristiano"
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Biblioteca() {
    const [activeCategory, setActiveCategory] = useState("Todas las Especialidades");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAuthors = authors.filter(author => {
        const matchesCategory = activeCategory === "Todas las Especialidades" || author.category === activeCategory.toUpperCase();
        const matchesSearch = author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            author.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#3ceba0] selection:text-black">
            <Header />

            <main className="pt-24 pb-20">
                <div className="wrapper">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-tight">
                                Directorio de Autores
                            </h1>
                            <p className="text-gray-400 text-lg">
                                Explora nuestro archivo curado de distinguidos escritores, investigadores y poetas.
                                Filtra por especialidad o busca alfabéticamente.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-auto min-w-[300px]">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar autores, biografías u obras..."
                                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#3ceba0] focus:ring-1 focus:ring-[#3ceba0] transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400 border border-white/5">CMD + K</span>
                            </div>
                        </div>
                    </div>

                    {/* Alphabet Filter */}
                    <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-white/10">
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mr-2">Alfabético</span>
                        <button className="w-8 h-8 rounded bg-[#2764ff] text-white text-xs font-medium flex items-center justify-center hover:bg-[#2764ff]/80 transition-colors">
                            A
                        </button>
                        {alphabet.slice(1, 15).map(letter => (
                            <button key={letter} className="w-8 h-8 rounded bg-white/5 text-gray-400 text-xs font-medium flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                                {letter}
                            </button>
                        ))}
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center gap-3 mb-12">
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mr-2">Categorías</span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`
                  px-5 py-2 rounded-full text-xs font-medium transition-all duration-300
                  ${activeCategory === cat
                                        ? "bg-black border border-white text-white"
                                        : "bg-white text-black border border-white hover:bg-gray-200"}
                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Authors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredAuthors.map(author => (
                            <Link key={author.id} href={`/biblioteca/${author.id}`}>
                                <div
                                    className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl cursor-pointer h-full"
                                >
                                    {/* Author Image */}
                                    <div className="relative mb-6">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg mx-auto">
                                            <img
                                                src={author.image}
                                                alt={author.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Category Tag */}
                                    <span className="text-[10px] font-bold tracking-widest text-[#2764ff] uppercase mb-3 block">
                                        {author.category}
                                    </span>

                                    {/* Name */}
                                    <h3 className="text-2xl font-serif text-black mb-2 group-hover:text-[#2764ff] transition-colors">
                                        {author.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm mb-6 font-light italic">
                                        {author.description}
                                    </p>

                                    {/* Article Count */}
                                    <div className="mt-auto flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                                        <FileText className="w-3 h-3 text-[#2764ff]" />
                                        <span>{author.articles} Obras</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-16 gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded bg-[#2764ff] text-white">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded text-gray-400 hover:bg-white/5">2</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded text-gray-400 hover:bg-white/5">3</button>
                        <span className="w-10 h-10 flex items-center justify-center text-gray-600">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded text-gray-400 hover:bg-white/5">14</button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
