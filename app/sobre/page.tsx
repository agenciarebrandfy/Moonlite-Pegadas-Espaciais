import Image from 'next/image';
import { Star, Shield, Award, Calendar, Heart, ShieldAlert, AwardIcon } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Sobre() {
  return (
    <div id="sobre-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      <TopBar />
      <Header />

      <main className="flex-1 w-full bg-gradient-to-b from-[#1C0F28] via-[#12081F] to-[#1C0F28] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">A Jornada de uma Alma</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              Marilene Augusta dos Santos
            </h1>
            <div className="h-0.5 w-16 bg-gold mx-auto"></div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              Descubra a história de dedicação clínica e sabedoria cósmica por trás do desenvolvimento refinado da Pegadas Espaciais.
            </p>
          </div>

          {/* First Biographic Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src="https://picsum.photos/seed/marilene-augusta/600/800"
                alt="Marilene Augusta dos Santos - Fundadora da Pegadas Espaciais"
                fill
                sizes="(max-width: 768px) 320px, 450px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6 text-left items-start">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gold">
                Duas Décadas de Conhecimento Cruzando Fronteiras
              </h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Marilene Augusta dedicou mais de 20 anos ao estudo integrativo da fisiologia humana e das leis invisíveis do universo. Tendo iniciado sua carreira clínica em renomados centros de podologia na Europa, onde aperfeiçoou técnicas avançadas de assepsia e reabilitação, ela percebeu que as dores do corpo físico muitas vezes guardam perfeita ressonância com os ciclos e tensões da alma.
              </p>
              
              <p className="text-xs md:text-sm text-white/75 leading-relaxed">
                Ao regressar ao Brasil, Marilene aprofundou-se nas ciências milenares da Astrologia de Alta Precisão, na Numerologia Pitagórica e no Tarot de decisão arquetípica. Foi desta semente holística — que une a assepsia médica da podologia clássica com as coordenadas de orientação estelar — que nasceu o templo de bem-estar **Pegadas Espaciais**.
              </p>

              <blockquote className="border-l-4 border-gold pl-4 text-white/90 italic text-sm leading-relaxed my-2 bg-white/[0.01] py-3 pr-4 rounded-r-xl w-full">
                &ldquo;Cuidar dos pés é tratar a fundação em que o ser humano se apoia na Terra. Entender o mapa astral é desvelar o caminho pelo qual essa fundação caminhará.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Core Values / Methodology */}
          <div className="py-12 border-t border-b border-white/5">
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl font-bold text-white">Nossos Pilares de Atuação</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                  <Shield size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Rigor Clínico Absoluto</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Todos os procedimentos fisiológicos seguem à risca as normas de vigilância biossanitária mais restritas, com materiais 100% esterilizados em autoclave e assepsia médica de nível hospitalar.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                  <Star size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Sabedoria Cósmica de Autoridade</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Isento de misticismo superficial ou automações baratas. Nossos laudos astrológicos e matemáticos são calculados e interpretados manualmente para prover o maior grau de acerto e aconselhamento prático.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                  <Heart size={20} />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Acolhimento Exclusivo</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Não realizamos atendimentos apressados. Nosso templo opera em um formato de baixa densidade, atendendo poucos clientes por dia para garantir atenção plena e customização cirúrgica de cada ritual.
                </p>
              </div>
            </div>
          </div>

          {/* Formations list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-left items-start">
              <h3 className="font-serif text-2xl font-bold text-white">Qualificações e Certificações</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Toda autoridade técnica de Marilene é mantida com aperfeiçoamento contínuo em especializações internacionais:
              </p>
              
              <ul className="flex flex-col gap-4 text-xs md:text-sm text-white/80 w-full">
                <li className="flex gap-3 items-start">
                  <div className="h-5 w-5 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white">Podologia Médica Geral</strong>
                    <p className="text-[11px] text-white/50">Diplomado pela Associação Europeia de Podatria e Farmacologia Local</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5 w-5 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white">Especialização em Órteses e Laserterapia</strong>
                    <p className="text-[11px] text-white/50">Tratamento avançado de unhas encravadas severas e assepsia integral</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5 w-5 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white">Astrologia Hermética Clássica</strong>
                    <p className="text-[11px] text-white/50">Análise fidedigna de aspectos e casas astrológicas focado em desenvolvimento de carreira</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5 w-5 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white">Reflexologia e Bioenergética Integrada</strong>
                    <p className="text-[11px] text-white/50">Cuidado complementar que estimula ramificações do sistema nervoso nos pés</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-8 flex flex-col gap-6 items-center text-center max-w-md mx-auto">
              <span className="text-gold text-3xl">✨</span>
              <h4 className="font-serif text-lg font-bold text-white">Pronto para encontrar seu equilíbrio?</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Deixe que Marilene Augusta analise seu caminhar fisiológico e guie seu destino cósmico em uma única consulta ou ritual completo.
              </p>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Marilene,%20gostaria%20de%20conversar%20sobre%20meus%20cuidados."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-full transition-all duration-300"
              >
                Conversar Conosco no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
