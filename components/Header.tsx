'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Compass, Footprints, Sparkles, Scissors, Sun, Hash, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  { name: 'Podologia Clínica', href: '/servicos/podologia', icon: Footprints },
  { name: 'Estética Avançada', href: '/servicos/estetica-avancada', icon: Sparkles },
  { name: 'Design Capilar', href: '/servicos/design-capilar', icon: Scissors },
  { name: 'Mapa Astral', href: '/servicos/mapa-astral', icon: Compass },
  { name: 'Numerologia', href: '/servicos/numerologia', icon: Hash },
  { name: 'Tarot Terapêutico', href: '/servicos/tarot', icon: Sun },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-mythic-dark/95 backdrop-blur-md border-b border-white/5 z-40 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0.5 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-gold transition-colors duration-200">
            PEGADAS ESPACIAIS
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-medium">
            Estética & Cosmos
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200">
            Início
          </Link>
          <Link href="/sobre" className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200">
            Sobre
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200 focus:outline-none">
              <span>Serviços</span>
              <ChevronDown size={14} className={`transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72"
                >
                  <div className="bg-[#1C0F28] border border-white/10 rounded-xl p-3 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-1 gap-1">
                      {services.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 text-white/90 hover:text-gold transition-all duration-200"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                              <Icon size={16} />
                            </div>
                            <span className="text-xs font-semibold">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className="text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200">
            Blog
          </Link>
          
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20exclusivo!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-hover text-mythic-dark text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-gold/15"
          >
            Agendar Atendimento
          </a>
        </nav>

        {/* Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden text-white hover:text-gold p-2 transition-colors duration-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full bg-[#1C0F28] border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-5">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-gold px-2 py-1"
              >
                Início
              </Link>
              <Link 
                href="/sobre" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-gold px-2 py-1"
              >
                Sobre
              </Link>

              {/* Mobile Services Expansion */}
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-gold font-bold px-2">Nossos Serviços</span>
                <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-white/5">
                  {services.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg text-white/80 hover:text-gold transition-colors duration-200 text-xs"
                      >
                        <Icon size={14} className="text-gold" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link 
                href="/blog" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-white/90 hover:text-gold px-2 py-1"
              >
                Blog
              </Link>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20exclusivo!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-gold hover:bg-gold-hover text-mythic-dark text-xs font-bold uppercase tracking-wider text-center py-3.5 rounded-xl transition-all duration-300 w-full"
              >
                Agendar Atendimento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
