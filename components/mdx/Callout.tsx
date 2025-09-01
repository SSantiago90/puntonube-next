import { Info, Lightbulb, TriangleAlert } from 'lucide-react';

interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'tip' | 'warning';
}

const calloutConfig = {
  info: {
    icon: <Info className="h-5 w-5 text-blue-500" />,
    className: 'border-blue-200 bg-blue-50 text-blue-800',
  },
  tip: {
    icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
    className: 'border-yellow-200 bg-yellow-50 text-yellow-800',
  },
  warning: {
    icon: <TriangleAlert className="h-5 w-5 text-red-500" />,
    className: 'border-red-200 bg-red-50 text-red-800',
  },
};

export function Callout({ children, type = 'info' }: CalloutProps) {
  const { icon, className } = calloutConfig[type];

  return (
    <div
      className={`my-6 flex items-start gap-4 rounded-lg border p-4 ${className}`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="prose-p:my-0 prose-a:text-current hover:prose-a:text-blue-600">
        {children}
      </div>
    </div>
  );
}
