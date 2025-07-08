import { Code, ShoppingCart, User, Edit3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const subServices = [
  {
    icon: ShoppingCart,
    title: "E-commerce Personalizado",
    description: "Multiplicá tus ventas creando tu tienda online",
    features: ["Carrito de compras optimizado", "Pasarelas de pago seguras", "Gestión de inventario", "Analytics de ventas"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: User,
    title: "Soluciones Exclusivas",
    description: "Soluciones pensadas exclusivamente para vos.",
    features: ["Diseño personalizado", "Funcionalidades específicas", "Integración con sistemas existentes", "Soporte técnico dedicado"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Code,
    title: "Sitios Profesionales",
    description: "Ecommerce, Blog, Portfolios para profesionales.",
    features: ["Portafolios creativos", "Blogs optimizados para SEO", "Sitios corporativos", "Landing pages efectivas"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Edit3,
    title: "Gestión Autónoma",
    description: "Administrá vos mismo el contenido de tu web",
    features: ["Panel de administración intuitivo", "Editor de contenido visual", "Capacitación incluida", "Actualizaciones sencillas"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero className="from-blue-500 to-blue-400" nextLink="/servicios/diseno" prevLink="/servicios/consultoria" color="text-blue-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Desarrollo Web
              <span className="block text-light-blue-100">Profesional</span>
            </h1>
            <p className="text-xl text-light-blue-100 mb-12 leading-relaxed max-w-2xl">
            Tu visión digital, hecha realidad. Creamos sitios web profesionales, modernos y optimizados para el éxito de tu negocio. ¡Potenciá tu presencia online hoy mismo!
            </p>
            <Button size="lg" className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Empezar mi proyecto
              <ArrowRight className="ml-2 h-6 w-6 text-blue-600" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="relative ">                  
                  <img 
                    src="/img/mockup-web.png" 
                    alt="Laptop showing web development"
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
              Nuestros Servicios de Desarrollo
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos soluciones completas de desarrollo web adaptadas a las necesidades específicas de tu negocio
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
                    <div className="p-4 bg-light-blue-50 rounded-2xl">
                      <service.icon className="h-10 w-10 text-light-blue-600" />
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
                        <div className="w-3 h-3 bg-light-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* <Button size="lg" variant="outline" className="border-light-blue-300 text-light-blue-600 hover:bg-light-blue-50 mt-6">
                    Conocer más
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
