'use client';

import { ArrowRight, Calendar, Tag, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Blog = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [visiblePosts, setVisiblePosts] = useState(4);

  const categories = ['Todos', ...new Set(posts.map((post) => post.category))];

  const filteredPosts =
    activeCategory === 'Todos'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    setVisiblePosts(4);
  };

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-gray-50 to-light-blue-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conocimientos, tendencias y consejos del mundo digital para impulsar
            tu negocio
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryFilter(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-light-blue-600 hover:bg-light-blue-700 text-white'
                  : 'border-light-blue-200 text-gray-600 hover:bg-light-blue-50 hover:border-light-blue-300'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Contador de resultados */}
        <div className="text-center mb-8">
          <p className="text-gray-500">
            Mostrando {Math.min(visiblePosts, filteredPosts.length)} de{' '}
            {filteredPosts.length} artículos
            {activeCategory !== 'Todos' && (
              <span className="ml-2">
                en{' '}
                <span className="font-semibold text-light-blue-600">
                  {activeCategory}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Grid de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  {/* Imagen del post */}
                  <div className="relative md:h-full h-48 overflow-hidden">
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

                  <div className="md:col-span-3">
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
                            <p className="text-sm font-semibold text-gray-800">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {post.author.role}
                            </p>
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
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Botón ver más posts */}
        {visiblePosts < filteredPosts.length && (
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-light-blue-600 hover:bg-light-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver más artículos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}

        {/* Mensaje cuando no hay más posts */}
        {visiblePosts >= filteredPosts.length && filteredPosts.length > 4 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              Has visto todos los artículos
              {activeCategory !== 'Todos' && (
                <span className="ml-2">
                  de{' '}
                  <span className="font-semibold text-light-blue-600">
                    {activeCategory}
                  </span>
                </span>
              )}
            </p>
            {activeCategory !== 'Todos' && (
              <Button
                variant="outline"
                onClick={() => handleCategoryFilter('Todos')}
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
