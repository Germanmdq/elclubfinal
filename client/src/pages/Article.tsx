import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "wouter";
import { useGhostPost } from "@/lib/ghost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, ArrowLeft, Clock, Calendar, Share2, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import PaywallCard from "@/components/PaywallCard";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
    id: string;
    title: string;
    content: string;
}

const Article = () => {
    const { slug } = useParams();
    const { post, loading, error } = useGhostPost(slug!);
    const [sections, setSections] = useState<Section[]>([]);
    const [currentSection, setCurrentSection] = useState(0);
    const [introContent, setIntroContent] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Refs for UI logic
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigationRef = useRef<HTMLDivElement>(null);

    const mockUserTier = 'paid';

    useEffect(() => {
        window.scrollTo(0, 0);
        if (post?.html) {
            const temp = document.createElement('div');
            temp.innerHTML = post.html;

            const h2Elements = Array.from(temp.querySelectorAll('h2'));
            const extractedSections: Section[] = [];

            if (h2Elements.length > 0) {
                const firstH2 = h2Elements[0];
                const introNodes: Node[] = [];
                let currentNode = temp.firstChild;

                while (currentNode && currentNode !== firstH2) {
                    introNodes.push(currentNode.cloneNode(true));
                    currentNode = currentNode.nextSibling;
                }

                const introDiv = document.createElement('div');
                introNodes.forEach(node => introDiv.appendChild(node));
                setIntroContent(introDiv.innerHTML);

                h2Elements.forEach((h2, index) => {
                    const sectionDiv = document.createElement('div');
                    const h2Clone = h2.cloneNode(true) as HTMLElement;
                    h2Clone.id = `section-${index}`;
                    sectionDiv.appendChild(h2Clone);

                    let nextNode = h2.nextSibling;
                    const nextH2 = h2Elements[index + 1];

                    while (nextNode && nextNode !== nextH2) {
                        sectionDiv.appendChild(nextNode.cloneNode(true));
                        nextNode = nextNode.nextSibling;
                    }

                    extractedSections.push({
                        id: `section-${index}`,
                        title: h2.textContent || `Capítulo ${index + 1}`,
                        content: sectionDiv.innerHTML
                    });
                });

                setSections(extractedSections);
            } else {
                setIntroContent(temp.innerHTML);
            }
        }
    }, [post]);

    // Precise scrolling logic when section changes
    useEffect(() => {
        if (navigationRef.current && sections.length > 0) {
            const headerOffset = 140; // Space for the floating header
            const elementPosition = navigationRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, [currentSection]);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const hasAccess = () => {
        if (!post) return false;
        if (post.visibility === 'public') return true;
        if (post.visibility === 'members' && mockUserTier === 'free') return false;
        if (post.visibility === 'paid' && mockUserTier !== 'paid') return false;
        return true;
    };

    const userHasAccess = hasAccess();

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Enlace copiado");
        } catch (err) {
            toast.error("Error al copiar");
        }
    };

    const goToSection = (index: number) => {
        setCurrentSection(index);
        setDropdownOpen(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-white/20" />
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4 tracking-tighter">Artículo no encontrado</h1>
                    <Link href={post?.primary_tag?.slug ? `/${post.primary_tag.slug}` : "/biblioteca"}>
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs tracking-wider">
                            Volver a {post?.primary_tag?.name || 'Biblioteca'}
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/30">
            <Header />

            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link href={post.primary_tag?.slug ? `/${post.primary_tag.slug}` : "/biblioteca"}>
                        <button className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                Volver a {post.primary_tag?.name || 'Biblioteca'}
                            </span>
                        </button>
                    </Link>

                    <div className="mb-16">
                        <div className="flex flex-wrap items-center gap-3 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                            {post.primary_tag && (
                                <>
                                    <span className="text-white">{post.primary_tag.name}</span>
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                </>
                            )}
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 opacity-50" />
                                <span>
                                    {new Date(post.published_at).toLocaleDateString('es-AR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 opacity-50" />
                                <span>{post.reading_time || 5} min de lectura</span>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95] text-white">
                            {post.title}
                        </h1>

                        {(post.custom_excerpt || post.excerpt) && (
                            <p className="text-xl text-gray-400 leading-relaxed mb-10 font-light italic border-l-2 border-white/10 pl-8">
                                {post.custom_excerpt || post.excerpt}
                            </p>
                        )}

                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/5 hover:bg-white/10 rounded-full transition-all text-sm font-bold uppercase tracking-wider group"
                            >
                                <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>Compartir</span>
                            </button>

                            {!userHasAccess && (
                                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/40">🔒 Contenido Protegido</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {post.feature_image && userHasAccess && (
                        <div className="mb-16 rounded-[2.5rem] overflow-hidden border border-white/5 bg-white/5 relative group">
                            <img
                                src={post.feature_image}
                                alt={post.feature_image_alt || post.title}
                                className="w-full h-auto object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                style={{ maxHeight: '600px', objectFit: 'cover' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </div>
                    )}

                    {userHasAccess ? (
                        <div className="min-h-[400px]">
                            {/* Intro Content */}
                            {introContent && currentSection === 0 && (
                                <article
                                    className="prose prose-invert prose-lg max-w-none mb-16
                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white
                    prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:mb-10 prose-p:font-light
                    prose-blockquote:border-l-4 prose-blockquote:border-white/10 prose-blockquote:pl-10 prose-blockquote:italic prose-blockquote:text-gray-400
                    prose-img:rounded-[2rem] prose-img:border prose-img:border-white/5"
                                    dangerouslySetInnerHTML={{ __html: introContent }}
                                />
                            )}

                            {sections.length > 0 && (
                                <div ref={navigationRef} className="mb-16 border-b border-white/5 pb-12">
                                    {/* Selector Dropdown */}
                                    <div className="relative mb-8" ref={dropdownRef}>
                                        <button
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className={`w-full flex items-center justify-between px-8 py-5 bg-white/[0.03] border rounded-[2rem] transition-all duration-300 ${dropdownOpen ? 'border-white/20 bg-white/5' : 'border-white/5 hover:border-white/10'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4 overflow-hidden">
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex-shrink-0">
                                                    {currentSection + 1} / {sections.length}
                                                </span>
                                                <div className="w-px h-4 bg-white/10" />
                                                <span className="text-sm font-bold text-white truncate">
                                                    {sections[currentSection].title}
                                                </span>
                                            </div>
                                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-500 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {dropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                    className="absolute top-full left-0 right-0 mt-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 max-h-[450px] overflow-y-auto no-scrollbar"
                                                >
                                                    <div className="p-2">
                                                        {sections.map((section, index) => (
                                                            <button
                                                                key={section.id}
                                                                onClick={() => goToSection(index)}
                                                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all duration-300 ${currentSection === index
                                                                    ? 'bg-white/10 text-white'
                                                                    : 'text-gray-500 hover:bg-white/5 hover:text-white'
                                                                    }`}
                                                            >
                                                                <span className={`text-[10px] font-bold min-w-[2.5ch] text-center ${currentSection === index ? 'text-white' : 'text-gray-700'}`}>
                                                                    {index + 1}
                                                                </span>
                                                                <span className="text-sm font-bold truncate">
                                                                    {section.title}
                                                                </span>
                                                                {currentSection === index && (
                                                                    <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-white ml-auto" />
                                                                )}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-white"
                                            initial={false}
                                            animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                                            transition={{ duration: 0.8, ease: "circOut" }}
                                        />
                                    </div>
                                </div>
                            )}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSection}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {sections.length > 0 ? (
                                        <article
                                            className="prose prose-invert prose-lg max-w-none
                        prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white
                        prose-h2:text-4xl prose-h2:mb-10
                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-white/80
                        prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:mb-10 prose-p:font-light
                        prose-a:text-white prose-a:underline hover:prose-a:text-gray-400
                        prose-strong:text-white prose-strong:font-black
                        prose-blockquote:border-l-4 prose-blockquote:border-white/10 prose-blockquote:pl-10 prose-blockquote:italic prose-blockquote:text-gray-400 prose-blockquote:my-16 prose-blockquote:text-2xl
                        prose-code:text-white prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                        prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-[2rem]
                        prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                        prose-li:text-gray-300 prose-li:mb-4
                        prose-img:rounded-[2rem] prose-img:border prose-img:border-white/5 prose-img:my-16"
                                            dangerouslySetInnerHTML={{ __html: sections[currentSection].content }}
                                        />
                                    ) : (
                                        <article
                                            className="prose prose-invert prose-lg max-w-none"
                                            dangerouslySetInnerHTML={{ __html: introContent }}
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Enhanced Footer Navigation */}
                            {sections.length > 1 && (
                                <div className="flex items-center justify-between mt-24 pt-12 border-t border-white/5">
                                    <button
                                        onClick={() => goToSection(Math.max(0, currentSection - 1))}
                                        disabled={currentSection === 0}
                                        className="group flex flex-col items-start gap-2 disabled:opacity-20 transition-all"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Anterior</span>
                                        <div className="flex items-center gap-2 text-white font-black text-xs uppercase group-hover:-translate-x-1 transition-transform">
                                            <ChevronLeft className="w-4 h-4" />
                                            <span>Volver</span>
                                        </div>
                                    </button>

                                    <div className="hidden sm:flex flex-col items-center">
                                        <span className="text-white font-black text-sm tracking-tighter">
                                            {currentSection + 1} / {sections.length}
                                        </span>
                                        <div className="w-8 h-px bg-white/20 mt-1" />
                                    </div>

                                    <button
                                        onClick={() => goToSection(Math.min(sections.length - 1, currentSection + 1))}
                                        disabled={currentSection === sections.length - 1}
                                        className="group flex flex-col items-end gap-2 disabled:opacity-20 transition-all text-right"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Siguiente</span>
                                        <div className="flex items-center gap-2 text-white font-black text-xs uppercase group-hover:translate-x-1 transition-transform">
                                            {currentSection === sections.length - 1 ? "Fin del Capítulo" : "Continuar"}
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <PaywallCard requiredTier={post.visibility} />
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Article;
