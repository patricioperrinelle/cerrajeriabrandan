import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import TEAM_IMAGE from '../assets/images/equipo.png';

export default function Team() {
  return (
    <section id="equipo" className="relative bg-[#050507] py-16 lg:py-24 overflow-hidden border-t border-zinc-900/50">
      {/* Background radial glow for a high-end premium aesthetic */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content & Commitment Badge */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Tagline Badge */}
            <span className="text-xs sm:text-sm font-black text-red-500 tracking-[0.25em] uppercase mb-4">
              SOMOS CERRAJERÍA BRANDAN
            </span>
            
            {/* Main Animated Title */}
            <h2 className="text-[34px] sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] font-display mb-6 tracking-tight">
              Detrás de cada servicio, <br />
              <span className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                hay un equipo
              </span> <br />
              en el que podés confiar.
            </h2>
            
            {/* Supporting Paragraph */}
            <p className="text-gray-400 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              Somos cerrajeros profesionales con años de experiencia en aperturas, reparaciones e instalaciones. Nos capacitamos constantemente para brindarte siempre la mejor solución de manera eficiente y segura.
            </p>
            
            {/* Commitment Card (Compromiso que nos define) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md bg-zinc-950/40 border border-zinc-900/80 rounded-2xl p-6 flex gap-4 items-start relative overflow-hidden group hover:border-yellow-500/20 transition-all duration-300"
            >
              {/* Left Yellow Line Accent */}
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-yellow-500"></div>
              
              {/* Shield Icon container */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck size={22} className="drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]" />
              </div>
              
              {/* Card Details */}
              <div className="flex flex-col">
                <h3 className="text-white font-black text-base sm:text-lg font-display tracking-wide mb-1.5">
                  Compromiso que nos define
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No solo abrimos puertas, abrimos soluciones. Tu seguridad y la de tus seres queridos es nuestra máxima prioridad en cada tarea.
                </p>
              </div>
            </motion.div>

          </div>
          
          {/* Right Column: High Quality Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[550px] aspect-[4/3] sm:aspect-[16/11] lg:aspect-square rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl group">
              {/* Premium overlay gradients inside the image container to integrate with the layout */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {/* Red glow detail outline */}
              <div className="absolute inset-0 rounded-[32px] border border-red-500/10 pointer-events-none group-hover:border-red-500/20 transition-colors duration-300 z-20"></div>

              {/* The high-fidelity team image loaded from user assets */}
              <img
                src={TEAM_IMAGE}
                alt="Equipo de Cerrajería Brandan trabajando"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 select-none relative z-0"
                referrerPolicy="no-referrer"
              />

              {/* Decorative 24HS Urgencias badge over team image to match mockup feel if needed */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                Urgencias: Llamar
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
