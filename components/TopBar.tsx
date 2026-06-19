import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div id="top-bar" className="w-full bg-[#12081F] text-xs text-gold border-b border-white/5 py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span id="top-bar-slogan" className="font-medium tracking-wide text-center sm:text-left whitespace-nowrap">
          <span className="hidden sm:inline">Especialistas em estética avançada e mapa astral em São Paulo</span>
          <span className="inline sm:hidden">Estética avançada e mapa astral em São Paulo</span>
        </span>
        <div id="top-bar-contacts" className="flex flex-wrap items-center justify-center gap-4 text-white/80">
          <a href="tel:+34649380037" id="top-bar-phone" className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200 whitespace-nowrap">
            <Phone size={12} className="text-gold" />
            <span>+34 64 93 800 37</span>
          </a>
          <a href="mailto:contato@pegadasespaciais.com.br" id="top-bar-email" className="hidden sm:flex items-center gap-1.5 hover:text-gold transition-colors duration-200">
            <Mail size={12} className="text-gold" />
            <span>contato@pegadasespaciais.com.br</span>
          </a>
          <div id="top-bar-socials" className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-4 ml-1">
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors duration-200">
              <Instagram size={14} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-gold transition-colors duration-200">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-gold transition-colors duration-200">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
