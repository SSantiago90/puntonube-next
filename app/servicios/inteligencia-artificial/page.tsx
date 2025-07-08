import { ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const subServices = [
  {
    icon: Brain,
    title: "Chatbots Inteligentes",
    description: "Automatizá la atención al cliente con IA.",
    features: ["Respuestas automáticas 24/7", "Integración con WhatsApp y web", "Personalización avanzada", "Ahorro de tiempo y recursos"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Brain,
    title: "Automatización de Procesos",
    description: "Optimizá tareas repetitivas con inteligencia artificial.",
    features: ["Procesos más rápidos", "Reducción de errores", "Aumento de productividad", "Escalabilidad"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Brain,
    title: "Análisis de Datos",
    description: "Tomá mejores decisiones con datos procesados por IA.",
    features: ["Visualización de insights", "Predicción de tendencias", "Informes automáticos", "Soporte a la toma de decisiones"],
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
  }
];

const AIPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero className="from-violet-600 to-violet-800" nextLink="/servicios/consultoria" prevLink="/servicios/diseno" color="text-violet-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md">
              <span className="block text-purple-200">Automatización</span>mediante IA
              
            </h1>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-2xl">
            Trabajá de forma más inteligente, no más complicada. Implementamos soluciones de automatización e inteligencia artificial para optimizar tus operaciones, ahorrarte tiempo y potenciar tu productividad.
            </p>
            <Button size="lg" className="bg-white text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-50 text-lg px-8 py-4">
              Empezar mi proyecto
              <ArrowRight className="ml-2 h-6 w-6 text-indigo-700" />
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="relative ">                  
                  <img 
                    src="/img/mockup-web.png" 
                    alt="IA mockup"
                    className="w-full h-full object-cover rounded-xl"
                  />
              </div>
            </div>
          </div>
        </div>
      </Hero>
      {/* Sub-services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Soluciones de Inteligencia Artificial
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Automatizá, optimizá y hacé crecer tu negocio con IA a medida.
            </p>
          </div>
          <div className="space-y-20 max-w-7xl mx-auto">
            {subServices.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-14 items-center`}
              >
                <div className="flex-1">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-purple-50 rounded-2xl">
                      <service.icon className="h-10 w-10 text-purple-700" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-lg text-gray-700">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPage; 