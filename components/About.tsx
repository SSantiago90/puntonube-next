
import { Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-light-blue-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Acerca de Punto nube
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Somos un equipo de profesionales apasionados por la tecnología y el diseño. 
            Nos especializamos en crear soluciones digitales que impulsan el crecimiento 
            de nuestros clientes en la era digital.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white rounded-full w-fit shadow-lg">
                <Target className="h-8 w-8 text-light-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Misión</h3>
              <p className="text-gray-600">
                Democratizar el acceso a tecnologías avanzadas y diseño de calidad
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white rounded-full w-fit shadow-lg">
                <Lightbulb className="h-8 w-8 text-light-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visión</h3>
              <p className="text-gray-600">
                Ser referentes en innovación digital y transformación tecnológica
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-4 p-4 bg-white rounded-full w-fit shadow-lg">
                <Rocket className="h-8 w-8 text-light-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Valores</h3>
              <p className="text-gray-600">
                Innovación, calidad, transparencia y compromiso con el éxito del cliente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
