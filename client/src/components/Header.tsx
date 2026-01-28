import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "wouter";

/* ECDLI Header - Con menús desplegables funcionales
   - Fondo transparente que cambia a negro al scroll
   - Dropdowns animados con submenús
   - Botón "Start now" verde lima (#3ceba0) rounded-full
*/

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
    label: "Sitio",
    href: "/",
    hasDropdown: false,
  },
  {
    label: "Panel",
    href: "/dashboard",
    hasDropdown: false,
  },
  {
    label: "Eventos",
    href: "/eventos",
    hasDropdown: false,
  },
  {
    label: "Testimonios",
    href: "/testimonios",
    hasDropdown: false,
  },
  {
    label: "Pregúntale a Neville",
    href: "/preguntale-a-neville",
    hasDropdown: false,
  },
  {
    label: "Foro",
    href: "/foro",
    hasDropdown: true,
    subItems: [
      { label: "Inicio", href: "/foro", description: "Vista principal" },
      { label: "Ejemplo de Tema", href: "/foro/tema/1", description: "Plantilla de discusión" },
    ]
  },
  {
    label: "N. Aggiornado",
    href: "/biblioteca/100",
    hasDropdown: false,
  },
  {
    label: "Explorar",
    href: "#explore",
    hasDropdown: true,
    subItems: [
      { label: "Biblioteca", href: "/biblioteca", description: "Artículos y recursos" },
      { label: "Podcast", href: "#podcast", description: "Escucha a expertos" },
      { label: "Talleres", href: "#workshops", description: "Grabaciones de eventos" },
    ],
  },
];

export default function Header() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
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

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
          }`}
      >
        <div className="wrapper">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-white font-medium text-base tracking-[0.15em] uppercase">
                ECDLI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 px-4 py-2 text-white text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-300"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 opacity-60 transition-all duration-300 ${activeDropdown === item.label ? "rotate-180 opacity-100" : ""
                          }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.subItems && (
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-300 ${activeDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                        }`}
                    >
                      <div className="bg-black/95 backdrop-blur-md rounded-xl border border-white/10 p-2 min-w-[280px] shadow-2xl">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                          >
                            <span className="text-white text-sm font-medium">
                              {subItem.label}
                            </span>
                            {subItem.description && (
                              <span className="text-white/50 text-xs">
                                {subItem.description}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center justify-center w-10 h-10 text-white hover:opacity-70 transition-opacity duration-300">
                <Search className="w-5 h-5" />
              </button>

              <button className="hidden md:flex items-center justify-center w-10 h-10 text-white hover:opacity-70 transition-opacity duration-300">
                <User className="w-5 h-5" />
              </button>

              <Link href="/dashboard">
                <span className="hidden md:inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-white bg-white hover:bg-white/90 text-black text-xs md:text-sm py-3 px-6 cursor-pointer">
                  Mi Cuenta
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white z-[60]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú Móvil Overlay - Solo visible cuando está abierto */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[55] bg-black/95 backdrop-blur-md"
          style={{ top: '72px' }} // Comienza después del header
        >
          <div className="flex flex-col h-[calc(100vh-72px)] px-6 py-6 overflow-y-auto">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/10">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-white text-lg font-medium py-4"
                        onClick={() => toggleMobileDropdown(item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${mobileActiveDropdown === item.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${mobileActiveDropdown === item.label
                          ? "max-h-96 opacity-100 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="flex flex-col gap-3 pl-4 pb-2">
                          {item.subItems?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="text-white/70 hover:text-white transition-colors py-1"
                              onClick={(e) => {
                                e.preventDefault();
                                setLocation(sub.href);
                                setMobileMenuOpen(false);
                                setMobileActiveDropdown(null);
                              }}
                            >
                              {sub.label}
                              {sub.description && (
                                <span className="block text-xs text-white/40 mt-1">
                                  {sub.description}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center justify-between w-full text-white text-lg font-medium py-4"
                      onClick={(e) => {
                        e.preventDefault();
                        setLocation(item.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button en móvil */}
            <div className="mt-auto pt-8">
              <Link href="/dashboard">
                <span
                  className="flex items-center justify-center w-full bg-white text-black font-medium rounded-full py-4 px-6 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mi Cuenta
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// Fixed overlay z-index and conditional rendering
