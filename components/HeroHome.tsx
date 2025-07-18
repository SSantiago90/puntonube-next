import { ArrowRight, Cloud, Phone } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/ui/button';

import CloudImage from './CloudImage';
import SVGBackground from './ui/svgbackground';

interface HeroHomeProps {
  className?: string;
}

const HeroHome: FC<HeroHomeProps> = ({ className = '' }) => {
  return (
    <section
      id="hero-section"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-t from-sky-400 to-sky-600 pt-20 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-10">
        <SVGBackground />
      </div>
      <CloudImage />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Cloud
              id="logo-cloud"
              style={{ transform: 'rotate(90deg)' }}
              className="h-24 w-24 text-white mx-auto mb-6 drop-shadow-lg"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-md">
            <span className="text-light-blue-200">Tu </span>idea,
            <br />
            <span className="text-light-blue-200">nuestra </span>solución
          </h1>

          <p
            className="text-xl  md:text-2xl text-white mb-8 animate-fade-in drop-shadow-md"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="italic">Tu salto al futuro digital</span>🚀
          </p>

          <p
            className="text-lg text-light-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in drop-shadow-sm"
            style={{ animationDelay: '0.4s' }}
          >
            Desarrollo web, E-commerce, IA, diseño y consultoría para Pymes y
            emprendedores.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Link href="/#services">
              <Button
                size="lg"
                className="bg-white text-light-blue-700 hover:bg-sky-200 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="text-white bg-transparent px-8 hover:text-light-blue-700 hover:bg-sky-200 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactar
                <Phone />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
