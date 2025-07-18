import { FileQuestionMark } from 'lucide-react';
import Link from 'next/link';

import CloudImage from '@/components/CloudImage';
import SVGBackground from '@/components/ui/svgbackground';

const NotFound = () => {
  console.warn('404 Error: User attempted to access non-existent route:');

  return (
    <section
      id="404-section"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-sky-950 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <SVGBackground />
      </div>
      <CloudImage />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-float">
              <FileQuestionMark className="h-24 w-24 text-white mx-auto mb-6 drop-shadow-lg" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 animate-fade-in drop-shadow-lg">
              Página no encontrada
            </h1>
          </div>
          <h3 className="text-xl mb-4 text-white opacity-60">
            Te pedimos disculpas, parece que la ruta que buscas no existe😢
          </h3>

          <p className="text-lg text-gray-200 mt-10">
            <Link href="/" className="underline cursor-pointer">
              Click aquí para regresar
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
