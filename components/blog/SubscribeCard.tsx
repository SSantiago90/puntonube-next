import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SubscribeCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Suscríbete para ser el primero en recibir nuestros artículos en tu
        casilla de mail
      </h3>
      <div className="flex space-x-2">
        <Input type="email" placeholder="Tu email" className="flex-grow" />
        <Button className="bg-light-blue-500 hover:bg-light-blue-600 text-white">
          Suscribirse
        </Button>
      </div>
    </div>
  );
};

export default SubscribeCard;
