/* ECDLI CTA Section
   - "Ready to live an extraordinary life?" heading
   - Dark background with image
   - "Learn more" button
*/

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-speaker.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-4">
          Ready to live an
          <br />
          extraordinary life?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Now is your time. Connect with us to learn more.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-white text-black text-sm font-semibold px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
