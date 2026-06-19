import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Heart, Sparkles } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Sinastria Amorosa: Entenda a Compatibilidade Astrológica | Pegadas Espaciais',
  description: 'Guia completo para entender a Sinastria Astrológica. Descubra como avaliar o amor, comunicação e afinidade combinando duas cartas natais.',
  keywords: ['sinastria amorosa', 'compatibilidade de signos', 'venus no mapa astral', 'amor astrologia', 'são paulo', 'marilene augusta'],
};

export default function ArtigoSinastria() {
  return (
    <div id="artigo-sinastria-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Relacionamentos e Astrologia</span>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              Sinastria amorosa: como funciona o cruzamento de dois mapas?
            </h1>
            <div className="flex items-center gap-4 text-xs text-white/50 border-b border-white/5 pb-4">
              <span>Por <strong>Marilene Augusta</strong></span>
              <span>•</span>
              <span>28 de Maio de 2026</span>
              <span>•</span>
              <span>8 min de leitura</span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative w-full h-64 md:h-[360px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/love-stars/800/400"
              alt="Planetas e constelações entrelaçadas simbolizando a sinastria amorosa"
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
              <h2 className="font-serif text-sm md:text-base font-bold text-gold not-italic mb-2">Resposta Rápida: O que é Sinastria Astrológica?</h2>
              A **sinastria** é um método astrológico avançado focado em cruzar e sobrepor as localizações de dois mapas astrais diferentes (seja de um casal, sócios comerciais ou pais e filhos). Essa técnica permite analisar com alta fidelidade de detalhes onde as energias de ambos se harmonizam perfeitamente, onde estão os focos latentes de tensão e incompreensão, e quais são os melhores caminhos para nutrir uma convivência mútua saudável, amorosa e empática.
            </div>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">A Ilusão da Compatibilidade do Horóscopo de Revista</h2>
            <p>
              Quem nunca ouviu frases do tipo: *&ldquo;Eu sou de Touro e ela de Áries, então nosso namoro nunca vai dar certo devido ao temperamento&rdquo;*. Esse é um enorme equívoco disseminado pela astrologia superficial de mídias de grande escala.
            </p>
            <p>
              O amor e a dinâmica de sustentação de afeto entre dois seres humanos dependem de dezenas de outros aspectos e astros representados na carta natal. O signo solar é apenas um deles. Para avaliar se duas pessoas têm sintonia a longo prazo, precisamos estudar o encaixe de dezenas de posições celestes mais direcionadas e sutis.
            </p>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Os Forças Principais Observadas na Sinastria Amorosa</h2>
            <p>
              Durante a realização de uma consulta de sinastria na **Pegadas Espaciais**, Marilene Augusta se atém ao estudo das seguintes frentes de energia:
            </p>
            
            <ul className="flex flex-col gap-4 pl-2 text-white/70">
              <li className="flex gap-2.5 items-start">
                <Heart size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">O Encaixe de Vênus e Marte:</strong>
                  <p className="text-[11px] mt-1 text-white/60">A energia de atração física, estética e o desejo de harmonia de Vênus acoplada à ação, paixão corporal e ímpeto sexual representado por Marte.</p>
                </div>
              </li>
              <li className="flex gap-2.5 items-start">
                <Sparkles size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">A Comunicação de Mercúrio:</strong>
                  <p className="text-[11px] mt-1 text-white/60">A fluidez dos diálogos cotidianos e intelectualidade, revelando se o casal consegue resolver problemas de rotina ou se os debates tendem ao ruído.</p>
                </div>
              </li>
              <li className="flex gap-2.5 items-start">
                <User size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">A Aliança Sol/Lua:</strong>
                  <p className="text-[11px] mt-1 text-white/60">O conforto de alma de estarem juntos. Se a Lua de um parceiro repousa em harmonia com o Sol do outro, há sensação de segurança mútua.</p>
                </div>
              </li>
            </ul>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">O Estudo das Casas do Amor (Casas 5, 7 e 8)</h2>
            <p>
              As sobreposições de planetas do parceiro A nas casas do parceiro B revelam as esferas concretas da vida em que a relação se consumará. Atividades lúdicas de flerte ativam a **Casa 5**; o compromisso de casamento a **Casa 7**; e o compartilhamento de finanças profundas e intimidade sexual ativa a **Casa 8**.
            </p>
            <p>
              Para casais que buscam resolver conflitos velados ou simplesmente aprofundar a conexão emocional, a análise de sinastria é o recurso de diagnóstico estelar mais valioso existente.
            </p>

            {/* In-content Link to Services */}
            <div className="border-t border-white/5 pt-6 mt-4 flex flex-col items-center gap-4 text-center">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Orientação Estelar para o Amor</span>
              <p className="max-w-md text-xs text-white/60">Agende sua análise de Sinastria por videoconferência com laudo completo. Alinhe suas expectativas de forma consciente.</p>
              <Link 
                href="/servicos/mapa-astral" 
                className="bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300"
              >
                Conhecer Atendimento Astrológico
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
