import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, HelpCircle, Compass, Calculator } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Como saber meu Ascendente: Guia Prático e Gratuito | Pegadas Espaciais',
  description: 'Aprenda o passo a passo para calcular o seu signo Ascendente de graça. Passo a passo para entender sua hora de nascimento e a influência das coordenadas de latitude.',
  keywords: ['como saber meu ascendente', 'calcular ascendente gratis', 'hora de nascimento ascendente', 'latitude longitude astologia'],
};

export default function ComoSaberAscendente() {
  return (
    <div id="artigo-sabendo-ascendente-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Guias e Tutoriais</span>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              Como saber meu ascendente – guia prático, preciso e gratuito
            </h1>
            <div className="flex items-center gap-4 text-xs text-white/50 border-b border-white/5 pb-4">
              <span>Por <strong>Marilene Augusta</strong></span>
              <span>•</span>
              <span>10 de Junho de 2026</span>
              <span>•</span>
              <span>5 min de leitura</span>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative w-full h-64 md:h-[360px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/hourglass/800/400"
              alt="Ampulheta e astrolábio simbolizando o tempo exato para o ascendente"
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
              <h2 className="font-serif text-sm md:text-base font-bold text-gold not-italic mb-2">Tutorial Rápido: Como Saber o Ascendente Gratuitamente?</h2>
              Para calcular o seu signo ascendente com precisão fidedigna, você deve possuir três informações obrigatórias: **a data de nascimento exata**, o **local (cidade e país) do parto**, e a **hora de nascimento precisa com minutos** (que está descrita na sua Certidão de Nascimento). Com esses dados em mãos, você pode utilizar o cálculo manual em nosso templo de atendimento ou usar ferramentas de desenho astronômico na web, inserindo as coordenadas geográficas para descobrir qual constelação cruzava o horizonte leste quando você nasceu.
            </div>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Por que a Hora de Nascimento é Tão Crucial para o Ascendente?</h2>
            <p>
              Muitos clientes perguntam em nosso consultório de astrologia em São Paulo: *&ldquo;Não posso estimar uma hora parecida se eu não souber os minutos exatos?&rdquo;*. A resposta técnica é: **não**. 
            </p>
            <p>
              O movimento de rotação do nosso planeta Terra faz com que o ascendente mude de constelação (signo) a cada **duas horas**, aproximadamente. Uma margem de erro pequena de apenas 5 a 10 minutos nas proximidades da divisa de duas constelações pode alterar totalmente o seu ascendente e consequentemente distorcer a localização de todas as outras 12 casas de sua carta natal. É por isso que recomendamos consultar a certidão de nascimento oficial.
            </p>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">Passo a Passo para Obter o Seu Mapa e Signo Ascendente</h2>
            <p>
              Confira a trilha recomendada para obter o seu ascendente com total clareza e fidelidade astronômica:
            </p>
            
            <ol className="flex flex-col gap-4 list-decimal list-inside text-white/70 pl-2">
              <li>
                <strong className="text-white">Consulte Sua Certidão de Nascimento:</strong>
                <p className="text-[11px] mt-1 pl-5">Encontre o campo específico estruturado da certidão de registro civil. No Brasil, o registo da hora exata do parto com os minutos é um requisito obrigatório e controlado por lei civil pelos médicos de plantão.</p>
              </li>
              <li>
                <strong className="text-white">Identifique o Registro de Fuso Horário e Horário de Verão:</strong>
                <p className="text-[11px] mt-1 pl-5">Se você nasceu em períodos e estados com horário de verão ativo no Brasil, é necessário fazer a correção de fuso em -1 hora no formulário de dados. Nossa astróloga faz todo esse rastreio manual em consultoria.</p>
              </li>
              <li>
                <strong className="text-white">Calcule de Forma Gratuita ou Autoral:</strong>
                <p className="text-[11px] mt-1 pl-5">Utilize os sites de efemérides astronômicas ou peça auxílio manual à nossa equipe Pegadas Espaciais no ato de triagem no WhatsApp – desenhamos seu ascendente exato.</p>
              </li>
            </ol>

            <h2 className="font-serif text-lg md:text-2xl font-bold text-gold mt-4">O Rastreio Certo das Coordenadas Geográficas (Latitude e Longitude)</h2>
            <p>
              Durante a geração do cálculo do signo do horizonte leste, o fuso horário e as coordenadas de **latitude** e **longitude** da sua cidade natal são ponderados. Cidades de nascimento muito extensas (como São Paulo, por exemplo) possuem coordenadas de declinação ligeiramente variadas dependendo do bairro ou maternidade, o que refinamos no cálculo de precisão para mapa profissional.
            </p>
            <p>
              Evite estimativas e erros e encontre o seu plano de evolução vital sem falhas. 
            </p>

            {/* In-content Link to Services */}
            <div className="border-t border-white/5 pt-6 mt-4 flex flex-col items-center gap-4 text-center">
              <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Cálculo Manual Confiável</span>
              <p className="max-w-md text-xs text-white/60">Deseja calcular e receber a interpretação profunda do seu ascendente sem riscos de erros de dados? Fale com nossa equipe técnica.</p>
              <a 
                href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20calcular%20meu%20Ascendente%20de%20forma%20precisa%20conosco."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full transition-all duration-300"
              >
                Solicitar Meu Ascendente no WhatsApp
              </a>
            </div>

          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
