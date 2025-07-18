import {
  Cloud,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
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
                href="#"
                className="text-gray-400 hover:text-light-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
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
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
            <h3 className="text-lg font-semibold my-6 text-light-blue-400">
              Empresa
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
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-white">
                    +1 (555) 123-4567
                  </div>
                  <div className="text-sm text-gray-400">
                    Lun - Vie: 8:00 - 18:00
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white">hola@puntonube.com</div>
                  <div className="text-sm text-gray-400">Respuesta en 24h</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white">123 Tech Street</div>
                  <div className="text-sm text-gray-400">
                    Ciudad Digital, CD 12345
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-light-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white">www.puntonube.com</div>
                  <div className="text-sm text-gray-400">Síguenos online</div>
                </div>
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
