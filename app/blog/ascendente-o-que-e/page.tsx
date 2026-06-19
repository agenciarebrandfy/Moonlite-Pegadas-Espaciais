import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Heart, Sparkles, BookOpen } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'O que é Ascendente e como ele influencia sua personalidade? | Pegadas Espaciais',
  description: 'Descubra o significado do Ascendente na sua carta natal, por que ele define sua máscara social e como ele dita a primeira impressão que você passa para o mundo.',
  keywords: ['o que é ascendente', 'influencia ascendente', 'personalidade ascendente', 'astrologia', 'signos', 'máscara social'],
};

export default function ArtigoAscendente() {
  return (
    <div id="artigo-ascendente-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Astrologia Básica</span>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              O que é Ascendente e como ele influencia sua personalidade?
            </h1>
            <div className="flex items-center gap-4 text-xs text-white/50 border-b border-white/5 pb-4">
              <span>Por <strong>Marilene Augusta</strong></span>
              <span>•</span>
              <span>14 de Junho de 2026</span>
              <span>•</span>
              <span>6 min de leitura</span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative w-full h-64 md:h-[360px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/zodiac-stars/800/400"
              alt="Estrelas e planetas ilustrando o signo ascendente"
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
              <h2 className="font-serif text-sm md:text-base font-bold text-gold not-italic mb-2">Resposta Direta: O que é o Signo Ascendente?</h2>
              O **signo ascendente** é aquele que estava cruzando a linha do horizonte leste no exato momento, minuto e segundo em que você deu o seu primeiro suspiro no mundo. Na astrologia, enquanto o Sol expressa seu ego interior e a Lua sua psique emocional, o Ascendente define a sua **máscara social** — ou seja, a forma física e comportamental com que você se expressa, as primeiras impressões que deixa nos outros e os filtros automáticos pelos quais enxerga a realidade ao seu redor.
            </div>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">A Importância do Ascendente no Mapa Astral Profissional</h2>
            <p>
              Muitas pessoas lêem seu horóscopo diário baseado apenas no seu signo solar, mas estranham não se reconhecerem inteiramente nas descrições de sua personalidade. Isso ocorre porque o Sol define nossa energia de núcleo (quem somos no íntimo), enquanto o **Ascendente** é a porta de entrada da nossa personalidade — os traços que demonstramos de forma espontânea e o nosso estilo fisionômico primário.
            </p>
            <p>
              Ele age exatamente como a fachada de uma casa: as pessoas enxergam a fachada primeiro do que a mobília do seu interior (sua energia solar/lunar). É por isso que indivíduos com sol em escorpião mas ascendente em sagitário podem parecer extremamente expansivos e falantes à primeira vista, apenas revelando seu lado cético e introspectivo quando ganham intimidade.
            </p>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Como o Ascendente Define o Seu Corpo Físico</h2>
            <p>
              Na astrologia clássica e na bioenergética integrativa, o ascendente governa a Primeira Casa do zodíaco — que representa o nascimento da forma física. Ele influencia diretamente:
            </p>
            <ul className="list-disc list-inside flex flex-col gap-2.5 pl-2 text-white/70">
              <li><strong className="text-white">Seus Traços de Fisionomia:</strong> O formato de seus olhos, contorno de mandíbula e expressões corporais mais habituais.</li>
              <li><strong className="text-white">Estilo de Vestimenta e Aparência:</strong> Como você se veste para sinalizar sua autoridade social e atração física.</li>
              <li><strong className="text-white">Seu Caminhar e Postura:</strong> A forma mecânica com que você anda e apoia seus pés no chão (onde sua energia física se distribui).</li>
            </ul>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Como cada Elemento rege o filtro de seu Ascendente</h2>
            <p>
              Dependendo do elemento zodiacal que abriga seu Ascendente, sua forma de reagir e se impor ao novo se configura de maneiras distintas:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                <span className="text-gold font-bold font-serif text-xs uppercase block mb-1">🔥 Elemento Fogo (Áries, Leão, Sagitário)</span>
                <p className="text-[11px] text-white/60">Uma postura imediata de otimismo, iniciativa, poder de expansão, franqueza quase ingênua e forte dinamismo corporal.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                <span className="text-gold font-bold font-serif text-xs uppercase block mb-1">🌿 Elemento Terra (Touro, Virgem, Capricórnio)</span>
                <p className="text-[11px] text-white/60">Imediatismo de cautela, solidez silenciosa, respeito a prazos e rituais práticos, postura responsável e pragmatismo estético.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                <span className="text-gold font-bold font-serif text-xs uppercase block mb-1">🌬️ Elemento Ar (Gêmeos, Libra, Aquário)</span>
                <p className="text-[11px] text-white/60">Curiosidade aguçada, sociabilidade espontânea, grande necessidade de estímulo intelectual, fluidez de movimentação e fala articulada.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                <span className="text-gold font-bold font-serif text-xs uppercase block mb-1">💧 Elemento Água (Câncer, Escorpião, Peixes)</span>
                <p className="text-[11px] text-white/60">Sensibilidade perceptível, postura de autopreservação ao entrar em ambientes novos, intuição silenciosa e forte magnetismo afetivo.</p>
              </div>
            </div>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Desbloqueando Seu Poder na Prática</h2>
            <p>
              Compreender o seu Ascendente – e como ele governa as casas de seu mapa astral – é o primeiro e mais importante passo da astrologia terapêutica. Ele desmistifica suas inseguranças de expressão e ensina como canalizar sua força fisionômica para conquistar suas metas.
            </p>
            <p>
              Deseja uma leitura individualizada de alto nível para desvendar todo o seu potencial e obter um laudo em PDF de 20+ páginas feito manualmente? Marilene Augusta está com agendamentos exclusivos abertos.
            </p>

            {/* In-content Link to Services */}
            <div className="border-t border-white/5 pt-6 mt-4 flex flex-col items-center gap-4 text-center">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Alinhamento Cósmico</span>
              <p className="max-w-md text-xs text-white/60">Agende sua leitura do seu Mapa Astral Completo individualizada por Marilene Augusta em nosso consultório virtual ou presencial.</p>
              <Link 
                href="/servicos/mapa-astral" 
                className="bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300"
              >
                Conhecer Serviço de Mapa Astral
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
