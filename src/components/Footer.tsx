import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050507] pt-16 border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Logo, Description, Social Media (Left Column, col-span-5) */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* Styled Emblem with CB centered */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 shadow-lg transition-all duration-300">
                {/* Amber/Red Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/15 via-transparent to-yellow-500/10 opacity-75 rounded-xl pointer-events-none"></div>
                
                {/* Monogram CB text perfectly centered */}
                <div className="relative flex items-baseline font-black text-[25px] tracking-tighter select-none z-10 leading-none">
                  <span className="text-red-600 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">C</span>
                  <span className="text-yellow-500 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ml-[0.5px]">B</span>
                </div>
              </div>

              {/* Logo Text */}
              <div className="flex flex-col select-none">
                <span className="text-[10px] tracking-[0.25em] font-medium text-gray-400 font-sans uppercase">
                  Cerrajería
                </span>
                <span className="text-lg font-bold tracking-wider text-yellow-500 uppercase font-display leading-tight">
                  Brandan
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-gray-300 text-sm leading-relaxed">
                Cerrajería de autos y casas.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rápidos, confiables y siempre disponibles.
              </p>
            </div>

            {/* Copyright inside the left section */}
            <p className="text-xs text-gray-500">
              &copy; 2026 Cerrajería Brandan. Todos los derechos reservados.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/people/Brandan-Cerrajeria/pfbid021BJNMLstGJoT4jhGqotJPCaokhZZ7WUtDhKLb8LHvtn6vC8oLptN6WZrNjKtfmpel/?mibextid=hIlR13" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/cerrajeria_brandan/" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5493515633345" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                {/* Custom styled WhatsApp SVG */}
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.258.389 2.422 1.055 3.383L6.155 18l2.693-.865c.91.564 1.986.896 3.143.896 3.314 0 6-2.686 6-6s-2.686-6-6-6zm3.791 8.52c-.15.421-.773.805-1.229.855-.383.042-.879.062-1.442-.119-.344-.111-.777-.282-1.29-.505-2.189-.95-3.606-3.18-3.716-3.327-.11-.147-.899-1.199-.899-2.288 0-1.09.569-1.625.772-1.84.155-.165.414-.247.662-.247.08 0 .155.004.223.007.2.009.3.02.431.282.165.331.568 1.385.617 1.485.049.1.082.215.016.347-.066.13-.1.215-.2.33-.099.115-.208.23-.297.33-.099.11-.202.23-.087.43.115.197.512.842 1.096 1.362.753.67 1.388.88 1.587.979.199.099.314.082.431-.05.115-.132.512-.596.645-.795.132-.198.265-.165.447-.099.183.066 1.159.546 1.357.645.199.099.331.149.38.231.049.083.049.48-.101.901z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Middle Column, col-span-3) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-yellow-500 font-bold text-sm tracking-widest uppercase font-display">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#por-que-elegirnos" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#opiniones" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Opiniones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Right Column, col-span-4) */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-yellow-500 font-bold text-sm tracking-widest uppercase font-display">
              Contacto
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:+5493515633345" 
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-red-500 transition-colors group"
              >
                <div className="text-zinc-500 group-hover:text-red-500 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-semibold text-gray-300">351 563 3345</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/5493515633345" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-emerald-500 transition-colors group"
              >
                <div className="text-zinc-500 group-hover:text-emerald-500 transition-colors">
                  {/* WhatsApp Custom SVG inline */}
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.258.389 2.422 1.055 3.383L6.155 18l2.693-.865c.91.564 1.986.896 3.143.896 3.314 0 6-2.686 6-6s-2.686-6-6-6zm3.791 8.52c-.15.421-.773.805-1.229.855-.383.042-.879.062-1.442-.119-.344-.111-.777-.282-1.29-.505-2.189-.95-3.606-3.18-3.716-3.327-.11-.147-.899-1.199-.899-2.288 0-1.09.569-1.625.772-1.84.155-.165.414-.247.662-.247.08 0 .155.004.223.007.2.009.3.02.431.282.165.331.568 1.385.617 1.485.049.1.082.215.016.347-.066.13-.1.215-.2.33-.099.115-.208.23-.297.33-.099.11-.202.23-.087.43.115.197.512.842 1.096 1.362.753.67 1.388.88 1.587.979.199.099.314.082.431-.05.115-.132.512-.596.645-.795.132-.198.265-.165.447-.099.183.066 1.159.546 1.357.645.199.099.331.149.38.231.049.083.049.48-.101.901z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-300">351 563 3345</span>
              </a>

              {/* Coverage Area */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="text-zinc-500 shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-300 font-semibold">Saul Moyano 145</span>
                  <span className="text-gray-400 text-xs">Centro, La Calera, Córdoba</span>
                  <span className="text-zinc-500 text-[11px] mt-0.5">De Mónica Brandan</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="text-zinc-500 shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <span className="text-gray-300 font-medium">Lunes a Sábados: 09:00 a 19:00 hs (Urgencias: llamar)</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: TU SEGURIDAD, NUESTRA PRIORIDAD | Confiá en profesionales... */}
      <div className="border-t border-zinc-900 bg-black/40 py-5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Side: Security Badge & Text */}
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="text-yellow-500">
              <ShieldCheck size={18} />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              TU SEGURIDAD, NUESTRA PRIORIDAD
            </span>
          </div>

          {/* Right Side: Trust slogan */}
          <div className="text-xs font-semibold text-gray-400 text-center md:text-right">
            Confiá en profesionales, confiá en <span className="text-yellow-500">Cerrajería Brandan.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
