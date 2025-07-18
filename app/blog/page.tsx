'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import BlogPost from '@/components/blog/BlogPost';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'El Futuro de la Inteligencia Artificial en los Negocios',
    content: `La inteligencia artificial está revolucionando la forma en que las empresas operan y toman decisiones. En este artículo, exploramos las tendencias emergentes y las oportunidades que presenta la IA para los negocios modernos.

Las empresas que adoptan tempranamente la IA están viendo mejoras significativas en la eficiencia operacional, la experiencia del cliente y la toma de decisiones basada en datos. Desde la automatización de procesos hasta el análisis predictivo, la IA está transformando industrias enteras.

Los principales beneficios incluyen:
- Automatización de tareas repetitivas
- Análisis de datos en tiempo real
- Personalización de la experiencia del cliente
- Optimización de procesos empresariales
- Predicción de tendencias del mercado

Sin embargo, la implementación exitosa de la IA requiere una estrategia cuidadosa, inversión en talento técnico y una cultura organizacional que abrace la innovación.`,
    excerpt:
      'Descubre cómo la IA está transformando las empresas modernas y qué oportunidades presenta para tu negocio.',
    category: 'Inteligencia Artificial',
    author: {
      name: 'María González',
      role: 'Especialista en IA',
      avatar: 'MG',
    },
    date: '15 Mar 2024',
    readTime: '5 min',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Diseño UX/UI: Principios Fundamentales para el Éxito',
    content: `El diseño de experiencia de usuario es mucho más que crear interfaces atractivas. Se trata de entender profundamente las necesidades, motivaciones y comportamientos de los usuarios para crear productos digitales que sean tanto funcionales como deleitables.

Los principios fundamentales del buen diseño UX/UI incluyen:

1. **Centrado en el usuario**: Todas las decisiones de diseño deben basarse en las necesidades reales de los usuarios, no en suposiciones.

2. **Simplicidad**: La interfaz debe ser clara y fácil de entender. Menos es más cuando se trata de diseño.

3. **Consistencia**: Los elementos similares deben comportarse de manera similar en toda la aplicación.

4. **Accesibilidad**: El diseño debe ser inclusivo y utilizable por personas con diferentes capacidades.

5. **Retroalimentación visual**: Los usuarios deben recibir confirmación clara de sus acciones.

El proceso de diseño UX efectivo comienza con la investigación de usuarios, continúa con la creación de personas y mapas de viaje del usuario, y culmina con prototipos iterativos que se validan constantemente con usuarios reales.`,
    excerpt:
      'Los principios clave del diseño de experiencia de usuario que todo negocio debe conocer para destacar.',
    category: 'Diseño',
    author: {
      name: 'Carlos Mendoza',
      role: 'Designer Senior',
      avatar: 'CM',
    },
    date: '12 Mar 2024',
    readTime: '7 min',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Desarrollo Web Moderno: React vs Next.js',
    content: `En el ecosistema de desarrollo web moderno, React y Next.js son dos tecnologías que frecuentemente se comparan, aunque en realidad son complementarias. React es una biblioteca para construir interfaces de usuario, mientras que Next.js es un framework que extiende React con características adicionales.

**React:**
- Biblioteca de JavaScript para construir UIs
- Enfoque en componentes reutilizables
- Virtual DOM para rendimiento optimizado
- Gran ecosistema y comunidad
- Flexibilidad total en la arquitectura

**Next.js:**
- Framework construido sobre React
- Renderizado del lado del servidor (SSR) y generación estática (SSG)
- Optimizaciones automáticas de rendimiento
- Sistema de enrutamiento integrado
- Optimización de imágenes automática
- API routes incorporadas

**¿Cuándo usar cada uno?**

Usa React cuando:
- Necesitas máxima flexibilidad
- Construyes una SPA simple
- Tienes requisitos específicos de arquitectura

Usa Next.js cuando:
- Necesitas SEO optimizado
- Quieres mejor rendimiento inicial
- Construyes aplicaciones complejas
- Necesitas funcionalidades full-stack

La elección depende de los requisitos específicos del proyecto, pero Next.js es generalmente la opción más completa para aplicaciones web modernas.`,
    excerpt:
      'Comparamos las tecnologías más populares para desarrollo web y cuándo usar cada una.',
    category: 'Desarrollo Web',
    author: {
      name: 'Ana Torres',
      role: 'Full Stack Developer',
      avatar: 'AT',
    },
    date: '10 Mar 2024',
    readTime: '6 min',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
  },
];

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(2);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 2, blogPosts.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-light-blue-50">
      {/* Header with back button */}
      <div className="bg-white/80 backdrop-blur-md border-b border-light-blue-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-light-blue-600 hover:bg-light-blue-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Blog</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {blogPosts.slice(0, visiblePosts).map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>

            {/* Load more button */}
            {visiblePosts < blogPosts.length && (
              <div className="mt-12 text-center">
                <Button
                  onClick={handleLoadMore}
                  size="lg"
                  className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-8 py-3"
                >
                  Cargar más artículos
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar posts={blogPosts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
