import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Política de Privacidade | Pegadas Espaciais',
  description: 'Leia nossa Política de Privacidade em conformidade com a LGPD. Saiba como protegemos seus dados pessoais e informações de consultas na Pegadas Espaciais.',
};

export default function PoliticaPrivacidade() {
  return (
    <div id="politica-privacidade-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
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
              <Shield size={24} />
            </div>
            <h1 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-white tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-xs text-white/50 border-b border-white/5 pb-4">
              Última atualização: 14 de Junho de 2026
            </p>
          </div>

          {/* Content */}
          <div className="text-xs md:text-sm text-white/80 leading-relaxed flex flex-col gap-6 font-sans">
            <p>
              A **Pegadas Espaciais**, de titularidade de Marilene Augusta dos Santos, valoriza a privacidade e segurança de todos os seus clientes e usuários. Esta Política de Privacidade descreve de que forma coletamos, armazenamos e tratamos os seus dados pessoais e prontuários de atendimento clínico ou cósmico em consonância com a **Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)**.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">1. Coleta de Informações e Prontuários</h2>
            <p>
              Coletamos as informações estritamente necessárias para a prestação qualificada de nossos rituais:
            </p>
            <ul className="list-disc list-inside pl-2 flex flex-col gap-2 text-white/70">
              <li>**Dados de Acolhimento e Contato:** Nome completo, e-mail, telefone celular (WhatsApp) e endereço.</li>
              <li>**Dados Clínicos (Podologia/Estética):** Registro de condições fisiológicas, diabetes, alergias e histórico de saúde dos pés.</li>
              <li>**Dados Cósmicos (Astrologia/Numerologia):** Data exata de nascimento, hora exata registrada em certidão e local de nascimento (cidade/país).</li>
            </ul>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">2. Finalidade do Tratamento de Dados</h2>
            <p>
              Todos os seus dados coletados destinam-se exclusivamente para:
            </p>
            <ul className="list-disc list-inside pl-2 flex flex-col gap-2 text-white/70">
              <li>Agendar e confirmar as suas consultas no consultório virtual ou presencial;</li>
              <li>Elaborar o seu laudo de interpretação profissional de Mapa Astral com mais de 20 páginas em PDF;</li>
              <li>Garantir a total conformidade médica e biossanitária de assepsia durante os cuidados clínicos de podologia.</li>
            </ul>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">3. Confidencialidade e Compartilhamento</h2>
            <p>
              Adotamos políticas rígidas de sigilo profissional. **Nenhum dado clínico, laudo de tarot ou interpretação de mapa astral é comercializado, exposto ou compartilhado** com quaisquer terceiros sem o consentimento prévio e por escrito do titular da consulta, salvaguardado por deveres legais.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">4. Armazenamento Seguro</h2>
            <p>
              Os prontuários clínicos e arquivos celestes gerados de forma individual por Marilene Augusta são mantidos em ambientes criptografados e com restrição estrita de acesso. As cópias de relatórios em PDF são excluídas dos bancos de processamento ativo após 180 dias do envio ao cliente, restando apenas arquivos anonimizados para acompanhamento clínico recorrente.
            </p>

            <h2 className="font-serif text-lg md:text-xl font-bold text-gold mt-2">5. Seus Direitos Legais</h2>
            <p>
              Em obediência à LGPD, você possui o direito inalienável de solicitar a qualquer tempo a correção de seus dados inexatos, a confirmação da existência do tratamento ou a exclusão total e definitiva de seus registros de contato de nossos sistemas virtuais. Para exercer tais direitos, entre em contato via e-mail em <a href="mailto:contato@pegadasespaciais.com.br" className="text-gold hover:underline">contato@pegadasespaciais.com.br</a>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
