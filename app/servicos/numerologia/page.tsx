import Link from 'next/link';
import Image from 'next/image';
import { Hash, ShieldCheck, Heart, Award, ArrowLeft, ClipboardList } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Consultoria de Numerologia Cabalística em São Paulo | Pegadas Espaciais',
  description: 'Desvende o poder dos números em sua vida. Alinhamento de assinaturas para marcas, missão de vida, número pessoal e destino profissional.',
  keywords: ['numerologia', 'numerologia cabalística', 'assinatura próspera', 'número da alma', 'são paulo', 'missão de vida'],
};

export default function NumerologiaServico() {
  return (
    <div id="numerologia-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
              Numerologia Terapêutica & Cabalística
            </h1>
            <div className="h-0.5 w-16 bg-gold"></div>
            <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed">
              O cálculo fidedigno das frequências vibratórias e códigos matemáticos que determinam sua vocação, herança cármica e poder de atração em São Paulo.
            </p>
          </div>

          {/* Core Banner Image */}
          <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <Image
              src="https://picsum.photos/seed/numerology-astrology/1200/600"
              alt="Estudo de Numerologia Cabalística de Alta Performance"
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
              <h2 className="font-serif text-2xl font-bold text-gold">Os Códigos Matemáticos da Matriz Existencial</h2>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Toda palavra e data expressa uma vibração matemática imutável na estrutura do universo. Através da numerologia cabalística e pitagórica aplicada, Marilene Augusta traduz as vogais, consoantes e data do seu nascimento para organizar um mapa estratégico focado na sua expansão pessoal, profissional e afetiva.
              </p>
              
              <h3 className="font-serif text-lg font-bold text-white mt-2">Áreas de Cobertura do Estudo de Números:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/80">
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Número de Destino e Missão:</strong>
                    <p className="text-[11px] text-white/50">Identificação clara do seu propósito de encarnação, lições de vida e talentos inatos de autoria.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Assinatura Próspera (Branding Pessoal):</strong>
                    <p className="text-[11px] text-white/50">Ajuste minucioso na grafia de sua assinatura pessoal ou comercial para atrair o magnetismo do sucesso financeiro.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Ciclos e Desafios Temporais:</strong>
                    <p className="text-[11px] text-white/50">Entendimento de anos pessoais, divisas de trânsito e o momento ideal para casar, abrir um negócio ou viajar.</p>
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong>Dívidas Cármicas de Alma:</strong>
                    <p className="text-[11px] text-white/50">Identificação de obstruções energéticas decorrentes de excessos ancestrais e rituais para desatar os nós.</p>
                  </div>
                </li>
              </ul>

              <h3 className="font-serif text-lg font-bold text-white mt-4">Associação Próspera Corporativa</h3>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Auxiliamos empresários e empreendedores capixabas e paulistas na escolha matemática do nome de marcas (naming), logradouros, datas de registro em CNPJ e dados de faturamento para potencializar a prosperidade nos negócios.
              </p>
            </div>

            {/* Right Card CTA */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex flex-col gap-5 text-center">
                <span className="text-gold font-serif text-lg font-bold">Resumo da Numerologia</span>
                
                <div className="flex flex-col gap-2.5 text-xs text-white/70 border-t border-b border-white/5 py-4">
                  <div className="flex justify-between">
                    <span>Prazo de Entrega:</span>
                    <strong className="text-white">4 a 6 dias úteis</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Investimento:</span>
                    <strong className="text-gold">R$ 197,00</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Laudo Emitida:</span>
                    <strong className="text-white">Dossiê Completo PDF</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Agendamento:</span>
                    <strong className="text-white">WhatsApp</strong>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20minha%20consulta%20de%20Numerologia%20Cabal%C3%ADstica!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Solicitar Consulta
                </a>
                <span className="text-[10px] text-white/40">Sessão explicativo complementar inclusa</span>
              </div>

              {/* Trust factors */}
              <div className="flex flex-col gap-3.5 text-xs text-white/60">
                <div className="flex gap-2.5 items-center">
                  <ClipboardList className="text-gold text-xs shrink-0" size={16} />
                  <span>Dossiê Matemático Fiel</span>
                </div>
                <div className="flex gap-2.5 items-center">
                  <Hash className="text-gold text-xs shrink-0" size={16} />
                  <span>Técnicas Confiáveis de Pitágoras</span>
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
