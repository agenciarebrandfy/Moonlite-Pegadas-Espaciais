import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Heart, Award, ArrowLeft, Paintbrush } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Estética Avançada & Reflexologia em São Paulo | Pegadas Espaciais',
  description: 'Sessões premium de reflexologia plantar, massagem terapêutica, SPA dos pés e rejuvenescimento estético com dermocosméticos na Av. Paulista.',
  keywords: ['reflexologia plantar', 'estética avançada', 'spa dos pés', 'massagem nos pés', 'são paulo', 'rejuvenescimento'],
};

export default function EsteticaServico() {
  return (
    <div id="estetica-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">O Templo Físico</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              Estética Avançada & Reflexologia Plantar
            </h1>
            <div className="h-0.5 w-16 bg-gold"></div>
            <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
              Equilíbrio orgânico, drenagem de tensões acumuladas e tratamentos reconfortantes. Combinamos reflexologia terapêutica profunda com protocolos dermoestéticos que renovam a pele de suas fundações.
            </p>
          </div>

          {/* Core Banner Image */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/reflexology-spa/1200/600"
              alt="Estética Avançada e Reflexologia Plantar em São Paulo"
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
              <h2 className="font-serif text-2xl font-bold text-gold">Reflexologia Plantar e o Fluxo de Energia</h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Nossos pés possuem mais de 7.200 terminações nervosas interligadas a todos os órgãos de nosso corpo. Através de toques de reflexologia plantar precisamente direcionados, o ritual oferecido por Marilene estimula a circulação sanguínea, alivia o estresse severo, ameniza dores de cabeça e induz um profundo relaxamento do sistema nervoso central.
              </p>
              
              <h3 className="font-serif text-lg font-bold text-white mt-2">Destaques do Protocolo Estético:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Reflexologia Terapêutica Ativa:</strong>
                    <p className="text-[11px] text-white/50">Estímulos metabólicos vigorosos e relaxantes para harmonizar o estômago, fígado, rins e coluna vertebral.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>SPA de Hidratação Profunda:</strong>
                    <p className="text-[11px] text-white/50">Peeling químico suave, esfoliação com sais minerais e máscara de colágeno reconstrutora.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Rejuvenescimento de Pele e Fissuras:</strong>
                    <p className="text-[11px] text-white/50">Utilização de ativos de alta absorção que combatem o ressecamento agudo e devolvem a elasticidade natural.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Terapia com Pedras Aquecidas:</strong>
                    <p className="text-[11px] text-white/50">Massagem de finalização com pedras vulcânicas sobre os pontos de tensão muscular dos pés e panturrilhas.</p>
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-white mt-4">Ingredientes e Ativos Premium</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Utilizamos exclusivamente óleos essenciais orgânicos de Lavanda do Himalaia, Alecrim, Capim-Limão e argilas riquíssimas em oligoelementos que nutrem a derme e proporcionam bem-estar olfativo (aromaterapia) durante todo o ritual.
              </p>
            </div>

            {/* Right Card CTA */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-5 text-center">
                <span className="text-gold font-serif text-lg font-bold">Resumo da Sessão</span>
                
                <div className="flex flex-col gap-2.5 text-xs text-white/70 border-t border-b border-white/5 py-4">
                  <div className="flex justify-between">
                    <span>Duração Média:</span>
                    <strong className="text-white">50 a 70 min</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento:</span>
                    <strong className="text-gold">R$ 180,00</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Ativo Principal:</span>
                    <strong className="text-white">Óleos Essenciais</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Avaliação:</span>
                    <strong className="text-gold">⭐ 4.97/5 (95+ reviews)</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Est%C3%A9tica%20Avan%C3%A7ada%20e%20Reflexologia!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Agendar Sessão
                </a>
                <span className="text-[10px] text-white/40">Presencial Av. Paulista, São Paulo</span>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-3.5 text-xs text-white/60">
                <div className="flex gap-2.5 items-center">
                  <ShieldCheck className="text-gold text-xs shrink-0" size={16} />
                  <span>Ambiente Climatizado e Silencioso</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Paintbrush className="text-gold text-xs shrink-0" size={16} />
                  <span>Dermocosméticos Hipoalergênicos</span>
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
