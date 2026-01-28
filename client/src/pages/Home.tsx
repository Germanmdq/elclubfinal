import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsCarousel from "@/components/EventsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import PillarsSection from "@/components/PillarsSection";
import AboutSection from "@/components/AboutSection";
import CoachingSection from "@/components/CoachingSection";
import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";
import RegisterModal from "@/components/RegisterModal";

/* ECDLI Homepage
   Estructura exacta del sitio original:
   1. Header fijo transparente
   2. Hero Section con imagen de fondo
   3. Events Carousel
   4. Testimonials (fondo azul)
   5. Pillars Section (fondo blanco)
   6. About Section
   7. Coaching Section (fondo oscuro con naranja)
   8. Shop Section
   9. Footer
   + Modal de registro
*/

export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <HeroSection onOpenRegister={openRegisterModal} />
        <EventsCarousel />
        <TestimonialsSection />
        <PillarsSection />
        <AboutSection />
        <CoachingSection />
        <ShopSection />
      </main>
      <Footer />
      
      {/* Register Modal */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
    </div>
  );
}
