import Link from 'next/link';
import Image from 'next/image';
import { Sun, ShieldCheck, Heart, Award, ArrowLeft, Layers } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Consulta de Tarot Terapêutico Online e Presencial | Pegadas Espaciais',
  description: 'Clareza decisória e orientação estratégica para sua vida profissional, afetiva ou financeira com o Tarot de Marselha e Waite de forma ética em São Paulo.',
  keywords: ['tarot', 'tarot online', 'tarot terapêutico', 'oráculo', 'são paulo', 'tomada de decisão', 'tarotista paulista'],
};

export default function TarotServico() {
  return (
    <div id="tarot-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
              Tarot Terapêutico & Decisório
            </h1>
            <div className="h-0.5 w-16 bg-gold"></div>
            <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
              Consiga respostas claras e de alta assertividade técnica para questões afetivas, financeiras ou profissionais imediatas. O Tarot como um espelho psicológico que desmistifica o futuro e traz sabedoria de decisão.
            </p>
          </div>

          {/* Core Banner Image */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/tarot-cards/1200/600"
              alt="Consulta e Leitura de Tarot de Marselha com Marilene Augusta"
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
              <h2 className="font-serif text-2xl font-bold text-gold">O Espelho dos Arcanos e a Jornada do Louco</h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                As cartas do Tarot representam arcanos (mistérios) que atuam como espelhos subconscientes da nossa mente profunda. Integramos o Tarot de Marselha clássico e o Tarot de Rider-Waite, estabelecendo um canal de leitura ética e com alto teor de aconselhamento, sem amarras fatalistas e com foco total em guiar sua tomada de decisão consciente.
              </p>
              
              <h3 className="font-serif text-lg font-bold text-white mt-2">Destaques da Nossa Leitura Arquetípica:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Decisões Profissionais e Projetos:</strong>
                    <p className="text-[11px] text-white/50">Avaliação sincera de caminhos e transições de carreira de forma segura, minimizando erros estratégicos.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Alinhamento Afetivo e Relações:</strong>
                    <p className="text-[11px] text-white/50">Luz sobre conflitos mal resolvidos, desorganização amorosa e padrões de comportamento indesejados.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Previsões e Diagnósticos para 1 Ano:</strong>
                    <p className="text-[11px] text-white/50">O desenho das frentes de energia geral que incidirão sobre as suas escolhas ao longo dos próximos 12 meses.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Desenvolvimento Pessoal e Espiritual:</strong>
                    <p className="text-[11px] text-white/50">O aconselhamento direto dos Arcanos Maiores sobre suas fraquezas ocultas e potencialidades adormecidas.</p>
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-white mt-4">Abordagem Ética e Acolhedora</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Repudiamos qualquer abordagem de adivinhação sensacionalista ou assustadora. No templo Pegadas Espaciais, o Tarot é encarado como recurso psicoterapêutico construtivo, focado em trazer clareza para o livre-arbítrio iluminado.
              </p>
            </div>

            {/* Right Card CTA */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-5 text-center">
                <span className="text-gold font-serif text-lg font-bold">Resumo da Leitura</span>
                
                <div className="flex flex-col gap-2.5 text-xs text-white/70 border-t border-b border-white/5 py-4">
                  <div className="flex justify-between">
                    <span>Duração Média:</span>
                    <strong className="text-white">45 a 60 min</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento:</span>
                    <strong className="text-gold">R$ 150,00</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Formato do Encontro:</span>
                    <strong className="text-white">Online (Vídeo)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Consultora:</span>
                    <strong className="text-white">Marilene Augusta</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20de%20Tarot%20Terap%C3%AAutico!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Agendar Leitura
                </a>
                <span className="text-[10px] text-white/40">Garantia absoluta de sigilo ético</span>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-3.5 text-xs text-white/60">
                <div className="flex gap-2.5 items-center">
                  <Layers className="text-gold text-xs shrink-0" size={16} />
                  <span>Arcanos Maiores & Menores inclusos</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Sun className="text-gold text-xs shrink-0" size={16} />
                  <span>Abordagem Conectada ao Destino</span>
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
