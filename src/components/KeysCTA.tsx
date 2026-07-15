import React from 'react';
import { Phone, MapPin, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'motion/react';
import CTA_IMAGE from '../assets/images/llaves.png';

interface KeysCTAProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export default function KeysCTA({ onCallClick, onWhatsAppClick }: KeysCTAProps) {
  return (
    <div className="relative bg-[#0a0a0c] px-4 sm:px-6 lg:px-8 pb-16 pt-8 border-t border-zinc-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Main CTA Card with keys */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-zinc-950 border border-zinc-900 rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col justify-center"
        >
          {/* Top Red Accent Line for detailed premium feel */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            
            {/* Left: Text Information & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display tracking-tight mb-4">
                  ¿Necesitás un cerrajero ahora?
                </h2>
                <p className="text-yellow-500 text-lg sm:text-xl font-extrabold tracking-wide font-display">
                  Atendemos de lunes a sábados de 09 a 19 hs. Para urgencias, llamar.
                </p>
              </div>

              {/* Action Buttons arranged cleanly inside the left column */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {/* Call Button */}
                <button
                  onClick={onCallClick}
                  className="group relative w-full sm:flex-1 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-black py-4.5 px-6 rounded-2xl shadow-[0_4px_20px_rgba(185,28,28,0.25)] hover:shadow-[0_4px_25px_rgba(185,28,28,0.4)] transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={16} className="text-white fill-white animate-pulse" />
                  </div>
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-200">Lun a Sáb 09-19 hs | Urgencias llamar</span>
                    <span className="text-sm font-black uppercase mt-1">LLAMAR AHORA</span>
                  </div>
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={onWhatsAppClick}
                  className="group relative w-full sm:flex-1 bg-zinc-900/95 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-white font-black py-4.5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/10 shrink-0 group-hover:scale-110 transition-transform">
                    {/* WhatsApp Brand Custom Path SVG */}
                    <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.258.389 2.422 1.055 3.383L6.155 18l2.693-.865c.91.564 1.986.896 3.143.896 3.314 0 6-2.686 6-6s-2.686-6-6-6zm3.791 8.52c-.15.421-.773.805-1.229.855-.383.042-.879.062-1.442-.119-.344-.111-.777-.282-1.29-.505-2.189-.95-3.606-3.18-3.716-3.327-.11-.147-.899-1.199-.899-2.288 0-1.09.569-1.625.772-1.84.155-.165.414-.247.662-.247.08 0 .155.004.223.007.2.009.3.02.431.282.165.331.568 1.385.617 1.485.049.1.082.215.016.347-.066.13-.1.215-.2.33-.099.115-.208.23-.297.33-.099.11-.202.23-.087.43.115.197.512.842 1.096 1.362.753.67 1.388.88 1.587.979.199.099.314.082.431-.05.115-.132.512-.596.645-.795.132-.198.265-.165.447-.099.183.066 1.159.546 1.357.645.199.099.331.149.38.231.049.083.049.48-.101.901z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Respuesta rápida</span>
                    <span className="text-sm font-black uppercase mt-1">ESCRIBINOS POR WHATSAPP</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Solid 100% Opacity Keys Image Container */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative group overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900/30 p-2 shadow-2xl w-full max-w-[420px] lg:max-w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square flex items-center justify-center">
                {/* Red accent glowing effect in the background */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-500"></div>
                {/* Red outline detail around the container */}
                <div className="absolute inset-0 rounded-2xl border border-red-500/20 pointer-events-none group-hover:border-red-500/30 transition-colors duration-300"></div>
                <img
                  src={CTA_IMAGE}
                  alt="Llaves de cerrajería con llavero"
                  className="w-full h-full object-cover rounded-xl relative z-10 shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Footer Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-zinc-900">
          
          {/* Column 1 */}
          <div className="flex items-center gap-4 px-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="text-white font-black text-sm tracking-wide uppercase leading-none">
                LUNES A SÁBADOS
              </h4>
              <p className="text-gray-400 text-xs mt-1.5 leading-none">
                09:00 a 19:00 hs (Urgencias llamar)
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex items-center gap-4 px-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="text-white font-black text-sm tracking-wide uppercase leading-none">
                COBERTURA AMPLIA
              </h4>
              <p className="text-gray-400 text-xs mt-1.5 leading-none">
                Llegamos a donde estés
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex items-center gap-4 px-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="text-white font-black text-sm tracking-wide uppercase leading-none">
                PRESUPUESTO A MEDIDA
              </h4>
              <p className="text-gray-400 text-xs mt-1.5 leading-none">
                Te asesoramos sin compromiso
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
