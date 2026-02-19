import { Play, ChevronRight } from "lucide-react";

/* ECDLI About Section - Estilo exacto del original
   - Fondo claro
   - Título grande con tracking-tighter
   - Imagen con video overlay
   - Logos de medios
*/

const featuredLogos = [
  { name: "Forbes", text: "Forbes" },
  { name: "Fortune", text: "FORTUNE" },
  { name: "Inc", text: "Inc." },
  { name: "Success", text: "SUCCESS" },
];

export default function AboutSection() {
  return (
    <section className="theme--light py-16 md:py-24">
      <div className="wrapper">
        {/* Main Heading */}
        <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          Do you have a hunger to increase the quality of your life?
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Photo with Video */}
          <div className="space-y-8">
            {/* Main Image with Play Button */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative h-[350px] md:h-[450px]">
                <img
                  src="/images/business-meeting.jpg"
                  alt="ECDLI"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              </div>
            </div>

            {/* Featured In */}
            <div>
              <p className="text-black/50 text-sm font-medium mb-4">Featured in:</p>
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {featuredLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className="text-black/40 text-xl md:text-2xl font-black uppercase tracking-widest"
                  >
                    {logo.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <p className="text-black/70 text-base md:text-lg leading-relaxed font-medium">
              We believe progress equals happiness. And no matter where you're
              looking to excel, we're here to help you forge your pathway to
              power. Meet the man who's spent over 45 years creating
              breakthroughs and transforming lives.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 bg-black hover:bg-black/80 text-white text-sm py-4 px-8"
              >
                Meet ECDLI
              </a>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
