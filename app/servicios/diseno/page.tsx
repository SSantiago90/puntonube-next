import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    title: 'Identidad Visual Completa',
    description: 'Desarrollo de marca para startup tecnológica',
    detailedDescription:
      'Desarrollo completo de identidad visual para TechStart, una startup enfocada en soluciones de inteligencia artificial. El proyecto incluyó desde la conceptualización inicial hasta la implementación final, creando una marca moderna y tecnológica que refleja la innovación y confiabilidad de la empresa.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Branding', 'Logotipo', 'Identidad'],
    category: 'branding',
  },
  {
    id: 2,
    title: 'Diseño de App Móvil',
    description: 'Interfaz moderna para aplicación de fitness',
    detailedDescription:
      'Diseño UX/UI para FitLife, una aplicación móvil que revoluciona la experiencia de fitness personalizado. El proyecto involucró investigación de usuarios, arquitectura de información, wireframes, prototipos interactivos y el diseño final de todas las pantallas, priorizando la usabilidad y la motivación del usuario.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['UX/UI', 'Mobile', 'App Design'],
    category: 'ui-ux',
  },
  {
    id: 3,
    title: 'Campaña de Redes Sociales',
    description: 'Contenido visual para marca de moda',
    detailedDescription:
      'Estrategia visual integral para StyleCo, una marca de moda sostenible. Desarrollamos una línea gráfica cohesiva que incluye posts para Instagram, Stories, covers de Facebook, y contenido para TikTok, manteniendo la estética minimalista y elegante que caracteriza a la marca.',
    image:
      'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Redes', 'Social Media', 'Content'],
    category: 'social',
  },
  {
    id: 4,
    title: 'Packaging Premium',
    description: 'Diseño de empaque para productos gourmet',
    detailedDescription:
      'Diseño de packaging para DeluxeFood, una línea de productos gourmet artesanales. El proyecto requirió un enfoque sofisticado que transmitiera calidad premium mientras destacaba en el punto de venta. Se trabajó tanto en la estructura como en el diseño gráfico, incluyendo etiquetas, cajas y bolsas.',
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Packaging', 'Producto', 'Premium'],
    category: 'packaging',
  },
  {
    id: 5,
    title: 'Web Design Minimalista',
    description: 'Sitio web para estudio de arquitectura',
    detailedDescription:
      'Diseño web para ArchiStudio, un estudio de arquitectura contemporánea. El proyecto se centró en crear una experiencia digital que refleje la filosofía minimalista del estudio, destacando sus proyectos arquitectónicos con un diseño limpio, navegación intuitiva y carga rápida.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Web Design', 'UX/UI', 'Minimalista'],
    category: 'web',
  },
  {
    id: 6,
    title: 'Logotipo Corporativo',
    description: 'Logo para empresa de consultoría',
    detailedDescription:
      'Desarrollo de identidad corporativa para ConsultPro, una empresa de consultoría empresarial. El proyecto incluyó la creación de un logotipo versátil que funciona en diferentes aplicaciones, desde papelería corporativa hasta medios digitales, transmitiendo profesionalismo y confianza.',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Logotipo', 'Corporativo', 'Branding'],
    category: 'branding',
  },
];

const DesignPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        className="from-teal-600 to-teal-700"
        nextLink="/servicios/inteligencia-artificial"
        prevLink="/servicios/desarrollo-web"
        color="text-teal-600"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md">
              Diseño Gráfico
              <span className="block text-teal-100">Creativo</span>
            </h1>
            <p className="text-xl text-teal-100 mb-12 leading-relaxed max-w-2xl">
              Impactá a primera vista. Logotipos, diseños web, desarrollo de
              marca y contenido para redes sociales. Transformamos tus ideas en
              imágenes que conectan con tu audiencia. ¡Diseño que vende!
            </p>
            <Link href="#portfolio">
              <Button
                size="lg"
                className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 text-lg px-8 py-4"
              >
                Ver nuestros trabajos
                <ArrowRight className="ml-2 h-6 w-6 text-teal-600" />
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:scale-105">
                      <div className="w-full h-32 bg-gradient-to-br from-teal-400 to-teal-600 hover:from-violet-400 hover:to-violet-600 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                      <div className="h-4 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 bg-teal-100/30 rounded w-3/4"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:-rotate-2">
                      <div className="w-full h-28 bg-gradient-to-br from-teal-500 to-teal-700 hover:from-teal-400 hover:to-teal-600 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                      <div className="h-4 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 bg-teal-100/30 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:translate-x-2">
                      <div className="w-full h-36 bg-gradient-to-br from-teal-600 to-teal-800 hover:from-pink-400 hover:to-pink-600 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                      <div className="h-4 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 bg-teal-100/30 rounded w-4/5"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 hover:shadow-2xl">
                      <div className="w-full h-24 bg-gradient-to-br from-teal-200 to-teal-500 hover:from-teal-300 hover:to-teal-500 rounded-xl mb-4 transition-colors duration-500 ease-in-out"></div>
                      <div className="h-4 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 bg-teal-100/30 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-teal-300/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-teal-400/10 rounded-full animate-pulse delay-100"></div>
                <div className="absolute -bottom-4 right-1/3 w-12 h-12 bg-teal-200/20 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      {/* Sub-services Section */}
      <Portfolio
        title="Nuestros Diseños"
        description="Cada proyecto es una historia única. Descubre cómo hemos ayudado a marcas a brillar y conectar con su audiencia."
        portfolioItems={portfolioItems}
        color="teal"
      />
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
                    <div className="p-4 bg-teal-100 rounded-2xl">
                      <service.icon className="h-10 w-10 text-teal-700" />
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
                        <div className="w-3 h-3 bg-teal-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
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
