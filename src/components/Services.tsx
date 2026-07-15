import React, { useState } from 'react';
import { Car, Home, Key, ArrowRight, ShieldCheck, Clock, CheckCircle2, Phone, X, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceItem } from '../types';

import IMAGE_CAR from '../assets/images/auto-mando.png';
import IMAGE_HOUSE from '../assets/images/service_house_1783759736677.jpg';
import IMAGE_LOCK from '../assets/images/cambio-cerradura.png';

interface ServicesProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export default function Services({ onCallClick, onWhatsAppClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  // Custom interactive estimator states
  const [urgency, setUrgency] = useState<'normal' | 'emergency'>('normal');
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');
  const [lockType, setLockType] = useState<string>('');
  
  const services: ServiceItem[] = [
    {
      id: 'vehiculos',
      title: 'Apertura de vehículos',
      description: 'Abrimos tu auto sin daños, sin importar la marca o el modelo.',
      longDescription: 'Ofrecemos un servicio especializado de apertura técnica de vehículos nacionales e importados. Contamos con herramientas de última generación (ganzúas Lishi y sistemas neumáticos) que nos permiten abrir cualquier vehículo sin afectar la pintura, los burletes ni los mecanismos internos de la cerradura.',
      image: IMAGE_CAR,
      color: 'red',
      icon: 'car',
      features: [
        'Apertura de baúl y habitáculo',
        'Herramientas Lishi de alta precisión',
        'Modelos nacionales e importados',
        'Sin roturas de vidrios ni rayas',
        'Recuperación de llaves olvidadas adentro'
      ],
      priceEst: '$25.000 - $45.000'
    },
    {
      id: 'viviendas',
      title: 'Apertura de viviendas',
      description: 'Ingresamos a tu hogar de forma segura y rápida.',
      longDescription: 'Realizamos aperturas de urgencia de todo tipo de puertas de entrada, rejas y portones. Priorizamos siempre los métodos de apertura no destructivos. Ya sea que hayas olvidado las llaves adentro, se hayan trabado o las hayas perdido, te damos acceso a tu hogar de inmediato.',
      image: IMAGE_HOUSE,
      color: 'yellow',
      icon: 'house',
      features: [
        'Puertas blindadas y comunes',
        'Métodos no destructivos siempre que sea posible',
        'Atención de urgencias en 20 minutos',
        'Cambio inmediato de combinación por seguridad',
        'Garantía total de satisfacción'
      ],
      priceEst: '$20.000 - $35.000'
    },
    {
      id: 'cerraduras',
      title: 'Cambio y reparación de cerraduras',
      description: 'Reparamos o cambiamos cerraduras de todo tipo.',
      longDescription: 'Instalamos, reparamos y cambiamos cerraduras de alta seguridad, cerrojos, cilindros y candados. Trabajamos con marcas líderes en el mercado para garantizar la máxima durabilidad y protección de tu propiedad.',
      image: IMAGE_LOCK,
      color: 'red',
      icon: 'key',
      features: [
        'Instalación de cerrojos adicionales',
        'Cambio de cilindros (Multipunto / Cruz)',
        'Cerraduras de consorcios y oficinas',
        'Marcas de primera línea (Trabex, Kallay, Star)',
        'Mantenimiento preventivo de cerraduras trabadas'
      ],
      priceEst: '$18.000 - $40.000'
    }
  ];

  // Logic to calculate estimated cost dynamically in the interactive modal
  const calculateEstimate = (baseRange: string) => {
    const baseMatch = baseRange.replace(/[^0-9-]/g, '').split('-');
    if (baseMatch.length < 2) return baseRange;
    let min = parseInt(baseMatch[0]);
    let max = parseInt(baseMatch[1]);

    if (urgency === 'emergency') {
      min += 10000;
      max += 15000;
    }
    if (timeOfDay === 'night') {
      min += 8000;
      max += 12000;
    }

    return `$${min.toLocaleString('es-AR')} - $${max.toLocaleString('es-AR')}`;
  };

  return (
    <section id="servicios" className="relative bg-[#070709] py-20 overflow-hidden">
      {/* Decorative Wave Red Separator Overlay on top of the section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-[#0a0a0c]">
          <path d="M1200 120L0 120 0 0C118.25 14.15 321.75 87.82 1200 0L1200 120z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-xs sm:text-sm font-black text-red-600 tracking-[0.25em] uppercase mb-3">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Soluciones para cada necesidad
          </h2>
          {/* Elegant Red underline bar */}
          <div className="w-16 h-1 bg-red-600 rounded-full mt-4"></div>
        </div>

        {/* 3 Cards Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#0c0c10] border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-zinc-800 transition-all duration-300"
              >
                <div>
                  {/* Service Image Container with Relative Badge Overlay */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient shadow inside image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Circular Floating Badge (overlapping the image bottom left) */}
                    <div className="absolute -bottom-6 left-6 z-20">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl border border-white/5 transition-transform duration-300 group-hover:scale-110 ${
                        service.color === 'yellow' 
                          ? 'bg-yellow-500 text-black drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]' 
                          : 'bg-red-700 text-white drop-shadow-[0_0_10px_rgba(185,28,28,0.4)]'
                      }`}>
                        {service.icon === 'car' && <Car size={22} />}
                        {service.icon === 'house' && <Home size={22} />}
                        {service.icon === 'key' && <Key size={22} />}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8 pt-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link / Button */}
                <div className="px-8 pb-8">
                  <button
                    onClick={() => setSelectedService(service)}
                    className={`inline-flex items-center gap-2 font-bold text-sm sm:text-base tracking-wide cursor-pointer focus:outline-none transition-all duration-300 hover:translate-x-1 ${
                      service.color === 'yellow' ? 'text-yellow-500 hover:text-yellow-400' : 'text-red-500 hover:text-red-400'
                    }`}
                  >
                    Saber más
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Interactive Estimator Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0d0d12] border border-zinc-800 rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X size={18} />
              </button>

              {/* Banner photo with overlay info */}
              <div className="relative h-48 w-full">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-black/40 to-black/10"></div>
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                      selectedService.color === 'yellow' ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
                    }`}>
                      Servicio Técnico Profesional
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Details & Live Estimate */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Descripción General</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                {/* Features list */}
                <div>
                  <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">¿Qué incluye este servicio?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 size={16} className={selectedService.color === 'yellow' ? 'text-yellow-500' : 'text-red-500'} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Cost Estimator Card */}
                <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base">Calculadora de Presupuesto Estimado</h4>
                      <p className="text-xs text-gray-400">Ajusta los factores para conocer el rango estimado.</p>
                    </div>
                    {/* Safety Alert icon */}
                    <div className="text-yellow-500/60 flex items-center gap-1 text-[11px] font-medium bg-yellow-500/5 px-2.5 py-1 rounded-full border border-yellow-500/10">
                      <AlertTriangle size={12} />
                      Sin sorpresas
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Factor 1: Urgencia */}
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Nivel de Urgencia</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setUrgency('normal')}
                          className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
                            urgency === 'normal'
                              ? 'bg-zinc-900 border-zinc-700 text-white'
                              : 'bg-transparent border-zinc-900 text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          Programado / Normal
                        </button>
                        <button
                          onClick={() => setUrgency('emergency')}
                          className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                            urgency === 'emergency'
                              ? 'bg-red-950/40 border-red-800/60 text-red-400'
                              : 'bg-transparent border-zinc-900 text-zinc-500 hover:text-red-400/60'
                          }`}
                        >
                          ⚡ Urgente (Ya mismo)
                        </button>
                      </div>
                    </div>

                    {/* Factor 2: Horario */}
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block">Horario del Servicio</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setTimeOfDay('day')}
                          className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
                            timeOfDay === 'day'
                              ? 'bg-zinc-900 border-zinc-700 text-white'
                              : 'bg-transparent border-zinc-900 text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          Diurno (08:00 - 20:00)
                        </button>
                        <button
                          onClick={() => setTimeOfDay('night')}
                          className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all ${
                            timeOfDay === 'night'
                              ? 'bg-yellow-950/30 border-yellow-800/40 text-yellow-500'
                              : 'bg-transparent border-zinc-900 text-zinc-500 hover:text-yellow-500/60'
                          }`}
                        >
                          🌙 Nocturno / Feriado
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Estimate Display */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                    <div className="text-center sm:text-left">
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Presupuesto Estimado Final</p>
                      <p className={`text-2xl sm:text-3xl font-black font-display mt-0.5 ${
                        selectedService.color === 'yellow' ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {calculateEstimate(selectedService.priceEst)}
                      </p>
                    </div>

                    {/* Action button in Modal */}
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        onCallClick();
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-sm tracking-wider uppercase shadow-lg transition-all"
                    >
                      <Phone size={16} />
                      Solicitar de Inmediato
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
