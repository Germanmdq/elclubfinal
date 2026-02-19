import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface SubMenuItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  subItems?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "Biblioteca",
    href: "/biblioteca",
    hasDropdown: false,
  },
  {
    label: "Pregúntale a Neville",
    href: "/preguntale-a-neville",
    hasDropdown: false,
  },
  {
    label: "Eventos",
    href: "/eventos",
    hasDropdown: false,
  },
  {
    label: "Foro",
    href: "/foro",
    hasDropdown: false,
  }
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "py-4" : "py-8"
        }`}
    >
      <div className="wrapper">
        <div className={`relative flex items-center justify-between px-8 h-[64px] rounded-full transition-all duration-700 ${scrolled ? "bg-white/[0.03] backdrop-blur-3xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.3)]" : "bg-transparent border-transparent"
          }`}>

          {/* Logo - Minimal Apple Style */}
          <Link href="/" className="relative z-10">
            <span className="text-white font-black text-lg tracking-[-0.05em] uppercase cursor-pointer hover:opacity-70 transition-opacity">
              ECDLI
            </span>
          </Link>

          {/* Desktop Navigation - Centered & Clean */}
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
          <div className="flex items-center gap-4 relative z-10">
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>

            <Link href="/dashboard">
              <button className="bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-white/90 transition-all active:scale-95">
                Dashboard
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Immersive Apple Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl pt-32 px-12"
          >
            <nav className="flex flex-col gap-12">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={item.href}>
                    <span
                      className="text-4xl font-extrabold tracking-tighter text-white hover:opacity-50 transition-opacity"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/5"
              >
                <Link href="/dashboard">
                  <span
                    className="text-lg font-bold text-purple-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ir a mi Dashboard →
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
