"use client";

import { Cloud, Menu } from "lucide-react";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerTitle } from "@/components/ui/drawer";

const services = [
  {
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos",
    href: "/servicios/desarrollo-web"
  },
  {
    title: "Servicios de IA",
    description: "Inteligencia artificial para tu negocio",
    href: "/servicios/inteligencia-artificial"
  },
  {
    title: "Diseño Gráfico",
    description: "Identidad visual y branding",
    href: "/servicios/diseno"
  },
  {
    title: "Enseñanza y Consultoría",
    description: "Capacitación y mentoría técnica",
    href: "/servicios/consultoria"
  }
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-light-blue-200">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-light-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Punto nube</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-light-blue-600 transition-colors bg-transparent">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-1">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-light-blue-50 hover:text-light-blue-600 focus:bg-light-blue-50 focus:text-light-blue-600"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="#about" className="text-gray-600 hover:text-light-blue-600 transition-colors">
              Acerca de
            </a>
            <Link href="/blog" className="text-gray-600 hover:text-light-blue-600 transition-colors">
              Blog
            </Link>
            <a href="#contact" className="text-gray-600 hover:text-light-blue-600 transition-colors">
              Contacto
            </a>
          </div>
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <button aria-label="Abrir menú" className="p-2 rounded-md text-gray-700 hover:bg-light-blue-50 focus:outline-none focus:ring-2 focus:ring-light-blue-400">
                  <Menu className="h-7 w-7" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-8">
                <DrawerTitle className="sr-only">Menú principal</DrawerTitle>
                <DrawerClose asChild>
                  <button aria-label="Cerrar menú" className="absolute top-6 right-6 p-2 rounded-md text-gray-700 hover:bg-light-blue-50 focus:outline-none focus:ring-2 focus:ring-light-blue-400">
                    <span className="sr-only">Cerrar menú</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </DrawerClose>
                <div className="flex flex-col items-center space-y-8 text-2xl font-semibold">
                  <Link href="/" className="text-gray-800 hover:text-light-blue-600 transition-colors" onClick={() => (document.activeElement instanceof HTMLElement && document.activeElement.blur())}>Inicio</Link>
                  <div className="flex flex-col items-center space-y-4">
                    {services.map((service) => (
                      <Link key={service.title} href={service.href} className="text-gray-800 hover:text-light-blue-600 transition-colors text-xl" onClick={() => (document.activeElement instanceof HTMLElement && document.activeElement.blur())}>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                  <a href="#about" className="text-gray-800 hover:text-light-blue-600 transition-colors text-xl" onClick={() => (document.activeElement instanceof HTMLElement && document.activeElement.blur())}>Acerca de</a>
                  <Link href="/blog" className="text-gray-800 hover:text-light-blue-600 transition-colors text-xl" onClick={() => (document.activeElement instanceof HTMLElement && document.activeElement.blur())}>Blog</Link>
                  <a href="#contact" className="text-gray-800 hover:text-light-blue-600 transition-colors text-xl" onClick={() => (document.activeElement instanceof HTMLElement && document.activeElement.blur())}>Contacto</a>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
