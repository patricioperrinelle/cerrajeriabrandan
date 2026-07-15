import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, ShieldAlert, Loader2, MapPin, Navigation, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'call' | 'whatsapp';
}

export default function EmergencyModal({ isOpen, onClose, mode }: EmergencyModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('Llave trabada / No puedo entrar');
  const [location, setLocation] = useState('');
  
  // Interactive simulator states
  const [loadingState, setLoadingState] = useState('');
  const [eta, setEta] = useState(15);
  const [locksmithName, setLocksmithName] = useState('Carlos Brandan');

  useEffect(() => {
    if (step === 2) {
      const states = [
        'Enviando coordenadas de auxilio...',
        'Asignando cerrajero móvil más cercano...',
        'Confirmando disponibilidad de herramientas...',
      ];
      
      let currentIdx = 0;
      setLoadingState(states[0]);

      const interval = setInterval(() => {
        currentIdx++;
        if (currentIdx < states.length) {
          setLoadingState(states[currentIdx]);
        } else {
          clearInterval(interval);
          setStep(3);
          // Randomize ETA slightly
          setEta(Math.floor(Math.random() * 11) + 15); // 15 to 25 mins
          const names = ['Carlos Brandan', 'Mateo Brandan', 'Esteban Brandan'];
          setLocksmithName(names[Math.floor(Math.random() * names.length)]);
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) return;
    setStep(2);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hola Cerrajería Brandan, mi nombre es ${name}. Necesito asistencia urgente por: "${issue}" en la zona de ${location}. Mi celular es ${phone}.`
    );
    window.open(`https://wa.me/5493515633345?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-[#0c0c11] border border-zinc-800 rounded-[28px] overflow-hidden shadow-2xl z-10 p-6 sm:p-8"
          >
            {/* Header / Close */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-xs font-black uppercase text-red-500 tracking-wider">
                  {mode === 'call' ? 'Urgencias: Llamar' : 'Contacto Directo WhatsApp'}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Step 1: Input details */}
            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center sm:text-left mb-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                    {mode === 'call' ? 'Solicitar Cerrajero Ahora' : 'Enviar Mensaje Directo'}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Completa tus datos para enviarte asistencia inmediata en 15-30 minutos.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-wider mb-1.5">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-wider mb-1.5">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 351 563 3345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-wider mb-1.5">
                      Ubicación / Barrio de Asistencia
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3.5 top-3.5 text-zinc-500" />
                      <input
                        type="text"
                        required
                        placeholder="Ej. Centro, La Calera"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-zinc-400 uppercase tracking-wider mb-1.5">
                      Inconveniente
                    </label>
                    <select
                      value={issue}
                      onChange={(e) => setIssue(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-900 focus:border-red-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Llave trabada / No puedo entrar">Llave trabada / No puedo entrar</option>
                      <option value="Se me quedaron las llaves adentro del auto">Se me quedaron las llaves adentro del auto</option>
                      <option value="Perdí mis llaves por completo">Perdí mis llaves por completo</option>
                      <option value="Cambio de cerradura / Combinación urgente">Cambio de cerradura / Combinación urgente</option>
                      <option value="Apertura de candado / portón comercial">Apertura de candado / portón comercial</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  {mode === 'call' ? (
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-red-700 hover:bg-red-600 text-white font-black text-sm tracking-widest uppercase shadow-xl shadow-red-900/20 cursor-pointer transition-colors"
                    >
                      <Phone size={16} className="fill-white" />
                      Solicitar Cerrajero Móvil
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (name && phone && location) {
                          handleWhatsAppRedirect();
                        } else {
                          // Simple form validation trigger
                          const form = document.querySelector('form');
                          form?.reportValidity();
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-black text-sm tracking-widest uppercase shadow-xl shadow-emerald-900/20 cursor-pointer transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-white text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.366 2.012 13.9 1.01 11.998 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.881l-.994 3.63 3.771-.98-.215-.34z" />
                      </svg>
                      Enviar Mensaje WhatsApp
                    </button>
                  )}
                  
                  {/* Phone Direct Number */}
                  <div className="text-center mt-2">
                    <p className="text-xs text-zinc-500">
                      O llama de forma directa al{' '}
                      <a href="tel:+5493515633345" className="text-red-500 font-bold hover:underline">
                        +54 9 351 563-3345
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            )}

            {/* Step 2: Interactive Dispatch Loader */}
            {step === 2 && (
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-5">
                <Loader2 size={48} className="text-red-600 animate-spin" />
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-lg font-display">Procesando Solicitud de Emergencia</h4>
                  <p className="text-xs font-mono text-red-500 font-medium tracking-wide">
                    {loadingState}
                  </p>
                </div>
                <div className="w-full bg-zinc-950 border border-zinc-900 rounded-2xl p-4 max-w-xs text-left text-xs text-gray-400">
                  <div className="flex justify-between border-b border-zinc-900 pb-2 mb-2">
                    <span>Solicitante:</span>
                    <span className="text-white font-bold">{name}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2 mb-2">
                    <span>Zona:</span>
                    <span className="text-white font-bold">{location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inconveniente:</span>
                    <span className="text-white font-bold text-right max-w-[150px] truncate">{issue}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Success and Active Tracker! */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-4 animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                    ¡Cerrajero Asignado!
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    El auxilio de emergencia ya está en camino a tu ubicación.
                  </p>
                </div>

                {/* Locksmith Profile Card */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 flex items-center justify-center text-yellow-500">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">{locksmithName}</h4>
                      <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                        Técnico Especialista Asignado
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-900 text-xs">
                    <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-900">
                      <span className="text-zinc-500 block text-[9px] uppercase font-bold tracking-wider">Llegada Estimada</span>
                      <span className="text-white font-black font-mono text-lg">{eta} min</span>
                    </div>
                    <div className="bg-zinc-900/40 p-2.5 rounded-xl border border-zinc-900">
                      <span className="text-zinc-500 block text-[9px] uppercase font-bold tracking-wider">Distancia</span>
                      <span className="text-white font-black font-mono text-lg">{(eta * 0.4).toFixed(1)} km</span>
                    </div>
                  </div>
                </div>

                {/* Tracker Map representation */}
                <div className="relative bg-zinc-950 border border-zinc-900 rounded-2xl p-4 overflow-hidden h-24 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  
                  {/* Moving route visualization */}
                  <div className="absolute w-2/3 h-1 bg-zinc-900 rounded-full">
                    <div className="h-full bg-gradient-to-r from-red-600 to-yellow-500 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                  </div>
                  
                  <div className="absolute left-1/4 -translate-y-0.5 p-1 rounded-full bg-red-600 text-white z-10 animate-pulse">
                    <Navigation size={12} className="transform rotate-45" />
                  </div>
                  
                  <div className="absolute right-1/4 -translate-y-0.5 p-1 rounded-full bg-yellow-500 text-black z-10">
                    <MapPin size={12} />
                  </div>
                  
                  <span className="absolute bottom-2 text-[10px] font-mono text-zinc-600 tracking-wider">
                    SEGUIMIENTO EN TIEMPO REAL
                  </span>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="tel:+5493515633345"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-sm tracking-wider uppercase transition-colors"
                  >
                    <Phone size={14} className="fill-white" />
                    Llamar al Técnico
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl text-zinc-500 hover:text-zinc-300 text-xs font-bold transition-colors"
                  >
                    Cerrar Ventana de Auxilio
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
