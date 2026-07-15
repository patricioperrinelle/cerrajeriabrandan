import React from 'react';
import { Phone, ShieldCheck, Lock, CreditCard, Headphones, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export default function CTA({ onCallClick, onWhatsAppClick }: CTAProps) {
  return (
    <div className="relative bg-[#070709] px-4 sm:px-6 lg:px-8 pb-16 pt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 4 Guarantees Grid (Top part from the design) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 border border-zinc-900 bg-zinc-950/20 rounded-[24px] p-6 sm:p-8"
        >
          {/* Guarantee 1 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="mb-4 p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-white font-extrabold text-base tracking-tight font-display mb-2">
              Trabajo garantizado
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Todos nuestros servicios tienen garantía.
            </p>
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-zinc-900"></div>
          </div>

          {/* Guarantee 2 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="mb-4 p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 group-hover:scale-105 transition-transform duration-300">
              <Lock size={24} />
            </div>
            <h4 className="text-white font-extrabold text-base tracking-tight font-display mb-2">
              Repuestos originales
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Utilizamos productos de primeras marcas.
            </p>
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-zinc-900"></div>
          </div>

          {/* Guarantee 3 */}
          <div className="flex flex-col items-center text-center p-4 relative group">
            <div className="mb-4 p-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 group-hover:scale-105 transition-transform duration-300">
              <CreditCard size={24} />
            </div>
            <h4 className="text-white font-extrabold text-base tracking-tight font-display mb-2">
              Precios justos
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Presupuestos claros y sin costos ocultos.
            </p>
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-zinc-900"></div>
          </div>

          {/* Guarantee 4 */}
          <div className="flex flex-col items-center text-center p-4 group">
            <div className="mb-4 p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 group-hover:scale-105 transition-transform duration-300">
              <Headphones size={24} />
            </div>
            <h4 className="text-white font-extrabold text-base tracking-tight font-display mb-2">
              Atención personalizada
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Te asesoramos según tu necesidad.
            </p>
          </div>
        </motion.div>

        {/* Main CTA Card: "Estamos listos para ayudarte" */}
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
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
              
              {/* Emergencias 24 Horas Tag with yellow clock icon */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-black uppercase tracking-widest text-red-400">
                  Urgencias: Llamar
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display tracking-tight mb-4">
                  Estamos listos <br className="hidden sm:inline" />
                  para <span className="text-yellow-500">ayudarte.</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
                  No importa la hora ni el lugar, llegamos rápido y solucionamos.
                </p>
              </div>

              {/* Action Buttons arranged cleanly inside the left column */}
              <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
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
                  className="group relative w-full sm:flex-1 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-white font-black py-4.5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-center"
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

              {/* Tiempo de llegada indicator */}
              <div className="flex items-center gap-2 mt-2 text-zinc-400 text-sm font-medium">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span>Tiempo de llegada promedio: 15 a 30 minutos</span>
              </div>

            </div>

            {/* Right: Custom animated pulsing neon map visual */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="relative group overflow-hidden rounded-3xl border border-zinc-900 bg-black p-2.5 shadow-2xl w-full max-w-[420px] lg:max-w-full aspect-square flex items-center justify-center">
                
                {/* Outer premium red glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-yellow-500 opacity-15 blur-2xl group-hover:opacity-25 transition duration-500"></div>
                {/* Outer container border highlights */}
                <div className="absolute inset-0 rounded-3xl border border-red-500/10 pointer-events-none group-hover:border-red-500/25 transition-colors duration-300"></div>
                
                {/* Map Inner Wrapper with Deep Sunken Effect (Efecto Hundido) */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#030305] flex items-center justify-center border border-black shadow-[inset_0_10px_30px_rgba(0,0,0,0.95)]">
                  
                  {/* Deep Sunken Radial Shadow Overlays (Vignette) */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305] opacity-90 pointer-events-none z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030305] via-transparent to-[#030305] opacity-90 pointer-events-none z-20"></div>

                  {/* Dynamic perspective background grid */}
                  <div 
                    className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(239, 68, 68, 0.15) 1.5px, transparent 1.5px),
                        linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1.5px, transparent 1.5px)
                      `,
                      backgroundSize: '20px 20px',
                      transform: 'perspective(300px) rotateX(62deg) translateY(-80px) scale(2.2)',
                      transformOrigin: 'center top',
                    }}
                  />
                  
                  {/* High fidelity 3D vector map elements */}
                  <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="neon-glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="blur1" />
                        <feGaussianBlur stdDeviation="3" result="blur2" />
                        <feMerge>
                          <feMergeNode in="blur1" />
                          <feMergeNode in="blur2" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="5" result="blur" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.8 0"/>
                      </filter>

                      <linearGradient id="pin-gradient-3d" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#991b1b" />
                      </linearGradient>

                      <linearGradient id="road-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(239, 68, 68, 0.05)" />
                        <stop offset="50%" stopColor="rgba(239, 68, 68, 0.4)" />
                        <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
                      </linearGradient>
                    </defs>

                    {/* Concentric Isometric Coverage rings centered at (250, 290) */}
                    <ellipse cx="250" cy="290" rx="90" ry="40" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1.5" />
                    <ellipse cx="250" cy="290" rx="180" ry="80" stroke="rgba(239, 68, 68, 0.12)" strokeWidth="1.5" strokeDasharray="6,4" />
                    <ellipse cx="250" cy="290" rx="280" ry="125" stroke="rgba(239, 68, 68, 0.06)" strokeWidth="1" />
                    <ellipse cx="250" cy="290" rx="380" ry="170" stroke="rgba(239, 68, 68, 0.03)" strokeWidth="1" />

                    {/* Radial lines representing service sectors */}
                    <line x1="250" y1="290" x2="70" y2="210" stroke="rgba(239, 68, 68, 0.05)" strokeWidth="1" />
                    <line x1="250" y1="290" x2="430" y2="370" stroke="rgba(239, 68, 68, 0.05)" strokeWidth="1" />
                    <line x1="250" y1="290" x2="70" y2="370" stroke="rgba(239, 68, 68, 0.05)" strokeWidth="1" />
                    <line x1="250" y1="290" x2="430" y2="210" stroke="rgba(239, 68, 68, 0.05)" strokeWidth="1" />

                    {/* Highly stylized 3D perspective roads */}
                    <path d="M -50,420 L 550,220" stroke="url(#road-gradient)" strokeWidth="4" />
                    <path d="M -50,220 L 550,420" stroke="url(#road-gradient)" strokeWidth="4" />
                    <path d="M 250,-50 L 250,550" stroke="url(#road-gradient)" strokeWidth="4" />

                    {/* Side/Cross Streets */}
                    <path d="M 120,550 L 120,-50" stroke="rgba(239, 68, 68, 0.08)" strokeWidth="2.5" />
                    <path d="M 380,550 L 380,-50" stroke="rgba(239, 68, 68, 0.08)" strokeWidth="2.5" />
                    <path d="M -50,130 L 550,130" stroke="rgba(239, 68, 68, 0.05)" strokeWidth="2.5" />
                    <path d="M -50,330 L 550,330" stroke="rgba(239, 68, 68, 0.08)" strokeWidth="2.5" />

                    {/* Active Dispatch Pulse Path (Moving locksmith unit) */}
                    <path 
                      d="M 120,440 L 250,290" 
                      stroke="#ef4444" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                      strokeDasharray="20, 180" 
                      filter="url(#neon-glow-strong)"
                    >
                      <animate 
                        attributeName="strokeDashoffset" 
                        values="200;0" 
                        dur="2.5s" 
                        repeatCount="indefinite" 
                      />
                    </path>

                    {/* Secondary active mobile units on patrol (Conector con la idea del Equipo) */}
                    {/* Movil 1 */}
                    <g transform="translate(120, 130)">
                      <circle cx="0" cy="0" r="3" fill="#10b981" />
                      <circle cx="0" cy="0" r="8" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" fill="none">
                        <animate attributeName="r" values="3;12" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Movil 2 */}
                    <g transform="translate(380, 330)">
                      <circle cx="0" cy="0" r="3" fill="#f59e0b" />
                      <circle cx="0" cy="0" r="8" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" fill="none">
                        <animate attributeName="r" values="3;12" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* MAIN EMERGENCY DISPATCH LOCATION TARGET (Center of perspective) */}
                    <g transform="translate(250, 290)">
                      
                      {/* Pulse sonar rings on the floor with true 3D isometric flat perspective */}
                      <ellipse cx="0" cy="0" rx="12" ry="5" stroke="#ef4444" strokeWidth="2" fill="none">
                        <animate attributeName="rx" values="6;60" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="ry" values="2.5;25" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite" />
                      </ellipse>
                      
                      <ellipse cx="0" cy="0" rx="12" ry="5" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,2" fill="none">
                        <animate attributeName="rx" values="6;110" dur="3s" begin="1.5s" repeatCount="indefinite" />
                        <animate attributeName="ry" values="2.5;45" dur="3s" begin="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                      </ellipse>

                      {/* Hard ground shadow under the floating pin */}
                      <ellipse cx="0" cy="0" rx="18" ry="7.5" fill="black" opacity="0.65" filter="url(#shadow)" />
                      
                      {/* Precise pinpoint coordinate core */}
                      <ellipse cx="0" cy="0" rx="5" ry="2.2" fill="#ef4444" />
                      <ellipse cx="0" cy="0" rx="2" ry="0.9" fill="white" />

                      {/* Vertical depth laser projection line to connect ground coordinate with floating pin */}
                      <line x1="0" y1="0" x2="0" y2="-75" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.8" />

                      {/* GENTLY FLOATING 3D PIN BLOCK */}
                      <g>
                        <animateTransform 
                          attributeName="transform" 
                          type="translate" 
                          values="0,-75; 0,-83; 0,-75" 
                          dur="3.5s" 
                          repeatCount="indefinite" 
                        />
                        
                        {/* Shaded 3D Pin Outline & Body */}
                        <path 
                          d="M 0,-34 C -14,-34 -24,-24 -24,-10 C -24,4 0,22 0,22 C 0,22 24,4 24,-10 C 24,-24 14,-34 0,-34 Z" 
                          fill="url(#pin-gradient-3d)" 
                          filter="url(#neon-glow-strong)"
                        />
                        
                        {/* Shiny inner circle with white core */}
                        <circle cx="0" cy="-10" r="8" fill="#030305" />
                        <circle cx="0" cy="-10" r="4.5" fill="#ef4444" />
                        <circle cx="0" cy="-10" r="1.5" fill="white" />
                      </g>
                    </g>
                  </svg>

                  {/* Top Header Card Inside the Map for real-world high fidelity feel */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-800/85">
                    <span className="text-[9px] font-black tracking-widest text-red-500 uppercase leading-none">
                      Despacho Activo
                    </span>
                    <span className="text-[11px] font-bold text-gray-200 leading-none mt-0.5">
                      Unidad móvil en camino
                    </span>
                  </div>

                  {/* Bottom coordinates badge inside map */}
                  <div className="absolute bottom-4 right-4 z-20 bg-black/85 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-zinc-850">
                    <span className="font-mono text-[9px] font-semibold text-zinc-400 tracking-wider">
                      LAT: -34.5997 | LON: -58.4231
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

