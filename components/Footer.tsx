
import { Cloud, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cloud className="h-8 w-8 text-light-blue-400" />
            <span className="text-2xl font-bold">Punto nube</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Transformando ideas en soluciones digitales innovadoras
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-gray-400">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>por el equipo de Punto nube</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2024 Punto nube. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
