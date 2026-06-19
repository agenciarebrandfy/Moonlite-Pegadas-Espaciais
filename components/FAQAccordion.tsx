'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    p: 'O que é mapa astral e para que serve?',
    r: 'Mapa astral é a fotografia do céu no exato momento do seu nascimento. Ele revela seu ascendente, a posição da Lua e dos planetas. Serve para autoconhecimento, identificar talentos e desafios, e tomar decisões alinhadas ao seu propósito.'
  },
  {
    p: 'Como saber meu ascendente de graça?',
    r: 'Para descobrir seu ascendente você precisa da hora, data e local de nascimento. Oferecemos uma calculadora e orientação simplificada em nosso blog. O ascendente muda a cada 2 horas, por isso a hora exata é essencial.'
  },
  {
    p: 'A podologia dói? É segura para idosos e diabéticos?',
    r: 'Não. Nossos procedimentos de podologia clínica são indolores e seguem protocolos rigorosos. Atendemos idosos e diabéticos com técnicas suaves, evitando cortes e garantindo a segurança absoluta dos pés.'
  },
  {
    p: 'Qual a diferença entre mapa astral gratuito e o mapa profissional?',
    r: 'O mapa astral gratuito mostra apenas as posições planetárias brutas. O mapa astral profissional inclui a interpretação detalhada de cada planeta, casas astrológicas, aspectos e um relatório em PDF com orientações práticas personalizadas.'
  },
  {
    p: 'Posso fazer massagem nos pés se tenho fascite plantar?',
    r: 'Sim. A massagem específica para fascite plantar alivia a tensão da fáscia e reduz significativamente a inflamação. Nossos terapeutas combinam técnicas de liberação miofascial com alongamentos específicos que aceleram a recuperação.'
  },
  {
    p: 'O que é sinastria e como ela ajuda no relacionamento?',
    r: 'Sinastria é a comparação e sobreposição de dois mapas astrais para entender compatibilidades amorosas, desafios e pontos de harmonia. É ideal para casais ou quem deseja aprimorar a comunicação e a empatia mútua.'
  },
  {
    p: 'Quanto tempo dura uma consulta de podologia?',
    r: 'Nossas consultas de podologia clínica duram entre 40 e 60 minutos. Procedimentos específicos, como a desobstrução de unha encravada, levam cerca de 30 minutos, incluindo assepsia, tratamento e orientações para cuidados contínuos.'
  },
  {
    p: 'A numerologia realmente funciona? É ciência?',
    r: 'A numerologia é uma ferramenta simbólica e milenar de autoconhecimento baseada em estudos antigos (escola pitagórica). Não é uma ciência exata nos moldes cartesianos, mas oferece diagnósticos extremamente assertivos sobre vocação e ciclo de evolução pessoal.'
  },
  {
    p: 'Vocês atendem presencialmente ou online?',
    r: 'Nossos tratamentos físicos (podologia, estética avançada e design capilar) são presenciais em São Paulo. As consultas de orientação cósmica (mapa astral, numerologia e tarot) podem ser realizadas de forma 100% online por videoconferência.'
  },
  {
    p: 'Como agendar um serviço na Pegadas Espaciais?',
    r: 'Basta clicar em qualquer botão do WhatsApp deste site ou enviar uma mensagem para (11) 99999-9999. Nossa equipe de acolhimento responde em até 2 horas. As vagas são limitadas para garantir exclusividade e atenção plena.'
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-accordion-root" className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            id={`faq-item-${index}`}
            className="border border-white/5 rounded-2xl bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gold/25"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-white hover:text-gold transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle size={18} className="text-gold shrink-0" />
                <h3 className="font-serif text-sm md:text-base font-bold tracking-tight">
                  {faq.p}
                </h3>
              </div>
              <ChevronDown
                size={18}
                className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-white/70 leading-relaxed border-t border-white/5 bg-white/[0.01]">
                    <p>{faq.r}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
