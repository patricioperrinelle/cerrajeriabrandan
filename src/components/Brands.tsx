import React from 'react';
import { motion } from 'motion/react';

export default function Brands() {
  const brandsList = [
    { name: 'KALLAY', desc: 'Cerraduras de seguridad' },
    { name: 'TRABEX', desc: 'Sistemas de alta precisión' },
    { name: 'PRIVE', desc: 'Trabas y cerrojos' },
    { name: 'CISA', desc: 'Tecnología europea' },
    { name: 'YALE', desc: 'Líder global en seguridad' },
    { name: 'PHILLIPS', desc: 'Cerraduras y candados' }
  ];

  return (
    <section className="bg-black py-16 border-t border-zinc-900/50 relative overflow-hidden">
      {/* Background soft lighting details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center flex flex-col items-center mb-10">
          <span className="text-xs sm:text-sm font-black text-red-500 tracking-[0.25em] uppercase mb-3">
            MARCAS EN LAS QUE TRABAJAMOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight uppercase">
            Trabajamos con las mejores marcas
          </h2>
        </div>

        {/* Brands logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
          {brandsList.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-[#09090c] border border-zinc-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-28 hover:border-yellow-500/20 hover:bg-[#0c0c11] transition-all duration-300"
            >
              {/* Outer soft yellow radial hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:to-yellow-500/5 transition-all duration-300 pointer-events-none"></div>
              
              <span className="font-sans font-black text-lg sm:text-xl text-zinc-400 group-hover:text-yellow-500 tracking-wider group-hover:scale-105 transition-all duration-300">
                {brand.name}
              </span>
              <span className="text-[9px] text-zinc-600 group-hover:text-zinc-500 font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300">
                {brand.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
