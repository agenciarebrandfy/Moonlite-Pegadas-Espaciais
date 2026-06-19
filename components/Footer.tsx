import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#12081F] text-white/70 border-t border-white/5 pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Decorative starry backdrop */}
      <div className="absolute inset-0 stars-bg opacity-30 select-none pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Colon 1 - Branding */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col items-start gap-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              PEGADAS ESPACIAIS
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
              Estética & Cosmos
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-white/60">
            A harmonia sublime entre o corpo e o cosmos. Integrando o rigor clínico de podologia clássica a profunda orientação da sabedoria mística milenar. 
          </p>
          <div className="text-xs text-gold flex items-center gap-1.5 font-medium">
            <span>Mais de 20 anos de experiência internacional.</span>
          </div>
        </div>

        {/* Colon 2 - Services */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold/20 pb-2">
            Nossos Serviços
          </span>
          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <Link href="/servicos/podologia" className="hover:text-gold transition-colors duration-200">
                Podologia Clínica Avançada
              </Link>
            </li>
            <li>
              <Link href="/servicos/estetica-avancada" className="hover:text-gold transition-colors duration-200">
                Reflexologia & Estética
              </Link>
            </li>
            <li>
              <Link href="/servicos/design-capilar" className="hover:text-gold transition-colors duration-200">
                Terapia & Design Capilar
              </Link>
            </li>
            <li>
              <Link href="/servicos/mapa-astral" className="hover:text-gold transition-colors duration-200">
                Leitura de Mapa Astral Completo
              </Link>
            </li>
            <li>
              <Link href="/servicos/numerologia" className="hover:text-gold transition-colors duration-200">
                Numerologia Cabalística
              </Link>
            </li>
            <li>
              <Link href="/servicos/tarot" className="hover:text-gold transition-colors duration-200">
                Tarot Terapêutico & Decisório
              </Link>
            </li>
          </ul>
        </div>

        {/* Colon 3 - Navigation */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold/20 pb-2">
            Links Rápidos
          </span>
          <ul className="flex flex-col gap-2 text-xs">
            <li>
              <Link href="/" className="hover:text-gold transition-colors duration-200">
                Página Inicial
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-gold transition-colors duration-200">
                Conheça Marilene Augusta
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold transition-colors duration-200">
                Blog O Astrolábio
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidade" className="hover:text-gold transition-colors duration-200">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-gold transition-colors duration-200">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>

        {/* Colon 4 - Local GMB Details */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold/20 pb-2">
            Contato & Endereço
          </span>
          <ul className="flex flex-col gap-3.5 text-xs text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+5511999999999" className="hover:text-gold transition-colors duration-200">
                (11) 99999-9999
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:contato@pegadasespaciais.com.br" className="hover:text-gold transition-colors duration-200">
                contato@pegadasespaciais.com.br
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-white/60">
              <Clock size={16} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p>Segunda a Sexta: 09:00h às 19:00h</p>
                <p>Sábado: 09:00h às 14:00h</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {currentYear} Pegadas Espaciais. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
        <p className="flex items-center gap-1">
          Desenvolvido por{' '}
          <a 
            href="https://rebrandfy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gold font-semibold hover:underline flex items-center gap-0.5 text-white/65 hover:text-gold transition-all duration-200"
          >
            RebrandFy <ExternalLink size={10} />
          </a>
        </p>
      </div>
    </footer>
  );
}
