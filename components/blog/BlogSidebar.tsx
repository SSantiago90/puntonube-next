import { Archive, Calendar, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BlogSidebarProps {
  posts: Array<{
    slug: string;
    title: string;
    category: string;
    date: string;
  }>;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const BlogSidebar = ({
  posts,
  selectedCategory,
  onSelectCategory,
}: BlogSidebarProps) => {
  const categoryCounts = posts.reduce(
    (acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="space-y-6 sticky top-24 ">
      {/* Recent Posts */}
      <Card className="shadow-lg border-0 bg-sky-600">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold  text-sky-200  flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Posts Recientes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {posts.slice(0, 5).map((post) => (
            <Link
              key={post.slug} // Use slug for key
              href={`/blog/${post.slug}`}
              className="block p-2 -m-2 rounded-md hover:bg-sky-700 transition-colors"
            >
              <div className="border-b border-sky-500/50 last:border-b-0 pb-2 last:pb-0">
                <h4 className="font-medium text-sky-100 text-sm leading-tight mb-2 line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-sky-300">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xs text-white opacity-60"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="shadow-lg border-0 bg-sky-600">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold  text-sky-200  flex items-center">
            <Archive className="w-5 h-5 mr-2" />
            Categorías
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant={'ghost'}
            onClick={() => onSelectCategory('All')}
            className={cn(
              'w-full justify-start text-sky-100 hover:bg-sky-700 hover:text-white',
              selectedCategory === 'All' &&
                'bg-white text-sky-700 hover:bg-white/90 hover:text-sky-700'
            )}
          >
            <span className="text-sm">All</span>
            <Badge
              variant="secondary"
              className="ml-auto bg-light-blue-100 text-light-blue-700"
            >
              {posts.length}
            </Badge>
          </Button>
          {Object.entries(categoryCounts).map(([category, count]) => (
            <Button
              key={category}
              variant={'ghost'}
              onClick={() => onSelectCategory(category)}
              className={cn(
                'w-full justify-start text-sky-100 hover:bg-sky-700 hover:text-white',
                selectedCategory === category &&
                  'bg-white text-sky-700 hover:bg-white/90 hover:text-sky-700'
              )}
            >
              <span className="text-sm">{category}</span>
              <Badge
                variant="secondary"
                className="ml-auto bg-light-blue-100 text-light-blue-700"
              >
                {count}
              </Badge>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter signup */}
      <Card className="hidden shadow-lg border-0 bg-gradient-to-br from-light-blue-50 to-light-blue-100">
        <CardContent className="p-6 text-center">
          <h3 className="font-semibold text-gray-800 mb-2">
            ¡Mantente actualizado!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Recibe nuestros últimos artículos directamente en tu email.
          </p>
          <button className="w-full bg-light-blue-600 hover:bg-light-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
            Suscribirse
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
