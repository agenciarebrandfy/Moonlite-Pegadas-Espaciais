import Link from 'next/link';
import { Compass, HelpCircle } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function NotFound() {
  return (
    <div id="not-found-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      <TopBar />
      <Header />

      <main className="flex-1 w-full flex flex-col items-center justify-center py-24 px-4 text-center select-none relative bg-gradient-to-b from-[#1C0F28] via-[#12081F] to-[#12081F]">
        {/* Glowing planetary nebula effect */}
        <div className="absolute w-72 h-72 bg-gold/5 rounded-full blur-[90px] pointer-events-none select-none"></div>

        <div className="max-w-md mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2 animate-bounce">
            <Compass size={32} />
          </div>

          <h1 className="font-serif text-6xl font-extrabold text-gold tracking-tight">404</h1>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">Página Perdida no Cosmos</h2>
          <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-sm">
            O alinhamento estelar nos indica que você se desviou do mapa. Esse destino não está catalogado em nosso astrolábio.
          </p>

          <Link
            href="/"
            className="mt-4 bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-lg shadow-gold/25 transition-all duration-300"
          >
            Retornar para o Caminho Seguro
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
