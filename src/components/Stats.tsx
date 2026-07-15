import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    {
      id: 'experiencia',
      value: '+10 AÑOS',
      label: 'de experiencia',
      icon: Award,
    },
    {
      id: 'satisfechos',
      value: '100%',
      label: 'clientes satisfechos',
      icon: Users,
    },
    {
      id: 'disponibles',
      value: '09-19 HS',
      label: 'Lun a Sáb (Urgencias llamar)',
      icon: Clock,
    },
    {
      id: 'realizados',
      value: '+2.500',
      label: 'servicios realizados',
      icon: Star,
    },
  ];

  return (
    <section id="por-que-elegirnos" className="relative bg-[#070709] px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-950/40 border border-zinc-900 rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold spotlight glow from the bottom */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-yellow-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Heading */}
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-black text-yellow-500 tracking-[0.25em] uppercase">
              Confianza que se construye
            </span>
          </div>

          {/* Grid list of stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center text-center p-4 group"
                >
                  {/* Icon */}
                  <div className="mb-4 p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-yellow-500 group-hover:text-white group-hover:border-yellow-500/20 transition-all duration-300">
                    <Icon size={24} />
                  </div>

                  {/* Value */}
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-1">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span className="text-sm text-gray-400 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
