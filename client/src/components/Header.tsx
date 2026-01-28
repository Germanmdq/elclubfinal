import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "wouter";

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
  { label: "Sitio", href: "/", hasDropdown: false },
  { label: "Panel", href: "/dashboard", hasDropdown: false },
  { label: "Eventos", href: "/eventos", hasDropdown: false },
  { label: "Testimonios", href: "/testimonios", hasDropdown: false },
  { label: "Pregúntale a Neville", href: "/preguntale-a-neville", hasDropdown: false },
  {
    label: "Explorar",
    href: "#explore",
    hasDropdown: true,
    subItems: [
      { label: "Biblioteca", href: "/biblioteca", description: "Artículos y recursos" },
      { label: "Podcast", href: "#podcast", description: "Escucha a expertos" },
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
              <span className="text-white font-medium text-base tracking-[0.15em] uppercase cursor-pointer">
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
                  <Link
                    href={item.href}
                  >
                    <span className="group flex items-center gap-1.5 px-3 py-2 text-white text-[13px] font-medium tracking-wide hover:opacity-70 transition-opacity duration-300 cursor-pointer">
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 opacity-60 transition-all duration-300 ${activeDropdown === item.label ? "rotate-180 opacity-100" : ""
                            }`}
                        />
                      )}
                    </span>
                  </Link>

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
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                          >
                            <div className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                              <span className="text-white text-sm font-medium">
                                {subItem.label}
                              </span>
                              {subItem.description && (
                                <span className="text-white/50 text-[11px]">
                                  {subItem.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <button className="hidden md:flex items-center justify-center w-9 h-9 text-white hover:opacity-70 transition-opacity duration-300">
                <Search className="w-5 h-5" />
              </button>

              <button className="hidden md:flex items-center justify-center w-9 h-9 text-white hover:opacity-70 transition-opacity duration-300">
                <User className="w-5 h-5" />
              </button>

              <Link href="/dashboard">
                <span className="hidden md:inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-white bg-white hover:bg-white/90 text-black text-xs py-2.5 px-5 cursor-pointer">
                  Mi Cuenta
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 text-white z-[60]"
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[55] bg-black/95 backdrop-blur-md transition-all duration-500"
          style={{ top: '72px' }}
        >
          <div className="flex flex-col h-[calc(100vh-72px)] px-6 py-6 overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 last:border-none">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-4 text-white text-lg font-medium tracking-wide"
                        onClick={() => toggleMobileDropdown(item.label)}
                      >
                        <span className="flex items-center gap-2">{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 opacity-60 transition-transform duration-300 ${mobileActiveDropdown === item.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${mobileActiveDropdown === item.label
                          ? "max-h-96 opacity-100 mb-4"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="flex flex-col gap-4 pl-4 pb-2">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                            >
                              <span
                                className="block text-white/70 text-base font-medium hover:text-white transition-colors cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                    >
                      <span
                        className="flex items-center justify-between w-full py-4 text-white text-lg font-medium tracking-wide cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Link href="/dashboard">
                <span
                  className="flex items-center justify-center w-full gap-2 font-medium text-center tracking-wide rounded-full border border-white bg-white hover:bg-white/90 text-black text-base py-4 px-6 cursor-pointer"
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
