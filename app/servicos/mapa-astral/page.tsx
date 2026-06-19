import Link from 'next/link';
import Image from 'next/image';
import { Compass, ShieldCheck, Heart, Award, ArrowLeft, Star, FileText } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Leitura de Mapa Astral Completo em São Paulo | Pegadas Espaciais',
  description: 'Descubra seu Ascendente, Lua, Sol e o posicionamento das Casas Astrológicas. Laudo profissional customizado de 20+ páginas em PDF com Marilene Augusta.',
  keywords: ['mapa astral', 'ascendente', 'sinastria', 'casas astrológicas', 'mapa astral profissional', 'são paulo astrologia'],
};

export default function MapaAstralServico() {
  return (
    <div id="mapa-astral-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      <TopBar />
      <Header />

      <main className="flex-1 w-full bg-gradient-to-b from-[#1C0F28] via-[#12081F] to-[#1C0F28] py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          
          {/* Breadcrumb / Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors duration-200 uppercase tracking-widest">
            <ArrowLeft size={12} />
            <span>Voltar para a home</span>
          </Link>

          {/* Heading */}
          <div className="flex flex-col gap-4 text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">O Mapa da Alma</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              Leitura de Mapa Astral Completo
            </h1>
            <div className="h-0.5 w-16 bg-gold"></div>
            <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
              O retrato fidedigno do céu de seu nascimento interpretado manualmente. Conecte-se com sua essência, alinhe seus objetivos às coordenadas planetárias e receba um relatório em PDF com mais de 20 páginas de puro direcionamento existencial.
            </p>
          </div>

          {/* Core Banner Image */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/natal-astrology/1200/600"
              alt="Leitura de Mapa Astral Completo com Astróloga Sênior"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mythic-dark/80 via-transparent to-transparent"></div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Left Detail Text */}
            <div className="md:col-span-8 flex flex-col gap-6 text-left">
              <h2 className="font-serif text-2xl font-bold text-gold">O que você vai descobrir no seu mapa astral?</h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Nossos mapas astrais são interpretados um a um, de forma manual e individualizada, por Marilene Augusta. Longe das ferramentas automáticas que geram textos frios e computados, esta análise de alto nível aborda os seguintes pontos em profunda sintonia:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>O Sol & A Essência de Identidade:</strong>
                    <p className="text-[11px] text-white/50">Seu ego, núcleo de energia e as fontes principais de motivação e vitalidade criativa na vida.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>O Ascendente & Expressão do Ser:</strong>
                    <p className="text-[11px] text-white/50">Como o mundo externo o enxerga, seu estilo expressivo de máscara social e a primeira impressão que você emana.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>A Lua & A Estrutura das Emoções:</strong>
                    <p className="text-[11px] text-white/50">Suas carências afetivas ocultas, intuição, hábitos subconscientes e o canal de nutrição emocional.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Casas, Planetas e Aspectos:</strong>
                    <p className="text-[11px] text-white/50">Estudo de Mercúrio, Vênus, Marte, Júpiter e Saturno incidindo nas 12 casas arquetípicas da vida (profissão, amor, finanças).</p>
                  </div>
                </li>
              </ul>

              <h2 className="font-serif text-xl font-bold text-white mt-4">Por que escolher nosso mapa astral profissional?</h2>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Nossa fundadora, Marilene Augusta, possui duas décadas de dedicação à sabedoria astrológica clássica. A consulta é um portal fidedigno que ajuda a desatar nós e kármas adormecidos, guiando sua energia vital de forma assertiva e consciente.
              </p>
            </div>

            {/* Right Card CTA */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-5 text-center">
                <span className="text-gold font-serif text-lg font-bold">Resumo da Orientação</span>
                
                <div className="flex flex-col gap-2.5 text-xs text-white/70 border-t border-b border-white/5 py-4">
                  <div className="flex justify-between">
                    <span>Duração da Consulta:</span>
                    <strong className="text-white">60 a 90 min</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento:</span>
                    <strong className="text-gold">R$ 297,00</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Entregável Extra:</span>
                    <strong className="text-white">PDF 20+ Páginas</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Modalidade:</span>
                    <strong className="text-white">Online ou Presencial</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20meu%20Mapa%20Astral%20Completo!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Solicitar Meu Mapa
                </a>
                <span className="text-[10px] text-white/40">Laudo detalhado e totalmente autoral</span>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-3.5 text-xs text-white/60">
                <div className="flex gap-2.5 items-center">
                  <FileText className="text-gold text-xs shrink-0" size={16} />
                  <span>Dossiê Personalizado em PDF</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Compass className="text-gold text-xs shrink-0" size={16} />
                  <span>Consultoria Integral de Vida</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
