import Link from 'next/link';
import Image from 'next/image';
import { Footprints, ShieldCheck, Heart, Award, ArrowLeft, Activity } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Podologia Clínica de Alta Performance em São Paulo | Pegadas Espaciais',
  description: 'Tratamento especializado e indolor para unha encravada, calos, fissuras, fascite plantar e cuidados com o pé diabético em São Paulo.',
  keywords: ['podologia', 'unha encravada', 'fascite plantar', 'pé diabético', 'são paulo', 'podólogo av. paulista'],
};

export default function PodologiaServico() {
  return (
    <div id="podologia-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
              Podologia Clínica de Alta Performance
            </h1>
            <div className="h-0.5 w-16 bg-gold"></div>
            <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
              Tratamentos clínicos, profiláticos e preventivos para as patologias dos pés. Rigorosa assepsia de nível médico, cuidado totalmente indolor e reabilitação biossanitária ágil em São Paulo.
            </p>
          </div>

          {/* Core Banner Image */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/podiatry-clinic/1200/600"
              alt="Clínica de Podologia em São Paulo - Tratamentos indolores para unhas e pés"
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
              <h2 className="font-serif text-2xl font-bold text-gold">Tratamentos Especializados e Indolores</h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Nossos pés suportam todo o peso e o estresse mecânico de nossa jornada. A podologia clínica na Pegadas Espaciais transcende a higiene básica, oferecendo tratamentos curativos profundos realizados por Marilene Augusta, utilizando as tecnologias de assepsia e equipamentos de maior calibre técnico importados da Europa.
              </p>
              
              <h3 className="font-serif text-lg font-bold text-white mt-2">Dores e Patologias Tratadas:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Unha Encravada (Onicocriptose):</strong>
                    <p className="text-[11px] text-white/50">Procedimento de desobstrução e correção de órtese 100% indolor.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Fascite Plantar e Esporão:</strong>
                    <p className="text-[11px] text-white/50">Alívio de tensão e inflamações intensas na sola do pé.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Calos, Calosidades e Fissuras:</strong>
                    <p className="text-[11px] text-white/50">Debastamento técnico e hidratação com dermocosméticos avançados.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Tratamento do Pé Diabético:</strong>
                    <p className="text-[11px] text-white/50">Abordagem profilática preventiva estrita e ultra-suave, livre de cortes.</p>
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-white mt-4">Nossa Rigorosa Segurança Biossanitária</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Toda pinça, bisturi e espátula utilizados passam por tripla lavagem enzimática, embalagem termosselada individual e esterilização definitiva em autoclave de última geração (classe B). Garantimos zero contaminação e conformidade médica total.
              </p>
            </div>

            {/* Right Card CTA */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-5 text-center">
                <span className="text-gold font-serif text-lg font-bold">Resumo da Consulta</span>
                
                <div className="flex flex-col gap-2.5 text-xs text-white/70 border-t border-b border-white/5 py-4">
                  <div className="flex justify-between">
                    <span>Duração Média:</span>
                    <strong className="text-white">45 a 60 min</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento:</span>
                    <strong className="text-gold">R$ 140,00</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Agendamento:</span>
                    <strong className="text-white">WhatsApp</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Estrela:</span>
                    <strong className="text-gold">⭐ 4.9/5 (120+ reviews)</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20de%20Podologia%20Cl%C3%ADnica!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Agendar Consulta
                </a>
                <span className="text-[10px] text-white/40">Presencial Av. Paulista, São Paulo</span>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-3.5 text-xs text-white/60">
                <div className="flex gap-2.5 items-center">
                  <ShieldCheck className="text-gold text-xs shrink-0" size={16} />
                  <span>Materiais 100% Autoclavados</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Activity className="text-gold text-xs shrink-0" size={16} />
                  <span>Diagnóstico Fisiológico Completo</span>
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
