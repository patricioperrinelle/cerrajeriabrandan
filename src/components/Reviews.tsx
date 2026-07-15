import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 't-1',
      name: 'Martín G.',
      service: 'Apertura de vehículo',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
      comment: '“Se me quedó la llave adentro del auto y en menos de 20 minutos ya estaban solucionándolo. Excelente atención y súper profesionales.”',
    },
    {
      id: 't-2',
      name: 'Laura M.',
      service: 'Apertura de vivienda',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
      comment: '“Excelente servicio. Cambiaron la cerradura de mi casa súper rápido. Recomiendo 100% por su honestidad y profesionalismo en todos los detalles.”',
    },
    {
      id: 't-3',
      name: 'Roberto R.',
      service: 'Apertura y reparación',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      comment: '“Muy buena atención y rapidez. Un servicio excelente que da la confianza que uno busca en momentos de urgencia. Cuidaron la cerradura y la puerta.”',
    },
    {
      id: 't-4',
      name: 'Sofía T.',
      service: 'Copia de llave codificada',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face',
      comment: '“Llamé para hacer un duplicado de la llave con chip de mi auto. En otros lados me daban mil vueltas y cobraban una fortuna. Acá lo hicieron en el acto, con equipamiento de primera y a precio súper justo.”',
    },
    {
      id: 't-5',
      name: 'Daniel O.',
      service: 'Urgencia (Llamar)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      comment: '“Se nos trabó la persiana del local antes de abrir bien temprano. Vinieron volando, abrieron sin romper nada y nos salvaron el día de trabajo. Excelente predisposición y amabilidad. Agendados para siempre.”',
    },
    {
      id: 't-6',
      name: 'María José F.',
      service: 'Cambio de cerradura de seguridad',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face',
      comment: '“Perdí la cartera con las llaves de casa y estaba aterrada. Vinieron rapidísimo, me explicaron todas las opciones y cambiaron el tambor al instante. Me transmitieron muchísima tranquilidad y confianza.”',
    },
    {
      id: 't-7',
      name: 'Carlos B.',
      service: 'Apertura de caja fuerte',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face',
      comment: '“Trabajo impecable. Necesitábamos abrir una caja fuerte antigua en la oficina sin dañarla y lo lograron con una precisión increíble. Se nota que conocen el oficio a la perfección y son personas de total confianza.”',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="opiniones" className="relative bg-[#0a0a0c] py-16 lg:py-24 overflow-hidden border-t border-zinc-900/40">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="text-xs sm:text-sm font-black text-red-500 tracking-[0.25em] uppercase mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </span>
          <h2 className="text-[34px] sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-none mb-4">
            Opiniones reales
          </h2>
          <div className="w-16 h-0.5 bg-red-600 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-visible py-8 flex flex-col items-center">
          
          {/* Main Slide Deck View */}
          <div className="relative w-full flex items-center justify-center h-[380px] xs:h-[320px] sm:h-[300px] md:h-[250px] max-w-5xl overflow-visible">
            
            <AnimatePresence mode="popLayout">
              {testimonials.map((item, index) => {
                // Determine position: center, left (previous), right (next)
                let position = 'hidden';
                const diff = (index - activeIndex + testimonials.length) % testimonials.length;
                
                if (diff === 0) {
                  position = 'center';
                } else if (diff === 1 || (diff === testimonials.length - 1 && testimonials.length === 2)) {
                  position = 'right';
                } else if (diff === testimonials.length - 1) {
                  position = 'left';
                }
 
                if (position === 'hidden') return null;
 
                const isCenter = position === 'center';
                const isLeft = position === 'left';
                const isRight = position === 'right';
 
                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: isLeft ? -300 : isRight ? 300 : 0,
                      zIndex: isCenter ? 30 : 10,
                    }}
                    animate={{
                      opacity: isCenter ? 1 : 0.25,
                      scale: isCenter ? 1 : 0.85,
                      x: isLeft ? -220 : isRight ? 220 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                      zIndex: isCenter ? 30 : 10,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      zIndex: 10,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                    onClick={() => {
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                    className={`absolute w-[90%] sm:w-[520px] h-full bg-[#0c0c10] border border-zinc-900 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-colors duration-300 ${
                      isCenter ? 'border-zinc-800 bg-[#0d0d12]' : 'cursor-pointer hover:bg-zinc-900/40'
                    }`}
                  >
                    <div>
                      {/* Rating Stars (Centered on design) */}
                      <div className="flex gap-1 mb-5 text-yellow-500 justify-start">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>

                      {/* Comment Quote */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium italic text-left mb-6">
                        {item.comment}
                      </p>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center gap-3 border-t border-zinc-900/80 pt-4 mt-auto">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-zinc-800"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col text-left">
                        <h4 className="text-white font-black text-sm tracking-wide leading-none">
                          {item.name}
                        </h4>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1.5 leading-none">
                          {item.service}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-2.5 mt-8 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'bg-red-500 w-6' : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
                aria-label={`Ir a opinión ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

