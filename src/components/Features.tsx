import React from 'react';
import { Clock, Award, ShieldCheck, ThumbsUp, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import LOCKSMITH_IMAGE from '../assets/images/apertura-de-auto.png';

export default function Features() {
  const featuresList = [
    {
      id: 'llegamos',
      title: 'Llegamos rápido',
      description: 'Tiempo promedio de 15 a 30 minutos.',
      icon: Clock,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-500/10 border-red-500/20',
    },
    {
      id: 'tecnicos',
      title: 'Técnicos expertos',
      description: 'Profesionales capacitados y en constante formación.',
      icon: ShieldCheck,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10 border-yellow-500/20',
    },
    {
      id: 'equipamiento',
      title: 'Equipamiento premium',
      description: 'Trabajamos con herramientas de última generación.',
      icon: Lock,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-500/10 border-red-500/20',
    },
    {
      id: 'garantia',
      title: 'Garantía total',
      description: 'Todos nuestros trabajos tienen garantía.',
      icon: ThumbsUp,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10 border-yellow-500/20',
    },
  ];

  return (
    <section id="por-que-elegirnos" className="relative bg-[#0a0a0c] py-16 lg:py-24 overflow-hidden border-t border-zinc-900/40">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & List */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-black text-red-500 tracking-[0.25em] uppercase mb-4">
              POR QUÉ ELEGIRNOS
            </span>
            
            <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] font-display mb-5 tracking-tight">
              Más que un servicio, <br />
              <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                tu tranquilidad.
              </span>
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg font-normal leading-relaxed mb-10 max-w-xl">
              Combinamos experiencia, herramientas profesionales y compromiso para darte la mejor solución en el menor tiempo.
            </p>
            
            {/* Features List */}
            <div className="space-y-6 w-full">
              {featuresList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Circle Icon Wrapper */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border shrink-0 ${item.bgColor}`}>
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col">
                      <h3 className="text-white font-black text-base sm:text-lg font-display tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            {/* Image Card Container */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl group">
              {/* Overlay gradients to blend image smoothly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              
              <img
                src={LOCKSMITH_IMAGE}
                alt="Trabajo de cerrajería profesional"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-4 bg-black/90 backdrop-blur-md px-5 py-4 rounded-2xl border border-zinc-800/80 shadow-xl">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white uppercase tracking-wider leading-none">
                    Servicio 100% confiable
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium mt-1.5 leading-relaxed">
                    Cuidamos tu hogar y tu vehículo como si fueran nuestros.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

