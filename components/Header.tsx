
import { Cloud } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-light-blue-200">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-light-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Punto nube</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-light-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#about" className="text-gray-600 hover:text-light-blue-600 transition-colors">
              Acerca de
            </a>
            <a href="#contact" className="text-gray-600 hover:text-light-blue-600 transition-colors">
              Contacto
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
