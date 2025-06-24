
import { Code, Brain, Palette, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
    features: ["React & TypeScript", "Responsive Design", "SEO Optimizado", "E-commerce"]
  },
  {
    icon: Brain,
    title: "Servicios de IA",
    description: "Implementamos soluciones de inteligencia artificial para automatizar y optimizar procesos.",
    features: ["Chatbots Inteligentes", "Análisis de Datos", "Machine Learning", "Automatización"]
  },
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "Diseñamos identidades visuales únicas que comunican la esencia de tu marca.",
    features: ["Branding Completo", "Diseño UI/UX", "Material Publicitario", "Packaging"]
  },
  {
    icon: Users,
    title: "Enseñanza y Consultoría",
    description: "Compartimos conocimiento y guiamos equipos hacia la excelencia tecnológica.",
    features: ["Capacitación Técnica", "Consultoría IT", "Mentoría", "Workshops"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para llevar tu proyecto al siguiente nivel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-light-blue-100 hover:border-light-blue-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-light-blue-50 rounded-full w-fit group-hover:bg-light-blue-100 transition-colors">
                  <service.icon className="h-8 w-8 text-light-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800 group-hover:text-light-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-light-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
