'use client';

import { ArrowRight, Code, Edit3, ShoppingCart, User } from 'lucide-react';
import { useEffect } from 'react';

import Portfolio from '@/components/Portfolio';
import { Button } from '@/components/ui/button';
import { useHero } from '@/context/HeroContext';

const subServices = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Personalizado',
    description: 'Multiplicá tus ventas creando tu tienda online',
    features: [
      'Carrito de compras optimizado',
      'Pasarelas de pago seguras',
      'Gestión de inventario',
      'Analytics de ventas',
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: User,
    title: 'Soluciones Exclusivas',
    description: 'Soluciones pensadas exclusivamente para vos.',
    features: [
      'Diseño personalizado',
      'Funcionalidades específicas',
      'Integración con sistemas existentes',
      'Soporte técnico dedicado',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Code,
    title: 'Sitios Profesionales',
    description: 'Ecommerce, Blog, Portfolios para profesionales.',
    features: [
      'Portafolios creativos',
      'Blogs optimizados para SEO',
      'Sitios corporativos',
      'Landing pages efectivas',
    ],
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Edit3,
    title: 'Gestión Autónoma',
    description: 'Administrá vos mismo el contenido de tu web',
    features: [
      'Panel de administración intuitivo',
      'Editor de contenido visual',
      'Capacitación incluida',
      'Actualizaciones sencillas',
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const portfolioWeb = [
  {
    id: 1,
    title: 'Tienda Online de Ropa',
    description:
      'Plataforma de e-commerce moderna y responsiva para una marca de ropa boutique.',
    detailedDescription:
      'Desarrollo completo de una tienda online para una marca de ropa boutique, incluyendo diseño responsivo, integración de pasarelas de pago y gestión de inventario. El objetivo fue crear una experiencia de compra fluida y atractiva para los usuarios.',
    image: '/img/portfolio/ecommerce-ropa.jpg',
    gallery: [
      '/img/portfolio/ecommerce-ropa.jpg',
      'https://images.unsplash.com/photo-1523381294911-8d3cead2f975?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa607037dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['E-commerce', 'Diseño Web', 'Next.js', 'Stripe'],
    category: 'ecommerce',
  },
  {
    id: 2,
    title: 'Sitio Web Corporativo',
    description:
      'Desarrollo de un sitio web informativo y profesional para una empresa de consultoría.',
    detailedDescription:
      'Creación de un sitio web corporativo robusto para una firma de consultoría, destacando sus servicios, equipo y casos de éxito. Se implementó un diseño limpio y profesional, optimizado para la captación de leads y la presentación de información clave.',
    image: '/img/portfolio/corporativo-consultoria.jpg',
    gallery: [
      '/img/portfolio/corporativo-consultoria.jpg',
      'https://images.unsplash.com/photo-1552664730-d307ca8849d1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dd3474d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Web Corporativa', 'SEO', 'Contenido', 'Responsive'],
    category: 'corporativo',
  },
  {
    id: 3,
    title: 'Blog de Recetas Saludables',
    description:
      'Creación de un blog interactivo con funcionalidades de búsqueda y categorías para recetas.',
    detailedDescription:
      'Diseño y desarrollo de un blog de recetas saludables, con un sistema de búsqueda avanzado, categorías personalizadas y la posibilidad de que los usuarios guarden sus recetas favoritas. Se priorizó la facilidad de uso y la estética visual.',
    image: '/img/portfolio/blog-recetas.jpg',
    gallery: [
      '/img/portfolio/blog-recetas.jpg',
      'https://images.unsplash.com/photo-1490647932296-773108b24d08?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504754524776-8f4f6b6f5380?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498837140472-a87329977872?auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Blog', 'Contenido', 'UI/UX', 'Firebase'],
    category: 'blog',
  },
  {
    id: 4,
    title: 'Portafolio de Fotografía',
    description:
      'Diseño de un portafolio online minimalista y visualmente atractivo para un fotógrafo profesional.',
    detailedDescription:
      'Creación de un portafolio online de alto impacto para un fotógrafo, con galerías de imágenes optimizadas, carga rápida y un diseño minimalista que resalta el trabajo visual. Incluye secciones para biografía, servicios y contacto.',
    image: '/img/portfolio/portafolio-fotografia.jpg',
    gallery: [
      '/img/portfolio/portafolio-fotografia.jpg',
      'https://images.unsplash.com/photo-1502982899905-ed7ee5241902?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516035069371-87d89697243d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503454537195-104cd2934190?auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['Portafolio', 'Galería', 'Diseño Web', 'Performance'],
    category: 'portafolio',
  },
  {
    id: 5,
    title: 'Plataforma de Cursos Online',
    description:
      'Desarrollo de un sistema de gestión de aprendizaje (LMS) con funcionalidades de video y seguimiento de progreso.',
    detailedDescription:
      'Implementación de una plataforma de e-learning completa, permitiendo la gestión de cursos, videos interactivos, seguimiento del progreso del estudiante y evaluaciones. Diseñada para ofrecer una experiencia educativa inmersiva y eficiente.',
    image: '/img/portfolio/cursos-online.jpg',
    gallery: [
      '/img/portfolio/cursos-online.jpg',
      'https://images.unsplash.com/photo-1546410531-bb4486518776?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509062522224-3755977927d7?auto=format&fit=crop&w=800&q=80',
    ],
    tags: ['LMS', 'Educación', 'Plataforma', 'Base de Datos'],
    category: 'lms',
  },
];

const WebDevelopmentPage = () => {
  const { setHeroProps } = useHero();

  useEffect(() => {
    setHeroProps({
      className: 'from-blue-500 to-blue-400',
      nextLink: '/servicios/diseno',
      prevLink: '/servicios/consultoria',
      color: 'text-blue-500',
      children: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Desarrollo Web
              <span className="block text-light-blue-100">Profesional</span>
            </h1>
            <p className="text-xl text-light-blue-100 mb-12 leading-relaxed max-w-2xl">
              Tu visión digital, hecha realidad. Creamos sitios web
              profesionales, modernos y optimizados para el éxito de tu negocio.
              ¡Potenciá tu presencia online hoy mismo!
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
            >
              Empezar mi proyecto
              <ArrowRight className="ml-2 h-6 w-6 text-blue-600" />
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-3xl mx-auto">
              <div className="relative ">
                <img
                  src="/img/services/mockup-web.png"
                  alt="Laptop showing web development"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    });

    return () => {
      setHeroProps(null);
    };
  }, [setHeroProps]);

  return (
    <>
      {/* Sub-services Section */}
      <Portfolio
        title="Nuestros Proyectos"
        description="Cada persona y cada idea son únicas. Por eso, creamos soluciones pensadas para vos: para llevar tu idea, tu emprendimiento, o tu producto a donde vos necesitás que llegue"
        portfolioItems={portfolioWeb}
        color="light-blue"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Nuestros Servicios de Desarrollo
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos soluciones completas de desarrollo web adaptadas a las
              necesidades específicas de tu negocio
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
                      <li
                        key={featureIndex}
                        className="flex items-start text-lg text-gray-700"
                      >
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
    </>
  );
};

export default WebDevelopmentPage;
