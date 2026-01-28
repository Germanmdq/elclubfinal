import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
  { label: "Inicio", href: "/", hasDropdown: false },
  { label: "Dashboard", href: "/dashboard", hasDropdown: false },
  { label: "Eventos", href: "/eventos", hasDropdown: false },
  { label: "Testimonios", href: "/testimonios", hasDropdown: false },
  { label: "Pregúntale a Neville", href: "/preguntale-a-neville", hasDropdown: false },
  {
    label: "Explorar",
    href: "#explore",
    hasDropdown: true,
    subItems: [
      { label: "Biblioteca", href: "/biblioteca", description: "Recursos" },
      { label: "Podcast", href: "#podcast", description: "Audio" },
    ],
  },
];

export default function Header() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/">
              <span className="text-white font-medium uppercase tracking-widest text-sm cursor-pointer">
                ECDLI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                >
                  <span className="text-white px-4 py-2 text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <span className="hidden md:flex bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors cursor-pointer">
                  Mi Cuenta
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white z-[60]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[55] bg-black/95 backdrop-blur-md"
          style={{ top: '72px' }}
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
                              }}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="flex w-full text-white text-lg font-medium py-4"
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
