'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';
import { Mail, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({
        title: '¡Mensaje enviado!',
        description:
          'Gracias por contactarnos. Te responderemos a la brevedad.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: `No se pudo enviar el mensaje. Inténtalo de nuevo más tarde. Mensaje: ${error}`,
        variant: 'destructive',
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Listo para comenzar tu proyecto? Hablemos y lo hacemos realidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-light-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Información de Contacto
                </CardTitle>
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
                    <p className="text-gray-600">+54 (343) 4571505</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-light-blue-50 rounded-full">
                    <SiWhatsapp className="h-6 w-6 text-light-blue-600" />
                  </div>
                  <div>
                    <a target="_blank" href={`https://wa.me/+5493434191727`}>
                      <p className="font-semibold text-gray-800">Whatsapp</p>
                      <p className="text-gray-600">+54 (343) 4191727</p>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-light-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Envíanos un Mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tu mensaje"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-light-blue-600 hover:bg-light-blue-700 text-white"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? 'Enviando...'
                        : 'Enviar Mensaje'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
