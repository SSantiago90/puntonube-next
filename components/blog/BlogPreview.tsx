"use client";

import { useState } from "react";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "El Futuro de la Inteligencia Artificial en los Negocios",
    excerpt: "Descubre cómo la IA está transformando las empresas modernas y qué oportunidades presenta para tu negocio.",
    category: "Inteligencia Artificial",
    author: {
      name: "María González",
      role: "Especialista en IA",
      avatar: "MG"
    },
    date: "15 Mar 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Diseño UX/UI: Principios Fundamentales para el Éxito",
    excerpt: "Los principios clave del diseño de experiencia de usuario que todo negocio debe conocer para destacar.",
    category: "Diseño",
    author: {
      name: "Carlos Mendoza",
      role: "Designer Senior",
      avatar: "CM"
    },
    date: "12 Mar 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Desarrollo Web Moderno: React vs Next.js",
    excerpt: "Comparamos las tecnologías más populares para desarrollo web y cuándo usar cada una.",
    category: "Desarrollo Web",
    author: {
      name: "Ana Torres",
      role: "Full Stack Developer",
      avatar: "AT"
    },
    date: "10 Mar 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Optimización SEO: Estrategias que Realmente Funcionan",
    excerpt: "Técnicas probadas para mejorar el posicionamiento de tu sitio web en los motores de búsqueda.",
    category: "Marketing Digital",
    author: {
      name: "Roberto Silva",
      role: "SEO Specialist",
      avatar: "RS"
    },
    date: "8 Mar 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
  },
  {
    id: 5,
    title: "Automatización con IA: Casos de Uso Prácticos",
    excerpt: "Ejemplos reales de cómo la inteligencia artificial puede automatizar procesos empresariales.",
    category: "Inteligencia Artificial",
    author: {
      name: "María González",
      role: "Especialista en IA",
      avatar: "MG"
    },
    date: "5 Mar 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
  },
  {
    id: 6,
    title: "Branding Digital: Construyendo una Identidad Sólida",
    excerpt: "Cómo desarrollar una marca digital coherente que conecte con tu audiencia objetivo.",
    category: "Diseño",
    author: {
      name: "Carlos Mendoza",
      role: "Designer Senior",
      avatar: "CM"
    },
    date: "3 Mar 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=400&h=200&fit=crop"
  }
];

const categories = ["Todos", "Inteligencia Artificial", "Diseño", "Desarrollo Web", "Marketing Digital"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [visiblePosts, setVisiblePosts] = useState(4);

  const filteredPosts = activeCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleShowMore = () => {
    setVisiblePosts(prev => Math.min(prev + 4, filteredPosts.length));
  };

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    setVisiblePosts(4);
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-light-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conocimientos, tendencias y consejos del mundo digital para impulsar tu negocio
          </p>
        </div>
        
        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryFilter(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-light-blue-600 hover:bg-light-blue-700 text-white" 
                  : "border-light-blue-200 text-gray-600 hover:bg-light-blue-50 hover:border-light-blue-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Contador de resultados */}
        <div className="text-center mb-8">
          <p className="text-gray-500">
            Mostrando {Math.min(visiblePosts, filteredPosts.length)} de {filteredPosts.length} artículos
            {activeCategory !== "Todos" && (
              <span className="ml-2">
                en <span className="font-semibold text-light-blue-600">{activeCategory}</span>
              </span>
            )}
          </p>
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white"
            >
              {/* Imagen del post */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-light-blue-600 text-white hover:bg-light-blue-700">
                    <Tag className="w-3 h-3 mr-1" />
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gray-800 group-hover:text-light-blue-600 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3 text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Información del autor */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-light-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-light-blue-600 font-semibold text-sm">
                        {post.author.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Meta información */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.readTime} lectura</span>
                    </div>
                  </div>
                </div>
                
                {/* Botón leer más */}
                <Button 
                  variant="ghost" 
                  className="w-full text-light-blue-600 hover:text-white hover:bg-light-blue-600 transition-all duration-300 group/btn"
                >
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Botón ver más posts */}
        {visiblePosts < filteredPosts.length && (
          <div className="text-center mt-12">
            <Button 
              onClick={handleShowMore}
              size="lg"
              className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver más artículos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Mensaje cuando no hay más posts */}
        {visiblePosts >= filteredPosts.length && filteredPosts.length > 4 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              Has visto todos los artículos
              {activeCategory !== "Todos" && (
                <span className="ml-2">
                  de <span className="font-semibold text-light-blue-600">{activeCategory}</span>
                </span>
              )}
            </p>
            {activeCategory !== "Todos" && (
              <Button 
                variant="outline"
                onClick={() => handleCategoryFilter("Todos")}
                className="mt-4 border-light-blue-200 text-light-blue-600 hover:bg-light-blue-50"
              >
                Ver todos los artículos
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;