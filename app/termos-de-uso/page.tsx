import Link from 'next/link';
import { ArrowLeft, Text } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Termos de Uso | Pegadas Espaciais',
  description: 'Leia os Termos de Uso do site Pegadas Espaciais. Entenda as regras de marcação de consultas, reembolsos, conduta de rituais e responsabilidades técnicas.',
};

export default function TermosDeUso() {
  return (
    <div id="termos-uso-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      <TopBar />
      <Header />

      <main className="flex-1 w-full bg-gradient-to-b from-[#1C0F28] via-[#12081F] to-[#1C0F28] py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-left">
          
          {/* Back key */}
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors duration-200 uppercase tracking-widest">
            <ArrowLeft size={12} />
            <span>Voltar para a home</span>
          </Link>

          {/* Heading metadata */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-2">
              <Text size={24} />
            </div>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              Termos de Uso do Site
            </h1>
            <p className="text-xs text-white/50 border-b border-white/5 pb-4">
              Última atualização: 14 de Junho de 2026
            </p>
          </div>

          {/* Content */}
          <div className="text-xs md:text-sm text-white/80 leading-relaxed flex flex-col gap-6 font-sans">
            <p>
              Seja bem-vindo ao portal **Pegadas Espaciais**. Ao navegar ou utilizar qualquer de nossos recursos, você declara estar integralmente de acordo com estes Termos de Uso.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">1. Política de Agendamentos e Remarcações</h2>
            <p>
              Os rituais e atendimentos realizados de forma clínica presencial ou orientação cósmica virtual são agendados mediante reserva direta pelo WhatsApp de nossa equipe. Compreendendo imprevistos corriqueiros, permitimos a remarcação de datas sem custos adicionais desde que a solicitação seja feita com **no mínimo 24 horas de antecedência** da hora agendada. No-show sem aviso prévio desobriga o templo de estorno do sinal de agendamento por vacância da cabine.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">2. Isenção de Diagnóstico de Saúde Integral</h2>
            <p>
              Os laudos e pareceres emitidos nas consultas de Astrologia, Numerologia Cabalística e Tarot representam recursos simbólicos e arquetípicos para autoconhecimento e direcionamento de escolhas. Estas ferramentas **não constituem e não devem sob qualquer pretexto substituir** diagnósticos médicos formais, laudos psiquiátricos estruturados ou prescrições de profissionais de saúde física ou mental credenciados por conselhos de classe.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">3. Direitos de Propriedade Intelectual</h2>
            <p>
              Todos os artigos autorais dispostos no **Blog O Astrolábio**, fotografias, marcas, logotipos e os dados de estilo presentes neste site são protegidos por leis brasileiras e internacionais de propriedade intelectual. Qualquer reprodução parcial ou integral não autorizada para usufruição comercial ou plágio de layouts configura violação civil sancionável perante juízo de direito.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">4. Disposições Finais</h2>
            <p>
              Estes termos de uso são regidos sob as leis pátrias civis da República Federativa do Brasil, estabelecendo-se de comum acordo o foro central da Comarca de São Paulo - SP para desatar quaisquer intercorrências originadas por estas diretrizes contratuais de uso de canal virtual.
            </p>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
