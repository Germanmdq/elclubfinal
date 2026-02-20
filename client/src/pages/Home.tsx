import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import DosisMentalesSection from "@/components/DosisMentalesSection";
import BibliotecaPreviewSection from "@/components/BibliotecaPreviewSection";
import NevilleAggiornatoSection from "@/components/NevilleAggiornatoSection";
import EventsCarousel from "@/components/EventsCarousel";
import ExplicacionesBiblicasSection from "@/components/ExplicacionesBiblicasSection";
import ResultsSection from "@/components/ResultsSection";
import ForoPreviewSection from "@/components/ForoPreviewSection";
import AboutSection from "@/components/AboutSection";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Header />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenRegister={() => setIsAuthModalOpen(true)} />

        {/* 2. Dosis Mentales */}
        <DosisMentalesSection />

        {/* 3. Biblioteca Preview */}
        <BibliotecaPreviewSection />

        {/* 4. Neville Aggiornato */}
        <NevilleAggiornatoSection />

        {/* 5. Eventos Carousel */}
        <EventsCarousel />

        {/* 6. Explicaciones Bíblicas */}
        <ExplicacionesBiblicasSection />

        {/* 7. Testimonios / Resultados */}
        <ResultsSection />

        {/* 8. Foro Preview */}
        <ForoPreviewSection />

        {/* 9. Sobre Nosotros */}
        <AboutSection />
      </main>

      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialView="register"
      />
    </div>
  );
}
