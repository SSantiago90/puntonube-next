"use client";
import { useRef } from "react";
import { Code, Brain, Palette, Users } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Function to remove accents and convert to URL-friendly format
const createUrlSlug = (text: string) => {
  // Special mapping for specific services to match folder names
  const urlMapping: { [key: string]: string } = {
    "Desarrollo Web": "desarrollo-web",
    "Diseño Gráfico": "diseno",
    "Servicios IA": "inteligencia-artificial",
    "Consultoría y Capacitación Tecnológica": "consultoria"
  };
  
  return urlMapping[text] || text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove any other non-alphanumeric characters except hyphens
};

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Diseño y desarrollo de sitios web personalizados",
    features: ["Multiplicá tus ventas creando tu tienda online", "Soluciones pensadas exclusivamente para vos.", "Ecommerce, Blog, Portfolios para profesionales.", "Administrá vos mismo el contenido de tu web"],
    color: "from-sky-500 to-sky-700",
    iconColor: "#0099ff"
  },
  {
    icon: Users,
    title: "Consultoría y Capacitación Tecnológica",
    description: "Asesoramiento para tu equipo, y capacitación para emprendedores y profesionales independientes.",
    features: ["Capacitamos a tu equipo sobre las tendencias del mercado", "Workshops para emprendedores y profesionales", "Sesiones personalizadas de aprendizaje:"],
    color: "from-teal-400 to-teal-600",
    iconColor: "#009688"
  },
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "Diseñamos identidades visuales únicas que comunican la esencia de tu marca.",
    features: ["Impacta a primera vista", "Marcas coherentes y profesionales", "Materiales que conectan y venden", "Diseños optimizados para el mundo digital "],
    color: "from-orange-400 to-orange-600",
    iconColor: "#ee8500"
  },
  {
    icon: Brain,
    title: "Servicios IA",
    description: "Implementamos soluciones de inteligencia artificial para automatizar y optimizar procesos.",
    features: ["Chats automatizados que trabajan por vos", "Automatización de tareas ", "Decisiones más inteligentes con tus datos"],
    color: "from-purple-500 to-purple-700",
    iconColor: "#7a00e6"
  },
];

const Services = () => {
  // We'll use an array of refs for each card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handler for mouse movement
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 12; 
      const rotateY = ((centerX - x) / centerX) * 12; 
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    }
  };

  // Handler for mouse leave
  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubrí cómo potenciar tu marca con soluciones de punta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className={
                `group relative overflow-hidden transition-all duration-500 ease-out border-0 bg-white cursor-pointer perspective-1000 ` +
                `hover:shadow-2xl hover:z-20`
              }
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={e => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Hover overlay with gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none`}></div>
              {/* Pattern background, matching Hero */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none z-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                }}
              />
              {/* Hidden div for tailwind compile purposes */}
              <div className="hidden">
                <span className="text-[#009688] group-hover:text-[#009688]"></span>
                <span className="text-[#7a00e6] group-hover:text-[#7a00e6]"></span>
                <span className="text-[#ee8500] group-hover:text-[#ee8500]"></span>
                <span className="text-[#0099ff] group-hover:text-[#0099ff]"></span>
                </div>
              <div className="relative z-10 transition-all duration-500 ease-out group-hover:text-white">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-white rounded-full w-fit group-hover:bg-white/20 transition-all duration-500 ease-out group-hover:scale-110`}>
                    <service.icon                      
                      className={`h-8 w-8 text-[${service.iconColor}] hover:text-white group-hover:text-white transition-colors duration-500`} 
                    />
                  </div>
                  <CardTitle className="text-3xl text-gray-800 group-hover:text-white transition-colors duration-500 font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 text-lg font-semibold">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                        <div className="w-2 h-2 bg-gray-400 group-hover:bg-white rounded-full mr-3 transition-colors duration-500"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex justify-center">
                    <Link href={`/servicios/${createUrlSlug(service.title)}`}
                      passHref>
                      <Button
                        asChild
                        className="group-hover:bg-white group-hover:text-black transition-colors duration-500 font-semibold px-6 py-2 rounded-full shadow-md"
                      >
                        <span className={`group-hover:text-[${service.iconColor}] transition-colors duration-200`}>
                          Saber más
                        </span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

