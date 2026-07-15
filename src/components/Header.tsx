import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export default function Header({ onCallClick, onWhatsAppClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Por qué elegirnos', href: '#por-que-elegirnos' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Opiniones', href: '#opiniones' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            {/* Styled Emblem with CB centered */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 shadow-lg group-hover:border-red-500/50 group-hover:shadow-[0_0_12px_rgba(220,38,38,0.15)] transition-all duration-300">
              {/* Amber/Red Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/15 via-transparent to-yellow-500/10 opacity-75 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              
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
              <span className="text-lg font-bold tracking-wider text-yellow-500 uppercase font-display leading-tight group-hover:text-white transition-colors duration-300">
                Brandan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-all duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Call CTA Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onCallClick}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-600 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-red-900/30 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer active:translate-y-0"
            >
              <Phone size={14} className="animate-pulse" />
              Llamar Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-yellow-500 hover:bg-zinc-900/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCallClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg"
                >
                  <Phone size={16} />
                  Llamar Ahora
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onWhatsAppClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-700 text-white font-bold text-sm tracking-wider uppercase shadow-lg"
                >
                  Escríbenos por WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
