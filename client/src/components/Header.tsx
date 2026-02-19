import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Biblioteca", href: "/biblioteca" },
  { label: "Pregúntale a Neville", href: "/preguntale-a-neville" },
  { label: "Eventos", href: "/eventos" },
  { label: "Foro", href: "/foro" }
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${scrolled ? "py-4" : "py-8"}`}>
      <div className="wrapper">
        <div className={`relative flex items-center justify-between px-8 h-[64px] rounded-full transition-all duration-700 ${scrolled ? "bg-white/[0.03] backdrop-blur-3xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.3)]" : "bg-transparent border-transparent"
          }`}>

          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="text-white font-black text-lg tracking-[-0.05em] uppercase cursor-pointer hover:opacity-70 transition-opacity">
              ECDLI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer hover:text-white ${location === item.href ? "text-white" : "text-gray-500"
                  }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 relative z-50">
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <Link href="/dashboard">
              <button className="hidden md:block bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] px-6 py-2.5 rounded-full hover:bg-white/90 transition-all active:scale-95">
                Portal
              </button>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Improved Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-3xl z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] md:w-[400px] bg-[#050505] border-l border-white/5 z-50 lg:hidden p-12 flex flex-col"
            >
              <div className="mt-24 space-y-12">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link href={item.href}>
                      <span
                        className="group flex items-center justify-between text-4xl font-black tracking-tighter text-white/50 hover:text-white transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                        <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-white/5">
                <Link href="/dashboard">
                  <button
                    className="w-full bg-white text-black font-black text-[12px] uppercase tracking-[0.3em] py-5 rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ir a mi Dashboard
                  </button>
                </Link>
                <p className="mt-8 text-center text-[10px] uppercase tracking-[0.4em] text-gray-700 font-bold">
                  ECDLI — Comunidad Exclusiva
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
