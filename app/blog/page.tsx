import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, BookOpen, Clock } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: 'Blog O Astrolábio | Pegadas Espaciais',
  description: 'Leia artigos e guias profundos sobre astrologia, reflexologia, podologia avançada, cuidados com os pés e sabedoria cósmica com Marilene Augusta.',
  keywords: ['blog astrologia', 'blog podologia', 'dicas reflexologia', 'como saber ascendente', 'signos compatibilidade'],
};

const posts = [
  {
    title: 'O que é ascendente e como ele influencia sua personalidade?',
    slug: 'ascendente-o-que-e',
    date: '14 Jun 2026',
    author: 'Marilene Augusta',
    readTime: '6 min de leitura',
    summary: 'Entenda os mistérios do Ascendente, a máscara social que você usa no primeiro contato com o mundo externo e sua fundamental importância na Astrologia.',
    category: 'Astrologia',
    image: 'https://picsum.photos/seed/zodiac-stars/400/250'
  },
  {
    title: 'Como saber meu ascendente – guia prático e gratuito',
    slug: 'como-saber-meu-ascendente',
    date: '10 Jun 2026',
    author: 'Marilene Augusta',
    readTime: '5 min de leitura',
    summary: 'A hora de nascimento exata é necessária para calcular o ascendente? Descubra o método simples, passo a passo, para obter o seu sem erros e sem pagar nada.',
    category: 'Guias e Tutoriais',
    image: 'https://picsum.photos/seed/hourglass/400/250'
  },
  {
    title: 'Mapa astral gratuito vs profissional: qual escolher?',
    slug: 'mapa-astral-gratuito',
    date: '02 Jun 2026',
    author: 'Marilene Augusta',
    readTime: '7 min de leitura',
    summary: 'A verdade que ninguém te conta sobre os geradores robóticos automáticos de mapas e por que um dossiê interpretado de forma humana faz toda a diferença.',
    category: 'Astrologia Sênior',
    image: 'https://picsum.photos/seed/crystalball/400/250'
  },
  {
    title: 'Sinastria amorosa: entenda a compatibilidade entre signos',
    slug: 'sinastria-guia',
    date: '28 Mai 2026',
    author: 'Marilene Augusta',
    readTime: '8 min de leitura',
    summary: 'Descubra como os luminares de dois mapas astrais interagem e saiba se você e seu parceiro possuem alinhamento e harmonia nas casas do amor.',
    category: 'Sinastria',
    image: 'https://picsum.photos/seed/love-stars/400/250'
  },
  {
    title: '5 cuidados essenciais para manter os pés saudáveis e leves',
    slug: 'cuidados-com-os-pes',
    date: '15 Mai 2026',
    author: 'Marilene Augusta',
    readTime: '5 min de leitura',
    summary: 'Os pés são as fundações de nosso templo. Descubra cinco hábitos fundamentais de podologia preventiva e assepsia para revigorar seu caminhar diariamente.',
    category: 'Podologia Preventiva',
    image: 'https://picsum.photos/seed/feet-care/400/250'
  }
];

export default function BlogIndex() {
  return (
    <div id="blog-index-root" className="min-h-screen relative flex flex-col overflow-x-hidden stars-bg">
      <TopBar />
      <Header />

      <main className="flex-1 w-full bg-gradient-to-b from-[#1C0F28] via-[#12081F] to-[#1C0F28] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* Header section */}
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">Conteúdo e Conhecimento</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
              Blog O Astrolábio
            </h1>
            <div className="h-0.5 w-16 bg-gold mx-auto"></div>
            <p className="text-xs md:text-sm text-white/60">
              Guias concebidos por Marilene Augusta para iluminar sua jornada com dicas práticas de cuidado corporal e interpretações astrológicas.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div 
                key={post.slug}
                id={`blog-post-card-${post.slug}`}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden flex flex-col hover:border-gold/30 transition-all duration-300 transform hover:translate-y-[-4px]"
              >
                {/* Image Wrap */}
                <div className="relative w-full h-48 bg-mythic-dark">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C0F28]/90 text-gold text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-gold/20">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3.5 flex-1 text-left">
                  <div className="flex items-center gap-4 text-[10px] text-white/40">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-sm md:text-base font-bold text-white group-hover:text-gold transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-white/60 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between">
                    <span className="text-[11px] text-white/50">Por {post.author}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-xs text-gold font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Ler Artigo <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter / Call out banner */}
          <div className="mt-12 rounded-3xl border border-gold/20 bg-gold/[0.02] p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-4">
            <BookOpen className="text-gold" size={32} />
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white">Deseja receber agendamentos ou consultar Marilene?</h3>
            <p className="text-xs md:text-sm text-white/70 max-w-2xl leading-relaxed">
              Marilene Augusta disponibiliza atendimentos e consultorias exclusivas para analisar seu mapa, traçar sua numerologia ou realizar tratamentos clínicos em nosso consultório da Av. Paulista.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1,%20li%20o%20blog%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-gold hover:bg-gold-hover text-mythic-dark font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Falar com Marilene Paulista
            </a>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
