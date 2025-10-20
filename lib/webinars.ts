export const upcomingClasses = [
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

export function getAllWebinars() {
  return upcomingClasses;
}

export function getWebinarById(id: number) {
  return upcomingClasses.find((webinar) => webinar.id === id);
}
