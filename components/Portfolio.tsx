
"use client";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
};

interface PortfolioProps {
  title: string,
  description: string,
  color: string;
  portfolioItems: PortfolioItem[];
}

export default function Portfolio({ portfolioItems, color, title ="Nuestro Trabajo", description }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  

  return (
     <section id="portfolio" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  {title}
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {description}
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
                         <Button 
                      size="sm" 
                      variant="secondary" 
                      className="w-full bg-white/90 text-gray-800 hover:bg-white"
                      onClick={() => setSelectedProject(item)}
                    >
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
                            className={`bg-${color}-100 text-${color}-800 hover:bg-${color}-200`}
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

      {/* Project Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción del Proyecto</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.detailedDescription}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Categorías</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, index: number) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Galería de Imágenes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.gallery.map((image: string, index: number) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - Imagen ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
          </section>
  )
}
