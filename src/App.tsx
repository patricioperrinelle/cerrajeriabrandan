import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Features from './components/Features';
import Team from './components/Team';
import Brands from './components/Brands';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import KeysCTA from './components/KeysCTA';
import CTA from './components/CTA';
import Footer from './components/Footer';
import EmergencyModal from './components/EmergencyModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'call' | 'whatsapp'>('call');

  const handleCallClick = () => {
    window.location.href = 'tel:+5493515633345';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5493515633345?text=Hola%20Cerrajer%C3%ADa%20Brandan%2C%20necesito%20asistencia%20urgente.', '_blank');
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#070709] text-gray-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-white overflow-x-hidden antialiased">
      {/* Header */}
      <Header onCallClick={handleCallClick} onWhatsAppClick={handleWhatsAppClick} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* ==================== PARTE 1 ==================== */}
        {/* Hero Section */}
        <Hero onCallClick={handleCallClick} onWhatsAppClick={handleWhatsAppClick} />

        {/* Services Section */}
        <Services onCallClick={handleCallClick} onWhatsAppClick={handleWhatsAppClick} />

        {/* Confianza que se construye Section */}
        <Stats />

        {/* ==================== PARTE 2 ==================== */}
        {/* Por Qué Elegirnos Section */}
        <Features />

        {/* Cómo Funciona Section */}
        <HowItWorks />

        {/* Opiniones Reales Section */}
        <Reviews />

        {/* Keys and Keychain CTA (Fin de Parte 2) */}
        <KeysCTA onCallClick={handleCallClick} onWhatsAppClick={handleWhatsAppClick} />

        {/* ==================== PARTE 3 ==================== */}
        {/* Detrás de cada servicio hay un equipo Section */}
        <Team />

        {/* Marcas en las que trabajamos Section */}
        <Brands />

        {/* Final Emergency Map CTA Section */}
        <CTA onCallClick={handleCallClick} onWhatsAppClick={handleWhatsAppClick} />

      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Dispatch Emergency Modal */}
      <EmergencyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
      />
    </div>
  );
}
