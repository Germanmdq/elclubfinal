import { useState, useEffect, useRef } from "react";
import { Search, Menu, X, Loader2, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ghost, type GhostPost } from "@/lib/ghost";

const navItems = [
  { label: "Biblioteca", href: "/biblioteca" },
  { label: "Dosis Mentales", href: "/dosis-mentales" },
  { label: "Aggiornato", href: "/aggiornato" },
  { label: "Pregúntale a Neville", href: "/preguntale-a-neville" },
  { label: "Foro", href: "/foro" }
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<GhostPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Search logic
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const posts = await ghost.getPosts({
          filter: `title:~'${searchQuery}'`,
          limit: 5
        });
        setSearchResults(posts);
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative flex items-center justify-between px-6 h-14 rounded-full transition-all duration-500 ${scrolled
            ? "bg-black/80 backdrop-blur-2xl border border-white/10"
            : "bg-black/30 backdrop-blur-xl border border-white/5"
            }`}>

            <Link href="/">
              <span className="text-white font-black text-base uppercase cursor-pointer hover:opacity-70 transition-opacity">
                ECDLI
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all cursor-pointer rounded-full ${location === item.href
                    ? "text-white bg-white/10"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div ref={searchRef} className="relative hidden lg:block">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full transition-all ${searchOpen ? "bg-white/10 text-white" : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <Search className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-[400px] bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <div className="p-4 border-b border-white/5">
                        <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input
                            autoFocus
                            type="text"
                            placeholder="Buscar en el archivo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="max-h-[400px] overflow-y-auto">
                        {isSearching ? (
                          <div className="p-8 text-center">
                            <Loader2 className="w-6 h-6 animate-spin text-white/20 mx-auto mb-2" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Buscando...</p>
                          </div>
                        ) : searchResults.length > 0 ? (
                          <div className="p-2 space-y-1">
                            {searchResults.map(post => (
                              <Link key={post.id} href={`/biblioteca/texto/${post.slug}`}>
                                <div className="p-3 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group flex items-center gap-4">
                                  {post.feature_image && (
                                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                                      <img src={post.feature_image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-white font-bold text-sm truncate">{post.title}</h4>
                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">{post.primary_tag?.name || 'Artículo'}</p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white transition-all group-hover:translate-x-1" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : searchQuery.length >= 2 ? (
                          <div className="p-8 text-center text-gray-500 text-sm italic">
                            No se encontraron resultados para "{searchQuery}"
                          </div>
                        ) : (
                          <div className="p-8 text-center text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Escribí para buscar
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/dashboard">
                <button className="hidden sm:block bg-white text-black font-bold text-xs uppercase px-5 py-2 rounded-full hover:bg-white/90 transition-all active:scale-95">
                  Portal
                </button>
              </Link>

              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col min-h-screen p-8 pt-24">
              <div className="mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="BUSCAR..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-14 pr-6 text-lg text-white placeholder:text-gray-700 focus:outline-none focus:border-white/20 transition-all uppercase font-black"
                  />
                </div>
              </div>

              <nav className="flex flex-col gap-6">
                {searchQuery.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map(post => (
                      <Link key={post.id} href={`/biblioteca/texto/${post.slug}`}>
                        <div className="flex items-center justify-between group">
                          <span className="text-xl font-black text-white group-hover:text-white/50 transition-all uppercase truncate mr-4">
                            {post.title}
                          </span>
                          <ArrowRight className="w-5 h-5 text-white/20" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  navItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <span className="text-4xl font-black tracking-tight text-white hover:text-white/50 transition-all uppercase">
                        {item.label}
                      </span>
                    </Link>
                  ))
                )}

                <div className="mt-auto pt-6 border-t border-white/10">
                  <Link href="/dashboard">
                    <button className="w-full bg-white text-black font-black text-sm uppercase px-8 py-5 rounded-full hover:bg-white/90 transition-all active:scale-95">
                      Ir a Portal
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
