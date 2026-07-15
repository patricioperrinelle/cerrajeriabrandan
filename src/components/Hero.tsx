import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, ShieldCheck, Lock, Headphones, MapPin, X, ExternalLink, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HERO_IMAGE from '../assets/images/hombre_abriendo_la_puerta.png';

interface HeroProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export default function Hero({ onCallClick, onWhatsAppClick }: HeroProps) {
  const [mapModalOpen, setMapModalOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[#0a0a0c] pt-4 pb-16 lg:py-24">
      {/* Background Gradients for Atmosphere */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Seamless Sunken Hero Image (Mobile: top banner / Desktop: right absolute column) */}
      <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-[55%] h-[400px] xs:h-[460px] sm:h-[520px] lg:h-full z-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Cerrajero profesional Cerrajería Brandan"
          className="w-full h-full object-cover object-[center_35%] lg:object-[60%_center] opacity-80 lg:opacity-95 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to seamlessly blend/sink the image into the black page background */}
        
        {/* Left Side Fade (Blends with left screen content/desktop text area) */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 lg:via-[#0a0a0c]/85 to-transparent"></div>
        
        {/* Right Side Fade */}
        <div className="absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-[#0a0a0c] to-transparent"></div>
        
        {/* Bottom Side Fade (Crucial on mobile to blend with text content below) */}
        <div className="absolute inset-x-0 bottom-0 h-[25%] lg:h-[30%] bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent"></div>
        
        {/* Top Side Fade (Blends with header) */}
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#0a0a0c] via-transparent to-transparent"></div>
        
        {/* Active Locksmith Badge - Placed floating on top of the image */}
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2.5 bg-black/85 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-zinc-800/60 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="flex flex-col">
            <span className="text-[11px] font-black text-white uppercase tracking-wider leading-none">
              Cerrajero Activo
            </span>
            <span className="text-[9px] text-gray-400 font-medium mt-1 leading-none">
              La Calera, Córdoba y alrededores
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text & CTAs (Slight negative margin on mobile to tuck under the image's bottom fade) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left mt-4 lg:mt-0 relative z-10">
            
            {/* 24-Hour Attention Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/35 text-red-400 font-bold tracking-wider text-xs mb-5 sm:mb-6 uppercase"
            >
              <Clock size={14} className="animate-pulse" />
              Atención 24 Horas
            </motion.div>

            {/* Main Punchy Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[34px] sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] font-display"
            >
              La seguridad <br />
              de tu hogar <br />
              y tu auto, <br />
              <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.25)]">
                en buenas manos.
              </span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed"
            >
              Cerrajería de autos y casas. Llegamos rápido, solucionamos sin dañar y te damos tranquilidad.
            </motion.p>

            {/* Large Interactive CTA Cards */}
            <div className="mt-8 w-full max-w-md flex flex-col gap-4">
              
              {/* Red Solid Calling CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCallClick}
                className="w-full flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 border border-red-600/30 text-white text-left shadow-xl shadow-red-950/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone size={28} className="text-white fill-white animate-bounce" />
                </div>
                <div>
                  <h3 className="font-black text-lg sm:text-xl tracking-wider leading-tight uppercase font-display">
                    LLAMAR AHORA
                  </h3>
                  <p className="text-xs sm:text-sm text-red-100 font-medium opacity-90 mt-0.5">
                    Respuesta inmediata
                  </p>
                </div>
              </motion.button>

              {/* Black Outlined/Filled WhatsApp CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onWhatsAppClick}
                className="w-full flex items-center gap-5 p-4 rounded-2xl bg-zinc-950/50 backdrop-blur-md hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-white text-left shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                  {/* WhatsApp SVG path */}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 fill-emerald-500 text-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.366 2.012 13.9 1.01 11.998 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.881l-.994 3.63 3.771-.98-.215-.34z" />
                    <path d="M17.487 14.39c-.314-.157-1.857-.915-2.142-1.018-.287-.105-.496-.157-.705.157-.21.314-.81.101-.994 1.21-.184.21-.368.21-.682.053-.314-.157-1.327-.489-2.528-1.562-.93-.83-1.558-1.854-1.74-2.17-.184-.314-.02-.483.137-.64.142-.142.314-.368.47-.55.157-.185.21-.314.314-.524.105-.21.053-.393-.026-.55-.08-.157-.705-1.701-.967-2.33-.254-.61-.515-.526-.705-.536-.184-.01-.393-.01-.602-.01s-.55.08-.838.393c-.287.314-1.1 1.074-1.1 2.619s1.127 3.038 1.284 3.248c.157.21 2.219 3.39 5.377 4.754.75.324 1.337.519 1.795.665.753.24 1.439.206 1.98.125.603-.09 1.857-.759 2.12-1.467.261-.707.261-1.31.184-1.436-.08-.126-.287-.21-.602-.367z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-lg sm:text-xl tracking-wider leading-tight uppercase font-display">
                    ESCRIBINOS POR WHATSAPP
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">
                    Atención rápida
                  </p>
                </div>
              </motion.button>

              {/* Map Preview Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setMapModalOpen(true)}
                className="w-full flex flex-col rounded-2xl bg-zinc-950/40 backdrop-blur-md border border-zinc-900/85 hover:border-zinc-800 text-white text-left shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group mt-1"
              >
                {/* Embedded miniature map with a premium dark mask */}
                <div className="relative h-28 w-full overflow-hidden bg-zinc-900 select-none">
                  <iframe
                    title="Cerrajería Brandan Ubicación"
                    src="https://maps.google.com/maps?q=Saul%20Moyano%20145,%20La%20Calera,%20C%C3%B3rdoba&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.95)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    className="pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent" />
                  
                  {/* Glowing dot representing the shop location */}
                  <div className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-red-500/30 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-white/20"></span>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-4 flex items-center justify-between gap-3 bg-[#0d0d12]/90 border-t border-zinc-900/60">
                  <div className="flex items-start gap-2.5">
                    <div className="text-red-500 mt-0.5 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white uppercase tracking-wider leading-none">
                        Nuestra Ubicación
                      </h4>
                      <p className="text-[11px] text-gray-400 font-medium mt-1.5 leading-none">
                        Saul Moyano 145, Centro, La Calera
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-1 shrink-0 bg-zinc-900/80 px-2.5 py-1.5 rounded-lg border border-zinc-800">
                    Ver Mapa
                  </span>
                </div>
              </motion.div>
              
            </div>
          </div>
          
        </div>

        {/* 4-Item Feature Bar with Top Red Accent Line */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative bg-[#0d0d12] border border-zinc-900 rounded-[24px] shadow-2xl overflow-hidden mt-16 lg:mt-24"
        >
          {/* Detailed Red Accent Line at the very top of the card */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

          {/* Grid Container for the 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900">
            {/* Item 1 */}
            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.01] transition-colors duration-300">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shrink-0">
                <Clock className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-black text-sm tracking-wide uppercase font-display">
                  Llegada Rápida
                </span>
                <span className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                  Tiempo estimado: 15 a 30 minutos.
                </span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.01] transition-colors duration-300">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 shrink-0">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-black text-sm tracking-wide uppercase font-display">
                  Trabajo Garantizado
                </span>
                <span className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                  Garantía de calidad en cada servicio.
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.01] transition-colors duration-300">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 shrink-0">
                <Lock className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-black text-sm tracking-wide uppercase font-display">
                  Apertura Sin Daño
                </span>
                <span className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                  Abrimos sin romper, cuidamos lo tuyo.
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="p-6 flex items-start gap-4 hover:bg-white/[0.01] transition-colors duration-300">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 shrink-0">
                <Headphones className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-black text-sm tracking-wide uppercase font-display">
                  Lun a Sáb: 09 a 19 hs
                </span>
                <span className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                  Urgencias: llamar
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Google Maps Modal */}
      <AnimatePresence>
        {mapModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMapModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-[#0c0c10] border border-zinc-800 rounded-[28px] overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-zinc-900 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center">
                    <MapPin size={20} className="animate-pulse" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-black text-base text-white uppercase tracking-wider font-display">
                      Cerrajería Brandan
                    </h3>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      Saul Moyano 145, Centro, La Calera, Córdoba
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMapModalOpen(false)}
                  className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-zinc-750 hover:bg-zinc-900 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Large Interactive Map Section */}
              <div className="h-[300px] sm:h-[380px] w-full bg-zinc-950 relative">
                <iframe
                  title="Cerrajería Brandan Ubicación Completa"
                  src="https://maps.google.com/maps?q=Saul%20Moyano%20145,%20La%20Calera,%20C%C3%B3rdoba&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-full h-full opacity-90"
                />
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-zinc-900 bg-[#0d0d12] flex flex-col sm:flex-row items-center gap-4 justify-between">
                <span className="text-xs text-gray-500 font-medium text-left sm:max-w-xs leading-normal">
                  Hacé clic en los botones para abrir tu aplicación de mapas favorita y obtener indicaciones de navegación.
                </span>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Saul+Moyano+145,+La+Calera,+C%C3%B3rdoba"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold text-xs tracking-wider uppercase transition-all duration-200"
                  >
                    <Navigation size={14} />
                    Cómo llegar
                  </a>
                  
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Saul+Moyano+145,+La+Calera,+C%C3%B3rdoba"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-gray-200 font-bold text-xs tracking-wider uppercase transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
