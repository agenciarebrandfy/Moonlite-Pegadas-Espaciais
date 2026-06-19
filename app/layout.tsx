import type {Metadata} from 'next';
import {Playfair_Display, Inter} from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Pegadas Espaciais | Estética Avançada e Mapa Astral em São Paulo',
  description: 'Tratamentos clínicos e especializados para os pés, design capilar e análises astrológicas profundas. O encontro da ciência com o cosmos em São Paulo.',
  keywords: ['podologia', 'estética avançada', 'mapa astral', 'design capilar', 'numerologia', 'tarot', 'são Paulo'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-mythic-dark text-white font-sans antialiased selection:bg-gold selection:text-mythic-dark" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
