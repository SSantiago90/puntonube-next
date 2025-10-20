import {
  SiInsta360,
  SiInstagram,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons';
import { Cloud, Globe, Heart, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Cloud className="h-8 w-8 text-light-blue-400" />
              <span className="text-2xl font-bold">Punto nube</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformamos ideas en soluciones digitales innovadoras.
              Especialistas en desarrollo web, IA, diseño gráfico y consultoría
              tecnológica.
            </p>
            <div className="flex space-x-4 pt-4">
              {/* <a href="#" className="text-gray-400 hover:text-light-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-light-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a> 
              <a href="#" className="text-gray-400 hover:text-light-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
              </a>
              */}
              <a
                href="https://www.instagram.com/creativo.nube/"
                className="text-gray-400 hover:text-light-blue-400 transition-colors"
                target="_blank"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-light-blue-400">
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/inteligencia-artificial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios de IA
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/diseno"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Diseño Gráfico
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-light-blue-400">
              Aprende
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/aprende"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cursos y Talleres
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-semibold my-6 text-light-blue-400">
              Nosotros
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Acerca de
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-light-blue-400">
              Contacto
            </h3>
            <div className="space-y-4">
              <a href="https://wa.me/5493434191727">
                <div className="flex items-center space-x-3">
                  <SiWhatsapp className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                  <div>
                    <div className="text-3xl font-bold text-white">
                      (343) 419 1727
                    </div>
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-3">
                <a
                  href="tel:+5493434571505"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white">(343) 457 1505</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white">hola@puntonube.com</div>
                  <div className="text-sm text-gray-400">Respuesta en 24h</div>
                </div>
              </div>

              <div className="space-x-3">
                <a href="https://www.instagram.com/creativo.nube/">
                  <div className="flex items-center space-x-3">
                    <SiInstagram className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                    <div>
                      <div className="text-white">Creativo.Nube</div>
                      <div className="text-sm text-gray-400">
                        Síguenos en redes
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>por el equipo de Punto nube</span>
            </div>

            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>© 2024 Punto nube. Todos los derechos reservados.</p>
              <p className="mt-1">Transformando el futuro digital</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
