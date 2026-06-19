import Link from 'next/link';
import Image from 'next/image';
import { Scissors, ShieldCheck, Heart, Award, ArrowLeft, HeartPulse } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Design Capilar & Terapia do Couro Cabeludo em São Paulo | Pegadas Espaciais',
  description: 'Tratamento de alopecia, controle da queda capilar, visagismo estético e harmonização capilar avançada com Marilene Augusta na Av. Paulista.',
  keywords: ['design capilar', 'visagismo', 'alopecia', 'queda de cabelo', 'são paulo', 'terapia capilar paulista'],
};

export default function DesignCapilarServico() {
  return (
    <div id="design-capilar-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
              Design Capilar Sênior & Terapia Terapêutica
            </h1>
            <div className="h-0.5 w-16 bg-gold"></div>
            <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
              Harmonização estética e restauração biossanitária da saúde do fio e do couro cabeludo. Unindo visagismo que projeta sua autoridade pessoal a protocolos farmacológicos eficazes contra a queda capilar.
            </p>
          </div>

          {/* Core Banner Image */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/hair-therapy/1200/600"
              alt="Design Capilar de Alta Performance e Harmonização Visual"
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
              <h2 className="font-serif text-2xl font-bold text-gold">Visagismo e Terapia do Folículo</h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Nossos cabelos moldam e definem a nossa moldura de expressão e poder. Marilene Augusta integra conceitos de visagismo clássico – que harmoniza o corte e a tonalidade capilar às linhas geométricas de sua fisionomia – a tratamentos terapêuticos intensificados que atuam sobre o folículo piloso enfraquecido.
              </p>
              
              <h3 className="font-serif text-lg font-bold text-white mt-2">Nossos Tratamentos do Setor Capilar:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Combate à Alopecia e Queda:</strong>
                    <p className="text-[11px] text-white/50">Estímulos com óleos essenciais ativos, fitoterápicos e massagem epicraniana de drenagem que revigora os folículos adormecidos.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Corte de Cabelo com Visagismo:</strong>
                    <p className="text-[11px] text-white/50">Análise de temperamento e proporções faciais e aplicação de corte sob medida que transmite seu magnetismo pessoal.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Terapia Nutritiva com Ozonioterapia:</strong>
                    <p className="text-[11px] text-white/50">Uso do vapor de ozônio medicinal para limpar profundamente o couro cabeludo, reduzindo a caspa, dermatites e seborreia.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Fortalecimento Pós-Quimioterapia:</strong>
                    <p className="text-[11px] text-white/50">Estimulação delicada com nutrientes e óleos leves que aceleram o surgimento de novos fios fortes e densos.</p>
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-white mt-4">Metodologia Farmacológica e Natural</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Nossos tratamentos não utilizam produtos químicos agressivos como formol ou amônia tóxica. Priorizamos substâncias biocompatíveis de bio-estimulação com pantenol, jaborandi, urtiga e fitoterápicos de altíssima pureza.
              </p>
            </div>

            {/* Right Card CTA */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-5 text-center">
                <span className="text-gold font-serif text-lg font-bold">Resumo da Terapia</span>
                
                <div className="flex flex-col gap-2.5 text-xs text-white/70 border-t border-b border-white/5 py-4">
                  <div className="flex justify-between">
                    <span>Duração Média:</span>
                    <strong className="text-white">45 a 80 min</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento:</span>
                    <strong className="text-gold">R$ 160,00</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Destaque:</span>
                    <strong className="text-white">Visagismo Personalizado</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Avaliação:</span>
                    <strong className="text-gold">⭐ 4.93/5 (80+ reviews)</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20de%20Design%20Capilar%20e%20Visagismo!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Agendar Atendimento
                </a>
                <span className="text-[10px] text-white/40">Presencial Av. Paulista, São Paulo</span>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-3.5 text-xs text-white/60">
                <div className="flex gap-2.5 items-center">
                  <ShieldCheck className="text-gold text-xs shrink-0" size={16} />
                  <span>Ativos Capilares Orgânicos</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <HeartPulse className="text-gold text-xs shrink-0" size={16} />
                  <span>Abordagem Médica e Autoral</span>
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
