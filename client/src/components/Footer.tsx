import { ChevronRight, ChevronDown } from "lucide-react";

/* ECDLI Footer - Estilo exacto del original
   - Fondo negro theme--dark
   - Logo ECDLI con tracking
   - Links organizados en columnas
   - Redes sociales circulares
   - Copyright
*/

const footerLinks = {
  column1: [
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Programs", href: "#programs" },
    { label: "Coaching", href: "#coaching" },
    { label: "Start now", href: "#start" },
  ],
  column2: [
    { label: "Documentary", href: "#documentary" },
    { label: "Podcast", href: "#podcast" },
    { label: "Biblioteca", href: null },
    { label: "Free resources", href: "#resources" },
    { label: "Shop all", href: "#shop" },
  ],
  column3: [
    { label: "Community", href: "#community" },
    { label: "Assessments", href: "#assessments" },
    { label: "Careers", href: "#careers" },
    { label: "Giving", href: "#giving" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "instagram", href: "#" },
  { name: "Facebook", icon: "facebook", href: "#" },
  { name: "X", icon: "x", href: "#" },
  { name: "TikTok", icon: "tiktok", href: "#" },
  { name: "YouTube", icon: "youtube", href: "#" },
  { name: "Spotify", icon: "spotify", href: "#" },
  { name: "LinkedIn", icon: "linkedin", href: "#" },
];

export default function Footer() {
  return (
    <footer className="theme--dark pt-16 pb-8">
      <div className="wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            {footerLinks.column1.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/60 text-sm font-medium py-2 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            {footerLinks.column2.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/60 text-sm font-medium py-2 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div>
            {footerLinks.column3.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/60 text-sm font-medium py-2 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <a
                href="#support"
                className="group flex items-center gap-1 text-white text-sm font-medium mb-2 hover:opacity-70 transition-opacity duration-300"
              >
                Customer Support
                <ChevronRight className="w-4 h-4 duration-300 group-hover:translate-x-1" />
              </a>
              <p className="text-white/40 text-xs font-medium">
                Contact Customer Support for questions on your products,
                coaching, or events.
              </p>
            </div>

            <div>
              <a
                href="#media"
                className="group flex items-center gap-1 text-white text-sm font-medium mb-2 hover:opacity-70 transition-opacity duration-300"
              >
                Media Inquiries
                <ChevronRight className="w-4 h-4 duration-300 group-hover:translate-x-1" />
              </a>
              <p className="text-white/40 text-xs font-medium">
                ECDLI Research International, Inc. has a dedicated media
                department. Members of the press are welcome to contact us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Language Selector */}
            <button className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-4 py-2.5 rounded-full hover:border-white/40 transition-colors duration-300">
              Español
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="#privacy"
                className="text-white/40 text-xs font-medium hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-white/40 text-xs font-medium hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-white/30 text-xs font-medium">
                © {new Date().getFullYear()} ECDLI. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <p className="text-white/20 text-xs font-medium mt-6 text-center md:text-left">
            9051 Mira Mesa Blvd P.O. Box 261229, San Diego, CA 92126
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    facebook: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    x: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    spotify: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4 fill-white/60" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
