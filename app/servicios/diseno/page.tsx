import { ArrowRight, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";

const subServices = [
  {
    icon: Palette,
    title: "Identidad Visual",
    description: "Creamos marcas que impactan y perduran.",
    features: ["Diseño de logotipos", "Manual de marca", "Papelería corporativa", "Rediseño de imagen"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Palette,
    title: "Material Digital",
    description: "Diseños para redes sociales y presentaciones.",
    features: ["Banners para redes", "Presentaciones impactantes", "Plantillas editables", "Contenido visual para campañas"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Palette,
    title: "Diseño Editorial",
    description: "Revistas, catálogos y folletos que comunican.",
    features: ["Maquetación profesional", "Diseño de portadas", "Folletos y catálogos", "E-books visuales"],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
  }
];

const portfolioItems = [
  {
    id: 1,
    title: "Identidad Visual Completa",
    description: "Desarrollo de marca para startup tecnológica",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Branding", "Logotipo", "Identidad"],
    category: "branding"
  },
  {
    id: 2,
    title: "Diseño de App Móvil",
    description: "Interfaz moderna para aplicación de fitness",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["UX/UI", "Mobile", "App Design"],
    category: "ui-ux"
  },
  {
    id: 3,
    title: "Campaña de Redes Sociales",
    description: "Contenido visual para marca de moda",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Redes", "Social Media", "Content"],
    category: "social"
  },
  {
    id: 4,
    title: "Packaging Premium",
    description: "Diseño de empaque para productos gourmet",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Packaging", "Producto", "Premium"],
    category: "packaging"
  },
  {
    id: 5,
    title: "Web Design Minimalista",
    description: "Sitio web para estudio de arquitectura",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Web Design", "UX/UI", "Minimalista"],
    category: "web"
  },
  {
    id: 6,
    title: "Logotipo Corporativo",
    description: "Logo para empresa de consultoría",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Logotipo", "Corporativo", "Branding"],
    category: "branding"
  }
];



const DesignPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero className="from-sky-500 to-sky-700" nextLink="/servicios/inteligencia-artificial" prevLink="/servicios/desarrollo-web" color="text-blue-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md">
              Diseño Gráfico
              <span className="block text-blue-100">Creativo</span>
            </h1>
            <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-2xl">
            Impactá a primera vista. Logotipos, diseños web, desarrollo de marca y contenido para redes sociales. Transformamos tus ideas en imágenes que conectan con tu audiencia. ¡Diseño que vende!
            </p>
            <Link href="#portfolio">
            <Button size="lg" className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-orange-50 text-lg px-8 py-4">
              Ver nuestros trabajos
              <ArrowRight className="ml-2 h-6 w-6 text-blue-600" />
            </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-3xl mx-auto">

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:scale-105">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-violet-400 hover:to-violet-600 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                    <div className="h-4 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 bg-blue-100/30 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:-rotate-2">
                    <div className="w-full h-28 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-teal-400 hover:to-teal-600 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                    <div className="h-4 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 bg-blue-100/30 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:translate-x-2">
                    <div className="w-full h-36 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-pink-400 hover:to-pink-600 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                    <div className="h-4 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 bg-blue-100/30 rounded w-4/5"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:shadow-2xl">
                    <div className="w-full h-24 bg-gradient-to-br from-blue-200 to-blue-500 hover:from-orange-300 hover:to-orange-500 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                    <div className="h-4 bg-white/20 rounded mb-2"></div>
                    <div className="h-3 bg-blue-100/30 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-300/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse delay-100"></div>
              <div className="absolute -bottom-4 right-1/3 w-12 h-12 bg-blue-200/20 rounded-full animate-pulse delay-200"></div>
              </div>

            </div>
          </div>
        </div>
      </Hero>
      {/* Sub-services Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Nuestro Portfolio
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada proyecto es una historia única. Descubre cómo hemos ayudado a marcas a brillar y conectar con su audiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <Card 
                key={item.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Button size="sm" variant="secondary" className="w-full bg-white/90 text-gray-800 hover:bg-white">
                      Ver proyecto
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Nuestros Servicios de Diseño
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Soluciones creativas para potenciar la imagen de tu negocio.
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
                    <div className="p-4 bg-orange-100 rounded-2xl">
                      <service.icon className="h-10 w-10 text-orange-700" />
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
                        <div className="w-3 h-3 bg-orange-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default DesignPage; 