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

interface Webinar {
  id: number;
  image: string;
  title: string;
  level: string;
  price: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  spots: number;
  instructor: string;
}

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

const UpcomingWebinars = ({ webinars }: { webinars: Webinar[] }) => {
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
              {webinars.map((webinar) => (
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
