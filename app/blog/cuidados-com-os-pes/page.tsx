import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Heart, Star, Footprints } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: '5 Cuidados com os Pés para Manter a Saúde | Pegadas Espaciais',
  description: 'Confira as dicas de podologia clínica de Marilene Augusta para evitar unhas encravadas, combater o ressecamento agudo e aliviar a fascite plantar.',
  keywords: ['cuidados com os pes', 'podologia preventiva', 'evitar unha encravada', 'hidratacao dos pes', 'são paulo', 'marilene augusta'],
};

export default function ArtigoCuidadosPes() {
  return (
    <div id="artigo-cuidados-pes-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      <TopBar />
      <Header />

      <main className="flex-1 w-full bg-gradient-to-b from-[#1C0F28] via-[#12081F] to-[#1C0F28] py-16 px-4">
        <article className="max-w-3xl mx-auto flex flex-col gap-8 text-left">
          
          {/* Back key */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors duration-200 uppercase tracking-widest">
            <ArrowLeft size={12} />
            <span>Voltar para o blog</span>
          </Link>

          {/* Heading metadata */}
          <div className="flex flex-col gap-4">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Podologia Preventiva</span>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              5 cuidados essenciais para manter seus pés saudáveis, leves e jovens
            </h1>
            <div className="flex items-center gap-4 text-xs text-white/50 border-b border-white/5 pb-4">
              <span>Por <strong>Marilene Augusta</strong></span>
              <span>•</span>
              <span>15 de Maio de 2026</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative w-full h-64 md:h-[360px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/feet-care/800/400"
              alt="Pés saudáveis e cuidados delicados de podologia clínica preventiva"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mythic-dark/80 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
          <div className="text-xs md:text-sm text-white/80 leading-relaxed flex flex-col gap-6 font-sans">
            
            {/* Direct Answer block for Featured Snippet */}
            <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20 text-white italic">
              <h2 className="font-serif text-sm md:text-base font-bold text-gold not-italic mb-2">Resumo: 5 Hábitos Fundamentais de Podologia Preventiva</h2>
              Manter os pés saudáveis exige rituais simples e contínuos: **1.** Secar meticulosamente os espaços entre os dedos; **2.** Cortar as unhas de forma reta; **3.** Abandonar sapatos excessivamente apertados ou de ponta fina; **4.** Utilizar cremes com ureia de alta hidratação; e **5.** Realizar consultas periódicas de podologia clínica. Esses hábitos evitam micoses dolorosas, calcanhares rachados e unhas encravadas severas.
            </div>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Pés: O Alicerce Oculto do Nosso Corpo</h2>
            <p>
              Em sua rotina diária em São Paulo, quantas vezes você para para analisar as condições dos seus pés? Geralmente, as pessoas só se recordam do alicerce do seu caminhar quando surge uma dor agudizada ao encostar no sapato, ou quando a descamação dos calcanhares impede o uso de uma sandália estilosa no verão.
            </p>
            <p>
              Prevenir é incomensuravelmente mais prático, seguro e barato do que tratar condições inflamatórias severas. Sob o olhar clínico de Marilene Augusta, listamos abaixo cinco cuidados vitais que você deve incorporar imediatamente:
            </p>

            <h3 className="font-serif text-base md:text-lg font-bold text-white mt-2">1. Secagem Meticulosa Interdigital</h3>
            <p className="text-xs md:text-sm text-white/70">
              A umidade residual que permanece entre os dedos após o banho é o ecossistema perfeito para a proliferação excessiva de fungos e leveduras que causam frieiras e rachaduras doloridas. Use sempre uma toalha macia exclusiva para os pés ou recorra à secagem rápida com secador de cabelo na temperatura fria.
            </p>

            <h3 className="font-serif text-base md:text-lg font-bold text-white mt-2">2. O Corte Correto de Unha Estrito</h3>
            <p className="text-xs md:text-sm text-white/70">
              Nunca arredonde agressivamente os cantos de suas unhas do pé ou cave as pregas laterais. O corte deve ser rigorosamente **reto** nas pontas, removendo apenas o excesso de comprimento. Arredondar as bordas faz com que o sapato empurre a lâmina córnea para dentro dos tecidos moles laterais, gerando onicocriptose (unha encravada).
            </p>

            <h3 className="font-serif text-base md:text-lg font-bold text-white mt-2">3. Atenção Crítica aos Diabéticos e Idosos</h3>
            <p className="text-xs md:text-sm text-white/70">
              Indivíduos diabéticos possuem sensibilidade tátil e circulação sanguínea de retorno reduzidas. Para estes pacientes, pequenos acidentes como rachaduras, calos não debastados e micoses podem evoluir rapidamente para infecções severas e de cicatrização prolongada. A podatria nesses casos deve ser feita por um profissional qualificado.
            </p>

            <h3 className="font-serif text-base md:text-lg font-bold text-white mt-2">4. Hidratação Ativa com Dermocosméticos Específicos</h3>
            <p className="text-xs md:text-sm text-white/70">
              A sola do pé não possui glândulas sebáceas, o que a torna propensa ao ressecamento crônico e descamação. Evite cremes comuns de corpo que não penetram na derme espessa do calcanhar. Prefira fórmulas clínicas ricas em **ureia a 10%** ou **alantoína**, aplicando toda noite antes de dormir.
            </p>

            <h3 className="font-serif text-base md:text-lg font-bold text-white mt-2">5. Visite um Podólogo Clínico Regularmente</h3>
            <p className="text-xs md:text-sm text-white/70">
              Assim como visitamos o dentista periodicamente para profilaxia dentária, uma consulta profissional de podologia a cada 30 ou 45 dias é fundamental para debastar calosidades discretas, limpar as bordas das unhas com total biossegurança e remover espículas antes que encravem.
            </p>

            <p className="mt-4">
              Restaurar o caminhar físico no templo da Pegadas Espaciais é um ritual completo que alivia o peso muscular de suas pernas e sintoniza corpo e alma para que você prospere.
            </p>

            {/* In-content Link to Services */}
            <div className="border-t border-white/5 pt-6 mt-4 flex flex-col items-center gap-4 text-center">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Sorte do Caminhar</span>
              <p className="max-w-md text-xs text-white/60">Agende sua avaliação clínica e desfrute de um tratamento totalmente indolor e assepsia profunda em São Paulo.</p>
              <Link 
                href="/servicos/podologia" 
                className="bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300"
              >
                Conhecer Podologia Avançada
              </Link>
            </div>

          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
