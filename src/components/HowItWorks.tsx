import React from 'react';
import { Phone, Truck, KeyRound, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function HowItWorks() {
  const stepsList = [
    {
      step: 1,
      title: 'Llamás',
      description: 'Contactanos por llamada o WhatsApp. Contanos qué necesitás.',
      icon: Phone,
      color: 'border-red-500/30 text-red-500 shadow-red-500/5',
      badgeColor: 'bg-red-500 text-white',
    },
    {
      step: 2,
      title: 'Vamos a tu ubicación',
      description: 'Nos dirigimos rápidamente hasta donde estés.',
      icon: Truck,
      color: 'border-yellow-500/30 text-yellow-500 shadow-yellow-500/5',
      badgeColor: 'bg-yellow-500 text-black',
    },
    {
      step: 3,
      title: 'Solucionamos el problema',
      description: 'Resolvemos el inconveniente de forma segura, rápida y sin daños.',
      icon: KeyRound,
      color: 'border-red-500/30 text-red-500 shadow-red-500/5',
      badgeColor: 'bg-red-500 text-white',
    },
  ];

  return (
    <section id="como-funciona" className="relative bg-[#070709] py-16 lg:py-24 overflow-hidden border-t border-zinc-900/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-black text-red-500 tracking-[0.25em] uppercase mb-3">
            CÓMO FUNCIONA
          </span>
          <h2 className="text-[34px] sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-tight">
            Así de fácil, así de rápido.
          </h2>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          
          {stepsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="flex flex-col items-center relative group">
                
                {/* Arrow Connector for Desktop (only after step 1 and 2) */}
                {index < 2 && (
                  <div className="hidden md:flex absolute top-10 left-[62%] w-[76%] items-center justify-center text-zinc-800 z-0 pointer-events-none">
                    <ArrowRight size={24} className="stroke-[1.5]" />
                  </div>
                )}

                {/* Circle Container with absolute Badge */}
                <div className="relative mb-6 z-10">
                  {/* Step Badge */}
                  <div className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs z-20 shadow-md ${item.badgeColor}`}>
                    {item.step}
                  </div>

                  {/* Main Glowing Circle */}
                  <div className={`w-20 h-20 rounded-full border bg-[#0d0d11]/80 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 ${item.color}`}>
                    <Icon size={30} className={item.step === 3 ? 'rotate-[-45deg]' : ''} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-white font-display mb-3 text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs text-center font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

