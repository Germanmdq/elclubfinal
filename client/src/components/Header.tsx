import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className={`relative flex items-center justify-between px-6 h-16 rounded-full transition-all duration-300 ${scrolled
              ? "bg-black/90 backdrop-blur-2xl border border-white/20"
              : "bg-black/60 backdrop-blur-xl border border-white/10"
            }`}>

            {/* Logo */}
            <Link href="/">
              <span className="text-white font-black text-xl uppercase cursor-pointer hover:opacity-70 transition-opacity z-10">
                ECDLI
              </span>
            </Link>

            {/* Desktop Navigation - Absolute Centered with safer breakpoint */}
            <nav className="hidden xl:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 pointer-events-auto">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <span className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all cursor-pointer rounded-full whitespace-nowrap ${location === item.href
                      ? "text-black bg-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 z-10">
              <Link href="/dashboard">
                <button className="hidden sm:block bg-white text-black font-bold text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white/90 transition-all active:scale-95">
                  Portal
                </button>
              </Link>

              <button
                className="xl:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl"
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-8">
              <nav className="flex flex-col gap-8 text-center w-full max-w-md">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link href={item.href}>
                      <span className="text-4xl font-black tracking-tighter text-white hover:text-gray-500 transition-all block uppercase">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 pt-12 border-t border-white/10"
                >
                  <Link href="/dashboard">
                    <button className="w-full bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-5 rounded-full hover:bg-white/90 transition-all">
                      Ir a Portal
                    </button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
