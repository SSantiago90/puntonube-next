import { Archive, Calendar, ChevronDown } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface BlogSecondaryMenuProps {
  posts: Array<{
    slug: string;
    title: string;
    category: string;
    date: string;
  }>;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedMonth: string;
  onSelectMonth: (month: string) => void;
}

const formatMonth = (month: string) => {
  const [year, monthNum] = month.split('-');
  const date = new Date(parseInt(year), parseInt(monthNum) - 1);
  return date.toLocaleString('es-AR', { month: 'long', year: 'numeric' });
};

const BlogSecondaryMenu = ({
  posts,
  selectedCategory,
  onSelectCategory,
  selectedMonth,
  onSelectMonth,
}: BlogSecondaryMenuProps) => {
  const categoryCounts = posts.reduce(
    (acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const archiveCounts = posts.reduce(
    (acc, post) => {
      const [year, month] = post.date.split('-');
      const key = `${year}-${month}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Archive className="w-4 h-4" />
        <span className="font-medium">Categorías:</span>
        <Badge
          onClick={() => onSelectCategory('All')}
          className={cn(
            'cursor-pointer bg-sky-100 text-sky-800 hover:bg-sky-200',
            selectedCategory === 'All' &&
              'bg-sky-600 text-white hover:bg-sky-700'
          )}
        >
          All ({posts.length})
        </Badge>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <Badge
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              'cursor-pointer bg-sky-100 text-sky-800 hover:bg-sky-200',
              selectedCategory === category &&
                'bg-sky-600 text-white hover:bg-sky-700'
            )}
          >
            {category} ({count})
          </Badge>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>
              {selectedMonth === 'All' ? 'Archivo' : formatMonth(selectedMonth)}
            </span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onSelectMonth('All')}>
            Todos los meses ({posts.length})
          </DropdownMenuItem>
          {Object.entries(archiveCounts).map(([month, count]) => (
            <DropdownMenuItem key={month} onClick={() => onSelectMonth(month)}>
              {formatMonth(month)} ({count})
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BlogSecondaryMenu;
