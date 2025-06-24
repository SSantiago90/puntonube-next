
import { ArrowRight, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue-600 to-light-blue-800 pt-20 relative overflow-hidden">
      {/* Textura de fondo con patrón geométrico */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Cloud className="h-24 w-24 text-white mx-auto mb-6 drop-shadow-lg" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Punto <span className="text-light-blue-200">nube</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            Transformamos ideas en soluciones digitales innovadoras
          </p>
          
          <p className="text-lg text-light-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in drop-shadow-sm" style={{ animationDelay: '0.4s' }}>
            Desarrollo web, servicios de IA, diseño gráfico y consultoría tecnológica 
            para impulsar tu negocio hacia el futuro digital
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-white text-light-blue-700 hover:bg-light-blue-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-light-blue-700 px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
