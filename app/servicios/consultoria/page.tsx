'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Clock,
  Play,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
});

const formatPrice = (price: string | number) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(price));
};

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
    spots: 12,
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

const services = [
  {
    icon: BookOpen,
    title: 'Capacitación Técnica',
    description:
      'Formación especializada con profesionales expertos en cada área',
    features: [
      'Workshops gratuitos',
      'Crecimiento profesional',
      'Charlas abiertas',
      'Tutoriales en vivo',
    ],
    cta: 'Ver calendario',
    ctaRef: '#event-calendar',
  },
  {
    icon: Target,
    title: 'Consultoría Estratégica',
    description:
      'Asesoramiento personalizado para tu negocio con especialistas',
    features: [
      'Auditoría técnica',
      'Estrategias de marketing',
      'SEO, Seguridad y Performance',
      'Optimización de procesos',
    ],
    cta: 'Solicitar información',
    ctaRef: '/',
  },
  {
    icon: Users,
    title: 'Mentorías Personalizadas',
    description: 'Acompañamiento uno a uno con profesionales especialistas',
    features: [
      'Revisión de código',
      'Feedback personalizado',
      'Plan de carrera',
      'Networking profesional',
      'Seguimiento continuo',
    ],
    cta: 'Solicitar mentoría',
    ctaRef: '/',
  },
];
const services_old = [
  {
    icon: BookOpen,
    title: 'Capacitación Técnica',
    description: 'Formación especializada en tecnologías modernas',
    features: [
      'Desarrollo Web Frontend',
      'Backend y APIs',
      'Diseño UX/UI',
      'Marketing Digital',
      'Inteligencia Artificial',
    ],
  },
  {
    icon: Target,
    title: 'Consultoría Estratégica',
    description: 'Asesoramiento personalizado para tu negocio',
    features: [
      'Auditoría técnica',
      'Estrategia digital',
      'Optimización de procesos',
      'Transformación digital',
      'Análisis competitivo',
    ],
  },
  {
    icon: Users,
    title: 'Mentorías Personalizadas',
    description: 'Acompañamiento uno a uno para acelerar tu crecimiento',
    features: [
      'Revisión de código',
      'Feedback personalizado',
      'Plan de carrera',
      'Networking profesional',
      'Seguimiento continuo',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Workshops Empresariales',
    description: 'Talleres intensivos para equipos de trabajo',
    features: [
      'Capacitación in-company',
      'Talleres de innovación',
      'Team building técnico',
      'Metodologías ágiles',
      'Cultura digital',
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Principiante':
      return 'bg-green-100 text-green-800 hover:bg-green-400';
    case 'Intermedio':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-500';
    case 'Avanzado':
      return 'bg-red-100 text-red-800 hover:bg-red-500';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-500';
  }
};

const ConsultingPage = () => {
  const [selectedClass, setSelectedClass] = useState<
    (typeof upcomingClasses)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { toast } = useToast();

  const getNextClass = () => {
    const now = new Date();
    return upcomingClasses
      .filter((c) => new Date(c.date) >= now)
      .sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )[0];
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: '¡Inscripción exitosa!',
      description: `Te has inscrito correctamente a "${selectedClass?.title}". Te enviaremos los detalles por email.`,
    });
    form.reset();
    console.log('Form submit data: ', data);
    setIsModalOpen(false);
  };

  const handleInscription = (classItem: (typeof upcomingClasses)[0]) => {
    setSelectedClass(classItem);
    setIsModalOpen(true);
  };

  const nextClass = getNextClass();
  console.log(nextClass);

  return (
    <div className="min-h-screen">
      <Header />

      <Hero
        className="from-indigo-600 to-indigo-700"
        nextLink="/servicios/desarrollo-web"
        prevLink="/servicios/inteligencia-artificial"
        color="text-indigo-700"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md">
                Potenciá{' '}
                <span className="block bg-gradient-to-r  bg-clip-text">
                  tu carrera Profesional
                </span>
              </h1>
              <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl ">
                Descubrí capacitaciones en herramientas digitales mediante
                cursos, workshops abiertos, y mentorías personalizadas.
              </p>
              <Link href="#event-calendar">
                <Button
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-light-blue-100 text-lg px-8 py-4 shadow-2xl"
                >
                  Ver próximos eventos
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-indigo-400 to-light-blue-400 rounded-xl">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-left">
                      Próxima Clase en Vivo
                    </p>
                    <div className="flex align-middle items-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-2"></div>
                      <h3 className="text-xl font-bold text-white">
                        {nextClass.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white/90">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" /> {nextClass?.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" /> {nextClass?.time} hrs
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {nextClass?.spots} cupos disponibles
                    </span>
                    {nextClass.certification && (
                      <span className="flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Certificado incluido
                      </span>
                    )}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-light-blue-500 hover:from-indigo-600 hover:to-light-blue-600 text-white border-0"
                    onClick={() => nextClass && handleInscription(nextClass)}
                    disabled={!nextClass}
                  >
                    Reservar mi lugar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-y-3"></div> 
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-300/60 rounded-full animate-ping delay-100"></div>         
        */}
      </Hero>

      {/* Calendar Section */}
      <div className="relative">
        <div
          className="bg-black absolute top-0 left-0 w-full h-full z-20 transition-all duration-200 ease-in"
          style={{ opacity: hoveredCard === null ? '0' : 0.45 }}
        ></div>
        <section
          id="event-calendar"
          className="relative py-24 bg-gradient-to-b from-indigo-50 to-white"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Calendario de Eventos
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Únete a nuestras clases virtuales en vivo y acelera tu
                desarrollo profesional
              </p>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {upcomingClasses.map((classItem) => (
                <Card
                  key={classItem.id}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-white overflow-hidden relative hover:cursor-default"
                  style={{
                    zIndex: hoveredCard === classItem.id ? 50 : 20,
                    opacity:
                      hoveredCard !== null && hoveredCard !== classItem.id
                        ? 0.4
                        : 1,
                    filter:
                      hoveredCard !== null && hoveredCard !== classItem.id
                        ? 'blur(4px)'
                        : 'none',
                    transform:
                      hoveredCard === classItem.id ? 'scale(1.08)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredCard(classItem.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                      <div className="lg:col-span-1">
                        <img
                          src={classItem.image}
                          alt={classItem.title}
                          className="w-24 h-24 lg:w-28 lg:h-28 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                            {classItem.title}
                          </h3>
                          <Badge
                            className={`${getLevelColor(classItem.level)} transition-colors duration-300 hover:text-white cursor-pointer`}
                          >
                            {classItem.level}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {classItem.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {classItem.instructor}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {classItem.duration}
                          </span>
                        </div>
                      </div>

                      <div className="text-center lg:text-left">
                        <div className="space-y-2">
                          <div className="flex items-center justify-center lg:justify-start text-gray-700">
                            <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
                            <span className="font-semibold">
                              {classItem.date}
                            </span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start text-gray-700">
                            <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                            <span>{classItem.time} hrs</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start text-gray-700">
                            <Users className="h-5 w-5 mr-2 text-indigo-600" />
                            <span>{classItem.spots} cupos</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div
                          className={`text-3xl mb-2 font-bold ${classItem.price === 0 ? 'text-teal-600 font-black group-hover:animate-pulse' : 'text-indigo-600'}`}
                        >
                          {classItem.price === 0 ? (
                            <>¡Gratis!</>
                          ) : (
                            <span>
                              <small className="text-2xl">{'$'}</small>{' '}
                              {formatPrice(classItem.price)}{' '}
                              <small className="text-sm">ARS</small>
                            </span>
                          )}
                        </div>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-indigo-600 to-purple-800 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg w-full lg:w-auto"
                          onClick={() => handleInscription(classItem)}
                        >
                          Inscribirme
                        </Button>
                      </div>
                    </div>
                    {/* Detailed Content - Shown on Hover */}

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        hoveredCard === classItem.id
                          ? 'max-h-96 opacity-100 mt-8'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {classItem.detailedContent.intro}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-800 mb-4">
                            Contenido:
                          </h4>

                          <div className="space-y-4">
                            {classItem.detailedContent.topics.map(
                              (topic, index) => (
                                <div
                                  key={index}
                                  className="border-l-4 border-indigo-500 pl-4"
                                >
                                  <h5 className="font-semibold text-gray-800 text-lg">
                                    {topic.name}:
                                  </h5>

                                  <p className="text-gray-600 leading-relaxed">
                                    {topic.description}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed italic bg-indigo-50 p-4 rounded-lg">
                          {classItem.detailedContent.footer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Sub-services Section */}

      <section className="py-24  bg-gradient-to-t from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Por qué elegirnos
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Contamos con profesionales especialistas en cada área para
              acompañarte en tu crecimiento profesional
            </p>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-indigo-800/30"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-lg text-gray-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.ctaRef}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white mt-6 shadow-lg"
                  >
                    {service.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Inscripción a {selectedClass?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {selectedClass?.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedClass?.time} hrs
                </span>
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {selectedClass?.price === 0 ? (
                  <>Acceso gratuito</>
                ) : (
                  <>{formatPrice(selectedClass?.price as number)}</>
                )}
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="tu@email.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                  size="lg"
                >
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsultingPage;
