import Link from 'next/link';
import Image from 'next/image';
import { Compass, Footprints, Sparkles, Scissors, Sun, Hash, Star, Shield, Award, AwardIcon } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FAQAccordion from '@/components/FAQAccordion';

export default function Home() {
  return (
    <div id="home-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      {/* Top Bar */}
      <TopBar />

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative w-full pt-8 pb-8 md:pt-14 md:pb-12 lg:pt-16 lg:pb-14 px-4 flex items-center justify-center border-b border-white/5 overflow-hidden">
          {/* Mystic Purple background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.imgur.com/Bcv018u.png"
              alt="Fundo Místico Roxo"
              fill
              priority
              className="object-cover opacity-40 select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-mythic-dark/60 via-transparent to-[#180C26]"></div>
          </div>

          {/* Subtle cosmic circle overlay */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none select-none z-0"></div>
          <div className="absolute left-10 top-1/3 w-64 h-64 bg-[#3d204c]/20 rounded-full blur-[80px] pointer-events-none select-none z-0"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-6 creative-fade-in relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider">
                <Star size={12} className="animate-spin-slow" />
                <span>20 Anos de Experiência Internacional</span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
                Onde a precisão da <span className="text-gold">estética avançada</span> encontra a clareza do <span className="text-gold text-serif italic">destino</span>.
              </h1>
              
              <p className="text-sm md:text-lg text-white/70 max-w-2xl leading-relaxed">
                Marilene Augusta Santos lapida a harmonia sublime entre o corpo e o cosmos. Tratamentos clínicos e especializados para os pés, design capilar de alta performance e leituras astrológicas de profunda exatidão. Uma experiência verdadeiramente singular com assinatura internacional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20exclusivo!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-sm uppercase tracking-wider text-center py-4 px-8 rounded-full shadow-lg shadow-gold/20 transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Iniciar minha transformação
                </a>
                <Link
                  href="/sobre"
                  className="border border-white/20 hover:border-gold/50 text-white hover:text-gold font-bold text-sm uppercase tracking-wider text-center py-4 px-8 rounded-full transition-all duration-300"
                >
                  Conhecer Marilene
                </Link>
              </div>

              </div>

            {/* Right Astrolabe Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center relative z-10 mt-10 lg:mt-0">
              <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                <Image
                  src="https://i.imgur.com/vEnfJAL.png"
                  alt="Bússola Zodíaco"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, 500px"
                  className="zodiac-spin object-contain pointer-events-auto cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TEMPLO FÍSICO (PODOLOGIA & ESTETICA) */}
        <section id="templo-fisico" className="w-full py-16 md:py-24 px-4 bg-[#1C0F28] border-b border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Cuidado Fisiológico Premium</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                O Templo Físico
              </h2>
              <div className="h-0.5 w-16 bg-gold mx-auto mb-1"></div>
              <p className="text-sm text-white/60">
                Procedimentos de excelência técnica e rigor clínico estrito, proporcionando restauração absoluta à base do seu caminhar.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 - Podologia */}
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-mythic-dark transition-all duration-300">
                  <Footprints size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                  Podologia Clínica
                </h3>
                <p className="text-xs text-white/60 leading-relaxed min-h-[70px]">
                  Tratamentos clínicos focados em alívio indolor e reabilitação de condições como unha encravada, fascite plantar, calos agudos e fissuras. Segurança integral para pés diabéticos.
                </p>
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center text-xs">
                  <span className="text-gold font-bold">A partir de R$ 140</span>
                  <Link href="/servicos/podologia" className="text-white hover:text-gold font-bold transition-colors">
                    Saber Mais →
                  </Link>
                </div>
              </div>

              {/* Card 2 - Estética */}
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-mythic-dark transition-all duration-300">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                  Estética Avançada
                </h3>
                <p className="text-xs text-white/60 leading-relaxed min-h-[70px]">
                  Sessões exclusivas de reflexologia profunda, massagem terapêutica integrativa e protocolos dermatológicos de rejuvenescimento local com dermocosméticos selecionados.
                </p>
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center text-xs">
                  <span className="text-gold font-bold">A partir de R$ 180</span>
                  <Link href="/servicos/estetica-avancada" className="text-white hover:text-gold font-bold transition-colors">
                    Saber Mais →
                  </Link>
                </div>
              </div>

              {/* Card 3 - Design Capilar */}
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-mythic-dark transition-all duration-300">
                  <Scissors size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                  Design Capilar
                </h3>
                <p className="text-xs text-white/60 leading-relaxed min-h-[70px]">
                  Visagismo de autoridade e farmacologia estética aliada ao couro cabeludo. Combate à alopecia, fortalecimento quimioterápico e revitalização em todos os fios de forma personalizada.
                </p>
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center text-xs">
                  <span className="text-gold font-bold">A partir de R$ 160</span>
                  <Link href="/servicos/design-capilar" className="text-white hover:text-gold font-bold transition-colors">
                    Saber Mais →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION MAPA DA ALMA (COSMOS & ASTROLOGIA) */}
        <section id="mapa-da-alma" className="w-full py-16 md:py-24 px-4 bg-[#12081F] border-b border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Orientação Cósmica & Oráculos</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                O Mapa da Alma
              </h2>
              <div className="h-0.5 w-16 bg-gold mx-auto mb-1"></div>
              <p className="text-sm text-white/60">
                Decifre as frequências ancestrais que regem seus caminhos, revelando clareza e poder para decisões estratégicas de vida.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 4 - Mapa Astral */}
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-mythic-dark transition-all duration-300">
                  <Compass size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                  Mapa Astral
                </h3>
                <p className="text-xs text-white/60 leading-relaxed min-h-[70px]">
                  Navegação estelar profunda. Mapeamento do Sol, Lua, planetas e o seu Ascendente exato. Entendimento de forças kármicas, desafios eminentes e sinastria de profunda exatidão.
                </p>
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center text-xs">
                  <span className="text-gold font-bold">A partir de R$ 297</span>
                  <Link href="/servicos/mapa-astral" className="text-white hover:text-gold font-bold transition-colors">
                    Saber Mais →
                  </Link>
                </div>
              </div>

              {/* Card 5 - Numerologia */}
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-mythic-dark transition-all duration-300">
                  <Hash size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                  Numerologia
                </h3>
                <p className="text-xs text-white/60 leading-relaxed min-h-[70px]">
                  O cálculo exato da vibração do seu nome e datas estratégicas. Alinhamento de assinaturas para prosperidade empresarial, herança cósmica e data ideal para eventos vitais.
                </p>
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center text-xs">
                  <span className="text-gold font-bold">A partir de R$ 197</span>
                  <Link href="/servicos/numerologia" className="text-white hover:text-gold font-bold transition-colors">
                    Saber Mais →
                  </Link>
                </div>
              </div>

              {/* Card 6 - Tarot */}
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-5 hover:border-gold/30 transition-all duration-300 hover:y-[-4px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-mythic-dark transition-all duration-300">
                  <Sun size={24} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors duration-200">
                  Tarot Terapêutico
                </h3>
                <p className="text-xs text-white/60 leading-relaxed min-h-[70px]">
                  Consultas arquetípicas estruturadas para guiar decisões cruciais imediatas. Clareza decisória absoluta em amor, finanças e transição de carreira, livre de amarras.
                </p>
                <div className="border-t border-white/5 pt-4 mt-auto flex justify-between items-center text-xs">
                  <span className="text-gold font-bold">A partir de R$ 150</span>
                  <Link href="/servicos/tarot" className="text-white hover:text-gold font-bold transition-colors">
                    Saber Mais →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION ABOUT US (MARILENE AUGUSTA) */}
        <section id="sobre-nos" className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-[#1C0F28] to-[#12081F] border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Photo Concept */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden border border-gold/30 shadow-2xl">
                <Image
                  src="https://i.imgur.com/nRmuAaZ.png"
                  alt="Marilene Augusta dos Santos - Podóloga e Astróloga com 20 anos de experiência internacional"
                  fill
                  sizes="(max-width: 768px) 320px, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Gold vignette frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-mythic-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#1C0F28]/90 backdrop-blur-md border border-gold/20 flex flex-col gap-0.5">
                  <span className="font-serif text-base font-bold text-white">Marilene Augusta</span>
                  <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">Fundadora & Terapeuta Sênior</span>
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 items-start text-left relative z-10">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Duas Décadas Atravessando Oceanos</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
                Para Revelar a Sua Essência
              </h2>
              <div className="h-0.5 w-16 bg-gold"></div>
              
              <blockquote className="border-l-4 border-gold pl-4 text-white/90 italic text-sm md:text-base leading-relaxed my-2">
                &ldquo;Acredito verdadeiramente que a beleza exterior é a consagração visível de uma alma em perfeito alinhamento energético. Em meus 20 anos de atuação entre o Brasil e a Europa, refinei o olhar para conectar a saúde do caminhar humano à sabedoria ancestral das estrelas.&rdquo;
              </blockquote>

              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Minha missão de vida reside em unir o rigor analítico e clínico da podologia de alto nível à imensidão espiritual do cosmos. Cada tratamento físico feito no meu templo é uma escultura de assepsia e bem-estar; cada consulta astrológica, um alinhamento existencial fidedigno. Aqui, as ciências fisionômicas e as leis herméticas fundem-se para redefinir seu plano de vida.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/sobre"
                  className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-mythic-dark font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300"
                >
                  Conheça Minha Trajetória Completa
                </Link>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%20Marilene,%20gostaria%20de%20agendar%20uma%20consulta%20com%20voc%C3%AA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold/15 text-gold hover:bg-gold hover:text-mythic-dark font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300"
                >
                  Falar Conosco no WhatsApp
                </a>
              </div>
            </div>
            
          </div>
        </section>

        {/* SECTION FAQ (ACCORDION PERGUNTAS) */}
        <section id="faq" className="w-full py-16 md:py-24 px-4 bg-mythic-dark border-b border-white/5 relative">
          <div className="absolute inset-0 stars-bg opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Dúvidas Resolvidas</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                Perguntas Frequentes
              </h2>
              <div className="h-0.5 w-16 bg-gold mx-auto mb-1"></div>
              <p className="text-xs md:text-sm text-white/60">
                Encontre esclarecimentos imediatos sobre podologia clínica, mapa astral e todos os nossos rituais integrados.
              </p>
            </div>

            {/* Accordion List Component */}
            <FAQAccordion />
          </div>
        </section>

        {/* SECTION FINAL CTA */}
        <section id="cta-final" className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-mythic-dark to-[#0f061b] relative overflow-hidden">
          {/* Cosmic nebulas background glow */}
          <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-gold/10 rounded-full blur-[140px] pointer-events-none select-none"></div>
          <div className="absolute left-1/4 top-0 w-80 h-80 bg-[#3d204c]/30 rounded-full blur-[140px] pointer-events-none select-none"></div>

          <div className="max-w-5xl mx-auto rounded-3xl border border-gold/30 bg-white/[0.02] p-8 md:p-16 text-center flex flex-col items-center gap-8 shadow-2xl relative z-10 backdrop-blur-md">
            <span className="text-gold text-xs font-extrabold uppercase tracking-[0.3em] bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20">
              Sua Nova Era
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
              O Convite para a Sua <span className="text-gold italic">Jornada Exclusiva</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
              Devido à natureza profunda e altamente personalizada de cada análise e tratamento clínico, nossas vagas de agenda mensal são estritamente limitadas. Garanta seu momento de harmonia, autocuidado e direcionamento supremo hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20reservar%20meu%20atendimento%20exclusivo%20agora!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-sm uppercase tracking-wider text-center py-4 px-10 rounded-full shadow-xl shadow-gold/25 transition-all duration-300 transform hover:scale-[1.03]"
              >
                Reservar Meu Atendimento Exclusivo →
              </a>
              <a
                href="tel:+5511999999999"
                className="border border-white/20 hover:border-gold/50 text-white hover:text-gold font-bold text-sm uppercase tracking-wider text-center py-4 px-10 rounded-full transition-all duration-300"
              >
                Ligar para Nós
              </a>
            </div>

            <div className="text-white/40 text-[11px] flex gap-4 mt-2">
              <span>🔒 Dados 100% Protegidos</span>
              <span>•</span>
              <span>⭐ Avaliação 4.9/5 Estrelas</span>
            </div>
          </div>
        </section>

      </main>

      {/* Footer System */}
      <Footer />

      {/* Floating WhatsApp Bubble */}
      <WhatsAppFloat />
    </div>
  );
}
