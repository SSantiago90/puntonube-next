'use client';

import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const upcomingClasses = [
  {
    id: 1,
    title: 'Introducción al Desarrollo Web',
    date: '2025-07-15',
    image: '/img/workshops/web-development.jpg',
    time: '19:00',
    duration: '2 horas',
    instructor: 'María González',
    level: 'Principiante',
    price: 25000,
    spots: 0,
    certification: false,
    description:
      'Aprende los fundamentos de HTML, CSS y JavaScript desde cero.',
    detailedContent: {
      intro:
        'En este curso veremos los fundamentos básicos del desarrollo web frontend, desde HTML semántico hasta JavaScript moderno.',
      topics: [
        {
          name: 'HTML Semántico',
          description:
            'Estructura y etiquetas HTML5, accesibilidad web, formularios y validación',
        },
        {
          name: 'CSS Moderno',
          description:
            'Flexbox, Grid, animaciones, responsive design y metodologías CSS',
        },
        {
          name: 'JavaScript Básico',
          description:
            'Variables, funciones, DOM manipulation y eventos interactivos',
        },
      ],
      footer:
        'Al finalizar podrás crear sitios web completos y funcionales desde cero con las mejores prácticas de la industria.',
    },
  },
  {
    id: 2,
    title: 'React Avanzado y Hooks',
    date: '2025-07-18',
    image: '/img/workshops/react-advanced.jpg',
    time: '20:00',
    duration: '3 horas',
    instructor: 'Carlos Rodríguez',
    level: 'Avanzado',
    price: 0,
    spots: 8,
    certification: true,
    description:
      'Domina los conceptos avanzados de React y el uso de hooks personalizados.',
    detailedContent: {
      intro:
        'En este curso profundizaremos en React avanzado, custom hooks y patrones de diseño para aplicaciones escalables.',
      topics: [
        {
          name: 'Custom Hooks',
          description:
            'Creación de hooks reutilizables, lógica compartida y optimización de rendimiento',
        },
        {
          name: 'Context API',
          description:
            'Manejo de estado global, providers y patrones de consumo eficiente',
        },
        {
          name: 'Performance',
          description:
            'Memoización, lazy loading, code splitting y optimización de re-renders',
        },
      ],
      footer:
        'Aprenderás a construir aplicaciones React robustas y eficientes siguiendo las mejores prácticas del ecosistema.',
    },
  },
  {
    id: 3,
    title: 'Diseño UX/UI para Principiantes',
    date: '2025-07-22',
    image: '/img/workshops/ux-ui-design.jpg',
    time: '18:30',
    duration: '2.5 horas',
    instructor: 'Ana Martínez',
    level: 'Principiante',
    price: 50000,
    spots: 15,
    certification: true,
    description:
      'Fundamentos del diseño de experiencia de usuario e interfaces.',
    detailedContent: {
      intro:
        'En este curso exploraremos los principios fundamentales del diseño UX/UI y herramientas profesionales para crear interfaces efectivas.',
      topics: [
        {
          name: 'Principios de UX',
          description:
            'Research de usuarios, personas, journey maps y arquitectura de información',
        },
        {
          name: 'Design Systems',
          description:
            'Componentes reutilizables, tokens de diseño y consistencia visual',
        },
        {
          name: 'Prototipado',
          description:
            'Wireframes, mockups, prototipos interactivos y herramientas como Figma',
        },
      ],
      footer:
        'Desarrollarás las habilidades necesarias para crear experiencias digitales centradas en el usuario y visualmente atractivas.',
    },
  },
  {
    id: 4,
    title: 'SEO y Marketing Digital',
    date: '2025-07-25',
    image: '/img/workshops/seo-marketing.jpg',
    time: '19:30',
    duration: '2 horas',
    instructor: 'Roberto Silva',
    level: 'Intermedio',
    price: 0,
    spots: 10,
    certification: true,
    description:
      'Estrategias efectivas para posicionar tu sitio web y aumentar ventas.',
    detailedContent: {
      intro:
        'En este curso aprenderemos estrategias de SEO técnico y marketing digital para aumentar la visibilidad y conversiones.',
      topics: [
        {
          name: 'SEO Técnico',
          description:
            'Optimización on-page, keywords research, link building y Core Web Vitals',
        },
        {
          name: 'Analytics',
          description:
            'Google Analytics, Search Console, métricas clave y reporting avanzado',
        },
        {
          name: 'Conversión',
          description:
            'CRO, A/B testing, funnels de conversión y optimización de landing pages',
        },
      ],
      footer:
        'Dominarás las técnicas más efectivas para posicionar tu sitio web en buscadores y generar más leads y ventas.',
    },
  },
  {
    id: 5,
    title: 'Inteligencia Artificial para Empresas',
    date: '2025-07-29',
    image: '/img/workshops/ai-business.jpg',
    time: '20:30',
    duration: '2 horas',
    instructor: 'Elena Vargas',
    level: 'Intermedio',
    price: 40000,
    spots: 6,
    certification: true,
    description:
      'Cómo implementar IA en tu negocio para mejorar la productividad.',
    detailedContent: {
      intro:
        'En este curso exploraremos aplicaciones prácticas de IA para empresas y cómo implementar soluciones que generen valor real.',
      topics: [
        {
          name: 'Automatización',
          description:
            'Chatbots inteligentes, procesamiento de documentos y workflows automatizados',
        },
        {
          name: 'Análisis de Datos',
          description:
            'Machine Learning aplicado, predicciones de negocio y análisis de patrones',
        },
        {
          name: 'Implementación',
          description:
            'APIs de IA, integración con sistemas existentes y evaluación de ROI',
        },
      ],
      footer:
        'Aprenderás a identificar oportunidades de IA en tu empresa y implementar soluciones que mejoren la eficiencia operativa.',
    },
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Principiante':
      return 'bg-green-100 text-green-800';
    case 'Intermedio':
      return 'bg-yellow-100 text-yellow-800';
    case 'Avanzado':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const UpcomingWebinars = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-light-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Aprende con nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a nuestras{' '}
            <strong className="text-sky-600">clases virtuales en vivo</strong>
            <br />y acelera tu desarrollo profesional
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {upcomingClasses.map((webinar) => (
                <CarouselItem
                  key={webinar.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={getLevelColor(webinar.level)}>
                            {webinar.level}
                          </Badge>
                        </div>
                        <div className="absolute hidden top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-2xl font-bold text-light-blue-600">
                            {webinar.price}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-light-blue-600 transition-colors line-clamp-2">
                          {webinar.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-3">
                          {webinar.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-sm text-gray-700">
                            <Calendar className="h-4 w-4 mr-2 text-light-blue-600" />
                            <span>
                              {webinar.date} - {webinar.time} hrs
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-700">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-light-blue-600" />
                              {webinar.duration}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-light-blue-600" />
                              {webinar.spots} cupos
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Instructor:{' '}
                            <span className="font-semibold">
                              {webinar.instructor}
                            </span>
                          </div>
                        </div>

                        {webinar.spots === 0 ? (
                          <Button
                            disabled
                            className="w-full bg-gray-600 group-hover:bg-gray-800 text-gray-200 shadow-lg group"
                          >
                            Cupos completos
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        ) : (
                          <Link href="/aprende" className="mt-auto">
                            <Button
                              disabled={webinar.spots === 0}
                              className="w-full bg-light-blue-600 hover:bg-light-blue-700 text-white shadow-lg group"
                            >
                              Quiero inscribirme
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:-left-12" />
            <CarouselNext className="right-4 md:-right-12" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Link href="/aprende">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-light-blue-600 text-light-blue-600 hover:bg-light-blue-600 hover:text-white text-lg px-8 py-4"
            >
              Ver calendario completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
