import './globals.css';
import './app.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LayoutWrapper from '@/components/LayoutWrapper';
import { HeroProvider } from '@/context/HeroContext';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Punto Nube',
  description:
    'Tu Visión, Nuestra Innovación Digital: desarrollo web, IA y diseño de vanguardia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn('light', inter.className)}>
      <head />
      <body className={cn('min-h-screen bg-background antialiased')}>
        <HeroProvider>
          <div className="relative z-10">
            <Header />
            <LayoutWrapper>{children}</LayoutWrapper>
            <Footer />
          </div>
        </HeroProvider>
      </body>
    </html>
  );
}
