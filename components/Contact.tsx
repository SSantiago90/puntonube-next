
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Listo para comenzar tu proyecto? Hablemos sobre cómo podemos ayudarte
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-light-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-light-blue-50 rounded-full">
                    <Mail className="h-6 w-6 text-light-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">contacto@puntonube.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-light-blue-50 rounded-full">
                    <Phone className="h-6 w-6 text-light-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Teléfono</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-light-blue-50 rounded-full">
                    <MapPin className="h-6 w-6 text-light-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Ubicación</p>
                    <p className="text-gray-600">Ciudad, País</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-light-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Tu nombre"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-light-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Tu email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-light-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Tu mensaje"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-light-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-light-blue-600 hover:bg-light-blue-700 text-white"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
